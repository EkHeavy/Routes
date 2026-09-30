import RouteImage from "./RouteImage";
import { Link } from "react-router-dom";

function RouterCard({
    name,
    city,
    duration,
    complexity,
    description,
    image
}) {
    return (
        <div className="card">
            {image && (
                <RouteImage
                src={image}
                alt={`Туристический маршрут: ${name}`}
                />
            )}

            <Link to="/add-route" className="button"> Добавить маршрут </Link>

            <h2>{name}</h2>
            <h3>Город: {city}</h3>
            <h4>Длительность: {duration}</h4>
            <h5>Сложность: {complexity}</h5>
            <p>Описание: {description}</p>

            <button type="button">
                Добавить в избранное
            </button>
        </div>
    );
}

export default RouterCard;