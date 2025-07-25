import { Link } from "react-router-dom";
export default function registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p className="text-lg my-5">Crea tu cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-lg px-5 py-10">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className="w-full mt-2 p-3 border rounded-md"
            />
          </div>

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

          <div className="mb-4">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-bold"
            >
              Confirmar Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              placeholder="Confirmar password"
              className="w-full mt-2 p-3 border rounded-md"
            />
          </div>
          <input
            type="submit"
            value="Crear cuenta"
            className="bg-indigo-600 w-full py-3 text-white uppercase font-bold rounded hover:bg-indigo-800 cursor-pointer transition-colors"
          />
        </form>
      </div>
      <nav className="mt-5">
        <Link to="/auth/login" className="text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  );
}
