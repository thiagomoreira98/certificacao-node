const { watch } = require('fs');

const options = {
  persistent: true, // default
  recursive: true,
  encoding: 'utf8' // default
}

let watcher = watch(__dirname, options, (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  
  if (filename) {
    console.log(`filename provided: ${filename}`);
  } else {
    console.log('filename not provided');
  }
});

watcher.close();

watcher.on('error', (err) => {
  console.log(err);
});

watcher.on('close', () => {
  console.log('watcher closed');
});