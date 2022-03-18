import  Matter from "matter-js"
import { Dimensions } from "react-native";
import { getObstaclesParams } from "./random";
import Bird from "./objects/Bird";
import Floor from "./objects/Floor";
import Obstacle from "./objects/Obstacle";

const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;

export default Entities => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0.4

    const obstacle1 = getObstaclesParams(-windowW*0.1);

    const obstacle2 = getObstaclesParams(windowW*0.8);

    return {
        physics: {engine, world},
        Bird: Bird(world, 'red', {x: 50, y: 300}, {height: 40, width: 60}),
        Floor: Floor(world, 'black', {x: windowW/2, y: windowH}, {height: 40, width: windowW}),

        Obstacle1Top: Obstacle(world, 'Obstacle1Top', 'red', obstacle1.pipeTop.pos, obstacle1.pipeTop.size),
        Obstacle1Bottom: Obstacle(world, 'Obstacle1Bottom', 'red', obstacle1.pipeBottom.pos, obstacle1.pipeBottom.size),

        Obstacle2Top: Obstacle(world, 'Obstacle2Top', 'red', obstacle2.pipeTop.pos, obstacle2.pipeTop.size),
        Obstacle2Bottom: Obstacle(world, 'Obstacle2Bottom', 'red', obstacle2.pipeBottom.pos, obstacle2.pipeBottom.size),


    }
}