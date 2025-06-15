import { Card, CardContent } from "@/components/ui/card";
import monika from "../images/monika.jpeg";

export default function Toppers() {
  const toppers = [
    {
      name: "Jiya Verma",
      stream: "10th RBSE - 96%",
      percentage: "96%",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      testimonial: "Thanks to the excellent guidance, I'm now confident about my future goals.",
      badgeColor: "bg-purple-500"
    },
    {
      name: "Monika Verma",
      stream: "12th PCB - 95%",
      percentage: "95%",
      image: monika,
      testimonial: "The biology concepts were made so simple. Now I'm ready for NEET!",
      badgeColor: "bg-green-500"
    },
    {
      name: "Sandhya Meena",
      stream: "12th PCM - 81%",
      percentage: "81%",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      testimonial: "Lord Shiva Coaching gave me the confidence to succeed. The teachers' dedication is unmatched!",
      badgeColor: "bg-primary-custom"
    },
    {
      name: "Hanshika Rathore",
      stream: "12th Agriculture - 94%",
      percentage: "94%",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      testimonial: "Agriculture stream opened new opportunities. Great teaching methods!",
      badgeColor: "bg-green-600"
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
