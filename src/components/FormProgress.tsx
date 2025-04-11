"use client";

import { useMultiStepForm } from "@/hooks/useMultiStepForm";

export default function FormProgress() {
  const { currentStepIndex, steps, goTo } = useMultiStepForm([]);

  return (
    <div className="flex justify-between mb-8">
      {steps.map((_, index) => (
        <button
          key={index}
          onClick={() => goTo(index)}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            index <= currentStepIndex
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
