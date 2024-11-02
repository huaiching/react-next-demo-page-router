import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { haveAccess } from "@/pages/store/_chkAccess";
import { getRoutes } from "@/pages/store/_routes";

const MenuData = () => {
    /**
     * 菜單的資料來源 routes
     */
    const menuItems = getRoutes()
    /**
     * 設定 menu 樣式
     * @param routes routes清單
     * @returns 
     */
    const renderMenuItems = (routes) => {
        return routes.map(routes => {    
            if (routes.children && routes.children.length > 0) {
                return (
                <Menu.SubMenu key={routes.key} title={routes.name}>
                    {renderMenuItems(routes.children)}
                </Menu.SubMenu>
                );
            }
            // 權限檢查，無權限拔掉 Link 使其無法點擊
            let link = ""
            if (haveAccess(routes.access)) {
                link = (
                    <Link href={routes.path} passHref>
                        {routes.name}
                    </Link>
                )
            } else {
                link =  (routes.name)
            }
    
            return (
                <Menu.Item key={routes.key}>
                    {link}
                </Menu.Item>
            );
        });
    };

    return (
        <Menu mode='vertical'>
            {renderMenuItems(menuItems)}
        </Menu>
    )
}

export default MenuData