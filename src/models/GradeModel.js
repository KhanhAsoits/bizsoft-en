import {makeAutoObservable} from "mobx";

class GradeModel {

    grades = []
    query = ''

    constructor() {
        makeAutoObservable(this)

    }

    setQuery = (query) => {
        this.query = query;
    }
    setGrades = (grades) => {
        this.grades = grades;
    }

}

const gradeModel = new GradeModel();
export default gradeModel