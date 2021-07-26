import React, { useEffect } from 'react'
import Header from '../components/header';
import SideBar from '../components/sidebar/sidebar';
import Timeline from '../components/timeline';

function DashBoard() {
    useEffect(() => {
        document.title = 'Instagram';
    }, [])

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-5xl">
                <Timeline />
                <SideBar />
            </div>
        </div>
    )
}

export default DashBoard
