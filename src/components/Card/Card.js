import './Card.scss';

function Card({ card }) {
    const { cover, title } = card;
    return (
        <li className="card-item">
            {cover && <img src={cover} alt="anh" className="card-cover" />}
            {title}
        </li>
    );
}

export default Card;
