import { useState, useEffect } from 'react';
import type { FC } from 'react';

import ArticleItem from '../components/ArticleItem';
import httpClient from '../services';

interface article {
    title: string;
    price: number;
}

const ArticleList: FC = ({}) => {

    const [articles, setArticles] = useState<any | []>([
        {
            title: 'Cannapé',
            price: 2000,
        },
        {
            title: 'Table en bois',
            price: 10000,
        },
        {
            title: 'Fauteuil moulant',
            price: 30000,
        },
        {
            title: 'Cannapé doux',
            price: 200050,
        },
        {
            title: 'Cannapé',
            price: 2000,
        },
        {
            title: 'Table en bois',
            price: 10000,
        },
        {
            title: 'Fauteuil moulant',
            price: 30000,
        },
        {
            title: 'Cannapé',
            price: 200050,
        },
    ]);

    useEffect(() => {
        httpClient
            .get('article/all')
            .then((response) => {
                console.log(response);
                setArticles(response.data);
            })
            .catch(() => {});
    }, []);

    return (
        <div className="w-4/5 flex flex-wrap justify-evenly">
            {articles.map((article: any, index: any) => (
                <ArticleItem
                    key={index}
                    title={article.title}
                    link="/articles/1"
                    image="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                />
            ))}
        </div>
    );
};

export default ArticleList;
