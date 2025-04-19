# Next.js - TechPoint E-commerce

Este projeto é uma plataforma de e-commerce desenvolvida com **Next.js**. O objetivo principal é disponibilizar um ambiente moderno, intuitivo e responsivo para que os usuários possam visualizar e adquirir acessórios eletrônicos com facilidade. A plataforma oferece aos usuários a capacidade de:

- Visualizar banners promocionais e destaques de produtos;
- Navegar por carrosséis de produtos;
- Filtrar e explorar produtos na loja;
- Acessar páginas individuais de produtos;
- Adicionar e gerenciar itens no carrinho de compras.

## **Funcionalidades**

### **Página Inicial**

- Apresenta banners promocionais com ofertas especiais.
- Exibe carrosséis com os principais produtos da loja.
- Mostra informações como pagamento seguro, entrega rápida e suporte ao cliente.

### **Catálogo de Produtos**

- Lista todos os produtos disponíveis para compra.
- Permite que o usuário filtre produtos por categorias, preços ou outros critérios.

### **Página de Produto**

- Apresenta os detalhes de um produto específico.
- Exibe informações como imagens, preço, descrição e avaliações (se implementado).
- Oferece a opção de adicionar o item ao carrinho.

### **Carrinho de Compras**

- Exibe todos os produtos adicionados pelo usuário.
- Permite alterar a quantidade ou remover produtos.
- Exibe o valor total da compra e direciona para finalização (checkout).


## **Estrutura do Projeto**

- **/app/pages/**: Contém as rotas do projeto, como index (home), produtos, carrinho e detalhes de produto.
- **/app/components/**: Componentes reutilizáveis de UI, como carrosséis, cards de produto, header e footer.
- **/app/utils/**: Funções utilitárias e auxiliares do projeto.
- **/app/data/** (se presente): Dados mockados ou estáticos para simulação de produtos.
- **/public/**: Imagens, ícones e outros arquivos públicos.
- **next.config.js**: Configurações do Next.js.
- **package.json**: Arquivo de dependências e scripts do projeto.

## **Como Rodar o Projeto**

### **1. Pré-requisitos**

Certifique-se de que o **Node.js** esteja instalado corretamente em seu sistema. Você pode verificar com:

```bash
node -v
```

Você também precisará do **npm** (instalado junto com o Node.js) ou **yarn** para gerenciar as dependências.

### **2. Instalação das Dependências**

Usando npm:

```bash
npm install
```

Ou usando yarn:

```bash
yarn install
```

### **3. Configurações Adicionais**

- Verifique se todas as imagens e produtos estão devidamente adicionados em `/public`.
- Ajuste qualquer URL de API ou recurso externo conforme o ambiente de desenvolvimento.

### **4. Execução do Projeto**

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em:

```
http://localhost:3000
```

## **Tecnologias Utilizadas**

- **[Next.js](https://nextjs.org/)**: Framework React para aplicações web com renderização híbrida (SSR e SSG).
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework utilitário para estilos rápidos e responsivos.
- **[Bootstrap Icons](https://icons.getbootstrap.com/)**: Ícones vetoriais para uso direto em HTML/CSS.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript com tipagem estática opcional.

## **Autor**

Este projeto foi desenvolvido por **Lucas Santos Silva**, Desenvolvedor Full Stack, graduado pela **Escola Técnica do Estado de São Paulo (ETEC)** nos cursos de **Informática (Suporte)** e **Informática para Internet**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bylucasss/)

## **Licença**

Este projeto está licenciado sob a [**MIT License**](./LICENSE).
