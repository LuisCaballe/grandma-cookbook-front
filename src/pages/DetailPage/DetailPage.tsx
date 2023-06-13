import Button from "../../components/Button/Button";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): React.ReactElement => {
  const recipe = {
    id: "647d068a5a615cd9e3388cc5",
    name: "Paella Valenciana",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1114233686947270749/1116128557203197972/paella-valenciana.webp",
    cookingTime: 60,
    difficulty: "Moderate",
    directions:
      "Clean and prepare the chicken and rabbit. Heat olive oil in a paella pan. Add the chicken and rabbit and cook until browned. Remove the chicken and rabbit from the pan and set aside. In the same pan, sauté the green beans, tomato, and garlic until they are softened. Add the rice and stir to coat it with the oil. Pour in the broth, saffron, and paprika. Bring to a boil and let it simmer for a few minutes. Arrange the chicken, rabbit, and vegetables on top of the rice. Cover the pan and let it cook on low heat until the rice is cooked and the liquid is absorbed. Remove from heat and let it rest for a few minutes. Serve the paella hot.",
    ingredients:
      "Rice, Chicken, Rabbit, Green beans, Tomato, Paprika, Saffron, Olive oil",
    user: "646fa0775a615cd9e3388ca9",
  };

  return (
    <>
      <DetailPageStyled>
        <h1 className="detail__heading">Recipe details</h1>
        <section className="detail">
          <Button
            className="detail__circle-button"
            icon="images/edit-btn.svg"
            altText="Edit button"
            width="48"
            height="48"
          />
          <img
            className="detail__image"
            src={recipe.imageUrl}
            alt={`${recipe.name} recipe`}
            width="260"
            height="280"
          />
          <div className="detail__text-container">
            <h2 className="detail__title">{recipe.name}</h2>
            <div>
              <span className="detail__text">Difficulty :</span>{" "}
              {recipe.difficulty}
            </div>
            <div>
              <span className="detail__text">Cooking time :</span>{" "}
              {recipe.cookingTime} minutes
            </div>
            <div>
              <span className="detail__text">Ingredients :</span>{" "}
              {recipe.ingredients}
            </div>
            <div>
              <span className="detail__text">Directions :</span>{" "}
              {recipe.directions}
            </div>
          </div>
        </section>
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
