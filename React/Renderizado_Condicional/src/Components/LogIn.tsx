import { useState } from "react";

export default function LogIn() {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogIn = () => {
        setLoggedIn(true);
    }

    const handleLogOut = () => {
        setLoggedIn(false);
    }

    if (loggedIn) {
        return (
            <>
                <h2 className="loggedInText">Esta página solo puedo verla porque estoy logueado</h2>

                <button onClick={handleLogOut} className="loggedInButton">Cerrar sesión</button>
            </>
        );
    } else {
        return (
            <>
                <h2 className="loggedOutText">Inicia sesión para ver contenido privado</h2>

                <button onClick={handleLogIn} className="loggedOutButton">Inicar sesión</button>
            </>
        );
    }
}