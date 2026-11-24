import { Link, useParams } from "react-router-dom";


function RoutePage({ routes, favorites, toggleFavorite }) {
    const { id } = useParams();
    const route = routes.find((item) => String(item.id) === id);

    if (!route) {
        return (
            <main className="page route-detail-page">
                <Link className="back-link" to="/routes"><span>←</span> К маршрутам</Link>
                <div className="empty-state">
                    <h1>Маршрут не найден</h1>
                    <p>Возможно, он был удален или еще не успел загрузиться.</p>
                </div>
            </main>
        );
    }

    const isFavorite = favorites.includes(route.id);

    return (
        <main className="page route-detail-page">
            <Link className="back-link" to="/routes"><span>←</span> К маршрутам</Link>

            <article className="route-detail-card">
                <div className="route-detail-hero">
                    <span>{route.city}</span>
                </div>

                <div className="route-detail-content">
                    <span className="eyebrow">Подробности маршрута</span>
                    <h1>{route.name}</h1>

                    <div className="detail-meta">
                        <p><span aria-hidden="true">⌖</span><span><strong>Город</strong>{route.city}</span></p>
                        <p><span aria-hidden="true">◷</span><span><strong>Длительность</strong>{route.duration}</span></p>
                        <p><span aria-hidden="true">△</span><span><strong>Сложность</strong>{route.complexity}</span></p>
                    </div>

                    <h2>Описание</h2>
                    <p className="detail-description">{route.description}</p>

                    <button
                        className="button button-primary favorite-cta"
                        type="button"
                        aria-pressed={isFavorite}
                        onClick={() => toggleFavorite(route.id)}
                    >
                        <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
                        {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
                    </button>
                </div>
            </article>
        </main>
    );
}


export default RoutePage;
