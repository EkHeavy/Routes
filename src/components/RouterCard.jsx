import { Link } from "react-router-dom";


function RouterCard({
    id,
    name,
    city,
    duration,
    complexity,
    description,
    isFavorite,
    toggleFavorite,
    deleteRoute
}) {
    const accentClass = complexity === "Сложная"
        ? "route-card-accent-mountain"
        : "route-card-accent-city";

    const difficultyClass = complexity === "Сложная"
        ? "difficulty-hard"
        : "difficulty-easy";

    return (
        <article className="route-card">
            <div className={`route-card-accent ${accentClass}`} aria-hidden="true" />

            <div className="route-card-content">
                <span className={`difficulty-badge ${difficultyClass}`}>
                    {complexity}
                </span>

                <h3>{name}</h3>

                <div className="route-meta">
                    <p><span aria-hidden="true">⌖</span><strong>{city}</strong></p>
                    <p><span aria-hidden="true">◷</span>{duration}</p>
                </div>

                <p className="route-summary">{description}</p>

                <div className="card-actions">
                    <Link className="button button-secondary" to={`/routes/${id}`}>
                        Подробнее
                    </Link>

                    <button
                        className="favorite-button"
                        type="button"
                        aria-pressed={isFavorite}
                        onClick={() => toggleFavorite(id)}
                    >
                        <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
                        {isFavorite ? "В избранном" : "В избранное"}
                    </button>

                    <button
                        className="delete-button"
                        type="button"
                        onClick={() => deleteRoute(id)}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </article>
    );
}


export default RouterCard;
