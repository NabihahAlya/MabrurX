import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="text-8xl font-bold text-mabrurx-gold">404</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 text-[12rem] font-bold text-mabrurx-navy">
                404
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-mabrurx-navy">Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <Link to="/">
              <Button size="lg" className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-white">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}