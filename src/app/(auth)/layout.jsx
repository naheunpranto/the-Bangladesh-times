"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = (data) => {
    // e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    console.log(data, "data");
    const {email, name, photo, password} = data;
    console.log(name, photo);
  };

  return (
    <div className="container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              className="input bg-gray-100"
              // name="email"
              placeholder="Enter your name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          {/* Photo URL */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input bg-gray-100"
              // name="email"
              placeholder="Enter your photo url"
              {...register("photo", {required: "Photo field is required"})}
            />
            {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className="input bg-gray-100"
              // name="email"
              placeholder="Enter your email address"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input bg-gray-100"
              // name="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-gray-700 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
