



const container = document.querySelector("#container")
const normalModeBtn = document.querySelector("#draw")
const rgbModeBtn = document.querySelector("#rgb")
const specialModeBtn = document.querySelector("#special")
const refreshBtn = document.querySelector("#refresh")



function colorBlack(element) {

	element.target.style.backgroundColor = "black"
}
//tomorrow try to see if i can use element.target.backgroundColor == "" over here instead of in the event listener below so i can manage to remove it later with no issue lols
function colorRgb(element) {

	const x = Math.floor(Math.random() * 255)
	const y = Math.floor(Math.random() * 255)
	const z = Math.floor(Math.random() * 255)
	element.target.style.backgroundColor = `rgb(${x},${y},${z})`



	//	element.target.style.opacity = (parseFloat(element.target.style.opacity) || 0) + 0.2





}






function colorSpecial(element, decrease) {


	element.target.setAttribute("data-shade", decrease)

	element.target.style.filter = `brightness(${100 - element.target.dataset.shade}%)`





}



const gridSize = prompt("Enter grid size: ")
for (let i = 0; i < gridSize; i++) {

	for (let j = 0; j < gridSize; j++) {

		const createGrid = document.createElement("div")
		createGrid.style.borderColor = "black"
		createGrid.style.borderWidth = "1px"
		createGrid.style.borderStyle = "solid"
		createGrid.style.width = 960 / gridSize + "px"
		createGrid.style.height = 960 / gridSize + "px"

		createGrid.style.boxSizing = "border-box"
		createGrid.style.flexGrow = 1;

		container.appendChild(createGrid)

		function decreaseBrightnessClosure() {

			let decreaseAmount = 0


			function add10(e) {


				e.target.style.filter = `brightness(${100 - decreaseAmount}%)`

				decreaseAmount += 10

			}

			return add10
		}



		let decreaseBrightness = decreaseBrightnessClosure()

		normalModeBtn.addEventListener("click", () => {

			createGrid.removeEventListener("mouseover", colorRgb)
			createGrid.addEventListener("mouseover", colorBlack)

		})

		rgbModeBtn.addEventListener("click", () => {

			createGrid.removeEventListener("mouseover", colorBlack)
			createGrid.addEventListener("mouseover", colorRgb)


		})

		refreshBtn.addEventListener("click", () => {
			createGrid.style.backgroundColor = ""
			createGrid.style.filter = "brightness(100%)"
			createGrid.removeEventListener("mouseover", colorBlack)
			createGrid.removeEventListener("mouseover", colorRgb)
			createGrid.removeEventListener("mouseover", decreaseBrightness)
			createGrid.style.opacity = ""

		})




		specialModeBtn.addEventListener("click", () => {
			createGrid.removeEventListener("mouseover", colorBlack)
			createGrid.removeEventListener("mouseover", colorRgb)



			createGrid.addEventListener("mouseover", decreaseBrightness)

		})

	}

}
