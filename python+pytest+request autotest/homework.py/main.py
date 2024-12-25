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
    "name": "Мисисавтотест",
    "photo_id": 1
}
body_changing_name = {
    "pokemon_id": "168688",
    "name": "Мистеравтотест",
    "photo_id": 4
}
body_pokemon_id = {
    "pokemon_id": "168688"
}


# response = requests.post(url = f'{url}/trainers/reg', headers = HEADER, json = Body_registration)

# print(response.text)


'''response_confirmation = requests.post(url = f'{url}/trainers/confirm_email', headers = HEADER, json = body_confirmation)
print(response_confirmation.text)'''

#response_knockout = requests.post(url = f'{url}/pokemons/knockout', headers = HEADER, json = body_pokemon_id)
#print(response_knockout.text)


#response_create = requests.post(url = f'{url}/pokemons', headers = HEADER, json = body_create) 
#print(response_create.json)

'''message = response_create.json()['message']
print(message)'''

#response_pokemons = requests.get(url = f'{url}/pokemons', params = {'trainer_id' : TRAINER_ID, 'name' : 'Мистеравтотест'})
#print(response_pokemons.text) #Получить список покемонов выбранного тренера и выбранного покемона


#response_changing_name = requests.put(url = f'{url}/pokemons', headers = HEADER, json = body_changing_name)
#print(response_changing_name.json)

response_add_pokeball = requests.post(url = f'{url}/trainers/add_pokeball', headers = HEADER, json = body_pokemon_id )
print(response_add_pokeball.text)

