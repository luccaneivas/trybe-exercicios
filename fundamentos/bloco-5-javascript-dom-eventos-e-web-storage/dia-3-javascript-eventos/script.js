function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function popDaysOfTheWeek() {
  const daysList = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = document.createElement('li');
    day.className = 'day';
    day.innerText = dezDaysList[i];
    if (i === 25 || i === 26 || i === 32) {
      day.classList.add('holiday');
    } else if (i === 4 || i === 11 || i === 18 || i === 25) {
      day.classList.add('friday');
    }
    daysList.appendChild(day);
  }
}

popDaysOfTheWeek();

function createFeriadoButton(string) {
  const div = document.querySelector('.buttons-container');
  let feriadoButton = document.createElement('button');
  feriadoButton.id = 'btn-holiday';
  feriadoButton.innerText = string;

  div.appendChild(feriadoButton);
}

createFeriadoButton('Feriados');

function alteraFeriados(){
  const feriadoButton = document.getElementById('btn-holiday');
  feriadoButton.addEventListener('click', function () {
  let holidays = document.getElementsByClassName('holiday');
  for (const holiday of holidays) {
    if (holiday.style.backgroundColor === 'yellow'){
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holiday.style.backgroundColor = 'yellow';
    }
  }
});
}

alteraFeriados();

