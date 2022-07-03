import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Home() {
    function getLogo() {
        return require('./assets/brush-fill.svg').default;
    }

    function navSearch() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Text>
                        <Image src={getLogo()}/>
                        Swish
                    </Navbar.Text>
                    <Nav className="me-auto navigating">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about-us" className="nav-link">About Us</Link>
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/products/new" className="nav-link">Create</Link>
                        <Navbar.Text>
                            {navSearch()}
                        </Navbar.Text>
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
