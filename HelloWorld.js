function helloWorld(name) {
  // default name is "world";
  name = name || 'world';
  console.log('Hello, ' + name + '!');
}

helloWorld();
