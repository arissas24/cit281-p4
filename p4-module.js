const {data} = require('./p4-data.js');


function getQuestions() {
    return data.map(item =>item.question);
}

function getAnswers() {
    return data.map(item => item.answer);
}

function getQuestionsAnswers() {
    return JSON.parse(JSON.stringify(data));
}

function getQuestion(number = "") {
if (number === "") {
    return {
        error: 'Question number must be an integer',
        question: '',
        number: ''
    };
}
const num = Number(number);
 if (!Number.isInteger(num)) {
    return {
        error: 'Question number must be an integer',
        question: '',
        number: ''
    };
 } else if (num < 1) {
    return {
    error: 'Question number must be >= 1',
    question: '',
    number: ''
};
} else if (num > data.length) {
    return {
        error: `Question number must be less than the number of questions (${data.length})`,
        question:'',
        number:''
    };
}
return {
    error: '',
    question: data[num-1].question,
    number: num
};
}


function getAnswer(number = "") {
if (number === "") {
    return {
        error: 'Answer number must be an integer',
        answer: '',
        number: ''
    };
}
const num = Number(number);
  if (!Number.isInteger(num)) {
    return {
        error: 'Answer number must be an integer',
        answer: '',
        number: ''
    };
 }else if (num < 1) {
return {
    error: 'Answer number must be >= 1',
    answer: '',
    number: ''
};
 }else if (num > data.length){
    return {
        error: `Answer number must be less than the number of questions (${data.length})`,
        answer: '',
        number: ''
    };
 }
    return {
        error: '',
        answer: data[num-1].answer,
        number: num
    };
}

function getQuestionAnswer(number = "") {
if (number === "") {
    return {
        error: 'Question number must be an integer',
        question: '',
        number: ''
    };
}
const num = Number(number);
 if (!Number.isInteger(num)) {
    return {
        error: 'Question number must be an integer',
        question: '',
        number: ''
    };
 }else if (num < 1) {
return {
    error: 'Question number must be >= 1',
    question: '',
    number: '',
};
 }else if (num > data.length){
    return {
        error: `Question number must be less than the number of questions (${data.length})`,
        question: '',
        number: ''
    };
 }
    return {
        error: '',
        question: data[num-1].question,
        number: num,
        answer: data[num-1].answer
    };
}

function addQuestionAnswer(info = {}) {
    if (!info.question) {
        return {
            error: 'Object question property required',
            message: '',
            number: -1
        };
    }
    if (!info.answer) {
        return {
            error: 'Object answer property required',
            message: '',
            number: -1
        };
    }
    const newEntry = {
        question: info.question,
        answer: info.answer
    };
    data.push(newEntry);

    return {
        error: '',
        message: 'Question added',
        number: data.length
    };
}







module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    addQuestionAnswer
};




/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit


// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}

// addQuestionAnswer()
if (testAdd) {
  testing(
    "addQuestionAnswer",
    { d: "()", f: addQuestionAnswer() },
    { d: "({})", f: addQuestionAnswer({}) },
    { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
    { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
    {
      d: '(question: "Q4", answer: "A4")',
      f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
    }
  );
}
