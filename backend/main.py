from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

app = FastAPI()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


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

print("API KEY:", os.getenv("GEMINI_API_KEY"))


@app.post("/generate")
async def generate_message(data: MessageRequest):
    try:
        prompt = f"""
        Escreva uma mensagem curta e emocional para o Dia das Mães.

        Nome da mãe: {data.motherName}
        Autor: {data.userName}
        Características: {data.traits}
        Memória com a mãe: {data.memory}

        Regras:
        - máximo 300 caracteres
        - não inventar informações
        - escrever em português
        """

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )

        return {
            "message": response.text
        }

    except Exception as e:
        print("ERRO:", e)
        return {
            "message": "Erro ao gerar mensagem!!!!!!!!!!!!"
        }