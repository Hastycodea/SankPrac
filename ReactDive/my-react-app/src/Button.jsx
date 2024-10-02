

function Button() {

    let count = 0;

    const handleClick = (e) => {
        e.target.textContent = 'Yes you did';
        console.log(e);
    } 

    return (<button onClick={(e) => handleClick(e)}>CLICK ME MF</button>);
}

export default Button