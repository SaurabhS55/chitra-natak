import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/login/Login'
import HomePage from './pages/HomePage';
function App() {
  const router = createBrowserRouter([
    { path: '/', element:<HomePage/> },
    { path: '/login', element:<Login/>},
  ]);
  return (
    <>
    <RouterProvider router={router}/> 
    </>
  )
}

export default App
