import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Users,
  Globe,
  Target,
  Heart,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SnappyBits' mission, team, and commitment to delivering world-class IT solutions and LATAM staff augmentation services.",
};

const values = [
  {
    icon: Target,
    name: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations and drive business growth."
  },
  {
    icon: Heart,
    name: "Partnership",
    description: "We believe in building long-term partnerships with our clients, understanding their unique needs and challenges."
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    description: "We stay at the forefront of technology trends, constantly learning and adopting new tools and methodologies."
  },
  {
    icon: Globe,
    name: "Global Perspective",
    description: "Our diverse team brings global perspectives while maintaining local understanding of business needs."
  }
];

const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "CEO & Founder",
    bio: "15+ years of experience in software development and business strategy. Previously led engineering teams at Fortune 500 companies.",
    image: "/team/alex.jpg"
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Expert in cloud architecture and DevOps with extensive experience in scaling applications for millions of users.",
    image: "/team/sarah.jpg"
  },
  {
    name: "Miguel Santos",
    role: "VP of LATAM Operations",
    bio: "Specializes in building and managing distributed development teams across Latin America.",
    image: "/team/miguel.jpg"
  },
  {
    name: "Emily Johnson",
    role: "Head of Design",
    bio: "Award-winning UX/UI designer with a passion for creating intuitive and beautiful user experiences.",
    image: "/team/emily.jpg"
  }
];

const stats = [
  { label: "Projects Delivered", value: "100+" },
  { label: "Countries Served", value: "25+" },
  { label: "Team Members", value: "50+" },
  { label: "Years of Experience", value: "8+" }
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About SnappyBits
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're a team of passionate technologists dedicated to empowering businesses with 
              cutting-edge IT solutions and world-class development talent.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2016, SnappyBits began as a small team of developers who believed that 
                  every business deserves access to world-class technology solutions, regardless of size or budget.
                </p>
                <p>
                  What started as a local consulting firm has evolved into a global technology partner, 
                  helping companies across 25+ countries transform their digital presence and scale their 
                  development capabilities.
                </p>
                <p>
                  Our unique approach combines technical expertise with deep business understanding, 
                  ensuring that every solution we deliver drives measurable results for our clients.
                </p>
                <p>
                  Today, we're proud to be at the forefront of connecting businesses with top-tier 
                  Latin American talent through our staff augmentation services, creating opportunities that benefit companies, developers, 
                  and communities across the Americas.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-snappy-orange/5 to-snappy-red/5 rounded-lg p-8 h-80 flex items-center justify-center">
                                    <Users className="h-32 w-32 text-snappy-orange opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-snappy-navy">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-snappy-orange mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experienced leaders driving innovation and excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-snappy-orange/5 to-snappy-red/5 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-16 w-16 text-snappy-orange opacity-30" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-snappy-orange font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our Mission
            </h2>
            <blockquote className="text-xl text-gray-600 font-medium leading-8">
              "To democratize access to world-class technology talent and solutions, 
              empowering businesses of all sizes to compete in the digital economy while 
              creating meaningful opportunities for developers across Latin America."
            </blockquote>
            <div className="mt-12">
              <Button asChild size="lg">
                <Link href="/contact">
                  <span className="flex items-center justify-center gap-x-2">
                    Work With Us
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-snappy-navy">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join hundreds of companies who trust SnappyBits to deliver exceptional results.
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
              <Button variant="outline" asChild size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-snappy-navy transition-colors">
                <Link href="/services">
                  <span className="flex items-center justify-center">Explore Services</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 