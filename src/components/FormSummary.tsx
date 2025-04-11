"use client";

import { FormValues } from "@/lib/validation";
import { useState } from "react";

export default function FormSummary({ data }: { data: FormValues }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Review Your Information
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Please review your information before submitting.
      </p>

      <div className="space-y-8">
        {/* Personal Information */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Personal Information
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Full Name
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                {data.fullName}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Email
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                {data.email}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Phone
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                {data.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Address Information
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Street
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                {data.street}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                City
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                {data.city}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Zip Code
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                {data.zipCode}
              </p>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Account Information
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Username
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                {data.username}
              </p>
            </div>
            <div className="relative">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Password
              </p>
              <div className="flex items-center mt-1">
                <p className="text-sm text-gray-900 dark:text-gray-200">
                  {showPassword ? data.password : "••••••••"}
                </p>
                <button
                  type="button"
                  className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
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
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          Please verify all information is correct before submitting.
        </p>
      </div>
    </div>
  );
}
