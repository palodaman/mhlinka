import { Metadata } from 'next';
import Link from 'next/link';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Fee Structure - CFA Examination Prep',
    description: 'Fee structure and payment options for CFA examination preparation courses',
  };
}

export default async function FeesPage({ params }: { params: { locale: string } }) {
  const feeData = await fetchContentType(
    'fee-structure',
    {},
    true
  );

  if (!feeData) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Fee Structure</h1>
        <p className="text-lg mb-8">Fee information is being loaded. Please check back soon.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Fee Structure</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        {feeData.description && (
          <BlocksRenderer content={feeData.description} />
        )}
      </div>

      {feeData.payment_methods && feeData.payment_methods.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Payment Methods</h2>
          <ul className="space-y-4">
            {feeData.payment_methods.map((method: any, index: number) => (
              <li key={index} className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <div>
                  <span className="font-semibold">{method.title}</span>
                  {method.description && (
                    <p className="text-gray-600 mt-1">{method.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
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