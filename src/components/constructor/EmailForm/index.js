import { useContext, useEffect, useRef, useState } from "react";

import { AppContext } from "../store/AppContext";
import TotalPrice from "../TotalPrice";
import { getPrice } from "../TotalPrice/utils";
import { createEmail } from "./utils";
import s from "./style.module.scss";

const EmailForm = () => {
  const { state } = useContext(AppContext);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState();
  const phoneRef = useRef();
  const { totalPrice, priceInfo } = getPrice(state);

  const onSend = (e) => {
    const message = createEmail(
      state.location.title,
      totalPrice,
      priceInfo,
      name,
      date,
      phone
    );

    // todo
    // window.Email.send({
    //   SecureToken: "df417d6c-18af-450b-a2c4-d1ef3cffd81c",
    //   To: "porfirieva.k@gmail.com",
    //   From: "porfirieva.k@gmail.com",
    //   Subject: "Новая завка на сайте",
    //   Body: message,
    // })
    //   .then((message) => alert("Ваша заявка успешно отправлена"))
    //   .catch((e) => alert(e));
  };

  const handleChange = () => {
    const value = phoneRef.current.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    phoneRef.current.value = !value[2]
      ? value[1]
      : `${value[1]}-${value[2]}${`${value[3] ? `-${value[3]}` : ""}`}${`${
          value[4] ? `-${value[4]}` : ""
        }`}`;
    const numbers = phoneRef.current.value.replace(/(\D)/g, "");
    setPhone(numbers);
  };

  useEffect(() => {
    handleChange();
  }, [phone]);

  return (
    <div>
      <h3>Вы выбрали:</h3>
      <TotalPrice />
      <p className={s.descr}>
        Для уточнения и согласования деталей, пожалуйста, введите свои данные в
        форму ниже. Мы обработаем заявку и обязательно с Вами свяжемся.
      </p>
      <form className={s.form} onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Ваше имя</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Дата мероприятия</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            placeholder="Дата мероприятия"
          />
        </div>
        <div>
          <label>Номер телефона для связи</label>
          <input
            ref={phoneRef}
            type="numder"
            name="phone"
            onChange={handleChange}
            required
            placeholder="Номер телефона"
          />
        </div>

        <button onClick={onSend} className={s.send}>
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
