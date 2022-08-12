import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/auth/auth";

import { LockClosedIcon, MailIcon } from "@heroicons/react/outline";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { user } = useSelector((state) => state.auth);
  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(dispatch, { email, password });
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <>
      <div className="min-h-screen flex grow bg-slate-50">
        <div className="hidden w-full place-items-center lg:grid">
          <div className="w-full max-w-lg p-6">
            <img className="w-full" src="https://lineone.piniastudio.com/images/illustrations/dashboard-check-dark.svg" alt="image" />
          </div>
        </div>
        <main className="flex w-full flex-col items-center bg-white lg:max-w-md">
          <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
            <div className="text-center">
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-slate-600 ">Welcome Back</h2>
                <p className="text-slate-400 ">Devam etmek için giriş yapın</p>
              </div>
            </div>
            <div className="mt-16">
              <label className="relative flex">
                <input className="form-element pl-9" onChange={onChange} placeholder="Email Adres" name="email" type="email" />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary ">
                  <MailIcon className="h-6 w-6" />
                </span>
              </label>
              <label className="relative mt-4 flex">
                <input className="form-element pl-9" onChange={onChange} placeholder="Şifre" name="password" type="password" />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary ">
                  <LockClosedIcon className="h-6 w-6" />
                </span>
              </label>
              <button className="form-button" onClick={handleSubmit}>
                Giriş Yap
              </button>
              <div className="mt-4 text-center text-xs+">
                <p className="line-clamp-1">
                  <span>Üyeliğin Yok mu?</span>

                  <Link to="/register" className="text-blue-500 transition-colors hover:text-primary-focus  pl-2">
                    Üye Ol
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
