function changeGrid(){
    let size;
    while(true){
        size=prompt("Enter the size of grid (16 - 100): ");
        if(size<16 || size>100)
            continue;
        else
            break;
    }
    createGrid(size);
}

function createGrid(size){
    const container = document.querySelector(".container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    container.setAttribute("style","display: flex; gap: 1px;flex: 1; flex-direction: column; width: 800px; height: 800px; margin-top: 30px")
    for(i = 0; i<size;i++){
        const row = document.createElement("div");
        row.setAttribute("style", `display: flex; flex: 1; gap: 1px; height: ${960/size}`);
        for(j = 0; j<size;j++){
            const cell = document.createElement("div");
            cell.setAttribute("style", "border: solid black 1px; flex: 1;");
            row.appendChild(cell);
            cell.classList.add("cell");
        } 
        container.appendChild(row);
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseout", () => {
            cell.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
        });
    });
}
createGrid(16);

