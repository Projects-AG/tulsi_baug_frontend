interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  comment: string;
}

const Testimonial = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dean D.",
      role: "Director",
      image: "/images/test1.png",
      comment:
        "Great quality products – Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper.",
    },
    {
      id: 2,
      name: "Cristian L.",
      role: "Manager",
      image: "/images/test2.png",
      comment:
        "Best services ever – Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome.",
    },
    {
      id: 3,
      name: "Leonel R.",
      role: "Designer",
      image: "/images/test3.png",
      comment:
        "Top notch support – Flags, programs for birthday, and occasion welcome are largely still mainstream on paper exceptional capacities.",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-home2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What People Are Saying
        </h2>
        <p className="text-gray-500 mt-2">
          We provide support for more than 15K+ Businesses.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-6 text-center"
          >
            {/* Avatar and Name */}
            <div className="flex items-center -mt-10 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow mr-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900">
                {item.name}{" "}
                <span className="text-gray-400 font-normal text-sm">
                  {item.role}
                </span>
              </h4>
            </div>

            {/* Comment */}
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              " {item.comment} "
            </p>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-10">
        <span className="w-2 h-2 rounded-full bg-gray-900"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
};

export default Testimonial;
