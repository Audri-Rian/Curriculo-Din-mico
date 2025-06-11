# Currículo Dinâmico

Um currículo dinâmico e responsivo que pode ser facilmente personalizado e exportado para PDF.

## Características

- Design responsivo e moderno
- Exportação para PDF
- Dados estruturados para SEO (JSON-LD)
- Fácil personalização através do arquivo de configuração
- Compatível com leitores de tela
- Otimizado para impressão

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- html2pdf.js para exportação

## Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/Audri-Rian/Curriculo-Din-mico.git
```

2. Personalize o arquivo `src/config/config.js` com suas informações

3. Abra o arquivo `src/pages/index.html` em seu navegador

4. Para exportar para PDF, clique no botão "Exportar para PDF" no canto superior direito

## Estrutura do Projeto

```
curriculo/
├── src/
│   ├── pages/
│   │   └── index.html
│   ├── js/
│   │   └── pdf-export.js
│   └── config/
│       └── config.js
├── .gitignore
└── README.md
```

## Personalização

Todas as informações do currículo são gerenciadas através do arquivo `src/config/config.js`. Você pode editar:

- Informações pessoais
- Experiência profissional
- Educação
- Habilidades
- Projetos
- Certificações

## Contribuição

Sinta-se à vontade para contribuir com o projeto através de Pull Requests.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 