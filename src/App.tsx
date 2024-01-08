import {Routes} from "./routes";
import {GlobalStyle} from "./styles/global"

import {ToastContainer} from "react-toastify"

import "react-toastify/dist/ReactToastify.css"


const App = () => {
  return (
    <>
      <Routes/>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer/>
    </>
  )
}

export default App
