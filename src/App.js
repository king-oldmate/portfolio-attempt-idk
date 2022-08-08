import Main from "./Main";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import FreelanceProcess from "./FreelanceProcess";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className='p-10 space-y-5 '>
      <Main />
      <Portfolio />
      <FreelanceProcess />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
