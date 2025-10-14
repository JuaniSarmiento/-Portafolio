"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import Image from "next/image";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
    title?: string;
  }[];
  projectName: string;
}

export default function ProjectGallery({ images, projectName }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Gallery Trigger */}
      <div className="mb-6">
        <button
          onClick={() => openGallery(0)}
          className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <Eye className="w-4 h-4" />
          Ver capturas ({images.length} imágenes)
          <div className="flex gap-1 ml-2">
            {images.slice(0, 3).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-colors"
              />
            ))}
            {images.length > 3 && (
              <span className="text-xs text-neutral-500 ml-1">+{images.length - 3}</span>
            )}
          </div>
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeGallery}
              className="absolute top-4 right-4 z-60 p-3 bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 z-60 p-3 bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 z-60 p-3 bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-neutral-900/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white text-sm font-medium">
                  {projectName} - {images[currentIndex].title || `Imagen ${currentIndex + 1}`}
                </p>
                <p className="text-neutral-300 text-xs">
                  {currentIndex + 1} de {images.length}
                </p>
              </div>
            </motion.div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 bg-neutral-900/80 backdrop-blur-sm rounded-lg p-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`relative w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? "border-white scale-110"
                        : "border-neutral-600 hover:border-neutral-400"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}