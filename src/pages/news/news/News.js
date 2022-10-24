import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Category from '../../category/categorys/Category';


const News = () => {
    const singleNews = useLoaderData()
    const { author, details, image_url, title, total_view
        , _id, category_id } = singleNews
    console.log(singleNews)
    return (
        <div>
            <Card style={{}}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">go to main page</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;