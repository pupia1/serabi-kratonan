import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';


const ProductsPage = () => {
  const products = [
    {
  category: 'classic',
  image: '/assets/original.png',
  name: 'Serabi Original',
  description: 'Serabi tradisional dengan tekstur lembut, disajikan tanpa topping sehingga cita rasa asli khas Solo tetap terasa.',
  price: 'Rp 4.000',
},
{
  category: 'classic',
  image: '/assets/coklat.png',
  name: 'Serabi Coklat',
  description: 'Serabi lembut dengan topping cokelat manis yang lumer, memberikan perpaduan rasa klasik dan modern.',
  price: 'Rp 4.500',
},
{
  category: 'classic',
  image: '/assets/keju.png',
  name: 'Serabi Keju',
  description: 'Serabi hangat dengan taburan keju parut yang gurih, menciptakan rasa yang lembut dan nikmat.',
  price: 'Rp 4.500',
},
{
  category: 'classic',
  image: '/assets/nangka.png',
  name: 'Serabi Nangka',
  description: 'Serabi dengan potongan buah nangka yang harum dan manis alami, memberikan cita rasa khas Nusantara.',
  price: 'Rp 4.500',
},
{
  category: 'classic',
  image: '/assets/kismis.png',
  name: 'Serabi Kismis',
  description: 'Serabi lembut dengan taburan kismis pilihan yang menghadirkan rasa manis alami di setiap gigitan.',
  price: 'Rp 4.500',
},
{
  category: 'classic',
  image: '/assets/coklat keju.png',
  name: 'Serabi Coklat Keju',
  description: 'Perpaduan topping cokelat yang manis dan keju yang gurih, menciptakan kombinasi rasa yang sempurna.',
  price: 'Rp 5.000',
},
{
  category: 'classic',
  image: '/assets/tiramisu.png',
  name: 'Serabi Tiramisu',
  description: 'Serabi dengan sentuhan rasa tiramisu yang lembut, menghadirkan aroma kopi dan krim yang khas.',
  price: 'Rp 5.000',
},
{
  category: 'classic',
  image: '/assets/taro.png',
  name: 'Serabi Taro',
  description: 'Serabi dengan topping taro berwarna ungu yang manis dan lembut, memberikan cita rasa yang unik.',
  price: 'Rp 5.000',
},
{
  category: 'classic',
  image: '/assets/matcha.png',
  name: 'Serabi Matcha',
  description: 'Serabi dengan topping matcha berkualitas yang menghadirkan rasa teh hijau yang khas dan sedikit pahit.',
  price: 'Rp 5.000',
},
{
  category: 'classic',
  image: '/assets/vanila.png',
  name: 'Serabi Vanila',
  description: 'Serabi dengan aroma vanila yang lembut dan manis, cocok dinikmati sebagai camilan sepanjang hari.',
  price: 'Rp 5.000',
},
{
  category: 'classic',
  image: '/assets/oreo.png',
  name: 'Serabi Oreo',
  description: 'Serabi dengan taburan remahan biskuit Oreo yang renyah, memberikan sensasi cokelat yang lebih nikmat.',
  price: 'Rp 5.000',
},
{
  category: 'classic',
  image: '/assets/kacang.png',
  name: 'Serabi Kacang',
  description: 'Serabi dengan taburan kacang sangrai yang gurih dan renyah, menambah tekstur di setiap gigitan.',
  price: 'Rp 5.000',
},
{
  category: 'classic',
  image: '/assets/strawberry.png',
  name: 'Serabi Strawberry',
  description: 'Serabi dengan topping strawberry manis dan segar, memberikan perpaduan rasa buah yang menyenangkan.',
  price: 'Rp 5.000',
},
{
  category: 'modern',
  image: '/assets/pisang.png',
  name: 'Serabi Pisang',
  description: 'Serabi lembut dengan irisan pisang matang yang manis alami, cocok untuk pencinta cita rasa buah.',
  price: 'Rp 4.500',
},
{
  category: 'modern',
  image: '/assets/pisang coklat.png',
  name: 'Serabi Pisang Coklat',
  description: 'Perpaduan irisan pisang manis dengan topping cokelat yang lumer, menghasilkan rasa yang lezat.',
  price: 'Rp 5.000',
},
{
  category: 'modern',
  image: '/assets/pisang keju.png',
  name: 'Serabi Pisang Keju',
  description: 'Kombinasi pisang manis dan keju gurih yang berpadu sempurna di atas serabi hangat.',
  price: 'Rp 5.000',
},
{
  category: 'modern',
  image: '/assets/p-coklat keju.png',
  name: 'Serabi Pisang Coklat Keju',
  description: 'Varian spesial dengan topping pisang, cokelat, dan keju yang menghadirkan rasa manis, gurih, dan creamy dalam satu sajian.',
  price: 'Rp 6.000',
},
    
  ];

  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Menu Kami - Serabi Kratonan Khas Solo</title>
        <meta
          name="description"
          content="Explore our range of traditional and modern serabi variants, made with premium ingredients and authentic Solo recipes."
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
                  Menu Kami
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  Temukan pilihan varian serabi tradisional dan modern kami
                </p>
              </motion.div>

              <Tabs
                defaultValue="all"
                className="w-full"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="classic">Autentik </TabsTrigger>
                  <TabsTrigger value="modern">Pisang Series</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={index} {...product} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Tidak ada menu yang ditemukan dalam kategori ini.
                  </p>
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
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Dibuat segar setiap hari
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  Semua serabi kami dibuat segar setiap hari menggunakan bahan-bahan pilihan berkualitas tinggi. Kami tidak menggunakan bahan pengawet, sehingga Anda mendapatkan rasa yang autentik dan segar.
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Kunjungi toko kami di Solo atau hubungi kami untuk pemesanan. Kami juga menerima pesanan untuk acara khusus dan gathering.
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

export default ProductsPage;