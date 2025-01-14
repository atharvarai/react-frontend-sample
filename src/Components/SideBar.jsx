import { useState } from 'react';
import './SideBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome, AiFillSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsFillBookFill } from 'react-icons/bs';

function SideBar() {
    const [show, setShow] = useState(false);

    return (
        <div className='sidebar-container'>
            <div className={show ? 'sidebar1' : 'sidebar'}>
                <ul>
                    <div className='main' onClick={() => setShow(!show)}>
                        <GiHamburgerMenu className='icon' />
                    </div>
                    <li>
                        <AiOutlineHome className='icon' />
                        {show ? "" : <h2>Home</h2>}
                    </li>
                    <li>
                        <CgProfile className='icon' />
                        {show ? "" : <h2>My Profile</h2>}
                    </li>
                    <li>
                        <AiFillSetting className='icon' />
                        {show ? "" : <h2>Settings</h2>}
                    </li>
                    <li>
                        <BsFillBookFill className='icon' />
                        {show ? "" : <h2>About us</h2>}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
