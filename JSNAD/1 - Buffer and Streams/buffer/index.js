/*
  Class Method: Buffer.alloc(size[, fill[, encoding]])
    - size <integer> The desired length of the new Buffer.
    - fill <string> | <Buffer> | <integer> A value to pre-fill the new Buffer with. Default: 0.
    - encoding <string> If fill is a string, this is its encoding. Default: 'utf8'.

  Allocates a new Buffer of size bytes. If fill is undefined, the Buffer will be zero-filled.
*/

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);
console.log('zero-filled', buf1);

// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc(10, 1);
console.log('filled with length 10', buf2);

/* 
  Class Method: Buffer.allocUnsafe(size)
    - size <integer> The desired length of the new Buffer. (value between 0 and buffer.constants.MAX_LENGTH)

  Creates an uninitialized buffer of length 10.
  This is faster than calling Buffer.alloc() but the returned
  Buffer instance might contain old data that needs to be
  overwritten using either fill() or write(). 

  When using Buffer.allocUnsafe() to allocate new Buffer instances,
  allocations under 4KB are sliced from a single pre-allocated Buffer.
  This allows applications to avoid the garbage collection overhead of
  creating many individually allocated Buffer instances. This approach
  improves both performance and memory usage by eliminating the need to
  track and clean up as many persistent objects.
*/
const buf3 = Buffer.allocUnsafe(10);
console.log('containing old data', buf3);

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from([1, 2, 3]);
console.log('specifying buffer positions', buf4);

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
const buf5 = Buffer.from('tést');
console.log('buffer from utf8 strings', buf5);

// Creates a Buffer containing Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf6 = Buffer.from('tést', 'latin1');
console.log('buffer from another language', buf6);