describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//провер цвета кнопки 
         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
         cy.get('#loginButton').click(); // нажать на кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //провер что после авториз вижу текст
         cy.get('#messageHeader').should('be.visible');//тескт виден польз-лю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        })
         it('Неверный пароль и верный логин', function () {
            cy.visit('https://login.qa.studio/'); //зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//провер цвета кнопки 
            cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
            cy.get('#pass').type('iLoveqastudio8');//ввели неверный пароль
            cy.get('#loginButton').click(); // нажать на кнопку войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //провер что после авториз вижу текст
            cy.get('#messageHeader').should('be.visible');//тескт виден польз-лю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        })

        it('Верный пароль и неверный логин', function () {
            cy.visit('https://login.qa.studio/'); //зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//провер цвета кнопки 
            cy.get('#mail').type('Reran@dolnikov.ru'); //ввели неверный логин
            cy.get('#pass').type('iLoveqastudio8');//ввели верный пароль
            cy.get('#loginButton').click(); // нажать на кнопку войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //провер что после авториз вижу текст
            cy.get('#messageHeader').should('be.visible');//тескт виден польз-лю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        })
        
        it('Проверка логина на @', function () {
            cy.visit('https://login.qa.studio/'); //зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//провер цвета кнопки 
            cy.get('#mail').type('germandolnikov.ru'); //ввела логин без собачки
            cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
            cy.get('#loginButton').click(); // нажать на кнопку войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //провер что после авториз вижу текст
            cy.get('#messageHeader').should('be.visible');//тескт виден польз-лю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        })

        it('Прокерка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/'); //зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//провер цвета кнопки 
            cy.get('#forgotEmailButton').click(); // нажать на кнопку восстановить пароль
            cy.get('#mailForgot').type('german@dolnikov.ru'); //ввела почту для восстановл
            cy.get('#restoreEmailButton').click();// нажать отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //провер что пароль отправлен
            cy.get('#messageHeader').should('be.visible');//тескт виден польз-лю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        })
        
        it('Верный пароль и верный логин', function () {
            cy.visit('https://login.qa.studio/'); //зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//провер цвета кнопки 
            cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин
            cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
            cy.get('#loginButton').click(); // нажать на кнопку войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); //провер что после авториз вижу текст
            cy.get('#messageHeader').should('be.visible');//тескт виден польз-лю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
           })
 })
 