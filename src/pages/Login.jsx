import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login({ onEntrar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function entrar(evento) {
    evento.preventDefault();

    // Credenciais de exemplo para esta atividade de front-end.
    if (email.trim() !== 'aluno@exemplo.com' || senha !== '123456') {
      setErro('E-mail ou senha incorretos.');
      return;
    }

    onEntrar();
    navigate('/tarefas', { replace: true });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-4">
        <h1 className="mb-4">Login</h1>
        <form onSubmit={entrar}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              className="form-control"
              autoComplete="username"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              className="form-control"
              autoComplete="current-password"
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
              required
            />
          </div>
          {erro && <p className="alert alert-danger" role="alert">{erro}</p>}
          <button className="btn btn-primary" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
