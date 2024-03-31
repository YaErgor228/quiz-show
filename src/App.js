import './App.css';
import Game from './Game.jsx'
import {useState} from "react";
import Result from "./Result.jsx"

function App() {
  const questions = [ 
    { 
      title: "React - это … ?", 
      variants: [
        "библиотека", 
        "фреймворк", 
        "приложение"
      ], 
      correct: 0, 
    }, 
    { 
      title: "Компонент - это … ", 
      variants: [
        "приложение", 
        "часть приложения или страницы", 
        "то, что я не знаю что такое"
      ], 
      correct: 1, 
    }, 
    { 
      title: "Что такое JSX?", 
      variants: [ 
        "Это простой HTML", 
        "Это функция", 
        "Это тот же HTML, но с возможностью выполнять JS-код", 
      ], 
      correct: 2, 
    }, 
  ];
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  function onClickVariants(index) {
    console.log(step, index);
    setStep(step+1);
    if (index==question.correct) {
      setCorrect(correct+1);
    }
  }
  return (
    <div className="App">
      { (step !== questions.length) 
      ? (<Game question={question} onClickVariants={onClickVariants} questions={questions} step={step} />) 
      : (<Result questions={questions} correct={correct}/>)}
    </div>
  );
}

export default App;
