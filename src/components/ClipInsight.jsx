import React, { useState } from 'react';
import VideoInput from './VideoInput';
import SummaryDisplay from './SummaryDisplay';
import Sidebar from './Sidebar';

const ClipInsight = () => {
    const [summary, setSummary] = useState('');
    const [history, setHistory] = useState([]);

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
            setHistory([...history, videoId]);
        } catch (error) {
            console.error('Error fetching summary:', error);
            alert('Error fetching summary');
        }
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar history={history} />
            <div className="flex-1 p-8 bg-gray-100">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">ClipInsight</h1>
                <VideoInput onFetchSummary={fetchSummary} />
                {summary && <SummaryDisplay summary={summary} />}
            </div>
        </div>
    );
};

export default ClipInsight;
