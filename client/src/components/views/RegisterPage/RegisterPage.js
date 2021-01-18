import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'

function RegisterPage({history}) {

    const dispatch = useDispatch();

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const onChange = (e) => {
        const {target: {name,value}} = e;
        if(name === 'email'){
            setEmail(value)
        }else if(name === 'password'){
            setPassword(value)
        }else if(name === 'name'){
            setName(value)
        }else if(name === 'confirmPassword'){
            setConfirmPassword(value)
        }else {
            return null;
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword){
            return alert('Please check confirm password')
        }

        let body = {
            email,
            password,
            name
        }
        dispatch(registerUser(body))
        .then(res => {
            if(res.payload.success){
                history.push('/login')
            } else {
                alert('Failed to sign up')
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
                <label>Name</label>
                <input name='name' value={name} type='text'  onChange={onChange}/>
                <label>Email</label>
                <input name='email' value={email} type='email' onChange={onChange}/>
                <label>Password</label>
                <input name='password' value={password} type='password'  onChange={onChange}/>
                <label>Confirm Password</label>
                <input name='confirmPassword' value={confirmPassword} type='password'  onChange={onChange}/>
                <br />
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
