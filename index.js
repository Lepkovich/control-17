import {Worker} from './worker.js'

class App {
    constructor() {
        this.workers = [
            new Worker('Иван', 'Иванов', '05-16-1980', 'менеджер'),
            new Worker('Петр', 'Петров', '08-23-1980', 'разработчик'),
            new Worker('Сидор', 'Сидоров', '03-15-1995', 'тестировщик'),
            new Worker('Анна', 'Смирнова', '09-03-1981', 'дизайнер'),
            new Worker('Дмитрий', 'Кузнецов', '07-18-1955', 'аналитик')
        ];
        this.workers[2].rate = 1500;
        this.workers[3].rate = 800;
        this.workers[4].rate = 2000;


        this.workers[0].addDays(10);
        this.workers[0].addDays(-2); //проверим на отрицательное число
        this.workers[0].addDays(4); //проверим на отрицательное число
        this.workers[1].addDays(10);
        this.workers[1].addDays(3);
        this.workers[2].addDays(18);
        this.workers[2].addDays(14); //добавим дней больше чем 31
        this.workers[3].addDays(15);
        this.workers[4].addDays(12);
        this.workers[4].addDays(4);
        this.workers[4].addDays(2);
        this.workers[4].addDays(7);


        window.addEventListener('DOMContentLoaded', this.start.bind(this));
    }

    start() {
        this.workers.forEach(worker => {
            console.log(worker.getFullName + ' - ' + worker.getSalary() + ' рублей');
        });

        Worker.whoIsYounger(...this.workers);
        Worker.whoWorkedMore(...this.workers);

    }
}

(new App());