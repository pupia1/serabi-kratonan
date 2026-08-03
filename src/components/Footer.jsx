import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Phone } from "lucide-react";
import axios from "axios";

import { getWhatsAppMessage } from "../utils/whatsappMessage";

const API = "http://localhost:5000/api";

const Footer = () => {
  const [kontak, setKontak] = useState({
    alamat: "",
    jam_operasional: "",
    whatsapp: "",
    link_maps: "",
  });

  useEffect(() => {
    loadKontak();
  }, []);

  const loadKontak = async () => {
    try {
      const res = await axios.get(`${API}/contact`);

      if (res.data.success) {
        setKontak(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_2fr] gap-10 items-start">

          {/* Logo */}
          <div>
            <span className="heading-font text-2xl font-bold">
              Srabi Kratonan
            </span>

            <p className="mt-2 text-sm opacity-90">
              Cita rasa tradisional Solo yang autentik sejak turun-temurun.
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
                to="/gallery"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Galeri
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Contact */}
            <div>
              <span className="font-semibold text-sm tracking-wide uppercase">
                Contact Info
              </span>

              <div className="mt-4 space-y-2 text-sm opacity-90">

                <p className="whitespace-pre-line">
                  {kontak.alamat}
                </p>

                <p className="whitespace-pre-line">
                  {kontak.jam_operasional}
                </p>

                <div className="flex gap-4 mt-4">

                  <a
                    href="https://www.instagram.com/srabikratonan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  <a
                    href={`https://wa.me/${kontak.whatsapp}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-5 w-5" />
                  </a>

                </div>

              </div>

            </div>

            {/* Maps */}
            <div>

              <span className="font-semibold text-sm tracking-wide uppercase">
                Lokasi
              </span>

              {kontak.link_maps && (
                <iframe
                  className="mt-4 w-full rounded-lg"
                  src={kontak.link_maps}
                  width="100%"
                  height="170"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Lokasi"
                />
              )}

            </div>

          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">

          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Srabi Kratonan Khas Solo. All rights
            reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;