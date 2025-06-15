import { Card, CardContent } from "@/components/ui/card";
import gsirImage from "../images/gsir.jpeg";
import jitsir from "../images/jitsir.jpeg";
import anilsir from "../images/anilsir.jpeg";
import snsir from "../images/snsir.jpeg";
import nisha from "../images/Nisha.jpeg";

export default function Teachers() {
  const teachers = [
    {
      name: "Gajendra Suman",
      subject: "Physics Expert",
      description: "15+ years experience, known for concept clarity and making physics simple for students",
      image: gsirImage,
      badges: ["Physics", "RBSE"],
      badgeColors: ["bg-primary-custom text-white", "bg-accent-custom text-primary-custom"]
    },
    {
      name: "Jitendra Sir",
      subject: "Mathematics Expert",
      description: "15+ years experience, Expert in RBSE Mathematics with proven results and innovative teaching methods",
      image: jitsir,
      badges: ["Mathematics", "RBSE"],
      badgeColors: ["bg-primary-custom text-white", "bg-accent-custom text-primary-custom"]
    },
    {
      name: "Satyanarayan Sir",
      subject: "Chemistry & Biology",
      description: "15+ years of experience in teaching Chemistry and Biology, known for simplifying complex concepts and making science easy.",
      image: snsir,
      badges: ["Chemistry", "Biology"],
      badgeColors: ["bg-primary-custom text-white", "bg-green-500 text-white"]
    },
    {
      name: "Anil Sir",
      subject: "Junior Mathematics",
      description: "Experienced educator with 10+ years of teaching Maths to classes 6th to 8th, focused on building strong fundamentals.",
      image: anilsir,
      badges: ["Mathematics", "6th-8th"],
      badgeColors: ["bg-primary-custom text-white", "bg-accent-custom text-primary-custom"]
    },
    {
      name: "Nisha Ma'am",
      subject: "English Expert",
      description: "Grammar and literature expert with focus on communication skills development",
      image: nisha,
      badges: ["English", "Literature"],
      badgeColors: ["bg-primary-custom text-white", "bg-purple-500 text-white"]
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-custom mb-4">Our Expert Faculty</h2>
          <div className="w-24 h-1 bg-accent-custom mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced educators dedicated to your academic success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teachers.map((teacher, index) => (
            <Card key={index} className="bg-gray-50 rounded-2xl card-hover">
              <CardContent className="p-6 text-center">
                <img 
                  src={teacher.image} 
                  alt={`${teacher.name} - ${teacher.subject}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold text-primary-custom mb-2">{teacher.name}</h3>
                <p className="text-accent-custom font-semibold mb-3">{teacher.subject}</p>
                <p className="text-gray-600 mb-4">{teacher.description}</p>
                <div className="flex justify-center space-x-2 flex-wrap gap-2">
                  {teacher.badges.map((badge, badgeIndex) => (
                    <span 
                      key={badgeIndex}
                      className={`px-3 py-1 rounded-full text-sm ${teacher.badgeColors[badgeIndex]}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Other Teachers Card */}
          <Card className="gradient-primary rounded-2xl text-white card-hover">
            <CardContent className="p-6 text-center">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-users text-4xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">& Other Qualified Teachers</h3>
              <p className="text-blue-100 mb-4">Our team includes many more experienced educators specializing in various subjects</p>
              <div className="flex justify-center space-x-2">
                <span className="bg-white text-primary-custom px-3 py-1 rounded-full text-sm">All Subjects</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
