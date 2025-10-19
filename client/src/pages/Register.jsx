import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="mx-auto h-10 w-auto" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Register a new account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label for="first_name" className="block text-sm/6 font-medium text-gray-100">First Name</label>
                <div className="mt-2">
                  <input id="text" type="text" name="first_name" required autocomplete="first_name" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <label for="last_name" className="block text-sm/6 font-medium text-gray-100">Last Name</label>
                <div className="mt-2">
                  <input id="text" type="text" name="last_name" required autocomplete="last_name" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label for="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
                <div className="mt-2">
                  <input id="password" type="password" name="password" required autocomplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500 flex gap-2">
              Already a member?
              <Link to="/login" className="font-semibold text-indigo-400 hover:text-indigo-300">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register