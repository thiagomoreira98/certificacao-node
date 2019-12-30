const net = require('net');
const readline = require('readline');

if(process.argv[process.argv.length - 1] === 'server') {
  // server
  const server = net.createServer((socket) => {
    // duplex
    socket.on('data', (data) => {
      socket.write(data);
      console.log('Received from client: ' + data);
    });
  });
  server.listen(1337, '127.0.0.1');

} else {
  // client
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // duplex
  const client = new net.Socket();
  client.connect(1337, '127.0.0.1', () => {
    console.log('Connected');
    client.write('Hello, server!');
    rl.addListener('line', (line) => client.write(line));
  });

  client.on('data', (data) => {
    console.log('Received from server: ' + data);
  });

  client.on('close', () => {
    console.log('Connection closed');
  });
}