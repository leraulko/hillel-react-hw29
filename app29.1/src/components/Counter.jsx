import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, setStep } from '../store/counterSlice';
import './Counter.css';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const step = useSelector(state => state.counter.step);
  const dispatch = useDispatch();

  const handleStepChange = (event) => {
    const value = parseInt(event.target.value);
    dispatch(setStep(isNaN(value) ? 1 : value));
  };

  return (
    <div className='container'>
        <h2>Value: {count}</h2>
        <div className='counter-buttons'>
          <button type='button' onClick={() => dispatch(increment())}>+</button>
          <button type='button' onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
        <label>
          Step:&nbsp;
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
          />
        </label>
    </div>
  )
}
