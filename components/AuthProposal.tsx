import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const AuthProposal = () => {
    const authProposals = [
        {
            question: 'Pas encore de compte ?',
            imageUrl:
                'https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            text: 'Inscrivez vous',
            path: '/auth/signup',
        },
        {
            question: 'Déja un compte ?',
            imageUrl:
                'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'Connectez vous',
            path: '/auth/signin',
        },
    ];

    return (
        <div className="pt-8 md:pt-6 px-32 md:px-4">
            <div className="mb-8 text-4xl font-bold">Auth</div>
            <div>
                {authProposals.map((proposal, index) => (
                    <div key={index} className="relative mx-auto rounded-xl w-full h-64 md:h-48 mb-8 overflow-hidden bg-black">
                        <img
                            src={proposal.imageUrl}
                            className="absolute z-0 w-full h-full object-cover"
                            alt=""
                        />
                        <div className="z-10 bg-black opacity-50 absolute w-full h-full"></div>
                        <div className="z-20 relative h-full flex flex-col justify-between p-10 md:p-5">
                            <p className="text-2xl text-white">
                                {proposal.question}
                            </p>
                            <Link href={proposal.path}>
                                <div className="flex items-end justify-between cursor-pointer text-white">
                                    <div className="text-4xl font-bold md:text-3xl">
                                        {proposal.text}
                                    </div>
                                    <button className="px-6 py-2 rounded-lg bg-white text-black">
                                        <BsArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuthProposal;
