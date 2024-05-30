"use client"; //서버에서는 js를 랜더링할 수 없어서 클라이언트 브라우저에서 하기위해 ssr을 하는 next에서는 js는 x 따라서 csr하기 위해 클라이언트 설정
import React, { useEffect } from 'react';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Site from '@/components/Site';
import Skip from '@/components/Skip';
import Port from '@/components/Port';

import lenis from '@/utils/lenis';
import link from '@/utils/link';


export default function Home() {
  useEffect(() => {
    lenis();
    link();
  },[]);

  return (
    <>
      <Skip/>
      <Header/>
      <main id='main'role="main">
        <Intro/>
        <Skill/>
        <Site/>
        <Port/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
