import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-overlay bg-dark-green text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="mb-6 block text-2xl font-black uppercase tracking-wider text-white">
              Get Paid{" "}
              <span className="text-gold">Nation</span>
            </span>
            <p className="text-sm leading-relaxed text-cream/70">
              Empowering ordinary people to build extraordinary wealth.
              Your dream lifestyle is closer than you think.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-tan">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/#why-bedrock", label: "The Opportunity" },
                { href: "/#benefits", label: "Benefits" },
                { href: "/#team", label: "Our Team" },
                { href: "/blog", label: "Blog" },
                { href: "/#contact", label: "Schedule Your Call" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-tan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-tan">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:9362433181"
                  className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-tan"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (936) 243-3181
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bedrockfinancialplanning.com"
                  className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-tan"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@bedrockfinancialplanning.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-cream/70">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Conroe, Texas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="text-xs text-cream/50">
            &copy; {currentYear} Get Paid Nation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
