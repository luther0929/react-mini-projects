import { useQuiz } from '../contexts/quizContext';
import { useEffect } from 'react';

function Options() {
  const { questions, index, answer, newAnswer, points } = useQuiz();
  const hasAnswered = answer !== null;
  const currentQuestion = questions[index];

  // useEffect(() => {
  //   const logPoints = () => {
  //     console.log(points);
  //   };
  //   logPoints();
  // }, [newAnswer]);

  return (
    <div className="options">
      {currentQuestion.options.map((option, index) => (
        <button
          className={`btn btn-option
                        ${index === answer ? 'answer' : ''}
                        ${
                          hasAnswered
                            ? index === currentQuestion.correctOption
                              ? 'correct'
                              : 'wrong'
                            : ''
                        }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => newAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
