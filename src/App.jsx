import React from 'react'
import Header from './components/header'
import PrincipalNews from './components/principalNews'
import News from './components/news'
import TopNews from './components/topNews'
import Footer from './components/footer'

export default function App() {
  return (
    <div>
      <Header/>
      <div className='md:flex'>
      <PrincipalNews/>
      <News/>
      </div>
      <TopNews/>
      <Footer/>
    </div>
  )
}
