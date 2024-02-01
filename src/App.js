import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./slice";

const App = () => {
  // useDispatch is used to handle the functions which are created in the slice.
  const dispatch = useDispatch();
  // useSelector is used to select the data from the store
  const productSelector = useSelector((state) => state.productStore);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (productSelector.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{productSelector.message}</h1>
        <ul>
          {productSelector.productItems.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
