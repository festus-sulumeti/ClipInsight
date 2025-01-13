const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos';

app.get('/video/:id', async (req, res) => {
    const videoId = req.params.id;
    try {
        const response = await axios.get(`${YOUTUBE_API_URL}?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`);
        const videoDetails = response.data.items[0].snippet;
        res.json(videoDetails);
    } catch (error) {
        res.status(500).send('Error fetching video details');
    }
});

app.post('/summarize', async (req, res) => {
    const { text } = req.body;
    try {
        // Replace with actual summarization logic or API call
        const summary = text.split(' ').slice(0, 50).join(' ') + '...';
        res.json({ summary });
    } catch (error) {
        res.status(500).send('Error generating summary');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
