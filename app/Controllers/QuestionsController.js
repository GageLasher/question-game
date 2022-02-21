import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuestions() {
    let template = ""
    ProxyState.questions.forEach(q => template += q.Template)
    document.getElementById("questions").innerHTML = template
}

export class QuestionsController {
    constructor() {
        ProxyState.on("questions", _drawQuestions)
        _drawQuestions()
        this.getQuestions()
    }
async getQuestions() {
    try {
        await questionsService.getQuestions()
    } catch (error) {
        console.error(error);
        Pop.toast(error.message, "error")
    }
}
    guess(answer) {
        // console.log(answer);
        questionsService.guess(answer)
    }
}