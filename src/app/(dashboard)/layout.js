import Features from '../(landing)/Features';
import Footer from '../(landing)/Footer';
import PrivateNavbar from './PrivateNavbar'

const LandingLayout = ({ children }) => {
    return (
      <main className="h-full bg-[#111827] overflow-auto">
        <div className="h-full w-full">
            <PrivateNavbar/>
            {children}
            <Footer/>
            </div>
      </main>
    );
  };
  
  export default LandingLayout;
  