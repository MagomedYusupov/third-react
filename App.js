import React from 'react';


function App() {
    const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555]; //1 задание
    const positive = array.filter( function(number){
        return number>0;
    });

                                                                  // 2 задание
    const messages = [
        {message: 'hello', error: true},
        {message: 'javascript', error: false},
        {message: 'intocode', error: true},
        {message: 'react', error: true},
        {message: 'angular', error: false},
        {message: 'es6', error: false},
    ];
    const err = messages.filter(function (item){
        return item.error === false;
    });
console.log(err)


    const words= ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];  // 3 задание
    const newWords = words.map(function (item){
        if (item.length<5){
            return "*";
        } return item
    });


                                                                                 // 4 задание
    //   4.1  function sendMessage(message) {
    //     /*
    //     * тут какой-то большой код для отправки сообщения
    //     */
    // }
    //
    // const sendMessage = (message) => {
    //     /*
    //     * тут какой-то большой код для отправки сообщения
    //     */
    // }
    // 4.2
    // function half(number) {
    //     return number / 2;
    // }
    // const half = (number) => number/2;
    //     4.3
    //
    // function showConsole() {
    //     console.log('intocode');
    // }
    //
    // const showConsole = () => console.log('intocode');
    //
    // 4.4
    //
    // function concatWords(first, second) {
    //     return first + second;
    // }
    //
    //  const concatWords = (first, second) => first+second;


                                                                               // 5 Задание
    // 5.1
    // const justText = () => 'intocode';
    //
    // function justText(){
    //     return "intocode";
    // }
    // 5.2
    // const logging = text => console.log(text);
    // function logging(text){
    //     console.log(text);
    // }
    // 5.3
    // const add = (x,y) => {
    //     const z = 3;
    //
    //     return z * x * y;
    // };
    // function add(x,y){
    //     const z = 3;
    //     return z * x * y;
    // }
    // 5.4
    // const onlyPositive = (number) => {
    //     if(number < 0) {
    //         return false;
    //     }
    //     return true;
    // }
    //
    // function onlyPositive(number){
    //     if(number < 0) {
    //         return false;
    //     }
    //     return true;
    // }




  return (
    <div>
      <div> {positive}</div>
    <div> {newWords}</div>
    </div>
  );
}

export default App;
