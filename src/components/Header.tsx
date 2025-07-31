import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AF</span>
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            AfriFuta
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Find Players
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Opportunities
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            For Scouts
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300" asChild>
              <Link to="/join">Join AfriFuta</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;