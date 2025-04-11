"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "@/lib/validation";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import FormProgress from "@/components/FormProgress";
import PersonalInfoStep from "@/components/FormStep1";
import AddressStep from "@/components/FormStep2";
import AccountStep from "@/components/FormStep3";
import FormSummary from "@/components/FormSummary";
import { z } from "zod";

export default function MultiStepForm() {
  // Initialize form methods
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      zipCode: "",
      username: "",
      password: "",
    },
  });

  const { handleSubmit, watch } = methods;
  const formData = watch();

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalInfoStep key={1} />,
      <AddressStep key={2} />,
      <AccountStep key={3} />,
      <FormSummary data={formData} key={4} />,
    ]);

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted:", data);
    next();
  }

  return (
    // Wrap your entire form with FormProvider
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <FormProgress />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">{step}</div>

          <div className="flex justify-between">
            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Back
              </button>
            )}

            {!isLastStep ? (
              <button
                type="button"
                onClick={next}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
