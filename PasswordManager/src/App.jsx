import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="display-flex flex-direction-column justify-content-center h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
    <Manager></Manager>
    <Footer></Footer>
    <div className="min-h-[1vh]"></div>
    </div>
    </>
  );
}