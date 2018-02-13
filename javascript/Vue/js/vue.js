const app = new Vue({
  el: '#todoApp',
  data: {
    message: 'Vue.jsの練習',
    StyleA: {
      color: 'red',
      fontSize: '30px',
      border: 'red solid 1px',
      width: '180px',
      paddingLeft: '1px'

    },
    StyleB: {
      display: 'block',
      color: 'silver'
    },
    ClassA: {
      classA: true,
      classB: false,
      classC: true,
    },
    ClassB: {
      message: true,
    },
    msg: '文字が変わるよ'
  }
})

