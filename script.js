    var Window = document.getElementById("my-Window-Modal");
    
    // Получите элемент <span>, который закрывает модальное окно
    var spanWindow = document.getElementsByClassName("close")[0];

    const Language_button = document.getElementById('language-button')

    // Когда страница загружается, откройте модальное окно
    window.onload = function() {
        Window.style.display = "block";
        changeLanguage('eng')
        }
    Language_button.onclick = function () {
      Window.style.display = "block";
        }

    // Когда пользователь нажимает на <span> (x), закройте модальное окно
    spanWindow.onclick = function() {
        Window.style.display = "none";
    }
    
    var Close = document.getElementById("Close1"); 

    Close.onclick = function () {
      Window.style.display = "none";
        }
    
    
    // Получить модальное окно
    var modal = document.getElementById("myModal");

    // Получить кнопку, которая открывает модальное окно
    var btn = document.getElementById("myBtn");

    // Получить кнопку, которая открывает модальное окно
    var btn = document.getElementById("myBtn");

    // Получить элемент <span>, который закрывает модальное окно
    var span = document.getElementsByClassName("btn-close")[0];

    // Когда пользователь нажимает на кнопку, открывается модальное окно 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // Когда пользователь нажимает на <span> (x), закрыть модальное окно
    span.onclick = function () {
      modal.style.display = "none";
    }

    function changeLanguage(lang = 'eng') {
        let elementsEng = document.querySelectorAll('[id$="Eng"]:not(.language-button)');
        let elementsUkr = document.querySelectorAll('[id$="Ukr"]:not(.language-button)');
        let buttonEng = document.querySelector('#Eng.language-button');
        let buttonUkr = document.querySelector('#Ukr.language-button');
        
        if (lang === 'eng') {
          elementsEng.forEach(el => el.style.display = "block");
          elementsUkr.forEach(el => el.style.display = "none");
          buttonEng.classList.add('active')
          buttonUkr.classList.remove('active');
        }else{
          elementsEng.forEach(el => el.style.display = "none");
          elementsUkr.forEach(el => el.style.display = "block");
          buttonUkr.classList.add('active')
          buttonEng.classList.remove('active');
        } 
    }
    
    document.addEventListener('mousemove', function(e) {
      var textElements = document.querySelectorAll('.text');
      var x = (e.clientX - window.innerWidth / 2) / 75; // Уменьшен делитель
      var y = (e.clientY - window.innerHeight / 2) / 75; // Уменьшен делитель
      
      textElements.forEach(function(text) {
        var scale = Math.max(Math.abs(x), Math.abs(y)) / 100;
        text.style.transform = `scale(${1 + scale}) rotateY(${x}deg) rotateX(${y}deg) rotateY(${x}deg) rotateX(${y}deg)`;
      });
    });

    document.addEventListener('mousemove', function(e) {
      var x = e.clientX / window.innerWidth * 100;
      var y = e.clientY / window.innerHeight * 100;
      
      document.body.style.backgroundPosition = `${x}% ${y}%`;
    });
    
    function saveData() {
        var inputFields = ['NAME', 'AGE', 'Share'];
        var statusIcons = ['IconNAME', 'IconAGE', 'IconShare'];
      
        for (var i = 0; i < inputFields.length; i++) {
          var inputField = document.getElementById(inputFields[i]);
          var statusIcon = document.getElementById(statusIcons[i]);
      
          if (inputField.value == '') {
              statusIcon.innerHTML = 'Напишите тут пожалуйста';
              alert('Поле ' + inputFields[i] + ' пустое. Пожалуйста, заполните его.');
              return; // выходим из функции, если поле пустое
          } else {
          }
        }
      }

    buttonEng.addEventListener('mousedown', function() {
        this.classList.add('active');
      });
      
    buttonEng.addEventListener('mouseup', function() {
        this.classList.remove('active');
      });

      function checkInputName() {
        var inputField = document.getElementById('NAME');
        var statusIcon = document.getElementById('IconNAME');
    
        if (inputField.value == '') {
            // Поле пустое, показываем крестик
            statusIcon.innerHTML = '<img src="Logo-site/крестик в кружке.jpg" width="15px" />';
        } else {
            // Поле заполнено, показываем галочку
            statusIcon.innerHTML = '<img src="Logo-site/галочка в кружке.png" width="15px" />';
        }
    }
    
    function checkInputAge() {
        var inputField = document.getElementById('AGE');
        var statusIcon = document.getElementById('IconAGE');
    
        if (inputField.value == '') {
            // Поле пустое, показываем крестик
            statusIcon.innerHTML = '<img src="Logo-site/крестик в кружке.jpg" width="15px" />';
        } else {
            // Поле заполнено, показываем галочку
            statusIcon.innerHTML = '<img src="Logo-site/галочка в кружке.png" width="15px" />';
        }
    }
    
    function checkInputShare() {
        var inputField = document.getElementById('Share');
        var statusIcon = document.getElementById('IconShare');
    
        if (inputField.value == '') {
            // Поле пустое, показываем крестик
            statusIcon.innerHTML = '<img src="Logo-site/крестик в кружке.jpg" width="15px" />';
        } else {
            // Поле заполнено, показываем галочку
            statusIcon.innerHTML = '<img src="Logo-site/галочка в кружке.png" width="15px" />';
        }
    }

    // Здесь вы можете добавить код для сохранения данных пользователя в базу данных
    console.log(userInput);

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))