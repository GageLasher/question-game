export class Question {
    constructor(data){
        this.question = data.question,
        this.category = data.category,
        this.difficulty = data.difficulty,
        this.type = data.type,
        this.correct_answer = data.correct_answer,
        this.incorrect_answers = data.incorrect_answers
    }

    get Template() {
        return `
        <div class="col-12">
        <div id="questions" class="card">
        <h4>${this.question}</h4>
        <ul>
          
            ${this.Answers}
          
        </ul>
        </div>
      </div>
        `
    }

    get Answers() {
        // answers.push(this.correct_answer)
        // answers.push(this.incorrect_answers)
        let answers = [this.correct_answer, ...this.incorrect_answers]
        const randomAnswers = answers.sort((a,b) => 0.5 - Math.random())
        let template = ""
        randomAnswers.forEach(a => template += `<li onclick="app.questionsController.guess('${a}')">${a}</li>`)
        return template
    }
}