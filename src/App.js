import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info"></section>
        <ul>
          {questions.map(({title,info}) => {
            return <SingleQuestion title={title} info={info} />;
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
