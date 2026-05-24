"use client";

import { useEffect } from "react";
import { pizzas } from "@/lib/pizzas";

/**
 * Precarga las imágenes del modal "Ver detalles" con baja prioridad,
 * después de que las imágenes principales del carrusel ya cargaron.
 */
export default function PreloadModalImages() {
  useEffect(() => {
    // Espera a que el hilo principal esté libre (imágenes del carrusel ya cargadas)
    const timer = setTimeout(() => {
      pizzas.forEach((pizza) => {
        const img = new window.Image();
        img.fetchPriority = "low";
        img.src = pizza.image;
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
