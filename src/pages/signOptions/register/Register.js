import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/AuthProvider';
import TermsAndConditions from '../../others/terms/TermsAndConditions';

const Register = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const { register, userNameUrl, varifyEmail } = useContext(AuthContext)
    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.value
        // console.log(email, password, name, photo)
        register(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                namePhoto(name, photo)
                setError('')
                emailVarification()
                toast.success('please varify your email address')

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const namePhoto = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        userNameUrl(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }
    const checkedHandler = event => {
        setAccepted(event.target.checked)
    }
    const emailVarification = () => {
        varifyEmail()
            .then(() => {

            })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <h1>plese Login here</h1>
            <hr className='mb-5' />
            <Form onSubmit={loginHandler} className='border border-1 p-3 bg-dark'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Enter Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                    <Form.Label className='text-light'>Enter Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter photo url" />
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Check onClick={checkedHandler} className='text-light' type="checkbox" label={<>
                        <p>accept <Link to='/terms'>Terms and conditions</Link></p>
                    </>} />
                </Form.Group>



                <Button variant="light" type="submit" disabled={!accepted}>
                    register
                </Button>
                <p className='text-danger bg-light mt-2 rounded p-1'>{error}</p>
            </Form>
        </div>
    );
};

export default Register;