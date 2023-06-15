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


const swiperEl = document.querySelector('swiper-container')

const params = {
  injectStyles: [`
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
  `],
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
}

Object.assign(swiperEl, params)

swiperEl.initialize();



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


function selectProduct(imageSrc) {
  var productListItems = document.getElementsByClassName('product-list-item');
  for (var i = 0; i < productListItems.length; i++) {
      productListItems[i].classList.remove('selected-product');
  }

  var selectedProductImage = document.getElementById('selected-product-image');
  selectedProductImage.src = imageSrc;

  var clickedProduct = document.querySelector('.product-list-item[src="' + imageSrc + '"]');
  clickedProduct.classList.add('selected-product');
}