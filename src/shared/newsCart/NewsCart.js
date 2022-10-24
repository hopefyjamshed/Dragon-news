import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCart = ({ news }) => {
    const { title, _id, author, image_url, total_view, details, rating } = news
    console.log(news)
    return (
        <div className='mt-4'>

            <Card className="">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            src={author?.img}
                            roundedCircle
                            className='me-2'
                            style={{ width: '50px', height: '50px' }}
                        >

                        </Image>
                        <div className=''>
                            <p className='mb-0'>{author?.name}</p>
                            <p className='mt-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <FaBookmark className='me-2'></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 250
                            ? <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>read more</Link></p>
                            : <p>{details}</p>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <FaStar className='text-warning me-2'></FaStar>
                            <p className='mb-0'>{rating?.number}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FaEye className='me-2 text-black'></FaEye>
                            <p className='mb-0'>{total_view
                            }</p>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default NewsCart;