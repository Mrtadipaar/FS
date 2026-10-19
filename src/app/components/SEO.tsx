import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object[];
}

export function SEO({
  title,
  description,
  keywords = "FynestStudio, Fynest Studio, Finest Studio, FinestStudio, digital marketing agency surat, digital marketing services surat, social media marketing surat, seo services surat, website design surat, digital marketing company gujarat, best marketing agency surat, social media management surat, google ads surat, ppc services surat, brand strategy surat, lead generation surat, content marketing surat, instagram marketing surat, facebook marketing surat, digital marketing near me, marketing agency near me",
  canonical,
  ogImage = "https://fyneststudio.com/og-image.jpg",
  ogType = "website",
  schema = []
}: SEOProps) {
  const siteUrl = "https://fyneststudio.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Base Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FynestStudio",
    "alternateName": ["Fynest Studio", "Finest Studio"],
    "url": "https://fyneststudio.com",
    "logo": "https://fyneststudio.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8780438587",
      "contactType": "customer service",
      "email": "studiofynest@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "gu"]
    },
    "sameAs": [
      "https://www.instagram.com/fyneststudio",
      "https://x.com/FynestStudio"
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "FynestStudio",
    "alternateName": ["Fynest Studio", "Finest Studio"],
    "image": "https://fyneststudio.com/logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fyneststudio.com/logo.png",
      "width": 250,
      "height": 60
    },
    "@id": "https://fyneststudio.com",
    "url": "https://fyneststudio.com",
    "telephone": "+91-8780438587",
    "email": "studiofynest@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "304 Shilalekh Residency, Opp Vaishali Rowhouse, Pal",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395009",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1702,
      "longitude": 72.8311
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/fyneststudio",
      "https://x.com/FynestStudio"
    ],
    "description": "FynestStudio is Surat's premier digital marketing agency specializing in social media management, SEO services, website design, Google Ads, branding, and lead generation for businesses across Gujarat.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Surat"
      },
      {
        "@type": "State",
        "name": "Gujarat"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48",
      "bestRating": "5",
      "worstRating": "1"
    },
    "award": [
      "Top-rated digital marketing agency in Surat",
      "4.9/5 Google rating",
      "100+ successful client partnerships",
      "500+ successful campaigns completed",
      "85% client retention rate",
      "Surat's best digital marketing agency 2024"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Full-service Instagram, Facebook, and LinkedIn management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Search engine optimization for higher rankings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design",
            "description": "Modern, responsive website design and development"
          }
        }
      ]
    }
  };

  const allSchemas = [organizationSchema, localBusinessSchema, ...schema];

  return (
    <Helmet>
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* Primary Meta Tags */}
      <title>Fynest Studio</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="FynestStudio Digital Marketing Agency" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={fullCanonical} />
      <meta name="language" content="English" />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Surat" />
      <meta name="geo.position" content="21.1702;72.8311" />
      <meta name="ICBM" content="21.1702, 72.8311" />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="FynestStudio" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="FynestStudio Digital Marketing Agency Surat" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@FynestStudio" />
      <meta name="twitter:creator" content="@FynestStudio" />

      {/* Structured Data */}
      {allSchemas.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
}