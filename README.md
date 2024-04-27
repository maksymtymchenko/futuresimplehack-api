# Future Perfect

Future Perfect - це платформа для вивчення англійської мови, яка допомагає вам досягти майбутнього ідеального результату в оволодінні мовою.

## Огляд проекту

Future Perfect складається з двох основних частин: фронтенду та бекенду. Фронтенд розроблений з використанням React та MUI, а бекенд з Node.js, Express та MongoDB. Проект розгорнуто за допомогою Vercel (фронтенд) та Render (бекенд).

- [Демо](https://futuresimplehack-ui.vercel.app/auth)

- [UI GitHub Repository](https://github.com/maksymtymchenko/futuresimplehack-ui/tree/master)
- [API GitHub Repository](https://github.com/maksymtymchenko/futuresimplehack-api/tree/main)

## Інструкції щодо запуску

Для запуску проекту вам потрібно виконати наступну команду:
```bash
npm run start (use for PROD env)
npm run dev (use for DEV and STG env)
```


## API Doc for [**https://futuresimplehack-api.onrender.com/**](https://futuresimplehack-api.onrender.com/)

### Endpoints:

**_Sentences:_**

- **DELETE: /api/sentences/:id**

- **UPDATE: /api/sentences/:id**

**Req.body:**

**{**

**\_id": "662503e353869d56e925233a",** 

**"sentence": "Sentence 222222",** 

**"options": \[** 

**{ "id": 1, "option": "option 11111", "correct": true, "\_id": "662503e353869d56e925233b" },** 

**{ "id": 2, "option": "option 22222", "correct": false, "\_id": "662503e353869d56e925233c" },** 

**{ "id": 3, "option": "option 33333", "correct": false, "\_id": "662503e353869d56e925233d" }** 

**],** 

**"url": "test url" }**

- **GET all: /api/sentences**

- **GET one: /api/sentences/:id**

**Res:** 

**{** 

**"\_id": "662503e353869d56e925233a",** 

**"sentence": "Sentence 2",** 

**"options": \[** 

**{ "id": 1, "option": "option 1", "correct": true, "\_id": "662503e353869d56e925233b" },** 

**{ "id": 2, "option": "option 2", "correct": false, "\_id": "662503e353869d56e925233c" },** 

**{ "id": 3, "option": "option 3", "correct": false, "\_id": "662503e353869d56e925233d" }**

**],** 

**"url": "test url",** 

**"\_\_v": 0**

**}**

- **POST: /api/sentences (url field is optional)**

**Req.body:** 

**{** 

**"sentence": "sentence 4",** 

**"options": \[** 

**{ "id": 1, "option": "option 1", "correct": false },** 

**{ "id": 2, "option": "option 2", "correct": true },** 

**{ "id": 3, "option": "option 3", "correct": false } ],** 

**"url": "url"** 

**}**

**_Dictionaries:_**

- **GET all: /api/dictionaries**

- **GET one: /api/dictionaries/:id**

**Res:**

**{** 

**"\_id": "66253ad2d5645b4d873adb0d",**

**"originalWord": "hello",** 

**"translatedWord": "привіт",** 

**"\_\_v": 0** 

**}**

- **DELETE: /api/dictionaries/:id**

- **UPDATE: /api/dictionaries/:id**

- **POST: /api/dictionaries/:id**

**Req.body:** 

**{** 

**"originalWord": "It's me"** 

**}**

**(Send english word (original word). It will be auto translated on our backend and saved to the DB like in this example: "originalWord": "hello", "translatedWord": "привіт"**

**_Achievements:_**

- **GET all: /api/achievements**

- **GET one: /api/achievements/:id**

**Res:**

**{** 

**"finishedLessons": 1,** 

**"learntWords": 20,** 

**"finishedProgram": 5,** 

**"spentHours": 7,** 

**"lastMark": 80,** 

**"averageMark": 6,** 

**"\_id": "66261c4a7991dbd1656fac90",** 

**"\_\_v": 0** 

**}**

- **DELETE: /api/achievements/:id**

- **UPDATE: /api/achievements/:id**

- **POST: /api/achievements/:id**

- **Req.body:** 

**{** 

**"finishedLessons": 1,** 

**"learntWords": 20,** 

**"finishedProgram": 5,** 

**"spentHours": 7,** 

**"lastMark": 80,** 

**"averageMark": 6** 

**}**
