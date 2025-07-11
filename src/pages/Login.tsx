import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LoginForm } from "@/components/auth/LoginForm";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/lib/auth";

export default function Login() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      // If user is authenticated, check role and navigate
      if (user?.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user?.role === "user") {
        navigate("/user/dashboard");
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <>
      <Helmet>
        <title>Login | MabrurX</title>
      </Helmet>
      <Layout>
        <div className="container max-w-screen-xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold text-primary">Welcome back to MabrurX</h1>
              <p className="text-lg text-gray-600">Log in to access your account, manage your bookings, and explore our exclusive Hajj and Umrah packages.</p>
              <div className="hidden md:block">
                <div className="relative mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg transform -rotate-3"></div>
                  <div className="relative bg-white p-6 rounded-lg border shadow-md">
                    <blockquote className="italic text-gray-700">"The journey to Makkah is the journey of a lifetime. Let MabrurX guide your way to a blessed pilgrimage."</blockquote>
                    <div className="mt-4 font-semibold">- MabrurX Team</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <LoginForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

