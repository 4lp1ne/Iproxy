# IpRoxy

## IP Logger & Redirect Server

This project is a simple Node.js application that logs the public IP of incoming requests and then redirects users to a specified URL. The target URL is set up interactively upon server startup.

## Features

- Logs each visitor's public IP address with a timestamp.
- Redirects users to a target URL, entered when the server starts.
- Stores IP logs in a local file for easy access and analysis.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [npm](https://www.npmjs.com/) package manager (comes with Node.js)

## Installation

1. Clone the repository:
   `bash
   git clone https://github.com/4lp1ne/Iproxy.git
   cd ip-logger-redirect

3. Install dependencies:

npm install



Usage

1. Run the server: Start the server with:

node server.js


2. Enter the Redirect URL:

When prompted, enter the URL you want users to be redirected to (without https://).

Example: If you enter example.com, the server will redirect users to https://example.com.



3. Access the server:

By default, the server runs on http://localhost:3000.

Visiting this URL will:

Log the visitor's public IP address.

Redirect the visitor to the target URL you specified.





Project Structure

ip-logger-redirect/
├── server.js              # Main application file
├── public/
│   └── uploads/
│       └── log.txt        # IP logs are stored here
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation

Logging Details

Each IP log entry includes the public IP address and a timestamp in log.txt.

Log file location: public/uploads/log.txt

The log format is as follows:

Timestamp: YYYY-MM-DDTHH:MM:SS.sssZ - IP: xxx.xxx.xxx.xxx


Example Output

When a request is made to the server, an entry is created in log.txt like this:

Timestamp: 2024-10-25T13:45:30.000Z - IP: 203.0.113.45

Dependencies

express: Web server framework for Node.js.

axios: HTTP client for making external requests (used to retrieve public IPs).

path: Node.js module for handling and transforming file paths.

fs: Node.js file system module to interact with log files.


License

This project is licensed under the MIT License. See the LICENSE file for details.

