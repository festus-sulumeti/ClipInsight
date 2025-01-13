import React from 'react';

const Sidebar = ({ history }) => {
    return (
        <div className="w-1/4 bg-gray-200 p-4 h-full overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Search History</h2>
            <ul className="space-y-2">
                {history.map((item, index) => (
                    <li key={index} className="p-2 bg-white rounded shadow">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
