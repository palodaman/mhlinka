import { Metadata } from 'next';
import Link from 'next/link';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const courseData = await fetchContentType(
    'course-pages',
    {
      filters: {
        level: params.slug,
      },
    },
    true
  );

  if (!courseData) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${courseData.title} - CFA Examination Prep`,
    description: `Professional preparation course for ${courseData.title}`,
  };
}

export default async function CoursePage({ 
  params 
}: { 
  params: { locale: string; slug: string } 
}) {
  const courseData = await fetchContentType(
    'course-pages',
    {
      filters: {
        level: params.slug,
      },
    },
    true
  );

  if (!courseData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{courseData.title}</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        {courseData.description && (
          <BlocksRenderer content={courseData.description} />
        )}
      </div>

      {courseData.schedule && (
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
          <BlocksRenderer content={courseData.schedule} />
        </div>
      )}

      {courseData.register_link && (
        <div className="mt-12">
          <Link
            href={courseData.register_link}
            className="inline-block bg-green-600 text-white text-lg font-semibold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors"
          >
            Register for this Course
          </Link>
        </div>
      )}

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