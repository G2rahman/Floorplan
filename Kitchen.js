import Oven from './Oven';
import Sink from './Sink';

function Kitchen() {
  return (
    <div className="Kitchen">
      <Oven />
      <Sink />
      <Kitchen />
    </div>
  );
}

export default Kitchen;
