export const Signup = ({handleclickoutside,handleOnchangeSignup,onChangeForm,handleSubmitSignUp,handleSignSubmit}) => {
  return (
    <>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-large leading-6">
            Name
          </label>
          <div className="mt-2 ">
            <input
              id="name"
              name="name"
              type="name"
              required
              autoComplete="name"
              onChange={handleOnchangeSignup}
              // className="... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 text-gray-800 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-large leading-6">
            Email address
          </label>
          <div className="mt-2 ">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              onChange={handleOnchangeSignup}
              // className="... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 text-gray-800 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-lg font-large leading-6"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              onChange={handleOnchangeSignup}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSignSubmit}
          >
            Sign Up
          </button>
          <p className="text-white">
            Already have an account Click below to login{" "}
          </p>
          <button className="text-white" onClick={onChangeForm}>Sign in </button>
        </div>
      </form>
    </>
  );
};
