import "./styles.css";

import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Counter: {counter} </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </>
  );
}
