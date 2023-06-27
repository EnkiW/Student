let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})
class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.G = [];
        this.A = [];
    }

    Age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    Grade(grade) {
        this.G.push(grade);
    }

    GAC() {
        if (this.G.length === 0) {
            return 0;
        }

        const sum = this.G.reduce((total, grade) => total + grade, 0);
        return sum / this.G.length;
    }

    present() {
        if (this.A.length < 25) {
            this.A.push(true);
        }
    }

    AB() {
        if (this.A.length < 25) {
            this.A.push(false);
        }
    }

    Result() {
        const GradeA = this.GAC();
        const AR = this.A.filter((AD) => AD).length / this.A.length;

        if (GradeA > 90 && AR > 0.9) {
            return "Молодець!";
        } else if (GradeA > 90 || AR > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Аліна", "Луца", 2000);
const student2 = new Student("Марія", "Мілна", 1999);
const student3 = new Student("Олександр", "Конр", 2001);

student1.Grade(95);
student1.Grade(87);
student1.Grade(92);
student2.Grade(88);
student2.Grade(94);
student2.Grade(90);
student3.Grade(80);
student3.Grade(85);
student3.Grade(78);

student1.present();
student1.present();
student1.AB();
console.log("student 1:");
console.log("Вік: " + student1.Age());
console.log("Бал: " + student1.GAC());
console.log("Відвідування: " + student1.A);
console.log("Висновок: " + student1.Result());

console.log("---------next----------");

student2.present();
student2.present();
student2.present();
console.log("student 2:");
console.log("Вік: " + student2.Age());
console.log("Бал: " + student2.GAC());
console.log("Відвідування: " + student2.A);
console.log("Висновок: " + student2.Result());

console.log("---------next----------");

student3.AB();
student3.AB();
student3.AB();
console.log("student 3:");
console.log("Вік: " + student3.Age());
console.log("Бал: " + student3.GAC());
console.log("Відвідування: " + student3.A);
console.log("Висновок: " + student3.Result());
