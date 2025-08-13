import { Metadata } from 'next';
import Link from 'next/link';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'CFA Examination Preparation Program',
    description: 'Professional CFA exam preparation courses for Level I, II, and III',
  };
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const landingPageData = await fetchContentType(
    'landing-page',
    {},
    true
  );

  if (!landingPageData) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Welcome to CFA Examination Preparation Program</h1>
        <p className="text-lg mb-8">Content is being loaded. Please check back soon.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        {landingPageData.intro_text && (
          <BlocksRenderer content={landingPageData.intro_text} />
        )}
      </div>
      
      {landingPageData.links && landingPageData.links.length > 0 && (
        <div className="mt-12 space-y-4">
          {landingPageData.links.map((link: any, index: number) => (
            <Link
              key={index}
              href={link.url_slug}
              className="block bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
