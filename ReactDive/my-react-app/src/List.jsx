

function List(props) {
    const category = props.category;
    const items = props.items;

    const listItems = items.map(item => <li key={item.id}>Name: {item.name} : &nbsp; <b>{item.age}</b></li>);
    return(
        <>
        <h3>{category}</h3>
        <ul>{listItems}</ul>
        </>
    );


}

export default List