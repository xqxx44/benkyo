
const param = "global param";

// アロー関数
const func = () => {
  console.log(this);
  console.log(this.param);
}

// 通常関数宣言
function funcPram() {
  console.log(this);
  console.log(this.param);
}

const object1 = {
  // プロパティparamにparam1を設定
  param: "param1",
  // プロパティfunc1にfuncPramを設定
  func1: funcPram,
  // プロパティfunc2にfuncを設定
  func2: func
}

const object2 = {
  // プロパティparamにparam1を設定
  param: "param2",
  // プロパティfunc1にfuncPramを設定
  func1: funcPram,
  // プロパティfunc2にfuncを設定
  func2: func
}

document.hoge = {
  param1: "test",
  param2: (param) => param,
  param3: {
    sub_pram1: 1,
    sub_pram2: 2,
  },
  param4: "test",
};

// const hoge = document.hoge;

// console.log(hoge.param2("hogehoge"));





const arr = [
{
  name: "田中",
  age: 30,
  gender: "男性"
},
{
  name: "山田",
  age: 20,
  gender: "男性"
},
{
  name: "鈴木",
  age: 25,
  gender: "女性"
},
{
  name: "斎藤",
  age: 18,
  gender: "女性"
},
{
}
];
console.log(arr[0].name);



/* filterメソッド
配列の各要素に対して、コールバック関数が1回適用され、
コールバック関数がtrueを返す要素を集めて、新しい配列を作成する

*/
const result = arr.filter((value) => {
  if (value.age < 30) {
    return value;
  }
});

const result2 = arr.filter((value, index) => value.name === '斎藤')
console.log(result2);

// push
const food = ["豆腐", "納豆", "ブロッコリー", "95%チョコレート"];
food.push({
  drink: "青汁",
  func: (param) => param

})
console.log(typeof food[4].func("test"));


