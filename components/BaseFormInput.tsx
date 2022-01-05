import React, { FC } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

interface ISignupFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

interface IBaseFormInputProps {
    fieldLabel: string;
    fieldId: 'email' | 'password' | 'confirmPassword';
    fieldType: string;
    fieldPlaceholder: string;
    register: UseFormRegister<ISignupFormValues>;
}

const BaseFormInput: FC<IBaseFormInputProps> = ({
    fieldId,
    fieldType,
    fieldLabel,
    fieldPlaceholder,
    register,
}) => {
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
                <label htmlFor={fieldId} className="font-medium">
                    {fieldLabel}
                </label>
                <span className="text-neon-red"></span>
            </div>
            <input
                id={fieldId}
                // name={fieldId}
                type={fieldType}
                placeholder={fieldPlaceholder}
                {...register(fieldId)}
                className="w-full h-13 pl-3 rounded bg-seashell hover:bg-snowdrift focus:bg-white border-2 border-platnium focus:border-blue transition-colors duration-200"
            />
        </div>
    );
};

export default BaseFormInput;
