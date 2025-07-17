import Register from "@/components/user/Register";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl w-full mx-auto">
        <Register />
      </div>
    </div>
  );
}
