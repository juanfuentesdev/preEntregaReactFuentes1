import logo from './/assets/ktienda.png';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (

      <div className='container-app'>

        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a mi Tienda"} />
      </div>

  )
}

export default App



// import { Icon } from '@iconify/react'
