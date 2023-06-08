import React, {useState, useRef} from 'react'
import Square from './Square'
import './board.css';
const Board = () => {
    const [data, setData] = useState(Array(9).fill(null));
    const handleClick = (e) => {
        console.dir(e.target)
        console.log(data)
    }
  return (
    <div className="board-container" onClick={handleClick}>
        <div className="board-row" >
            <Square value={data[0]} id={0} name="1" />
            <Square value={data[1]} id={"1"} />
            <Square value={data[2]} id={2} />
        </div>
        <div className="board-row">
            <Square value={data[3]} id={3} />
            <Square value={data[4]} id={4} />
            <Square value={data[5]} id={5} />
        </div>
        <div className="board-row">
            <Square value={data[6]} id={6} />
            <Square value={data[7]} id={7} />
            <Square value={data[8]} id={8} />
        </div>
    </div>
  )
}

export default Board