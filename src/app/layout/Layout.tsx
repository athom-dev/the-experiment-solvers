import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import AppLoader from "./Loader";
import Header from "./Header"
import Footer from "./Footer";
export default function AppLayout () {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(true);

  useEffect(() => {
    setIsRouteLoading(true);

    const timer = window.setTimeout(() => setIsRouteLoading(false), 250);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AppLoader isLoading={isRouteLoading} />
      <Suspense fallback={<AppLoader isLoading={true} />}>
        <Header />
        <Outlet />
        <Footer />
        
      </Suspense>
    </>
  )
}