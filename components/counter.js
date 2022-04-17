import { decrement, increment, incrementByAmount,decrementByAmount } from "../state/counter/counterSlice";
import { useDispatch } from "react-redux";

function CounterButton({name, step}){
    const dispatch = useDispatch();
    let anonymous;
    let simple = true;
    switch(name){
        case 'Increment Value':
            anonymous = increment
            break;
        case 'Decrement Value':
            anonymous = decrement
            break;
        case name.match(/Decrement/i)?.input:
            simple = false
            anonymous = decrementByAmount
            break;
        case name.match(/Increment/i)?.input:
            simple = false
            anonymous = incrementByAmount
            break;
    }
    return(
        <button
            aria-label="Increment value"
            onClick={() => dispatch(simple ? anonymous() : anonymous(step))}
        >
            {name}
        </button>
    )
}

export default CounterButton;