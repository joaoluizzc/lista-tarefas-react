import { useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Tarefas from './pages/Tarefas';
import DetalheTarefa from './pages/DetalheTarefa';
import Sobre from './pages/Sobre';
import NaoEncontrada from './pages/NaoEncontrada';
import Login from './pages/Login';

function App() {
  // O estado fica no App para não ser perdido ao trocar de página
  const [tarefas, setTarefas] = useState([]);
  const [autenticado, setAutenticado] = useState(
    () => sessionStorage.getItem('autenticado') === 'true'
  );

  function entrar() {
    sessionStorage.setItem('autenticado', 'true');
    setAutenticado(true);
  }

  function sair() {
    sessionStorage.removeItem('autenticado');
    setAutenticado(false);
  }

  function adicionar(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto: texto }]);
  }

  function remover(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <Routes>
      <Route path="/" element={<Layout autenticado={autenticado} onSair={sair} />}>
        <Route index element={<Inicio total={tarefas.length} />} />
        <Route path="login" element={
          autenticado ? <Navigate to="/tarefas" replace /> : <Login onEntrar={entrar} />
        } />
        {/* As páginas de tarefas só podem ser acessadas após o login. */}
        <Route element={autenticado ? <Outlet /> : <Navigate to="/login" replace />}>
          <Route path="tarefas" element={
            <Tarefas tarefas={tarefas} onAdicionar={adicionar} onRemover={remover} />
          } />
          <Route path="tarefas/:id" element={
            <DetalheTarefa tarefas={tarefas} onRemover={remover} />
          } />
        </Route>
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;
