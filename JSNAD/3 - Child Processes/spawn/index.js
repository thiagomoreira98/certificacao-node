/*
child_process.spawn(command[, args][, options])
  -  Spawns a new process using the given command, with command line arguments in args.

  - command <string> The command to run.

  - args <string[]> List of string arguments.
  
  - options <Object>
    cwd <string> Current working directory of the child process.
    env <Object> Environment key-value pairs.
    argv0 <string> Explicitly set the value of argv[0] sent to the child process. This will be set to command if not specified.
    stdio <Array> | <string> Child's stdio configuration (see options.stdio).
    detached <boolean> Prepare child to run independently of its parent process. Specific behavior depends on the platform, see options.detached).
    uid <number> Sets the user identity of the process (see setuid(2)).
    gid <number> Sets the group identity of the process (see setgid(2)).
    shell <boolean> | <string> If true, runs command inside of a shell. Uses '/bin/sh' on UNIX, and process.env.ComSpec on Windows. A different shell can be specified as a string. See Shell Requirements and Default Windows Shell. Default: false (no shell).
    windowsVerbatimArguments <boolean> No quoting or escaping of arguments is done on Windows. Ignored on Unix. This is set to true automatically when shell is specified. Default: false.
    windowsHide <boolean> Hide the subprocess console window that would normally be created on Windows systems. Default: false.
    
  - Returns: <ChildProcess>
*/

const { spawn, spawnSync } = require("child_process");

(async () => {
  try {
    await spawnWithAsyncAwait();
    console.log('------------------------------------------------------------');
    spawnNodeVersion();
  } catch (ex) {
    console.error("catch: ", ex);
  }
})();

/* --------------------------------------------------------------------- */

function spawnNodeVersion() {
  console.log('spawnNodeVersion');
  const nodeVersion = spawn("node", ['--version']);

  nodeVersion.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });

  nodeVersion.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
  });

  nodeVersion.on("close", code => {
    console.log(`child process exited with code ${code}`);
  });
}

/* --------------------------------------------------------------------- */

async function spawnWithAsyncAwait() {
  console.log('spawnWithAsyncAwait');
  let result = await spawnSync("node", ['--help']);
  console.log('result: ', result);
  console.log('stdout');
  console.log(result.stdout.toString());
}