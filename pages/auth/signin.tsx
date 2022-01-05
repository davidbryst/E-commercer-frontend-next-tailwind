import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import BaseFormInput from '../../components/BaseFormInput';
import AuthFormLayout from '../../layouts/AuthFormLayout';

const Signin: NextPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <AuthFormLayout>
            <form
                action="#"
                className="w-3/5 sm:w-5/6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h3 className="text-2xl font-bold mb-2">Connectez vous</h3>
                <p className="mb-4 text-base">
                    <span className="text-granite">Pas encore de compte ?&ensp;</span>
                    <Link href="/auth/signup">
                        <a>Inscrivez vous</a>
                    </Link>
                </p>
                <button
                    type="button"
                    className="flex pl-4 items-center w-full h-13 mb-4 border-platnium border shadow-sm hover:border-quillgrey transition-colors rounded"
                >
                    <svg
                        viewBox="0 0 533.5 544.3"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-5 h-5 mr-4"
                    >
                        <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                        />
                        <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                        />
                        <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                        />
                        <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                        />
                    </svg>
                    <span className="">Connection avec google</span>
                </button>

                <BaseFormInput
                    fieldType="email"
                    fieldLabel="Email"
                    fieldId="email"
                    fieldPlaceholder="xyz@email.com"
                    register={register}
                />
                <BaseFormInput
                    fieldType="password"
                    fieldLabel="Password"
                    fieldId="password"
                    fieldPlaceholder="At least 6 characters"
                    register={register}
                />
                <div className="mb-2 flex justify-end">
                    <Link href="/">
                        <a className="text-granite">Mot de passe oublié</a>
                    </Link>
                </div>
                <button
                    type="submit"
                    className="w-full h-14 mt-3 rounded bg-black text-xl font-bold text-white"
                >
                    Se connecter
                </button>
            </form>
        </AuthFormLayout>
    );
};

export default Signin;
