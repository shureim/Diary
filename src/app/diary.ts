export class Diary {
  public showDescription: boolean;
  constructor(public name:string,  public description:string, public completeDate:Date){
    this.showDescription=true
  }
}
