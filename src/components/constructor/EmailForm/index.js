import { useContext, useEffect, useRef, useState } from "react";

import { AppContext } from "../store/AppContext";
import TotalPrice from "../TotalPrice";
import { getPrice } from "../TotalPrice/utils";
import { createEmail } from "./utils";
import Input from "./input";
import s from "./style.module.scss";

const EmailForm = () => {
  const { state } = useContext(AppContext);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState();
  const phoneRef = useRef();
  const { totalPrice, priceInfo } = getPrice(state);

  const [invalidPhone, setInvalidPhone] = useState(false);

  const onSend = (e) => {
    e.preventDefault();

    setInvalidPhone(false);

    if (phone.length !== 11) {
      setInvalidPhone(true);
      return;
    }

    const message = createEmail(
      state.location.title,
      totalPrice,
      priceInfo,
      name,
      date,
      phone
    );

    window.Email.send({
      SecureToken: "df417d6c-18af-450b-a2c4-d1ef3cffd81c",
      To: "porfirieva.k@gmail.com",
      From: "info@decor-bv.ru",
      Subject: "Новая завка на сайте",
      Body: message,
    })
      .then((message) => alert("Ваша заявка успешно отправлена"))
      .catch((e) => alert(e));
  };

  const handlePhoneChange = () => {
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
    handlePhoneChange();
  }, [phone]);

  return (
    <div>
      <h3>Вы выбрали:</h3>
      <TotalPrice />
      <p className={s.descr}>
        Для уточнения и согласования деталей, пожалуйста, введите свои данные в
        форму ниже. Мы обработаем заявку и обязательно с Вами свяжемся.
      </p>
      <form className={s.form} onSubmit={onSend}>
        <Input
          title="Ваше имя"
          type="text"
          name="name"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          title="Дата мероприятия"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Дата мероприятия"
        />

        <Input
          title="Номер телефона для связи"
          customRref={phoneRef}
          type="numder"
          name="phone"
          error={invalidPhone}
          errorText="Пожалуйста, проверьте введенный номер телефона"
          onChange={handlePhoneChange}
          placeholder="Номер телефона"
        />

        <button className={s.send} type="submit">
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
