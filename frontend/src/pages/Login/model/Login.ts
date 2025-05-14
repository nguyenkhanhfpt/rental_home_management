import React, { useState } from 'react';

export interface LoginSchema {
  email: string;
  password: string;
}

const initialLoginState: LoginSchema = {
  email: '',
  password: '',
};

const initialLoginErrorState: LoginSchema = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginSchema>(initialLoginState);
  const [formError, setFormError] = useState<LoginSchema>(
    initialLoginErrorState
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formData,
    formError,
    handleChange,
    setFormData, // optionally expose this too
    setFormError,
  };
};
