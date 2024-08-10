import React, { useRef } from 'react'
import './decoracion.css'

import github from '../imagenes/github.png'



export default function Decoracion() {

  const contButton = useRef(null);
  const button = useRef(null);

  const decoration = document.querySelectorAll('.decoracion');

  const buttonOn = ()=>{
    if (!button.current.classList.contains('hide-deco-desactive')) {
      button.current.classList.add('hide-deco-desactive');

      decoration.forEach(element => {
        element.style.display = 'none'
      });

    }else if(button.current.classList.contains('hide-deco-desactive')){
      button.current.classList.remove('hide-deco-desactive');
      
      decoration.forEach(element => {
        element.style.display = 'block'
      });
    }
  }

  return (
    <div>
      <div className='decoracion  astro'></div>
      <div className='decoracion  planet'></div>
      <div className='decoracion  estrellas estrella-1'></div>
      <div className='decoracion  estrellas estrella-2'></div>
      <div className='decoracion  estrellas estrella-3'></div>
      <div className='decoracion  estrellas estrella-4'></div>
      <div className='decoracion  asteroides asteroide-1'></div>
      <div className='decoracion  asteroides asteroide-2'></div>
      <div className='decoracion  conjunto-estrellitas estrellita-1'></div>
      <div className='decoracion  conjunto-estrellitas estrellita-2'></div>
      <div className='decoracion  conjunto-estrellitas estrellita-3'></div>
      <div className='decoracion  conjunto-estrellitas estrellita-4'></div>
      
      <div className='cont-author'>
        <a className='author' href='https://github.com/eric31t30' target='_blank'>eric31t30</a>
        <img src={ github } alt="" className='github-icon'/>
      </div>

      <div className='hide-deco' ref={contButton} onClick={buttonOn}>
        <span className='button-hide-deco'></span>
        <span className='button-hide' ref={button}></span>
      </div>
    </div>
  )
}
