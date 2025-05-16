import { Link } from 'react-router-dom';
import { Input } from '@widgets/form/ui/Input.tsx';
import { useRegisterForm } from '../model/Register.ts';

export const Register = () => {
  const { formData, formErrors, loading, handleChange, handleSubmit } =
    useRegisterForm();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg space-y-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl bg-white p-6 shadow-md"
        >
          {/* Name */}
          <Input
            label="Name"
            name="name"
            value={formData.name}
            placeholder="Nguyen Van A"
            onChange={handleChange}
            disabled={loading}
            error={formErrors.name}
          />

          {/* Email */}
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="you@example.com"
            onChange={handleChange}
            disabled={loading}
            error={formErrors.email}
          />

          {/* Password */}
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            placeholder="••••••••"
            onChange={handleChange}
            disabled={loading}
            error={formErrors.password}
          />

          {/* Error Message */}
          {(formErrors.name || formErrors.email || formErrors.password) && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">Register failed</p>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>

        {/* Below Form Links */}
        <div className="flex justify-between px-2 text-sm text-gray-600">
          <Link
            to="/forgot-password"
            className="font-medium text-indigo-600 hover:underline"
          >
            Forgot password?
          </Link>
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
