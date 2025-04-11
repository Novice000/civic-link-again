import SignupForm from "@/components/auth/signup-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {XIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-home flex flex-col justify-center h-screen items-center">
      <h1 className="text-6xl mb-20">
        <span className="text-green-400">Civic</span>Link
      </h1>
      <Card className="bg-white w-[90%] md:w-[40%] px-5 py-5 shadow-2xl">
        <CardHeader className="relative">
          <CardTitle className="border-b text-gray-400 border-gray-300 pb-5 text-4xl">
            Sign Up
          </CardTitle>
          <XIcon className="absolute top-2 right-10" onClick={() => navigate("/")}/>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUpPage;
