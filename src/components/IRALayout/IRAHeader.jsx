import React from "react"
import { Layout, Dropdown, Space,  Avatar } from "antd"
import { DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import ava from "../../assets/ava.jpg"

const { Header } = Layout

const items = [
    {
        key: "1",
        icon: <UserOutlined />,
        label: (
            <Link to="userinfo/:id">
                <div >
                    User Info
                </div>
            </Link>
        ),
    },
    {
        key: "2",
        icon: <LogoutOutlined />,
        danger: true,
        label: (
            
                <div >
                    Log Out
                </div>
            
        ),
    },
]

const IRAHeader = ({ colorBgContainer }) => {
    return (
        <Header
            style={{ padding: 0, background: colorBgContainer }}
            className=" rounded-lg mr-4 mt-2 shadow-xl opacity-75 flex items-end"
        >
            <div className="flex items-end w-full justify-end mr-9">
                <Dropdown
                    menu={{
                        items,
                    }}
                >
                    <div className="flex">
                    <a onClick={(e) => e.preventDefault()}>
                        <Avatar src={ava} className="mr-3 mb-1 "></Avatar>
                        <Space>
                            Huy
                            <DownOutlined />
                        </Space>
                    </a>
                    </div>
                </Dropdown>
            </div>
        </Header>
    )
}

export default IRAHeader
