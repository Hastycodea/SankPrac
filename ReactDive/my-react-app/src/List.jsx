import PropTypes from 'prop-types'

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

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, age: PropTypes.number})),
}

List.defaultProps = {
    category : 'Category',
    items : [],
}



export default List