
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import NavBar from "./components/navBar/navBar"
import Contacto from './components/contacto/contacto';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartComponentContext from './context/cartContext';
import Carrito from './components/carrito/carrito';
import NotFound from './components/notFound/notFound';


function App() {

  return (
    <>
      <CartComponentContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={'/'} element={<ItemListContainer />}></Route>
            <Route path={"/productos"} element={<ItemListContainer />}></Route>
            <Route path={'/productos/:categoria'} element={<ItemListContainer />}></Route>
            <Route path={'/item/:id'} element={<ItemDetailContainer />}></Route>
            <Route path={'/contacto'} element={<Contacto />}></Route>
            <Route path={'/carrito'} element={<Carrito/>}></Route>
            <Route path={'*'} element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter >
      </CartComponentContext>
    </>
  )
}

export default App
