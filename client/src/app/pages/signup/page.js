export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            by signing up you agree to our terms & conditions and privacy policy
          </p>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 text-gray-500">
                Or Sign Up with:
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Google</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.35 11.1H12v2.8h5.5c-.3 1.4-1 2.5-2.1 3.2v2.5h3.4c2-1.8 3.1-4.5 3.1-7.5s-1.1-5.7-3.1-7.5H15V5h-2v2.2H9v2.8h4.5c.1.6.1 1.3.1 2 0 .7-.1 1.4-.1 2zM12 22c2.7 0 4.9-1.1 6.4-2.8l-3.4-2.5c-.8.5-1.8.8-3 .8-2.4 0-4.4-1.6-5.1-3.8H2.9v2.5C4.5 19.5 8 22 12 22zM6.9 13.5H5v-2.5h-3v-3h3V5h1.9c.3-.8.8-1.5 1.4-2.1L4.9.3C2.3 1.7 0.4 4.2 0 7h3v3h3V13.5zm15.1-.5h-3v2.5h3v-2.5z" />
                </svg>
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.5 12c0-5.5-4.5-10-10-10s-10 4.5-10 10c0 4.9 3.5 9 8 9.9v-7H7.5v-3h2.5V9c0-2.5 1.5-3.9 3.6-3.9 1 0 2.3.1 2.9.1v3.2h-2c-1.5 0-1.8.7-1.8 1.8v2.4h3.5l-.6 3h-2.9v7c4.5-.9 8-5 8-9.9z" />
                </svg>
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.1.8A5.4 5.4 0 0022.3 1a10.9 10.9 0 01-3.4 1.3 5.4 5.4 0 00-9.1 4.9A15.3 15.3 0 011.7 2.8a5.4 5.4 0 001.7 7.2 5.4 5.4 0 01-2.4-.7v.1a5.4 5.4 0 004.3 5.3 5.4 5.4 0 01-2.4.1 5.4 5.4 0 005 3.7A10.9 10.9 0 010 21.1a15.3 15.3 0 008.3 2.4c10 0 15.5-8.3 15.5-15.5v-.7A11 11 0 0023 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
