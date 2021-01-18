import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'

function LoginPage({history}) {
    const dispatch = useDispatch();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onChange = (e) => {
        const {target: {name,value}} = e;
        if(name === 'email'){
            setEmail(value)
        }else if(name === 'password'){
            setPassword(value)
        }
    }

    const onSubmit = e => {
        e.preventDefault();

        let body = {
            email,
            password,
        }
        dispatch(loginUser(body))
        .then(res => {
            if(res.payload.loginSuccess){
                history.push('/')
            } else {
                alert('Error')
            }
        })

    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center' , alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form onSubmit={onSubmit} style={{
                display: 'flex', flexDirection: 'column' }}>
                <label>Email</label>
                <input name='email' value={email} type='email' onChange={onChange}/>
                <label>Password</label>
                <input name='password' value={password} type='password'  onChange={onChange}/>
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
