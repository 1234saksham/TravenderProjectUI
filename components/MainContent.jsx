import Image from 'next/image';
import Link from 'next/link';
const data = [
  {
    id: 1,
    title: "Taste the cold and beauty of the Russian forest in winter.",
    startDate: "04/17/24",
    by: "Neelabh",
    price: "₹ 189.25",
    imgSrc: "/snow-forest.jpg",
  },
  {
    id: 2,
    title: "Taste the cold and beauty of the Russian forest in winter.",
    startDate: "04/17/24",
    by: "Neelabh",
    price: "₹ 189.25",
    imgSrc: "/snow-forest.jpg",
  },
  {
    id: 3,
    title: "Taste the cold and beauty of the Russian forest in winter.",
    startDate: "04/17/24",
    by: "Neelabh",
    price: "₹ 189.25",
    imgSrc: "/snow-forest.jpg",
  },
  {
    id: 4,
    title: "Taste the cold and beauty of the Russian forest in winter.",
    startDate: "04/17/24",
    by: "Neelabh",
    price: "₹ 189.25",
    imgSrc: "/snow-forest.jpg",
  },
  {
    id: 5,
    title: "Taste the cold and beauty of the Russian forest in winter.",
    startDate: "04/17/24",
    by: "Neelabh",
    price: "₹ 189.25",
    imgSrc: "/snow-forest.jpg",
  },
  {
    id: 6,
    title: "Taste the cold and beauty of the Russian forest in winter.",
    startDate: "04/17/24",
    by: "Neelabh",
    price: "₹ 189.25",
    imgSrc: "/snow-forest.jpg",
  },
  {
    id: 7,
    title: "Taste the cold and beauty of the Russian forest in winter.",
    startDate: "04/17/24",
    by: "Neelabh",
    price: "₹ 189.25",
    imgSrc: "/snow-forest.jpg",
  },
  {
    id: 8,
    title: "Taste the cold and beauty of the Russian forest in winter.",
    startDate: "04/17/24",
    by: "Neelabh",
    price: "₹ 189.25",
    imgSrc: "/snow-forest.jpg",
  },
];

const MainContent = () => {
  return (
    <main className="py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link href={`/${item.id}`} key={item.id}>
            <div className="bg-white shadow rounded-lg p-4 cursor-pointer">
              <Image src={item.imgSrc} alt={item.title} width={500} height={200} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="mt-4 text-lg text-black font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">Start Date: {item.startDate}</p>
              <p className="text-sm text-gray-500">By: {item.by}</p>
              <div className="mt-4 text-blue-500 font-bold text-lg">{item.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MainContent;