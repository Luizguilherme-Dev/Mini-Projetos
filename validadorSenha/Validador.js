function validarSenha(senha) {
  if (senha.length < 6) return "Senha muito curta!";

  if (!/\d/.test(senha)) return "A senha precisa conter números!";

  return "Senha válida!";
}

console.log(validarSenha("abc123"));