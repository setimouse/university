"use client";

import { useEffect, useState } from "react";

export default function HomeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <style jsx>{`
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .zoom-animation {
          animation: slowZoom 20s ease-out forwards;
        }
      `}</style>
      <div className="absolute inset-0">
        <img
          src="/images/1.jpg"
          alt="图书馆背景"
          className={`w-full h-full object-cover ${mounted ? 'zoom-animation' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center justify-center md:justify-start">
        <div className="text-white max-w-2xl text-center md:text-left animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 leading-tight">开启您的<br/>留学之旅</h1>
          <p className="text-xl mb-12 opacity-90">
            专业的留学咨询服务，为您的学术发展保驾护航
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            立即咨询
          </button>
        </div>
      </div>
    </section>
  )
} 