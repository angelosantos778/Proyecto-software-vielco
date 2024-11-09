import openai
import os
import sys

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_summary(diff_text):
    prompt = f"Summarize the following changes in an HTML file:\n{diff_text}"
    
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=100
    )
    
    return response.choices[0].text.strip()

if __name__ == "__main__":
    with open(sys.argv[1], 'r') as f:
        diff_text = f.read()
    summary = generate_summary(diff_text)
    print(summary)
