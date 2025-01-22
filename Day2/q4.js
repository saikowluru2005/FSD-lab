function Student(name, grade) {
    this.name = name;
    this.grade = grade;
}

Student.prototype.study = function () {
    console.log(`${this.name} is studying.`);
};

Student.prototype.getGrade = function () {
    return this.grade;
};

let student1 = new Student("Alice", "A");
student1.study();
console.log(student1.getGrade());
