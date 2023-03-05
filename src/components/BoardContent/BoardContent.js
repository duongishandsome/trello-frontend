import { useState, useEffect } from 'react';
import _ from 'lodash';
import Column from 'components/Column/Column';
import './BoardContent.scss';

import { mapOrder } from 'utils/sorts';
import { initialData } from 'actions/initialData';

function BoardContent() {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState({});

    useEffect(() => {
        const boardDB = initialData.boards.find((board) => board.id === 'board-1');
        if (boardDB) {
            setBoard(boardDB);
            setColumns(mapOrder(boardDB.columns, boardDB.columnOrder, 'id'));
        }
    }, []);

    if (_.isEmpty(board)) {
        return <div className="not-found">Board not found</div>;
    }
    return (
        <div className="board-content">
            {columns.map((column, index) => (
                <Column key={index} column={column} />
            ))}
        </div>
    );
}

export default BoardContent;
