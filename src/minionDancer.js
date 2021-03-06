var MinionDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.linedUp = false;
  this.timeBetweenSteps = 1500;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = ;
};

MinionDancer.prototype = Object.create(Dancer.prototype);
MinionDancer.prototype.constructor = MinionDancer; 

MinionDancer.prototype.oldStep = function() {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
};

MinionDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  if (!this.paired) {
    var newX = $('body').width() * Math.random();

    if (!this.linedUp) {
      var newY = $('body').height() * Math.random();    
    } else {
      var newY = this.lineUpPos;
    }

    this.$node.animate({
      left: newX,
      top: newY,
    }, this.timeBetweenSteps);
  }
};

MinionDancer.prototype.lineUp = function() {
  this.linedUp = true;
};
