import React from "react";
import { Button } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const About_howWorkDo = () => {
  return (
    <div>
      <div className="mb-5">
        <h3 className="section-title font-weight-bold m-3">Как я работаю:</h3>
        <ol>
          <li>Связываюсь с Вами</li>
          <li>Ставим конкретную задачу или выделяем несколько целевых</li>
          <li>
            Вы вносите предоплату или сумму за проект целиком
            <span className="text-secondary">
              (см. раздел{" "}
              <a
                className="url_hover font-weight-bold"
                style={{ color: "#44A076" }}
                href="/portfolio/wordpress/service/#faq"
              >
                FAQ
              </a>{" "}
              )
            </span>
          </li>
          <li>Начинаю работать над Вашим вопросом</li>
          <li>Ежедневный \ еженедельный отчет о проделанной работе</li>
          <li>
            Представление проекта{" "}
            <span className="text-secondary">(его проверка)</span>{" "}
          </li>
          <li>
            Исправление ошибок \ внесение необходимых изменений{" "}
            <span className="text-secondary">
              {" "}
              (
              <span
                className="font-weight-bold"
                style={{ color: "red", fontSize: "20px" }}
              >
                !
              </span>{" "}
              количество изменений ограничено)
            </span>
          </li>
          <li>Сдача проекта</li>
        </ol>

        <div className="feedback">
          Если Вам нравится моя работа - оцените меня по данной{" "}
          <a
            className="url_hover font-weight-bold"
            style={{ color: "#44A076" }}
            href="https://yandex.ru/uslugi/worker-review/EvgenijP-649182"
          >
            ссылке
          </a>
        </div>
      </div>
      <div className="text-center m-5">
        <Link to="/service">
          <Button variant="outline-success">
            <ExitToAppIcon style={{ marginRight: "0.5rem" }} />
            Услуги и цены
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About_howWorkDo;
