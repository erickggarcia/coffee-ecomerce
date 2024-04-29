import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globals"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { ProductsContextProvider } from "./contexts/productsContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ProductsContextProvider>
            <Router />
            <GlobalStyle />
          </ProductsContextProvider>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
