<div align="center">

# 🎟️ TrocaTicket

<strong>Descubra, compre e revenda ingressos para eventos — tudo em um só lugar.</strong>

<p>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</p>

<img alt="Licença MIT" src="https://img.shields.io/badge/Licença-MIT-2f855a?style=flat-square" />

</div>

---

## 📖 Sobre o projeto

**TrocaTicket** é uma plataforma web de estudo focada em **descoberta, compra e revenda de ingressos** para eventos. A proposta é conectar o público, produtores de eventos e revendedores em um único ambiente digital, simplificando a jornada desde encontrar um evento até garantir (ou repassar) o acesso a ele.

O projeto foi construído com **HTML, CSS e JavaScript puros** no front-end, com um pequeno servidor em **Node.js** responsável por servir os arquivos estáticos da aplicação.

## ✨ Funcionalidades

- 🏠 **Página inicial** com apresentação da plataforma.
- 🎫 **Catálogo de eventos** (`eventos.html`) para navegar pelas opções disponíveis.
- 👤 **Cadastro e login** de usuários (`cadastro.html`, `login.html`).
- 🙋 **Perfil e área do usuário** (`perfil.html`, `usuario.html`).
- 💬 **Página de contato** e **sobre a plataforma** (`contato.html`, `sobre.html`).
- 🛒 **Fluxo de vendas/revenda de ingressos** (`vendas.html`).
- 📄 **Termos de uso** da plataforma (`termos-uso.html`).

## 🛠️ Tecnologias utilizadas

- **Front-end:** HTML5, CSS3 e JavaScript puro (Vanilla JS).
- **Back-end:** Node.js, servindo os arquivos estáticos da aplicação (`servidor-estatico.js`).

## 📂 Estrutura do projeto

```text
InterLink/
├── CSS/                    # Estilos da aplicação
├── JS/                     # Scripts do front-end
├── dados/                  # Dados usados pela aplicação
├── Documentos/             # Documentação do projeto
├── Documentos_Base/        # Materiais de referência
├── index.html              # Página inicial
├── eventos.html            # Catálogo de eventos
├── login.html               # Autenticação
├── cadastro.html             # Criação de conta
├── perfil.html                # Perfil do usuário
├── usuario.html                 # Área do usuário
├── vendas.html                    # Revenda de ingressos
├── contato.html                     # Contato
├── sobre.html                        # Sobre a plataforma
├── termos-uso.html                     # Termos de uso
├── servidor-estatico.js                  # Servidor Node.js (arquivos estáticos)
└── LICENSE
```

## 💻 Como rodar o projeto localmente

É necessário ter o [Node.js](https://nodejs.org) instalado.

```bash
# Clone o repositório
git clone https://github.com/GehMay/InterLink.git
cd InterLink

# Inicie o servidor
node servidor-estatico.js
```

Depois, abra o navegador no endereço indicado pelo servidor para acessar a aplicação.

## 👩‍💻 Autoria

Desenvolvido por **Geovanna Tamagusko** ([@GehMay](https://github.com/GehMay)) como projeto de estudo em desenvolvimento web.

## 📜 Licença

Este projeto está licenciado sob a licença **MIT** — veja o arquivo [LICENSE](LICENSE) para mais detalhes.
