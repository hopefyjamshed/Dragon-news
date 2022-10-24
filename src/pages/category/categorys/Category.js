import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../../../shared/newsCart/NewsCart';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h1>this containes news number:{categoryNews.length}
            </h1>
            {
                categoryNews.map(news => <NewsCart
                    key={news._id}
                    news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;