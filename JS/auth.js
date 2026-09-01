const formularios = document.querySelectorAll("[data-auth]");

async function lerResposta(resposta) {
  const corpo = await resposta.text();

  if (!corpo.trim()) {
    throw new Error("O servidor não retornou uma resposta. Inicie o servidor do projeto e tente novamente.");
  }

  try {
    return JSON.parse(corpo);
  } catch {
    throw new Error("O servidor retornou uma resposta inválida. Verifique se o servidor do projeto está ativo.");
  }
}

document.querySelectorAll("[data-mostrar-senha]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const campo = document.getElementById(botao.dataset.mostrarSenha);
    const mostrar = campo.type === "password";
    campo.type = mostrar ? "text" : "password";
    botao.classList.toggle("olho-fechado", !mostrar);
    botao.setAttribute("aria-label", mostrar ? "Ocultar senha" : "Mostrar senha");
  });
});

formularios.forEach((formulario) => {
  const mensagem = formulario.querySelector("[data-mensagem]");

  formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    mensagem.textContent = "Processando...";
    mensagem.className = "auth-mensagem";

    const dados = Object.fromEntries(new FormData(formulario));
    const rota = formulario.dataset.auth === "cadastro" ? "/api/cadastro" : "/api/login";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(dados.email || "")) {
      mensagem.textContent = "Digite um e-mail válido, como voce@exemplo.com.";
      mensagem.className = "auth-mensagem auth-mensagem_erro";
      return;
    }

    try {
      const resposta = await fetch(rota, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      const resultado = await lerResposta(resposta);

      if (!resposta.ok) {
        throw new Error(resultado.erro || "Não foi possível concluir a operação.");
      }

      mensagem.textContent = resultado.mensagem;
      mensagem.className = "auth-mensagem auth-mensagem_sucesso";
      formulario.reset();

      if (formulario.dataset.auth === "login") {
        localStorage.setItem("trocaticket_usuario", JSON.stringify(resultado.usuario));
      }

      window.setTimeout(() => {
        window.location.href = formulario.dataset.auth === "cadastro" ? "login.html" : "usuario.html";
      }, 700);
    } catch (erro) {
      mensagem.textContent = erro.message;
      mensagem.className = "auth-mensagem auth-mensagem_erro";
    }
  });
});