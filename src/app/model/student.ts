export class Student {

    constructor(
        public name: string,
        public age: number
    ){
        
    }

    // copy(other: Student) {
    //     for (const field in other) {
    //         if (other.hasOwnProperty(field)) {
    //             this[field] = other[field];
    //         }
    //     }
    // }

    copy(other: Student){
        this.name = other.name;
        this.age = other.age;
    }
}
