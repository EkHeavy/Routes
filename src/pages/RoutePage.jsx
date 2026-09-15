function RoutesPage() {
    return (
        <main>
            <h1>Туристические маршруты</h1>

            <section>
                <h2>Поиск маршрутов</h2>

                <input
                    type="text"
                    placeholder="Введите название маршрута"
                />

                <select>
                    <option value="">Все сложности</option>
                    <option value="easy">Легкая</option>
                    <option value="medium">Средняя</option>
                    <option value="hard">Сложная</option>
                </select>
            </section>

            <section>
                <h2>Маршруты</h2>

                <article>
                    <h3>Прогулка по старому городу</h3>

                    <p>
                        <strong>Город:</strong> Амстердам
                    </p>

                    <p>
                        <strong>Длительность:</strong> 3 часа
                    </p>

                    <p>
                        <strong>Сложность:</strong> Легкая
                    </p>

                    <p>
                        Пеший туристический маршрут по исторической
                        части города.
                    </p>

                    <a href="/routes/1">
                        Подробнее
                    </a>

                    <button type="button">
                        В избранное
                    </button>
                </article>

                <article>
                    <h3>Горный маршрут</h3>

                    <p>
                        <strong>Город:</strong> Инсбрук
                    </p>

                    <p>
                        <strong>Длительность:</strong> 6 часов
                    </p>

                    <p>
                        <strong>Сложность:</strong> Сложная
                    </p>

                    <p>
                        Маршрут по горной местности с красивыми
                        природными видами.
                    </p>

                    <a href="/routes/2">
                        Подробнее
                    </a>

                    <button type="button">
                        В избранное
                    </button>
                </article>
            </section>
        </main>
    )
}

export default RoutesPage