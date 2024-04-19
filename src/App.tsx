import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout'
import DarkModeProvider from './context/DarkModeContext'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

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
        },
        {
          path:'contact',
          element: <Contact/>
        },
        {
          path:'projects',
          element: <Projects/>
        }
      ]
    }
  ])
  return <DarkModeProvider><RouterProvider router={router}/></DarkModeProvider>
}

export default App
