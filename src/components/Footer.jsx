import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_2fr] gap-10 items-start">

          {/* Logo */}
          <div>
            <span className="heading-font text-2xl font-bold">
              Serabi Kratonan
            </span>

            <p className="mt-2 text-sm opacity-90">
              Cita rasa tradisional Solo yang autentik sejak turun-temurun
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-semibold text-sm tracking-wide uppercase">
              Quick Links
            </span>

            <nav className="mt-4 flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Beranda
              </Link>

              <Link
                to="/about"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Tentang
              </Link>

              <Link
                to="/products"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Menu
              </Link>

              <Link
                to="/contact"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Kontak
              </Link>
            </nav>
          </div>

          {/* Contact + Maps */}
          <div className="grid grid-cols-2 gap-8">

            {/* Contact */}
            <div className="flex-1">
              <span className="font-semibold text-sm tracking-wide uppercase">
                Contact Info
              </span>

              <div className="mt-4 space-y-2 text-sm opacity-90">
                <p>Denpasar, Bali</p>
                <p>Senin - Minggu</p>
                <p>08:00 - 23:00 WIB</p>

                <div className="flex gap-4 mt-4">
                  <a
                    href="https://www.instagram.com/srabikratonan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Maps */}
            <div className="flex-1">
              <span className="font-semibold text-sm tracking-wide uppercase">
                Lokasi
              </span>

              <iframe
                className="mt-4 w-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.51552851522956!2d115.20586278691329!3d-8.667905430973168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2417df6de37ad%3A0x92bebeb392812dea!2sSrabi%20Kratonan%20Khas%20Solo!5e0!3m2!1sid!2sid!4v1781334251831!5m2!1sid!2sid"
                width="100%"
                height="170"
                style={{ border: 0 }}
                loading="lazy"
                title="Lokasi"
              />
            </div>

          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Serabi Kratonan Khas Solo. All rights
            reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;