import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
}
from "@/components/ui/form"

import { z } from "zod";
import {useForm } from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

function SignupForm() {
    const loginSchema: ZodSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6).refine((val) => {
            return val.match(/[0-9]/);
        }, "Password must contain at least one number").refine((val) => {
            return val.match(/[A-Z]/);
        }, "Password must contain at least one uppercase letter").refine((val) => {
            return val.match(/[a-z]/);
        }, "Password must contain at least one lowercase letter").refine((val) => {
            return val.match(/[^A-Za-z0-9]/);
        }, "Password must contain at least one special character"),
        confirmPassword: z.string().min(6)
    }).refine((data) => {
        return data.password === data.confirmPassword;
    }, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    })

    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    function handleSubmit(data: any){
        console.log(data)
        toast.warning("Signup successful", { duration: 3000 })
    }

    return (
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(handleSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-none h-12 border-gray-400 focus:ring-green-400"
                  />
                </FormControl>
                <FormMessage />
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
                    placeholder="Enter your password"
                    className="rounded-none h-12 border-gray-400 focus:ring-green-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirm your password"
                    className="rounded-none h-12 border-gray-400
                    focus:ring-green-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* remember to disable and add indicator when submitting */}
          <Button
            type="submit"
            className="bg-home text-white h-12 mt-5 text-lg md:w-[40%] hover:bg-green-500 hover:text-white"
          >
            Continue
          </Button>
        </form>
      </Form>
    );
}


export default SignupForm