## LOVE U MOM

Projeto desenvolvido durante minha participação na primeira edição do Hackathon do Servidor dos programadores.

### Tema: Dia das Mães

## O projeto:

Uma plataforma web que utiliza inteligência artificial para criar cartões personalizados de Dia das Mães. O usuário descreve a mãe, lembranças, características, escolhe o background, escolhe um avatar personalizado opcionalmente para representar sua mãe e a IA faz uma mensagem linda para a mãe com a descrição do usuário, juntando tudo isso o cartão poderá ser salvo em pdf para ser enviado para a mamãe.

Link do canva com os assets do projeto: 
[https://canva.link/9yo8c4kff35gu4i](https://canva.link/9yo8c4kff35gu4i)

## Tecnologias:

- Frontend: HTML | CSS | JavaScript
- Design: Canva
- Backend: FastAPI


## Funcionalidades:

- Formulário com informações personalizadas sobre a mãe.

- Escolha de background do cartão.

- Sistema de avatares pré-definidos opcionais para representação visual da mãe

- Geração de mensagem com IA: Baseada nos dados fornecidos pelo usuário.

- Preview em tempo real, atualização dinâmica do nome e autor e visualização do cartão final.

- Exportação: Download do cartão em PDF.


## Etapas de criação: 

1 Etapa:
- Definição das tecnologias utilizadas no projeto, configuração inicial e busca por assets.

2 Etapa:

- Criação do repositório remoto.

3 Etapa:
- Inicio da criação das telas da aplicação.

4 Etapa: 
- Foi decidido criar avatares pré-definidos para o usuário escolher qual se parece mais com a mãe e adicionar como decoração no cartão.

6 Etapa:
- Validações para próximos passos da criação do cartão, tamanho de caracteres, texto adequado e etc.

7 Etapa:
- Integração da biblioteca da openAI e Adição do backend para gerenciar as validações e a mensagem enviada pela openAI.

8 Etapa:
- Melhoria do frontend com fonte, cores e responsividade.

## Como Rodar o Projeto:

###  1. Clonar o repositório:

```bash
git clone https://github.com/alicevital/card_for_mom.git

cd card_for_mom
```

### 2. Entre na pasta do Backend:

```bash
cd backend
```

### 3. Crie e ative o ambiente virtual: 

```bash
python -m venv venv

venv\Scripts\activate
```

### 4. Instale as dependências:

```bash
pip install -r requirements.txt
```

### 5. Crie um arquivo .env e adicione uma api key de IA:
Obs: Siga o exemplo da .env.sample para a chave ficar correta.

```bash
touch .env

GEMINI_API_KEY=sua_chave_aqui
```

### 6. Rode o Servidor e entre na url:

```bash
uvicorn main:app --reload

http://127.0.0.1:8000
```

### 7. Frontend:

Abra o arquivo em um navegador:

```bash
frontend/src/project/index.html
```
