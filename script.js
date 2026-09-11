const scenes = Array.from(document.querySelectorAll(".scene"));
const previousButton = document.querySelector("#previous-scene");
const nextButton = document.querySelector("#next-scene");
const status = document.querySelector("#scene-status");
const progressItems = Array.from(document.querySelectorAll(".scene-progress i"));
let currentScene = 0;

function showScene(index) {
  currentScene = Math.max(0, Math.min(index, scenes.length - 1));

  scenes.forEach((scene, sceneIndex) => {
    const isCurrent = sceneIndex === currentScene;
    scene.hidden = !isCurrent;
    scene.classList.toggle("is-active", isCurrent);
  });

  previousButton.disabled = currentScene === 0;
  nextButton.disabled = currentScene === scenes.length - 1;
  status.textContent = `Scene ${currentScene + 1} of ${scenes.length}`;
  progressItems.forEach((item, itemIndex) => {
    item.classList.toggle("is-current", itemIndex === currentScene);
  });
}

previousButton.addEventListener("click", () => showScene(currentScene - 1));
nextButton.addEventListener("click", () => showScene(currentScene + 1));
showScene(0);
