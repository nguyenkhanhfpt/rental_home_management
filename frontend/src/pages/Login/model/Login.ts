import React, { useState } from "react";

export interface LoginSchema {
    email: string;
    password: string;
}

const initialLoginState: LoginSchema = {
    email: "",
    password: "",
};

export const useLoginForm = () => {
    const [formData, setFormData] = useState<LoginSchema>(initialLoginState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return {
        formData,
        handleChange,
        setFormData, // optionally expose this too
    };
};
