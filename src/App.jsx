import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <>
      <ChakraProvider>
        <ItemListContainer greeting={"Bienvenidos a mi tienda virtual"} />
        <NavBar />
      </ChakraProvider>

    </>
  )
}

export default App
