import React from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ image, title, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <p className="text-xs font-medium tracking-wide uppercase text-accent mb-1">
            {category}
          </p>
          <h3 className="heading-font text-xl font-semibold text-primary-foreground">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;