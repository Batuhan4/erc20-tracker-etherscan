const apiKey = ''; // my api key
const contractAddress = '0xEd91879919B71bB6905f23af0A68d231EcF87b14'; // etherscan contract adress dmg
const address = '0x8175362afBeeE32AfB22d05adc0bbD08dE32F5Ae'; // etherscan token address dmg
// `String text ${expression}`   to use variable in link
let link = `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${contractAddress}&address=${address}&page=1&offset=7&sort=desc&apikey=${apiKey}`;
document.getElementById('link').setAttribute('href', link); // idk for test lol
let liqAddress = '';
let sellAddress = '0x8175362afbeee32afb22d05adc0bbd08de32f5ae';
let array34 = new Array();

function formatNumber(num) {
  var first = num.split(',');
  var digits = first[0].split('').reverse();
  var new_digits = [];
  for (var i = 0; i < digits.length; i++) {
    if ((i + 1) % 18 == 0) {
      new_digits.push(digits[i]);
      new_digits.push('.');
    } else {
      new_digits.push(digits[i]);
    }
  }
  var new_num = new_digits.reverse().join('');
  return new_num;
}
function checkValue(value, hash, to) {
  console.log(formatNumber(value));
  if (sellAddress == to) {
    console.log('sold');
  } else console.log('bought');

  //Çünkü ben her bi sevgilisine şarkı yazan hassas yüreklilere benzemem
}

function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest(); // a new request .D
  Httpreq.open('GET', yourUrl, false); // BEN bir halk kahramanı olduğumu söylemedim
  Httpreq.send(null);
  return Httpreq.responseText;
}
// eğerki reklamsa çok üzgünüm buranın en piçi sen değilsin :d
////let json = JSON.parse(Get(link));
//}, 6000);

// json.result[0].hash          ez baby!

let json = JSON.parse(Get(link));
// json.result[0].hash

let array = new Array(11);
for (var m = 0; m < 7; m++) {
  array[m] = json.result[m].hash;
}
setInterval(function () {
  let json2 = JSON.parse(Get(link));

  for (let c = 0; c < 7; c++) {
    for (let d = 0; d < 11; d++) {
      if (json2.result[c].hash == array[d]) {
        break;
      } else if (json2.result[c].hash != array[d] && d == 10) {
        checkValue(
          json2.result[c].value,
          json2.result[c].hash,
          json2.result[c].to
        );
        // append to list remove last one from list :)
        array.splice(0, 0, json2.result[c].hash);
        if (array[10] != null) {
          array.splice(10, 1);
        }
      }
    }
  }
}, 6000);
