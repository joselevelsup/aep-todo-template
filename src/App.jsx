import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Todo from "./pages/todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
