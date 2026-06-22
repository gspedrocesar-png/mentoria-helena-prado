# Mentoria Helena Prado

Site simples e responsivo para uma professora particular / mentora de estudos
(profissional autonoma) divulgar suas aulas e receber pedidos de aula
experimental. Projeto desenvolvido para o Estudo de Caso Integrador da
disciplina **Desenvolvimento Front-end (UCB)**.

> A personagem "Helena Prado" e ficticia. Foi inspirada no arquetipo da aluna
> brilhante, organizada e apaixonada por livros, e adaptada para um caso
> permitido pelo roteiro (professor particular). Todo o conteudo e original.

## Integrante

- Pedro Cesar Guimaraes Sousa - Matricula UC26100305

> Observacao: o roteiro preve o trabalho em dupla. Esta entrega esta sendo feita
> individualmente; confirme com a professora se a realizacao solo foi autorizada.

## Descricao do caso escolhido

O caso e a **Mentoria Helena Prado**, uma professora particular que trabalha por
conta propria (profissional autonoma). Ela da aulas individuais (online e
presenciais) e faz mentoria de estudos para alunos do ensino medio e para quem
esta se preparando para o ENEM, na regiao de Brasilia-DF.

## Necessidade identificada

A Helena conseguia alunos apenas por indicacao boca a boca e nao tinha um lugar
unico onde a pessoa pudesse ver **quais materias ela ensina, como funciona o
metodo, valores de referencia e como agendar**. Isso gerava muitas perguntas
repetidas no WhatsApp e fazia ela perder contatos. A necessidade real foi
**reunir essas informacoes em uma pagina clara que leve o visitante a agendar
uma aula experimental.**

## Publico-alvo

Estudantes do ensino medio e seus responsaveis, buscando reforco escolar ou
preparacao para o ENEM. Esse publico precisa encontrar com facilidade: as
materias atendidas, como as aulas funcionam, uma ideia de valor e o contato.

## Objetivo do site

A ação principal esperada do visitante e **agendar uma aula experimental pelo
WhatsApp**. A pagina inteira conduz ate essa acao, com botoes de chamada para
acao no topo, no menu e na secao de contato.

## Processo de desenvolvimento

1. Defini o caso e fiz o **diagnostico** (quem e, qual problema, qual publico,
   qual acao principal).
2. **Planejei o conteudo** em blocos: apresentacao, sobre, materias, como
   funciona, duvidas e contato.
3. Montei a **estrutura HTML semantica** e so depois apliquei o **CSS**.
4. Adicionei a **responsividade** (Bootstrap + media queries) e testei em varias
   larguras.
5. Implementei as **funcionalidades em JavaScript** (FAQ e validacao).
6. Revisei **acessibilidade** (alt, contraste, foco, ordem de titulos).
7. **Publiquei** no GitHub Pages e testei a versao online.

A maior mudanca entre a ideia inicial e a versao final foi enxugar a lista de
materias e mover a chamada para acao para mais perto do topo.

## Principais decisoes do projeto

- **Estrutura HTML:** uso de `header`, `nav`, `main`, `section`, `article` e
  `footer`, com titulos em ordem logica (`h1` -> `h2` -> `h3`), para que a
  marcacao represente o significado do conteudo.
- **Organizacao visual:** estetica "dark academia" (pergaminho, vinho e dourado),
  que combina com o tema de estudos. Titulos com serifa "Fraunces" e corpo em
  "Nunito Sans", com bom contraste.
- **Responsividade:** grid do Bootstrap para os cards de materia + `media
  queries` proprias para hero, passos e formulario. Imagens flexiveis.
- **Acessibilidade:** textos alternativos nas imagens, link "pular para o
  conteudo", foco visivel pelo teclado, `aria-expanded`/`aria-controls` no FAQ e
  `aria-live` na mensagem do formulario.
- **Interatividade:** duas funcoes simples em JavaScript (ver abaixo).

## Funcionalidade em JavaScript

Arquivo `js/script.js`, com duas funcoes simples:

1. **FAQ em acordeao** — na secao "Duvidas frequentes", ao clicar numa pergunta o
   JavaScript mostra ou oculta a resposta, alternando `aria-expanded` e a
   propriedade `hidden`. Escolhida porque organiza muita informacao em pouco
   espaco e melhora a experiencia de uso.
2. **Validacao do formulario** — na secao "Contato", ao enviar, o JavaScript
   confere se nome, WhatsApp e mensagem foram preenchidos. Se faltar algo, marca
   o campo e avisa; se estiver tudo certo, mostra uma mensagem de confirmacao. O
   envio real e impedido com `preventDefault`, pois a disciplina nao usa back-end.

## Uso de Bootstrap

Bootstrap 5 (via CDN) usado de forma introdutoria em:

- **navbar** responsiva (vira menu "hamburguer" no celular);
- **grid** (`row`/`col`) para os cards de materia se reorganizarem por tela;
- **cards** das materias;
- **botoes** e **classes utilitarias** de espacamento.

Foi adequado porque resolve rapidamente a responsividade do menu e da grade,
deixando o CSS proprio livre para cuidar da identidade visual.

## Testes realizados

- **Responsividade:** testada nas ferramentas de inspecao do navegador (modo
  dispositivo) em larguras de celular, tablet e desktop; sem rolagem horizontal.
- **Links:** menu e botoes de WhatsApp/Instagram clicados e verificados.
- **Imagens:** confirmado o carregamento de todas as imagens da pasta `img/`.
- **Acessibilidade basica:** navegacao por teclado (Tab) com foco visivel; FAQ
  abre/fecha pelo teclado; ordem de titulos conferida.
- **JavaScript:** testado o FAQ (abrir/fechar) e o formulario (vazio e
  preenchido).
- **Publicacao:** apos subir no GitHub Pages, conferido o funcionamento online
  (CSS, JS, imagens e caminhos relativos).

## Links

- Link do repositorio: https://github.com/gspedrocesar-png/[nome-do-repositorio]
- Link do site publicado: https://gspedrocesar-png.github.io/[nome-do-repositorio]/

> Troque `[nome-do-repositorio]` pelo nome que voce usar ao criar o repositorio
> (sugestao: `mentoria-helena-prado`).

## Contribuicao

Projeto desenvolvido integralmente por Pedro Cesar Guimaraes Sousa: diagnostico,
estrutura HTML, CSS e identidade visual, JavaScript, acessibilidade,
documentacao e publicacao.

---

**Disciplina:** Desenvolvimento Front-end
**Professora:** Jessica
**Codigo da turma:** GPE01M10634
