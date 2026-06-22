/* ============================================================
   DOCES DA BIA — JavaScript
   Duas funcionalidades simples (e que voce consegue explicar):
   1) FAQ em acordeao  -> mostrar/ocultar respostas
   2) Validacao do formulario -> conferir campos antes de "enviar"
   ============================================================ */

/* Espera a pagina carregar antes de mexer nos elementos. */
document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1) FAQ EM ACORDEAO ---------- */
  // Pega todos os botoes de pergunta.
  const perguntas = document.querySelectorAll(".faq-pergunta");

  perguntas.forEach(function (botao) {
    botao.addEventListener("click", function () {
      // A resposta ligada a este botao (pelo id em aria-controls).
      const resposta = document.getElementById(botao.getAttribute("aria-controls"));

      // Esta aberta agora? aria-expanded guarda "true" ou "false".
      const estaAberta = botao.getAttribute("aria-expanded") === "true";

      // Inverte o estado: se estava aberta, fecha; se estava fechada, abre.
      botao.setAttribute("aria-expanded", String(!estaAberta));
      resposta.hidden = estaAberta; // hidden=true esconde; hidden=false mostra
    });
  });

  /* ---------- 2) VALIDACAO DO FORMULARIO ---------- */
  const form = document.getElementById("form-contato");
  const aviso = document.getElementById("form-aviso");

  form.addEventListener("submit", function (evento) {
    // Impede o envio real (a disciplina nao pede back-end).
    evento.preventDefault();

    // Campos obrigatorios.
    const campos = [
      document.getElementById("nome"),
      document.getElementById("whatsapp"),
      document.getElementById("mensagem"),
    ];

    let tudoPreenchido = true;

    campos.forEach(function (campo) {
      // .trim() tira espacos em branco do inicio e do fim.
      if (campo.value.trim() === "") {
        campo.classList.add("erro");   // pinta a borda de vermelho
        tudoPreenchido = false;
      } else {
        campo.classList.remove("erro");
      }
    });

    // Mostra a mensagem de acordo com o resultado.
    if (tudoPreenchido) {
      aviso.textContent = "Pedido registrado! A Helena vai te responder pelo WhatsApp. 🎉";
      aviso.className = "form-aviso ok";
      form.reset(); // limpa os campos
    } else {
      aviso.textContent = "Por favor, preencha todos os campos antes de enviar.";
      aviso.className = "form-aviso ruim";
    }
  });
});
