let currentPagePathArr = location.pathname.split('/');
let currentPage = location.pathname.split('/')[currentPagePathArr.length - 1];
let i = 0;

window.onload = () => {
  getMobileMenuActiveUrl();
  getPassPageEffect();
};

getMobileMenuActiveUrl = () =>{
  let element = document.getElementsByClassName("nav-items");
  let listElements = document.getElementsByClassName("nav-items-list");
  let arr = [];
  let newElementsArr;
  let newElements;
  for (let i = 0; i < element.length; i++) {
    newElementsArr = element[i].href.split('/');
    newElements = (newElementsArr[newElementsArr.length - 1]);
    arr = arr.concat(newElements);
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (currentPage === arr[i]) {
      listElements[i].classList.add('active');
    }
  }
}

getPassPageEffect = () => {
  const transition_el = document.getElementById("transition_section");
  const main = document.getElementById('main');
  const anchors = document.querySelectorAll("a");
  const header = document.querySelector("header");

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;
      if(!target){
        console.log(target);
        for (let index = 0; index < e.path.length; index++) {
          const element = e.path[index];
          if(element.tagName == 'A'){
            target = element.href; 
            break;
          }
        }
      }
      transition_el.classList.add("is-active");
      setTimeout(() => {
        window.location.href = target;
      }, 200);
    });
  }

  setTimeout(() => {
    transition_el.classList.remove("is-active");
    header.classList.remove("deactivate");
    main.classList.remove('deactivate');
  }, 400);
}

(getHeader = () => {
  fetch("./header.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    })
    .catch((err) => {
      console.log(err.message);
      setTimeout(() => {
        getHeader();
      }, 2000);
    });
})();

(getFooter = () => {
  fetch("./footer.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    })
    .catch((err) => {
      console.log(err.message);
      setTimeout(() => {
        getFooter();
      }, 2000);
    });
})()

toggleMenu = () => {
  document.getElementById("myLinks").classList.toggle("active");
}

removeLoadEffect = () => {
  let element = document.getElementById("transition_section");
  setTimeout(() => {
    element.classList.remove("is-active");
  }, 500)
};

typingEffect = (words) => {
  let word = words[i].split("");
  let wordElement = document.getElementById("word");
  let loopTyping = function () {
    if (wordElement && word.length > 0) {
      wordElement.innerHTML += word.shift();
    } else {
      setTimeout(() => {
        deletingEffect(words, wordElement);
      }, 1000);
      return false;
    }
    setTimeout(loopTyping, 100);
  };
  loopTyping();
}

deletingEffect = (words, wordElement) => {
  let word = words[i].split("");
  let loopDeleting = function () {
    if (wordElement && word.length > 0) {
      word.pop();
      wordElement.innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect(words);
      return false;
    }
    setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}