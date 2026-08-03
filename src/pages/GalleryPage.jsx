import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import axios from "axios";

import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import GalleryCard from "@/components/GalleryCard.jsx";

const API = "http://localhost:5000/api";
const IMAGE_URL = "http://localhost:5000/uploads/gallery"; // sesuaikan dengan backend

const GalleryPage = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = async () => {
  try {
    const response = await axios.get(`${API}/gallery`);

    if (response.data.success) {
      setGalleryItems(response.data.data);
    }
  } catch (error) {
    console.error(error);
    setError("Gagal memuat data galeri.");
  } finally {
    setLoading(false);
  }
};



  return (
    <>
      <Helmet>
        <title>Galeri - Serabi Kratonan Khas Solo</title>
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
                <h1 className="heading-font text-4xl md:text-5xl font-bold mb-6">
                  Galeri
                </h1>

                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Perjalanan visual melalui produk, proses, dan semangat kami.
                </p>
              </motion.div>

              {loading ? (
  <div className="text-center py-20">
    Memuat data...
  </div>
) : error ? (
  <div className="text-center py-20 text-red-500">
    {error}
  </div>
) : galleryItems.length === 0 ? (
  <div className="text-center py-20">
    Belum ada galeri.
  </div>
) : (
  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
    {galleryItems.map((item) => (
      <div key={item.id} className="break-inside-avoid">
        <GalleryCard
          image={`${IMAGE_URL}/${item.gambar}`}
          title={item.judul}
          category={item.kategori}
        />
      </div>
    ))}
  </div>
)}
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">
                  Kunjungi Kami
                </h2>

                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Datang langsung ke toko kami untuk menikmati serabi khas Solo
                  yang dibuat secara tradisional.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;