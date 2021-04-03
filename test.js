"use strict"

function logThis() {
  this.desc = "logger";
  console.log(this);
}

new logThis();