import { useState } from "react";

import RouteFilters from "../components/RouterFilters.jsx";
import RouterCard from "../components/RouterCard.jsx";


function RoutesPage({
    routes,
    deleteRoute,
    apiStatus,
    favorites,
    toggleFavorite
}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [difficulty, setDifficulty] = useState("");

    const filteredRoutes = routes.filter((route) => {
        const matchesSearch = route.city
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase());

        const matchesDifficulty =
            difficulty === "" || route.complexity === difficulty;

        return matchesSearch && matchesDifficulty;
    });

    return (
        <main className="page">
            <header className="page-header">
                <span className="eyebrow">Выберите направление</span>
                <h1>Туристические маршруты</h1>
                <p>Найдите подходящий город и уровень сложности.</p>
            </header>

            <div className={`api-status api-status-${apiStatus}`} role="status">
                {apiStatus === "loading" && "Загружаем дополнительные маршруты…"}
                {apiStatus === "error" && "API недоступен — показаны сохраненные маршруты."}
                {apiStatus === "success" && "Дополнительные маршруты успешно загружены."}
            </div>

            <RouteFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
            />

            <section aria-labelledby="routes-title">
                <div className="section-heading">
                    <h2 id="routes-title">Маршруты</h2>
                    <span>{filteredRoutes.length} найдено</span>
                </div>

                {filteredRoutes.length > 0 ? (
                    <div className="route-grid">
                        {filteredRoutes.map((route) => (
                            <RouterCard
                                key={route.id}
                                {...route}
                                isFavorite={favorites.includes(route.id)}
                                toggleFavorite={toggleFavorite}
                                deleteRoute={deleteRoute}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="empty-state">Маршруты не найдены. Измените параметры поиска.</p>
                )}
            </section>
        </main>
    );
}


export default RoutesPage;
