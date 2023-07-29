import styles from './Card.module.scss';

interface CardProps {
  renderImg?: () => JSX.Element;
  renderHeader: () => JSX.Element;
  renderBody: () => JSX.Element;
}

const Card = ({ renderImg, renderHeader, renderBody }: CardProps) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__header}>
        <div className={styles.img_containner}>
          <div className={styles.img_containner__img_wrapper}>{renderImg && renderImg()}</div>
        </div>
        {renderHeader()}
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__body}>{renderBody()}</div>
      </div>
    </div>
  );
};

export default Card;
