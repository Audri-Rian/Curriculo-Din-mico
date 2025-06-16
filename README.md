# Currículo Dinâmico Adaptável

Um sistema inteligente para criar currículos personalizados e adaptados para cada vaga específica, utilizando análise de palavras-chave e requisitos da vaga para otimizar sua candidatura.

## 🎯 Propósito

Este projeto foi desenvolvido para ajudar profissionais a criarem currículos dinâmicos que se adaptam automaticamente às necessidades específicas de cada vaga. Ao invés de ter um currículo estático, você pode:

- Analisar a descrição da vaga usando IAs para identificar palavras-chave e requisitos
- Adaptar automaticamente seu currículo para destacar as habilidades e experiências mais relevantes
- Criar múltiplas versões do seu currículo otimizadas para diferentes oportunidades
- Manter um banco de dados centralizado com todas suas experiências e habilidades

## ✨ Características

- **Adaptação Dinâmica**: Personalização automática baseada na análise da vaga
- **Análise de Palavras-chave**: Identificação de termos importantes na descrição da vaga
- **Exportação para PDF**: Geração rápida de currículos otimizados
- **SEO Otimizado**: Dados estruturados (JSON-LD) para melhor visibilidade
- **Design Responsivo**: Visual profissional em qualquer dispositivo
- **Acessibilidade**: Compatível com leitores de tela
- **Fácil Personalização**: Interface simples para atualização de informações

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- html2pdf.js
- Integração com APIs de IA para análise de texto

## 📋 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/Audri-Rian/Curriculo-Din-mico.git
```

2. Configure seu perfil base no arquivo `src/config/config.js`:
   - Adicione todas suas experiências, habilidades e projetos
   - Mantenha um histórico completo de suas realizações

3. Para cada vaga:
   - Cole a descrição da vaga no sistema
   - Utilize a análise de IA para identificar palavras-chave e requisitos
   - O sistema sugerirá as melhores experiências e habilidades para destacar
   - Personalize o currículo conforme necessário

4. Exporte o currículo otimizado em PDF

## 📁 Estrutura do Projeto

```
curriculo/
├── src/
│   ├── pages/
│   │   └── index.html      # Template do currículo
│   ├── js/
│   │   └── pdf-export.js   # Lógica de exportação
│   └── config/
│       └── config.js       # Banco de dados do seu perfil
├── .gitignore
└── README.md
```

## 🔧 Personalização

O arquivo `src/config/config.js` é seu banco de dados central, onde você mantém:

- Informações pessoais
- Experiência profissional completa
- Educação
- Habilidades técnicas e soft skills
- Projetos relevantes
- Idiomas
- Certificações

Para cada vaga, o sistema:
1. Analisa a descrição da vaga
2. Identifica palavras-chave e requisitos
3. Sugere quais informações destacar
4. Gera um currículo otimizado

## 🤝 Contribuição

Contribuições são bem-vindas! Algumas ideias:
- Novos templates de design
- Integração com outras APIs de análise de texto
- Melhorias na lógica de adaptação
- Novos formatos de exportação

## Prompt para o GPT:
Você é um assistente especialista em criação de currículos otimizados para sistemas de seleção automática (ATS) e revisores humanos.  
Seu objetivo é:

1. **Extrair** da descrição da vaga:
   - Palavras‑chave (termos técnicos, soft skills, ferramentas, frameworks, metodologias).
   - Requisitos funcionais (responsabilidades, entregáveis, metas).
   - Qualificações desejadas (experiência mínima, certificações, idiomas).

2. **Atualizar APENAS** o meu arquivo `config.js` **com base** nas informações extraídas da vaga:
   - `perfil.descricao`: incorpore verbetes‑chave da vaga.
   - `perfil.skills`: adicione skills relevantes que ainda não estejam listadas.
   - `experiencia`: ajuste os `responsabilidades` de funções similares ou sugira novos snippets alinhados.
   - `projetos` e `certificacoes`: inclua menções a tecnologias ou métodos específicos.

3. **Manter** toda a estrutura original do `config.js` intacta:
   - Não remova campos existentes que não conflitem com os novos dados.
   - Apenas atualize, acrescente ou ajuste valores conforme a vaga.

4. **Formatar** a saída:
   - Retorne **APENAS** o código completo do `config.js`, pronto para uso, **sem** explicações adicionais.

---

### Meu `config.js` inicial  
\`\`\`js
<<SEU_CONFIG_AQUI>>
\`\`\`

### Descrição da vaga  
\`\`\`
<<TEXTO_DA_VAGA_AQUI>>
\`\`\`




## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 