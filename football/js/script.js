window.onload = () => {
  const cardsContainer = document.getElementById("cards-container");
  const slotsContainer = document.getElementById("slots-container");
  const openButton = document.getElementById("open-button");

  const frontImages = [
    { img: 'images/front1.avif' },
    { img: 'images/front2.avif' },
    { img: 'images/front3.avif' },
    { img: 'images/front4.avif' },
    { img: 'images/front5.avif' },
    { img: 'images/front6.avif' },
    { img: 'images/front7.avif' },
    { img: 'images/front8.avif' },
    { img: 'images/front9.avif' },
    { img: 'images/front10.avif' },
    { img: 'images/front11.avif' },
    { img: 'images/front12.avif' }
  ];

  const backImage = 'images/back.avif';

  // 设置打开后固定顺序
  const finalRevealOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const cardElements = [];
  const cardPlaceholders = Array(12).fill(null);
  let dropCount = 0;

  function createCards() {
    frontImages.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.draggable = true;
      card.id = `card-${index}`;
      card.dataset.index = index;
      card.style.opacity = 0;
      card.style.transform = 'translateY(30px)';

      const inner = document.createElement("div");
      inner.className = "card-inner";

      const front = document.createElement("div");
      front.className = "card-front";
      front.innerHTML = `<img src="${item.img}">`;

      const back = document.createElement("div");
      back.className = "card-back";
      back.innerHTML = `<img src="${backImage}">`;

      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);
      cardsContainer.appendChild(card);

      // 出现动画
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, 200 * index);

      card.ondragstart = e => {
        e.dataTransfer.setData("text/plain", card.id);
      };

      cardElements.push(card);
      cardPlaceholders[index] = card;
    });
  }

  function flipAllToBack() {
    cardElements.forEach((card, i) => {
      setTimeout(() => card.classList.add("flipped"), i * 100);
    });
  }

  async function shuffleAnimation(times = 3) {
    for (let t = 0; t < times; t++) {
      const cards = cardsContainer.querySelectorAll('.card');
      const positions = Array.from(cards).map(card => {
        const rect = card.getBoundingClientRect();
        return { left: rect.left, top: rect.top };
      });

      const indices = [...Array(cards.length).keys()];
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      cards.forEach((card, i) => {
        const deltaX = positions[indices[i]].left - positions[i].left;
        const deltaY = positions[indices[i]].top - positions[i].top;
        card.style.transition = "transform 0.5s";
        card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      await new Promise(res => setTimeout(res, 600));
      cards.forEach(card => {
        card.style.transition = "none";
        card.style.transform = "none";
      });
    }
  }

  function createSlots() {
    for (let i = 0; i < 12; i++) {
      const slot = document.createElement("div");
      slot.className = "slot";
      slot.ondragover = e => e.preventDefault();

      slot.ondrop = function (e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const card = document.getElementById(id);
        if (!card || this.hasChildNodes()) return;

        const index = parseInt(card.dataset.index);
        cardPlaceholders[index] = null;

        cardsContainer.removeChild(card);

        this.appendChild(card);
        card.style.position = 'static';
        card.draggable = false;

        dropCount++;
        if (dropCount === 12) {
          openButton.style.display = "inline-block";
        }
      };

      slotsContainer.appendChild(slot);
      setTimeout(() => slot.classList.add('appear'), 300 * i);
    }
  }

  function flipSlotsToFixedOrder() {
    const slots = Array.from(document.querySelectorAll('.slot'));
    slots.forEach(slot => (slot.innerHTML = ''));

    finalRevealOrder.forEach((imgIndex, i) => {
      const card = document.createElement("div");
      card.className = "card flipped";
      card.style.position = "static";

      const inner = document.createElement("div");
      inner.className = "card-inner";

      const front = document.createElement("div");
      front.className = "card-front";
      front.innerHTML = `<img src="${frontImages[imgIndex].img}">`;

      const back = document.createElement("div");
      back.className = "card-back";
      back.innerHTML = `<img src="${backImage}">`;

      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);
      slots[i].appendChild(card);

      setTimeout(() => {
        card.classList.remove("flipped");
      }, i * 300);
    });
  }

  // 启动流程
  createCards();

  setTimeout(() => {
    flipAllToBack();

    setTimeout(async () => {
      await shuffleAnimation(3);
      createSlots();
    }, 2500);
  }, 5000);

  // ✅ 点击打开后仅执行一次，并禁用按钮
  openButton.onclick = () => {
    flipSlotsToFixedOrder();
    openButton.disabled = true;
    openButton.style.opacity = 0.5;
    openButton.style.cursor = "default";
    openButton.disabled = true;
  };
};
