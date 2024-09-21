import { useState } from 'react'
import {PhoneCall} from 'lucide-react'
import {Send} from 'lucide-react'
// import CallIcon from '@mui/icons-material/Call';
import Nav from './components/nav'
import Hero from './components/hero'
import Body from './components/body'
import ClientSection from './components/clientSection'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="sticky top-0 z-50 space-x-6 flex justify-center text-neutral-50 items-center py-1 bg-green-500">
            <p className='lg:text-xl md:text-xl sm:text-lg'> <PhoneCall className='inline bg-slate-100  rounded-md p-1 text-violet-800'/> +966 13 805 3331</p>
            <p className='lg:text-xl md:text-xl sm:text-lg'> <Send  className='inline bg-slate-100 p-1 rounded-md text-violet-800 '/> info@hardworksksa.com</p>
        </div>
      <Nav/>
      <Hero/>
      <Body />
      <ClientSection />
      <Footer />
    </>
  )
}

export default App
