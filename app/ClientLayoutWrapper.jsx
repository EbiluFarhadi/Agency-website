'use client';

import { dir } from 'i18next';
import { useEffect, useState } from 'react';

export default function ClientLayoutWrapper({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    setLang(storedLang);
    document.documentElement.lang = storedLang;
    document.documentElement.dir = dir(storedLang);
  }, []);

  return (
    <body>{children}</body>
  );
}
