// 1-masala

// let number = 5;

// if (number > 0) {
//     number += 1;
// } else {
//     number -=2;
// }

// console.log(number);

// 2-masala

// let a = 4, b = -3, c = 9;
// let musbat = 0;
// let manfiy = 0;

// if (a > 0) musbat++; else if (a < 0) manfiy++;
// if (b > 0) musbat++; else if (b < 0) manfiy++;
// if (c > 0) musbat++; else if (c < 0) manfiy++;

// console.log(`Musbat: ${musbat} ta, Manfiy: ${manfiy} ta`);

// 3-masala

// let number1 = 5;
// let number2 = -2;
// let number3 = 8;
// let count = 0;

// if (number1 > 0) {
//   count += 1;
// }
// if (number2 > 0) {
//   count += 1;
// }
// if (number3 > 0) {
//   count += 1;
// }

// console.log(count);

// 4-masala

// let number1 = 15;
// let number2 = 25;

// if (number1 > number2) {
//   console.log(number1);
// } else {
//   console.log(number2);
// }

// 5-masala

// let number1 = 10;
// let number2 = 4;

// if (number1 < number2) {
//   console.log(1);
// } else {
//   console.log(2);
// }

// 6-masala

// let number1 = 12;
// let number2 = 45;

// if (number1 > number2) {
//   console.log(number1);
//   console.log(number2);
// } else {
//   console.log(number2);
//   console.log(number1);
// }

// 7-masala

// let number1 = 15;
// let number2 = 7;

// if (number1 > number2) {
//   let temp = number1;
//   number1 = number2;
//   number2 = temp;
// }

// console.log(number1);
// console.log(number2);

// 8-masala

// let number1 = 5;
// let number2 = 8;

// if (number1 !== number2) {
//   let sum = number1 + number2;
//   number1 = sum;
//   number2 = sum;
// } else {
//   number1 = 0;
//   number2 = 0;
// }

// console.log(number1);
// console.log(number2);

// 9-masala

// let number1 = 10;
// let number2 = 20;

// if (number1 !== number2) {
//   if (number1 > number2) {
//     number2 = number1;
//   } else {
//     number1 = number2;
//   }
// } else {
//   number1 = 0;
//   number2 = 0;
// }

// console.log(number1);
// console.log(number2);

// 10-masala
// let number1 = 5;
// let number2 = 2;
// let number3 = 9;

// let min = number1;

// if (number2 < min) {
//   min = number2;
// }
// if (number3 < min) {
//   min = number3;
// }

// console.log(min);

// 11-masala

// let number = 5;

// if (number > 0) {
//   number += 1;
// } else if (number < 0) {
//   number -= 2;
// } else {
//   number = 10;
// }

// console.log(number);

// 12-masala

// let a =3, b=1,c=8;
// let count = 0;

// if (a > 0) count ++;
// if (b > 0) count ++;
// if (c > 0) count ++;

// console.log(count);

// 13-masala
// let number1 = 1;
// let number2 = 3;
// let number3 = 5;

// if (number1 < number2 && number2 < number3) {
//   number1 *= 2;
//   number2 *= 2;
//   number3 *= 2;
// } else {
//   number1 = -number1;
//   number2 = -number2;
//   number3 = -number3;
// }

// console.log(number1);
// console.log(number2);
// console.log(number3);

// 14 - masala;
// let number1 = 5;
// let number2 = 4;
// let number3 = 1;

// if (
//   (number1 < number2 && number2 < number3) ||
//   (number1 > number2 && number2 > number3)
// ) {
//   number1 *= 2;
//   number2 *= 2;
//   number3 *= 2;
// } else {
//   number1 = -number1;
//   number2 = -number2;
//   number3 = -number3;
// }

// console.log(number1);
// console.log(number2);
// console.log(number3);

// 15 - masala
// let number1 = 5;
// let number2 = 5;
// let number3 = 5;
// let number4 = 9;

// if (number1 === number2 && number2 === number3) {
//   console.log(4);
// } else if (number1 === number2 && number2 === number4) {
//   console.log(3);
// } else if (number1 === number3 && number3 === number4) {
//   console.log(2);
// } else {
//   console.log(1);
// }

// 16-masala

// let number = 1.5;

// if (number <= 0) {
//   console.log(-number);
// } else if (number > 0 && number < 2) {
//   console.log(number * number);
// } else {
//   console.log(4);
// }

// 17-masala
// let number = 2024;

// if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
//   console.log(366);
// } else {
//   console.log(365);
// }

// 18-masala
// let number = 246;

// if (number >= 1 && number <= 999) {
//   let ishora = "";
//   let xona = "";

//   if (number % 2 === 0) {
//     ishora = "juft";
//   } else {
//     ishora = "toq";
//   }

//   if (number < 10) {
//     xona = "bir xonali";
//   } else if (number < 100) {
//     xona = "ikki xonali";
//   } else {
//     xona = "uch xonali";
//   }

//   console.log(xona + " " + ishora + " son");
// }

// Case boyica masalalar

// // 19-masala

// let number = 4;

// switch (number) {
//   case 1:
//     console.log("yomon");
//     break;
//   case 2:
//     console.log("qoniqarsiz");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   case 4:
//     console.log("yaxshi");
//     break;
//   case 5:
//     console.log("a'lo");
//     break;
//   default:
//     console.log("xato");
// }

// 20-masala

// let number = 5;

// switch (number) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("kuz");
//     break;
//   default:
//     console.log("xato");
// }

// 21-masala

// let number = 2;

// switch (number) {
//   case 2:
//     console.log(28);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;
//   default:
//     console.log("xato");
// }

// 22-masala
// let number = 2;
// let length = 5.5;

// switch (number) {
//   case 1:
//     console.log(length / 10);
//     break;
//   case 2:
//     console.log(length * 1000);
//     break;
//   case 3:
//     console.log(length);
//     break;
//   case 4:
//     console.log(length / 1000);
//     break;
//   case 5:
//     console.log(length / 100);
//     break;
//   default:
//     console.log("xato");
// }

// 22-masala
// let number = 4;
// let weight = 3;

// switch (number) {
//   case 1:
//     console.log(weight);
//     break;
//   case 2:
//     console.log(weight / 1000000);
//     break;
//   case 3:
//     console.log(weight / 1000);
//     break;
//   case 4:
//     console.log(weight * 1000);
//     break;
//   case 5:
//     console.log(weight * 100);
//     break;
//   default:
//     console.log("xato");
// }

// 23-masala
// let numberD = 15;
// let numberM = 3;

// let monthName = "";

// switch (numberM) {
//   case 1: monthName = "yanvar"; break;
//   case 2: monthName = "fevral"; break;
//   case 3: monthName = "mart"; break;
//   case 4: monthName = "aprel"; break;
//   case 5: monthName = "may"; break;
//   case 6: monthName = "iyun"; break;
//   case 7: monthName = "iyul"; break;
//   case 8: monthName = "avgust"; break;
//   case 9: monthName = "sentabr"; break;
//   case 10: monthName = "oktabr"; break;
//   case 11: monthName = "noyabr"; break;
//   case 12: monthName = "dekabr"; break;
// }

// console.log(numberD + "-" + monthName);

// 24 - masala
// let numberD = 28;
// let numberM = 2;
// let daysInMonth = 31;

// switch (numberM) {
//   case 2:
//     daysInMonth = 28;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     daysInMonth = 30;
//     break;
// }
// numberD += 1;
// if (numberD > daysInMonth) {
//   numberD = 1;
//   numberM += 1;
//   if (numberM > 12) {
//     numberM = 1;
//   }
// }
// console.log(numberD + "-" + numberM);

// 25-masala
// let direction = "s"; 
// let numberK = 1;

// let directions = ["s", "q", "j", "g"];
// let index = directions.indexOf(direction);

// if (numberK === 1) {
//   index = (index + 3) % 4;
// } else if (numberK === 2) {
//   index = (index + 1) % 4;
// }

// console.log(directions[index]);

// 26-masala
// let numberN = 11;
// let numberM = 2;

// let cardName = "";
// let cardType = "";

// switch (numberN) {
//   case 6: cardName = "olti"; break;
//   case 7: cardName = "yetti"; break;
//   case 8: cardName = "sakkiz"; break;
//   case 9: cardName = "to'qqiz"; break;
//   case 10: cardName = "o'n"; break;
//   case 11: cardName = "valet"; break;
//   case 12: cardName = "dama"; break;
//   case 13: cardName = "qirol"; break;
//   case 14: cardName = "tuz"; break;
// }

// switch (numberM) {
//   case 1: cardType = "g'isht"; break;
//   case 2: cardType = "olma"; break;
//   case 3: cardType = "chillak"; break;
//   case 4: cardType = "qarg'a"; break;
// }

// console.log(cardName + " " + cardType);

// 27-masala
// let number = 23;

// let tens = Math.floor(number / 10);
// let units = number % 10;

// let tensStr = "";
// let unitsStr = "";

// switch (tens) {
//   case 1: tensStr = "o'n"; break;
//   case 2: tensStr = "yigirma"; break;
//   case 3: tensStr = "o'ttiz"; break;
//   case 4: tensStr = "qirq"; break;
// }

// switch (units) {
//   case 1: unitsStr = "bitta"; break;
//   case 2: unitsStr = "ikkita"; break;
//   case 3: unitsStr = "uchta"; break;
//   case 4: unitsStr = "to'rtta"; break;
//   case 5: unitsStr = "beshta"; break;
//   case 6: unitsStr = "oltita"; break;
//   case 7: unitsStr = "yettita"; break;
//   case 8: unitsStr = "sakkizta"; break;
//   case 9: unitsStr = "to'qqizta"; break;
// }

// console.log(tensStr + " " + unitsStr + " masala");

// 28-masala

// let number = 123;

// let hundreds = Math.floor(number / 100);
// let tens = Math.floor((number % 100) / 10);
// let units = number % 10;

// let hStr = "", tStr = "", uStr = "";

// switch (hundreds) {
//   case 1: hStr = "bir yuz"; break;
//   case 2: hStr = "ikki yuz"; break;
//   case 3: hStr = "uch yuz"; break;
//   case 4: hStr = "to'rt yuz"; break;
//   case 5: hStr = "besh yuz"; break;
//   case 6: hStr = "olti yuz"; break;
//   case 7: hStr = "yetti yuz"; break;
//   case 8: hStr = "sakkiz yuz"; break;
//   case 9: hStr = "to'qqiz yuz"; break;
// }

// switch (tens) {
//   case 1: tStr = "o'n"; break;
//   case 2: tStr = "yigirma"; break;
//   case 3: tStr = "o'ttiz"; break;
//   case 4: tStr = "qirq"; break;
//   case 5: tStr = "ellik"; break;
//   case 6: tStr = "oltmish"; break;
//   case 7: tStr = "yetmish"; break;
//   case 8: tStr = "sakson"; break;
//   case 9: tStr = "toqson"; break;
// }

// switch (units) {
//   case 1: uStr = "bir"; break;
//   case 2: uStr = "ikki"; break;
//   case 3: uStr = "uch"; break;
//   case 4: uStr = "to'rt"; break;
//   case 5: uStr = "besh"; break;
//   case 6: uStr = "olti"; break;
//   case 7: uStr = "yetti"; break;
//   case 8: uStr = "sakkiz"; break;
//   case 9: uStr = "to'qqiz"; break;
// }

// console.log(hStr + " " + tStr + " " + uStr);

// 29-masala (oxirgi case-on ikkinchi masala)

// let numberYear = 1984;

// let offset = (numberYear - 1984) % 60;
// if (offset < 0) {
//   offset += 60;
// }

// let colorIndex = Math.floor((offset % 10) / 2);
// let animalIndex = offset % 12;

// let colors = ["Yashil", "Qizil", "Sariq", "Oq", "Qora"];
// let animals = [
//   "sichqon", "sigir", "yo'lbars", "quyon", "ajdar", "ilon", 
//   "ot", "qo'y", "maymun", "tovuq", "it", "to'ngiz"
// ];

// console.log(colors[colorIndex] + " " + animals[animalIndex] + " yili");