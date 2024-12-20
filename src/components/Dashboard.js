import { signIn, signUp } from "../services/api";
import "./Dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
function Dashboard() {
  const navigate = useNavigate();
  const [isvaliduser, setIsvaliduser] = useState(false);
  const [isregister, setRegister] = useState(false);
  const [signDetails, setSignDetails] = useState({
    email: "",
    password: "",
  });
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangeUserDetails = (e) => {
    const { name, value } = e.target;
    setSignDetails({
      ...signDetails,
      [name]: value,
    });
  };
  const handleclickoutside = () => {
    setIsvaliduser(false);
  };
  const onChangeForm = () => {
    setRegister((prev) => !prev);
  };
  const handleSignSubmit = async (e) => {
    e.preventDefault();
    console.log("signUpDetails", signUpDetails);
    const res = await signUp(signUpDetails);
    if (res.Status === 201) {
      navigate("/home");
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("email", signUpDetails.email);
    } else if (res.status === 404 || res.error) {
      setIsvaliduser(true);
    }
  };
  const handleOnchangeSignup = (e) => {
    e.preventDefault();
    console.log("signUpDetails", signUpDetails);
    const { name, value } = e.target;
    setSignUpDetails({
      ...signUpDetails,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await signIn(signDetails);
      console.log("res", res);
      if (res.error === 201) {
        navigate("/home");
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("email", signDetails.email);
      } else if (res.status === 404 || res.error) {
        setIsvaliduser(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="hero">
      {isvaliduser && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        class="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Account Not Found
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          user information not found in our databases.Please
                          enter valid user credentails
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={handleclickoutside}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {isregister ? (
            <Signin
              handleSubmit={handleSubmit}
              handleclickoutside={handleclickoutside}
              onChangeForm={onChangeForm}
              onchangeUserDetails={onchangeUserDetails}
            />
          ) : (
            <Signup
              handleSignSubmit={handleSignSubmit}
              handleclickoutside={handleclickoutside}
              onChangeForm={onChangeForm}
              handleOnchangeSignup={handleOnchangeSignup}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
