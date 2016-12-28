import * as childProcess from "child_process";

export default function(io)
{
  // Spawn local server as a child process
  var localServerProcess = childProcess.spawn("node.exe",
    ["./src/app/local_server/server.js"]);

  // Log local server stdout and stderr to client console
  localServerProcess.stdout.on("data", function(data)
  {
    console.log("Local Server OUT: " + data.toString());
  });
  localServerProcess.stderr.on("data", function(data)
  {
    console.log("Local Server ERR: " + data.toString());
  });

  // TODO Don't forget to change this to an environment variable
  return io.connect("http://localhost:3002", {query: "type=client"});
}
