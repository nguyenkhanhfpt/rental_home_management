import React, { useState } from "react";

export interface RegisterSchema {
    name: string;
    email: string;
    password: string;
}

const initialRegisterState: RegisterSchema = {
    name: "",
    email: "",
    password: "",
};

export const useLoginForm = () => {
    const [formData, setFormData] = useState<RegisterSchema>(initialRegisterState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    console.log(formData);

    return {
        formData,
        handleChange,
        setFormData, // optionally expose this too
    };
};
