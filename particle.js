function Particle(x, y, hue, exploder) {
    this.position = createVector(x, y);
    this.exploder = exploder;
    this.lifespan = 255;
    this.hue = hue;

    if (this.exploder) {
        this.velocity = createVector(0, random(-12, -8));
    } else {
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(2, 10));
    }
    this.acceleration = createVector(0, 0);

    this.applyForce = function (force) {
        this.acceleration.add(force);
    }

    this.update = function () {
        if (!this.exploder) {
            this.velocity.mult(0.9);
            this.lifespan -= random(-1, 10);
        }
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.done = function() {
        if (this.lifespan < 0) {
            return this.done;
        }
    }

    this.show = function () {
        colorMode(HSB);
        if (!this.exploder) {
            strokeWeight(2);
            stroke(hue, 255, 255, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(hue, 255, 255);
        }
        point(this.position.x, this.position.y);
    }
}