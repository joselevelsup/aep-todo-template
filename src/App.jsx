import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import Index from "./pages/index";
import Todo from "./pages/todo";

//The query client is an instance of a client that will contain any cache and configuration that we use through out the app.
const client = new QueryClient();

//This function is going to set up our routes for the Single Page Application
function App() {
  return (
    <QueryClientProvider client={client}>
      {/*The query client provider will make the client available to us whenever we use useQuery in any of our routes*/}
      <BrowserRouter>
        {/* BrowserRouter stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.*/}
        <Routes>
          {/* Routes will match a set of child routes from the current location.*/}
          {/* Route will allow us to couple the path to a component we want*/}
          <Route path="/" element={<Index />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
