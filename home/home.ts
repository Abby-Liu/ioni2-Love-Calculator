import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    name1 = '';
    name2 = '';
    msg='';

    get score() {
        const letters = (this.name1 + this.name2).toLowerCase();
        let sum = 0;
        for(let i=0; i<letters.length; i++){
            sum += letters.charCodeAt(i);
        }
        var sumpercent = sum%101;
        if(this.name2.length>1){
        if(sumpercent>=50)
            this.msg = "你們好匹配呀～～～恭喜夫人賀喜老爺～";
        else if(sumpercent<50)
            this.msg = "嗯...你們關係不太好呀，再加油喔！";}
        return sum % 101;
    }

}
