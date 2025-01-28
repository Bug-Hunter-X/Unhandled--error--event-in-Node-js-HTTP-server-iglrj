# Unhandled 'error' event in Node.js HTTP server

This repository demonstrates an example of an unhandled 'error' event in a Node.js HTTP server and provides a solution to handle it gracefully.

## Bug
The `bug.js` file contains a Node.js HTTP server that lacks proper error handling.  When an error occurs during request processing, the server crashes without logging any details, resulting in downtime.

## Solution
The `bugSolution.js` file demonstrates how to handle the 'error' event using a `try...catch` block within the request listener or using error event listeners. This prevents the server from crashing and allows for logging or other actions to address the error.

## How to run
1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` to see the unhandled error and server crash.
4. Run `node bugSolution.js` to see the improved, error-handled server.