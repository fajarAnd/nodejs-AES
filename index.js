const CryptoJS = require("crypto-js");
const configSecurity = {
  mode   : CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
};

const keyPromise = CryptoJS.enc.Utf8.parse('Secret-Example');

const AESDecrypt = (data) => {
  const convertToBase64 = CryptoJS.enc.Base64.parse(data);
  let decrypt = CryptoJS.AES.decrypt(
    {
      ciphertext: convertToBase64,
      salt      : ""
    },
    keyPromise, configSecurity
  );
  return JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
};

const AESEncrypt = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), keyPromise, configSecurity).toString();
};


/*
 {
 "request":"Transmisi Info Detil Pembelian",
 "bill_desc":"Pembayaran #12345678",
 "bill_currency":"IDR",
 "bill_gross":"0",
 "bill_miscfee":"0",
 "bill_total":"10",
 "cust_no":"5006303",
 "cust_name":"Test fajar97",
 "payment_channel":"402",
 "pay_type":"1",
 "bank_userid":"",
 "msisdn":"085256253393",
 "email":"test@mail.com",
 "terminal":"10",
 "signature":"280f70c9a623d89c3d9441602e3d40326ee17e92"
 }


 
 */


const data = {
  "bill_currency": "IDR",
  "bill_desc": "BILL_DESC",
  "bill_miscfee": 3800,
  "bill_total": 200000,
  "cust_name": "Renaldi",
  "cust_no": "101927",
  "email": "dumm@gmail.com",
  "msisdn": "+628170092549",
  "pay_type": 1,
  "payment_channel": 402,
  "request": "REQUEST",
  "terminal": 10
};

console.log(AESEncrypt(data));
console.log('Request ', AESDecrypt('1Ay3UdmGrzfnsty6g9utttRa26hwJ4B8tq8hhNA36OHxGl/HzsHai/Ozfq04dgRjFLjfY1Acd/LoJtY3dPFYFGulemj1GIysgIilfof0p68h+BD0PZWpb+AMunnmJ0tuss4yVxxWnZYDhsUU3ARcIYGCauqxCMO2iPLkD8l8otg='))
console.log('Response ', AESDecrypt("8Pis3LOCUtHSi0P3OY+nNYgU1oKywLOHVGK9mD+wrb6hDJLYtXZw5T8HRbOUqXY4Ddnez+y+WvdsNkRPJED3lPCIyyx8CPqe+J5BOxwOB4GSZW6kYBeK4wV22BWNwSmo5MYt9yp/JKqxB+SVa9mp/tAkj9ZQbP0N9PJXlGNCO5wa3cP54Vkxuewkqmu8nkYUfdvK9/XZiPucpmDzIu4Nzgc0jT2AJSkfK4pkMdkcmq6waLVLr7Mlc1LGsJKNOWdhO7zQEk4cJC/VpOZlu2OrW0pxKa+WSvkm3KMmfcfhq7sltrhAfITgAGOTc+Yg+wGbx51HgWIjGjdaMl6cSQ//JJYg9ktqBDogp318KNlwt6dQa+tdc9dPcFG0Ikoyynatwbb0UjolyyXOXhTX+GN1hkZ9Hj68KBTSxV6GYtENoGZjE5ovhXPbi2w0m8NkxZeUOhZhz66bV3qlCyh8wyQmXg=="))
// console.log('Result -> ', AESDecrypt('unhfzXaQz6mmBClXIi5+WTk4QFlUJtPMI0fw7GrgVcW7Rx7eRkWifB+ezN3KDN9FgAVq8E3XhM1StjhXBPG/j3hhT/wkMDLMp2kYAZ3IchYAn0i994Qs0lNSerYpw/yI+oapr3h1kgMgf6nTh/tqXlU+VkB3PD4NSiBrxpIq03MjVQGV7x2ns673UeLEnPTzPrBjzu3XLD9a8pIY4zNSLb6ncAPEYuAV31/H2RmfxCvuKywTmgLZhXE2Zyv5klOUglAxD3STofnxpkW3Aoo8zU+F5mGU5R+7bq0WK3Fvd1Sgbq0wzyOEzOEfQ6XebzpByzM8r7No2kyu5kSVOF6j4h1EWUGP2ppXVpwRTiB8XGGZc8tS8p4fGtGVuaC4xiLtNYwaGIyaMTWaz7nLxehKZ89gLMubq/yh/df4SB5E2AX0cDMDt9uOyfkHGAug/MHlNxKKfH7Yv+3JJbPZIgQlgHFClKFVVW3uIzRI/ZEpm17V/KYxJw6leHvOJ4Aqw7PNrIabX3Tf5JimHeblQleIhxF4vHu/zbsvwHHfoZ4qGfH0Cpa6+2dfExopbHO/Cx2xkFmKwT2COhifnyQPKwLabPT8Z0w+PJkb34csp8pgEPruOC2/7JUGtDfsEu03sk9YScjPfCqUodUO/8WGX1AF0oO99LUPzuvpI7viAlt20mQanf9BoR6NVeBhCSVaYQWSSCZUraOdf6tKAkluSrWiv6hHA0Hhf30GYBnjItSifhrBkrce5iK7laJzpucOAVcPHRYCyg1kTi/c0fTS+xqbos6QQTH3ez2ZvQww1ThHxSPM9TUIuVGEdpNkpkiWLTFkuo9pvtBAY0ANltjvhc/z7A=='))
