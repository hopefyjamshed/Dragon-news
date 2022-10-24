import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../brandCarousel/BrandCarousel';
import { AuthContext } from '../../context/authProvider/AuthProvider';

const RightNav = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handleSignInWihtGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleSignInWihtGoogle} variant="outline-primary"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button className='mt-2' variant="outline-dark"><FaGithub></FaGithub> Login Wigh Github</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h3>Find us on</h3>

                <ListGroup>
                    <ListGroup.Item className='mb-3'>
                        <FaFacebook></FaFacebook> Facebook
                    </ListGroup.Item>

                    <ListGroup.Item className='mb-3'>
                        <FaTwitter></FaTwitter> Twitter
                    </ListGroup.Item>

                    <ListGroup.Item className='mb-3'>
                        <FaTwitch></FaTwitch> Twitch
                    </ListGroup.Item>

                    <ListGroup.Item className='mb-3'>
                        orta ac consectetur ac
                    </ListGroup.Item>
                </ListGroup>

            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>

    );
};

export default RightNav;