var jz = {
    price: 0,
    count: 0,
    summa: 0
}
var rb = {
    price: 0,
    count: 0,
    summa: 0
}
var uz = {
    price: 0,
    count: 0,
    summa: 0
}
function f(id) {



    var d = document.getElementById(id);
    var ol = document.getElementById('lst');
    var li = document.getElementById("li_" + id);

    if (li != null) {
        switch (id) {
            case 'jz':
                Red.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'rb':
                Blue.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'uz':
                Yellow.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
        }
    } else {
        switch (id) {
            case 'jz':
                newLi = document.createElement('li');
                newLi.innerHTML = 'jz: 1';
                newLi.id = 'li_jz';
                ol.appendChild(newLi);
                jz.count = 1;
                break;
            case 'rb':
                newLi = document.createElement('li');
                newLi.innerHTML = 'rb: 1';
                newLi.id = 'li_rb';
                ol.appendChild(newLi);
                rb.count = 1;
                break;
            case 'uz':
                newLi = document.createElement('li');
                newLi.innerHTML = 'uz: 1';
                newLi.id = 'li_uz';
                ol.appendChild(newLi);
                uz.count = 1;
                break;
        }
    }



    switch (id) {
        case 'jz':
            jz.price = d.getElementsByTagName('p')[0].innerHTML;
            jz.summa = jz.count * jz.price;
            break;
        case 'rb':
            rb.price = d.getElementsByTagName('p')[0].innerHTML;
            rb.summa = rb.count * rb.price;
            break;
        case 'uz':
            uz.price = d.getElementsByTagName('p')[0].innerHTML;
            uz.summa = uz.count * uz.price;
            break;
    }

    if (li != null) {
        switch (id) {
            case 'jz':
                li.innerHTML = "jz: " + jz.count + " шт. по цене " + jz.price + " на сумму " + jz.summa;
                break;
            case 'rb':
                li.innerHTML = "rb: " + rb.count + " шт. по цене " + rb.price + " на сумму " + rb.summa;
                break;
            case 'uz':
                li.innerHTML = "uz: " + uz.count + " шт. по цене " + uz.price + " на сумму " + uz.summa;
                break;
        }
    } else {
        switch (id) {
            case 'jz':
                newLi.innerHTML = "Toyota 2JZ-GTE: " + jz.count + " шт. по цене " + jz.price + " на сумму " + jz.summa;
                break;
            case 'rb':
                newLi.innerHTML = "Nissan RB26 DETT: " + rb.count + " шт. по цене " + rb.price + " на сумму " + rb.summa;
                break;
            case 'uz':
                newLi.innerHTML = "Toyota 1UZ-FE: " + uz.count + " шт. по цене " + uz.price + " на сумму " + uz.summa;
                break;
        }

    }

    var ii = document.getElementById('itog');
    if (ii != null) {
        ii.parentNode.removeChild(ii);
    }


    var itog = document.createElement('li');
    itog.id = 'itog';

    ol.appendChild(itog);
    var ss = jz.summa + rb.summa + uz.summa;
    itog.innerHTML = "Всего:" + ss;


}