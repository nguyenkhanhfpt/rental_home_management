import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@shared/hooks/useAuth';
import { LoginRequest } from '@shared/api/types/auth.types';

export interface LoginSchema {
  email: string;
  password: string;
}

interface ValidationError {
  resource: string;
  field: string;
  message: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const initialFormData: LoginSchema = {
  email: '',
  password: '',
};

const initialFormErrors: FormErrors = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginRequest>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const { login, loading } = useAuth();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(initialFormErrors);

    try {
      await login(formData);
      navigate('/'); // Redirect to home page after successful login
    } catch (error: any) {
      if (Array.isArray(error.errors)) {
        const validationErrors = error.errors as ValidationError[];
        const newErrors: FormErrors = { ...initialFormErrors };

        validationErrors.forEach((err: ValidationError) => {
          if (err.field in newErrors) {
            newErrors[err.field as keyof FormErrors] = err.message;
          }
        });

        setFormErrors(newErrors);
      } else {
        setFormErrors({
          email: error.message || 'Login failed',
          password: error.message || 'Login failed',
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
