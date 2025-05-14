import { Link } from 'react-router-dom';
import { Input } from '@widgets/form/ui/Input.tsx';
import { useLoginForm } from '../model/Login.ts';

export const Login = () => {
  const { formData, formError, handleChange } = useLoginForm();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg space-y-6">
        <form className="space-y-6 rounded-xl bg-white p-6 shadow-md">
          {/* Email */}
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="you@example.com"
            onChange={handleChange}
            error={formError.email}
          />
          {/* Password */}
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            placeholder="••••••••"
            onChange={handleChange}
            error={formError.password}
          />
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Below Form Links */}
        <div className="flex justify-between px-2 text-sm text-gray-600">
          <a href="#" className="font-medium text-indigo-600 hover:underline">
            Forgot password?
          </a>
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
