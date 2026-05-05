"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { MessageCircle, Mail, ChevronDown, MoveRight, Star, Infinity as InfinityIcon, Swords, Theater, Camera } from "lucide-react";

export default function LokacraftRedesign() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleLoad = () => {
      // Small timeout to ensure a smooth transition even if load is instant
      setTimeout(() => setIsLoading(false), 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-loka-cream text-loka-dark font-inter overflow-hidden min-h-screen">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-loka-cream flex items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/90 backdrop-blur-sm px-10 py-5 rounded-full shadow-xl border border-white/50 flex items-center gap-6"
            >
              {/* Aesthetic Dual-Ring Spinner */}
              <div className="relative w-8 h-8">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-loka-gold/10 border-t-loka-gold rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-1 border-2 border-loka-brown/10 border-b-loka-brown rounded-full shadow-sm"
                />
              </div>
              <span className="text-xl font-bold text-loka-brown/40 tracking-tight italic">Please wait...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="paper-texture" />
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-loka-gold z-[100] origin-left" style={{ scaleX }} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Rich Background Pattern - Diamond Lattice + Dots */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none z-0" 
          style={{ 
            backgroundImage: `
              linear-gradient(45deg, var(--color-loka-brown) 1px, transparent 1px), 
              linear-gradient(-45deg, var(--color-loka-brown) 1px, transparent 1px),
              radial-gradient(var(--color-loka-brown) 2px, transparent 2px)
            `, 
            backgroundSize: '40px 40px, 40px 40px, 20px 20px',
            backgroundPosition: '0 0, 0 0, 10px 10px'
          }} 
        />

        {/* Wayang Silhouette Background Ornament - Animated */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [-15, -13, -15]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-[-40%] md:right-[-10%] top-[15%] md:top-[20%] w-[400px] md:w-[900px] opacity-[0.2] md:opacity-[0.25] pointer-events-none z-0"
        >
          <motion.img 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="/images/wayang-bg.png" alt="Wayang Ornament" className="w-full h-auto object-contain drop-shadow-2xl" 
          />
        </motion.div>

        {/* Floating Clouds - Left Edge Only */}
        <motion.img 
          initial={{ x: -150, opacity: 0 }} 
          animate={{ x: 0, opacity: 100, y: [0, 15, 0] }}
          transition={{ 
            x: { duration: 2, ease: "easeOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          src="/images/cloud-ornament.png" className="absolute top-[5%] md:top-[10%] left-[-20%] md:left-[-15%] lg:left-[-5%] w-40 md:w-[400px] lg:w-[450px] opacity-90 z-10 drop-shadow-2xl" 
        />
        <motion.img 
          initial={{ x: -150, opacity: 0 }} 
          animate={{ x: 0, opacity: 100, y: [0, -20, 0] }}
          transition={{ 
            x: { duration: 2.6, ease: "easeOut" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          src="/images/cloud-ornament.png" className="absolute bottom-[15%] md:bottom-[10%] left-[-30%] md:left-[-20%] lg:left-[-8%] w-48 md:w-[350px] lg:w-[400px] opacity-75 z-10 rotate-[165deg] drop-shadow-xl" 
        />
        
        {/* Floating Clouds - Right Edge Only */}
        <motion.img 
          initial={{ x: 150, opacity: 0 }} 
          animate={{ x: 0, opacity: 100, y: [0, 20, 0] }}
          transition={{ 
            x: { duration: 2.3, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          src="/images/cloud-ornament.png" className="absolute top-[10%] md:top-[15%] right-[-30%] md:right-[-20%] lg:right-[-5%] w-44 md:w-[380px] lg:w-[420px] opacity-85 z-10 rotate-[10deg] drop-shadow-2xl" 
        />
        <motion.img 
          initial={{ x: 150, opacity: 0 }} 
          animate={{ x: 0, opacity: 100, y: [0, -15, 0] }}
          transition={{ 
            x: { duration: 2.8, ease: "easeOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          src="/images/cloud-ornament.png" className="absolute bottom-[5%] right-[-20%] md:right-[-10%] lg:right-[-2%] w-52 md:w-[450px] lg:w-[500px] opacity-90 z-10 rotate-[-170deg] drop-shadow-2xl" 
        />

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center z-20 relative bg-transparent p-4 md:p-0 mt-10 md:mt-0 mx-4 md:mx-0"
        >

          
          {/* Logo Heading Container */}
          <div className="relative flex justify-center items-center mt-4 md:mt-6 mb-8">
            <h1 className="text-5xl sm:text-5xl md:text-9xl font-black text-loka-brown leading-none drop-shadow-lg tracking-tight relative z-10">
              LOKA<span className="text-loka-gold">CRAFT</span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto text-sm md:text-xl opacity-90 leading-[1.8] font-medium text-loka-brown relative z-10 px-2 md:px-6 text-justify md:text-center space-y-4">
            <p>
              <span className="bg-loka-gold font-bold px-1.5 py-0.5 text-loka-brown rounded-sm">Lokacraft</span> adalah produk kriya fungsional berupa sarung galon yang mengangkat keindahan <span className="bg-loka-gold font-bold px-1.5 py-0.5 text-loka-brown rounded-sm">budaya lokal</span> ke dalam kehidupan sehari-hari. Dengan memadukan seni, fungsi, dan teknologi, Lokacraft menghadirkan produk yang tidak hanya digunakan, tetapi juga memiliki makna dan cerita.
            </p>
          </div>
          

        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, y: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const storySection = document.getElementById('story');
            if (storySection) {
              storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="absolute bottom-8 z-20 cursor-pointer"
        >
          <div className="bg-white/50 backdrop-blur-md p-3 rounded-full border border-white shadow-md hover:shadow-lg transition-shadow">
            <ChevronDown className="text-loka-gold" size={28} />
          </div>
        </motion.div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 bg-gradient-to-t from-loka-cream via-loka-cream/2 to-transparent z-10 pointer-events-none" />
      </section>

      {/* --- STORY SECTION (Desktop: Side by Side) --- */}
      <section id="story" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-[400px] mx-auto bg-loka-gold/20 rounded-2xl overflow-hidden shadow-2xl relative">
               {/* Ganti dengan foto produk asli */}
               <img 
                 src="/images/product.jpeg" 
                 alt="Lokacraft Product" 
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
               />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-loka-brown font-bold text-xl tracking-tighter italic">"Warisan dalam setiap detail"</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-loka-brown leading-tight">
              Membawa Cerita Panji & Wayang Beber
            </h2>
            <p className="text-lg opacity-80 leading-relaxed text-justify md:text-left">
              Cerita Panji merupakan warisan budaya dari Jawa Timur, khususnya dikenal dalam seni <b>Wayang Beber Malangan</b>. Kisah ini menceritakan perjalanan Panji Asmarabangun dan Dewi Sekartaji—tentang cinta, perjuangan, dan pencarian jati diri. Melalui visual khas Wayang Beber, cerita ini diwariskan secara turun-temurun dan menjadi bagian penting dari identitas budaya Malang.
            </p>
            <div className="flex items-center gap-2 text-loka-gold">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <span className="text-loka-dark ml-2 text-sm font-bold">Premium Craftsmanship</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VALUES SECTION (Interactive Grid) --- */}
      <section className="bg-loka-brown py-32 px-6 text-white overflow-hidden relative">
        {/* Subtle Background Ornament for Dark Section */}
        <div className="absolute left-[-10%] bottom-[-10%] w-[500px] opacity-[0.03] pointer-events-none rotate-12">
          <img src="/images/wayang-bg.png" alt="" className="w-full h-auto invert" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-widest leading-tight">
              Budaya dalam Kehidupan<br/>Sehari-Hari
            </h2>
            <div className="h-1 w-24 bg-loka-gold mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { icon: <InfinityIcon size={48} />, title: "Kesetiaan", desc: "Melambangkan dedikasi Panji kepada Sekartaji, diwujudkan dalam kualitas produk yang tahan lama." },
              { icon: <Swords size={48} />, title: "Perjuangan", desc: "Setiap jahitan merepresentasikan semangat pelestarian budaya yang tak pernah padam." },
              { icon: <Theater size={48} />, title: "Identitas", desc: "Menegaskan siapa kita melalui simbolisme klasik di tengah dunia yang serba instan." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] transition-all group relative overflow-hidden"
              >
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-loka-gold/10 rounded-full blur-3xl group-hover:bg-loka-gold/20 transition-colors" />
                
                <div className="text-loka-gold mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-black mb-4 uppercase tracking-wider group-hover:text-loka-gold transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-lg opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
                
                <div className="mt-8 text-loka-gold font-black text-6xl opacity-[0.03] absolute bottom-6 right-8 group-hover:opacity-[0.07]">
                  0{i+1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer className="py-12 px-6 text-center max-w-5xl mx-auto relative overflow-hidden">

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-12"
        >
          {/* Title with Gold Bar Effect */}
          <div className="relative inline-block px-12 py-4 group">
            <div className="absolute inset-0 bg-loka-gold transform -skew-x-12 shadow-lg" />
            <h3 className="relative text-3xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-md">
              Temukan Kami Pada
            </h3>
          </div>

          <p className="text-xl md:text-2xl font-medium text-loka-brown/80 max-w-2xl mx-auto italic leading-relaxed">
            Ingin tahu lebih lanjut atau memiliki produk <span className="text-loka-gold font-black not-italic border-b-2 border-loka-gold/30 pb-1">Lokacraft</span>?
          </p>
          
          {/* Contact Pills Container */}
          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
              <motion.a 
                href="https://www.instagram.com/lokaacraft/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-loka-dark)" }}
                className="flex items-center justify-center gap-3 bg-loka-brown text-white px-10 py-4 rounded-xl shadow-lg font-bold min-w-[280px]"
              >
                <Camera size={20} className="text-loka-gold" />
                <span>Instagram: @lokaacraft</span>
              </motion.a>
              
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-loka-dark)" }}
                className="flex items-center justify-center gap-3 bg-loka-brown text-white px-10 py-4 rounded-xl shadow-lg font-bold min-w-[280px]"
              >
                <MessageCircle size={20} className="text-loka-gold" />
                <span>WhatsApp: +62 851-8540-5772</span>
              </motion.a>
            </div>
            
            <motion.a 
              href="mailto:lokacraftmail@gmail.com"
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-loka-dark)" }}
              className="flex items-center justify-center gap-3 bg-loka-brown text-white px-12 py-4 rounded-xl shadow-lg font-bold w-full md:w-auto md:min-w-[400px]"
            >
              <Mail size={20} className="text-loka-gold" />
              <span>lokacraftmail@gmail.com</span>
            </motion.a>
          </div>

        </motion.div>

        <div className="mt-12 space-y-6 opacity-40">
          <div className="h-px w-20 bg-loka-brown mx-auto" />
          <p className="text-sm font-medium tracking-widest uppercase">
            © 2026 Lokacraft Indonesia<br/>
            <span className="text-[10px]">Melestarikan Budaya, Satu Langkah Setiap Hari.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}