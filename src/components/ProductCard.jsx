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
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <span className="text-2xl font-bold text-accent">{price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;