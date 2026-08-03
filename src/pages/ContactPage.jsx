import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import axios from "axios";

import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ContactForm from "@/components/ContactForm.jsx";
import { getWhatsAppMessage } from "../utils/whatsappMessage";

const API = "http://localhost:5000/api";

const ContactPage = () => {
  const [kontak, setKontak] = useState({});
  const [halaman, setHalaman] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [kontakRes, halamanRes] = await Promise.all([
        axios.get(`${API}/contact`),
        axios.get(`${API}/contact/page`),
      ]);

      if (kontakRes.data.success) {
        setKontak(kontakRes.data.data);
      }

      if (halamanRes.data.success) {
        setHalaman(halamanRes.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Lokasi",
      content: kontak.alamat,
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: kontak.jam_operasional,
    },
    {
      icon: Phone,
      title: "Telepon",
      content: kontak.telepon,
    },
    {
      icon: Mail,
      title: "Email",
      content: kontak.email,
    },
  ];

  if (loading) {
    return (
      <>
        <Header />
        <div className="py-32 text-center">Memuat data...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
  <title>{`${halaman.judul || "Hubungi Kami"} - Serabi Kratonan Khas Solo`}</title>

  <meta
    name="description"
    content={halaman.deskripsi || ""}
  />
</Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-b from-secondary to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1
                  className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {halaman.judul}
                </h1>

                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  {halaman.deskripsi}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                {/* FORM */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="heading-font text-2xl font-bold text-foreground mb-6">
                    {halaman.judul_form}
                  </h2>

                  <ContactForm />
                </motion.div>

                {/* INFORMASI */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="heading-font text-2xl font-bold text-foreground mb-6">
                    {halaman.judul_informasi}
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;

                      return (
                        <div
                          key={index}
                          className="flex items-start space-x-4"
                        >
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>

                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>

                            <p className="text-muted-foreground whitespace-pre-line">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* WHATSAPP */}
                  <div className="mt-8 p-6 bg-muted rounded-2xl">

                    <h3 className="font-semibold text-foreground mb-3">
                      {halaman.judul_whatsapp}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {halaman.deskripsi_whatsapp}
                    </p>

                    <a
                      href={`https://wa.me/${kontak.whatsapp}?text=${getWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      WhatsApp Kami
                    </a>

                  </div>
                </motion.div>

              </div>

              {/* GOOGLE MAPS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <iframe
                  src={kontak.link_maps}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Lokasi"
                />
              </motion.div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;