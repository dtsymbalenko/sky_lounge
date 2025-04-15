import './App.css';
import arrow from './assets/ic_arrow_left_gray_24dp.png';
import React from 'react';

function App() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState('Имя');
    const [reviewCount, setReviewCount] = React.useState('1 отзыв');
    const [reviewText, setReviewText] = React.useState('Text');
    const [photoLetter, setPhotoLetter] = React.useState('K');
    const [photoColor, setPhotoColor] = React.useState('');
    const [stars, setStars] = React.useState(5);
    const [time, setTime] = React.useState('3 часа назад');

    const colors = ['#7821a1', '#f7500e', '#6aa034', '#596abd', '#0089da', '#008a7d', '#004d40', '#78909c', '#c2165b'];

    const handleMenuOpen = () => {
        setIsOpen((prev) => !prev);
    }

    const changeName = (e) => {
        setName(e.target.value);
        setPhotoLetter(e.target.value[0]);
    }

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const handleSave = () => {
        setIsOpen(false);
        setPhotoColor(getRandomColor());
    }
  return (
    <div className="wrapper">
      <header className="header">
          <img src={arrow} alt="Arrow" width="24px" />
          <div className="header__info">
              <div className="header__photo" style={{ backgroundColor: photoColor }}>{photoLetter}</div>
                <div className="header__center">
                    <div className="header__name">{name}</div>
                    <div className="header__review">{reviewCount}</div>
                </div>
          </div>
          <button className="header__button" onClick={handleMenuOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#1f1f1f"><path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z"/></svg>
          </button>
      </header>
      <div className="rating">
          <div className="rating__stars">
              {[...Array(5)].map((_, index) => (
                  <svg key={index} width="12" height="12" viewBox="0 0 12 12">
                      <path d="M6 .6L2.6 11.1 11.4 4.7H.6L9.4 11.1Z" fill={index + 1 > stars ? '#e3e3e3' : '#fabb05'} stroke={index + 1 > stars ? '#e3e3e3' : '#fabb05'}></path>
                  </svg>
              ))}
          </div>
          <div className="rating__text">{time}</div>
          <div className="rating__new">Новый</div>
      </div>
      <div className="review">{reviewText}</div>

        {isOpen && (<div className="edit">
            <div className="edit__overlay" onClick={() => setIsOpen(false)}></div>
            <div className="edit__container">
                <label className="edit__label">
                    Имя:
                    <input className="edit__input" type="text" value={name} onChange={changeName} />
                </label>

                <label className="edit__label">
                    Количество отзывов:
                    <input className="edit__input" type="text" value={reviewCount} onChange={(e) => setReviewCount(e.target.value)} />
                </label>

                <label className="edit__label">
                    Звезды:
                    <input className="edit__input" type="number" value={stars} min="1" max="5" onChange={(e) => setStars(e.target.value)} />
                </label>

                <label className="edit__label">
                    Время:
                    <input className="edit__input" type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                </label>

                <label className="edit__label">
                    Отзыв:
                    <textarea className="edit__textarea" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
                </label>
                <button className="review__button" onClick={handleSave}>Сохранить</button>
            </div>
        </div>)}
    </div>
  );
}

export default App;
