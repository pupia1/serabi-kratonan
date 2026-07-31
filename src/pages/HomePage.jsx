import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {

  const [home, setHome] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const API = "http://localhost:5000/api";

  useEffect(() => {
  getHome();
}, []);

const getHome = async () => {
  try {

    const res = await axios.get(`${API}/home`);

    setHome(res.data.data.home);
    setFeaturedProducts(res.data.data.produkUnggulan);

  } catch (err) {

    console.log(err);

  }
};

  return (
    <>
      <Helmet>
        <title>Srabi Kratonan Khas Solo - Cita Rasa Tradisional, Kualitas Modern</title>
        <meta
          name="description"
          content="Nikmati serabi khas Solo dengan resep turun-temurun. Tersedia berbagai varian rasa dengan bahan berkualitas premium."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={`http://localhost:5000/uploads/home/${home.gambar_hero}`}
                alt="Serabi Kratonan Khas Solo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1
                  className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {home.judul_hero}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {home.subjudul_hero}
                </p>
                <Link to="/products">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
                  >
                    Lihat Menu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  {home.tentang_judul}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  {home.tentang_deskripsi}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-4">
                    <Sparkles className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                    Resep turun-temurun
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dibuat dengan resep asli yang telah diwariskan dari generasi ke generasi
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                    Bahan berkualitas premium
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Menggunakan bahan pilihan terbaik untuk menghasilkan rasa yang sempurna
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-4">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                    Dibuat dengan cinta
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Setiap serabi dibuat dengan penuh perhatian dan dedikasi
                  </p>
                </motion.div>
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
                className="text-center mb-12"
              >
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Menu Unggulan
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  Pilihan serabi favorit pelanggan kami
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {featuredProducts.map((product, index) => (
                  <ProductCard key={product.id}
    image={`http://localhost:5000/uploads/product/${product.gambar}`}
    name={product.nama_produk}
    description={product.deskripsi}
    price={`Rp ${Number(product.harga).toLocaleString("id-ID")}`} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Link to="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="transition-all duration-200 active:scale-[0.98]"
                  >
                    Lihat Semua Menu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;