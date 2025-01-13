import React, { useState } from 'react';
import VideoInput from './VideoInput';
import SummaryDisplay from './SummaryDisplay';

const ClipInsight = () => {
    const [summary, setSummary] = useState('');

    const fetchSummary = async (videoId) => {
        try {
            const videoResponse = await fetch(`/video/${videoId}`);
            const videoDetails = await videoResponse.json();
            const text = videoDetails.description;

            const summaryResponse = await fetch('/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });
            const summaryData = await summaryResponse.json();
            setSummary(summaryData.summary);
        } catch (error) {
            console.error('Error fetching summary:', error);
            alert('Error fetching summary');
        }
    };

    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">ClipInsight</h1>
            <VideoInput onFetchSummary={fetchSummary} />
            {summary && <SummaryDisplay summary={summary} />}
        </div>
    );
};

export default ClipInsight;
