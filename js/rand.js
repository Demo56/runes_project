
var word_array = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
    'images/14.jpg',
    'images/15.jpg',
    'images/16.jpg',
    'images/17.jpg',
    'images/18.jpg',
    'images/19.jpg',
    'images/20.jpg',
    'images/21.jpg',
    'images/22.jpg',
    'images/23.jpg',
    'images/24.jpg',
];
var usedImages = {};
var usedImagesCount = 0;

//Массив ссылок на картиноки



function getImg() {


    var randomNum = Math.floor(Math.random() * (word_array.length - 1));
    if (!usedImages[randomNum]) {
        document.getElementById("result").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length - 1) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg();


    }

}

function getImg2() {

    var randomNum = Math.floor(Math.random() * (word_array.length-1));
    if (!usedImages[randomNum]) {
        document.getElementById("result2").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length-1) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg2();
    }
}
function getImg3() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result3").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg3();
    }

}
function getImg4() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result4").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg4();
    }

}
function getImg5() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result5").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg5();
    }


}
function getImg6() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result6").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg6();
    }
}
function getImg7() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result7").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg7();
    }

}
function getImg8() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result8").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg8();
    }

}

function getImg9() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result9").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg9();
    }


}
function getImg10() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result10").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg10();
    }
}
function getImg11() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result11").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg11();
    }

}
function getImg12() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result12").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg12();
    }

}
function getImg13() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result13").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg13();
    }


}
function getImg14() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result14").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg14();
    }
}
function getImg15() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result15").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg15();
    }

}
function getImg16() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result16").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg16();
    }

}

function getImg17() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result17").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg17();
    }


}
function getImg18() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result18").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg18();
    }
}
function getImg19() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result19").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg19();
    }

}
function getImg20() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result20").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg20();
    }

}
function getImg21() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result21").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg21();
    }


}
function getImg22() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result22").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg22();
    }
}
function getImg23() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result23").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg23();
    }

}
function getImg24() {

    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result24").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg24();
    }

}