//Create main div and style it

const main_area = document.createElement('div');
document.body.appendChild(main_area);

main_area.style.position = 'absolute';
main_area.style.top = '50%';
main_area.style.left = '50%';
main_area.style.transform = 'translate(-50%, -50%)';

//Create title, style title

const title = document.createElement('h1');
main_area.appendChild(title);
title.textContent = 'Counter app';

title.style.display = 'grid';
title.style.placeItems = 'center';

//create number, style it and adding to body

let number = document.createElement('p');
let n1 = 0;
number.innerHTML = n1;
main_area.appendChild(number);

number.style.display = 'grid';
number.style.placeItems = 'center';

//Create div, add to body, create in div three buttons and style it

const btn_area = document.createElement('div');
main_area.appendChild(btn_area);

btn_area.style.display = 'flex';
btn_area.style.justifyContent = 'center';
btn_area.style.alignItems = 'center';

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.textContent = 'Increment';
btn2.textContent = 'Reset';
btn3.textContent = 'Decrement';

btn1.style.margin = '10px';
btn1.style.padding = '10px';
btn1.style.backgroundColor = 'green';
btn1.style.border = 'none';
btn1.style.color = 'aliceblue';
btn1.style.borderRadius = '5px';
btn1.style.cursor = 'pointer';

btn2.style.margin = '10px';
btn2.style.padding = '10px';
btn2.style.backgroundColor = 'grey';
btn2.style.border = 'none';
btn2.style.color = 'aliceblue';
btn2.style.borderRadius = '5px';
btn2.style.cursor = 'pointer';

btn3.style.margin = '10px';
btn3.style.padding = '10px';
btn3.style.backgroundColor = 'red';
btn3.style.border = 'none';
btn3.style.color = 'aliceblue';
btn3.style.borderRadius = '5px';
btn3.style.cursor = 'pointer';

btn_area.appendChild(btn1);
btn_area.appendChild(btn2);
btn_area.appendChild(btn3);

// //Create event in buttons

btn1.addEventListener('click', () => {
	n1 += 1;
	number.innerHTML = n1;
});

console.log(n1);

btn2.addEventListener('click', () => {
	n1 = 0;
	number.textContent = n1;
});

btn3.addEventListener('click', () => {
	n1 -= 1;
	number.innerHTML = n1;
});
