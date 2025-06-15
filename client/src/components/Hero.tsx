import { BookOpen, Phone, Trophy, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Achieve Your <span className="text-accent-custom">Lakshya</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8">
          With Lord Shiva's Blessings!
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
          RBSE Board | Classes 6th to 12th | PCM, PCB, Agriculture, Arts | BSTC | PTET
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => handleScrollTo("courses")}
            className="btn-accent px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore Courses
          </Button>
          <Button
            onClick={() => handleScrollTo("contact")}
            className="bg-white text-primary-custom hover:bg-gray-100 border-2 border-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center transition-all"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-accent-custom w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-primary-custom text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-300">90%+ students score above 90% in board exams</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-custom w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary-custom text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-300">15+ years experienced qualified teachers</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-custom w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary-custom text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Excellence</h3>
            <p className="text-gray-300">Serving Khera Rampur, Kota with pride</p>
          </div>
        </div>
      </div>
    </section>
  );
}
