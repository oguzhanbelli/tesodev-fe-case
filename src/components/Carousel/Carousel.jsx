import React from "react";
import { BackArrow, NextArrow } from "../../assets";
import styles from "./carousel.module.scss";

const slideWidth = 22;

const _items = [
  {
    new: {
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      image: "https://i.ibb.co/YTHNr3C/Image.png",
    },
  },
  {
    new: {
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      image: "https://i.ibb.co/YTHNr3C/Image.png",
    },
  },
  {
    new: {
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      image: "https://i.ibb.co/YTHNr3C/Image.png",
    },
  },
  {
    new: {
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      image: "https://i.ibb.co/YTHNr3C/Image.png",
    },
  },
  {
    new: {
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      image: "https://i.ibb.co/YTHNr3C/Image.png",
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    new: _items[idx].new,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className={styles["carousel__slide-item"]} style={item.styles}>
      <div className={styles["carousel__slide-item-img-link"]}>
        <img src={item.new.image} alt={item.new.title} />
      </div>
      <div className={styles["carousel-slide-item__body"]}>
        <h4>{item.new.title}</h4>
        <p>{item.new.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className={styles["carousel__wrap"]}>
      <div className={styles["carousel__inner"]}>
        <button
          className={`
            ${styles["carousel__btn"]}
            
            ${styles["carousel__btn--prev"]}
         `}
          onClick={() => prevClick()}
        >
          <BackArrow />
        </button>
        <div className={styles["carousel__container"]}>
          <ul className={styles["carousel__slide-list"]}>
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className={`
         ${styles["carousel__btn"]}
         
         ${styles["carousel__btn--next"]}
      `}
          onClick={() => nextClick()}
        >
          <NextArrow />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
