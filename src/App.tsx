import {Routes, Route} from "react-router";
import ChatPage from "./pages/chat_page.tsx";
import './global.scss'

function App() {

  return (
      <Routes>
          <Route path="*" element={<ChatPage/>} />
      </Routes>
  )
}

export default App
