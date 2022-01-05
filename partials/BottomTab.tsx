import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiSearch } from 'react-icons/hi';

import {
    RiHomeLine,
    RiHomeFill,
    RiUser3Line,
    RiUser3Fill,
    RiShoppingBagLine,
    RiShoppingBagFill,
} from 'react-icons/ri';

const bottomTabItems = [
    {
        name: 'Accueil',
        icon: <RiHomeLine className="w-7 h-7" />,
        // iconSolid: <RiHomeFill className="w-7 h-7" />,
        path: '/',
    },
    {
        name: 'Chercher',
        icon: <HiSearch className="w-7 h-7" />,
        // iconSolid: '',
        path: '/search',
    },
    {
        name: 'Panier',
        icon: <RiShoppingBagLine className="w-7 h-7" />,
        // iconSolid: <RiShoppingBagFill className="w-7 h-7" />,
        path: '/basket',
    },
    {
        name: 'Compte',
        icon: <RiUser3Line className="w-7 h-7" />,
        // iconSolid: <RiUser3Fill className="w-7 h-7" />,
        path: '/auth',
    },
];

const BottomTab = () => {
    const router = useRouter();
    return (
        <div className="hidden sm:flex fixed z-50 bottom-0 left-0 right-0 h-15 bg-white border-t border-seashell">
            {bottomTabItems.map((item, index) => (
                <Link href={item.path} key={index}>
                    <a
                        className={`w-full flex flex-col justify-between py-2 items-center ${
                            router.pathname === item.path
                                ? 'text-blue'
                                : 'text-granite'
                        }`}
                    >
                        {item.icon}
                        <span className="text-mic font-bold">{item.name}</span>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default BottomTab;
