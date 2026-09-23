import { useState } from "react";

function RouteFilters({
    searchTerm,
    setSearchTerm,
    difficulty,
    setDifficulty
}) {
    return (
        <section className="route-filters">
            <h2>Поиск маршрутов</h2>

            <div>
                <label htmlFor="search">
                    Название маршрута
                </label>

                <input
                    id="search"
                    type="text"
                    placeholder="Введите название маршрута"
                    value={searchTerm}
                    onChange={(event) =>
                        setSearchTerm(event.target.value)
                    }
                />
            </div>

            <div>
                <label htmlFor="difficulty">
                    Сложность маршрута
                </label>

                <select
                    id="difficulty"
                    value={difficulty}
                    onChange={(event) =>
                        setDifficulty(event.target.value)
                    }
                >
                    <option value="">Все сложности</option>
                    <option value="Легкая">Легкая</option>
                    <option value="Средняя">Средняя</option>
                    <option value="Сложная">Сложная</option>
                </select>
            </div>
        </section>
    );
}

export default RouteFilters;