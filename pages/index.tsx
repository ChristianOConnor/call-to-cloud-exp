import type { NextPage } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Middle from '../components/Middle';

const Home: NextPage = () => {
  return (
    <><main className='d-flex flex-column min-vh-100'>
      <Header />
      <br></br>
      <br></br>
      <Middle />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
