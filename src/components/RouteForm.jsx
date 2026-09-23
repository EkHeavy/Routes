import { useState } from "react";

function RouteForm({ buttonText }) {

    const [name, setName] = useState("");
    //TODO: useState.

    
    return (
        <form>
            <button type="submit">{buttonText}</button>
        </form>
    )
}

export default RouteForm