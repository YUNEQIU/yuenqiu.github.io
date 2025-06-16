const softwareData = [
  {
    name: "上海开放大学LOGO",
    file: "test1.psd",
    description: "上海开放大学LOGO",
    page: "resource/logo1.html",
    thumbnail: "images/logo/logo1/logo1_2.png",
  },
  {
    name: "上海学习网LOGO",
    file: "test1.psd",
    description: "上海学习网LOGO",
    page: "resource/logo2.html",
    thumbnail: "images/logo/logo2/logo_1.png",
  },
  {
    name: "素材3",
    file: "test3.psd",
    description: "素材3描述",
    page: "resource/test3.html",
    thumbnail: "images/software3.jpg",
  },
];

// 首页搜索框的处理
function searchSoftware() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    window.location.href = `../results.html?query=${encodeURIComponent(query)}`;
  }
}

// 搜索结果页面的处理
window.onload = function () {
  const query = new URLSearchParams(window.location.search).get("query");
  if (query) {
    const filteredSoftware = softwareData.filter((software) =>
      software.name.toLowerCase().includes(query.toLowerCase())
    );
    displaySoftwareList(filteredSoftware);
  }
};

function displaySoftwareList(softwareList) {
  const listElement = document.getElementById("softwareList");
  listElement.innerHTML = ""; // 清空当前列表

  if (softwareList.length === 0) {
    listElement.innerHTML = "<li>没有找到匹配的软件。</li>";
  } else {
    softwareList.forEach((software) => {
      const listItem = document.createElement("li");

      // 创建缩略图元素
      const thumbnail = document.createElement("img");
      thumbnail.src = software.thumbnail;
      thumbnail.alt = software.name + "缩略图";
      thumbnail.classList.add("software-thumbnail");

      // 创建软件名称文本
      const nameText = document.createElement("span");
      nameText.textContent = software.name;

      // 将缩略图和文本添加到列表项
      listItem.appendChild(thumbnail);
      listItem.appendChild(nameText);

      // 点击跳转到软件详情页面
      listItem.onclick = () => {
        window.location.href = software.page;
      };

      listElement.appendChild(listItem);
    });
  }
}

// 回车按键搜索
document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchSoftware();
    }
  });

//资源下载页面
const resourcecard = document.getElementById("resourcecard");

let isDragging = false;
let lastX = 0;
let rotationY = 0;
let velocity = 0;
let animationFrame;

// 鼠标按下
resourcecard.addEventListener("mousedown", (e) => {
  isDragging = true;
  lastX = e.clientX;
  cancelAnimationFrame(animationFrame); // 停止惯性动画
});

// 鼠标松开
window.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    inertia();
  }
});

// 鼠标移动
window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - lastX;
  velocity = dx; // 当前速度 = 当前移动差值
  rotationY += dx * 0.5;
  resourcecard.style.transform = `rotateY(${rotationY}deg)`;
  lastX = e.clientX;
});

// 惯性动画
function inertia() {
  velocity *= 0.95; // 每一帧减速（摩擦力）
  if (Math.abs(velocity) > 0.1) {
    rotationY += velocity * 0.5;
    resourcecard.style.transform = `rotateY(${rotationY}deg)`;
    animationFrame = requestAnimationFrame(inertia);
  } else {
    cancelAnimationFrame(animationFrame);
  }
}

