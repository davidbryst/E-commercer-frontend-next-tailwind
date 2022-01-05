import type { FC } from 'react';
import Stars from './Stars';
import Link from 'next/link';
import Icons from './Icons';

type ArticleItemProps = {
    title: string;
    image: string;
    price?: string;
    oldPrice?: string;
    link: string;
};

const ArticleItem: FC<ArticleItemProps> = ({
    title,
    image,
    price,
    oldPrice,
    link,
}) => {
    return (
        <Link href={link} passHref>
            <div className="relative bg-white border border-platnium rounded-sm pb-8 p-4 w-80 h-84 mb-8 cursor-pointer transition-all hover:border-black">
                <Icons />
                <div className="w-full h-64">
                    <img
                        className="w-full h-full object-cover"
                        src={image}
                        alt={title}
                    />
                </div>

                <p className="capitalize text-xl font-semibold my-2">{title}</p>
                <Stars mark="4,3" />
                <div className="flex items-center justify-between">
                    <div className="flex-col">
                        <p className="text-xs line-through text-quillgrey">
                            2000fcfa
                        </p>
                        <p className="text-lg text-blue font-bold">2000 fcfa</p>
                    </div>
                    <button className="bg-blue text-white rounded-md px-3 py-2.5 font-semibold">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ArticleItem;
