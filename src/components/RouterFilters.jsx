function RouteFilters({
    searchTerm,
    setSearchTerm,
    difficulty,
    setDifficulty
}) {
    return (
        <section className="route-filters" aria-labelledby="filters-title">
            <h2 id="filters-title">Поиск маршрутов</h2>

            <div className="filter-grid">
                <label className="search-field" htmlFor="search">
                    <span className="visually-hidden">Название города</span>
                    <span className="search-icon" aria-hidden="true" />
                    <input
                        id="search"
                        type="search"
                        placeholder="Введите название города"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </label>

                <label htmlFor="difficulty">
                    <span className="visually-hidden">Сложность маршрута</span>
                    <select
                        id="difficulty"
                        value={difficulty}
                        onChange={(event) => setDifficulty(event.target.value)}
                    >
                        <option value="">Все сложности</option>
                        <option value="Легкая">Легкая</option>
                        <option value="Средняя">Средняя</option>
                        <option value="Сложная">Сложная</option>
                    </select>
                </label>
            </div>
        </section>
    );
}


export default RouteFilters;
