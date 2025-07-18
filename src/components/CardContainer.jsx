import "../styles/CardContainer.css";
import Card from "./Card";

const CardContainer = ({ page }) => {
  const movies = page?.data.map((data) => {
    return <Card movie={data} key={data.id} />;
  });
  return <div className="card-container">{movies}</div>;
};

export default CardContainer;
