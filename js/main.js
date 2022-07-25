// var webDesign = document.getElementById('web-design')

// console.log(webDesign);
/*document.getElementById('web-design').onmouseover = function() {
    console.log("***");
  };*/

//   alert("**")
let currentPage = location.pathname.split('/')[2];

window.addEventListener('load', function () {
  let element = document.getElementsByClassName("nav-items");
  let listElements = document.getElementsByClassName("nav-items-list");
  let arr = [];
  let newElements;
  for (let i = 0; i < element.length; i++) {
    newElements = (element[i].href.split('/')[4]);
    arr = arr.concat(newElements);
  }
  for (let i = 0; i < arr.length; i++) {
    if (currentPage === arr[i]) {
      listElements[i].classList.add('active');
  }
}

});

fetch("./header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  })
  .catch((err) => {
    console.log(err.message);
  });
fetch("./footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.body.innerHTML += data;
  })
  .catch((err) => {
    console.log(err.message);
  });

// List of sentences
var _CONTENT = ["Easier", "Faster", "Better!"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
/*function Type() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1500);
	}
}*/

// Implements deleting effect
function Delete() {
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If last sentence then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;
    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
/*
_INTERVAL_VAL = setInterval(Type, 100);
*/

function myFunction() {
  document.getElementById("myLinks").classList.toggle("active");
}

// let companyClick = () => {
//   let element = document.getElementById("myCompany");
//   element.classList.toggle("active");
// };

let removeLoadEffect = () => {
  let element = document.getElementById("transition_section");
  setTimeout(() => {
    element.classList.remove("is-active");
  }, 500)
};

// let socialClick = () => {
//   let element = document.getElementById("mySocial");
//   element.classList.toggle("active");
// };

window.onload = () => {
  const transition_el = document.getElementById("transition_section");
  const main = document.getElementById('main');
  const anchors = document.querySelectorAll("a");
  const header = document.querySelector("header");

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;
      transition_el.classList.add("is-active");
      setTimeout(() => {
        window.location.href = target;
      }, 300);
    });
  }

  setTimeout(() => {
    transition_el.classList.remove("is-active");
    header.classList.remove("deactivate");
    main.classList.remove('deactivate');
  }, 300);
};

const words = ["More", "Fast", "Better"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  let ourWord = document.getElementById("word");
  let loopTyping = function () {
    if (ourWord && word.length > 0) {
      ourWord.innerHTML += word.shift();
    } else {
      setTimeout(deletingEffect, 1000);
      return false;
    }
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  let ourWord = document.getElementById("word");
  let loopDeleting = function () {
    if (ourWord && word.length > 0) {
      word.pop();
      ourWord.innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

typingEffect();


