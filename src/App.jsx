import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'
import NextBtn from './components/NextBtn'
import Twitter from './components/Twitter'

function App() {

  const indexQuotes = Math.floor(Math.random()* quotes.length)
  const [index, setIndex] = useState(indexQuotes)
  const nextQuote = ()=>{
    setIndex(Math.floor(Math.random()* quotes.length))
  }
  const colors = ['#f3adcc', '#e8e87d', '#77dd77', '#97bdec', '#77e8d0','#fcb7af', '#c5a8f0',  '#c8f383', '#f4f465', '#98e6a7', '#fadc9b', '#fa9b9b', '#88e3c6', '#88bce3', '#9988e3', '#c088e3', '#e79eeb', '#e388a6' ]

  const indexColor = Math.floor(Math.random()* colors.length)



  return (
    <div className="App" style={{background: colors[indexColor]}}>

      <div className='box'>

        <QuoteBox
        quote={quotes[index].quote}
        author={quotes[index].author}
        color={colors[indexColor]}/>
        
        <div className="btnContainer">
          <NextBtn
          goNext={nextQuote}
          color={colors[indexColor]}/>
  
          <Twitter
          quote={quotes[index].quote}
          author={quotes[index].author}
          color={colors[indexColor]}/>
        </div>
        

      </div>
      
     
    </div>
  )
}

export default App
