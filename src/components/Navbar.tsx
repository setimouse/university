"use client";

import { useState, useEffect } from "react";

interface SubMenuItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: "首页",
    href: "/"
  },
  {
    name: "留学服务",
    href: "/services",
    subItems: [
      { name: "本科申请", href: "/services/undergraduate" },
      { name: "研究生申请", href: "/services/postgraduate" },
      { name: "语言培训", href: "/services/language" },
      { name: "签证服务", href: "/services/visa" }
    ]
  },
  {
    name: "合作院校",
    href: "/partners",
    subItems: [
      { name: "英国院校", href: "/partners/uk" },
      { name: "美国院校", href: "/partners/usa" },
      { name: "澳洲院校", href: "/partners/australia" },
      { name: "加拿大院校", href: "/partners/canada" }
    ]
  },
  {
    name: "推荐课程",
    href: "/courses",
    subItems: [
      { name: "商科课程", href: "/courses/business" },
      { name: "工程课程", href: "/courses/engineering" },
      { name: "艺术课程", href: "/courses/art" },
      { name: "医学课程", href: "/courses/medicine" }
    ]
  },
  {
    name: "成功案例",
    href: "/cases"
  },
  {
    name: "资讯活动",
    href: "/news",
    subItems: [
      { name: "留学资讯", href: "/news/study-abroad" },
      { name: "活动预告", href: "/news/events" },
      { name: "政策解读", href: "/news/policy" }
    ]
  },
  {
    name: "关于我们",
    href: "/about",
    subItems: [
      { name: "公司简介", href: "/about/company" },
      { name: "团队介绍", href: "/about/team" },
      { name: "联系我们", href: "/about/contact" }
    ]
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (index: number, href: string, hasSubItems: boolean, e: React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault();
      setExpandedItem(expandedItem === index ? null : index);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full backdrop-blur-sm z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/80' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="University Choice"
            className={`h-8 transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          <span 
            className={`material-icons transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href} 
                  className={`py-2 flex items-center transition-colors duration-300 ${
                    scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                  {item.subItems && (
                    <span 
                      className={`material-icons ml-1 text-sm transition-all duration-300 group-hover:rotate-180 ${
                        scrolled ? 'text-gray-800 opacity-60' : 'text-white opacity-40'
                      }`}
                    >
                      keyboard_arrow_down
                    </span>
                  )}
                </a>
                {item.subItems && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <a 
              href="/en" 
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              English
            </a>
            <span className={scrolled ? 'text-gray-600' : 'text-white'}>|</span>
            <a 
              href="/" 
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              中文
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-50 transition-transform duration-300 md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container mx-auto px-4 py-6 bg-white">
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)}>
                <span className="material-icons text-gray-800">close</span>
              </button>
            </div>
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a 
                    href={item.href}
                    className="text-gray-800 text-lg font-medium block py-2 flex items-center justify-between"
                    onClick={(e) => handleItemClick(index, item.href, !!item.subItems, e)}
                  >
                    {item.name}
                    {item.subItems && (
                      <span 
                        className={`material-icons transition-transform duration-300 ${
                          expandedItem === index ? 'rotate-180' : ''
                        }`}
                      >
                        keyboard_arrow_down
                      </span>
                    )}
                  </a>
                  {item.subItems && (
                    <div 
                      className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-300 ${
                        expandedItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="text-gray-600 block py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="/en" className="text-gray-600 hover:text-gray-900">
                English
              </a>
              <span className="text-gray-600">|</span>
              <a href="/" className="text-gray-800 hover:text-blue-600">
                中文
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
