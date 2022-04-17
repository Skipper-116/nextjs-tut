import { useSelector } from "react-redux";
import Layout from "../components/layout";
import CounterButton from "../components/counter";

function Counter(){
    const count = useSelector((state) => state.counter.value)

    return(
        <Layout>
            <span>{count}</span>
            <br/>
            <CounterButton name='Increment Value'/>
            <br/>
            <CounterButton name='Decrement Value'/>
            <br/>
            <CounterButton name='Increment by 2' step={2}/>
            <br/>
            <CounterButton name='Decrement by 2' step={2}/>
        </Layout>
    )
}

export default Counter;