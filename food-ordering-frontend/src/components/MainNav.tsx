import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";
import { FileText } from "lucide-react";

const NAV_AUTH_WIDTH = "min-w-[120px]";

const MainNav = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <nav className="flex items-center gap-4 lg:gap-6">
      {/* Nav links – always visible, no layout shift */}
      <Link
        to="/search/all"
        className="font-bold hover:text-orange-500 transition-colors"
      >
        Restaurants
      </Link>
      <Link
        to="/order-status"
        className="font-bold hover:text-orange-500 transition-colors"
      >
        Order Status
      </Link>
      <Link
        to="/business-insights"
        className="font-bold hover:text-orange-500 transition-colors"
      >
        Business Insights
      </Link>
      <Link
        to="/api-docs"
        className="font-bold hover:text-orange-500 transition-colors"
      >
        API Docs
      </Link>

      {/* Auth area – fixed width to prevent layout shift */}
      <div className={`flex items-center justify-end ${NAV_AUTH_WIDTH}`}>
        {isLoggedIn ? (
          <UsernameMenu />
        ) : (
          <Link to="/sign-in">
            <Button
              variant="ghost"
              className="font-bold hover:text-orange-500 hover:bg-white border-2 border-orange-500"
            >
              Log In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
