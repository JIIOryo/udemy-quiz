javascript: (function() {

  // 背景色
  [...document.getElementsByClassName('mc-quiz-answer--correct--is6Db')].forEach(el => el.style['background-color'] = '#FFF0');

  // 文字
  [...document.getElementsByClassName('mc-quiz-answer--correctness--3pFQG')].forEach(el => el.style.color = '#FFF0');

  // ラジオボタンとかがチェックできるようになる
  document.getElementsByName('answer').forEach(el => el.disabled = false);

  alert('Good luck 👋')

})();
