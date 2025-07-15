const EventEmitter = require('events');

// Create a custom emitter object
const myEmitter = new EventEmitter();

// Listen for an event
myEmitter.on('greet', () => {
  console.log('Hello! Event received.');
});

// Emit (trigger) the event
myEmitter.emit('greet');
