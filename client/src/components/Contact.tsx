import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Lord Shiva Lakshya Coaching Classes\nKhera Rampur,Kota (Raj.)",
      color: "bg-primary-custom"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9660318404\n+91 7976771390\n+91 9887015757",
      color: "bg-accent-custom"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@lordshivalakshya.com\nadmissions@lordshivalakshya.com",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Sun: 6:00 AM - 8:00 PM",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-custom mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-accent-custom mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey? Get in touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-custom mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${info.color} text-white rounded-full flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="mx-auto h-12 w-12 mb-2" />
                  <p className="font-semibold">Google Maps Integration</p>
                  <p className="text-sm"> Lord Shiva Lakshya Coaching Classes Khera Rampur, Kota (Raj.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-primary-custom mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Interest
                </label>
                <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="class-6-10">Classes 6-10</SelectItem>
                    <SelectItem value="pcm">12th PCM</SelectItem>
                    <SelectItem value="pcb">12th PCB</SelectItem>
                    <SelectItem value="agriculture">Agriculture</SelectItem>
                    <SelectItem value="arts">Arts Stream</SelectItem>
                    <SelectItem value="bstc">BSTC</SelectItem>
                    <SelectItem value="ptet">PTET</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  rows={4}
                  placeholder="Tell us about your academic goals and how we can help you..."
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
