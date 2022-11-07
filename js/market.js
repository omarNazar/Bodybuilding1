/*  
لأني دارس البرمجة كائنية التوجه من قبل بلغة الجافا 
فأتصور أنني يمكنني هنا استخدامها كي لا أكرر المتغيرات والدوال 
لكن بسبب عدم دراستنا للبرمجة الكائنية بلغة الجافا سكربت
اضطررت لتكرار المتغيرات والدوال لكل منتج.. 
ولا أعلم إن كانت هنالك طريقة ثانية تمكنني من انجاز العمل 
من غير استخدام البرمجة كائنية التوجه
*/
// ----product 1----
let myQuantity1 = document.getElementById("count1");
let myPlus1 = document.getElementById("plus1");
let myMinus1 = document.getElementById("minus1");

var count1 = 0;
myPlus1.onclick = function increment() {
    count1++;
    myQuantity1.innerHTML = `${count1}`;
}
myMinus1.onclick = function decrement() {
        count1--;
        if (count1 >= 0) {
            myQuantity1.innerHTML = `${count1}`;
        } else {
            count1 = 0;
            myQuantity1.innerHTML = `${count1}`;
        }
    }
    // ----product 2----
let myQuantity2 = document.getElementById("count2");
let myPlus2 = document.getElementById("plus2");
let myMinus2 = document.getElementById("minus2");

var count2 = 0;
myPlus2.onclick = function increment() {
    count2++;
    myQuantity2.innerHTML = `${count2}`;
}
myMinus2.onclick = function decrement() {
        count2--;
        if (count2 >= 0) {
            myQuantity2.innerHTML = `${count2}`;
        } else {
            count2 = 0;
            myQuantity2.innerHTML = `${count2}`;
        }
    }
    // ----product 3----
let myQuantity3 = document.getElementById("count3");
let myPlus3 = document.getElementById("plus3");
let myMinus3 = document.getElementById("minus3");

var count3 = 0;
myPlus3.onclick = function increment() {
    count3++;
    myQuantity3.innerHTML = `${count3}`;
}
myMinus3.onclick = function decrement() {
        count3--;
        if (count3 >= 0) {
            myQuantity3.innerHTML = `${count3}`;
        } else {
            count3 = 0;
            myQuantity3.innerHTML = `${count3}`;
        }
    }
    // ----product 4----
let myQuantity4 = document.getElementById("count4");
let myPlus4 = document.getElementById("plus4");
let myMinus4 = document.getElementById("minus4");

var count4 = 0;
myPlus4.onclick = function increment() {
    count4++;
    myQuantity4.innerHTML = `${count4}`;
}
myMinus4.onclick = function decrement() {
        count4--;
        if (count4 >= 0) {
            myQuantity4.innerHTML = `${count4}`;
        } else {
            count4 = 0;
            myQuantity3.innerHTML = `${count4}`;
        }
    }
    // ----product 5----
let myQuantity5 = document.getElementById("count5");
let myPlus5 = document.getElementById("plus5");
let myMinus5 = document.getElementById("minus5");

var count5 = 0;
myPlus5.onclick = function increment() {
    count5++;
    myQuantity5.innerHTML = `${count5}`;
}
myMinus5.onclick = function decrement() {
        count5--;
        if (count5 >= 0) {
            myQuantity5.innerHTML = `${count5}`;
        } else {
            count5 = 0;
            myQuantity5.innerHTML = `${count5}`;
        }
    }
    // ----product 6----
let myQuantity6 = document.getElementById("count6");
let myPlus6 = document.getElementById("plus6");
let myMinus6 = document.getElementById("minus6");

var count6 = 0;
myPlus6.onclick = function increment() {
    count6++;
    myQuantity6.innerHTML = `${count6}`;
}
myMinus6.onclick = function decrement() {
        count6--;
        if (count6 >= 0) {
            myQuantity6.innerHTML = `${count6}`;
        } else {
            count6 = 0;
            myQuantity6.innerHTML = `${count6}`;
        }
    }
    // ----product 7----
let myQuantity7 = document.getElementById("count7");
let myPlus7 = document.getElementById("plus7");
let myMinus7 = document.getElementById("minus7");

var count7 = 0;
myPlus7.onclick = function increment() {
    count7++;
    myQuantity7.innerHTML = `${count7}`;
}
myMinus7.onclick = function decrement() {
        count7--;
        if (count7 >= 0) {
            myQuantity7.innerHTML = `${count7}`;
        } else {
            count7 = 0;
            myQuantity7.innerHTML = `${count7}`;
        }
    }
    // ----product 8----
let myQuantity8 = document.getElementById("count8");
let myPlus8 = document.getElementById("plus8");
let myMinus8 = document.getElementById("minus8");

var count8 = 0;
myPlus8.onclick = function increment() {
    count8++;
    myQuantity8.innerHTML = `${count8}`;
}
myMinus8.onclick = function decrement() {
    count8--;
    if (count8 >= 0) {
        myQuantity8.innerHTML = `${count8}`;
    } else {
        count8 = 0;
        myQuantity8.innerHTML = `${count8}`;
    }
}