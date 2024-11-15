const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const app = express();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for the redirection URL
readline.question('Enter the link to redirect (without https://): ', inputUrl => {
    const TARGET_URL = `https://${inputUrl}`;
    console.log(`Users will be redirected to: ${TARGET_URL}`);
    readline.close();

    // Enable trust proxy if your app is behind a proxy
    app.set('trust proxy', true);

    // Endpoint to log client public IP and redirect
    app.get('/', async (req, res) => {
        try {
            // Get the client's IP address
            const clientIP = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

            // Log the IP address with a timestamp
            const logEntry = `Timestamp: ${new Date().toISOString()} - IP: ${clientIP}\n`;
            const logDirPath = path.join(__dirname, 'public', 'uploads');
            const logFilePath = path.join(logDirPath, 'log.txt');

            // Ensure the directory exists
            if (!fs.existsSync(logDirPath)) {
                fs.mkdirSync(logDirPath, { recursive: true });
            }

            // Append log entry
            fs.appendFile(logFilePath, logEntry, (err) => {
                if (err) {
                    console.error('Error writing to log file:', err);
                    return res.status(500).json({ message: 'Failed to log IP' });
                }
                console.log(`Logged IP: ${clientIP}`);

                // Redirect the user to the specified URL after logging
                res.redirect(TARGET_URL);
            });
        } catch (error) {
            console.error('Error logging IP:', error);
            res.status(500).json({ message: 'Failed to log IP' });
        }
    });

    // Start the server on port 3000
    const PORT = 3000;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});