
let iteration = 0;
let numarr = [1,2,3,4,5,6,7,8,9]
const MAX_PREFERD_OUT = 100000;
 
const fs = require('fs');

const sudokuBoard = [
    [0, 0, 0, 2, 0, 8, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 6, 0, 9, 4, 0],
    [0, 0, 7, 0, 0, 0, 2, 0, 0],
    [0, 0, 1, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 0, 0, 8],
    [0, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 3, 0]
];
const startTime = new Date().getTime() / 1000;

console.log("running js code..wait few seconds...\n");
// want to see sudoku solved solutions note: speed can get affected
//in a file uncomment line 6,56 and see js_solutions.txt
// or in console uncomment line 57
place(sudokuBoard)
const endTime = new Date().getTime() / 1000;
console.log(`js program created ${iteration} outputs in ${endTime-startTime} seconds`);





function place(box){
    

    if((iteration<MAX_PREFERD_OUT)){

        let pos = nextPosition(box)//returns x and y of 0 if any else false
        let row = pos[0]
        let col = pos[1]
        
        if(pos[0]!==false){
            
        for(let i=1;i<=9;i++){
        
            if(constraint(box ,i , row , col)){
 
                box[row][col]=i;
                place(box);

            }
        }
            box[row][col]=0;
            return
        }else{
            //one sucess ful otput otained
            iteration = iteration+1;
            // console.log("the solution can be : \n");
            // writeToFile();
            // dispBoard(box)//displays the sudoku board
        }
    }
    
    
    
}
function nextPosition(box){
    
    for(let i=0;i<box[0].length;i++){
        for(let j=0;j<box[0].length;j++){
            if(box[i][j]==0){
                return [i,j]
            }
        }
    }
    return [false]
}
function constraint(box,num,row,col){
    
    let flag = true
    let cubeCol = Math.floor(col/3)
    let cubeRow = Math.floor(row/3)
    
    
    let colstart = cubeCol*3
    let rowstart = cubeRow*3

    //cube check
    for(let i=rowstart;i<rowstart+3;i++){
        for(let j = colstart;j<colstart+3;j++){
            if(num==box[i][j]){
                flag = false
                return flag 
            }
        }
    }

    for(i=0;i<9;i++){
        //row check
        if(num==box[row][i]){
            flag = false
            return flag 
        }
        //col check
        if(num==box[i][col]){
            flag = false
            return flag 
        }
    }

    return flag
}

function dispBoard(b) {
    for(let i=0;i<b.length;i++){
        let temp = b[i].join(',')
        console.log(temp);
    }
    console.log("\n.....................\n",iteration)
}


function writeToFile() {
    const filePath = 'js_solutions.txt';

    // Use the 'a' flag to open the file in append mode
    fs.appendFileSync(filePath, `\n out no : ${iteration}\n`);

    for (let i = 0; i < 9; i++) {
        // Iterate through the columns of the array
        for (let j = 0; j < 9; j++) {
            // Write each element of the row to the file
            fs.appendFileSync(filePath, `${sudokuBoard[i][j]}  `);

            // Add a space between elements
        }

        // Add a newline character at the end of each row
        fs.appendFileSync(filePath, '\n');
    }
}