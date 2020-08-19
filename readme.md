# Web Components / Material UI Design / StoryBook
Проект с примерами использования [Material UI Web Components](https://github.com/xaota/material).

### Как добавить к себе
> Потребуется какой-нибудь `web-сервер` для статики, например, [Apache](https://www.apachelounge.com/download/)

Склонируйте в корневую папку сервера этот репозиторий и [репозиторий с компонентами](https://github.com/xaota/material).

```bash
git clone https://github.com/xaota/material-kit
git clone https://github.com/xaota/material
```

#### Зависимости
> В корне сервера так же должна быть папка `/highlight` с библиотекой [highlight.js](https://highlightjs.org/) для подсветки примеров использования (блоков с кодом).

При сборке `highlight.js` обязательно выберите `html/xml`, `javascript`, `json` и `css`.

## Как посмотреть StoryBook локально
> [http://localhost/material-kit](http://localhost/material-kit)

Используйте браузер Chrome.

---

### Устройство проекта
```
/pages      - Страницы с данными (описание использования компонент)
/views      - Просто компоненты для отображения чего-либо
/script     - Скрипты. (базовый класс для регистрации компонент)
/style      - Стили.
index.html  - Корневая страница
palette.css - Цветовая палитра (`css-переменные`)
```

### Как добавить страницу описания использования компонента (`/pages`)
продолжение следует...

### Как добавить компонент для отображения (`/views`)
продолжение следует...

#### ROADMAP
- [x] [#1](//github.com/xaota/material-kit/issues/1) Добавить компонент отображения кода импорта веб-компонента из библиотеки
- [ ] [#2](//github.com/xaota/material-kit/issues/2) В компонент отображения страниц (`view-page`) добавить генерацию и отображение содержания (новый компонент `view-summary`)
- [ ] Добавить страницы с описанием цветовой палитры, типографии и гайдлайнов
- [ ] [#3](//github.com/xaota/material-kit/issues/3) Переключение тем (светлая/темная)
- [ ] [#4](//github.com/xaota/material-kit/issues/4) Переключение цветовой палитры оформления компонент
