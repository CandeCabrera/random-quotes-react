import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'
import NextBtn from './components/NextBtn'

function App() {

  const indexQuotes = Math.floor(Math.random()* quotes.length)
  const [index, setIndex] = useState(indexQuotes)
  const nextQuote = ()=>{
    setIndex(Math.floor(Math.random()* quotes.length))
  }
  
  const colors = ['#fdcae1', '#fdfd96', '#77dd77', '#84b6f4', '#d8f8e1','#fcb7af', '#fcb7af', '#ffe4e1', '#bc98f3',  '#d8f79a', '#d8f79a', '#f6d1de', '#a6fab6', '#fadc9b' ]
  const indexColor = Math.floor(Math.random()* colors.length)



  return (
    <div className="App" style={{background: colors[indexColor]}}>

      <div className='box'>

        <QuoteBox
        quote={quotes[index].quote}
        author={quotes[index].author}
        color={colors[indexColor]}/>
        
        <NextBtn
        goNext={nextQuote}
        color={colors[indexColor]}/>

      </div>
      
     
    </div>
  )
}

export default App
