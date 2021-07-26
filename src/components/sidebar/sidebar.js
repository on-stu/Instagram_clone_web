import React, { memo } from 'react'
import useUser from '../../hooks/use-user'
import Suggestions from './suggestions';
import User from './user';

function SideBar() {
    const {user:{
        fullName, userId, username, following
    }} = useUser();
    
    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} following={following}/>
        </div>
    )
}

export default memo(SideBar)
