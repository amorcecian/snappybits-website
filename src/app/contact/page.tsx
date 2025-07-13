import { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Users,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SnappyBits for your IT consulting and development needs. We're here to help transform your business.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@snappybits.com",
    href: "mailto:hello@snappybits.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri: 8AM-5PM EST",
    href: "#"
  }
];

const whyChooseUs = [
  {
    icon: MessageCircle,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work directly with senior developers and consultants"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development with quick time-to-market"
  }
];

const offices = [
  {
    label: "USA",
    flag: "🇺🇸",
    address: "San Francisco, CA"
  },
  {
    label: "Argentina",
    flag: "🇦🇷",
    address: "Avalos 1970 (C1431DLP), Ciudad Autónoma de Buenos Aires"
  },
  {
    label: "Bolivia",
    flag: "🇧🇴",
    address: "Calle 20 esq. Av. Costanera, Edificio Costa Sur, piso 5, of 501, Calacoto, La Paz"
  },
  {
    label: "Spain",
    flag: "🇪🇸",
    address: "Madrid"
  }
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to transform your business with world-class IT solutions? 
              Let's discuss your project and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="mt-12 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <info.icon className="h-6 w-6 text-snappy-orange" />
                    </div>
                    <div className="ml-3">
                      <dt className="text-sm font-medium text-gray-900">{info.label}</dt>
                      {info.href !== "#" ? (
                        <dd className="mt-1">
                          <a 
                            href={info.href} 
                            className="text-snappy-orange hover:text-snappy-orange-alt"
                          >
                            {info.value}
                          </a>
                        </dd>
                      ) : (
                        <dd className="mt-1 text-gray-600">{info.value}</dd>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Our Offices Section */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Offices</h3>
                <div className="space-y-3">
                  {offices.map((office) => (
                    <div key={office.label} className="text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{office.flag}</span>
                        <span className="font-medium text-gray-900">{office.label}</span>
                      </div>
                      <div className="ml-3">{office.address}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Why Choose SnappyBits?
                </h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-snappy-orange">
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <dt className="text-sm font-medium text-gray-900">{item.title}</dt>
                        <dd className="mt-1 text-sm text-gray-600">{item.description}</dd>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can you start working on my project?
                </h3>
                <p className="text-gray-600">
                  We can typically start new projects within 1-2 weeks, depending on the scope and our current capacity. 
                  For LATAM staff augmentation, we can have developers ready in as little as 2 weeks.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's your pricing model?
                </h3>
                <p className="text-gray-600">
                  We offer flexible pricing models including fixed-price projects, hourly consulting, 
                  and dedicated team arrangements. Pricing depends on the project scope, timeline, and team requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you work with startups or only established companies?
                </h3>
                <p className="text-gray-600">
                  We work with companies of all sizes, from early-stage startups to Fortune 500 enterprises. 
                  We understand the unique challenges each stage brings and tailor our approach accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes your LATAM staff augmentation different?
                </h3>
                <p className="text-gray-600">
                  Our LATAM staff augmentation service provides carefully vetted developers for technical skills, English proficiency, 
                  and cultural fit. They work in compatible time zones and have extensive experience with US business practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-64 bg-gray-300 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-600">Interactive map would be integrated here</p>
            <p className="text-sm text-gray-500">San Francisco, CA</p>
          </div>
        </div>
      </section>
    </>
  );
} 