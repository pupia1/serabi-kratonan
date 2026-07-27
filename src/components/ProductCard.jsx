import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ image, name, description, price }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Gambar Produk */}
      <div className="overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Konten */}
      <div className="flex flex-col flex-grow p-4 md:p-5 lg:p-6">
        <h3 className="heading-font text-lg md:text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-grow mb-3 md:mb-4">
          {description}
        </p>

        <div className="mt-auto">
          <span className="text-xl md:text-2xl font-bold text-accent">
            {price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;