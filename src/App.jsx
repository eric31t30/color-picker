import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import {SketchPicker} from 'react-color'
import Decoracion from './components/decoracion';

import TextoEstrellas from './imagenes/texto-estrellas.png';
import Flecha from './imagenes/flecha.png'
import circuloDeco from './imagenes/circulo-deco.png'


function App() {

  const [currentColor, setCurrentColor] = useState("#010C0C");
  const [currentColorGradient, setCurrentColorGradient] = useState('')
  const [directionPicked, setDirectionPicked] = useState('top')
  const [colorPicked, setColorPicked] = useState('1st')
  const [typeOfBackground, setTypeOfBackground] = useState('currentColor')

  const [firstPaletteColor, setFirstPaletteColor] = useState('blue')
  const [secondPaletteColor, setSecondPaletteColor] = useState('red')
  const [thirdPaletteColor, setThirdPaletteColor] = useState('green')

  const contGradient = useRef()
  
  const firstPalette = useRef()
  const secondPalette = useRef()
  const thirdPalette = useRef()

  const handleOnChange = (color) =>{
    setCurrentColor(color.hex);
  }

  const appStyle = {
    background: typeOfBackground,
  }

  const contGradientActive = () =>{
    if(!contGradient.current.classList.contains('cont-gradient-active')){
      contGradient.current.classList.add('cont-gradient-active');
    
    }else if(contGradient.current.classList.contains('cont-gradient-active')){
      contGradient.current.classList.remove('cont-gradient-active');
    }
  }

  const selectedPalette = document.querySelector('.color-select');

  
  


  const onGradient = () =>{
    setCurrentColorGradient(`linear-gradient(to ${directionPicked}, ${firstPaletteColor} 0%, ${secondPaletteColor} 50%, ${thirdPaletteColor} 100%)`);
  }

  
  function getBackgroundColor(ref) {
    const element = ref.current;
    const style = window.getComputedStyle(element);
    const backgroundColor = style.getPropertyValue("background-color");
    
    return backgroundColor;
  }

  useEffect(() => {
    setTypeOfBackground(currentColorGradient)
  }, [currentColorGradient])
  
  
  useEffect(() => {
  
    if (selectedPalette) {
      selectedPalette.style.background = `${currentColor}`;
    }
    
    setTypeOfBackground(currentColor)
    
    setFirstPaletteColor(getBackgroundColor(firstPalette));
    setSecondPaletteColor(getBackgroundColor(secondPalette));
    setThirdPaletteColor(getBackgroundColor(thirdPalette));
  }, [currentColor])
  
  const cardsColor = ['#D0021B', '#0ce2e9', '#5bf643', '#e3f02f', '#d92ff0', '#f02f76']
  
  return (
    <div className="App" style={appStyle} id='hola'>
      <Decoracion />
        <h1>Color Picker <img src={TextoEstrellas} className='deco-title'/></h1>
        
        <div className='container'>
          <div className='cont-picker'>
            <SketchPicker 
              className='picker'
              color={currentColor}
              onChangeComplete={handleOnChange}
              presetColors={cardsColor}
              disableAlpha
            />
          </div>
          <div className='container-gradient' ref={contGradient}>
              <div className='cont-opt-gradient'>
              
                <div className='gradient-directions'>
                  <span className={`arrows-direction arrow-top ${directionPicked === 'top' ? 'circle-select' : ''}`} onClick={e => setDirectionPicked('top')}>top</span>
                  <span className={`arrows-direction arrow-right ${directionPicked === 'right' ? 'circle-select' : ''}`} onClick={e => setDirectionPicked('right')}>right</span>
                  <span className={`arrows-direction arrow-bottom ${directionPicked === 'bottom' ? 'circle-select' : ''}`} onClick={e => setDirectionPicked('bottom')}>bottom</span>
                  <span className={`arrows-direction arrow-left ${directionPicked === 'left' ? 'circle-select' : ''}`} onClick={e => setDirectionPicked('left')}>left</span>
                  <img className='center' src={circuloDeco} />
                </div>
                
                <div className='cont-color-options'>
                  <div className='colors-options'>
                    
                    <div className={`colors color-1 ${colorPicked === '1st' ? 'color-select' : ''}`} 
                    onClick={e => setColorPicked('1st')} ref={firstPalette}>1st</div>
                    
                    <div className={`colors color-2 ${colorPicked === '2nd' ? 'color-select' : ''}`} 
                    onClick={e => setColorPicked('2nd')} ref={secondPalette}>2nd</div>
                    
                    <div className={`colors color-3 ${colorPicked === '3rd' ? 'color-select' : ''}`} 
                    onClick={e => setColorPicked('3rd')} ref={thirdPalette}>3rd</div>
                  
                  </div>
                  <div className='button-gradient' onClick={onGradient}>Gradiente</div>
                </div>
              
              </div>
              
              <span className='button' onClick={contGradientActive}>
                <img src={ Flecha } className='arrow'/>
              </span>
          </div>
        </div>
      </div>
  );
}

export default App;
