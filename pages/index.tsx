import type { NextPage } from 'next';
import AppLayout from '../layouts/AppLayout';
import Link from 'next/link';
import Image from 'next/image';
import myLoader from '../components/Loader';

import { HiChevronRight, HiPlay } from 'react-icons/hi';

const Home: NextPage = () => {
    return (
        <AppLayout>
            <div className="flex flex-wrap justify-between px-8 pt-10 md:px-4">
                {/* First Section Left */}
                <div className="">
                    <p className="uppercase text-gray-300 text-sm mb-4 ">
                        Les articles de bonne qualité !
                    </p>
                    <h1 className="text-5xl uppercase font-bold mb-8">
                        Découvrez toutes <br /> nos collections.
                    </h1>
                    <p className="font-bold border-l-4 pl-2 mb-8">
                        Il n'y a rien de plus beau qu'un chez soi beau, aéré
                        <br />
                        et convivial pour se sentir au mieux
                    </p>
                    <div className="flex items-center">
                        <Link href="/articles">
                            <button className="flex items-center font-bold p-4 mr-4 text-white bg-blue rounded-md">
                                Débuter un achat
                                <span className="bg-red-400 rounded-full ml-2 p-1">
                                    <HiChevronRight className="h-5 w-5" />
                                </span>
                            </button>
                        </Link>
                        <Link href="/">
                            <button className="p-4 bg-yellow-300 rounded-md mr-2">
                                <HiPlay className="h-6 w-6" />
                            </button>
                        </Link>
                        <p className="font-bold">Je suis calix</p>
                    </div>
                </div>

                {/* First Section Rigth */}
                <div className="w-96 h-96 overflow-hidden">
                    <Image
                        loader={myLoader}
                        src="img1.jpg"
                        alt="une image"
                        width={3333}
                        height={4188}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </AppLayout>
    );
};

export default Home;
