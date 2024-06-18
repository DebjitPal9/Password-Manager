import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="display-flex flex-direction-column justify-content-center h-full w-full bg-gradient-to-br from-purple-600 to-slate-900">
    <Manager></Manager>
    <Footer></Footer>
    <div className="min-h-[1vh]"></div>
    </div>
    </>
  );
}