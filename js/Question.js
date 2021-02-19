class Question{
    constructor(){
        this.title = createElement('h2');
        this.question = createElement('h2');
        this.answer1 = createElement('h2');
        this.answer2 = createElement('h2');
        this.answer3 = createElement('h2');
        this.answer4 = createElement('h2');

        this.contestantName = createInput("Enter Your Name Here");
        this.contestantAnswer = createInput("Enter Your Answer Here");

        this.submit = createButton('Submit');
    }

    hide(){
        this.title.hide();
        this.question.hide();
        this.answer1.hide();
        this.answer2.hide();
        this.answer3.hide();
        this.answer4.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(425,0);

        this.question.html("Question: What starts and ends with the letter 'E', but has only one letter?");
        this.question.position(70,40);

        this.answer1.html("1: Everyone");
        this.answer1.position(150,100);

        this.answer2.html("2: Envelope");
        this.answer2.position(150,130);

        this.answer3.html("3: Estimate");
        this.answer3.position(150,160);

        this.answer4.html("4: Example");
        this.answer4.position(150,190);

        this.contestantName.position(325,250);
        this.contestantAnswer.position(525,250);

        this.submit.position(425,300);

            /*this.submit.mousePressed(()=>{
                this.title.hide();
                this.contestantName.hide();
                this.contestantAnswer.hide();
                this.submit.hide();

                contestant.name = this.contestantName.value();
                contestantCount+=1;
                contestant.index = contestantCount;
                contestant.update();
                player.updateCount(playerCount);
                
                contestant.answer = this.contestantAnswer.value();
                contestant.update();
              });*/
    }
}