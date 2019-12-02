let system;

function setup() {
    createCanvas(1366, 800);
    system = new ParticleSystem(createVector(250, 50));
}

function draw() {
    {
        // ellipse(mouseX, mouseY, 12, 12);
        // if (mouseIsPressed)
        //     fill(0);
        // else
        //     fill(255);
        // noStroke();
            
    }
    background(51);
    system.addParticle();
    system.run();
}

let Particle = function (position) {
    this.acceleration = createVector(0, 0.1);
    this.velocity = createVector(random(-3, 3), random(-3, 0));
    this.position = position.copy();
    this.lifespan = 300;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
  };
  
  // Method to update position
  Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };
  
  // Method to display
  Particle.prototype.display = function() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(300, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  };
  
  // Is the particle still useful?
  Particle.prototype.isDead = function(){
    return this.lifespan < 0;
  };
  
  let ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
  };
  
  ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
  };
  
  ParticleSystem.prototype.run = function() {
    for (let i = this.particles.length-1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };
  