import Card from 'components/Card/Card';
import './Column.scss';
import { mapOrder } from 'utils/sorts';

function Column({ column }) {
    const { title } = column;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');
    return (
        <div className="col">
            <header>{title}</header>
            <ul className="card-list">
                {cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </ul>
            <footer>Add another card</footer>
        </div>
    );
}

export default Column;
