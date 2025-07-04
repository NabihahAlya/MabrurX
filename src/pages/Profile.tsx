import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Layout } from '@/components/layout/Layout';
import { UserProfile } from '@/components/auth/UserProfile';
import { useAuth } from '@/lib/auth';

export default function Profile() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Helmet>
        <title>My Profile | MabrurX</title>
      </Helmet>
      <Layout>
        <div className="container max-w-screen-xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary">My Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and settings</p>
          </div>
          <UserProfile />
        </div>
      </Layout>
    </>
  );
}