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
        <div className="flex flex-col items-center">
            <input
                type="text"
                value={videoId}
                onChange={(e) => setVideoId(e.target.value)}
                placeholder="Enter YouTube Video ID"
                className="p-2 border border-gray-300 rounded mb-4 w-full max-w-md"
            />
            <button
                onClick={handleFetchSummary}
                className="bg-blue-500 text-white p-2 rounded w-full max-w-md hover:bg-blue-600 transition"
            >
                Get Summary
            </button>
        </div>
    );
};

export default VideoInput;
