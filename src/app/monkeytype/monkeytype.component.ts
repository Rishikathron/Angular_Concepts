import { Component } from '@angular/core';
import { MonkeytypeService } from './Services/monkeytype.service';
import { HostListener } from '@angular/core';
import { Subject } from 'rxjs';

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
 
  // onKeyDown(event: any): void {
  //   // Emit the event to an Observable for components to subscribe to
  //   console.log(event);
    
  // }


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

  @HostListener('document:keydown', ['$event'])
  onKey(event:any){
      console.log(event);

      console.log( `  Input Key ${event.key} and para text value is ${this.Paragraph[this.paraindex]}` ); 
      this.checkKey(event.key);
    }
   

    checkKey(value : string)  {   
        //let divSection = document.getElementById('divpara');
        let SpanElements = document.querySelectorAll('span');  
        console.log(value);
        
        if(value == "Backspace" ){
          SpanElements[this.paraindex].style.color = "black";
          //return true
        } 
        else if(((value >="a" && value <= "z" ) || (value >= "A" && value <= "Z") || value == " ") && value.length == 1){
          console.log("Value is "+value + " and para value is "+this.Paragraph[this.paraindex]);
          
          if(value == this.Paragraph[this.paraindex]){
            SpanElements[this.paraindex].style.color = "green"
            this.paraindex++;
            //return true
          }
          else{
            SpanElements[this.paraindex].style.color = "red"          
           // return false 
          }              
        }            
       // return true      
    }

}