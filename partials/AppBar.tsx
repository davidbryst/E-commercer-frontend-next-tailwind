import Link from 'next/link';
import { HiSearch, HiOutlineShoppingBag } from 'react-icons/hi';
import AuthDropdown from '../components/AuthDropdown';

const AppBar = () => {
    return (
        <div className="fixed top-0 left-0 flex justify-between px-8 md:px-4 h-16 w-full z-30 bg-white">
            <div className="flex items-center">
                <Link href="/">
                    <a className="font-bold text-2xl md:text-xl">Mobici</a>
                </Link>
            </div>

            <div className="flex flex-1 items-center justify-between lg:justify-end pl-20 lg:pl-0">

                <div>
                    <div className="flex items-center w-96 lg:hidden h-11 relative">
                        <input
                            type="text"
                            className="pl-2 w-full h-full border border-quillgrey rounded text-sm bg-snowdrift focus:border-black"
                            placeholder="Rechercher un produit"
                        />
                        <button className="absolute h-full px-5 right-0 text-black hover:bg-platnium">
                            <HiSearch className="h-5 w-5" />
                        </button>
                    </div>
                    <button className="hidden lgi:block mr-8 sm:mr-4 p-2 sm:p-1 hover:bg-snowdrift">
                        <HiOutlineShoppingBag className="w-7 h-7 sm:w-6 sm:h-6" />
                    </button>
                </div>

                <div className="flex justify-between items-center">
                    <Link href="/basket">
                        <a
                            href=""
                            className="relative px-3 pt-2 pb-1.5 sm:hidden mr-3 text-darkgrey flex items-center rounded hover:bg-snowdrift"
                        >
                            <HiOutlineShoppingBag className="w-8 h-8 mr-2 sm:w-6 sm:h-6" />
                            <div className="sm:absolute sm:top-0 sm:right-0">
                                <div className="text-xs text-blue font-bold">
                                    10
                                </div>
                                <div className="text-sm font-bold text-black sm:hidden">
                                    Panier
                                </div>
                            </div>
                        </a>
                    </Link>
                    <AuthDropdown />
                </div>
            </div>
        </div>
    );
};

export default AppBar;
