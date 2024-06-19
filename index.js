import app from "./app.js";
import { createServer } from "http";
const portsToTry = [3000, 4000, 8000, 8001, 8080, 5000, 5500];
(async () => {
  for (const port of portsToTry) {
    const availablePort = await new Promise(resolve => {
      const server = createServer(app)
        .listen(port)
        .on('listening', () => server.close(() => resolve(port)))
        .on('error', err => resolve(err.code === 'EADDRINUSE' ? null : err));
    });

    if (typeof availablePort === 'number') {
      app.listen(availablePort, () => console.log(`Server is running on http://localhost:${availablePort}`));
      return;
    } else if (availablePort instanceof Error) {
      console.error(`Error while trying to listen on port ${port}:`, availablePort);
      return;
    }
  }
  console.error(`All ports are in use. Could not start the server. Make sure one of the following ports is available: ${portsToTry}`);
})();
