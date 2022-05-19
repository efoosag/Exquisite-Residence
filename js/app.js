const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav_menu');
const menuItem = document.querySelectorAll('.nav_menu_item');
const closeButton = document.querySelector('.close_button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  closeButton.classList.toggle('active');
});

menuItem.forEach((n) => {
  n.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});

const card = document.querySelector('.guest_speaker');
const h3 = document.createElement('h3');
h3.classList.add('guest_title');
h3.innerText = 'Guest Speaker';
const div = document.createElement('div');
div.classList.add('bar');
const ul = document.createElement('ul');
ul.classList.add('speakers');
card.append(h3);
card.append(div);
card.append(ul);

const speakerLists = [
  {
    sImage: ['./images/person1.jpg'],
    name: 'Engr. John Samuel',
    discipline: `A professor of the department of Civil Enineering in the
    Unviversity og Lagos, Nigeria.`,
    biography: 'He was born in the year 1975 and he is married with three kids',
  },
  {
    sImage: ['./images/person2.jpg'],
    name: 'Prof. Magret James',
    discipline: `A professor of the department of Structural Enineering in the
    Unviversity og Abuja, Nigeria.`,
    biography:
      'He was born in the United States of America in the year 1960 and she is married with two kids',
  },
  {
    sImage: ['./images/person1.jpg'],
    name: 'Engr. John Samuel',
    discipline: `A professor of the department of Civil Enineering in the
    Unviversity og Lagos, Nigeria.`,
    biography: 'He was born in the year 1975 and he is married with three kids',
  },
  {
    sImage: ['./images/person2.jpg'],
    name: 'Prof. Magret James',
    discipline: `A professor of the department of Structural Enineering in the
    Unviversity og Abuja, Nigeria.`,
    biography:
      'He was born in the United States of America in the year 1960 and she is married with two kids',
  },
  {
    sImage: ['./images/person1.jpg'],
    name: 'Engr. John Samuel',
    discipline: `A professor of the department of Civil Enineering in the
    Unviversity og Lagos, Nigeria.`,
    biography: 'He was born in the year 1975 and he is married with three kids',
  },
  {
    sImage: ['./images/person2.jpg'],
    name: 'Prof. Magret James',
    discipline: `A professor of the department of Structural Enineering in the
    Unviversity og Abuja, Nigeria.`,
    biography:
      'He was born in the United States of America in the year 1960 and she is married with two kids',
  },
  {
    sImage: ['./images/person1.jpg'],
    name: 'Engr. John Samuel',
    discipline: `A professor of the department of Civil Enineering in the
    Unviversity og Lagos, Nigeria.`,
    biography: 'He was born in the year 1975 and he is married with three kids',
  },
  {
    sImage: ['./images/person2.jpg'],
    name: 'Prof. Magret James',
    discipline: `A professor of the department of Structural Enineering in the
    Unviversity og Abuja, Nigeria.`,
    biography:
      'He was born in the United States of America in the year 1960 and she is married with two kids',
  },
];

let speakerImage = '';
let speakerName = '';
let speakerDiscipline = '';
let speakerBiography = '';

speakerLists.forEach((n) => {
  speakerImage = n.sImage;
  speakerName = n.name;
  speakerDiscipline = n.discipline;
  speakerBiography = n.biography;

  const content = `<div class="speaker_image">
      <img class="check" src="./images/check_box.png" alt="First Speaker"/>
      <img class="speak_image" src="${speakerImage}" alt="First Speaker" />
    </div>
    <div class="speaker_details">
      <h4 class="speaker_name">${speakerName}</h4>
      <p class="speaker_discipline">${speakerDiscipline}</p>
      <p class="speaker_biography">${speakerBiography}</p>
    </div>`;

  const li = document.createElement('li');
  li.classList.add('speaker_lists');
  li.innerHTML = content;
  ul.append(li);
});
