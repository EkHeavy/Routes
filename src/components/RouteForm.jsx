import { useState } from "react";

function RouteForm({ buttonText }) {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [duration, setDuration] = useState("");
    const [complexity, setComplexity] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

return (
    <form onSubmit={(event) => event.preventDefault()}>
        <div>
            <label htmlFor="city">Город</label>
            <input
                id="city"
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Введите город"
                required
            />
        </div>

        <div>
            <label htmlFor="duration">Длительность</label>
            <input
                id="duration"
                type="text"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                placeholder="Например: 3 часа"
                required
            />
        </div>

        <div>
            <label htmlFor="complexity">Сложность</label>
            <select
                id="complexity"
                value={complexity}
                onChange={(event) => setComplexity(event.target.value)}
                required
            >
                <option value="">Выберите сложность</option>
                <option value="Легкая">Легкая</option>
                <option value="Средняя">Средняя</option>
                <option value="Сложная">Сложная</option>
            </select>
        </div>

        <div>
            <label htmlFor="description">Описание</label>
            <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Опишите маршрут"
                required
            />
        </div>

        <button type="submit">{buttonText}</button>
    </form>
);
}

export default RouteForm;