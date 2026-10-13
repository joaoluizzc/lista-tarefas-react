# Lista de tarefas com login

Atividade de Frameworks Frontend usando React, React Router, Vite e Bootstrap.

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal.

## Login de teste

- E-mail: `aluno@exemplo.com`
- Senha: `123456`

O formulário exige os dois campos e mostra uma mensagem quando as credenciais
estão incorretas. Após entrar, o usuário é direcionado à lista de tarefas.
As rotas `/tarefas` e `/tarefas/:id` exigem login, inclusive quando acessadas
diretamente pela URL. O botão **Sair** encerra a sessão.

O login é uma simulação para a atividade: as credenciais são verificadas no
front-end, sem servidor ou banco de dados. A sessão é mantida no `sessionStorage`
ao atualizar a página, até sair ou fechar a aba. As tarefas continuam em memória,
como no código original, e são perdidas ao atualizar a página.

## Verificações

```bash
npm run lint
npm run build
```
