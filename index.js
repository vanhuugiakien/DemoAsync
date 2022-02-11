// nấu ăn:
// đi chợ mua đồ
// nấu cơm
// sơ chế
// nấu
// trình bày lên dĩa
console.log("Đi chợ mua đồ");
let tien = 100;
function wait(s) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, s * 1000);
  });
}
let diCho = new Promise(async (resolve, reject) => {
  if (tien >= 100) {
    await wait(3);
    resolve();
  } else {
    reject("Không đủ tiền đi chợ");
  }
});
diCho
  .then(function () {
    console.log("Đi chợ thành công");
    nauCom().then(async function () {
      console.log("Bắt đầu nấu cơm");
      await wait(5);
      console.log("Nấu cơm xong!!!");
    });
    soChe().then(async function () {
      console.log("Bắt đầu sơ chế");
      await wait(2);
      console.log("Sơ chế thành công!!!");
    });
  })
  .catch(console.log);
function soChe() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}
function nauCom() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

async function hello() {
  return "hello";
}
let temp;
(async () => {
  temp = await hello();
  console.log(temp);
})();
