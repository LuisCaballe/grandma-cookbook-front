import { Ring } from "@uiball/loaders";
import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled className="loader">
      <div className="loader__container" aria-label="loading spinner">
        <Ring size={70} lineWeight={5} speed={2} color="white" />
      </div>
    </LoaderStyled>
  );
};

export default Loader;
