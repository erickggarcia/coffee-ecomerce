# ☕ Coffee Delivery

E-commerce de cafés. O usuário navega por um catálogo de 14 cafés, escolhe as quantidades, monta o carrinho, informa o endereço de entrega e a forma de pagamento, e finaliza o pedido em uma tela de confirmação.

## ✨ Funcionalidades

- [x] Listar o catálogo de cafés com imagem, tags, descrição e preço
- [x] Escolher a quantidade de cada café e adicioná-lo ao carrinho
- [x] Exibir no cabeçalho a quantidade total de itens no carrinho
- [x] Aumentar, diminuir ou remover itens na tela de checkout
- [x] Calcular o total dos itens, o frete e o valor final do pedido
- [x] Preencher o endereço de entrega com validação dos campos
- [x] Escolher a forma de pagamento (crédito, débito ou dinheiro)
- [x] Exibir a tela de pedido confirmado com endereço, previsão de entrega e forma de pagamento
- [x] Persistir o carrinho no `localStorage`, mantendo os itens ao recarregar a página
- [x] Redirecionar para a home ao acessar o checkout com o carrinho vazio

---

## 🛠️ Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build e servidor de desenvolvimento
- [styled-components](https://styled-components.com/) — estilização com temas
- [React Router](https://reactrouter.com/) — navegação entre páginas
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — formulário de endereço e validação
- [Context API](https://react.dev/reference/react/useContext) + [useReducer](https://react.dev/reference/react/useReducer) — estado global do carrinho
- [Immer](https://immerjs.github.io/immer/) — atualizações imutáveis no reducer
- [Phosphor Icons](https://phosphoricons.com/) — ícones
- [ESLint](https://eslint.org/) com `@rocketseat/eslint-config` + [Prettier](https://prettier.io/) — padronização de código

---

## 🏗️ Estrutura

```
src/
├── @types/               # tipagem do tema do styled-components
├── contexts/             # ProductsContext (estado do carrinho)
├── Header/               # cabeçalho com contador do carrinho
├── layouts/
│   └── defaultLayout/    # layout padrão com Header
├── pages/
│   ├── Home/             # catálogo de cafés
│   │   └── components/
│   │       └── Products/ # card de café com seletor de quantidade
│   └── Checkout/         # endereço, pagamento e resumo do pedido
│       └── success/      # tela de pedido confirmado
├── reducers/             # reducer e actions do carrinho
├── styles/               # estilos globais e tema
├── App.tsx
├── Router.tsx
└── main.tsx
```

O carrinho fica centralizado no `ProductsContext`, que usa `useReducer` com Immer. As actions (adicionar ao carrinho, aumentar, diminuir, remover item e esvaziar o carrinho) ficam separadas em `reducers/actions.ts`. A cada mudança, o estado é salvo no `localStorage` e restaurado na inicialização.

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js 18+

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/erickggarcia/coffee-ecomerce.git
cd coffee-ecomerce

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Scripts disponíveis

| Script            | Descrição                                        |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Inicia a aplicação em modo desenvolvimento       |
| `npm run build`   | Faz a checagem de tipos e gera o build           |
| `npm run preview` | Serve o build localmente                         |
| `npm run lint`    | Verifica e corrige o código com ESLint           |

---

## 📌 Páginas

| Rota        | Descrição                                                   |
| ----------- | ----------------------------------------------------------- |
| `/`         | Catálogo de cafés                                           |
| `/checkout` | Endereço de entrega, forma de pagamento e resumo do pedido  |
| `/success`  | Confirmação do pedido                                       |

---

## 👤 Autor

**Erick Garcia** — Backend Developer

[GitHub](https://github.com/erickggarcia)
