import * as childProcess from "child_process";

export default function(io)
{
  // Spawn local server as a child process
  var localServerProcess = childProcess.spawn("./resources/app/dist/local_server/node.exe",
    ["./resources/app/dist/local_server/server.js"]);
  // var localServerProcess = childProcess.spawn("./dist/local_server/node.exe",
  //   ["./dist/local_server/server.js"])

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
