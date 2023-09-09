import { Component } from '@angular/core';
import { MonkeytypeService } from './Services/monkeytype.service';

@Component({
  selector: 'app-monkeytype',
  templateUrl: './monkeytype.component.html',
  styleUrls: ['./monkeytype.component.css']
})

export class MonkeytypeComponent {

  constructor(private monkeytype : MonkeytypeService){}

  ngOnInit() : void{
      this.generateParagraph(); 
      
  }
  


  //#region Global Variable Declaration
  Paragraph : any;
  paraindex : number = 0;
  keyInput : string = "";
  // divSection : HTMLElement | null = null;
  //#endregion

  //#region get paragraph from service  
    randomNum : number = 0;
    counter : number = 0;
    public generateParagraph():any{
      console.log(this.monkeytype.getParagraph().subscribe(data =>{
        var Parray : any = data;
        this.randomNum = Math.round(Math.random() * (Parray.length-1)); 
        this.Paragraph = Parray[this.randomNum];     
        console.log( this.randomNum); 
        this.showelement();
      }));  
      
    }
  //#endregion
    showelement(){ 
      var div = document.getElementById('divpara');
      for(let i = 0;i<this.Paragraph.length;i++){
        let spantag = document.createElement('span');
        spantag.textContent = this.Paragraph[i]
        console.log(this.Paragraph);        
        div?.appendChild(spantag);       
      }  
  }


  onKey(event:any){
      console.log( ` Input Key ${event.key} and para text value is ${this.Paragraph[this.paraindex]}` ); 
      this.checkKey(event.key) == true ? console.log("correct") : console.log("wrong"); 
    }
   

    checkKey(value : string) : boolean{   
        //let divSection = document.getElementById('divpara');
        let SpanElements = document.querySelectorAll('span');               
        if(value == this.Paragraph[this.paraindex]){
          SpanElements[this.paraindex].style.color = "green"
          this.paraindex++;
          return true
        }
        else{
          SpanElements[this.paraindex].style.color = "red"          
          return false 
        }            
    }

}