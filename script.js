// Elements
const modalText = document.querySelector('.modal__text');
const modalNumber = document.querySelector('.modal__number');
const modalButton = document.querySelector('.modal__button');

// Main function to get advice
const getAdvice = async () => {
	const URL = 'https://api.adviceslip.com/advice';
	try {
		const res = await fetch(URL);
		const data = await res.json();
		const advice = data.slip.advice;
		const id = data.slip.id;

		modalText.textContent = `“${advice}”`;
		modalNumber.textContent = `advice #${id}`;

		[modalText, modalNumber].forEach(el => el.classList.remove('blurred'));
	} catch (error) {
		console.error(error);
	}
};
getAdvice();

// Event handling
modalButton.addEventListener('click', getAdvice);
