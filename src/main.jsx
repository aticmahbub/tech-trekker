import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Main from './layouts/Main.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/blogs',
        element: <Blogs/>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: '/blog/:id',
        element: <Blog/>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path: '/bookmarks',
        element: <Bookmarks/>
      },
    ]
  },

])


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
