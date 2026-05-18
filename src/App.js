import './styles/style.scss';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import Contacts from './pages/Contacts';
import ProjectDetails from './components/ProjectDetails/ProjectDetails.jsx';
import Preloader from './components/base/Preloader';
import ScrollToTop from './utils/scrollToTop';

function App() {
        const [openModal, setOpenModal] = useState({ state: false, project: null });
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
                const timer = setTimeout(() => {
                        setIsLoading(false);
                }, 700);

                return () => clearTimeout(timer);
        }, []);

        return (
                <>
                        {isLoading ? (
                                <Preloader className={isLoading ? '' : 'done'} />
                        ) : (
                                <div className='wrapper landing-page'>
                                        <ScrollToTop />
                                        <Header />

                                        <Home />

                                        <section id='projects' className='landing-anchor'>
                                                <Projects openModal={openModal} setOpenModal={setOpenModal} />
                                        </section>

                                        <section id='reviews' className='landing-anchor'>
                                                <Reviews />
                                        </section>

                                        <section id='contacts' className='landing-anchor'>
                                                <Contacts />
                                        </section>

                                        <Footer />

                                        {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
                                </div>
                        )}
                </>
        );
}

export default App;
