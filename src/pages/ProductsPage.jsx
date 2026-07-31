import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import axios from "axios";

import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ProductCard from "@/components/ProductCard.jsx";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const API = "http://localhost:5000/api";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await axios.get(`${API}/productWebsite`);

      if (res.data.success) {
        setProducts(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter(
          (item) => item.kategori === activeTab
        );

  return (
    <>
      <Helmet>
        <title>Menu Kami - Serabi Kratonan Khas Solo</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-b from-secondary to-background">
            <div className="max-w-7xl mx-auto px-4">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
              >
                <h1 className="heading-font text-5xl font-bold mb-4">
                  Menu Kami
                </h1>

                <p className="text-muted-foreground">
                  Temukan pilihan varian serabi terbaik kami.
                </p>
              </motion.div>

              <Tabs
                defaultValue="all"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-10">
                  <TabsTrigger value="all">
                    Semua
                  </TabsTrigger>

                  <TabsTrigger value="Autentik">
                    Autentik
                  </TabsTrigger>

                  <TabsTrigger value="Pisang Series">
                    Pisang Series
                  </TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredProducts.map((item) => (
                      <ProductCard
                        key={item.id}
                        image={`http://localhost:5000/uploads/product/${item.gambar}`}
                        name={item.nama_produk}
                        description={item.deskripsi}
                        price={`Rp ${Number(item.harga).toLocaleString("id-ID")}`}
                      />
                    ))}

                  </div>
                </TabsContent>
              </Tabs>

              {filteredProducts.length === 0 && (
                <div className="text-center py-10">
                  Tidak ada produk.
                </div>
              )}
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="heading-font text-4xl font-bold mb-5">
                Dibuat Segar Setiap Hari
              </h2>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                Semua serabi kami dibuat segar setiap hari menggunakan bahan-bahan pilihan berkualitas tinggi. Kami tidak menggunakan bahan pengawet, sehingga Anda mendapatkan rasa yang autentik dan segar.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Kunjungi toko kami di Solo atau hubungi kami untuk pemesanan. Kami juga menerima pesanan untuk acara khusus dan gathering.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;