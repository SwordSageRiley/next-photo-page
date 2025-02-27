'use client';

import { useState } from "react";
import localFont from 'next/font/local';

import { Banner } from "./components/banner";
import { About } from '@/app/components/about';
import { Nav } from '@/app/components/nav';
import { Toggles } from '@/app/components/toggles';
import { Highlight } from "@/app/components/highlight";

const myFont = localFont({ src: '../public/avali-scratch-rus-romanized.ttf' });

export default function Home() {


  const [avali, setAvali] = useState(false);
  const [theme, setTheme] = useState(true);

  function changeTheme() {
    setTheme(!theme);
  }
  function changeAvali() {
    setAvali(!avali);
  }


  return (
    <div className={`${avali ? myFont.className : ''} ${theme ? 'dark' : 'light'} test`}>
      <Banner />
      <Nav />
      {/* <Highlight /> */}
      <About />
      {/* <Toggles avaliToggle={changeAvali} darkToggle={changeTheme} /> */}
    </div>
  );
}
