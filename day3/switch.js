//Câu lệnh rẽ nhánh switch 
var date = 2;
switch(date) {
    case 2:
        console.log('monday');
        break;
    case 3:
        console.log('tuesday');
        break;
    case 4:
        console.log('wednesday');
        break;
    case 5:
    case 6:
        console.log('thusday, friday');
        break;
    default:
        console.log('dunno');
}

//so sánh tính đúng sai hoặc ít hơn 3 case --> if else
//biết trc gt --> sitch case 