class Contestant{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.answer = null;
        //this.submit = createButton('Submit');
    }

    /*display(){
        this.submit.position(425,300);

            this.submit.mousePressed(()=>{
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
              });
    }*/
    
    getCount(){
        var contestantCountRef = database.ref('contestantCount');

        contestantCountRef.on("value",(data)=>{
          contestantCount = data.val();
        })
    }
    
    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
    }
    
    update(){
        var contestantIndex = "contestants/contestant" + this.index;

        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
        });
    }

    static getContestantInfo(){
        var contestantInfoRef = database.ref('contestant');

        contestantInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}