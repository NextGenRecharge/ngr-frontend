import { Layout } from 'antd'
import React, { useRef, useState } from 'react'
import { UserOutlined } from '@ant-design/icons'
import logo from "../../asset/purple_logo.png"
import { Outlet, useNavigate } from 'react-router-dom'
import Footer1 from '../Footer/Footer'
import Navigation from '../NavigationBar/Navigation'
import "./WithNavbar.css"
import SideBar from '../SideBar/SideBar'
import HomeIcon from "../../asset/icons/home_icon.svg"
import Dashboard from "../../asset/icons/dashboard_icon.svg"
import SettingIcon from "../../asset/icons/setting.svg"
import RefferralIcon from "../../asset/icons/referral.svg"

const { Footer } = Layout;

const sidebarData = [
    {
        "label": "Home",
        "path": "/home",
        "icon": HomeIcon
    },
    {
        "label": "Dashboard",
        "path": "/dashboard",
        "icon": Dashboard,
    },
    {
        "label": "My Referrals",
        "path": "/referrals",
        "icon": RefferralIcon
    },
    {
        "label": "Settings",
        "path": "/settings",
        "icon": SettingIcon
    },
]

const WithNavbar = () => {
    const mainRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate()
    const [activeSideBar, setActiveSideBar] = useState("")

    const handleScroll = (e) => {
        if (e.target.scrollTop !== 0) {
            if (!isScrolled) {
                setIsScrolled(true)
            }
        } else {
            setIsScrolled(false)
        }
    }

    function handleSideSelection(item) {
        console.log('item', item)
        setActiveSideBar(item.path)
        // navigate(item.path)
    }
    function handleNavSelection(item) {
        console.log('item', item)
        // navigate(item.path)
    }

    return (
        <Layout onScroll={handleScroll} className="flex flex-col dashboard-page-container">
            <div className={"px-3 h-[70px] sticky top-0 z-[1] w-full flex items-center bg-transparent pt-2 pb-1 " + (isScrolled ? "sticky-navigation" : "")}>
                <img src={logo} alt="Logo" className="header-logo" />
                <div className="select-none flex-1 h-full pr-10">
                    <Navigation
                        onItemClick={handleNavSelection}
                        containerClass={("menu-navigation-bar h-full ") + (isScrolled ? "sticky-nav" : "")}
                        itemClass={("menu-navigation-item ") + (isScrolled ? "sticky-nav" : "")}
                        activeClass={("active-navigation ") + (isScrolled ? "sticky-nav" : "")}
                    />
                </div>
                {/* <div className="header-icons">
                    <UserOutlined
                        className="header-icon"
                        style={{ fontSize: "20px" }}
                    />
                </div> */}
            </div>
            <div className='bottom-main-container flex' ref={mainRef}>
                <div className=''>
                    <SideBar
                        sidebarData={sidebarData}
                        labelKey='label'
                        valueKey='path'
                        onSelect={handleSideSelection}
                        value={activeSideBar}
                    />
                </div>
                <div className='main-container'>
                    <Outlet />
                </div>
            </div>
            <Footer style={{ textAlign: "center" }}>
                <Footer1 />
            </Footer>
        </Layout>
    )
}

export default WithNavbar