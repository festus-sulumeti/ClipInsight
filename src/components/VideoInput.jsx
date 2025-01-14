import React, { useState } from 'react';

const VideoInput = ({ onFetchSummary }) => {
    const [videoId, setVideoId] = useState('');

    const handleFetchSummary = () => {
        if (videoId) {
            onFetchSummary(videoId);
        } else {
            alert('Please enter a YouTube Video ID');
        }
    };

    return (
        <div className="h-screen flex bg-gray-900 text-white">
            <main className="flex-1 flex flex-col items-center justify-center bg-gray-900">
                <h1 className="text-2xl font-bold mb-4">What can I help with?</h1>
                <div className="relative">
                    <input
                        type="text"
                        value={videoId}
                        onChange={(e) => setVideoId(e.target.value)}
                        placeholder="Enter YouTube Video ID"
                        className="bg-gray-800 text-gray-300 w-96 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button
                        onClick={handleFetchSummary}
                        className="absolute top-0 right-0 mt-4 mr-4 text-purple-600"
                    >
                        ⮕
                    </button>
                </div>
            </main>
        </div>
    );
};

export default VideoInput;
