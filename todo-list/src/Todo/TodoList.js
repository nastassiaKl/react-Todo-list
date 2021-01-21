import React from 'react'
import PropTypes, { func } from 'prop-types';

import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map( (todo, index) => {
                return <TodoItem 
                index={index} 
                todo={todo} 
                key={todo.id} 
                onChange={props.onToggle}
                />
            })}
        </ul>
    )
}

//валидация входящих параметров
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: func.isRequired
}

export default TodoList