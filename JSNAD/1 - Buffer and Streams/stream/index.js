/*
  Types of Streams:
  There are four fundamental stream types within Node.js:

  1) Writable - streams to which data can be written (for example, fs.createWriteStream()).
  2) Readable - streams from which data can be read (for example, fs.createReadStream()).
  3) Duplex - streams that are both Readable and Writable (for example, net.Socket).
  4) Transform - Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).
*/

// WRITABLE
// require('./writable');

// READABLE
require('./readable');

// DUPLEX
// require('./duplex');

// TRANSFORM
// require('./transform');
