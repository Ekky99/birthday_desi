(function(event){
    launchConfetti();
    loadBonusgift();
}())    

var panelShowing = null;
function updatePanels(paramPanel) {
  const panelNames = ["HiddenBonusGift", "HiddenEnding"];
  for (let panelName of panelNames) {
    const panel = document.getElementById(panelName);
    if (panelName === paramPanel) panel.classList.remove("hide");

  }
}

function loadBonusgift(){
  let bonusButton = document.querySelector('#BonusButton');
  bonusButton.addEventListener('click', event=>   {
    launchConfetti();
    panelShowing = panelShowing == "HiddenBonusGift" ? null : "HiddenBonusGift";
    updatePanels(panelShowing);
    panelShowing = panelShowing == "HiddenEnding" ? null : "HiddenEnding";
    updatePanels(panelShowing);
      
  })
}
function launchConfetti() {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;

    // Random colors
    const colors = ['#0D92F4', '#77CDFF', '#F95454', '#C62E2E'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    window.onload = launchConfetti;

    
  }