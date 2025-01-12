from flask import Flask, render_template
from db import SaitDB

app = Flask(__name__)
db = SaitDB()  # Создайте экземпляр вашего класса базы данных

@app.route('/My_sait.html')
def my_sait():
    return render_template('My_sait.html')

@app.route('/api/add_user', methods=['POST'])
def add_user():
    user_id = request.form.get('user_id')  # Получите user_id из запроса
    db.add_user(user_id)  # Добавьте пользователя в базу данных
    return 'User added successfully', 200

if __name__ == '__main__':
    app.run(debug=True)