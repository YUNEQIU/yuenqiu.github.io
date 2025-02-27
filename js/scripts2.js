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

window.addEventListener('scroll', function () {
  const div = document.querySelector('.codefont');
  const divPosition = div.getBoundingClientRect().top; // 获取元素距离视口顶部的距离
  const windowHeight = window.innerHeight; // 获取视口高度

  if (divPosition < windowHeight) {
    div.style.opacity = 1;
    div.style.transform = 'translateY(0)'; // 当滚动到元素时，透明度变为1，移动到原位置
  }
});

window.addEventListener('scroll', function() {
  const div = document.querySelector('.yvesklein');
  const divPosition = div.getBoundingClientRect().top;  // 获取元素距离视口顶部的距离
  const windowHeight = window.innerHeight;  // 获取视口的高度
  
  // 当元素滚动到视口范围内时，改变它的透明度和缩放比例
  if (divPosition < windowHeight * 0.8) {  // 元素滚动到距离视口80%时触发
    div.style.opacity = 1;
    div.style.transform = 'scale(1)';  // 使元素放大至原始大小
  }
});

window.addEventListener('scroll', function() {
  const div = document.querySelector('.xinkaishi');
  const divPosition = div.getBoundingClientRect().top;  // 获取元素距离视口顶部的距离
  const windowHeight = window.innerHeight;  // 获取视口高度
  
  // 当元素滚动到视口范围内时，改变它的位置和透明度
  if (divPosition < windowHeight * 0.8) {  // 元素滚动到距离视口80%时触发
    div.style.opacity = 1;  // 使元素变得可见
    div.style.transform = 'translateY(0)';  // 使元素回到原始位置
  }
});

window.addEventListener('scroll', function() {
  const div = document.querySelector('.building img');
  const divPosition = div.getBoundingClientRect().top;  // 获取元素距离视口顶部的距离
  const windowHeight = window.innerHeight;  // 获取视口的高度
  
  // 当元素滚动到视口范围内时，改变它的透明度和位置
  if (divPosition < windowHeight * 0.8) {  // 元素滚动到距离视口80%时触发
    div.style.opacity = 1;  // 使元素变得可见
    div.style.transform = 'translateX(0)';  // 使元素平滑移动到原位置
  }
});

window.addEventListener('scroll', function() {
  const div = document.querySelector('.examine img');
  const divPosition = div.getBoundingClientRect().top;  // 获取元素距离视口顶部的距离
  const windowHeight = window.innerHeight;  // 获取视口的高度
  
  // 当元素滚动到视口范围内时，改变它的透明度和缩放比例
  if (divPosition < windowHeight * 0.8) {  // 元素滚动到距离视口80%时触发
    div.style.opacity = 1;
    div.style.transform = 'scale(1)';  // 使元素放大至原始大小
  }
});

window.addEventListener('scroll', function() {
  const div = document.querySelector('.bg .domainfont img');
  const divPosition = div.getBoundingClientRect().top;  // 获取元素距离视口顶部的距离
  const windowHeight = window.innerHeight;  // 获取视口高度
  
  // 当元素滚动到视口范围内时，改变它的位置和透明度
  if (divPosition < windowHeight * 0.8) {  // 元素滚动到距离视口80%时触发
    div.style.opacity = 1;  // 使元素变得可见
    div.style.transform = 'translateY(0)';  // 使元素回到原始位置
  }
});