import requests
import pytest


url = 'https://api.pokemonbattle.ru/v2'

TOKEN = '778a6367433bc0c61be20110002b8535'

HEADER = {'Content-type' : 'application/json', 'trainer_token' : TOKEN}

TRAINER_ID = '11661'

Body_registration = {
    "trainer_token": TOKEN,
    "email": "goshex12@mail.ru",
    "password": "Iloveqa1121"
}
body_confirmation = {
    "trainer_token": TOKEN
}
body_create = {
    "name": "Бульбазавр",
    "photo_id": 1
}
body_changing_name = {
    "pokemon_id": "12331",
    "name": "Бульбазавр",
    "photo_id": 1
}

def test_status_code():
    response = requests.get(url = f'{url}/pokemons', params = {'trainer_id' : TRAINER_ID})
    assert response.status_code == 200


def test_part_of_response():
    response_get = requests.get(url = f'{url}/pokemons', params = {'trainer_id' : TRAINER_ID})
    assert response_get.json()['data'][0]['name'] == 'Мистеравтотест'


@pytest.mark.parametrize('key, value', [('name', 'Мистеравтотест'),('trainer_id', TRAINER_ID),('id', '160154')])
def test_parametrize(key, value):
     response_parametrize = requests.get(url = f'{url}/pokemons', params = {'trainer_id' : TRAINER_ID})
     assert response_parametrize.json()["data"][0][key] == value