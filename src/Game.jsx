import "./Game.css"


function Game(props) {
    const percentage = Math.round(props.step / props.questions.length * 100);
    return (
        <div>
                <div className = "progressLine">
                    <div className = "progressLine__inner"  style={{ width:`${percentage}%` }}>
                    </div>
                </div>
            <h1>{props.question.title}</h1>
            <ul>
                {props.question.variants.map((text, index) => (
                    <li onClick={() => props.onClickVariants(index)}>{text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Game