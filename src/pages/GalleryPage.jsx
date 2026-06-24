import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryCard from '@/components/GalleryCard.jsx';

const GalleryPage = () => {
  const galleryItems = [
    {
      image: `${import.meta.env.BASE_URL}/assets/original.png`,
      title: 'Serabi Original',
      category: 'Menu',
    },
    {
      image: `${import.meta.env.BASE_URL}/assets/bg/proses.jpeg`,
      title: 'Proses Pembuatan Serabi',
      category: 'Proses',
    },
    {
      image: `${import.meta.env.BASE_URL}/assets/bg/interior.jpeg`,
      title: 'Interior Toko',
      category: 'Toko',
    },
    {
      image: `${import.meta.env.BASE_URL}/assets/pisang coklat.png`,
      title: 'Serabi Pisang Coklat',
      category: 'Menu',
    },
    {
      image: `${import.meta.env.BASE_URL}/assets/bg/bg-tentang(1).jpeg`,
      title: 'Memasak dengan Tungku Tradisional',
      category: 'Proses',
    },
    {
      image: `${import.meta.env.BASE_URL}/assets/bg/g-coklat.jpeg`,
      title: 'Varian Serabi Coklat',
      category: 'Menu',
    },
    {
      image: `${import.meta.env.BASE_URL}/assets/bg/suasana.jpeg`,
      title: 'Suasana Toko',
      category: 'Toko',
    },
    {
      image: `${import.meta.env.BASE_URL}/assets/bg/proses packing.jpeg`,
      title: ' Proses Packaging',
      category: 'Proses',
    },
    {
      image: `${import.meta.env.BASE_URL}/assets/bg/menus.jpeg`,
      title: 'Varian Menu Autentik',
      category: 'Menu',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Galeri - Serabi Kratonan Khas Solo</title>
        <meta
          name="description"
          content="Explore our gallery showcasing our delicious serabi products, traditional preparation process, and welcoming shop atmosphere."
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
                  className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Galeri
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  Perjalanan visual melalui produk, proses, dan semangat kami
                </p>
              </motion.div>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {galleryItems.map((item, index) => (
                  <div key={index} className="break-inside-avoid">
                    <GalleryCard {...item} />
                  </div>
                ))}
              </div>
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
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Kunjungi kami
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  Datang langsung ke toko kami untuk merasakan pengalaman kuliner tradisional Solo yang autentik. Kami buka setiap hari dari pukul 08:00 hingga 23:00 WIB.
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Lokasi: Denpasar, Bali
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