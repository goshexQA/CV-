describe('Авторизация', function () {

    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');//Заходим на сайт
         cy.get('#mail').type ('german@dolnikov.ru');// Выбираем поле мыло и вводим почту
         cy.get('#pass').type ('iLoveqastudio1');// Выбираем поле пароль и вводим пароль
         cy.get('#loginButton').click();// Нажимаем кнопку "Войти"
         cy.get('#messageHeader').should('be.visible');// Видимость для юзеров
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Окошко с успешной авторизацией
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Проверка крестика
     })
 }) 
    it('Проверка логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');// Заходим на сайт 
         cy.get('#forgotEmailButton').click();// Выбираем + нажимаем на кнопку забыли пароль
         cy.get('#mailForgot').type ('123@gmail.com');// Вводим мыло
         cy.get('#restoreEmailButton').click();// Клик "Отправить код"
         cy.get('#messageHeader').should('be.visible');// Видимость для юзеров
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Проверка написания поля Успешно отправили пароль на мыло
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Видимость кнопки
     })

    it('Негативный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');// Заходим на сайт 
         cy.get('#mail').type ('german@dolnikov.ru');// Выбираем поле мыло и вводим почту
         cy.get('#pass').type ('iLoveqastudio111');// Выбираем поле пароль и вводим пароль
         cy.get('#loginButton').click();// Нажимаем кнопку "Войти"
         cy.get('#messageHeader').should('be.visible');// Видимость для юзеров
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Страничка с надписью "Такого логина или пароля нет"
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Видимость кнопки
     })

    it('Негативный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');// Заходим на сайт 
         cy.get('#mail').type ('german@dollnikov.ru');// Выбираем поле мыло и вводим почту
         cy.get('#pass').type ('iLoveqastudio1');// Выбираем поле пароль и вводим пароль
         cy.get('#loginButton').click();// Нажимаем кнопку "Войти"
         cy.get('#messageHeader').should('be.visible');// Видимость для юзеров
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Страничка с надписью "Такого логина или пароля нет"
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Видимость кнопки
     })

    it('Негативный кейс валидации', function () {
         cy.visit('https://login.qa.studio/');// Заходим на сайт 
         cy.get('#mail').type ('germandolnikov.ru');// Выбираем поле мыло и вводим почту
         cy.get('#pass').type ('iLoveqastudio1');// Выбираем поле пароль и вводим пароль
         cy.get('#loginButton').click();// Нажимаем кнопку "Войти"
         cy.get('#messageHeader').should('be.visible');// Видимость для юзеров
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Страничка с надписью "Нужно исправить проблему валидации"
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Видимость кнопки
     })

    it('Строчные буквы в логине', function () {
         cy.visit('https://login.qa.studio/');// Заходим на сайт 
         cy.get('#mail').type ('GerMan@Dolnikov.ru');// Выбираем поле мыло и вводим почту
         cy.get('#pass').type ('iLoveqastudio1');// Выбираем поле пароль и вводим пароль
         cy.get('#loginButton').click();// Нажимаем кнопку "Войти"
         cy.get('#messageHeader').should('be.visible');// Видимость для юзеров
         cy.get('#messageHeader').contains('Успешная авторизация'); // Страничка с надписью "Успешно"
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Видимость кнопки
     })





     // Покемоны
     describe('e2end Pokemons', function () {

        it('Успешная авторизация + покупка', function () {
             cy.visit('https://pokemonbattle.ru/');//Заходим на сайт
             cy.get(':nth-child(1) > .auth__input').type ('USER_LOGIN');//  В поле почта вводим валидную почту
             cy.get('#password').type ('USER_PASSWORD');// В поле пароль ввести валидный пароль
             cy.get('.auth__button').click();// Нажать на кнопку "Войти"
             cy.get('.header__container > .header__id').should('be.visible').click();// Клик на страничку тренера
             cy.get('[href="/shop"]').click();// Клик на смену аватара 
             cy.get(':nth-child(4) > .shop__button').click();// Выбор тренера № 4+ клик покупки 
             cy.get('.pay__main-v2').should('be.visible');// Видимость
             cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type ('42764200018920222');// Ввести валидную карту
             cy.get(':nth-child(1) > .pay_base-input-v2').type ('10/25');// Ввести валидную дату окончания карты
             cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type ('121');// Ввести валидный код CVV
             cy.get('.pay__input-box-last-of > .pay_base-input-v2').type ('IGOR SAMOHVALOV');// Ввести валидную Фамилию и имя
             cy.get('.pay-btn').click();// Нажать купить
         })
     }) 
    