import Main from "./Main";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <div className='min-h-screen p-10 space-y-5 bg-slate-50 text-slate-700 font-quicksand'>
      <Main />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
