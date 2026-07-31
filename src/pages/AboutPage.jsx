import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";


import {
  Sparkles,
  Award,
  Heart,
  Users,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const API = "http://localhost:5000/api/about";
const IMAGE_URL = "http://localhost:5000/uploads/about";

const iconMap = {
  Sparkles,
  Award,
  Heart,
  Users,
};

export default function AboutPage() {

const [loading, setLoading] = useState(true);

const [tentang, setTentang] = useState({});
const [isiTentang, setIsiTentang] = useState([]);
const [nilaiKami, setNilaiKami] = useState([]);

  useEffect(() => {
    fetchTentang();
  }, []);

  const fetchTentang = async () => {
  try {

    const res = await axios.get(API);

    console.log(res.data);

    setTentang(res.data.data.tentang || {});
    setIsiTentang(res.data.data.isi_tentang || []);
    setNilaiKami(res.data.data.nilai_kami || []);

  } catch (err) {

    console.log(err);

  } finally {

    setLoading(false);

  }
};
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  const sejarah = isiTentang.find(item => item.urutan === 1);
const komitmen = isiTentang.find(item => item.urutan === 2);

  return (
    <>
      <Helmet>
        <title>{tentang.judul_halaman}</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">

        <Header />

        <main className="flex-grow">

          {/* HERO */}
          <section className="py-20 bg-gradient-to-b from-secondary to-background">

           <div
  className="text-center mb-16"
  style={{ opacity: 1, transform: "none" }}
>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-16"
  >

    <h1
      className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
      style={{ letterSpacing: "-0.02em" }}
    >
      {tentang.judul_halaman}
    </h1>

    <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
      {tentang.subjudul_halaman}
    </p>

  </motion.div>

</div>
     

  <div className="max-w-7xl mx-auto px-4">

    {sejarah && (

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

        <div>

          <img
            src={`${IMAGE_URL}/${sejarah.gambar}`}
            className="rounded-2xl shadow-lg w-full h-[250px] md:h-[400px] object-cover"
            alt={sejarah.judul}
          />

        </div>

        <div>

          <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
      style={{ letterSpacing: "-0.02em" }}>
            {sejarah.judul}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {sejarah.deskripsi_1}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {sejarah.deskripsi_2}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {sejarah.deskripsi_3}
          </p>

        </div>

      </div>

    )}

    {komitmen && (

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="order-2 md:order-1">

          <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
      style={{ letterSpacing: "-0.02em" }}>
            {komitmen.judul}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {komitmen.deskripsi_1}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {komitmen.deskripsi_2}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {komitmen.deskripsi_3}
          </p>

        </div>

        <div className="order-1 md:order-2">

          <img
            src={`${IMAGE_URL}/${komitmen.gambar}`}
            className="rounded-2xl shadow-lg w-full h-[250px] md:h-[400px] object-cover"
            alt={komitmen.judul}
          />

        </div>

      </div>

    )}

  </div>

</section>

          {/* NILAI KAMI */}
          <section className="py-20 bg-muted">

            <div className="max-w-7xl mx-auto px-4">

              <div className="text-center mb-12">

                <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
      style={{ letterSpacing: "-0.02em" }}>
                  Value Kami
                </h2>

                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Prinsip-prinsip yang membimbing segala sesuatu yang kami lakukan
          </p>

              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {nilaiKami.map((item) => {

                  const Icon = iconMap[item.ikon] || Sparkles;

                  return (

                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-lg p-8"
                    >

                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">

                        <Icon
                          className="text-accent"
                          size={28}
                        />

                      </div>

                      <h3 className="heading-font text-2xl font-semibold text-card-foreground mb-3">
                        {item.judul}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {item.deskripsi}
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
}