"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const {
      register,
      handleSubmit,
      watch,
      formState: {errors}
    } = useForm()

    const handleLoginFunc = (data) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        console.log(data, "data");
    }
 

  return (
    <div className="container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className="input bg-gray-100"
              // name="email"
              placeholder="Enter your email address"
              {...register("email", {required: "Email field is required"})}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input bg-gray-100"
              // name="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password field is required" })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </fieldset>
          <button className="btn w-full bg-gray-700 text-white">Login</button>
        </form>

        <p className="mt-4">
          Do not have an account?{" "}
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
