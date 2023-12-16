
let iteration = 0;
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


let numarr = [1,2,3,4,5,6,7,8,9]

function place(box){
    
    let pos = voidPos(box)//returns x and y of 0 if any else false
    let row = pos[0]
    let col = pos[1]
    

    
    if(pos[0]!==false){
        
     for(let i=1;i<=9;i++){
      
            if(constraint(box ,i , row , col)){

                
                box[row][col]=i;
                
                place(box)

            }
        }
        box[row][col]=0;
        
        return
    }else{
        iteration = iteration+1;
        console.log("the solution can be : \n");
        dispBoard(box)//displays the sudoku board
    }
    
    
}

function voidPos(box){
    
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
function check(box){
    let cflag = true
    for(let i=0;i<9;i++){
        for(let j = 0;j<9;j++){
            if(box[i][j]==0){
                return false
            }
        }
    }
    return cflag
}
function dispBoard(b) {
    for(let i=0;i<b.length;i++){
        let temp = b[i].join(',')
        console.log(temp);
    }
    console.log("\n.....................\n",iteration)
}
 
place(sudokuBoard)
