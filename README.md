<img align="right" width="280" height="90" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/100658691_788726541657708_6944595524993417216_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=ur5ostpVil4AX9rQhpM&_nc_ht=scontent-waw1-1.xx&oh=ffcee2febe6175cddb293c7851ad1134&oe=5EF55B47">

# Bookcase

## 1. Specyfikacja wymagań
### 1.1. Opis systemu
#### 1.1.1. Nazwa
Nazwa krótka: Bookcase <br>
Nazwa ogólna: Bookcase - możliwość łatwej wymiany, sprzedaży i kupna książek. 

#### 1.1.2. Charakterystyka
Bookcase jest aplikacją umożliwiającą zakup, sprzedaż oraz wymianę nowych bądź używanych książek. Jest to aplikacja mobilna przeznaczona na systemy Android i iOS wykonana przy użyciu frameworku Ionic z wykorzystaniem bazy danych Firebase. 

###  1.2. Specyfikacja

#### 1.2.1 Wymagania Funkcjonalne
<h5> 1.	EKRAN GŁÓWNY - LISTA KSIĄŻEK: </h5>
1.1	wyświetlanie listy książek ze zdjęciami, autorem, tytułem, ew. ceną <br>
1.2	wyświetlanie szczegółów oferty <br>
1.3	dodawanie nowej oferty sprzedaży/wymiany <br>
<h5> 2.	EKRAN LOGOWANIA: </h5>
2.1	możliwość logowania przy pomocy adresu e-mail <br>
2.2	możliwość logowania za pomocą konta Google <br>
2.3	możliwość rejestracji jako nowy użytkownik <br>
2.4	powrót do listy książek <br>
<h5> 3.	EKRAN REJESTRACJI: </h5>
3.1	możliwość zarejestrowania się za pomocą adresu e-mail <br>
3.2	przejście do ekranu logowania <br>
3.3	powrót do listy książek <br>
<h5> 4.	PANEL UŻYTKOWNIKA: </h5>
4.1	zmiana hasła do logowania <br>
4.2	zmiana adresu e-mail <br>
4.3	ustawienie ulubionego miasta <br>
4.4	zmiana podstawowych danych personalnych (imie, nazwisko, numer telefonu) <br>
<h5> 5.	SZCZEGÓŁY OFERTY: </h5>
5.1	wyświetlanie zdjęć <br>
5.2	wyświetlanie tytułu, autora, ceny, stanu książki oraz krótkiego opisu <br>
5.3	możliwość wyświetlenia numeru kontaktowego <br>
5.4	przycisk powrotu do listy książek <br>
5.5	niezalogowani nie mają wyświetlonego nr telefonu i adresu e-mail <br>
<h5> 6.	DODAWANIE OFERTY: </h5>
6.1	dodawanie zdjęć <br>
6.2	dodawanie autora, stanu książki, ceny, tytułu oraz krótkiego opisu <br>
6.3	ustawienie miasta, w którym obowiązuje oferta <br>
6.4	przycisk zatwierdzania nowej oferty <br>


#### 1.2.2 Wymagania Niefunkcjonalne

<h5> 1. NIEZAWODNOŚĆ </h5>
Możliwość korzystania z aplikacji ma być bezustannie dostępna.
<h5> 2. BEZPIECZEŃSTWO </h5>
Poufność i stopień zabezpieczenia danych w aplikacji.
<h5> 3. WYDAJNOŚĆ </h5> 
Aplikacja ma być w stanie obsłużyć wielu użytkowników jednocześnie.
<h5> 4. UŻYTECZNOŚĆ </h5> 
Aplikacja ma spełniać wszystkie wymagania funkcjonalne
<h5> 5. ZROZUMIAŁOŚĆ </h5> 
Aplikacja ma być intuicyjna i przejrzysta dla użytkownika.
<h5> 6. ZGODNOŚĆ </h5> 
Wygląd aplikacji ma być wysoce zbliżony na wszystkich systemach.
<h5> 7. SKALOWALNOŚĆ </h5>  
Aplikacja ma sprawnie działać w warunkach stale rosnącej liczby użytkowników i zwiększającej się objętości przetwarzanych danych.

## 2. Projekt
### 2.1. Architektura systemu
#### 2.1.1. Architektura rozwoju
Aplikacja została napisana w środowisku Visual Studio Code. Jest to aplikacja mobilna przeznaczona na systemy Android, iOS wykonana przy użyciu frameworku IONIC w języku Angular z wykorzystaniem bazy danych Firebase. 
#### 2.1.2. Architektura uruchomieniowa
Aplikację w formie projektu można uruchomić w wieloplatformowym środowisku uruchomieniowym Node.js. Do uruchomienia projektu niezbędne jest połączenie z internetem. Aplikacja docelowo będzię dostępna w AppStore i PlayStore.
## 3. Testy

### 3.1. T1 - Instalacja Aplikacji
#### Cel testu: 
Testowanie poprawnego pobierania oraz instalowania aplikacji Bookcase na urządzeniu mobilnym.
#### Sposób dostępu: 
Widok wywoływany.
#### Scenariusz (kroki testowe):
#### Akcje użytkownika:
* Wyszukanie aplikacji Bookcase w AppStore lub PlayStore.
* Klinkięcie przycisku pobierz.
#### Odpowiedź systemu:
* Urządzenie mobilne pobierze aplikacje.
* Urządzenie mobilne poinformuję nas o zainstalowaniu aplikacji.

### 3.2. T2 - Tworzenie nowego konta użytkownika
#### Cel testu: 
Testowanie poprawnego dodawania nowego użytkownika do bazy danych.
#### Sposób dostępu: 
Widok wywoływany poprzez kliknięcie przycisku zarejestruj.
#### Scenariusz (kroki testowe):
#### Akcje użytkownika:
* Kliknięcie przycisku zarejestruj.
* Uzupełnienie wszytskich pól tekstowych swoimi danymi niezbędnymi do rejestracji. 
* Kliknięcie przycisku zarejestruj. 
#### Odpowiedź systemu:
* Użytkownik zostaje poprawnie dodany do bazy danych. 

### 3.3. T3 - Logowanie się do aplikacji
#### Cel testu: 
Testowanie poprawnego logowania się w aplikacji.
#### Sposób dostępu: 
Widok wywoływany poprzez kliknięcie przycisku zaloguj.
#### Scenariusz (kroki testowe):
#### Akcje użytkownika:
* Kliknięcie przycisku zaloguj.
* Wpisanie w pola tekstowe poprawnego loginu oraz hasła.
* Kliknięcie przycisku zaloguj. 
#### Odpowiedź systemu:
* Użytkownik zostaje poprawnie zalogowany na swoje konto użytkownika.

### 3.4. T4 - Dodawanie nowej pozycji do listy książek
#### Cel testu: 
Testowanie poprawnego dodawania nowej pozycji do listy książek.
#### Sposób dostępu: 
Widok wywoływany poprzez kliknięcie przycisku dodaj oraz zalogowanie się na swoje konto użytkownika.
#### Scenariusz (kroki testowe):
#### Akcje użytkownika:
* Kliknięcie przycisku dodaj.
* Zalogowanie się na swoje konto użytkownika.
* Uzupełnienie wszystkich danych dotyczących nowej pozycji oraz dodanie zdjęcia.
* Kliknięcie przycisku dodaj ofertę.
#### Odpowiedź systemu:
* Pozycja zostaje poprawnie dodana i wyświetla się w liście książek.

### 3.5  T5 - Zmiana hasła
#### Cel testu: 
Testowanie poprawnej zmiany hasła. 
#### Sposób dostępu: 
Widok wywoływany poprzez kliknięcie przycisku z ikoną użytkownika.
#### Scenariusz (kroki testowe):
#### Akcje użytkownika:
* Kliknięcie przcisku z ikoną użytkownika.
* Kliknięcie przycisku zmiana hasła.
* Wpisanie nowego hasła.
* Zatwierdzenie poprzez kliknięcie przycisku zapisz hasło.
#### Odpowiedź systemu:
* Hasło zostało poprawnie zmienione.

### 3.6  T6 - Zmiana adresu e-mail
#### Cel testu: 
Testowanie poprawnej zmiany adresu e-mail. 
#### Sposób dostępu: 
Widok wywoływany poprzez kliknięcie przycisku z ikoną użytkownika.
#### Scenariusz (kroki testowe):
#### Akcje użytkownika:
* Kliknięcie przycisku z ikoną użytkownika.
* Kliknięcie przycisku zmiana email.
* Wpisanie nowego emaila.
* Zatwierdzenie poprzez kliknięcie przycisku zapisz email.
#### Odpowiedź systemu:
* E-mail został poprawnie zmieniony.

### 3.7  T7 - Zmiana danych użytkownika
#### Cel testu: 
Testowanie poprawnej zmiany danych użytkownika. 
#### Sposób dostępu: 
Widok wywoływany poprzez kliknięcie przycisku z ikoną użytkownika.
#### Scenariusz (kroki testowe):
#### Akcje użytkownika:
* Kliknięcie przcisku z ikoną użytkownika.
* Kliknięcie przycisku moje dane.
* Wpisz nowe dane w miejsce starych.
* Zatwierdzenie poprzez kliknięcie przycisku zapisz dane.
#### Odpowiedź systemu:
* Dane użytkownika zostały poprawnie zmienione.

### 3.8  T8 - Dodawanie lub zmiana ulubionego miasta
#### Cel testu: 
Testowanie poprawnego dodania lub zmiany ulubionego miasta. 
#### Sposób dostępu: 
Widok wywoływany poprzez kliknięcie przycisku z ikoną użytkownika.
#### Scenariusz (kroki testowe):
#### Akcje użytkownika:
* Kliknięcie przcisku z ikoną użytkownika.
* Kliknięcie przycisku ulubione miasto.
* Wpisanie nazwy miasta.
* Zatwierdzenie poprzez kliknięcie przycisku zapisz miasto.
#### Odpowiedź systemu:
* Ulubione miasto zostało poprawnie dodane/zmienione.


# 4. Wygląd aplikacji
## Strona Główna:
Będąc na stronie głównej można: przejść do panelu użytkownika, przejść do szczegółów oferty lub dodać nową ofertę.
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/4RubGgD.png">
</p>
<br><br>

## Szczegóły oferty: 
Szczegółowe informacje dotyczące książki oraz dane kontaktowe do jej właściciela.
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/GFcW36l.png">
</p>
<br><br>

## Dodawanie nowej oferty: 
Łatwe i intuicyjne dodawanie nowych ofert.
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/CLGbyrc.png">
</p>
<br><br>

## Logowanie:
Po kliknięciu przycisku z ikoną użytkownika aby dostać się do panelu użytkownika najpierw trzeba się zalogować.
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/lFOEIgk.png">
</p>
<br><br>

## Rejestracja
Jeśli nie mamy konta użytkownika, a nie chcemy korzystać z naszego konta google możemy się zarejestrować.
<p align="center">
</p>
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/azT9CbL.png">
</p>
<br><br>

## Panel użytkownika: 
Będąc w panelu użytkownika można zmienić: adres email, hasło, swoje dane oraz ulubione miasto  
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/Dzj8LLk.png">
</p>
<br><br>

<p align="center">
Zmiana adresu email: 
</p>
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/xRoGwMB.png">
</p>
<br><br>
                                     
<p align="center">
Zmiana hasła: 
</p>
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/x4oUEZK.png">
</p>
<br><br>

<p align="center">
Zmiana danych: 
</p>
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/wqzaZSC.png">
</p>
<br><br>

<p align="center">
Zmiana ulubionego miasta: 
</p>
<p align="center">
  <img width="310" height="550" src="https://i.imgur.com/AI37LnT.png">
</p>
<br><br>

# 5. Warunki licencyjne
## 5.1. Autorzy
1. Martyna Wiloch
2. Kuba Posadzy
3. Michał Koczewski

### 5.2. Licencja
```
Copyright 2020 BookcaseApp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

