import requests
import json

payloads = json.dumps({
    "age": 20,
    "sex": "F"
})

headers = {
    "Content-Type": "application/json"  # Ensure the API knows it's JSON
}

response = requests.put("http://127.0.0.1:8000/predict", data=payloads, headers=headers)

try:
    print(response.json())  # Parse JSON response
except requests.exceptions.JSONDecodeError:
    print("Invalid JSON response:", response.text)  # Print raw response if JSON parsing fails
