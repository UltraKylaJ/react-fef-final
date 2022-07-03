import { Container, Image, Stack } from "react-bootstrap";


function AboutUs() {
    function photo() {
        return require('https://unsplash.com/photos/jjhvyxm34nY').default;
    }

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <Container>
                    <Image src={photo()} />
                </Container>
                <Container className="about-text">
                    <h3>Welcome to our Company!</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Container>
            </Stack>
        </>
    )
}

export default AboutUs;