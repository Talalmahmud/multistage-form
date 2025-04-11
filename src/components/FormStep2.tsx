"use client";

import { useFormContext } from "react-hook-form";
import { addressSchema } from "@/lib/validation";
import { z } from "zod";

export default function FormStep2() {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof addressSchema>>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Address Details
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Please provide your address information.
      </p>

      <div className="space-y-4">
        {/* Street Address Field */}
        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Street Address *
          </label>
          <input
            id="street"
            type="text"
            {...register("street")}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.street ? "border-red-500" : ""
            }`}
            aria-invalid={errors.street ? "true" : "false"}
          />
          {errors.street && (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.street.message}
            </p>
          )}
        </div>

        {/* City Field */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            City *
          </label>
          <input
            id="city"
            type="text"
            {...register("city")}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.city ? "border-red-500" : ""
            }`}
            aria-invalid={errors.city ? "true" : "false"}
          />
          {errors.city && (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.city.message}
            </p>
          )}
        </div>

        {/* Zip Code Field */}
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Zip Code *
          </label>
          <input
            id="zipCode"
            type="text"
            inputMode="numeric"
            {...register("zipCode")}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.zipCode ? "border-red-500" : ""
            }`}
            aria-invalid={errors.zipCode ? "true" : "false"}
          />
          {errors.zipCode && (
            <p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errors.zipCode.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
