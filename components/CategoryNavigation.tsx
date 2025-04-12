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
    <div className="w-7xl container mx-auto mb-12 mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 hover:text-gray-100">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="bg-white pt-4 pb-4 rounded-md flex flex-col items-center justify-center transition-transform hover:scale-105"
          >
            <div className="w-24 h-24 relative peer">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center w-full p-1.5 font-medium peer-hover:bg-black peer-hover:text-gray-100 text-gray-800">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
