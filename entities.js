import  Matter from "matter-js"
import Bird from "./objects/Bird";

export default Entities => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0.4

    return {
        physics: {engine, world},
        Bird: Bird(world, 'red', {x: 50, y: 300}, {height: 40, width: 60})
    }
}