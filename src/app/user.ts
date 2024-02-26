export class User {
    id : number;
    name : string;
    email : string;
    data : Question |null;
    constructor(id :number,name:string,email:string,data:Question){
        this.name=name;
        this.id=id;
        this.email=email;
        this.data=data;
    }
}

export class Question {
    question : string;
    answer : string;

    constructor(question:string,answer:string){
        this.question=question;
        this.answer=answer;
    }
}



export const userList:User[] = [
    {
        "id":1,
        "name":"Surya",
        "email":"surya@gmail.com",
        "data" : {
            "question":"What is a NullPointerException, and how do I fix it?",
            "answer":"A NullPointerException means that one of the variables you are passing is null, but the code tries to use it like it is not."
        }
    },
    {
        "id":2,
        "name":"Regina",
        "email":"regina@gmail.com",
        "data" : null
    },
    {
        "id":3,
        "name":"John",
        "email":"john@gmail.com",
        "data" : {
            "question":"How to catch the Arithmetic Exception?",
            "answer":"Arithmetic Exception is a built-in-class present in java.lang package. This exception occurs when an integer is divided by zero."
        }
    },
    {
        "id":4,
        "name":"Keerthana",
        "email":"keerthana@gmail.com",
        "data" : {
            "question":"How do I resolve ClassNotFoundException?",
            "answer":"classNotFoundException in java is a subclass of java.lang.Exception and Comes when JVM tries to load a particular class and doesn't found the requested class in classpath"
        }
    },
];