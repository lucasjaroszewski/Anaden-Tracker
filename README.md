# Anaden Tracker
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/lucasjaroszewski/Anaden-Tracker/blob/master/LICENSE) 

## About the project
https://anadentracker.pythonanywhere.com/

Anaden Tracker is a full stack application for web and mobile. It was built to help players keep track of their progress in the famous mobile game *"Another Eden: The Cat Beyond Time and Space"*. In the game, there are currently 126 fishes to catch and to fully complete the achievement you'll need to fish 150 of each. Therefore, the application makes life easier for the player.


## Web layout
![Web 1](https://github.com/lucasjaroszewski/Anaden-Tracker/blob/master/assets/web-1.png)
![Web 2](https://github.com/lucasjaroszewski/Anaden-Tracker/blob/master/assets/web-2.png)

## Technologies
### Back-end
- Django REST framework (Python)
- DataTables plug-in (Javascript)

### Front-end
- HTML
- Boostrap (CSS)
- JQuery (Javascript)

## Deployment
- Back-end: PythonAnyWhere
- Database: SQLite3

## How to execute (Windows)

```bash
# Clone repository
git clone https://github.com/lucasjaroszewski/Anaden-Tracker

# Go inside Anaden-Tracker folder
cd Anaden-Tracker

# Create and activate virtual enviroment
virtualenv myenv
source myenv/Scripts/activate

# Install requirements
pip install -r requirements.txt

# Migrate files
python manage.py makemigrations
python manage.py migrate

# Run server
python manage.py runserver
```

## Author

Lucas Jaroszewski Nunes

https://www.linkedin.com/in/lucasjaroszewski

