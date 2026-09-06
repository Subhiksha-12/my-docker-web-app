const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; font-family: Arial; padding-top: 50px;">
            <h1 style="color: #0e7490;">
                🚀 Web App Successfully Running inside Docker!
            </h1>
            <p>Node.js & Express application fully containerized.</p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});