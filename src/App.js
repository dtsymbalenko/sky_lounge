import './App.css';
import arrow from './assets/ic_arrow_left_gray_24dp.png';
import more from './assets/more.svg';
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
          <button className="header__button" onClick={handleMenuOpen}><img src={more} alt="More" /></button>
      </header>
      <div className="rating">
          <div className="rating__stars">
              {[...Array(5)].map((_, index) => (
                  <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill={index + 1 > stars ? '#e3e3e3' : '#fbbc04'}
                  >
                      <path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" />
                  </svg>
              ))}
          </div>
          <div className="rating__text">{time}</div>
          <div className="rating__new">Новый</div>
      </div>
      <div className="review">{reviewText}</div>

        {isOpen && (<div className="edit">
            <div className="edit__container">
                <input type="text" value={name} onChange={changeName} />
                <input type="text" value={reviewCount} onChange={(e) => setReviewCount(e.target.value)} />
                <input type="number" value={stars} min="1" max="5" onChange={(e) => setStars(e.target.value)} />
                <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
            </div>
            <button className="review__button" onClick={handleSave}>Сохранить</button>
        </div>)}
    </div>
  );
}

export default App;
