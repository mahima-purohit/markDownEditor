const express = require('express');
const bodyParser = require('body-parser');
const { marked } = require('marked');
const cors = require('cors'); // Require CORS


const app = express();
const port = 3001;

app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());

app.post('/convert', (req, res) => {
    const { markdown } = req.body;
    const html = marked(markdown);
    res.send({ html });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
