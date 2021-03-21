class Chain {
    constructor(body1, body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 100,
            stiffness : 0.7
        }
        
         this.chain = Constraint.create(options);
         World.add (world, this.chain);
    }
    display() {
        var birdPos = this.chain.bodyA.position
        var log6Pos = this.chain.bodyB.position
        line(birdPos.x, birdPos.y, log6Pos.x, log6Pos.y);
    }
}