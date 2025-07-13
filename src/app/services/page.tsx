import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Users, 
  ArrowRight,
  CheckCircle,
  Shield,
  Database,
  Palette,
  Settings
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive IT services including web development, mobile apps, cloud solutions, and LATAM development teams.",
};

const services = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies",
    icon: Code,
    features: [
      "React, Next.js, and modern JavaScript frameworks",
      "Responsive design for all devices",
      "SEO optimization and performance tuning",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "API development and integration"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"]
  },
  {
    id: "mobile-apps",
    name: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
    icon: Smartphone,
    features: [
      "iOS and Android native development",
      "React Native and Flutter cross-platform apps",
      "UI/UX design optimization",
      "App Store optimization",
      "Push notifications and analytics",
      "Offline-first architecture"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "MongoDB"]
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions for modern businesses",
    icon: Cloud,
    features: [
      "AWS, Google Cloud, and Azure implementations",
      "Container orchestration with Kubernetes",
      "CI/CD pipeline setup and optimization",
      "Microservices architecture",
      "Infrastructure as Code (IaC)",
      "Monitoring and logging solutions"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"]
  },
  {
    id: "latam-teams",
    name: "LATAM Staff Augmentation",
    description: "Scale your team quickly with top-tier, English-proficient developers from Latin America at competitive rates.",
    icon: Users,
    features: [
      "Carefully vetted senior engineers",
      "English-proficient and culturally aligned",
      "Time zone alignment with US hours",
      "Flexible staff augmentation and team scaling",
      "Seamless integration with your processes",
      "Ongoing project management and support"
    ],
    technologies: ["Full Stack", "React", "Node.js", "Python", "Java", "DevOps"]
  }
];

const additionalServices = [
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "User-centered design that converts visitors into customers"
  },
  {
    icon: Database,
    name: "Database Design",
    description: "Scalable database architectures for high-performance applications"
  },
  {
    icon: Shield,
    name: "Security Consulting",
    description: "Comprehensive security audits and implementation strategies"
  },
  {
    icon: Settings,
    name: "Technical Consulting",
    description: "Strategic technology guidance for informed decision making"
  }
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-snappy-orange mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">{service.name}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-snappy-orange mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-snappy-orange/10 text-snappy-orange">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      <span className="flex items-center justify-center gap-x-2">
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
                <div className={`mt-12 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-snappy-orange/5 to-snappy-red/5 rounded-lg p-8 h-64 flex items-center justify-center">
                    <service.icon className="h-32 w-32 text-snappy-orange opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Additional Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive support for all your technology needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-snappy-orange mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-snappy-navy">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let&apos;s discuss your project requirements and how we can help bring your vision to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">
                  <span className="flex items-center justify-center gap-x-2">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-snappy-navy transition-colors">
                <Link href="/about">
                  <span className="flex items-center justify-center">Learn About Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 