import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Company from "./Company";
import NavSearch from "./NavSearch";

function Home() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Text>
                        <Company />
                    </Navbar.Text>
                    <Nav className="me-auto navigating">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about-us" className="nav-link">About Us</Link>
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/products/new" className="nav-link">Create</Link>
                        <NavSearch />
                    </Nav>
                </Container>
            </Navbar>
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
        </>
    )
}

export default Home;
