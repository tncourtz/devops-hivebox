// Import the 'express' module
import express, { Request, Response } from 'express';
import { printVersionAndExit } from './utils/version';
// Create an Express application
const app = express();

// Set the port number for the server
const port: number = 3000;

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
  printVersionAndExit();
});