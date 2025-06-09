const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer, addQuestionAnswer } = require("./p4-module");
const express = require('express');
const app = express();
const listenPort = 8080;
const listenIP = '127.0.0.1';


app.use(express.json());

// GET /
app.get ('/cit/question', (req, res) => {
    const questions = getQuestions();
    res.status(200)
        .type('application/json')
        .send({
            error:'',
            statusCode: 200,
            questions: questions
        });
});

app.get ('/cit/answer', (req, res) => {
    const answers = getAnswers();
    res.status(200)
        .type('application/json')
        .send({
            error:'',
            statusCode: 200,
            answers: answers
        });
});

app.get ('/cit/questionanswer', (req, res) => {
    const questionAnswers = getQuestionsAnswers();
    res.status(200)
        .type('application/json')
        .send({
            error:'',
            statusCode: 200,
            questions_answers: questionAnswers
        });
});

app.get ('/cit/question/:number', (req, res) => {
    const number = req.params.number;
    const question = getQuestion(number);
    res.status(200)
        .type('application/json')
        .send({
            error: question.error,
            statusCode: 200,
            question: question.question,
            number: question.number
        });
});

app.get ('/cit/answer/:number', (req, res) => {
    const number = req.params.number;
    const answer = getAnswer(number);
    res.status(200)
        .type('application/json')
        .send({
            error: answer.error,
            statusCode: 200,
            answer: answer.answer,
            number: answer.number
        });
});

app.get ('/cit/questionanswer/:number', (req, res) => {
    const number = req.params.number;
    const questionAnswer = getQuestionAnswer(number);
    res.status(200)
        .type('application/json')
        .send({
            error: questionAnswer.error,
            statusCode: 200,
            question: questionAnswer.question,
            answer: questionAnswer.answer,
            number: questionAnswer.number
        });
});

// POST /
app.post ('/cit/question', (req, res) => {
    const { question, answer} = req.body;
    const result = addQuestionAnswer({question, answer});
    const status = result.error ? 400 : 201;
    res.status(status)
        .type('application/json')
        .send({
            error: result.error,
            statusCode: status,
            number: result.number
        });

});

// Unmatched route handler
app.use ((req, res) => {
    res.status(404)
        .type('application/json')
        .send({
            error: 'Route not found',
            statusCode: 404
        });
});


app.listen(listenPort, listenIP, () => {
  console.log(`Server running at http://${listenIP}:${listenPort}`);
}); 