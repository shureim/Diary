import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diary =[
    new Diary("Monday","Doing JavaScript practice",new Date(2018,7,12)),
    new Diary("Tuesday","listening to songs",new Date(2018,7,13)),
    new Diary("Wednesday", "Dancing", new Date(2018,7,14)),
    new Diary("Thursday", "Video recording", new Date(2018,7,15)),
    new Diary("Friday", "Photo taking", new Date(2018,7,16))
  ]


  addnewDiary(diary){
    let diaryLength = this.diary.length;
    diary.id=diaryLength + 1;
    diary.completeDate = new Date(diary.completeDate)
    this.diary.push(diary)
  }
  deleteDiary(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`You know what might happen if you delete ${this.diary[index].name}`)
      
      if(toDelete){
        this.diary.splice(index, 1)
      }
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
