import { Outlet } from "react-router-dom";
import { Header } from "../../Header/header";

export const DefaultLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}