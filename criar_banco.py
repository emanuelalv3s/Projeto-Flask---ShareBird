from sharebird import database, app
from sharebird.models import Usuario, Foto

with app.app_context():
    database.create_all()

