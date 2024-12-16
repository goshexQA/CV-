describe('e2end Pokemons', function () {

    it('Успешная авторизация + покупка', function () {
         cy.visit('https://pokemonbattle.ru/');//Заходим на сайт
         cy.get(':nth-child(1) > .auth__input').type ('goshex@mail.ru');//  В поле почта вводим валидную почту
         cy.get('#password').type ('Goshexmague9009');// В поле пароль ввести валидный пароль
         cy.get('.auth__button').click();// Нажать на кнопку "Войти"
        })
    })
describe('Покемоны создание+покеболл+бой', () => {
    it('Битва покемонов АПИ', () => {
      cy.request({
        method: 'POST',
        url: 'https://api.pokemonbattle.ru/v2/pokemons',
        headers: {
          'trainer_token': '7fb5ef8abe2ce2a8dedbac985d429250',
          'content_type': 'application/json',
        },
        Body: {'name': 'Мистеравтотест',
            'photo_id': 144,
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        // Добавьте дополнительные проверки по необходимости
      })
    })
  })