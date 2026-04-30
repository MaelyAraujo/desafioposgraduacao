const usuarios = [
  {
    id: 1,
    nome: 'João',
    email: 'joao@email.com',
    senha: '123456',
    expirado: false
  },
  {
    id: 2,
    nome: 'Maria',
    email: 'maria@email.com',
    senha: 'abc123',
    expirado: true
  }
]

function fazerLogin(email, senha) {
  const usuario = usuarios.find(u => u.email === email)

  if (!usuario) {
    return 'Usuário não encontrado'
  }

  if (usuario.expirado) {
    return 'Renove suas credenciais'
  }

  if (usuario.senha !== senha) {
    return 'Senha incorreta'
  }

  return 'Login realizado com sucesso'
}

// TESTES
console.log(fazerLogin('joao@email.com', '123456'))
console.log(fazerLogin('maria@email.com', 'abc123'))
console.log(fazerLogin('naoexiste@email.com', '123'))
console.log(fazerLogin('joao@email.com', 'senhaErrada'))