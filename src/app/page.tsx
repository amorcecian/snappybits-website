import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Cloud, 
  Users, 
  Clock, 
  DollarSign, 
  Globe,
  CheckCircle,
  Star
} from "lucide-react";

const services = [
  {
    name: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    icon: Code,
    href: "/services#web-development",
  },
  {
    name: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    icon: Smartphone,
    href: "/services#mobile-apps",
  },
  {
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions for modern businesses.",
    icon: Cloud,
    href: "/services#cloud-solutions",
  },
  {
    name: "LATAM Staff Augmentation",
    description: "Scale your team with top-tier, English-proficient developers from Latin America at competitive rates.",
    icon: Users,
    href: "/services#latam-teams",
  },
];

const latinAmericaBenefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Reduce development costs by up to 60% without compromising quality.",
  },
  {
    icon: Globe,
    title: "English-Proficient",
    description: "Work with developers who have excellent English communication skills.",
  },
  {
    icon: Clock,
    title: "Time-Zone Friendly",
    description: "Minimal time zone differences for real-time collaboration.",
  },
  {
    icon: CheckCircle,
    title: "Quick Ramp-Up",
    description: "Get your team up and running in as little as 2 weeks.",
  },
];

const testimonials = [
  {
    content: "SnappyBits transformed our digital presence with their exceptional development team. The quality and speed of delivery exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    rating: 5,
  },
  {
    content: "Working with their LATAM developers was a game-changer. We got world-class talent at a fraction of the cost.",
    author: "Michael Chen",
    role: "Founder, InnovateLab",
    rating: 5,
  },
  {
    content: "The cloud migration project was handled flawlessly. Our applications are now more scalable and reliable than ever.",
    author: "Elena Rodriguez",
    role: "VP Engineering, DataFlow",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-snappy-orange to-snappy-red opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empower Your Business with 
              <span className="text-snappy-orange"> World-Class IT Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              From cutting-edge software development to scaling your team with top LATAM talent, 
              we deliver results that drive your business forward.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">
                  <span className="flex items-center justify-center gap-x-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-snappy-orange to-snappy-red opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-snappy-orange" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link
                        href={service.href}
                        className="text-sm font-semibold leading-6 text-snappy-orange hover:text-snappy-orange-alt"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* LATAM Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Scale Your Team with LATAM Staff Augmentation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quickly scale your engineering capacity with carefully vetted, English-proficient developers from Latin America. Our staff augmentation model ensures seamless integration and rapid ramp-up for your projects.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {latinAmericaBenefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-start">
                  <div className="rounded-md bg-snappy-orange/5 p-2 ring-1 ring-snappy-orange/10">
                    <benefit.icon className="h-6 w-6 text-snappy-orange" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900">{benefit.title}</dt>
                  <dd className="mt-2 leading-7 text-gray-600">{benefit.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/contact">
                <span className="flex items-center justify-center gap-x-2">
                  Get Staff Augmentation
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why SnappyBits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose SnappyBits?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-snappy-orange">
                  <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Proven Track Record</h3>
                <p className="mt-2 text-gray-600">
                  Over 100+ successful projects delivered for companies ranging from startups to enterprises.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-snappy-orange">
                  <Users className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Expert Team</h3>
                <p className="mt-2 text-gray-600">
                  Our team consists of senior developers, architects, and consultants with 10+ years of experience.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-snappy-orange">
                  <Clock className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Fast Delivery</h3>
                <p className="mt-2 text-gray-600">
                  Agile methodologies and efficient processes ensure quick time-to-market for your projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-900">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </figcaption>
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
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let's discuss how we can help you achieve your technology goals and scale your team efficiently.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">
                  <span className="flex items-center justify-center gap-x-2">
                    Get In Touch
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-snappy-navy">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
