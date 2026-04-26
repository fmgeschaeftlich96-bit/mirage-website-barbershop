import Image from "next/image";
import { InstagramLink } from "@/components/InstagramLink";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Standorte", href: "#locations" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c9a84c]/30">
                <Image
                  src="/images/logo.webp"
                  alt="MiRash Logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <span
                  className="block text-[#f5f0e8] font-bold text-sm tracking-[0.12em] uppercase"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  MiRash
                </span>
                <span className="block text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase">
                  Barbershop
                </span>
              </div>
            </div>
            <p className="text-[#9a9585] text-xs leading-relaxed max-w-xs">
              Classic Haircut — Classic Shave.
              <br />
              Zwei Standorte. Eine Philosophie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f5f0e8] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9a9585] text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Neuruppin */}
          <div>
            <h4 className="text-[#f5f0e8] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Neuruppin
            </h4>
            <div className="space-y-3 text-[#9a9585] text-sm">
              <p>Karl-Marx-Straße 47<br />16816 Neuruppin</p>
              <a
                href="tel:+4933918580446"
                className="block hover:text-[#c9a84c] transition-colors"
              >
                03391 8580446
              </a>
              <p>Mo – Fr: 09:00 – 19:00 Uhr<br />Sa: 09:00 – 18:00 Uhr</p>
              <InstagramLink href="https://www.instagram.com/mirash_neuruppin" handle="@mirash_neuruppin" size="sm" />
            </div>
          </div>

          {/* Oranienburg */}
          <div>
            <h4 className="text-[#f5f0e8] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Oranienburg
            </h4>
            <div className="space-y-3 text-[#9a9585] text-sm">
              <p>Friedensstraße 8<br />16515 Oranienburg</p>
              <a
                href="tel:+4933015748866"
                className="block hover:text-[#c9a84c] transition-colors"
              >
                03301 5748866
              </a>
              <p>Mo – Fr: 09:00 – 19:00 Uhr<br />Sa: 09:00 – 19:00 Uhr</p>
              <InstagramLink href="https://www.instagram.com/mirash.oranienburg/" handle="@mirash.oranienburg" size="sm" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9a9585]/50 text-xs">
            © 2024 MiRash Barbershop. Alle Rechte vorbehalten.
          </p>
          <p className="text-[#9a9585]/30 text-xs">
            Classic Haircut — Classic Shave
          </p>
        </div>
      </div>
    </footer>
  );
}
