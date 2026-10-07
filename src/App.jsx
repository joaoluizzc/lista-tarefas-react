import { useState } from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Tarefas from './pages/Tarefas';
import DetalheTarefa from './pages/DetalheTarefa';
import Sobre from './pages/Sobre';
import NaoEncontrada from './pages/NaoEncontrada';

function App() {
  // O estado fica no App para não ser perdido ao trocar de página
  const [tarefas, setTarefas] = useState([]);

  function adicionar(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto: texto }]);
  }

  function remover(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio total={tarefas.length} />} />
        <Route path="tarefas" element={
          <Tarefas tarefas={tarefas} onAdicionar={adicionar} onRemover={remover} />
        } />
        <Route path="tarefas/:id" element={
          <DetalheTarefa tarefas={tarefas} onRemover={remover} />
        } />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;
