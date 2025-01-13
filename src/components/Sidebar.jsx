import React from 'react';

const Sidebar = ({ history }) => {
    return (
        <div className="w-1/4 bg-gray-200 p-6 h-full overflow-y-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Search History</h2>
            <ul className="space-y-4">
                {history.map((item, index) => (
                    <li key={index} className="p-3 bg-white rounded-lg shadow-sm">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
