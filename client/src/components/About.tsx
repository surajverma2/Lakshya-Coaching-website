export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-custom mb-4">About Lord Shiva Lakshya</h2>
          <div className="w-24 h-1 bg-accent-custom mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students to achieve their educational goals with divine guidance and expert teaching
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Students studying together in classroom */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Students studying together" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent-custom p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-custom">500+</div>
                <div className="text-sm text-gray-700">Students Guided</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary-custom mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education and guidance to students from classes 6th to 12th, focusing on RBSE Board curriculum. We specialize in all streams including PCM, PCB, Agriculture, and Arts, along with competitive exam preparation for BSTC and PTET.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary-custom mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted coaching institute in Rajasthan, helping every student achieve their 'Lakshya' (goal) through dedicated teaching, personalized attention, and comprehensive academic support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 gradient-primary text-white rounded-xl">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 gradient-accent text-primary-custom rounded-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
