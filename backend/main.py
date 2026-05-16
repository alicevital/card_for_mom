from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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

    if len(data.memory) > 200:
        return {"message": "Texto muito longo. Reduza a memória."}

    if len(data.traits) > 100:
        return {"message": "Características muito longas."}
    
    message = f"""
    Escreva uma mensagem curta e emocional para o Dia das Mães.

    Use APENAS as informações abaixo:

    Nome da mãe: {data.motherName}
    Autor: {data.userName}
    Características: {data.traits}
    Memória com a mãe: {data.memory}

    Regras:
    - Máximo 300 caracteres
    - Não inventar informações
    - Escrever em português
    """

    #simulação
    generated = f"{data.motherName}, você é {data.traits}. Nunca esqueço {data.memory}. Com amor, {data.userName}"

    return {"message": generated}