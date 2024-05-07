import "@/styles/globals.css";
import Navbar from "./Navbar";
import { SessionProvider } from 'next-auth/react'


const App = ({ Component, pageProps: { session, ...pageProps } }) => (
  
  <SessionProvider session={session}>
    <Navbar/>
    <Component {...pageProps} />
  </SessionProvider>
)

export default App;

