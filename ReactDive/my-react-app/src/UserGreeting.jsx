import PropTypes from 'prop-types'

function UserGreeting(props) {

    return(
        props.isLoggedIn ? <h2>Welcome home, {props.username}</h2> : <h2>Login to continue!</h2>
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'GUEST',
}

export default UserGreeting