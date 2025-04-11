import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { X } from "lucide-react";
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";

function SigninForm() {
  const loginSchema: ZodSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .refine((val) => val.match(/[0-9]/), "Must contain at least one number")
      .refine((val) => val.match(/[A-Z]/), "Must contain at least one uppercase letter")
      .refine((val) => val.match(/[a-z]/), "Must contain at least one lowercase letter")
      .refine((val) => val.match(/[^A-Za-z0-9]/), "Must contain a special character"),
  });

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSubmit(data: z.infer<typeof loginSchema>) {
    console.log(data);
    toast.success("Signin successful", { duration: 3000 });
  }

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <h1 className="text-3xl font-bold mb-10">
        <span className="text-green-300">Civic</span>
        <span className="text-white">Link</span>
      </h1>

      {/* Card Container */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          title="Close"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">Sign-up</h2>
        <hr className="mb-6" />

        {/* Form */}
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter Your Email"
                      className="h-12 border border-gray-300 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter Your Password"
                      className="h-12 border border-gray-300 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            <div className="-mt-1 text-sm text-blue-600 hover:underline cursor-pointer w-fit">
              Forgot your Password?
            </div>

            <Button
              type="submit"
              className="bg-green-900 text-white h-12 mt-2 text-base font-semibold hover:bg-green-800"
            >
              Continue
            </Button>
          </form>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-6 text-sm text-gray-400">
          <hr className="flex-grow border-gray-200" />
          <span className="px-3 text-blue-500">Or Continue With</span>
          <hr className="flex-grow border-gray-200" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-sm text-sm shadow-sm">
            <FaFacebookF /> Facebook
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-sm text-sm shadow-sm">
            <FaApple /> Apple ID
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-sm text-sm shadow-sm">
            <FaGoogle /> Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;