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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">开启您的留学之旅</h1>
          <p className="text-xl mb-8">
            专业的留学咨询服务，为您的学术发展保驾护航
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
            立即咨询
          </button>
        </div>
      </div>
    </section>
  )
} 