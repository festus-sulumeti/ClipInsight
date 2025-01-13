import React from 'react';

const SummaryDisplay = ({ summary }) => {
    return (
        <div className="mt-8 p-6 border border-gray-300 rounded-lg w-full max-w-md mx-auto bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="text-gray-700">{summary}</p>
        </div>
    );
};

export default SummaryDisplay;