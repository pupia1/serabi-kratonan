import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Award, Heart, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Authenticity',
      description: 'Mempertahankan resep asli dan metode pembuatan tradisional yang telah teruji waktu',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Menggunakan bahan-bahan pilihan terbaik untuk menghasilkan serabi berkualitas premium',
    },
    {
      icon: Heart,
      title: 'Tradition',
      description: 'Melestarikan warisan kuliner Solo untuk generasi mendatang',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Membangun hubungan erat dengan pelanggan dan komunitas lokal',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Serabi Kratonan Khas Solo</title>
        <meta
          name="description"
          content="Learn about Serabi Kratonan Khas Solo's heritage, values, and commitment to preserving traditional Solo culinary excellence."
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
                className="text-center mb-16"
              >
                <h1
                  className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Kisah Kita
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  Perjalanan melestarikan warisan kuliner Solo
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/assets/bg/bg-tentang(1).jpeg"
                    alt="Traditional serabi preparation process"
                    className="rounded-2xl shadow-lg w-full h-[250px] md:h-[400px] object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="heading-font text-3xl font-bold text-foreground mb-4 text-balance">
                    Warisan dan tradisi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Serabi Kratonan Khas Solo didirikan dengan misi untuk melestarikan warisan kuliner tradisional Solo. Resep kami telah diwariskan turun-temurun, memastikan setiap gigitan serabi membawa Anda kembali ke cita rasa autentik Solo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kami percaya bahwa makanan tradisional bukan hanya tentang rasa, tetapi juga tentang cerita, budaya, dan kenangan yang terkandung di dalamnya. Setiap serabi yang kami buat adalah hasil dari dedikasi untuk mempertahankan kualitas dan keaslian.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dengan menggunakan bahan-bahan pilihan berkualitas tinggi dan metode pembuatan tradisional, kami menghadirkan serabi yang tidak hanya lezat, tetapi juga membanggakan warisan kuliner Indonesia.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-2 md:order-1"
                >
                  <h2 className="heading-font text-3xl font-bold text-foreground mb-4 text-balance">
                    Komitmen kami
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kami berkomitmen untuk memberikan pengalaman kuliner terbaik kepada setiap pelanggan. Dari pemilihan bahan baku hingga proses pembuatan, setiap tahap dilakukan dengan penuh perhatian dan standar kualitas tertinggi.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Tim kami terdiri dari pembuat serabi berpengalaman yang telah menguasai seni membuat serabi selama bertahun-tahun. Mereka memastikan setiap serabi memiliki tekstur yang sempurna dan rasa yang konsisten.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami juga terus berinovasi dengan menghadirkan varian rasa baru tanpa meninggalkan esensi tradisional yang menjadi ciri khas kami.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-1 md:order-2"
                >
                  <img
                    src="/assets/bg/bg-tentang.jpeg"
                    alt="Serabi Kratonan shop interior"
                    className="rounded-2xl shadow-lg w-full h-[250px] md:h-[400px] object-cover"
                  />
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
                  Value Kami
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  Prinsip-prinsip yang membimbing segala sesuatu yang kami lakukan
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-8 shadow-lg"
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="heading-font text-2xl font-semibold text-card-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;