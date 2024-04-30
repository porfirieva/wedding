import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../store/AppContext";
import s from "./style.module.scss";

const EmailForm = () => {
  const { state } = useContext(AppContext);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState();
  const phoneRef = useRef();

  const onSend = (e) => {
    console.log(state);
    // window.Email.send({
    //   SecureToken: "df417d6c-18af-450b-a2c4-d1ef3cffd81c",
    //   To: "porfirieva.k@gmail.com",
    //   From: "porfirieva.k@gmail.com",
    //   Subject: "Новая завка на сайте",
    //   Body: "Я ПИСЬМОООО",
    // }).then((message) => alert(message));
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
      тут продублировать информацию о заказе
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

        <button onClick={onSend}>Отправить заявку</button>
      </form>
    </div>
  );
};

export default EmailForm;
