import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/7034344?s=460&u=58ef164b38691f43caffef08e0722ed69f35b69b&v=4"
          alt="Leandro"
        />
        <div>
          <strong>Leandro Reis</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Professor a mais de 10 anos.
        <br />
        <br />
        Apaixonado por programar.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;
