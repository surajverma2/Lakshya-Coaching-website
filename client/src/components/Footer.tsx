import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#courses", label: "Courses" },
    { href: "#teachers", label: "Teachers" },
    { href: "#toppers", label: "Toppers" },
    { href: "#results", label: "Results" }
  ];

  const courses = [
    { href: "#courses", label: "Classes 6-10" },
    { href: "#courses", label: "12th PCM" },
    { href: "#courses", label: "12th PCB" },
    { href: "#courses", label: "Agriculture" },
    { href: "#courses", label: "Arts Stream" },
    { href: "#courses", label: "BSTC & PTET" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-custom text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent-custom rounded-full flex items-center justify-center">
                <GraduationCap className="text-primary-custom text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Lord Shiva Lakshya</h3>
                <p className="text-blue-200 text-sm">Coaching Classes</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              Empowering students to achieve their educational goals with divine guidance and expert teaching.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-accent-custom hover:text-primary-custom transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-accent-custom hover:text-primary-custom transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-accent-custom hover:text-primary-custom transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-accent-custom hover:text-primary-custom transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button 
                    onClick={() => handleNavClick(link.href)}
                    className="text-blue-200 hover:text-accent-custom transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.label}>
                  <button 
                    onClick={() => handleNavClick(course.href)}
                    className="text-blue-200 hover:text-accent-custom transition-colors text-left"
                  >
                    {course.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent-custom mt-1 h-4 w-4 flex-shrink-0" />
                <p className="text-blue-200 text-sm">Khera Rampur, Kota(Raj.),325001</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent-custom h-4 w-4 flex-shrink-0" />
                <p className="text-blue-200 text-sm">+91 7976771390</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent-custom h-4 w-4 flex-shrink-0" />
                <p className="text-blue-200 text-sm">info@lordshivalakshya.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200">
            &copy; 2024 Lord Shiva Lakshya Coaching Classes. All rights reserved. | 
            Made with <i className="fas fa-heart text-accent-custom"></i> for education.
            Website designed and developed by <i className="fas fa-heart text-accent-custom"></i> Suraj Verma IIT BHU(Varanasi).


          </p>
        </div>
      </div>
    </footer>
  );
}
