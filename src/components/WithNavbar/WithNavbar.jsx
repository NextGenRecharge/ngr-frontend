import { Layout } from 'antd'
import React, { useCallback, useRef, useState } from 'react'
import { DashboardOutlined, HomeOutlined, SettingOutlined, TransactionOutlined } from '@ant-design/icons'
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
import { useLocation } from 'react-router-dom';

const { Footer } = Layout;

const sidebarData = [
    {
        key: '1',
        label: 'Home',
        path: "/home",
        icon: <HomeOutlined />,
    },
    {
        key: '2',
        label: 'Dashboard',
        icon: <DashboardOutlined />,
        children: [
            { key: '5', label: 'My Earnings', path: "/earnings", },
            { key: '3', label: 'My Referrals', path: "/referrals", },
            { key: '4', label: 'My Transactions', path: "/transactions", },
        ],
    },
    {
        key: '12',
        label: 'Settings',
        path: "/settings",
        icon: <SettingOutlined />,
    },
];

const WithNavbar = () => {
    const location = useLocation();
    const activePath = location.pathname;
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

    const handleSideSelection = useCallback((data) => {
        console.log('data.item.props.path', data.item.props.path)
        console.log('data', data);
        setActiveSideBar([data.key])
        navigate(data.item.props.path);
    }, [])

    function handleNavSelection(item) {
        console.log('item', item);
        navigate(item.path); // Enable route changes
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
            </div>
            <div className='bottom-main-container flex flex-1' ref={mainRef}>
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