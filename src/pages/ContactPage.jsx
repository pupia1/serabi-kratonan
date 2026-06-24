import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Denpasar, Bali, Indonesia',
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      content: 'Senin - Minggu\n08:00 - 23:00 WIB',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+62 812 3456 7890',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'kratonansrabi@gmail.com',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Hubungi Kami - Serabi Kratonan Khas Solo</title>
        <meta
          name="description"
          content="Get in touch with Serabi Kratonan Khas Solo. Visit our shop in Solo, Jawa Tengah or contact us for orders and inquiries."
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
                  Hubungi Kami
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                 Kami senang mendengar kabar dari Anda. Hubungi kami untuk pemesanan, pertanyaan, atau sekadar menyapa.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="heading-font text-2xl font-bold text-foreground mb-6">
                    Send us a message
                  </h2>
                  <ContactForm />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="heading-font text-2xl font-bold text-foreground mb-6">
                    Contact information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                              <Icon className="h-6 w-6 text-accent" />
                            </div>
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

                  <div className="mt-8 p-6 bg-muted rounded-2xl">
                    <h3 className="font-semibold text-foreground mb-3">
                      Kontak Cepat
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Untuk pemesanan cepat atau pertanyaan mendesak, hubungi kami melalui WhatsApp
                    </p>
                    <a
                      href="https://wa.me/628123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 active:scale-[0.98]"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      WhatsApp Kami
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.51552851522956!2d115.20586278691329!3d-8.667905430973168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2417df6de37ad%3A0x92bebeb392812dea!2sSrabi%20Kratonan%20Khas%20Solo!5e0!3m2!1sid!2sid!4v1781334251831!5m2!1sid!2sid"
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  title="Lokasi"
                ></iframe>
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