import axios from 'axios'
import React from 'react'
import { withRouter } from 'react-router-dom'

function LandingPage({history}) {

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
        <div style={{
            display: 'flex', justifyContent: 'center' , alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
            <span onClick={onClick} style={{cursor:'pointer'}}>Logout</span>
        </div>
    )
}

export default withRouter(LandingPage)
