import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg space-y-6">
        <form className="space-y-6 rounded-xl bg-white p-6 shadow-md">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Your name"
            />
            <p className="mt-1 text-sm text-red-600">Name is required</p>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
            <p className="mt-1 text-sm text-red-600">
              Please enter a valid email
            </p>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
            <p className="mt-1 text-sm text-red-600">Password is required</p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>

        {/* Below Form Links */}
        <div className="flex justify-between px-2 text-sm text-gray-600">
          <a href="#" className="font-medium text-indigo-600 hover:underline">
            Forgot password?
          </a>
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
