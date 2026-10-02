import RouteImage from "./RouteImage";
import { Link } from "react-router-dom";

function RouterCard({
    id,
    name,
    city,
    duration,
    complexity,
    description,
    image,
    deleteRoute
}) {
    return (
        <div className="card">

            {image && (
                <RouteImage
                    src={image}
                    alt={`Туристический маршрут: ${name}`}
                />
            )}

            <h2>{name}</h2>

            <h3>
                Город: {city}
            </h3>

            <p>
                Длительность: {duration}
            </p>

            <p>
                Сложность: {complexity}
            </p>

            <p>
                Описание: {description}
            </p>

            <Link to={`/routes/${id}`}>
                Подробнее
            </Link>

            <br />
            <br />

            <button
                type="button"
                onClick={() => deleteRoute(id)}
            >
                Удалить маршрут
            </button>

        </div>
    );
}

export default RouterCard;