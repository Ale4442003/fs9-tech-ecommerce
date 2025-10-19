import { useRef } from "react"
import { Link } from "react-router-dom"
import { lib } from "../lib/api";
import { toast } from "react-toastify";

const Login = () => {
  const formRef = useRef();

    const handleSubmit = async (event) => {
      event.preventDefault();

      const data =Object.fromEntries(new FormData(event.target));

      try {
        const user = await lib.auth.login(data);//abbiamo importato lib
        //dentro data c'è email e password
        console.log(user);

      } catch (err) {
          toast.error("user not found");
          formRef.current.reset();
         
      }
    }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="mx-auto h-10 w-auto" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} ref={formRef}  className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
                <div className="mt-2">
                  <input id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                  </div>
                </div>
                <div className="mt-2">
                  <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500 flex gap-2">
              Not a member?
              <Link to="/register" className="font-semibold text-indigo-400 hover:text-indigo-300">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login