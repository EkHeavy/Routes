function AddRoutePage() {
    return (
        <main>
            <h1>Добавить маршрут</h1>

            <form>
                <div>
                    <label htmlFor="name">
                        Название маршрута
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Введите название"/>
                </div>

                <div>
                    <label htmlFor="city">
                        Город
                    </label>

                    <input
                        id="city"
                        type="text"
                        placeholder="Введите город"/></div>

                <div> <label htmlFor="duration">
                        Длительность </label>

                    <input id="duration"
                        type="text"
                        placeholder="Например: 3 часа"/></div>

                <div>
                    <label htmlFor="difficulty">
                        Сложность
                    </label>

                    <select id="difficulty">
                        <option value="">Выберите сложность</option>
                        <option value="easy">Легкая</option>
                        <option value="medium">Средняя</option>
                        <option value="hard">Сложная</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="description">
                        Описание
                    </label>

                    <textarea
                        id="description"
                        placeholder="Введите описание маршрута"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="image">
                        Фотография
                    </label>

                    <input
                        id="image"
                        type="text"
                        placeholder="Ссылка на фотографию"
                    /></div>

                <button type="submit">
                    Добавить маршрут
                </button>
            </form>
        </main>
    )
}

export default AddRoutePage