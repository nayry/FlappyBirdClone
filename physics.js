import Matter from "matter-js";
import { Dimensions } from 'react-native'

import { getObstaclesParams } from "./random";

const windowW = Dimensions.get('window').width

const Physics = (entities, {touches, time, dispatch}) => {

    let engine = entities.physics.engine;

    touches.filter(t => t.type === 'press').forEach(t => {
        Matter.Body.setVelocity(entities.Bird.body, {
            x: 0,
            y: -5
        })
    });

    Matter.Engine.update(engine, time.delta);

    for (let i = 1; i <= 2; i++) {

        if (entities[`Obstacle${i}Top`].body.bounds.max.x <= 50 && !entities[`Obstacle${i}Top`].point) {
            entities[`Obstacle${i}Top`].point = true
            dispatch({ type: 'new_point' })

        }


        if (entities[`Obstacle${i}Top`].body.bounds.max.x <= 0) {
            const pipeSizePos = getObstaclesParams(windowW * 0.8);

            Matter.Body.setPosition(entities[`Obstacle${i}Top`].body, pipeSizePos.pipeTop.pos)
            Matter.Body.setPosition(entities[`Obstacle${i}Bottom`].body, pipeSizePos.pipeBottom.pos)

            entities[`Obstacle${i}Top`].point = false
        }

        Matter.Body.translate(entities[`Obstacle${i}Top`].body, { x: -3, y: 0 })
        Matter.Body.translate(entities[`Obstacle${i}Bottom`].body, { x: -3, y: 0 })
    }

    Matter.Events.on(engine, 'collisionStart', (event) => {
        dispatch({ type: 'game_over' })
    })

    return entities;
}

export default Physics;