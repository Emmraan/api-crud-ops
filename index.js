const app = require("./app");
const portsToTry = [3000, 4000, 8000, 8001, 8080, 5000, 5500];
let chosenPort;

// Find the first available port
for (const port of portsToTry) {
  if (!chosenPort) {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    chosenPort = port;
  }
}

if (!chosenPort) {
  console.error(
    `All ports are in use. Could not start the server. Make sure one of the following ports is available: ${portsToTry}`
  );
}