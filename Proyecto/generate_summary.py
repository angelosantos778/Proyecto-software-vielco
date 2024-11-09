import openai
import os
import sys

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_summary(diff_text):
    prompt = f"Summarize the following changes in the 'Proyecto' directory:\n{diff_text}"
    
    # Cambia a ChatCompletion.create y usa el modelo "gpt-3.5-turbo" o superior
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that summarizes code changes."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=100
    )
    
    return response['choices'][0]['message']['content'].strip()

if __name__ == "__main__":
    with open(sys.argv[1], 'r') as f:
        diff_text = f.read()
    
    if diff_text.strip():
        summary = generate_summary(diff_text)
        print(summary)
    else:
        print("No changes to summarize.")
