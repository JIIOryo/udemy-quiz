
[...document.getElementsByClassName("mc-quiz-answer--correct--is6Db")].forEach(el => el.style['background-color'] = '#FFF0');
[...document.getElementsByClassName("mc-quiz-answer--correctness--3pFQG")].forEach(el => el.parentNode.removeChild(el));
document.getElementsByName("answer").forEach(el => el.disabled = false);
alert('Good luck 👋');
completion();
