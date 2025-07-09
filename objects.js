/*
  Objects 
  creating an object via object literal notation


*/

let ball = {
  color: 'red',
  shape: 'round',
  canBounce: true,
  bounce: function () {
    // anonymous function
    if (this.canBounce) {
      console.log('bouncing....');
    } else {
      console.log('no can do bro');
    }
  },
};

console.log(ball);

/* get */
/* dot notation */
console.log(ball.shape);
/* bracket notation */
console.log(ball['shape']);

let key = 'shape';
console.log(ball[key]);

/* set */
/* dot notation */
ball.color = 'blue';
console.log(ball);
/* bracket notation */
ball['canBounce'] = false;
console.log(ball);

/* invoke method */
ball.bounce();

ball['bounce']();
