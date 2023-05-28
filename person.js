export class Person {

    #birthDate = new Date;
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthDate = new Date(birthDate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$1/$2/$3"));
        // приватное свойство даты рождения из формата мм-дд-гггг в мм/дд/гггг
    }

    get birthday() { // геттер для чтения приватного свойства #birthDate
        return this.#birthDate;
    }

    get getFullName() { // геттер для получения полного имени
        return this.firstName + ' ' + this.lastName;
    }

    get getAge() { //геттер для получения возраста
        const today = new Date();
        const birthDate = this.birthday;
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        let ageString = age.toString();
        const lastChar = ageString.charAt(ageString.length - 1);
        if (lastChar === '1') {
            ageString += ' год';
        } else if (lastChar === '2' || lastChar === '3' || lastChar === '4') {
            ageString += ' года';
        } else {
            ageString += ' лет';
        }
        return ageString;
    }
}
