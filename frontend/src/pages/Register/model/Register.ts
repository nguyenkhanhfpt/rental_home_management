import React, { useState } from 'react';

export interface RegisterSchema {
  name: string;
  email: string;
  password: string;
}

const initialRegisterState: RegisterSchema = {
  name: '',
  email: '',
  password: '',
};

const internalRegisterErrorState: RegisterSchema = {
  name: '',
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const [formData, setFormData] =
    useState<RegisterSchema>(initialRegisterState);
  const [formError, setFormError] = useState<RegisterSchema>(
    internalRegisterErrorState
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
