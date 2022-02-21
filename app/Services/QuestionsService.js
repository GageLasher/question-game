import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";

class QuestionsService {
   async getQuestions() {
        const response = await axios.get("https://opentdb.com/api.php?amount=10&category=17")
        console.log(response.data);
        let questions = response.data.results.map(q => new Question(q))
        ProxyState.questions = questions
        console.log(questions);
    }
    guess(answer) {

       let correctAnswer = ProxyState.questions.find(q => q.correct_answer == answer)
       console.log(correctAnswer);
       if(correctAnswer?.correct_answer == answer) {
           Pop.toast("You are Right!")
       } else {
           Pop.toast("WRONG!")
           
       }
    }
}

export const questionsService = new QuestionsService()