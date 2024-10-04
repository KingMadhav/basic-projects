function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = (seconds / 60) * 360  -90;
    const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6  -90;
    const hoursDegree = (hours % 12 / 12) * 360 + (minutes / 60) * 30  -90; 

    const secondHand = document.querySelector('.second_hand');
    const minuteHand = document.querySelector('.minute_hand');
    const hourHand = document.querySelector('.hour_hand');

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  }

  setInterval(updateClock, 1000);

  updateClock();