/////////////////burger menu///////////////////
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const menuList = document.getElementById('menu-list');
const menuList2 = document.getElementById('menu-list2');

modal1.addEventListener('click', toggleMenuLinks1);
modal2.addEventListener('click', toggleMenuLinks2);

function toggleMenuLinks1() {
  menuList.classList.toggle('hidden');
}

function toggleMenuLinks2() {
  menuList2.classList.toggle('hidden2');
}

function checkScreenWidth() {
  if (window.innerWidth <= 900) {
    menuList.classList.add('hidden');
    menuList2.classList.add('hidden2');
  } else {
    menuList.classList.remove('hidden');
    menuList2.classList.remove('hidden2');
  }
}

checkScreenWidth();
/////////////////burger menu///////////////////

///////////////telegram bot///////////////////
const message = document.querySelector('#inputMessage')
const form = document.querySelector('form')
const btn = document.querySelector('button')

const bot = {
  TOKEN:'6147105126:AAHwPpVCgtnTnjoi8SoL7XCYNYczpqByTdY',
  chatId: '-805788689'
}

function sendTelegramMessage(message) {
  const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage`;
  
  const data = {
    chat_id: bot.chatId,
    text: message,
    parse_mode: 'HTML'
  };

  fetch(TELEGRAM_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log('Сообщение успешно отправлено в Telegram');
    } else {
      console.error('Ошибка при отправке сообщения в Telegram');
    }
  })
  .catch(error => {
    console.error('Ошибка при отправке сообщения в Telegram:', error);
  });
}

btn.addEventListener('click', () => {
  const messageText = message.value;
  sendTelegramMessage(messageText);
});

function filterOptions() {
  const select = document.getElementById("my-select");
  const input = document.getElementById("search-input");
  const options = select.getElementsByTagName("option");
  const resultDiv = document.getElementById("result");
  const searchTerm = input.value.toLowerCase();

  
  resultDiv.innerHTML = "";

  for (var i = 0; i < options.length; i++) {
    const option = options[i];
    const optionText = option.textContent.toLowerCase();
    const optionValue = option.value.toLowerCase();

    
    if (optionValue.indexOf(searchTerm) > -1 || optionText.indexOf(searchTerm) > -1) {
      
      const resultItem = document.createElement("div");
      resultItem.textContent = option.textContent;

      
      if (optionValue.indexOf(searchTerm) > -1) {
        const regex = new RegExp(searchTerm, "gi");
        resultItem.innerHTML = option.textContent.replace(regex, "<span class='highlight'>$&</span>");
      }

      resultDiv.appendChild(resultItem);
    }
  }

  
  if (resultDiv.innerHTML === "") {
    const noResults = document.createElement("div");
    noResults.textContent = "Нет результатов";
    resultDiv.appendChild(noResults);
  }
}
///////////////telegram bot///////////////////


/////////////////////////sect3////////////////////////////
const MyNewswiper = new Swiper(".mySwiper0", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/////////////////////////sect3////////////////////////////


//////////////////////accordion/////////////////////
const accrodionHeaders = document.querySelectorAll('.accrodion__name');


accrodionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    
    const content = header.nextElementSibling;
    
    
    header.classList.toggle('active');
    
    
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
//////////////////////accordion/////////////////////

////////////////////search block///////////////////
function selectProduct(imageSrc) {
  const productListItems = document.getElementsByClassName('product-list-item');
  for (var i = 0; i < productListItems.length; i++) {
      productListItems[i].classList.remove('selected-product');
  }

  const selectedProductImage = document.getElementById('selected-product-image');
  selectedProductImage.src = imageSrc;

  const clickedProduct = document.querySelector('.product-list-item[src="' + imageSrc + '"]');
  clickedProduct.classList.add('selected-product');
}
////////////////////search block///////////////////

/* /////////////swiper bloc1/////////////  */
const swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
/* /////////////swiper bloc1/////////////  */

/* //////////////swiper block2///////////// */
const swiperr = new Swiper(".swiper_mySwiperr", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* //////////////swiper block2///////////// */

/* //////////////swiper block3///////////// */
const Myswiper = new Swiper(".mySwiper3", {
slidesPerView: 3,
spaceBetween: 30,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});
/* //////////////swiper block3///////////// */