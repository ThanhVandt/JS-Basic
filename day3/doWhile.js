// Do/while loop
var i = 0;
var isSuccess = false;

do {
    i++;

    console.log('nạp thẻ lần' + i);
    //thành công
    if(true) {
        isSuccess = true;
    } 
} while (!isSuccess && i <= 3);