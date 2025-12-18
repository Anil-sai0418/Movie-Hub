import AppRoutes from "./Routes/AppRoute";
import './App.css'
import Nav from "./chunks/Nav";
import Footer from "./chunks/Footer";

function App() {


  return (
    <div className='w-full h-screen bg-gray-100   '>

      <AppRoutes />
      <Footer/>
    </div>
  )
}

export default App
