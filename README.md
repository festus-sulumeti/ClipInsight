# ClipInsight

ClipInsight is a web application that provides concise summaries of YouTube videos, helping users quickly grasp key insights from video content. Gain valuable understanding without watching the entire video.

## Features

- Fetch YouTube video details using the YouTube Data API.
- Generate concise summaries of video descriptions.
- Responsive and user-friendly interface using React and Tailwind CSS.

## Prerequisites

- Node.js and npm installed on your machine.
- YouTube Data API key.

## Setup

1. Clone the repository:

```sh
git clone https://github.com/festus-sulumeti/ClipInsight.git
cd ClipInsight
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add your YouTube Data API key:

```env
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
PORT=3000
```

4. Start the backend server:

```sh
node server.js
```

5. Start the Vite development server:

```sh
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000` to use the ClipInsight web application.

## Project Structure

```
ClipInsight/
├── public/
├── src/
│   ├── components/
│   │   ├── SummaryDisplay.jsx
│   │   ├── VideoInput.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .gitignore
├── package.json
├── server.js
├── tailwind.config.js
└── README.md
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- Express.js
- Axios

## License

This project is licensed under the MIT License.
