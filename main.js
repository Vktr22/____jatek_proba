import Jatek from "./VJatek.js";
  
  window.onload = function () {
    var jatek = new Jatek();
    jatek.startGame();
  };

  function vJadatokListaba(data) {
    const vJadatLISTA = data.allQuestions;
    console.log(vJadatLISTA);
}
  