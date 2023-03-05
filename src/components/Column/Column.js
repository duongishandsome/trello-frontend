import Task from 'components/Task/Task';
import './Column.scss';

function Column() {
    return (
        <div className="col">
            <header>Bastar</header>
            <ul className="task-list">
                <Task />
                <li className="task-item">Learning something here</li>
                <li className="task-item">Learning something here</li>
            </ul>
            <footer>Add another card</footer>
        </div>
    );
}

export default Column;
