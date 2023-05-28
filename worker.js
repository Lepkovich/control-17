import {Person} from "./person.js";

export class Worker extends Person {
    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
    }


    get rate() { // геттер для чтения приватного свойства ставки за день работы
        return this.#rate;
    }

    set rate(value) { // сеттер для изменения приватного свойства ставки за день работы
        if (value >= 1000) {
            this.#rate = value;
        } else {
            console.log('Ставка меньше 1000');
        }
    }

    get days() { // геттер для чтения приватного свойства отработанных за месяц дней
        return this.#days;
    }

    set days(value) { // сеттер для изменения приватного свойства отработанных за месяц дней
        const daysInMonth = new Date(this.birthday.getFullYear(), this.birthday.getMonth() + 1, 0).getDate();
        if (value > 0 && value <= daysInMonth) {
            this.#days = value;
        }
    }


    addDays(value) { //принимает количество отработанных дней и добавляет их к свойству days.

        const daysInMonth = new Date(this.birthday.getFullYear(), this.birthday.getMonth() + 1, 0).getDate();
        if (value > 0 && this.#days + value <= daysInMonth) {
            this.#days += value;
        }
    }

    getSalary() { // метод для вычисления заработной платы с учетом бонуса 10% если в этом месяце ДР
        const salary = this.#rate * this.#days;
        const bonus = this.birthday.getMonth() === new Date().getMonth() ? salary * 0.1 : 0;
        return salary + bonus;
    }

    static whoWorkedMore(...workers) { //rest-параметр - передает произвольное кол-во аргументов функции или массив
        let maxDays = 0;
        let bestWorkers = [];

        workers.forEach(worker => {
            if (worker.days > maxDays) {
                maxDays = worker.days;
                bestWorkers = [worker];
            } else if (worker.days === maxDays) {
                bestWorkers.push(worker);
            }
        });

        if (bestWorkers.length === 1) {
            console.log('Больше всех отработал ' + bestWorkers[0].getFullName + '. Количество рабочих дней - ' + maxDays);
        } else {
            console.log('Несколько работников отработали одинаковое количество дней:');
            bestWorkers.forEach(worker => {
                console.log(worker.getFullName + ' - ' + maxDays + 'дней');
            });
        }
    }

    static whoIsYounger(...workers) { // метод поиска младшего работника
        let minAge = 100;
        let youngestWorkers = [];
        workers.forEach(worker => {
            let age = parseInt(worker.getAge); //берем только число из строки
            if (age < minAge) {
                minAge = age;
                youngestWorkers = [worker];
            } else if (age === minAge) {
                youngestWorkers.push(worker);
            }
        });

        if (youngestWorkers.length === 1) {
            console.log('Самый младший работник: ' + youngestWorkers[0].getFullName + ' - ' + minAge + ' лет');
        } else {
            console.log(`Несколько работников имеют одинаковый наименьший возраст:`);
            youngestWorkers.forEach(worker => {
                console.log(`${worker.getFullName} ${minAge} лет`);
            });
        }
    }
}
