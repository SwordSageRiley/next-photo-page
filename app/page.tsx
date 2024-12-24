'use client';

import Image from "next/image";
import Nav from '@/app/ui/nav';
import { Pictures } from "./ui/pictures";
import { Toggles } from '@/app/ui/toggles';
import { useState } from "react";
import localFont from 'next/font/local';


const myFont = localFont({ src: '../public/avali-scratch-rus-romanized.ttf' });

export default function Home() {
  

  const [avali, setAvali] = useState(false);
  const [theme, setTheme] = useState(true);

  function changeTheme() {
    setTheme(!theme);
  }
  function changeAvali(){
    setAvali(!avali);
  }


  return (
    <div className={`${avali ? myFont.className : ''} ${theme ? 'dark' : 'light'}`}>
      <Nav />
      <Pictures />
      <Toggles avaliToggle={changeAvali} darkToggle={changeTheme} />
    </div>
  );
}
