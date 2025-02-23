if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = "https://shedusw.com/mobile.html";
}

$(function () {
  $("#nav-ul>li").mouseenter(
    function () {
      $(this).siblings("li").removeClass("nav-active")
      $(this).addClass("nav-active")
    }
  ).mouseleave(
    function () {
      $(this).removeClass("nav-active")
    }
  )
  $("#nav-ul").mouseleave(
    function () {
      $(this).children().eq(0).addClass("nav-active")
    }
  )

  /*1.引入*/
  /*2.结构   data-stellar-background-ratio="0.3"  样式 bg 需要 background-attachment: fixed;*/
  /*3.初始化插件*/
  $.stellar({
    horizontalScrolling: false,
    responsive: true
  })
})


// 使用 IntersectionObserver API 来检测各个 div 是否出现在视口中
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.section');

  // 创建IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);  // 一旦元素出现就不再观察
      }
    });
  }, {
    threshold: 0.5 // 当元素进入视口50%时触发
  });

  // 开始观察所有section元素
  sections.forEach(section => {
    observer.observe(section);
  });
});
