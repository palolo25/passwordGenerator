from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/home')
def home():
    return render_template('/home/index.html')

@app.route('/home/password', methods=['POST'])
def generate_password():
    lower_case = "abcdefghijklmnopqrstuvwxyz"
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    number = "0123456789"
    symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/~`"

    use_for = lower_case + upper_case + number + symbols

    length_for_pass = int(request.form['length'])

    password = "".join(random.sample(use_for, length_for_pass))

    return render_template('/home/password.html', password=password)

if __name__ == '__main__':
    app.run(debug=True)
