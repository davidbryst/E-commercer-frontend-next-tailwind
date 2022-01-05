import { useState } from 'react';
import { NextPage } from 'next';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';

import BaseLayout from '../layouts/BaseLayout';

const Basket: NextPage = () => {
    const [articles, setArticles] = useState([
        {
            title: 'Table en bambou',
            price: 50000,
            imageUrl:
                'https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            quantity: 2,
        },
        {
            title: 'Canapé velour',
            price: 700000,
            imageUrl:
                'https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            quantity: 1,
        },
        {
            title: 'Chaise en bois',
            price: 40000,
            imageUrl:
                'https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            quantity: 4,
        },
        {
            title: 'Chaise en bois',
            price: 40000,
            imageUrl:
                'https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            quantity: 4,
        },
    ]);

    const addOneQuantity = (index: number) => {
        setArticles((prevState) =>
            prevState.map((item, i) => {
                if (i === index) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return { ...item };
            })
        );
    };

    const removeOneQuantity = (index: number) => {
        if (articles[index].quantity === 1) {
            setArticles((prevState) => prevState.filter((_, i) => i !== index));
            return;
        }
        setArticles((prevState) =>
            prevState.map((item, i) => {
                if (i === index) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return { ...item };
            })
        );
    };

    const changeQuantity = (index: number) => {};

    const deleteOneArticle = (index: number) => {
        setArticles((prevState) => prevState.filter((_, i) => i !== index));
    };

    const totalPrice = articles.reduce((currentTotal, article) => {
        return currentTotal + article.price * article.quantity;
    }, 0);


    return (
        <BaseLayout>
            <div className="px-8 pt-8 pb-30 md:px-4">
                <div className="text-2xl font-bold mb-8">Votre panier</div>
                <div className="flex mb-32">
                    <div className="w-4/5 pr-28">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className="flex w-full h-56 bg-white mb-4 rounded-sm border border-quillgrey shadow-sm"
                            >
                                <div className="w-60 h-full overflow-hidden">
                                    <img
                                        src={article.imageUrl}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col pl-3 pr-2 pt-2 pb-4">
                                    <div className="text-xl font-bold">
                                        {article.title}
                                    </div>
                                    <div className="text-lg text-granite flex-1">
                                        {article.price} Fcfa
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <button
                                                className="p-2 rounded-full border border-quillgrey mr-2"
                                                onClick={() =>
                                                    removeOneQuantity(index)
                                                }
                                            >
                                                <AiOutlineMinus className="w-3 h-3" />
                                            </button>

                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                onChange={() => null}
                                                className="w-7 mr-2 text-center"
                                                value={article.quantity}
                                                defaultValue="4"
                                            />

                                            <button
                                                className="p-2 rounded-full border border-quillgrey"
                                                onClick={() =>
                                                    addOneQuantity(index)
                                                }
                                            >
                                                <AiOutlinePlus className="w-3 h-3" />
                                            </button>
                                        </div>

                                        <button
                                            className="p-2 rounded-full bg-seashell border border-quillgrey"
                                            onClick={() =>
                                                deleteOneArticle(index)
                                            }
                                        >
                                            <FiTrash className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/5 relative">
                        <div className="sticky border border-quillgrey w-full shadow rounded-sm px-4 pt-6 pb-4 top-20 left-0">
                            <div className="flex items-end justify-between mb-10">
                                <div>Total :</div>
                                <div className="font-bold">
                                    {totalPrice} Fcfa
                                </div>
                            </div>
                            <button className="w-full h-10 bg-blue text-white font-bold rounded">
                                Commander
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Basket;
