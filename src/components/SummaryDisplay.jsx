import React from 'react';

const SummaryDisplay = ({ summary }) => {
    return (
        <div className="mt-4 p-4 border border-gray-300 rounded w-full max-w-md mx-auto bg-white shadow sm:mt-6 sm:p-6 md:mt-8 md:p-8 lg:mt-10 lg:p-10">
            <h2 className="text-xl font-bold mb-2 sm:text-2xl md:text-3xl lg:text-4xl">Summary</h2>
            <p className="text-gray-700 sm:text-lg md:text-xl lg:text-2xl">{summary}</p>
        </div>
    );
};

export default SummaryDisplay;