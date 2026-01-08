import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="section-padding flex items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 rounded-3xl bg-sage-light flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl font-display font-semibold text-primary">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
