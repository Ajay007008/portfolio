import React from "react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Product Manager, w3villa",
    feedback:
      "Ajay is a top-notch developer! His attention to detail and ability to deliver complex frontend interfaces quickly is truly commendable.",
    image:
      "https://www.famousbirthdays.com/faces/sharma-ananya-image.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "Tech Lead, MoAF",
    feedback:
      "Working with Ajay was a smooth experience. He understands backend logic deeply and writes clean, scalable APIs.",
    image:
      "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc=",
  },
  {
    name: "Priya Nair",
    role: "UI/UX Designer, Tata Motors",
    feedback:
      "Ajay brings creativity and strong technical skills together. His use of animations and layout structuring with Tailwind is brilliant.",
    image:
      "https://media.istockphoto.com/id/1036079862/photo/i-have-all-the-determination-to-succeed-big.jpg?s=612x612&w=0&k=20&c=AJGXyAarUUDQbgh_LhuqfHXeZQtGZy9P-y7KMb5jkAo=",
      
  },
];

const Testimonials = () => {
  return (
    <div
      id="Testimonials"
      className="bg-[#171d32] py-12 px-6 md:px-20 text-white"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
        What People Say
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-[#0c0e19] shadow-xl shadow-black rounded-2xl p-6 max-w-sm w-full mx-auto"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-md">{t.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
