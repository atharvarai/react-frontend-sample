import React from 'react'
import Sidebar from './SideBar'
import Main from './MainPanel'
import RightPanel from './RightPanel'
import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <Main />
            <RightPanel />
        </div>
    )
}

export default Home
