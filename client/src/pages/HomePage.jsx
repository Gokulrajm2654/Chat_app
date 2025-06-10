import React, { useState } from 'react';

import ChatContainer from '../components/ChatContainer';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';


const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(false);


    return (
        <div className='w-full h-screen sm:px-12 sm:py-6 bg-black'>
            <div
                className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 gap-0 relative ${selectedUser
                    ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
                    : 'md:grid-cols-2'
                    }`}
            >
                <Sidebar />
                <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            </div>
        </div>
    );
};

export default HomePage;
