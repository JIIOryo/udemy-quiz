javascript: (function() {

  // 背景色
  [...document.getElementsByClassName('mc-quiz-answer--correct--is6Db')].forEach(el => el.style['background-color'] = '#FFF0');

  // 「正解」の文字を削除する
  [...document.getElementsByClassName("mc-quiz-answer--correctness--3pFQG")].forEach(el => el.parentNode.removeChild(el));

  // ラジオボタンとかがチェックできるようになる
  document.getElementsByName('answer').forEach(el => el.disabled = false);

  alert('Good luck 👋')

})();
