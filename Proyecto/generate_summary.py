import openai
import os
import sys

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_summary(diff_text):
    # Cambia el prompt para que sea más general y aplicable a cualquier cambio
    prompt = f"Summarize the following changes in the 'Proyecto' directory:\n{diff_text}"

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=100
    )

    return response.choices[0].text.strip()

if __name__ == "__main__":
    with open(sys.argv[1], 'r') as f:
        diff_text = f.read()
        
    # Verifica si diff_text no está vacío antes de llamar a la API
    if diff_text.strip():
        summary = generate_summary(diff_text)
        print(summary)
    else:
        print("No changes to summarize.")
