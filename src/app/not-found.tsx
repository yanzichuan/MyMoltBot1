import Link from "next/link";
import Navigation from "@/app/components/Navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Could not find the requested page</p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}