import PrivateNavbar from './PrivateNavbar'

const LandingLayout = ({ children }) => {
    return (
      <main className="h-full bg-[#111827] overflow-auto">
        <div className="h-full w-full">
            <PrivateNavbar/>
            {children}
            </div>
      </main>
    );
  };
  
  export default LandingLayout;
  