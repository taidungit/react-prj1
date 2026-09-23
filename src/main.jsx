import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './pages/login.jsx';
import './styles/global.css'
import HomePage from './pages/home.jsx';
import ErrorPage from './pages/error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Khi có lỗi xảy ra, React Router sẽ render component này
    children: [
      {
        index: true, // Đây là Index Route: Khi ở path "/", nó sẽ tự động render component này vào Outlet của App
        element: <HomePage /> // Hoặc component chứa Todo list của bạn
      },
  {
    path:"/users",
    element:<h1>Users page</h1>
  },
  {
    path:"/products",
    element:<h1>Products page</h1>
  }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path:"/register",
    element:<h1>Register page</h1>
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
