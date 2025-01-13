
import React from 'react';

const SummaryDisplay = ({ summary }) => {
    return (
        <div className="mt-4 p-4 border border-gray-300 rounded w-full max-w-md mx-auto bg-white shadow">
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p className="text-gray-700">{summary}</p>
        </div>
    );
};

export default SummaryDisplay;