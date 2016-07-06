import 'script!jquery'
import 'script!jquery.scrollto'
import 'script!lodash'
import 'foundation-sites'
import 'font-awesome/css/font-awesome.css'
$(document).foundation();

var debounced = _.debounce(
  function(){
     $('.top-bar-right').scrollTo($('a.active'), 100);
  }, 100
)
$(window).scroll(debounced)
