"use client"
import { Heart, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const galleryImages = [
  { src: "/images/cestos.jpg", title: "Cestos" },
  { src: "/images/estante.jpg", title: "Estante" },
  { src: "/images/frontal.jpg", title: "Frontal" },
  { src: "/images/local.jpg", title: "Local" },
  { src: "/images/maquinas.jpg", title: "Máquinas" },
  { src: "/images/producto.jpg", title: "Produto" },
  { src: "/images/productos.jpg", title: "Produtos" },
  { src: "/images/side.jpg", title: "Side" },
  { src: "/images/sofas.jpg", title: "Sofás" },
  { src: "/images/tenis.jpg", title: "Tênis" },
];

export default function Sobre() {
  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;
  const imagesPerSlide = 3;
  const maxIndex = total - imagesPerSlide;
  const prevImage = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const nextImage = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  // Drag state
  const dragStartX = useRef(null);
  const dragging = useRef(false);

  const handleDragStart = (e) => {
    dragging.current = true;
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    if (e.type === 'mousedown' || e.type === 'dragstart') {
      e.preventDefault();
    }
  };

  const handleDragEnd = (e) => {
    if (!dragging.current) return;
    const endX = e.type === 'touchend' ? (e.changedTouches[0]?.clientX ?? 0) : e.clientX;
    const diff = endX - dragStartX.current;
    const threshold = 60; // px
    if (diff > threshold && current > 0) {
      prevImage();
    } else if (diff < -threshold && current < maxIndex) {
      nextImage();
    }
    dragging.current = false;
    dragStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[20vh] sm:h-[30vh] md:h-[70vh] p-4 shadow-xl">
        <div className="absolute inset-0 z-10" />
        <Image
          src="/images/brasil-uruguay.svg"
          alt="Itajai"
          fill
          className="object-cover"
          priority
          unoptimized={true}
        />
      </section>
   
      {/* Story Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 drop-shadow-lg">Nossa Jornada</h2>
              <div className="flex justify-start mb-6 md:mb-8">
                <span className="block w-16 md:w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-200"></span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Tudo começou no Uruguai, onde nossa paixão por qualidade e excelência no serviço de lavanderia nasceu. Quando conhecemos Santa Catarina, foi amor à primeira vista. A beleza natural, o clima acolhedor e a cultura rica da região nos conquistaram completamente.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Decidimos trazer nossa experiência e dedicação para esta terra que tanto nos acolheu. Hoje, somos obcecados em oferecer o melhor serviço de lavanderia para a comunidade, combinando nossa expertise uruguaia com o carinho e atenção que a região merece.
              </p>
              <div className="flex items-center space-x-4 text-blue-400">
                <MapPin className="h-6 w-6" />
                <span>Uruguai → Santa Catarina</span>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl mt-8 md:mt-12">
              <Image
                src="/images/uruguay.svg"
                alt="Jornada de Montevidéu para Santa Catarina"
                fill
                className="object-cover"
                unoptimized={true}

              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-center mb-4 drop-shadow-lg">Nossos Valores</h2>
          <div className="flex justify-center mb-8 md:mb-12">
            <span className="block w-24 md:w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-200"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md">
              <Heart className="h-8 w-8 md:h-12 md:w-12 text-blue-400 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Amor pela Qualidade</h3>
              <p className="text-gray-600 text-sm md:text-base">Cada peça é tratada com o mesmo cuidado que dedicamos à nossa própria família.</p>
            </div>
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md">
              <Star className="h-8 w-8 md:h-12 md:w-12 text-blue-400 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Excelência</h3>
              <p className="text-gray-600 text-sm md:text-base">Compromisso com os mais altos padrões de qualidade em cada serviço.</p>
            </div>
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md">
              <Users className="h-8 w-8 md:h-12 md:w-12 text-blue-400 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Comunidade</h3>
              <p className="text-gray-600 text-sm md:text-base">Integração e respeito pela cultura e valores da Santa Catarina.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section 
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-center mb-4 drop-shadow-lg">Conheça Nossa Loja</h2>
          <div className="flex justify-center mb-8 md:mb-12">
            <span className="block w-24 md:w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-200"></span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="relative w-full max-w-7xl h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-white"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
              style={{ cursor: 'grab' }}
            >
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full p-2 md:p-3 shadow-lg border-2 border-white hover:scale-110 hover:from-blue-500 hover:to-blue-700 transition-all duration-200 z-10"
                aria-label="Imagem anterior"
                disabled={current === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <div className="flex w-full h-full justify-center items-center gap-3 md:gap-6 px-4 md:px-24 select-none">
                {galleryImages.slice(current, current + imagesPerSlide).map((img, idx) => (
                  <div key={img.src} className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden flex-shrink-0 bg-blue-100 p-4 md:p-8">
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      className="object-contain"
                      unoptimized={true}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full p-2 md:p-3 shadow-lg border-2 border-white hover:scale-110 hover:from-blue-500 hover:to-blue-700 transition-all duration-200 z-10"
                aria-label="Próxima imagem"
                disabled={current >= maxIndex}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flex gap-2 justify-center">
              {Array.from({ length: total - imagesPerSlide + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-blue-400 border-blue-400' : 'bg-white border-blue-200'}`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      */}

      <Footer />
    </div>
  );
}
