import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-6">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link 
          to="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
} 