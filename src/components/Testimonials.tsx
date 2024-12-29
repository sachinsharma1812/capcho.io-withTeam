interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  image: string;
}

function Testimonial({ quote, author, title, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={author}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-bold text-xl text-blue-900">{author}</div>
          <div className="text-gray-600">{title}</div>
        </div>
      </div>
      <p className="text-lg text-gray-700 italic">"{quote}"</p>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Capcho.io transformed our digital presence completely. Their innovative solutions helped us achieve record growth in just months.",
      author: "Sarah Johnson",
      title: "CEO, TechVision Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      quote: "The team's expertise in mobile app development is outstanding. They delivered a product that exceeded our expectations.",
      author: "Michael Chen",
      title: "Founder, InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      quote: "Their digital marketing strategies helped us triple our online engagement and boost conversions significantly.",
      author: "Emily Rodriguez",
      title: "Marketing Director, GrowthX",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-200">
            Hear from businesses we've helped transform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}