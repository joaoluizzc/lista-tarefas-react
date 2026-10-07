import { Link } from 'react-router';

function ItemTarefa({ tarefa, onRemover }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to={`/tarefas/${tarefa.id}`}>{tarefa.texto}</Link>
      <button className="btn btn-danger btn-sm"
        onClick={() => onRemover(tarefa.id)}>
        X
      </button>
    </li>
  );
}

export default ItemTarefa;
