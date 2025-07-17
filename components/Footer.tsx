import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0E2A47] font-poppins text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold italic text-red-500">Bonik</h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Image
                src="/images/google-play-store.png"
                alt="Google Play"
                className="h-10 cursor-pointer"
                width={120}
                height={40}
              />
              <Image
                src="/images/app-store.png"
                alt="App Store"
                className="h-10 cursor-pointer"
                width={120}
                height={40}
              />
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Care</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              70 Washington Square South, New York, NY 10012, United States
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Email: uilib.help@gmail.com
            </p>
            <p className="text-sm text-gray-300">Phone: +1 1123 456 780</p>
            <div className="flex gap-3 mt-4 flex-wrap">
              {["facebook", "twitter", "youtube", "insta"].map((icon, i) => (
                <span
                  key={i}
                  className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full cursor-pointer"
                >
                  <Image
                    src={`/images/${icon}.png`}
                    width={20}
                    height={20}
                    alt={icon}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
