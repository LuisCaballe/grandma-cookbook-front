import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <section className="not-found-container">
        <span className="not-found-container__text">Oops!</span>
        <span className="not-found-container__number">404</span>
        <span className="not-found-container__text">Page not found</span>
        <img
          src="images/draw.webp"
          alt="Illustration of cooking ingredients"
          width="260"
          height="135"
          className="not-found-container__image"
        />
      </section>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
