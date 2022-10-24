import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Navigate, useLocation, useNavigate, useResolvedPath } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname

    const { logIn, setLoading } = useContext(AuthContext)
    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()

                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('please varify your email')
                }




            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })
            .finally(s => setLoading(false))
    }
    return (
        <div>
            <h1>plese Login here</h1>
            <hr className='mb-5' />
            <Form onSubmit={loginHandler} className='border border-1 p-3 bg-dark'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>


                <Button variant="light" type="submit">
                    Submit
                </Button>
                <p className='text-danger bg-light mt-2 rounded'>{error}</p>
            </Form>
        </div>
    );
};

export default Login;