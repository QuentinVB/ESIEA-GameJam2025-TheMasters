
class CodeSrc extends HTMLElement {
	contents;

	constructor() {
		super();
	}

	handleCopy() {
		navigator.clipboard.writeText(this.contents);
	}

	connectedCallback() {
		if (this.dataset.hideControls === undefined) {
			const $downloadAnchor = document.createElement("a");
			$downloadAnchor.setAttribute("href", this.getAttribute("src"));
			$downloadAnchor.innerText = this.getAttribute("src");

			const $dashNode = document.createTextNode(" - ");

			const $copySpan = document.createElement("span");
			$copySpan.innerText = "copier";
			$copySpan.addEventListener("click", () => this.handleCopy());
			$copySpan.classList.add("link");

			const $actionsSpan = document.createElement("span");
			$actionsSpan.appendChild($downloadAnchor);
			$actionsSpan.appendChild($dashNode);
			$actionsSpan.appendChild($copySpan);

			this.appendChild($actionsSpan);
		}

		this.$code = document.createElement("code");
		this.$code.className = this.className;
		this.$pre = document.createElement("pre");
		this.$pre.style.marginTop = `0px`;

		if (this.dataset.noSelect !== undefined) {
			this.$pre.style.userSelect = `none`;
		}

		this.$pre.appendChild(this.$code);
		this.appendChild(this.$pre);

		this.updateInnerText();
	}

	attributeChangedCallback() {
		this.updateInnerText();
	}

	updateInnerText() {
		fetch(this.getAttribute("src"))
			.then((response) => response.text())
			.then((text) => {
				this.$code.textContent = text;
				this.contents = text;

				if (hljs) {
					hljs.highlightElement(this.$code);
				}
			});
	}
}

customElements.define("code-src", CodeSrc);
