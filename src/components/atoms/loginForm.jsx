import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-flatfind-gray">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-flatfind-dark">Iniciar Sesión</h2>
        <p className="text-flatfind-dark">Accede a tu cuenta de FlatFind</p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-8">
        <div>
          <input type="email" name="email" id="email" required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-flatfind-primary focus:border-flatfind-primary focus:z-10 sm:text-sm"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange} />
        </div>
        <div>
          <input type="password" name="password" id="password" required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-flatfind-primary focus:border-flatfind-primary focus:z-10 sm:text-sm"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange} />
        </div>
        <div>
          <button type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-flatfind-primary hover:bg-flatfind-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flatfind-primary">
            Iniciar Sesión
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <p className="text-flatfind-dark text-sm">
          ¿Aún no tienes una cuenta? <Link to="/register" className="text-flatfind-primary hover:text-flatfind-accent">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
