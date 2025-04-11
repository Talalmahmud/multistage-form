import { z } from "zod";

// Step 1: Personal info schema
export const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

// Step 2: Address schema
export const addressSchema = z.object({
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z
    .string()
    .min(5, "Zip code must be at least 5 digits")
    .regex(/^\d+$/, "Zip code must contain only numbers"),
});

// ✅ Step 3: Base account schema (used for shape access and refinement)
const accountBaseSchema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
});

// ✅ Step 4: Refined schema for Step 3 UI validation
export const accountSchema = accountBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }
);

// ✅ Step 5: Final schema for submission — exclude confirmPassword
export const formSchema = z.object({
  ...personalInfoSchema.shape,
  ...addressSchema.shape,
  ...accountBaseSchema.omit({ confirmPassword: true }).shape,
});

// ✅ Types
export type Step3AccountFormValues = z.infer<typeof accountSchema>; // For Step 3
export type FormValues = z.infer<typeof formSchema>; // Final submission
