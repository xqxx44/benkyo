'use strict';

import $ from 'jquery';
import anime from 'animejs';


const robot = $('robot');
$('button').on('click', function() {
  anime({
    targets: '#robot',
    translateX: {
      value: [100],
      duration: 150000
    },
    //duration: 10000,
  });
  console.log("test");
});


