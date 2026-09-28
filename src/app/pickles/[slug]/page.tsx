import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { pickles } from '@/data/pickles';
import { ShieldCheck, Flame, Star, ShoppingBag, ArrowLeft, CheckCircle2, Truck } from 'lucide-react';
import ProductBuyBox from '@/components/ProductBuyBox';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return pickles.map((pickle) => ({
    slug: pickle.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const pickle = pickles.find((p) => p.slug === params.slug);

  if (!pickle) {
    return {
      title: 'Pickle Not Found — Aruh Foods',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aruh.store';
  const pageUrl = `${siteUrl}/pickles/${pickle.slug}`;
  const title = `Buy ${pickle.name} Online — Authentic Homemade Andhra Pickle | Aruh Foods`;
  const description = `Order authentic homemade ${pickle.name} online. Made with farm-fresh ingredients, Guntur chillies & cold-pressed sesame oil. Small-batch Andhra traditional recipe. ${pickle.description.slice(0, 120)}...`;

  return {
    title,
    description,
    keywords: [
      pickle.name,
      `${pickle.name} online`,
      `buy ${pickle.name} hyderabad`,
      `andhra ${pickle.name}`,
      'homemade pickles',
      'aruh foods',
      'andhra non-veg pickles',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: 'article',
      images: [
        {
          url: pickle.image,
          width: 800,
          height: 800,
          alt: `${pickle.name} — Aruh Foods`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [pickle.image],
    },
  };
}

export default function PickleDetailPage({ params }: ProductPageProps) {
  const pickle = pickles.find((p) => p.slug === params.slug);

  if (!pickle) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aruh.store';

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pickle.name,
    image: `${siteUrl}${pickle.image}`,
    description: pickle.description,
    brand: {
      '@type': 'Brand',
      name: 'Aruh Foods',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: Math.min(...Object.values(pickle.prices)),
      highPrice: Math.max(...Object.values(pickle.prices)),
      offerCount: Object.keys(pickle.prices).length,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Aruh Foods',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pickles',
        item: `${siteUrl}/pickles`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pickle.name,
        item: `${siteUrl}/pickles/${pickle.slug}`,
      },
    ],
  };

  const relatedPickles = pickles.filter((p) => p.id !== pickle.id).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Navigation Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-warmTaupe" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/pickles" className="hover:text-espresso transition-colors">
            Pickles
          </Link>
          <span>/</span>
          <span className="text-espresso font-semibold truncate">{pickle.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Image Container */}
          <div className="relative rounded-3xl overflow-hidden bg-white border border-warmTaupe/15 p-6 shadow-md">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-softCream/30">
              <Image
                src={pickle.image}
                alt={`Authentic Andhra ${pickle.name} jar by Aruh Foods`}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Badges */}
            <div className="absolute top-9 left-9 flex flex-col gap-2">
              <span className="bg-mustardGold text-espresso text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {pickle.tag}
              </span>
              <span className="bg-espresso text-warmIvory text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Flame size={12} className="text-amber-400" />
                {pickle.spiceLevel}
              </span>
            </div>
          </div>

          {/* Product Info & Buy Box */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-oliveGreen bg-oliveGreen/10 border border-oliveGreen/20 px-3 py-1 rounded-full w-fit mb-3">
              <Star size={13} className="fill-oliveGreen" />
              <span>4.9 / 5.0 (120+ Verified Andhra Foodies)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-espresso leading-tight mb-4">
              {pickle.name}
            </h1>

            <p className="text-warmTaupe text-base leading-relaxed mb-6">
              {pickle.description}
            </p>

            {/* Interactive Buy Box (Size selector, Price calculation, Add to Cart, WhatsApp Order) */}
            <ProductBuyBox pickle={pickle} />

            {/* Ingredients List */}
            <div className="mt-8 pt-6 border-t border-warmTaupe/15">
              <h3 className="font-serif font-bold text-lg text-espresso mb-3">
                🌿 Pure Hand-Selected Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {pickle.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="inline-flex items-center gap-1.5 text-xs bg-warmIvory border border-warmTaupe/20 text-espresso px-3 py-1.5 rounded-xl font-medium"
                  >
                    <CheckCircle2 size={12} className="text-oliveGreen" />
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="mt-6 p-4 rounded-2xl bg-pureWhite border border-warmTaupe/15 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-espresso font-medium">
                <ShieldCheck size={18} className="text-oliveGreen" />
                <span>100% No Chemical Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-espresso font-medium">
                <Truck size={18} className="text-oliveGreen" />
                <span>Spill-Proof Airtight Jars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pickles Section */}
        <div className="mt-20 pt-10 border-t border-warmTaupe/15">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-espresso">
              You May Also Love
            </h2>
            <Link
              href="/pickles"
              className="text-xs sm:text-sm text-oliveGreen hover:underline font-bold inline-flex items-center gap-1"
            >
              View All Pickles →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPickles.map((rel) => (
              <Link
                key={rel.id}
                href={`/pickles/${rel.slug}`}
                className="group bg-pureWhite rounded-2xl border border-warmTaupe/15 overflow-hidden p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-softCream mb-3">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif font-bold text-espresso text-base group-hover:text-oliveGreen transition-colors">
                  {rel.name}
                </h3>
                <p className="text-xs text-warmTaupe line-clamp-2 mt-1">{rel.description}</p>
                <p className="text-xs font-bold text-oliveGreen mt-2">
                  From ₹{rel.prices['250g']} (250g)
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
