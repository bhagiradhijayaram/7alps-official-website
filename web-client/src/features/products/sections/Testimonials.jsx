const testimonials = [
  {
    id: 1,
    quote:
      "When Genie delivers on its promise, it'll be the tool startups have been wishing for.",
    name: "Lola Salehu",
    role: "Senior Product Designer",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    quote: "Genie would be really great for prototyping brand ideas.",
    name: "Michael Okoh",
    role: "Founder/CEO",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    quote: "Hard to believe no one built this before.",
    name: "Shedrack Akintayo",
    role: "Founder/CEO",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    quote: "Every creative director I know is going to want this.",
    name: "Uche Divine",
    role: "Senior Product Designer",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    quote:
      "When Genie delivers on its promise, it'll be the tool startups have been wishing for.",
    name: "Lola Salehu",
    role: "Senior Product Designer",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 6,
    quote: "Genie would be really great for prototyping brand ideas.",
    name: "Michael Okoh",
    role: "Founder/CEO",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 7,
    quote: "Hard to believe no one built this before.",
    name: "Shedrack Akintayo",
    role: "Founder/CEO",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 8,
    quote: "Every creative director I know is going to want this.",
    name: "Uche Divine",
    role: "Senior Product Designer",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

const topCards = testimonials.slice(0, 4);
const bottomCards = testimonials.slice(4, 8);

function Card({ item }) {
  return (
    <div className="w-[380px] h-[250px] rounded-3xl bg-gray-100 p-8 flex flex-col justify-between">
      <p className="text-2xl text-gray-600">"{item.quote}"</p>

      <div className="mt-8 flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-gray-400 text-sm">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="overflow-hidden py-20 bg-white">
      <div>
        <h2 className="text-[36px] mb-10 max-w-sm mx-auto text-center">
          See what our customers are saying
        </h2>
      </div>
      {/* Top Row - Right to Left */}
      <div className="mb-6 flex w-max animate-marquee-left gap-5">
        {[...topCards, ...topCards].map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {/* Bottom Row - Left to Right */}
      <div className="flex w-max animate-marquee-right gap-5">
        {[...bottomCards, ...bottomCards].map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
