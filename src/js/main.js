require(['app/caroucel','app/gotop','app/loadimgs','lib/jquery'], function (caroucel, gotop,loadimgs,$){
  caroucel.init(document.querySelectorAll('.container'))
  gotop.init(document.body)
  loadimgs()
})