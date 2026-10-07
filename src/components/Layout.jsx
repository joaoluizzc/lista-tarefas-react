import { NavLink, Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Lista de Tarefas</NavLink>
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/" end>Início</NavLink>
            <NavLink className="nav-link" to="/tarefas">Tarefas</NavLink>
            <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
          </div>
        </div>
      </nav>

      <main className="container mt-5">
        {/* O Outlet exibe a página da rota atual */}
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
