import { makeAutoObservable } from "mobx";

class LessonModel{
    query = '';

    lessons = ''


    constructor(){
        makeAutoObservable(this)
    }
    setQuery = (val)=>{
        this.query = val;
    }
    setLesson = (val)=>{this.lessons = val;}
   
}
const lessonModel = new LessonModel();
export default lessonModel;