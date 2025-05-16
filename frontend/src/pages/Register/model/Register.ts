import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@shared/hooks/useAuth';
import { RegisterRequest } from '@shared/api/types/auth.types';

export interface RegisterSchema {
  name: string;
  email: string;
  password: string;
}

interface ValidationError {
  resource: string;
  field: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const initialFormData: RegisterSchema = {
  name: '',
  email: '',
  password: '',
};

const initialFormErrors: FormErrors = {
  name: '',
  email: '',
  password: '',
};

export const useRegisterForm = () => {
  const [formData, setFormData] = useState<RegisterRequest>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setFormErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = () => {
    // if (!formData.name.trim()) {
    //   setFormError('Name is required');
    //   return false;
    // }
    // if (!formData.email.trim()) {
    //   setFormError('Email is required');
    //   return false;
    // }
    // if (!formData.password.trim()) {
    //   setFormError('Password is required');
    //   return false;
    // }
    // if (formData.password.length < 6) {
    //   setFormError('Password must be at least 6 characters');
    //   return false;
    // }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(initialFormErrors);

    if (!validateForm()) {
      return;
    }

    try {
      await register(formData);
      navigate('/'); // Redirect to home page after successful registration
    } catch (error: any) {
      if (Array.isArray(error.errors)) {
        const validationErrors = error.errors as ValidationError[];
        const newErrors: FormErrors = { ...initialFormErrors };

        validationErrors.forEach((err) => {
          if (err.field in newErrors) {
            newErrors[err.field as keyof FormErrors] = err.message;
          }
        });

        setFormErrors(newErrors);
      } else {
        setFormErrors({
          name: error.message || 'Registration failed',
          email: error.message || 'Registration failed',
          password: error.message || 'Registration failed',
        });
      }
    }
  };

  return {
    formData,
    formErrors,
    loading,
    handleChange,
    handleSubmit,
  };
};
