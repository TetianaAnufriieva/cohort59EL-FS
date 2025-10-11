
// Задание 1 *дополнительно
// В отдельном файле ts создайте interface Airplane - самолет с полями:
// numberOfEngines - количество двигателей
// isJet - реактивный
// maxHeight - максимальная высота полета
// capacity - опциональное поле вместимость
// Создайте несколько переменных типа Airplane.

interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

const f16Fighter: Airplane = {
  numberOfEngines: 1,
  isJet: true,
  maxHeight: 15200,
};
console.log(f16Fighter);

const an225: Airplane = {
  numberOfEngines: 6,
  isJet: true,
  maxHeight: 12000,
  capacity: 250,
};
console.log(an225);
