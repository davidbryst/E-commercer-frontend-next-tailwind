import React, { useState, FC } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';

const AuthDropdown: FC = () => {
    const [dropdownIsActive, setDropdownIsActive] = useState(false);

    const activateAuthDropdown = () => () => {
        setDropdownIsActive(false);
    };

    return (
        <div
            // onClick={stopPropagation}
            className="relative"
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setDropdownIsActive(!dropdownIsActive);
                }}
                className="sm:hidden pt-2 pb-1.5 px-3 cursor-pointer rounded hover:bg-snowdrift"
            >
                {/* <UserIcon className="h-4 w-4 mr-2" /> */}

                <div className="text-xs">Connectez</div>
                <div className="flex items-center">
                    <p className="text-sm font-bold mr-2">Ou inscrivez vous</p>
                    <HiChevronDown
                        className={`w-3 h-3 transition-transform ${
                            dropdownIsActive && 'transform rotate-180'
                        }`}
                    />
                </div>
            </div>
            {/* <button
                className="p-1 hidden lgi:block"
                onClick={() => {
                    setDropdownIsActive(!dropdownIsActive);
                }}
            >
                <UserIcon className="w-6 h-6" />
            </button> */}
            <div
                className={`${
                    dropdownIsActive ? '' : 'hidden'
                } w-44 sm:w-36 absolute top-full right-0 rounded shadow text-black bg-white px-2 py-3`}
            >
                <Link href="/auth/signin">
                    <a className="block pl-2 py-2 rounded mb-2 font-semibold hover:bg-snowdrift">
                        Se connecter
                    </a>
                </Link>
                <Link href="/auth/signup">
                    <a className="block pl-2 py-2 bg-black rounded font-semibold text-white">
                        S'inscrire
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default AuthDropdown;
