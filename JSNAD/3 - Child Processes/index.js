/*
  - child_process.spawn() method spawns the child process asynchronously, without blocking the Node.js 
  event loop. The child_process.spawnSync() function provides equivalent functionality in a synchronous 
  manner that blocks the event loop until the spawned process either exits or is terminated.

  - child_process.exec(): spawns a shell and runs a command within that shell, passing the stdout and stderr 
  to a callback function when complete.

  - child_process.execSync(): a synchronous version of child_process.exec() that will block the Node.js 
  event loop.

  - child_process.execFile(): similar to child_process.exec() except that it spawns the command directly 
  without first spawning a shell by default.

  - child_process.execFileSync(): a synchronous version of child_process.execFile() that will block the 
  Node.js event loop.

  - child_process.fork(): spawns a new Node.js process and invokes a specified module with an IPC 
  communication channel established that allows sending messages between parent and child.

  Spawning .bat and .cmd files on Windows:
    The importance of the distinction between child_process.exec() and child_process.execFile() can vary 
    based on platform. On Unix-type operating systems (Unix, Linux, macOS) child_process.execFile() can be 
    more efficient because it does not spawn a shell by default. On Windows, however, .bat and .cmd files 
    are not executable on their own without a terminal, and therefore cannot be launched using 
    child_process.execFile(). When running on Windows, .bat and .cmd files can be invoked using 
    child_process.spawn() with the shell option set, with child_process.exec(), or by spawning cmd.exe 
    and passing the .bat or .cmd file as an argument (which is what the shell option and child_process.exec() do).
    In any case, if the script filename contains spaces it needs to be quoted.
*/

// require('./exec');
require('./spawn');