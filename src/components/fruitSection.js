import { useSelector } from "react-redux";

function fruitSection(props) {

  // const noOfFruits = useSelector((state) => {
  //   return state.fruits.noOfFruits
  // });

  const noOfFruits = useSelector((state => state.fruits.noOfFruits));

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(buyFruit(1));
  }

  return (
    <div>
      <h2>No of Fruits</h2>
      <div> {noOfFruits} </div>

      <button onClick={handleClick}>Buy Fruit</button>
    </div>
  );
}

export default fruitSection;