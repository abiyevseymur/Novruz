var startTime = new Date();
var endTime = new Date(2017, 02, 20);
endTime.setDate(endTime.getDate() - startTime.getDate())
document.write('Novruz Bayrama ' + (startTime.getMonth()-endTime.getMonth()) + ' - ay, ',
startTime.getDate() - endTime.getDate() + ' - gun, ',
startTime.getHours() -endTime.getHours() + ' - saat, ',
startTime.getMinutes() - endTime.getMinutes() + ' - deyqe, ',
startTime.getSeconds() - endTime.getSeconds() + ' - sayniyye.' + '  => Qalib.');

