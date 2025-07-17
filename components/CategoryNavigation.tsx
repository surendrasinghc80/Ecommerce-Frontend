import Link from "next/link";
import Image from "next/image";

type CategoryItem = {
  name: string;
  image: string;
  href: string;
};

export default function CategoryNavigation() {
  const categories: CategoryItem[] = [
    {
      name: "Toys",
      image: "/images/toys-car.jpg",
      href: "/category/toys",
    },
    {
      name: "Sports",
      image: "/images/dumbel.jpg",
      href: "/category/sports",
    },
    {
      name: "Gaming",
      image: "/images/gaming-controller.jpg",
      href: "/category/gaming",
    },
    {
      name: "Furniture",
      image: "/images/chair.jpg",
      href: "/category/furniture",
    },
    {
      name: "Fashion",
      image: "/images/tshirt.jpg",
      href: "/category/fashion",
    },
    {
      name: "Cameras",
      image: "/images/camera.webp",
      href: "/category/cameras",
    },
  ];

  return (
    <div className="max-w-7xl w-full mx-auto mb-12 mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="bg-white p-4 rounded-md flex flex-col items-center justify-center text-center transition-transform hover:scale-105 shadow-sm"
          >
            <div className="w-20 sm:w-24 aspect-square relative">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mt-2 text-sm sm:text-base font-medium text-gray-800 hover:text-black">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
