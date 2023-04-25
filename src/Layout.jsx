import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    const [ButtonPop, setButtonPop] = useState(false);
    function navtoggle() {
        setButtonPop(!ButtonPop); // toggle the state of ButtonPop
    }
    return (
        <div >
            <div className='header'>
                <nav>
                    <ul>
                        <li >
                            <Link to="">Ubike</Link>
                        </li>
                        <li className='phonenone'>
                            <Link to="/about">使用說明</Link>
                        </li>
                        <li className='phonenone'>
                            <Link to="/about">收費方式</Link>
                        </li>
                        <li className='phonenone'>
                            <Link to="/about">站點資訊</Link>
                        </li >
                        <li className='phonenone'>
                            <Link to="/about">最新消息</Link>
                        </li>
                        <li className='phonenone'>
                            <Link to="/about">活動專區</Link>
                        </li>
                    </ul>
                    <ul >
                        <li className='phonenone'><button>登入</button></li>
                        <span className="material-symbols-outlined desktopnone" onClick={navtoggle}>
                            menu
                        </span>
                    </ul>
                </nav>
            </div>
            <div className={ButtonPop ? 'Sidebar active' : 'Sidebar'}>
                <ul>
                    <li>
                        <Link to="/about">使用說明</Link>
                    </li>
                    <li>
                        <Link to="/about">收費方式</Link>
                    </li>
                    <li>
                        <Link to="/about">站點資訊</Link>
                    </li>
                    <li>
                        <Link to="/about">最新消息</Link>
                    </li>
                    <li>
                        <Link to="/about">活動專區</Link>
                    </li>
                </ul>
                <button>登入</button>

            </div>
            <Outlet />
        </div>

    )
}

export default Layout