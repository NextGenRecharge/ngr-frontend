import React, { memo, useCallback, useMemo, useState } from 'react'
import "./SideBar.css"
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;
interface ISideBarProps {
    sidebarData: any[];
    labelKey?: string;
    valueKey?: string;
    onSelect?: Function;
    onParentToggle?: Function;
    containerClass?: string;
    itemClass?: string;
    labelClass?: string;
    iconClass?: string;
    value: any;
}


const SideBar = (props: ISideBarProps) => {

    const {
        sidebarData = [],
        containerClass = "",
        itemClass = "",
        iconClass = "",
        labelClass = "",
        labelKey = "label",
        valueKey = "path",
        onSelect,
        value
    } = props;

    const handleItemClick = useCallback((e) => {
        onSelect?.(e)
    }, [])

    return (
        <div className={`sidebar-container ${containerClass}`}>
            <Layout style={{ minHeight: '100vh' }} className='bg-transparent'>
                <Sider width={256} className='bg-transparent' >
                    <Menu
                        mode="inline"
                        selectedKeys={value}
                        onSelect={handleItemClick} // Handle selection
                        defaultOpenKeys={['2', '8']} // Automatically open submenus
                        style={{ height: '100%', borderRight: 0 }}
                        items={sidebarData}
                        className='sidebar-menu'
                    />
                </Sider>
            </Layout>
        </div>
    )
}

export default memo(SideBar)