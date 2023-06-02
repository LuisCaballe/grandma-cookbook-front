import { useAppSelector } from "../../store";

const RecipesPage = (): React.ReactElement => {
  const userName = useAppSelector((state) => state.user.name);

  return (
    <>
      <h1>{`${userName}'s recipes`}</h1>
    </>
  );
};

export default RecipesPage;
