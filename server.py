from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import os
from datetime import datetime


app = Flask(__name__)

# Configuração de upload de arquivos #
UPLOAD_FOLDER = 'static/uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def home():
    current_year = datetime.now().year

    return render_template('index.html', year=current_year)


@app.route('/create_card', methods=['POST'])
def create_card():
    name = request.form['name']
    title = request.form['title']
    linkedin = request.form['linkedin_url']
    github = request.form['github_url']
    facebook = request.form['facebook_url']
    instagram = request.form['instagram_url']
    twitter = request.form['twitter_url']
    photo = request.files['photo']

    photo_filename = secure_filename(photo.filename)
    photo.save(os.path.join(app.config['UPLOAD_FOLDER'], photo_filename))

    year = datetime.now().year

    print('enviado')

    return render_template('card.html', 
                           name=name, title=title, linkedin=linkedin, github=github, photo=photo_filename, year=year
                           , facebook=facebook, instagram=instagram, twitter=twitter)


def run():
    app.run(debug=True)
