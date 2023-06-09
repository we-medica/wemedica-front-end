export default function SignUpModal(props) {
  const signupUser = (event) => {
    event.preventDefault();

    const newUser = {
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      mobile: event.target.mobile.value,
      password: event.target.password.value,
    };
    console.log(newUser);
    props.signup(/*Pass here the info*/);
  };

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
          <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
            <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p className="font-semibold text-gray-800 text-4xl">
                Create Account
              </p>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={props.hide}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <form action="/" onSubmit={signupUser}>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-gray-700">Name</p>
                <input
                  type="text"
                  className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-10"
                  id="name"
                  name="name"
                  placeholder="Please enter your full name"
                />
              </div>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-gray-700">Username</p>
                <input
                  type="text"
                  className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-10"
                  id="username"
                  name="username"
                />
              </div>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-gray-700">Email</p>
                <input
                  type="email"
                  className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-10"
                  id="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-gray-700">
                  Mobile Number
                </p>
                <input
                  type="number"
                  className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-10"
                  id="mobile"
                  name="mobile"
                />
              </div>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-gray-700">Password</p>
                <input
                  type="password"
                  className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-10"
                  id="password"
                  name="password"
                />
              </div>
              <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                <button
                  className="font-semibold text-gray-600"
                  onClick={props.hide}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-black font-semibold bg-lime-300 rounded"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
