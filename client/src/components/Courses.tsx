import { School, Calculator, Microscope, Sprout, Book, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Courses() {
  const courses = [
    {
      icon: School,
      title: "Classes 6-10",
      subtitle: "RBSE Board Foundation",
      features: [
        "All Subjects Coverage",
        "Strong Foundation Building",
        "Regular Assessments",
        "Doubt Clearing Sessions"
      ],
      color: "bg-primary-custom",
      buttonClass: "btn-primary"
    },
    {
      icon: Calculator,
      title: "PCM Stream",
      subtitle: "Physics, Chemistry, Maths",
      features: [
        // "JEE Foundation",
        // "Advanced Problem Solving",
        // "Practical Applications",
        // "Engineering Preparation"
        "Concept Clarity",
        "Numerical Practice",
        "Board Focused Prep",
        "Weekly Tests"
       

      ],
      color: "bg-accent-custom",
      buttonClass: "btn-accent"
    },
    {
      icon: Microscope,
      title: "PCB Stream",
      subtitle: "Physics, Chemistry, Biology",
      features: [
        // "NEET Foundation",
        // "Medical Entrance Prep",
        // "Laboratory Practice",
        // "Biology Mastery"
        "NCERT Based",
        "Bio Diagrams",
        "Chemistry Core",
        "Physics Concepts",
      ],
      color: "bg-green-500",
      buttonClass: "bg-green-500 hover:bg-green-600 text-white"
    },
    {
      icon: Sprout,
      title: "Agriculture",
      subtitle: "Agricultural Sciences",
      features: [
        // "Modern Farming Techniques",
        // "Crop Science",
        // "Soil & Water Management",
        // "Agricultural Economics"
        "Theory Coverage",
        "Practical Focus",
        "Rural Relevance",
        "Easy Revision"
      ],
      color: "bg-green-600",
      buttonClass: "bg-green-600 hover:bg-green-700 text-white"
    },
    {
      icon: Book,
      title: "Arts Stream",
      subtitle: "Literature & Social Sciences",
      features: [
        "History & Geography",
        "Political Science",
        "Economics & Sociology",
        "Language Literature"
      ],
      color: "bg-purple-500",
      buttonClass: "bg-purple-500 hover:bg-purple-600 text-white"
    },
    {
      icon: Award,
      title: "BSTC & PTET",
      subtitle: "Teacher Training Programs",
      features: [
        "Complete Syllabus Coverage",
        "Mock Tests & Practice",
        // "Teaching Methodology",
        "Mental Ability & Reasoning",
        "General Knowledge & Hindi-English",
      ],
      color: "bg-red-500",
      buttonClass: "bg-red-500 hover:bg-red-600 text-white"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-custom mb-4">Courses Offered</h2>
          <div className="w-24 h-1 bg-accent-custom mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic programs designed to excel in RBSE Board and competitive examinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card key={index} className="card-hover bg-white rounded-2xl shadow-xl border-t-4 border-primary-custom">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${course.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-custom mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.subtitle}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-accent-custom rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Button className={`w-full py-3 rounded-lg font-semibold transition-colors ${course.buttonClass}`}>
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
