import domReady from "./xpage/ready";
import App from "./xpage/core";
import EventListener from "./xpage/EventListener";

domReady(() => {
	const curInputs = App.elementsGetter(".default-input__input--file");

	console.log(curInputs)

	for (const input of curInputs)
		observerFileInput(input);

	const obsConfig: MutationObserverInit = {
		childList: true,
		subtree: true
	};

	const callback = (mutationList: Array<MutationRecord>) => {
		for (const mutation of mutationList)
			mutation.addedNodes.forEach((node: HTMLElement) => {
				if (node && node.classList && node.classList.contains("default-input__input--file"))
					observerFileInput(node);
			});
	};

	const observer = new MutationObserver(callback);

	observer.observe(document.body, obsConfig);
});

function observerFileInput(input: HTMLElement): void{
	new EventListener(input).add("change", (el: HTMLInputElement) => {
		const parent = el.closest(".default-input"),
			fileNameField = parent.querySelector(".default-input__input[type=text]") as HTMLInputElement;

		if (el.files.length){
			let names = [];

			for (let i = 0; i < el.files.length; i++)
				names.push(el.files[i].name)

			fileNameField.value = names.join(", ");
		}else{
			fileNameField.value = "";
		}
	})
}