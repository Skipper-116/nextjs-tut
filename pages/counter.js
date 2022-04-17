import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../state/counter/counterSlice";
import Layout from "../components/layout";

function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return(
        <Layout>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
            Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
            Decrement
            </button> 
        </Layout>
    )
}

export default Counter;