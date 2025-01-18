import Buttons from '../sharedComponents/Button';

function Counter(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Buttons/>
    </div>
  );
}

export default Counter
