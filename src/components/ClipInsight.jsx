import React, { useState } from 'react';
import VideoInput from './VideoInput';
import SummaryDisplay from './SummaryDisplay';
import Sidebar from './Sidebar';
import { CogIcon } from '@heroicons/react/24/outline';

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
        <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar history={history} />
            <div className="flex-1 p-8 bg-gray-100 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-600">ClipInsight</h1>
                    <nav className="text-white p-4">
                        <div className="flex items-center space-x-3">
                            <CogIcon className="h-8 w-8 text-blue-600" />
                            <a
                                href="#"
                                className="text-sm block px-2 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                            >
                                Settings
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="mt-auto flex flex-col md:flex-row">
                    <div className="flex-1">
                        <VideoInput onFetchSummary={fetchSummary} />
                        {summary && <SummaryDisplay summary={summary} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClipInsight;
