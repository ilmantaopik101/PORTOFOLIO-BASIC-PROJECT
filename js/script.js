const revealButton = document.getElementById('revealButton');
const panelContent = document.getElementById('panelContent');

revealButton.addEventListener('click', () => {
  panelContent.classList.add('panel-active');
});
