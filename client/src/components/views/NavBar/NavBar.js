import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
        <div >
            <ul style={{display: 'flex', justifyContent: 'space-around'}}>
                <li>
                    <Link to='/' >LOGO</Link>
                </li>
                <li>
                    <Link to='/' >HOME</Link>
                </li>
                <li>
                    <Link to='/' >ABOUT</Link>
                </li>
                {isAuth?
                <div>
                    <span>{name}</span>
                    <span onClick={onClick} style={{cursor:'pointer'}}>Logout</span>
                </div>:
                <div>
                <li>
                    <Link to='/login' >SIGN IN</Link>
                </li>
                <li>
                    <Link to='/register' >SIGN UP</Link>
                </li>
                </div>
                }
            </ul>
        </div>
    )
}

export default withRouter(NavBar)
