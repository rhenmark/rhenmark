import Link from 'next/link';
import { socialMediaLogin } from '../../constants/social-media';

export default function Login() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-sm bg-black/90 mx-auto min-h-dvh grid pt-40 p-4">
        <div className="w-full">
          <div className="mb-10 text-center text-white">
            <h4 className="text-2xl font-bold">Login to Payndit</h4>
          </div>
          <div className="w-full  grid grid-flow-row mx-auto">
            {socialMediaLogin.map((item: string) => (
              <div key={item} className="mb-4 ">
                <button className="p-4 w-full h-16 border border-white text-white font-bold rounded-full hover:bg-primary">
                  Continue with {item}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <hr />
          </div>
          <div className="mt-4 w-full  grid grid-flow-row mx-auto">
            <form>
              <div className="my-4">
                <label htmlFor="email" className="text-md mb-2 inline-block">
                  Email or username
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email or username"
                  className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                  autoCorrect="false"
                />
              </div>
              <div className="my-4">
                <label htmlFor="password" className="text-md mb-2 inline-block">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                  autoComplete="false"
                />
              </div>
              <div className="mt-4">
                <button className="p-4 w-full h-16 border-2 border-black bg-primary rounded-full text-white font-bold text-lg">
                  Sign in
                </button>
              </div>
            </form>
            <div className="text-white text-center mt-8">
              <Link href="/reset-password" className='underline'>Forgot your password?</Link>
            </div>
          </div>
          <div className="my-12">
            <hr />
          </div>
          <div className="text-white text-center">
            <span>Don{"'"}t have an account? </span>
            <Link href="/signup?from=login" className="underline font-semibold">
              Sign up for Payndit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
