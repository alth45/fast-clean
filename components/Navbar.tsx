"use client";

import { useState, useCallback } from "react";
import { Phone, ChevronDown, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { getTranslation, type Language } from "@/lib/translations";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  const t = (path: string) => getTranslation(language, path);

  const scrollToSection = useCallback((id: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setOpenDropdown(null);
    setMobileOpen(false);
  };

    type NavItem = {
    key: string;
    href?: string;
    onClick?: () => void;
    children?: { key: string; href: string; onClick?: () => void }[];
  };

  const navItems: NavItem[] = [
    { key: "nav.about", onClick: () => scrollToSection("tentang") },
    { key: "nav.faq", onClick: () => scrollToSection("faq") },
    // {
    //   key: "nav.solutions",
    //   children: [
    //     { key: "nav.solutionsChildren.office", href: "/solusi/kantor" },
    //     { key: "nav.solutionsChildren.building", href: "/solusi/gedung" },
    //     { key: "nav.solutionsChildren.garden", href: "/solusi/taman" },
    //   ],
    // },
    { key: "nav.problem", onClick: () => scrollToSection("masalah") },
    { key: "nav.gallery", href: "/gallery" },
    {
      key: "nav.language",
      children: [
        {
          key: "nav.languageChildren.english",
          href: "#",
          onClick: () => changeLanguage("en"),
        },
        {
          key: "nav.languageChildren.indonesia",
          href: "#",
          onClick: () => changeLanguage("id"),
        },
      ],
    },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const renderDropdownContent = (children: NavItem["children"]) => (
    <div className="py-1">
      {children?.map((child) => (
        <Link
          key={child.key}
                    href={child.href || "#"}
          onClick={(e) => {
            if (child.onClick) {
              e.preventDefault();
              child.onClick();
            }
          }}
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {t(child.key)}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:border-b dark:border-gray-700 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-xl font-bold text-gray-800 dark:text-white"
          >
            FastCleaning
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <div key={item.key} className="relative group">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className="flex items-center gap-1 px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.key === "nav.language" && (
                        <Globe className="h-4 w-4" />
                      )}
                      {t(item.key)}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-44 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      {renderDropdownContent(item.children)}
                    </div>
                  </>
                                ) : item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="inline-block px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {t(item.key)}
                  </button>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className="inline-block px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                )}
              </div>
            ))}

            {/* Tombol Kontak */}
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2">
          {navItems.map((item) => (
            <div key={item.key}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className="flex w-full items-center justify-between py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span className="flex items-center gap-2">
                      {item.key === "nav.language" && (
                        <Globe className="h-4 w-4" />
                      )}
                      {t(item.key)}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.key && (
                    <div className="ml-4 space-y-1 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href || "#"}
                          onClick={(e) => {
                            if (child.onClick) {
                              e.preventDefault();
                              child.onClick();
                            }
                          }}
                          className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
                            ) : item.onClick ? (
                <button
                  onClick={() => {
                    item.onClick?.();
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t(item.key)}
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.key)}
                </Link>
              )}
            </div>
          ))}

          {/* Tombol Kontak mobile */}
          <Link
            href="/kontak"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="h-4 w-4" />
            {t("nav.contact")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

