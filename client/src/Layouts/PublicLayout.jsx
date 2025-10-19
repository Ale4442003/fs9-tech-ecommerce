import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PublicLayout

// Navbar → resta uguale
// Contenuto → Home → Login → Register → ...(è l'unica parte che cambia) → outlet
// Footer → resta uguale