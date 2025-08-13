import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Register - CFA Examination Prep',
    description: 'Register for CFA examination preparation courses',
  };
}

export default function RegisterPage({ params }: { params: { locale: string } }) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Register for CFA Examination Prep Courses</h1>
      
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Available Courses</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">CFA Level I</h3>
            <p className="text-gray-600 mb-4">
              Examination windows: February, May, August, and November
            </p>
            <Link
              href="/courses/level-1"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
            >
              View Course Details
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">CFA Level II</h3>
            <p className="text-gray-600 mb-4">
              Examination windows: May, August, and November
            </p>
            <Link
              href="/courses/level-2"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
            >
              View Course Details
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">CFA Level III</h3>
            <p className="text-gray-600 mb-4">
              Three Pathways: Private Markets, Private Wealth, and Portfolio Management
            </p>
            <Link
              href="/courses/level-3"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
            >
              View Course Details
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Registration Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg">
          <li>Select your course level above to view detailed information</li>
          <li>Review the course schedule and requirements</li>
          <li>Click the registration link on the course page</li>
          <li>Complete the registration form</li>
          <li>Submit payment via your preferred method</li>
        </ol>
      </div>

      <div className="text-center">
        <p className="text-lg mb-6">
          For more information about fees and payment options:
        </p>
        <Link
          href="/fees"
          className="inline-block bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
        >
          View Fee Structure
        </Link>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}