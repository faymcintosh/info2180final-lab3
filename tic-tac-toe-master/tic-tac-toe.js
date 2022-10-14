function funGame(){
    let index = 0;
    let board = document.getElementById('board');
    let endPlayer = 'O';
    let status = document.getElementById('status');
    let restart = document.getElementsByClassName('btn')[0];
    let isOver = false;
    let boxes = board.getElementsByTagName('div');
    let player = new Array(9); 
    

    for (let square of boxes){ 
        square.classList.add('square');
       
        
        square.onclick = (e)=>{
            square.id = index ++; 

            if (endPlayer === 'X'){
                e.target.innerText = 'O';
                e.target.classList.add('O');
                player[e.target.id] = 'O';
                endPlayer = 'O';
                
            }


        
            else if (endPlayer === 'O'){
                e.target.innerText = 'X';
                e.target.classList.add('X');
                player[e.target.id] = 'X';
                endPlayer = 'X';
               
            }

            if ( player[0] !== undefined && ((player[0]===player[1] && player[1]===player[2]) 
                || (player[0]===player[3] && player[3]===player[6]) 
                || (player[0]===player[4] && player[4]===player[8]) )){  
                
                status.innerText = `Congratulations! ${player[0]} is the Winner!`;
                status.classList.add('you-won');
                isOver = true;
                
            }
            

            else if( player[8] !== undefined && ((player[6]===player[7] && player[7]===player[8]) 
                || (player[2]===player[5] && player[5]===player[8]))){
                    
                status.innerText = `Congratulations! ${player[8]} is the Winner!!!`;
                status.classList.add('you-won');
                isOver = true;
                
            }

            else if (player[4] !== undefined && ((player[1]===player[4] && player[4]===player[7]) 
                || (player[3]===player[4] && player[4]===player[5])
                || (player[2]===player[4] && player[4]===player[6]) )){
                
                status.innerText = `Congratulations! ${player[4]} is the Winner!`;
                status.classList.add('you-won');
               
                
            }

        };

        square.onmouseover = e =>{
            if(!isOver){
                event.target.classList.add('hover');
            }
        };

        square.onmouseleave = e =>{
            event.target.classList.remove('hover');
        };
    }


    restart.onclick = e =>{
        isOver = false;
        player = new Array(9);
        
        status.classList.remove('you-won');
        status.innerText = 'Move the mouse over a square then click to play a X or an O.';

        endPlayer = 'O';
        endPlayer = 'X';

        for (let square of boxes){
            square.classList.remove('X');
            square.classList.remove('O');
            square.innerText = '';
        }

    };
}
window.onload = e =>{
    funGame();
}
