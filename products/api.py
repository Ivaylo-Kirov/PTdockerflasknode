from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({'products': ['eggs', 'milk', 'juice']})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)