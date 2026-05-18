from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MessageRequest(BaseModel):
    motherName: str
    userName: str
    traits: str
    memory: str


@app.post("/generate")
async def generate_message(data: MessageRequest):

    prompt = f"""
    Escreva uma mensagem divertida e curta para a minha mãe em homenagem ao dia das mães.

    Nome da mãe: {data.motherName}
    Autor: {data.userName}
    Características dela: {data.traits}
    Memória com ela: {data.memory}

    Regras:
    - Máximo 300 caracteres.
    - Não inventar informações.
    - Tom carinhoso e divertido.
    - Português brasileiro.
    - Não adicione informações, escreva apenas a mensagem.
    - Não assine a mensagem com meu nome.
    """

    if not os.getenv("GROQ_API_KEY"):
        return {"message": "Erro: API KEY não carregada"}

    try:
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[{"role": "user", "content": prompt}]
    )

        generated_message = response.choices[0].message.content

    
        return {"message": generated_message}
    
    except Exception as e:
        import traceback
        traceback.print_exc()
        return {"message": f"ERRO REAL: {str(e)}"}
