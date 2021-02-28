import logo from "../images/IMG_2158.jpeg";
import tilda from "../images/logo_tilda_black.svg";

//PORTFOLIO
import l1 from "../images/laiswood/l1.png";
import l2 from "../images/laiswood/l2.png";
import l3 from "../images/laiswood/l3.png";
import l4 from "../images/laiswood/l4.png";
import l5 from "../images/laiswood/laiswood.png";

import creditCalc from "../images/credit.png";

import dat1 from "../images/dattebayo/d1.png";
import dat2 from "../images/dattebayo/d2.png";
import dat3 from "../images/dattebayo/d3.png";
import dat4 from "../images/dattebayo/d4.png";
import dat5 from "../images/dattebayo/d5.png";
import dat from "../images/dattebayo/dattebayo.png";

import sochi1 from "../images/sochi/s1.png";
import sochi2 from "../images/sochi/s2.png";
import sochi3 from "../images/sochi/s3.png";
import sochi4 from "../images/sochi/s4.png";

import cyber from "../images/cyber/cyber.png";
import cyber1 from "../images/cyber/ca1.png";
import cyber2 from "../images/cyber/ca2.png";
import cyber3 from "../images/cyber/ca3.png";
import cyber4 from "../images/cyber/ca4.png";

import got from "../images/got/got2.png";
import got1 from "../images/got/got3.png";

import timber from "../images/timber/timber.png";
import tim1 from "../images/timber/tim1.png";
import tim2 from "../images/timber/tim2.png";
import tim3 from "../images/timber/tim3.png";
import tim4 from "../images/timber/tim4.png";
import tim5 from "../images/timber/tim5.png";
import tim6 from "../images/timber/tim6.png";
import tim7 from "../images/timber/tim7.png";
import tim8 from "../images/timber/tim8.png";
import tim9 from "../images/timber/tim9.png";

import ameli from "../images/ameli/ameli.png";
import a1 from "../images/ameli/a1.png";
import a2 from "../images/ameli/a2.png";
import a3 from "../images/ameli/a3.png";

import w1 from "../images/wildberries/w1.png";
import w2 from "../images/wildberries/w2.png";

const initialState = {
  lang: "RU",
  textRu: {
    dashbord: {
      head: {
        subTitle:
          "Привет! Меня зовут Евгений. Я фронтенд разработчик. Добро пожаловать на мой сайт.",
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
      ],
    },
    about: {
      head: {
        title: "Евгений Переверзев",
        subTitle: "Frontend Developer",
        text: `Я веб разработчик, который пециализируется на фронтенде. Начал осваивать Web-разработку в январе 2020 года. В данный момент подрабатываю на фрилансе, помогаю другим людям реализовывать их идеи.
        Хотите чтобы я помог Вам с вашим проектом? Посетите мое портфолио, онлайн резюме и свяжитесь со мной удобным для Вас способом.`,
        logo,
        btns: {
          portfolioBtn: "Портфолио",
          resumeBtn: "Резюме",
        },
      },
      skillsBlock: {
        title: "Что я могу",
        subTitle: `Занимаюсь веб разработкой уже более 1 года. Начинал на фрилансе. 
        В данный момент активно использую библиотеку React Js с различным дополнительным функионалом.
        Мой сайт целиком и полностью написан на React JS.`,
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
      // howIWork: {
      //   title: "Как я работаю:",
      //   howList: [{ id: 1, text: "111" }],
      //   reviewsTextLink: {
      //     text: "Если Вам нравится моя работа - оцените меня по данной",
      //     revLink: "111",
      //   },
      // },
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
          link: "отсутствует или более недоступен",
        },
        {
          imgs: [
            {
              img: l1,
              id: Math.floor(Math.random() * 100),
            },
            {
              img: l2,
              id: Math.floor(Math.random() * 1020),
            },
            {
              img: l3,
              id: Math.floor(Math.random() * 1030),
            },
            {
              img: l4,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: l5,
              id: Math.floor(Math.random() * 1010),
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
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: dat1,
              id: Math.floor(Math.random() * 100),
            },
            {
              img: dat2,
              id: Math.floor(Math.random() * 1020),
            },
            {
              img: dat3,
              id: Math.floor(Math.random() * 1030),
            },
            {
              img: dat4,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: dat5,
              id: Math.floor(Math.random() * 1010),
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
          link: "отсутствует или более недоступен",
        },
        {
          imgs: [
            {
              img: sochi1,
              id: Math.floor(Math.random() * 100),
            },
            {
              img: sochi2,
              id: Math.floor(Math.random() * 1020),
            },
            {
              img: sochi3,
              id: Math.floor(Math.random() * 1030),
            },
            {
              img: sochi4,
              id: Math.floor(Math.random() * 1010),
            },
          ],
          id: 12212,
          title: "Верстка сайта для услуг кейтеринга в г.Сочи",
          text: [
            `Сайт разработан с помощью React, bootstrap, React Router;`,
            `Сверстан в соответствии с макетом из Figma;`,
            `Заказчику переданы все исходники сайта вместе со всеми зависимостями.`,
          ],
          link: "отсутствует или более недоступен",
        },
        {
          imgs: [
            {
              img: cyber,
              id: Math.floor(Math.random() * 100),
            },
            {
              img: cyber1,
              id: Math.floor(Math.random() * 1020),
            },
            {
              img: cyber2,
              id: Math.floor(Math.random() * 1030),
            },
            {
              img: cyber3,
              id: Math.floor(Math.random() * 1010),
            },
            {
              img: cyber4,
              id: Math.floor(Math.random() * 1010),
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
          link: "отсутствует или более недоступен",
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
          link: "отсутствует или более недоступен",
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
          instagram: {
            additionalServices: "Дополнительные услуги",
            mainTitle: "Instagram",
            dataService: [
              {
                id: 1,
                title: "Настройка шапки",
                price: 1000,
              },
              {
                id: 2,
                title: "Настройка Hightlights",
                price: 2000,
              },
              {
                id: 3,
                title: "Продвижение аккаунта",
                price: 9900,
              },
              {
                id: 4,
                title: "Комплексное ведение",
                price: 20000,
              },
              {
                id: 5,
                title: "Настройка рекламы",
                price: 9900,
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
              Присутствует смена языка на "EN".
              Выбор записывается в localStorage и используется при последующих входах на сайт.
              ${(<br />)}
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      localStorage.setItem("theme", action.payload ? "light" : "dark");
      return {
        ...state,
        themePage: localStorage.theme === "dark" ? localStorage.theme : "light",
      };
    default:
      return state;
  }
};

export default reducer;
