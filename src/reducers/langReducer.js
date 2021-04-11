import logo from "../images/IMG_2158.webp";
import tilda from "../images/logo_tilda_black.svg";
import logoLight from "../images/logoLight.svg";
import logoDark from "../images/logoDark.svg";

//PORTFOLIO
import l1 from "../images/laiswood/l1.webp";
import l2 from "../images/laiswood/l2.webp";
import l3 from "../images/laiswood/l3.webp";
import l4 from "../images/laiswood/l4.webp";
import l5 from "../images/laiswood/laiswood.webp";

import creditCalc from "../images/credit.png";

import dat1 from "../images/dattebayo/d1.webp";
import dat2 from "../images/dattebayo/d2.webp";
import dat3 from "../images/dattebayo/d3.webp";
import dat4 from "../images/dattebayo/d4.webp";
import dat5 from "../images/dattebayo/d5.webp";
import dat from "../images/dattebayo/dattebayo.webp";

import sochi1 from "../images/sochi/s1.webp";
import sochi2 from "../images/sochi/s2.webp";
import sochi3 from "../images/sochi/s3.webp";
import sochi4 from "../images/sochi/s4.webp";

import cyber from "../images/cyber/cyber.webp";
import cyber1 from "../images/cyber/ca1.webp";
import cyber2 from "../images/cyber/ca2.webp";
import cyber3 from "../images/cyber/ca3.webp";
import cyber4 from "../images/cyber/ca4.webp";

import got from "../images/got/got2.webp";
import got1 from "../images/got/got3.webp";

import timber from "../images/timber/timber.webp";
import tim1 from "../images/timber/tim1.webp";
import tim2 from "../images/timber/tim2.webp";
import tim3 from "../images/timber/tim3.webp";
import tim4 from "../images/timber/tim4.webp";
import tim5 from "../images/timber/tim5.webp";
import tim6 from "../images/timber/tim6.webp";
import tim7 from "../images/timber/tim7.webp";
import tim8 from "../images/timber/tim8.webp";
import tim9 from "../images/timber/tim9.webp";

import ameli from "../images/ameli/ameli.webp";
import a1 from "../images/ameli/a1.webp";
import a2 from "../images/ameli/a2.webp";
import a3 from "../images/ameli/a3.webp";

import w1 from "../images/wildberries/w1.webp";
import w2 from "../images/wildberries/w2.webp";

import cap1 from "../images/cappers/cap1.webp";
import cap2 from "../images/cappers/cap2.webp";
import cap3 from "../images/cappers/cap3.webp";
import cap4 from "../images/cappers/cap4.webp";

import covid from "../images/demo/covid/covid.png";

const initialState = {
  lang: "RU",
  textRu: {
    dashbord: {
      head: {
        subTitle:
          "Привет! Меня зовут Евгений. Я фронтенд разработчик. Добро пожаловать на мой сайт.",
        logoDark,
        logoLight,
        links: {
          git: "https://github.com/Kalmbik61",
          inst: "https://www.instagram.com/kalmbik61",
        },
      },
      navLinks: [
        {
          id: 1,
          link: "Обо мне",
          url: "/",
          icon: "people",
        },
        {
          id: 2,
          link: "Портфолио",
          icon: "developer",
          url: "/portfolio",
        },
        { id: 3, link: "Услуги и цены", icon: "euro", url: "/service" },
        { id: 4, link: "Резюме", icon: "note", url: "/resume" },
        {
          id: 5,
          link: "Контакты",
          icon: "contacts",
          url: "/contacts",
        },
        {
          id: 6,
          link: "Live Demo",
          icon: "developer",
          url: "/demoPage",
        },
      ],
    },
    about: {
      head: {
        title: "Евгений Переверзев",
        subTitle: "Frontend Developer",
        text: `Я Web разработчик, который пециализируется на фронтенде. Начал осваивать Web-разработку в январе 2020 года.
         В данный момент подрабатываю на фрилансе, помогаю другим людям реализовывать их идеи.
        Хотите чтобы я помог Вам с вашим проектом? Посетите мое портфолио, онлайн резюме и свяжитесь со мной удобным для Вас способом.`,
        logo,
        btns: {
          portfolioBtn: "Портфолио",
          resumeBtn: "Резюме",
        },
      },
      skillsBlock: {
        title: "Что я могу",
        subTitle: `Web разработка для меня как глоток свежего воздуха. Это "хобби" перешло в такой инструмент, с помощью 
        которого я могу вносить свой вклад в реализацию Ваших идей и мыслей, быть независимым и уверенным в себе гражданином.`,
        skills: [
          {
            id: 1,
            text: `Написание JavaScript кода без использования библиотек и фремворков. 
            Часто попадаются проекты, в которых необходимо писать именно в таком виде.`,
            title: `Vanilla JavaScript`,
            faIcon: `fa-3x fa-js-square`,
            iconStyle: {
              color: "#dbb300",
            },
          },
          {
            id: 2,
            text: `Стандартный набор для всех Web разработчиков. Реализую полностью отзычивый и адаптивный интерфейс. 
            Без "пустых" тэгов для добавления пространства и ненужных css стилей.`,
            title: `HTML/CSS`,
            faIcon: `fa-3x fa-3x fa-html5`,
            iconStyle: {
              color: "#bc0000",
            },
            img: false,
          },
          {
            id: 3,
            text: `Я использую пакетный менеджер npm для создания своих проектов и добавления нужных мне библиотек. 
            А для контроля разработки пользуюсь git.`,
            title: `Git/npm`,
            faIcon: `fa-3x fa-3x fa-github`,
            iconStyle: {
              color: "black",
            },
            img: false,
          },
          {
            id: 4,
            text: `Начал использовать данную библиотеку для работы не так давно, однако крайне сильно она мне понравилась.
            Этот сайт написан целиком и полностью на React Js. С использованием Redux, Reactstrap, MaterialUi и ReactRouter.`,
            title: `React Js`,
            faIcon: `fa-3x fa-3x fa-react`,
            iconStyle: {
              color: "#41E0FD",
            },
            img: false,
          },
          {
            id: 5,
            text: `Использую в своей работе данную библиотеку для создания адаптивных страниц с валидным кодом. 
            А если проект на React - использую Reactstrap.`,
            title: `Bootstrap`,
            faIcon: `fa-3x fa-3x fa-bootstrap`,
            iconStyle: {
              color: "#7952B3",
            },
            img: false,
          },
          {
            id: 6,
            text: `Хороший опыт создания адаптивных сайтов, лендингов, интернет-магазинов на данном конструкторе. 
            С полностью рабочей CRM системой, формами обратной связи, каталогами товаров, различной анимацией и тд.
            Tilda является одним из лучших конструкторов, с помощью которого Вы можете быстро запустить свой бизнес
            в сети.`,
            title: `Tilda publishing ~`,
            iconStyle: {
              width: 42,
              height: 42,
            },
            img: tilda,
          },
        ],
        serviceBtn: "Услуги и цены",
      },
      reviewsBlock: {
        title: "Немного моих проектов",
        portfolioBtn: "Смотреть портфолио",
      },
    },
    portfolio: {
      head: {
        title: "Портфолио",
        subTitle: `Добро пожаловать в мое онлайн портфолио.В данную рубрику попадают все проекты, в которых я принимал 
        участие(в т.ч. учебные). Хотите чтобы я помог Вам в реализации вашего проекта ?`,
        portfolioBtn: "Напишите мне",
      },
      arr: [
        {
          imgs: [
            {
              img: creditCalc,
              id: 15345,
            },
          ],
          id: 134535,
          title: "Credit Calculator",
          text: [
            `Разработка кредитного калькулятора на Vanilla JS;`,
            `Сверстан с помощью Bulma.`,
          ],
          link: "",
        },
        {
          imgs: [
            {
              img: l1,
              id: Math.floor(Math.random() * 100) + Math.random(),
            },
            {
              img: l2,
              id: Math.floor(Math.random() * 1020) + Math.random(),
            },
            {
              img: l3,
              id: Math.floor(Math.random() * 1030) + Math.random(),
            },
            {
              img: l4,
              id: Math.floor(Math.random() * 1010) + Math.random(),
            },
            {
              img: l5,
              id: Math.floor(Math.random() * 1010) + Math.random(),
            },
          ],
          id: 2,
          title: "Carpentry Workshop Laiswood",
          text: [
            `Был доработан сайт для столярной мастерсой, который незавершил
           бывший разработчик;`,
            `Добавлены различные новые эелменты;`,
            `Создана новая галерея;`,
            `Добавлена 3D карусель для главного экранаю`,
          ],
          link: "https://www.laiswood-workshop.ru",
        },
        {
          imgs: [
            {
              img: dat,
              id: Math.floor(Math.random() * 1010) + Math.random(),
            },
            {
              img: dat1,
              id: Math.floor(Math.random() * 100) + Math.random(),
            },
            {
              img: dat2,
              id: Math.floor(Math.random() * 1020) + Math.random(),
            },
            {
              img: dat3,
              id: Math.floor(Math.random() * 1030) + Math.random(),
            },
            {
              img: dat4,
              id: Math.floor(Math.random() * 1010) + Math.random(),
            },
            {
              img: dat5,
              id: Math.floor(Math.random() * 1010) + Math.random(),
            },
          ],
          id: 3345345,
          title: "Интернет-магазин на Tilda",
          text: [
            `Разработан интернет-магазин на тему Аниме;`,
            `Связаны CRM и API telegram;`,
            `Создан instagram-аккаунт и аккаунт в Faсebook;`,
            `Ведение магазина, instagram-аккаунта и настройка рекламы в течении 2 месяцев;`,
          ],
          link: "",
        },
        {
          imgs: [
            {
              img: sochi1,
              id: Math.floor(Math.random() * 100) + Math.random(),
            },
            {
              img: sochi2,
              id: Math.floor(Math.random() * 1020) + Math.random(),
            },
            {
              img: sochi3,
              id: Math.floor(Math.random() * 1030) + Math.random(),
            },
            {
              img: sochi4,
              id: Math.floor(Math.random() * 1010) + Math.random(),
            },
          ],
          id: 12212,
          title: "Верстка сайта для услуг кейтеринга в г.Сочи",
          text: [
            `Сайт разработан с помощью React, bootstrap, React Router;`,
            `Сверстан в соответствии с макетом из Figma;`,
            `Заказчику переданы все исходники сайта вместе со всеми зависимостями.`,
          ],
          link: "",
        },
        {
          imgs: [
            {
              img: cyber,
              id: Math.floor(Math.random() * 100) + Math.random(),
            },
            {
              img: cyber1,
              id: Math.floor(Math.random() * 1020) + Math.random(),
            },
            {
              img: cyber2,
              id: Math.floor(Math.random() * 1030) + Math.random(),
            },
            {
              img: cyber3,
              id: Math.floor(Math.random() * 1010) + Math.random(),
            },
            {
              img: cyber4,
              id: Math.floor(Math.random() * 1010) + Math.random(),
            },
          ],
          id: 4544,
          title: "Верстка сайта киберарены на Tilda",
          text: [
            `Сверстан полностью из Zero-блоков с добавлением стороннего кода;`,
            `Добавлена анимация;`,
            `Прописано первичное SEO;`,
            `Подключены формы к telegram.`,
          ],
          link: "http://cyberarenastorm.ru/",
        },
        {
          imgs: [
            {
              img: got,
              id: Math.floor(Math.random() * 100),
            },
            {
              img: got1,
              id: Math.floor(Math.random() * 1020),
            },
          ],
          id: 1231321,
          title: `Небольшая БД по сериалу "Игра престолов" на React.Js`,
          text: [
            `Разработан в рамках обучающего проекта с применением React.js и Ferch API;`,
            `В работе использован сервис "API of Ice And Fire".`,
          ],
          link: "",
        },
        {
          imgs: [
            {
              img: timber,
              id: Math.floor(Math.random() * 100),
            },
            {
              img: tim1,
              id: Math.floor(Math.random() * 1020),
            },
            {
              img: tim2,
              id: Math.floor(Math.random() * 1030),
            },
            {
              img: tim3,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: tim4,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: tim5,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: tim6,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: tim7,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: tim8,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: tim9,
              id: Math.floor(Math.random() * 1010),
            },
          ],
          id: 9890,
          title: "Интеграция калькуляторов на сайт Tilda",
          text: [
            `Сверстаны калькуляторы на HTML/CSS;`,
            `Интегрированы на сайт Tilda посредством добавления скриптов;`,
            `Форма заказа связана с калькуляторами, что позволяет принимать заказы через CRM (т.е. без потери стандартных 
              настроек сайта)`,
          ],
          link: "https://timberdesign.ru/",
        },
        {
          imgs: [
            {
              img: ameli,
              id: Math.floor(Math.random() * 100),
            },
            {
              img: a2,
              id: Math.floor(Math.random() * 1020),
            },
            {
              img: a1,
              id: Math.floor(Math.random() * 1030),
            },
            {
              img: a3,
              id: Math.floor(Math.random() * 1010),
            },
          ],
          id: 1203435,
          title:
            "Изменение стандартной работы корзины и карточек товара в Tilda",
          text: [
            `В интернет-магазина на платформе Tilda добавлен JS код, который добавляет "см" и крастность при 
            увеличении количества товара;`,
            `Все стандартные функции платформы сохранены.`,
          ],
          link: "https://amelie.su/",
        },
        {
          imgs: [
            {
              img: w1,
              id: Math.floor(Math.random() * 100),
            },
            {
              img: w2,
              id: Math.floor(Math.random() * 1020),
            },
          ],
          id: 5678493,
          title: "Расширение для анализа продаж на Wildberries",
          text: [
            `Расширение сверстано в соответствии с макетом из Figma на bootstrap 4;`,
            `Прописана логика на Vanilla Js;`,
            `Расширение дорабатывается и будет переписываться на React.js;`,
          ],
          link: "",
        },
        {
          imgs: [
            {
              img: cap1,
              id: "cap1",
            },
            {
              img: cap2,
              id: "cap2",
            },
            {
              img: cap3,
              id: "cap3",
            },
            {
              img: cap4,
              id: "cap4",
            },
          ],
          id: 1290342,
          title: "Сайт букмекерских услуг Cappers Free на React.js",
          text: [
            `Разработан сайт с учетом потребности клиента на React.js`,
            `Дизайн сайта полностью соответствует требованию клиента об использовании темных "ноток". А отличительной чертой 
            сайта является использование "неоновых" стилей`,
            `Подключены ADS сервисы для повышения трафика. Реклама настроена на жителей USA`,
            `Разработан именно на React , так как клиент собирается расширять функционал по типу SPA`,
          ],
          link: "cappers-free.com",
        },
      ],
    },
    serviceAndPrice: {
      head: {
        title: "Услуги и цены",
        subTitle: `Занимаюсь Web разработкой уже около 2 лет. Вы можете ознакомиться с работами в моем портфолио . 
        А так же больше узнать о моих "скилах" в разделе обо мне.`,
        btns: {
          portfolioBtn: "Портфолио",
          aboutBtn: "Обо мне",
        },
      },
      body: {
        subTitle: `Цена за 
        <strong style={{ fontSize: 16 }}>"Верстку"</strong>
        и <strong style={{ fontSize: 16 }}>"React Js"</strong> указаны за 
        <strong style={{ fontSize: 16 }}>1 час(!)</strong> работы.`,
        data: {
          websitesTable: {
            mainTitle: "Сайты",
            dataService: [
              {
                id: 1,
                title: "Лендинг",
                price: 10000,
              },
              {
                id: 2,
                title: "Визитка",
                price: 10000,
              },
              {
                id: 3,
                title: "Сайт под ключ",
                price: 18000,
              },
              {
                id: 4,
                title: "Верстка",
                price: 700,
              },
              {
                id: 5,
                title: "React Js ",
                price: 800,
              },
            ],
          },
          tilda: {
            mainTitle: "Tilda ~ ",
            dataService: [
              {
                id: 1,
                title: "Лендинг",
                price: 8000,
              },
              {
                id: 2,
                title: "Визитка",
                price: 7000,
              },
              {
                id: 3,
                title: "Сайт под ключ",
                price: 13000,
              },
              {
                id: 4,
                title: "Интернет-магазин",
                price: 20000,
              },
            ],
          },
          additionalBlock: {
            additionalBtn: "Дополнительные услуги",
            additionalServices: "Дополнительные услуги",
            mainTitle: "Прайс-лист на пакеты SMM",
            faqTitle: "FAQ",
            dataService: [
              {
                id: 1,
                title: "СТАРТ",
                price: 10900,
              },
              {
                id: 2,
                title: "СТАНДАРТ",
                price: 15900,
              },
              {
                id: 3,
                title: "VIP",
                price: 30900,
              },
              {
                id: 4,
                title: "ПАКЕТ: Тест 1",
                price: 3500,
              },
              {
                id: 5,
                title: "ПАКЕТ: Тест 2",
                price: 9900,
              },
              {
                id: 6,
                title: "АУДИТ АККАУНТА",
                price: 990,
              },
              {
                id: 7,
                title: "КОНСУЛЬТАЦИЯ",
                price: 3000,
              },
              {
                id: 8,
                title: "Настройка чат бота в Instagram",
                price: 15000,
              },
              {
                id: 9,
                title: "Разовая настройка таргетированной рекламы",
                price: 1990,
              },
              {
                id: 10,
                title: "Оформление общего дизайна аккаунта",
                price: 5900,
              },
              {
                id: 11,
                title: "Подбор блогера для рекламы",
                price: 5000,
              },
              {
                id: 12,
                title: "Коллаборация с другим аккаунтом",
                price: 4000,
              },
              {
                id: 13,
                title: "Разблокировать рекламный аккаунт",
                price: 1500,
              },
              {
                id: 14,
                title: "Услуги по копирайтингу",
                price: 999,
              },
              {
                id: 15,
                title: "Настройка Яндекс Директ / Google AdWords",
                price: 9500,
              },
            ],
            faqDescr: [
              {
                id: Math.random() + Math.random() * 1000,
                title: `СТАРТ`,
                answer: `<li>Анализ конкурентов</li>
                <li>Разработка стратегии ведения аккаунта</li>
                <li>Подготовка страницы к продвижению</li>
                <li>Повышение безопасности аккаунта</li>
                <li>Работа на увеличение целевой аудитории акаунта</li>
                <li>Разработка рекламных макетов</li>
                <li>2 настройки и запуск таргетированной рекламы Facebook, Instagram</li>
                <li>Отслеживание и анализ эффективности рекламных кампаний, корректировка и оптимизация</li>
                <li>Выявление и сегментирование целевой аудитории</li>
                <li>Создание портрета целевой аудитории</li>
                <li>Написание 15 продающих текстов</li>
                <li>Обработка 15 фото</li>
                <li>Обработка виде</li>
                <li>Публикация постов</li>
                <li>20-25 анимированных историй</li>
                <li>Мини отчёт</li>
                <li>Бюджет на таргетированную рекламу планируется индивидуально (Рекомендация от 5000₽)</li>`,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `СТАНДАРТ`,
                answer: `
                <li>Разработка стратегии ведения аккаунта</li>
                <li>Подготовка страницы к продвижению</li>
                <li>Повышение безопасности аккаунта</li>
                <li>Полное ведение аккаунта (публикации 25 шт, в ленте, сториз 50-60шт в т.ч анимированных)
                <li>Разработка тематических рубрик
                <li>Коммуникация с подписчиками</li>
                <li>Создание единого стиля страницы 
                <li>Скрытая реклама</li>
                <li>Ежемесячный анализ конкурентов 
                <li>Обратная связь</li>
                <li>Настройка и запуск таргетированной рекламы</li>
                <li>Анализировать эффективность рекламных кампаний, корректировка и оптимизация</li>
                <li>Отчеты, расчет и планирование рекомендательного бюджета</li>
                <br/>
                <li>Бюджет на таргетированную рекламу планируется индивидуально. Рекомендации от 10 000 руб.</li>`,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `VIP`,
                answer: `
                <li>Разработка стратегии ведения аккаунта</li>
                <li>Подготовка страницы к продвижению</li>
                <li>Повышение безопасности аккаунта</li>
                <li>Помощь с логотипом и неймингом</li>
                <li>Расширенное ведение аккаунта (публикации в ленте 30 шт , сториз от 60 шт, актуальное)</li>
                <li>Дополнительные публикации</li>
                <li>Разработка стиля дизайнером</li>
                <li>Разработка тематических рубрик</li>
                <li>Коммуникация с подписчиками</li>
                <li>Сотрудничество с блогерами</li>
                <li>Создание единого стиля страницы</li>
                <li>Скрытая реклама в популярных пабликах</li>
                <li>Создание рекламного кабинета</li>
                <li>Публикация страницы и прявязка к рекламному кабинету банковской карты </li>
                <li>Построение рекламной воронки</li>
                <li>Настройка и запуск таргетированной рекламы: С хватай стратегии, привлечением новых подписчиков, трафиком на сайт, конверсии ми, лук лайк аудитории, ретаргетинг</li>
                <li>Установка пикселя</li>
                <li>Развернутые ответы на все вопросы клиента</li>
                <li>Ежемесячная отчётность</li>
                <br/>
                <li>Бюджет на таргетированную рекламу планируется индивидуально. Рекомендации: от 30 000 руб.</li>`,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `ПАКЕТ: Тест 1`,
                answer: `
                <li>Работа на увеличение целевой аудитории аккаунта</li>
                <li>Разработка рекламного макета</li>
                <li>Создание рекламного кабинета</li>
                <li>Публикация страницы и прявязка к рекламному кабинету банковской карты </li>
                <li>Настройка и запуск таргетированной рекламы Facebook, Instagram</li>
                <li>Отслеживание и анализ эффективности рекламных кампаний, корректировка и оптимизация</li>
                <li>Написание 4 продающих текстов</li>
                <li>Обработка 4 фото</li>
                <li>Публикация постов</li>
                <li>7-14 анимированных историй</li>
                <br/>
                <li>Бюджет на таргетированную рекламу планируется индивидуально</li>`,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `ПАКЕТ: Тест 2`,
                answer: `
                <li>Анализ конкурентов</li>
                <li>Разработка стратегии ведения аккаунта</li>
                <li>Подготовка страницы к продвижению</li>
                <li>Повышение безопасности аккаунта</li>
                <li>Работа на увеличение целевой аудитории аккаунта</li>
                <li>Разработка рекламного макета</li>
                <li>Настройка и запуск таргетированной рекламы Facebook, Instagram</li>
                <li>Отслеживание и анализ эффективности рекламных кампаний, корректировка и оптимизация</li>
                <li>Выявление и сегментирование целевой аудитории</li>
                <li>Создание портрета целевой аудитории</li>
                <li>Написание 4 продающих текстов</li>
                <li>Обработка 4 фото</li>
                <li>Обработка видео</li>
                <li>Публикация постов</li>
                <li>7-14 анимированных историй</li>
                <br/>
                <li>Бюджет на таргетированную рекламу планируется индивидуально</li>`,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `ПАКЕТ: Активный`,
                answer: `
                Увеличение активности профиля: Лайки, подписки, просмотры на Соц сеть на
                выбор: VK, Facebook и тд.
                `,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `АУДИТ АККАУНТА`,
                answer: `
                С ним вы увидите сильные слабые стороны вашего профиля, что поможет вам провести работу над ошибками 
                и тем самым привлекать больше клиентов.
                `,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `КОНСУЛЬТАЦИЯ`,
                answer: `
                Консультация длится час, на ней вы можете задать любые вопросы и получить на них ответы.
                `,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `Услуги по копирайтингу`,
                answer: `
                Посты, статьи для сайтов, лендингов, интернет- магазинов. Продающее, информационные, 
                развлекательные тексты на различные темы. Цена зависит от сложности и объема текста.
                `,
              },
              {
                id: Math.random() + Math.random() * 1000,
                title: `Настройка Яндекс Директ / Google AdWords`,
                answer: `
                Стоимость варьируется в зависимости от ниши и объем работы.
                <br/>
                Многие берут за 9500₽, так как это выгодно. В стоимость входит месячное ведение настроек с 
                целью выявления и оптимизации самых эффективных
                объявлений для получения наилучшего результата. Также пожеланию клиента возможны правки и редактирования.
                `,
              },
            ],
          },
        },
      },
      faqBlock: {
        title: "FAQ",
        faq: [
          {
            id: 1,
            title: "Порядок работы и оплаты",
            answer: `
              
                    <li>
                         Мы связываемся и выделяем направление работы;
                    </li>
                    <li>
                        Вы вносите предоплату (<strong class = "colored">50%</strong> от стоимости работы, 
                        но не менее <strong class="colored">5 000 рублей</strong>).
                        Так же возможно оплатить работу через безопасную сделку
                        <a href="https://yandex.ru/uslugi/profile/EvgenijP-649182" class = 'colored'>
                        Яндекс.Услуг</a> ;
                    </li>
                    <li>
                    Готовится ПК версия сайта. Мы ее правим по Вашим нуждам. И уже после адаптируется
                    под мобильный устройства <span class = 'text-muted'>(Если идет верстка 
                    по макету или примеру другого сайта - порядок работы оговаривается отдельно);</span>
                    </li>
                    <li>
                    Сдача проекта.
                    Это загрузка на хостинг/передача проекта целиком/передача логина и пароля(Tilda)/
                    небольшое обучение для самостоятельных правок на сайте;
                    </li>
                    <li>
                    <a href='https://yandex.ru/uslugi/worker-review/EvgenijP-649182' 
                    class = 'colored'>Отзыв</a> о работе и дальнейшее сотрудничество!
                    </li>
            `,
          },
          {
            id: 2,
            title: "Что такое лендинг?",
            answer: ` Это ваша посадочная страница. На которую будет приходить трафик.
              Обычно это 1 страница со всей информацией о Вас или Вашем деле. В ней находятся
              формы сбора данных, контактные данные и тд.`,
          },
          {
            id: 3,
            title: "Чем отличаются сайты на Tilda?",
            answer: `Тильда имеет хорошую CRM систему. А так же возможность удобного
              администрирования сайта своими силами без знаний программирования. С помощью этого
              конструктора Вы запустите свой сайт в работу намного быстрее. Tilda идеально подходит
              для мелкого и среднего бизнеса. А еще для тех, кто хочет развить свое дело и заявить о себе.
              Это самый быстрый и , относительно сайтов на HTML|CSS, дешевый способ запустить
              свою страничку или интернет-магазин.`,
          },
          {
            id: 4,
            title: "Правда ли, что сайты на Tilda плохо поддаются SEO?",
            answer: `Лишь от части. Tilda представляет обширный функционал по настройке SEO, который 
                стоит использовать в полной мере. Элементы на этом конструкторе представляют собой отдельные,
                 не связанные друг с другом, блоки, что с точки зрения SEO <strong>"не есть хорошо"</strong>.
                 Но почему же Tild'y используют все чаще? Все просто - скорость, простота и невысокая
                 стоимость сайтов!`,
          },
          //   {
          //     id: 5,
          //     title: "Чем отличается Сайт под ключ и Лендинг? ",
          //     answer: `<strong>Сайт под ключ</strong> подразумевает полное создание сайта с самого начала.
          //         Это первичная настройка SEO, сжатие ваших изображений, помощь в дальнейшей его
          //         настройке и запуске сайта, загрузка на хостинг и тд. <strong>Лендинг</strong> же - сверстаный по макету`,
          //   },
          {
            id: 6,
            title: "Возможны ли какие-то правки после завешения работы?",
            answer: `Конечно! Правки вношу в соответствии с требованиями. Прошу не путать между 
                <strong>"давай этот текст в черный покрасим"</strong> и <strong>"хотелось бы полностью
                переделать страницу/блок"</strong>. Есть большая разница между
                <strong class='colored'>переделкой</strong> и <strong class='colored'>правкой</strong>!
                Также, прошу принять к сведению, что количество правок строго ограничено!`,
          },
        ],
      },
    },
    resume: {
      head: {
        title: "Online Резюме",
      },
      body: {
        head: {
          small: `* - указана только работа связанная с разработкой. Полное резюме
          доступно на <a
            href="https://hh.ru/resume/00cf93daff029710900039ed1f5338764e3130"
            class="font-weight-bold"
            style={{ color: "#54b689" }}
          >
            HeadHunter
          </a>
          .`,
          title: "Перверзев Евгений",
          subTitle: "Frontend developer",
          logo,
          contacts: [
            {
              id: 1,
              cont: "7-961-300-14-49",
              link: "+79613001449",
              icon: "phone",
            },
            {
              id: 2,
              cont: "kalmbik61@gmail.com",
              link: "mailto:kalmbik61@gmail.com",
              icon: "mail",
            },
            {
              id: 3,
              cont: "mywebsite",
              link: "#",
              icon: "website",
            },
            {
              id: 4,
              cont: "Ростов-на-Дону",
              link: "#",
              icon: "location",
            },
          ],
        },
        expBlock: {
          title: "Опыт работы",
          exp: [
            {
              id: 1,
              title: "Работа над различными мини-проектами на фрилансе",
              date_from: "Октябрь 2020",
              date_to: "по настоящее время",
              work_type: "Фриланс",
              about: `Доработка, правка, исправление ошибок и добавление новых фич на различных сайтах/расширениях`,
            },
            {
              id: 143535,
              title: "Сайт-портфолио на React Js",
              date_from: "Декабрь 2020",
              date_to: "Февраль 2021",
              work_type: "Свой проект",
              about: `Разработка сайта-портфолио на React Js. 
              В данном проект реализована функция смены темы всего сайта со светлой на темную через Redux и MaterialUI.
              Выбор записывается в localStorage и используется при последующих входах на сайт.
              В планах еще добавить возможность смены языка на "EN".
              PS:Данный проект немного затянулся, так как попутно работаю на фрилансе и основной работе.
              PSS: Проект постоянной дорабатывается и улучшается.`,
            },
            {
              id: 23223424,
              title: "Расширение для анализа продаж на Wildberries",
              date_from: "Февраль 2021",
              date_to: "Февраль 2021",
              work_type: "Фриланс",
              about: `Сверстано расширение для браузера Chrome по предоставленному макету. Верстка с 
              использованием библиотеки Bootstrap 4. Добавлена библиотека Chart.js для использования графиков.
              Расширение целиком написано на Vanilla JS. Является лишь Альфа версией приложения. В дальнейшем будет перерабатываться и собираться через React Js.`,
            },
            {
              id: 86776,
              title:
                "Изменение стандартной работы корзины и карточек товара в Tilda",
              date_from: "Декабрь 2020",
              date_to: "Декабрь 2020",
              work_type: "Фриланс",
              about: `Изменена кратность товаров, шаг добавления товара в корзину и добавление надписи "см" путем 
              добавления стороннего кода на Vanilla JS.`,
            },
            {
              id: 1231123,
              title: "Интеграция калькуляторов на сайт Tilda",
              date_from: "Январь 2021",
              date_to: "Январь 2021",
              work_type: "Фриланс",
              about: `Были интегрированы калькуляторы на платформу Tilda. 
              Данные из калькуляторов интегрированы в стандартные формы, что позволяет сохранить возможность 
              использования CRM системы и других стандартных функций`,
            },
            {
              id: 2,
              title: "Верстка макета на Tilda",
              date_from: "Октябрь 2020",
              date_to: "Октябрь 2020",
              work_type: "Фриланс",
              about: `Создание адаптивного сайта на платформе Tilda с 0 по дизайну в Figma. 
              Добавление кастомных анимаций, карт с точками присутствия и контактной информацией,
              формами обратной связи через Telegram.`,
            },
            {
              id: 4,
              title: "Сайт для услуг кейтеринга в г.Сочи",
              date_from: "Сентябрь 2020",
              date_to: "Сентябрь 2020",
              work_type: "Фриланс",
              about: `Разработан проект с 0 с применением React+bootstrap+router. Разработана форма обратной 
              связи и корзина заказов. А так же мини-слайдеры и меню. В данный момент проект заморожен.`,
            },
            {
              id: 3,
              title: "Интернет магазин на платформе Tilda",
              date_from: "Июнь 2020",
              date_to: "Август 2020",
              work_type: "Фриланс",
              about: `Разработка дизайна проекта для интернет-магазина. Полное ведение и 
              администрирование проекта. Ведение instagram магазина, smm продвижение.`,
            },
            {
              id: 5,
              title: "Доработка сайта",
              date_from: "Май 2020",
              date_to: "Май 2020",
              work_type: "Фриланс",
              about: `Доработка сайта столярных мастерских до деплоя. Добавление новых фич на сайт. 
              Администрирование и сопровождение проекта. Доработка велась с применением Vanilla JS.`,
            },
            {
              id: 6,
              title: "Кредитный калькулятор",
              date_from: "Март 2020",
              date_to: "Март 2020",
              work_type: "Фриланс",
              about: `Разработан кредитный калькулятор на Vanilla JS с визуальным отображением "тела" кредита.`,
            },
          ],
        },
        skillsBlock: {
          title: " Навыки",
          technicalSkillsBlock: {
            title: "Техничесике",
            technical: [
              {
                id: 1,
                skill: "JavaScript/ES6+",
              },
              {
                id: 2,
                skill: "React/ReactRouter/Redux",
              },
              {
                id: 3,
                skill: "Vue (знакомство)",
              },
              {
                id: 4,
                skill: "PHP (знакомство)",
              },
              {
                id: 5,
                skill: "HTML/CSS",
              },
              {
                id: 6,
                skill: "Bootstrap/Bulma/Materialize UI",
              },
              {
                id: 7,
                skill: "Git/npm",
              },
              {
                id: 8,
                skill: "Fetch/Rest API",
              },
              {
                id: 9,
                skill: "Tilda Cms",
              },
            ],
          },
          softSkillsBlock: {
            title: "Софт навыки",
            softSkills: [
              {
                id: 1 * (Math.random() * 1000),
                skill: "Легкообучаемость",
              },
              {
                id: 2 * (Math.random() * 1000),
                skill: "Старание и упорство",
              },
              {
                id: 3 * (Math.random() * 1000),
                skill: "Общительность",
              },
              {
                id: 4 * (Math.random() * 1000),
                skill: "Ответственность",
              },
              {
                id: 5 * (Math.random() * 1000),
                skill: "Желание развиваться",
              },
              {
                id: 6 * (Math.random() * 1000),
                skill: "Клиентоориентированность",
              },
              {
                id: 7 * (Math.random() * 1000),
                skill: "Учтивость",
              },
            ],
          },
          langsBlock: {
            title: "Языки",
            langs: [
              {
                id: 1,
                lang: 'Русский <span class="text-muted">(родной)</span>',
              },
              {
                id: 2,
                lang:
                  'English <span class="text-muted">(Pre-intermediate)</span>',
              },
            ],
          },
          interestsBlock: {
            title: "Увлечения",
            interests: [
              {
                id: 1,
                interes: "Страйкбол",
              },
              {
                id: 2,
                interes: "Новые технологии",
              },
              {
                id: 3,
                interes: "Плавание",
              },
              {
                id: 4,
                interes: "Бильярд",
              },
              {
                id: 5,
                interes: "Настольный теннис",
              },
            ],
          },
        },
      },
    },
    contacts: {
      head: {
        title: "Контакты",
        subTitle: `Хотите связаться со мной по рабочим вопросам или просто сказать
        "Привет"? Вы можете написать мне на почту 
        <a
          href="mailto: kalmbik61@gmai.com"
          class="url_hover"
          style={{ color: "#44A076" }}
        >
          kalmbik61@gmail.com
        </a> 
        или связаться другим удобным для Вас способом! А так же
        воспользоваться формой ниже и я Вам перезвоню (напишу).`,
        whats: "https://wa.me/79613001449",
        telegram: "https://teleg.run/kalmbik61",
      },
      body: {
        title: "Связаться",
        form: {
          placeholders: {
            name: "Имя",
            phone: "Номер телефона",
            textArea: "Ваш вопрос",
            term: "Соглашаюсь c обработкой персональных данных",
          },
          validate: {
            name: {
              req: "Введите свое имя",
            },
            phone: {
              num: 10,
              validate: `Номер телефона должен состоять не менее чем из ${this} цифр`,
              req: "Обязательно укажите Ваш номер телефона",
            },
            terms: {
              req: "Подтвердите свое согласие на обртаботку",
            },
          },
          req: "Отлично!",
          subTitle: `Для получения более подробной информации о предоставляемых
          услугах посетите страницу
          <a
            href="/service"
            class="url_hover"
            style={{ color: "#44A076" }}
          >
            "Услуги и цены"
          </a>`,
          btn: "Отправить",
        },
      },
    },
  },
  modalSliderImgs: [],
  demoPage: [
    {
      name: "CovidTracker",
      title: "Covid-19 tracker",
      img: covid,
      id: 1,
      descr: `Covid-19 worldwide tracker. You may view the situation on the world
              map and check how many people are sick, recovered and dead in the
              world.`,
    },
  ],
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL_SLIDER":
      const copy = [...action.payload];
      return {
        ...state,
        modalSliderImgs: [...copy],
      };
    default:
      return state;
  }
};

export default langReducer;
