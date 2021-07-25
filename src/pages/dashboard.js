import React, { useEffect } from 'react'
import Header from '../components/header';
import SideBar from '../components/sidebar';
import Timeline from '../components/timeline';

function DashBoard() {
    useEffect(() => {
        document.title = 'Instagram';
    }, [])

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <Timeline />
                <SideBar />
            </div>
        </div>
    )
}

export default DashBoard
