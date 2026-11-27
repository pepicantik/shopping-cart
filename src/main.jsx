import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductsPage from './Pages/products.jsx'
import DetailProductPage from './Pages/detailProduct.jsx'
import ProtectedRoute from './components/Layouts/ProtectedRoute.jsx'
import DashboardLayout from './Pages/Dashboard/dashboard.jsx'
import Profile from './Pages/Dashboard/profile.jsx'
import Settings from './Pages/Dashboard/settings.jsx'
import { Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" replace />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
  },
  {
    path: "/product/:id", //parameer dinamis (useParams)
    element: <ProtectedRoute>
              <DetailProductPage />
             </ProtectedRoute>
  },
  {
    path: "/Dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="profile" replace />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "settings",
        element: <Settings />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
