export default function Results() {
  const stats = [
    { value: "100%", label: "Success Rate", color: "gradient-primary" },
    { value: "500+", label: "Students Guided", color: "bg-green-500" },
    { value: "95%+", label: "High Scorers", color: "gradient-accent" },
    { value: "15+", label: "Years Excellence", color: "bg-purple-500" }
  ];

  const yearlyResults = [
    {
      year: "2024",
      title: "Session 2023-24",
      description: "Exceptional performance with record-breaking results",
      achievements: [
        { subject: "12th PCB: Overall: 100% Pass Rate", color: "bg-green-100 text-green-800" },
        { subject: "12th PCM: Overall: 100% Pass Rate", color: "bg-blue-100 text-blue-800" },
        { subject: "10th: Overall: 100% Pass Rate", color: "bg-purple-100 text-purple-800" }
      ],
      toppers: [
        { name: "Anjali Sharma", marks: "100/100", percentage: "95%" },
        { name: "Rahul Yadav", marks: "100/100", percentage: "96%" },
        { name: "Sneha Meena", marks: "99/100", percentage: "94.5%" }
      ]
    },
    {
      year: "2023",
      title: "Session 2022-23",
      description: "Consistent excellence across all streams",
      achievements: [
        { subject: "BSTC: 85% Selection", color: "bg-green-100 text-green-800" },
        { subject: "12th PCM & PCB & Arts: Overall: 100% Pass Rate", color: "bg-blue-100 text-blue-800" },
        { subject: "Agriculture: Overall: 100% Pass Rate", color: "bg-yellow-100 text-yellow-800" }
      ],
      toppers: [
        { name: "Priya Verma", marks: "100/100", percentage: "94%" },
        { name: "Kunal Sharma", marks: "98/100", percentage: "92.5%" }
      ]
    },
    {
      year: "2022",
      title: "Session 2021-22",
      description: "Outstanding performance despite challenges",
      achievements: [
        { subject: "12th PCM & PCB: Overall: 100% Pass Rate", color: "bg-green-100 text-green-800" },
        { subject: "PTET: 78% Selection", color: "bg-blue-100 text-blue-800" },
        { subject: "Top Performers: 25+", color: "bg-purple-100 text-purple-800" }
      ],
      toppers: [
        { name: "Mohit Sahu", marks: "100/100", percentage: "93%" },
        { name: "Shivani Nagar", marks: "99/100", percentage: "91%" }
      ]
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-custom mb-4">Outstanding Results</h2>
          <div className="w-24 h-1 bg-accent-custom mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every year, many students score above 90% in board exams through our comprehensive guidance
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center p-6 ${stat.color} text-white rounded-2xl`}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <p className={index === 2 ? "text-yellow-700" : "text-current opacity-90"}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Year-wise Results Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary-custom text-center mb-12">Year-wise Excellence</h3>

          <div className="space-y-8">
            {yearlyResults.map((result, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl">
                <div className={`w-20 h-20 ${index === 0 ? 'bg-primary-custom' : index === 1 ? 'bg-accent-custom' : 'bg-green-500'} text-white rounded-full flex items-center justify-center font-bold text-xl`}>
                  {result.year}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-primary-custom mb-2">{result.title}</h4>
                  <p className="text-gray-600 mb-2">{result.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {result.achievements.map((achievement, i) => (
                      <span key={i} className={`${achievement.color} px-3 py-1 rounded-full text-sm`}>
                        {achievement.subject}
                      </span>
                    ))}
                  </div>

                  {/* Toppers List */}
                  {result.toppers && (
                    <div className="mt-2">
                      <h5 className="font-semibold text-primary-custom mb-1">Top Performers:</h5>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        {result.toppers.map((topper, i) => (
                          <li key={i}>
                            {topper.name} – {topper.marks}, {topper.percentage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
