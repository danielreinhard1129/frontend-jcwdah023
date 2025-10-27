"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const url = "https://betterkiss-us.backendless.app/api/users/register";
      await axios.post(url, data);
      alert("Register success");
    } catch (error) {
      alert("Register failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-4xl">Register Page</h1>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <label>Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className="border max-w-xl"
          />
          {errors.name ? (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="grid">
          <label>Email</label>
          <input
            {...register("email")}
            type="text"
            placeholder="Your email"
            className="border max-w-xl"
          />
          {errors.email ? (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          ) : null}
        </div>

        <div className="grid">
          <label>Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Your password"
            className="border max-w-xl"
          />
          {errors.password ? (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          ) : null}
        </div>

        <button className="px-8 py-4 border" disabled={isLoading}>
          {isLoading ? "Loading" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
