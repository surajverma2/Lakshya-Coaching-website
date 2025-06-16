import { Card, CardContent } from "@/components/ui/card";
import suraj from "../images/suraj1.jpeg";
import tanu from "../images/tanu2.jpeg";

export default function Alumni() {
  const alumni = [
    {
      name: "Suraj Verma",
      batch: "Class of 2020",
      achievement: "IIT BHU(Varanasi)",
      image: suraj,
      category: "Software Engineer at Tudip Digital",
      categoryColor: "bg-accent-custom text-primary-custom",
      message: "Lakshya Coaching gave me the direction and discipline I needed to crack IIT. Forever grateful!"
    },
    {
      name: "Tanu Saini",
      batch: "Class of 2022",
      achievement: "Kolkata - MBBS",
      image: tanu,
      category: "NEET Medical",
      categoryColor: "bg-green-500 text-white",
      message: "The foundation I built here helped me clear NEET and chase my dream of becoming a doctor."
    },
    {
      name: "Archana Kushwaha",
      batch: "Class of 2018",
      achievement: "RTU - B.Tech",
      image: "https://static.vecteezy.com/system/resources/previews/008/437/407/non_2x/female-icon-for-website-symbol-presentation-free-vector.jpg",
      category: "Engineer at DCM Shriram Kota",
      categoryColor: "bg-purple-500 text-white",
      message: "Lakshya gave me the courage to believe in myself and the skills to succeed in engineering."
    }
  ];

  return (
    <section id="alumni" className="py-20 gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Proud Alumni</h2>
          <div className="w-24 h-1 bg-accent-custom mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our students have made us proud by securing admissions in top institutions across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl hover:bg-opacity-20 transition-all">
              <CardContent className="p-6">
                <div className="text-center">
                  <img 
                    src={alum.image} 
                    alt={`${alum.name} - ${alum.category} Alumni`}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-accent-custom"
                  />
                  <h3 className="text-xl font-bold mb-2">{alum.name}</h3>
                  <p className="text-accent-custom font-semibold mb-2">{alum.batch}</p>
                  <p className="text-blue-100 mb-3">{alum.achievement}</p>
                  <div className={`${alum.categoryColor} px-3 py-1 rounded-full text-sm inline-block`}>
                    {alum.category}
                  </div>
                  <p className="mt-4 text-blue-100 text-sm italic">"{alum.message}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alumni Success Message */}
        <div className="text-center mt-16 p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Join Our Success Story</h3>
          <p className="text-blue-100 text-lg">
            "From small towns to big dreams - our alumni are proof that with the right guidance, 
            every student can achieve their Lakshya and make their mark in the world."
          </p>
        </div>
      </div>
    </section>
  );
}
