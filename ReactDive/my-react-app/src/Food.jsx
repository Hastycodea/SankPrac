
function Food() {

    const food1 = 'Banana';
    const food2 = 'Watermelon';

    return(
        <ul>
            <li>Apple</li>
            <li>Mango</li>
            <li>Kiwi</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food