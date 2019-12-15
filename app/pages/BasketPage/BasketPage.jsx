import React from 'react';
import styles from './BasketPage.css';

import Emoji from '../../components/Emoji/Emoji';
import routes from '../../constants/routes';
import HeaderContainer from '../../components/Header/HeaderContainer';

const BasketPage = ({
  basketThings,
  getConsultantThunkCreator,
  removeFromBasket,
  clearBasket,
  goBack,
  fetchThingInfo,
}) => {
  if (basketThings.length !== 0) {
    return (
      <div className={styles.container}>
        <HeaderContainer />
        <ul className={styles.basket_things_list}>
          {basketThings.map((item) => (
            <li
              className={styles.basket_things_list__item}
              onClick={() => {
                fetchThingInfo(item.barcode);
                goBack(routes.HOME);
              }}
            >
              <div className={styles.basket_item_cart}>
                <div className={styles.basket_cart__image_container}>
                  <img src={item.image} className={styles.basket_cart__image} />
                </div>
                <div className={styles.basket_cart__title}>
                  <p>{item.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.basket_footer}>
          <button className={styles.basket_footer__button} onClick={() => clearBasket()}>
            Очистить корзину
          </button>
          <button className={styles.basket_footer__button} onClick={() => {}}>
            Упаковать на кассу
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <HeaderContainer />
      <div className={styles.waiting}>
        <p>
          Здесь пока ничего нет
          <Emoji symbol="🙈" />
        </p>
        <p>Отсканируй товар или перейди в каталог</p>
      </div>
    </div>
  );
};

export default BasketPage;
