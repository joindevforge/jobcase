import '@/styles/globals.css'
import '../public/Founders-Grotesk/stylesheet.css'
import '../public/xcond/stylesheet.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return (
    <>
     <Header/>
     <div className='mt-[56px]'>
     <Component {...pageProps} />
     </div>
     {/* <Footer/> */}
    </>
  )
}
