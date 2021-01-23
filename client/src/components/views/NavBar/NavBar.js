import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';

const { Header } = Layout;


function NavBar({history}) {
    const [isAuth,setIsAuth] = useState(false)
    const [name,setName] = useState('')
    const state = useSelector(res => res?.user);
    

    useEffect(() => {
        if(state.userData?.isAuth){
            setIsAuth(true)
            setName(state.userData.name)
        }else{
            setIsAuth(false)
        }
       
    },[state])

    const onClick = () => {
        axios.get('/api/users/logout')
             .then(res => {
                 if(res.data.success) {
                    history.push('/login')
                 }else {
                     alert('failed logout')
                 }
             })
    }

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to='/' >LOGO</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/' >HOME</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/' >ABOUT</Link></Menu.Item>
        {isAuth?
        <>
                <Menu.Item key="5" style={{float: 'right'}} onClick={onClick}>
                    <span>LOGOUT</span>
                </Menu.Item>
                <Menu.Item key="4" style={{float: 'right'}}>
                    <span>{name}</span>
                </Menu.Item>
                </>
                :
                <>
                <Menu.Item key="4" style={{float: 'right'}}>
                    <Link to='/login' >SIGN IN</Link>
                </Menu.Item>
                <Menu.Item key="5" style={{float: 'right'}}>
                    <Link to='/register' >SIGN UP</Link>
                </Menu.Item>
                </>
                }
      </Menu>
    </Header>
        </Layout>
    )
}

export default withRouter(NavBar)
