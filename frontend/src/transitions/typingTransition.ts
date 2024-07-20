import { afterUpdate } from "svelte";

export function typingTransition(node:any, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		return
	}

	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t:any) => {
			const i = Math.trunc(text.length * t);
			var span = document.createElement("span");
			span.classList.value = "font-bold text-lg"
			node.textContent = text.slice(0, i-1);
			span.textContent = text.slice(Math.max(i-1,0),i)
			node.appendChild(span)
			setTimeout(()=>{
				node.textContent = text.slice(0,i)
			},100)
		}
	};
}