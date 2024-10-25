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

    // Endpoint to log client public IP and redirect
    app.get('/', async (req, res) => {
        try {
            // Fetch the public IP using an external service
            const response = await axios.get('https://api.ipify.org?format=json');
            const clientIP = response.data.ip;

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
            console.error('Error fetching public IP:', error);
            res.status(500).json({ message: 'Failed to fetch public IP' });
        }
    });

    // Start the server on port 3000
    const PORT = 3000;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
