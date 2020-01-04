/*
child_process.exec(command[, options][, callback])
  - Spawns a shell then executes the command within that shell, buffering any generated output.

  - command <string> The command to run, with space-separated arguments.

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
    
  - callback <Function> Called with the output when process terminates.
    error <Error>
    stdout <string> | <Buffer>
    stderr <string> | <Buffer>

  - Returns: <ChildProcess>
*/
const { exec, execSync } = require("child_process");

(async () => {
  try {
    await firstWayToUseExec();
    await executingBatFileWithExec();
    await execWithAsyncAwait();
    secondWayToUseExec();
  } catch (ex) {
    console.error("catch: ", ex);
  }
})();

/* --------------------------------------------------------------------- */

async function firstWayToUseExec() {
  return new Promise((resolve, reject) => {
    exec("ECHO executing child process 1", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec 1 error: ${error}`);
        return reject();
      }

      if (stderr) console.log(`stderr: ${stderr}`);

      console.log(`stdout: ${stdout}`);
      resolve();
    });
  });
}

/* --------------------------------------------------------------------- */

function secondWayToUseExec() {
  let echo = exec("ECHO executing child process 2");

  echo.stdout.on("data", stdout => {
    console.log(`stdout: ${stdout}`);
  });

  echo.stderr.on("data", stderr => {
    console.log(`stderr: ${stderr}`);
  });

  echo.on("error", error => {
    console.error(`exec 2 error: ${error}`);
  });

  echo.on("disconnect", () => {
    console.log("child process 2 disconnected");
  });

  echo.on("exit", (code, signal) => {
    console.log("child process 2 exited");
    console.log(`code: ${code}`);
    console.log(`signal: ${signal}`);
  });
}

/* --------------------------------------------------------------------- */

async function executingBatFileWithExec() {
  return new Promise((resolve, reject) => {
    exec("my.bat", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec bat file error: ${error}`);
        return reject();
      }

      if (stderr)
        console.log(`stderr: ${stderr}`);

      console.log(`stdout: ${stdout}`);
      resolve();
    });
  });
}

/* --------------------------------------------------------------------- */

/*
  Returns: <Buffer> | <string> The stdout from the command.
*/
async function execWithAsyncAwait() {
  let stdout = await execSync("ECHO executing child process with async await");
  console.log(stdout.toString())
}