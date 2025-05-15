import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@shared/hooks/useAuth';
import { RegisterRequest } from '@shared/api/types/auth.types';

export interface RegisterSchema {
  name: string;
  email: string;
  password: string;
}

const initialFormData: RegisterSchema = {
  name: '',
  email: '',
  password: '',
};

// const internalRegisterErrorState: RegisterSchema = {
//   name: '',
//   email: '',
//   password: '',
// };

// export const useLoginForm = () => {
//   const [formData, setFormData] =
//     useState<RegisterSchema>(initialRegisterState);
//   const [formError, setFormError] = useState<RegisterSchema>(
//     internalRegisterErrorState
//   );
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//
//   return {
//     formData,
//     formError,
//     handleChange,
//     setFormData, // optionally expose this too
//     setFormError,
//   };
// };

export const useRegisterForm = () => {
  const [formData, setFormData] = useState<RegisterRequest>(initialFormData);
  const [formError, setFormError] = useState<string | null>(null);
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setFormError('Email is required');
      return false;
    }
    if (!formData.password.trim()) {
      setFormError('Password is required');
      return false;
    }
    if (formData.password.length < 6) {
      setFormError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    if (!validateForm()) {
      return;
    }

    try {
      await register(formData);
      navigate('/'); // Redirect to home page after successful registration
    } catch (error: any) {
      setFormError(error.message || 'Registration failed');
    }
  };

  return {
    formData,
    formError,
    loading,
    handleChange,
    handleSubmit,
  };
};
