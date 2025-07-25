import { Link } from "react-router-dom";
export default function login() {
  return (
    <>
    <h1 className="text-4xl font-black">Inicia sesión</h1>
    <p className="text-lg my-5">Inicia sesión para crear un pedido</p>
    <div className="bg-white shadow-md rounded-lg px-5 py-10">
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Tu Email"
            className="w-full mt-2 p-3 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Tu password"
            className="w-full mt-2 p-3 border rounded-md"
          />
        </div>
        <input
          type="submit"
          value="Iniciar sesión"
          className="bg-indigo-600 w-full py-3 text-white uppercase font-bold rounded hover:bg-indigo-800 cursor-pointer transition-colors"
        />
      </form>
    </div>
    <nav className="mt-5">
        <Link to="/auth/registro" className="text-center text-sm text-gray-500">
            ¿No tienes una cuenta? Regístrate
        </Link>
    </nav>
  </>
  )
}
