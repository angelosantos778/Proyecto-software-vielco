# Proyecto/generate_recommendations.py
import openai
import sys

# Asegurarse de que se proporciona la ruta del archivo diff.txt
if len(sys.argv) < 2:
    print("Por favor, proporciona el archivo de diferencias.")
    sys.exit(1)

diff_file = sys.argv[1]
with open(diff_file, "r") as f:
    diff_content = f.read()

# Solicitar recomendaciones a OpenAI
openai.api_key = os.gentev("OPENAI_API_KEY")  # Este debe estar configurado en el entorno de GitHub

response = openai.Completion.create(
    engine="text-davinci-003",
    prompt=f"A continuación se muestra un conjunto de cambios en el código:\n\n{diff_content}\n\nPor favor, proporciona recomendaciones de mejora para estos cambios:",
    max_tokens=150
)

print(response.choices[0].text.strip())
