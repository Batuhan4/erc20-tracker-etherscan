const apiKey = ''; // my api key
const contractAddress = ''; // etherscan contract adress
const address = ''; // etherscan token address
// `String text ${expression}`   to use variable in link
let link = `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${contractAddress}&address=${address}&page=1&offset=7&sort=desc&apikey=${apiKey}`;
document.getElementById('link').setAttribute('href', link); // idk for test lol
let liqAddress = '';
let sellAddress = '';

function checkValue(value, hash, to) {
  console.log(value);

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
