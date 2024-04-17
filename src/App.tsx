import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element: <RootLayout/>,
      children:[
        {
          index:true,
          element: <Home/>
        },
        {
          path:'about',
          element: <About/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
