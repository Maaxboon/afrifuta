import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Trophy, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-football.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="African footballers in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 mb-6 backdrop-blur-sm border border-primary/20">
            <MapPin className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Connecting Africa's Football Talent</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Football
            <span className="block bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              Dreams Start Here
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Join thousands of African footballers connecting with scouts, agents, and clubs worldwide. 
            Showcase your talent, find opportunities, and take your career to the next level.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/join">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto md:mx-0">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">5K+</span>
              </div>
              <p className="text-gray-300 text-sm">Active Players</p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <Trophy className="w-5 h-5 text-secondary mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-300 text-sm">Opportunities</p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <MapPin className="w-5 h-5 text-accent mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">50+</span>
              </div>
              <p className="text-gray-300 text-sm">Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;