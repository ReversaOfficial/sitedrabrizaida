import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HomeSections } from './components/HomeSections';
import { Footer } from './components/Footer';
import { InternalPage } from './components/InternalPage';
import './styles.css';

function currentPath(){return window.location.pathname.replace(/\/$/,'')||'/';}

export default function App(){
  const [path,setPath]=useState(currentPath());
  useEffect(()=>{const onPop=()=>setPath(currentPath());window.addEventListener('popstate',onPop);return()=>window.removeEventListener('popstate',onPop)},[]);
  useEffect(()=>window.scrollTo({top:0,behavior:'auto'}),[path]);
  const go=(to:string)=>{window.history.pushState({},'',to);window.dispatchEvent(new PopStateEvent('popstate'));};
  const booking=()=>path==='/'?window.location.hash='contato':go('/contato');
  const home=()=>go('/');
  return <><Header onBooking={booking}/>{path==='/'?<main><Hero onBooking={booking} onAbout={()=>window.location.hash='sobre'}/><HomeSections/></main>:<InternalPage path={path} onHome={home}/>}<Footer onHome={home}/></>;
}