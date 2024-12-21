import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-gradient min-h-[80vh] flex items-center justify-center text-white px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Your New Project
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Start building something amazing with React and Tailwind CSS
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          className="group"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;