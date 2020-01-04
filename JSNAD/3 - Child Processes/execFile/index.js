/*
child_process.execFile(file[, args][, options][, callback])[src]#
  - file <string> The name or path of the executable file to run.

  - args <string[]> List of string arguments.

  - options <Object>
    cwd <string> Current working directory of the child process.
    env <Object> Environment key-value pairs.
    encoding <string> Default: 'utf8'
    timeout <number> Default: 0
    maxBuffer <number> Largest amount of data in bytes allowed on stdout or stderr. If exceeded, the child process is terminated and any output is truncated. See caveat at maxBuffer and Unicode. Default: 200 * 1024.
    killSignal <string> | <integer> Default: 'SIGTERM'
    uid <number> Sets the user identity of the process (see setuid(2)).
    gid <number> Sets the group identity of the process (see setgid(2)).
    windowsHide <boolean> Hide the subprocess console window that would normally be created on Windows systems. Default: false.
    windowsVerbatimArguments <boolean> No quoting or escaping of arguments is done on Windows. Ignored on Unix. Default: false.
    shell <boolean> | <string> If true, runs command inside of a shell. Uses '/bin/sh' on UNIX, and process.env.ComSpec on Windows. A different shell can be specified as a string. See Shell Requirements and Default Windows Shell. Default: false (no shell).
    
  - callback <Function> Called with the output when process terminates.
    error <Error>
    stdout <string> | <Buffer>
    stderr <string> | <Buffer>

  - Returns: <ChildProcess>

The child_process.execFile() function is similar to child_process.exec() except that it does not spawn a 
shell by default. Rather, the specified executable file is spawned directly as a new process making it 
slightly more efficient than child_process.exec().
*/