import React from 'react';
import Link from 'next/link';

const Offer = ({ name, image }: any) => {
    return (
        <Link href="/" passHref>
            <div className="h-16 mr-2 px-3 flex items-center whitespace-nowrap text-sm bg-white hover:bg-snowdrift transition-colors rounded-sm border border-seashell cursor-pointer shadow-sm">
                <div className="h-full w-16 flex items-center">
                    <img
                        className=" transition-transform transform h-full w-full object-contain group-hover:-translate-y-2"
                        src={image}
                        alt={name}
                    />
                </div>
                <p className="capitalize mx-1">{name}</p>
            </div>
        </Link>
    );
};

export default Offer;
