// Elements
const modalText = document.querySelector('.modal__text');
const modalNumber = document.querySelector('.modal__number');
const modalButton = document.querySelector('.modal__button');

// Main function to get advice
const getAdvice = async () => {
	const URL = 'https://api.adviceslip.com/advice';
	try {
		// Get response
		const res = await fetch(URL);
		if (!res.ok) throw new Error('Error in the response');

		// Extract data and assign accordingly
		const data = await res.json();
		const advice = data.slip.advice;
		const id = data.slip.id;

		// Display to the user
		modalText.textContent = `“${advice}”`;
		modalNumber.textContent = `advice #${id}`;
		[modalText, modalNumber].forEach(el => el.classList.remove('blurred'));
	} catch (error) {
		// Display error message to the user
		const errorMessage = 'Cannot get a new quote 😔. Try again🌟';
		modalText.textContent = errorMessage;
	}
};
getAdvice();

// Event handling
modalButton.addEventListener('click', getAdvice);
