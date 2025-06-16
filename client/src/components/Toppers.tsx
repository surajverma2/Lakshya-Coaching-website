import { Card, CardContent } from "@/components/ui/card";
import monika from "../images/monika.jpeg";
import jiya from "../images/jiya.jpeg";
import Khusip from "../images/Khusi_pareta.jpeg";
import khusig from "../images/Khushi_Gocher.jpeg";
import madhvi from "../images/Madhavi.jpeg";
import rashmi from "../images/rashmi.jpeg";

export default function Toppers() {
  const toppers = [
    {
      name: "Jiya Verma",
      stream: "10th RBSE - 96%, S-100,SAN.-100",
      percentage: "96%",
      image: jiya,
      testimonial: "Thanks to the excellent guidance, I'm now confident about my future goals.",
      badgeColor: "bg-purple-500"
    },
    {
      name: "Monika Verma",
      stream: "12th PCB - 95%, P-98,B-98",
      percentage: "95%",
      image: monika,
      testimonial: "The biology concepts were made so simple. Now I'm ready for NEET!",
      badgeColor: "bg-green-500"
    },
    {
      name: "Khusi Goacher",
      stream: "10th RBSE - 97%, M-100",
      percentage: "97%",
      image: khusig,
      testimonial: "Lakshya Coaching gave me the confidence to succeed. The teachers' dedication is unmatched!",
      badgeColor: "bg-primary-custom"
    },
    {
      name: "Madhvi Nama",
      stream: "10th RBSE - 95.33%, M-100",
      percentage: "94%",
      image: madhvi,
      testimonial: "If you want results, Lakshya Coaching is the place! I scored 100/100 in Maths & SST — all thanks to their excellent teaching.",
      badgeColor: "bg-green-600"
    },
    {
      name: "Rashmi Suman",
      stream: "10th RBSE - 95%, S-100",
      percentage: "95%",
      image: rashmi,
      testimonial: "Lord Shiva Coaching gave me the confidence to succeed. The teachers' dedication is unmatched!",
      badgeColor: "bg-primary-custom"
    },
    {
      name: "Khusi Pareta",
      stream: "12th PCB - 93.20%, C-100",
      percentage: "93.20%",
      image: Khusip,
      testimonial: "At Lakshya Coaching, I discovered my true potential With their support.",
      badgeColor: "bg-green-500"
    },
    // {
    //   name: "Sunita Sharma",
    //   stream: "BSTC Qualified",
    //   percentage: "Rank 15",
    //   image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    //   testimonial: "BSTC preparation was thorough. Now I'm a proud teacher!",
    //   badgeColor: "bg-red-500"
    // },
    // {
    //   name: "Rahul Meena",
    //   stream: "12th Arts - 89%",
    //   percentage: "89%",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    //   testimonial: "Arts stream guidance was exceptional. Ready for BA entrance!",
    //   badgeColor: "bg-purple-600"
    // }
  ];

  return (
    <section id="toppers" className="py-20 gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-custom mb-4">Our Proud Toppers</h2>
          <div className="w-24 h-1 bg-primary-custom mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Celebrating the success stories of our brilliant students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl card-hover">
              <CardContent className="p-6">
                <img 
                  src={topper.image} 
                  alt={`${topper.name} - Top Student`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary-custom mb-2">{topper.name}</h3>
                  <p className="text-accent-custom font-semibold mb-2">{topper.stream}</p>
                  <div className={`${topper.badgeColor} text-white px-4 py-2 rounded-full text-2xl font-bold mb-4 inline-block`}>
                    {topper.percentage}
                  </div>
                  <p className="text-gray-600 italic">"{topper.testimonial}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
