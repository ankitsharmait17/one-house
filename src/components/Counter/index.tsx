import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from '../../store/actionTypes';

interface CounterProps {
    counter: number;
    increment: any;
    decrement: any;
}

const Counter: React.FC<CounterProps> = ({ counter, increment, decrement }) => {
    return (
        <div>
            <p className='counter_title'>Counter: {counter}</p>
            <button className='button' onClick={increment}>
                Increment
            </button>
            <button className='button' onClick={decrement}>
                Decrement
            </button>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch: any) => ({
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
