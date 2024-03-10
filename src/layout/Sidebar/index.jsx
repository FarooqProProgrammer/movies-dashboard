import React from 'react'
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

export default function Sidebar() {
    return (
        <div className="h-full">
            <Sidebar>
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}
