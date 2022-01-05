import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AuthFormLayout: FC = ({ children }) => {
    const router = useRouter();

    return (
        <section className="flex h-screen">
            {/* Left part */}
            <div className="w-3/5 lg:w-full">
                {/* Left part header */}
                <div className="flex items-center justify-between h-16 px-8 md:px-4">
                    <Link href="/">
                        <a className="text-2xl md:text-xl font-bold">Mobici</a>
                    </Link>
                    <button onClick={() => router.back()}>
                        {/* <ArrowLeftIcon className="w-6 h-6" /> */}
                    </button>
                </div>

                {/* Left part form */}
                <div className="flex justify-center pt-4">{children}</div>
            </div>

            {/* Right part */}
            <div className="w-2/5 overflow-hidden lg:hidden">
                <img
                    src="/images/webapp/furni-2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default AuthFormLayout;
