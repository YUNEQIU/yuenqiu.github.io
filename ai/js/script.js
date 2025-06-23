const toggleBtn = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove('active');
  }
});

// 滚动图
const strip = document.querySelector(".image-strip");
const images = strip.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    strip.style.animationPlayState = "paused";
    img.classList.add("flipping");

    // ✅ 给其它图片加上模糊效果
    images.forEach((otherImg) => {
      if (otherImg !== img) {
        otherImg.classList.add("blurred");
      }
    });
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("flipping");
    strip.style.animationPlayState = "running";

    // ✅ 移除所有模糊
    images.forEach((otherImg) => {
      otherImg.classList.remove("blurred");
    });
  });
});

// 课程

const items = document.querySelectorAll(".album-item");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    items.forEach(i => i.classList.remove("expanded-item"));
    item.classList.add("expanded-item");
  });
});

// 鼠标移出整体区域时重置（可选）
document.querySelector(".album-container").addEventListener("mouseleave", () => {
  items.forEach(i => i.classList.remove("expanded-item"));
});

// 视频
document.querySelectorAll('.video3').forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
