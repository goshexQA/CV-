import requests

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

# response = requests.post(url = f'{url}/trainers/reg', headers = HEADER, json = Body_registration)

# print(response.text)


'''response_confirmation = requests.post(url = f'{url}/trainers/confirm_email', headers = HEADER, json = body_confirmation)
print(response_confirmation.text)'''


'''response_create = requests.post(url = f'{url}/pokemons', headers = HEADER, json = body_create) 
print(response_create.text)'''

'''message = response_create.json()['message']
print(message)'''

def test_status_code():
    response = requests.get(url = f'{url}/pokemons', params = {'trainer_id' : TRAINER_ID})
    assert response.status_code == 200
#response_changing_name = requests.put(url = f'{url}/pokemons', headers = HEADER, json = body_changing_name)
#print(response_changing_name.json)








