"use client";

import { useFormContext } from "react-hook-form";
import { accountSchema } from "@/lib/validation";
import { z } from "zod";
import { useState } from "react";

export default function FormStep3() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<z.infer<typeof accountSchema>>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Account Setup
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Create your account credentials.
      </p>

      <div className="space-y-4">
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Username *
          </label>
          <input
            id="username"
            type="text"
            {...register("username")}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.username ? "border-red-500" : ""
            }`}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username && (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password *
          </label>
          <div className="relative">
            <input
              id="password"
              autoComplete="new-password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.password ? "border-red-500" : ""
              }`}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.password.message}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Must be at least 6 characters long
          </p>
        </div>

        {/* Confirm Password Field */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Confirm Password *
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              autoComplete="new-password"
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              aria-invalid={errors.confirmPassword ? "true" : "false"}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {/* Eye icon SVG remains the same */}
            </button>
          </div>
          {errors.confirmPassword ? (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.confirmPassword.message}
            </p>
          ) : password && confirmPassword ? (
            <p
              className={`mt-1 text-xs ${
                password === confirmPassword
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {password === confirmPassword
                ? "Passwords match"
                : "Passwords do not match"}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
