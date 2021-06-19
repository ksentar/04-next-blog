import { Board } from "../components/Board";
import { Row } from "../components/Row";
import { boards } from "../data/boards";
const HomePage = () => {
  return (
    <div>
      {boards.map((i, index) => {
        return <Board key={index} {...i} />;
      })}
    </div>
  );
};

export default HomePage;
