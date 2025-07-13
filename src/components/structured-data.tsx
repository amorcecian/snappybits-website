"use client";

import { useEffect } from 'react';

interface Organization {
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate: string;
  founder: {
    "@type": "Person";
    name: string;
  };
  address: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  }[];
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
  makesOffer: {
    "@type": "Offer";
    itemOffered: {
      "@type": "Service";
      name: string;
      description: string;
    }[];
  };
}

interface WebSite {
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: {
    "@type": "Organization";
    name: string;
  };
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

interface Service {
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  areaServed: string;
  serviceType: string;
}

const organizationData: Organization = {
  "@type": "Organization",
  name: "SnappyBits",
  url: "https://snappybits.com",
  logo: "https://snappybits.com/logo.png",
  description: "Professional IT consulting and development services specializing in web development, mobile apps, cloud solutions, and LATAM staff augmentation.",
  foundingDate: "2016",
  founder: {
    "@type": "Person",
    name: "Alex Rodriguez"
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US"
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Avalos 1970 (C1431DLP)",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressRegion: "CABA",
      addressCountry: "Argentina"
    }
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    email: "hello@snappybits.com"
  },
  sameAs: [
    "https://linkedin.com/company/snappybits",
    "https://twitter.com/snappybits",
    "https://github.com/snappybits"
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: [
      {
        "@type": "Service",
        name: "Web Development",
        description: "Modern, responsive web applications built with cutting-edge technologies"
      },
      {
        "@type": "Service",
        name: "Mobile Applications",
        description: "Native and cross-platform mobile apps that deliver exceptional user experiences"
      },
      {
        "@type": "Service",
        name: "Cloud Solutions",
        description: "Scalable cloud infrastructure and DevOps solutions for modern businesses"
      },
      {
        "@type": "Service",
        name: "LATAM Staff Augmentation",
        description: "Scale your team with skilled software developers from Latin America."
      }
    ]
  }
};

const websiteData: WebSite = {
  "@type": "WebSite",
  name: "SnappyBits - Professional IT Consulting & Development",
  url: "https://snappybits.com",
  description: "Empowering businesses with cutting-edge IT solutions, software development, and world-class LATAM development teams.",
  publisher: {
    "@type": "Organization",
    name: "SnappyBits"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://snappybits.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const services: Service[] = [
  {
    "@type": "Service",
    name: "Web Development Services",
    description: "Custom web development using React, Next.js, and modern technologies",
    provider: {
      "@type": "Organization",
      name: "SnappyBits",
      url: "https://snappybits.com"
    },
    areaServed: "Worldwide",
    serviceType: "Web Development"
  },
  {
    "@type": "Service",
    name: "Mobile App Development",
    description: "iOS and Android app development with React Native and Flutter",
    provider: {
      "@type": "Organization",
      name: "SnappyBits",
      url: "https://snappybits.com"
    },
    areaServed: "Worldwide",
    serviceType: "Mobile Development"
  },
  {
    "@type": "Service",
    name: "Cloud Solutions",
    description: "AWS, Google Cloud, and Azure cloud infrastructure and DevOps",
    provider: {
      "@type": "Organization",
      name: "SnappyBits",
      url: "https://snappybits.com"
    },
    areaServed: "Worldwide",
    serviceType: "Cloud Computing"
  },
  {
    "@type": "Service",
    name: "LATAM Staff Augmentation",
    description: "Skilled software developers from Latin America for team scaling",
    provider: {
      "@type": "Organization",
      name: "SnappyBits",
      url: "https://snappybits.com"
    },
    areaServed: "Americas",
    serviceType: "Staff Augmentation"
  }
];

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'services' | 'all';
}

export default function StructuredData({ type = 'all' }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org"
    };

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          ...organizationData
        };
      case 'website':
        return {
          ...baseData,
          ...websiteData
        };
      case 'services':
        return {
          ...baseData,
          "@graph": services
        };
      case 'all':
      default:
        return {
          ...baseData,
          "@graph": [
            organizationData,
            websiteData,
            ...services
          ]
        };
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(getStructuredData());
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [type]);

  return null;
} 