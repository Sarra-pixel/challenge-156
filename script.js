const moodButtons = document.querySelectorAll('.mood-btn');
const moodHistoryList = document.getElementById('mood-history');

const moodData = {
  "😄": { mood: "Happy", message: "Keep smiling! 🌟" },
  "😢": { mood: "Sad", message: "It's okay to feel down. Better days are coming. 💛" },
  "😖": { mood: "Stressed", message: "Breathe... You are doing your best. 🌿" },
  "😴": { mood: "Tired", message: "Rest is important. Take it easy. 💤" },
  "🤩": { mood: "Excited", message: "Enjoy every moment! 🎉" }
};

function getToday() {
  const today = new Date();
  return today.toLocaleDateString();
}

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const emoji = button.textContent;
    const { mood, message } = moodData[emoji];
    const date = getToday();

    const listItem = document.createElement('li');
    listItem.className = 'history-item';
    listItem.innerHTML = `
      <div><strong>${date}</strong></div>
      <div>${emoji} - ${mood}</div>
      <div class="encouragement">${message}</div>
    `;

    moodHistoryList.insertBefore(listItem, moodHistoryList.firstChild);
  });
});
