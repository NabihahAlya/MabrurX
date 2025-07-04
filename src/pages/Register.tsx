import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { Layout } from '@/components/layout/Layout';
import { useAuth } from '@/lib/auth';

export default function Register() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Helmet>
        <title>Register | MabrurX</title>
      </Helmet>
      <Layout>
        <div className="container max-w-screen-xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold text-primary">Join MabrurX</h1>
              <p className="text-lg text-gray-600">
                Create an account to book Hajj and Umrah packages, access exclusive features, and receive personalized recommendations.
              </p>
              <div className="hidden md:block">
                <div className="relative mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg transform rotate-3"></div>
                  <div className="relative bg-white p-6 rounded-lg border shadow-md">
                    <blockquote className="italic text-gray-700">
                      "Register today and begin your journey to the holy lands with MabrurX's personalized service and guidance."
                    </blockquote>
                    <div className="mt-4 font-semibold">- MabrurX Team</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <RegisterForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}