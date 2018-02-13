// object(ViewModel) -  deta/methods/(Model) <--> interface(View)
// Model View ViewModel - MVVM

// conter
var vm = new Vue({
  el: '#mycounter',// view
  data: {
    count: 0,
    message: 'Hello World!!'
  },
  methods: {
    countUp: function() {
      this.count++
    }
  }
})
