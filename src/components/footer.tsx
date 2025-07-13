import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const navigation = {
  solutions: [
    { name: "Web Development", href: "/services#web-development" },
    { name: "Mobile Apps", href: "/services#mobile-apps" },
    { name: "Cloud Solutions", href: "/services#cloud-solutions" },
    { name: "LATAM Teams", href: "/services#latam-teams" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/snappybits",
      icon: Linkedin,
    },
    // {
    //   name: "Twitter",
    //   href: "https://twitter.com/snappybits",
    //   icon: Twitter,
    // },
    // {
    //   name: "GitHub",
    //   href: "https://github.com/snappybits",
    //   icon: Github,
    // },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-snappy-navy" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image 
              src="/snappybits-logo.png" 
              alt="SnappyBits" 
              width={200} 
              height={79}
              className="h-12 w-auto"
              priority
            />
            <p className="text-sm leading-6 text-gray-300">
              Empowering businesses with cutting-edge IT solutions and world-class development teams.
            </p>
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Our Offices</h4>
              <div className="space-y-3">
                <div className="text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇺🇸</span>
                    <span className="font-medium text-white">USA</span>
                  </div>
                  <div className="ml-3">San Francisco, CA</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇦🇷</span>
                    <span className="font-medium text-white">Argentina</span>
                  </div>
                  <div className="ml-3">Avalos 1970 (C1431DLP), Ciudad Autónoma de Buenos Aires</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇧🇴</span>
                    <span className="font-medium text-white">Bolivia</span>
                  </div>
                  <div className="ml-3">Calle 20 esq. Av. Costanera, Edificio Costa Sur, piso 5, of 501, Calacoto, La Paz</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇪🇸</span>
                    <span className="font-medium text-white">Spain</span>
                  </div>
                  <div className="ml-3">Madrid</div>
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@snappybits.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex space-x-6 pt-2">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-snappy-orange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-snappy-orange"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-snappy-orange"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-snappy-orange"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2025 SnappyBits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 