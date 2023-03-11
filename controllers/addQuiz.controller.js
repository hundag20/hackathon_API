const { Question } = require("../models/Question.model");
const { Quiz } = require("../models/Quiz.model");

const addQuiz = async (req, res, next) => {
  try {
    const { questions } = req.body;
    if (!questions || questions.lentgth < 4)
      throw { status: 400, msg: "missing info in request" };
    //validate correctness of data types

    //save questions
    const qids = [];
    for (let el of questions) {
      const Q = await Question.query().insert(el);
      qids.push(Q.id);
    }
    //save quiz
    await Quiz.query().insert({
      q1_id: qids[0],
      q2_id: qids[1],
      q3_id: qids[2],
      q4_id: qids[3],
    });

    res.status(200).send();
  } catch (err) {
    next({ currentTask: "addQuiz", err });
  }
};

module.exports = addQuiz;
