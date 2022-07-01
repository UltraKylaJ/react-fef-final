

function Welcome(props) {
    const { id } = props;
    return (
        <>
            <h1>Welcome to Company!</h1>
            <span>
                {id} {id} {id}
            </span>
        </>
    )
}

export default Welcome;