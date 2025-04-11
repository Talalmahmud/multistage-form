"use client";

import { useFormContext } from "react-hook-form";
import { personalInfoSchema } from "@/lib/validation";
import { z } from "zod";

export default function FormStep1() {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof personalInfoSchema>>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Personal Information
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Please provide your personal details.
      </p>

      <div className="space-y-4">
        {/* Full Name Field */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.fullName ? "border-red-500" : ""
            }`}
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName && (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.email ? "border-red-500" : ""
            }`}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.phone ? "border-red-500" : ""
            }`}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
