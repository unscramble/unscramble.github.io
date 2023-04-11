
startDate = new Date('Thu Mar 23 2023 00:00:00 GMT-0400 (Eastern Daylight Time)');
todayDate = new Date();

let janOne = new Date(todayDate.getFullYear(),0,1);
let week = Math.ceil((((todayDate.getTime() - janOne.getTime()) / 86400000) + janOne.getDay() + 1) / 7); 

dayDiff = Math.floor((Math.abs(todayDate - startDate)/1000)/(60*60*24))

let instanceNum = localStorage.getItem('instanceNum');
if (instanceNum == null) {
    localStorage.setItem('instanceNum', dayDiff);
} else { 
    if (dayDiff > localStorage.getItem('instanceNum')) {
        localStorage.clear();
        localStorage.setItem('instanceNum',dayDiff);
    }
}

// easy word list
let word_four_list = ['coat','fish','good','read','mean','next','work','road','toad','head','jeep','moon','food','near','star','land','mine','ship','rate','zero','gate','edge','mark','even','free','itch','form','tone','tune','loaf','wave','ache','sign','brew','comb','glue','vest']
let word_five_list = ['point','great','broke','front','quick','speed','money','chase','write','cheap','green','twist','chant','serve','yacht','noise','wedge','prize','trend','trail','pause','eject','twine','knock','quake','awake','rouge','blend','glare','vault','swirl','broil','knead','whisk','sweep','click','slump','pivot','visit','reset','brisk','panel','smart','radio']

// harder word list
//let word_four_list = ['coat','fish','good','read','mean','next','work','road','toad','head','jeep','moon','food','near','star','land','mine','ship','rate','zero','gate','edge','mark','even','free','itch','form','tone','tune','loaf','wave','ache','sign','brew','comb','glue','vest']
//let word_five_list = ['point','great','broke','front','quick','speed','money','chase','write','cheap','green','twist','chant','serve','yacht','noise','wedge','prize','trend','trail','pause','eject','twine','knock','quake','awake','rouge','blend','glare','vault','swirl','broil','knead','whisk','sweep','click','slump','pivot','visit','reset','brisk','panel','smart','radio']


let gameplay = true;
let lastturn = false;

let guessed_words = [];


randNum1 = parseInt(todayDate.getDate().toString() + todayDate.getMonth().toString().padStart(2,0) + todayDate.getYear().toString());
randNum1 = (randNum1/(todayDate.getDay()+110)) % 1;

randNum2 = parseInt(todayDate.getDate().toString() + todayDate.getMonth().toString().padStart(2,0) + todayDate.getYear().toString());
randNum2 = (randNum2/(week + 3)) % 1;


function getRandom(word_list, randNum) {
    let rand_num = Math.floor(randNum * word_list.length)
    return rand_num;
}


let word_four = ''
let word_five = ''


function displayBoard () {
    // Initialize Board
    if (localStorage.getItem('init_board') == null) {
        word_four = word_four_list[getRandom(word_four_list, randNum1)];
        word_five = word_five_list[getRandom(word_five_list, randNum2)];
        let combined_words = word_four + word_five;
        localStorage.setItem('word_four',JSON.stringify(word_four));
        localStorage.setItem('word_five',JSON.stringify(word_five));
        gb = createBoard(combined_words,randomizer,seed);
        localStorage.setItem('init_board',JSON.stringify(gb));
        localStorage.setItem('game_board',JSON.stringify(gb));
        localStorage.setItem('guessed_word_cnt', 0);
        // add in gameplay/lastturn check
        localStorage.setItem('gameplay',JSON.stringify(gameplay));
        localStorage.setItem('lastturn',JSON.stringify(lastturn));
    } else {
    // get previous data from local storage
        word_four = JSON.parse(localStorage.getItem('word_four'));
        word_five = JSON.parse(localStorage.getItem('word_five'));
        localStorage.setItem('guessed_word_cnt',JSON.parse(localStorage.getItem('guessed_word_cnt')))
        // add in gameplay/lastturn ref
        gameplay = JSON.parse(localStorage.getItem('gameplay'));
        lastturn = JSON.parse(localStorage.getItem('lastturn'));    
        let gb = JSON.parse(localStorage.getItem('game_board'));
        for (let i = 0; i < gb.length; i++) {
            document.getElementById(i).innerHTML = gb[i];
        }
    return gb
    }
return gb
} 

seed = randNum1.toString().padEnd(5,3).slice(2,4);

function randomizer (initSeed) {
    if (parseInt(initSeed) < 11) {
        seedNum = parseInt(initSeed) + 30;  
    } else {
        seedNum = parseInt(initSeed);   
    }
    result = parseInt((seedNum * seedNum).toString().padStart(4,0).slice(1,3))/100;

    return result
}

function createBoard(combinedwords,cb,seed) {
    let game_board = [];
    let index = 9;
    let randomIndex;
    let arr = combinedwords.split('');

    seed = seed
    while (index != 0) {
        randomIndex = Math.floor((seed / 100) * index);
        index--;

        [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
        seed = randomizer(seed) * 100
        //console.log(seed)
    } 
    game_board = arr
    for (i=0; i < game_board.length; i++) {
        document.getElementById(i).innerHTML = game_board[i];
    }
    return game_board;
  }


// displaying current game board from local storage
game_board = displayBoard();


// Set keys = to game board letters
for (i = 0; i < game_board.length; i++) {
    boardKey = document.getElementById(i); 
    boardKey.dataset.key = game_board[i] ; 
}


// checking the board state when the page has been refreshed
if (lastturn == true && gameplay == false) {
    for (i=0; i<game_board.length; i++) {
        bttn_elm = document.getElementById(i);
        bttn_elm.disabled = true;
        bttn_elm.style.backgroundColor = 'rgb(113, 121, 126)'; // gray out
    }
} 
for (i=0; i<game_board.length; i++) {
    bttn_elm = document.getElementById(i);
    if (game_board[i] == '') {
        bttn_elm.disabled = true;
        bttn_elm.style.backgroundColor = 'rgb(113, 121, 126)'; // gray out
        }
    }


//  get last displayed message when the page has been refreshed    
if (localStorage.getItem('current_msg') != null) {
    document.getElementById('message').innerHTML = JSON.parse(localStorage.getItem('current_msg'))
}

//display current words guessed from local storage.
guessed_words = displayGuesses();


function gameWinCheck(game_board,lastturn,word) {
    bk_cnt = 0                     
    for (let i = 0; i < game_board.length; i++) {
        if (game_board[i] == '') {
            bk_cnt += 1;
        }
    }
    // Messaging 
    if (lastturn == false) {
        if (bk_cnt == 9) {
            const congrats_msg = `Congratulations, ${word} was the second word. You have won the game!`;
            document.getElementById("message").innerHTML = congrats_msg;
            localStorage.setItem('current_msg',JSON.stringify(congrats_msg));
            gameplay = false;
            localStorage.setItem('gameplay',JSON.stringify(gameplay));
        } else if (word == word_four | word == word_five) {
            const one_wrd_msg = `Congratulations, ${word} was one of the words! There is still one word to guess.`;
            document.getElementById("message").innerHTML = one_wrd_msg;
            localStorage.setItem('current_msg',JSON.stringify(one_wrd_msg));

        } else {
            const lost_msg = `Sorry, ${word} was not one of the correct words. Try again.`;
            document.getElementById("message").innerHTML = lost_msg;
            localStorage.setItem('current_msg',JSON.stringify(lost_msg));
 
        }
    } else if (lastturn == true) {
        if (bk_cnt == 9) {
            const congrats_msg = `Congratulations, ${word} was the second word. You have won the game!`;
            document.getElementById("message").innerHTML = congrats_msg;
            localStorage.setItem('current_msg',JSON.stringify(congrats_msg));
            gameplay = false;
            localStorage.setItem('gameplay',JSON.stringify(gameplay));
        } else if (word == word_four | word == word_five) {
            const one_wrd_msg = `${word.charAt(0).toUpperCase() + word.slice(1)} was one of the words but you are out of guesses... Better luck next time`;
            document.getElementById("message").innerHTML = one_wrd_msg;
            localStorage.setItem('current_msg',JSON.stringify(one_wrd_msg));
            gameplay = false;
            localStorage.setItem('gameplay',JSON.stringify(gameplay));
        } else {
            const lost_msg = 'Sorry, You are all out of guesses. Better luck next time.';
            document.getElementById("message").innerHTML = lost_msg;
            localStorage.setItem('current_msg',JSON.stringify(lost_msg));
            gameplay = false;
            localStorage.setItem('gameplay',JSON.stringify(gameplay));
                }
            if (gameplay == false) {
                for (i = 0; i < 9; i++) {
                    bttn_elm = document.getElementById(i);
                    bttn_elm.disabled=true;
                    bttn_elm.style.backgroundColor = 'rgb(113, 121, 126)'; // gray out
                }
        }
    }
}


let boardLoc = [];
function addSubLetter(loc) {
    let lett = '';
    let prev_letts = document.getElementById('answer_input').getAttribute('value');
    if (!boardLoc.includes(loc)) { // Not in array
        boardLoc.push(loc);
        document.getElementById(loc).style.backgroundColor = 'Green'; // highlight button green
        lettObj = document.getElementById(loc);
        lett = lettObj.getAttribute('data-key');
        if (prev_letts != null) {
            document.getElementById('answer_input').setAttribute('value',prev_letts + lett);
        } else {
            document.getElementById('answer_input').setAttribute('value',lett);
        }
    } else {
        boardLoc = boardLoc.filter(item => item != loc); // remove letter from array index
        document.getElementById('answer_input').setAttribute('value','') // clear out previous input
        document.getElementById(loc).style.backgroundColor = 'rgb(75, 38, 150)';  // set back to purple
        let letts = ''
        for (i=0; i < boardLoc.length; i++) {
            lettObj = document.getElementById(boardLoc[i]);
            lett = lettObj.getAttribute('data-key');
            letts += lett;    
        };
        document.getElementById('answer_input').setAttribute('value',letts)
    }
}

function displayGuesses(){
    if (localStorage.getItem('guessed_words') != null) {
        document.getElementById("guesses").innerHTML = JSON.parse(localStorage.getItem('guessed_words'))
        return JSON.parse(localStorage.getItem('guessed_words'))

    } else { return []}
 }

//game logic
function checkWord(word){
    //if (JSON.parse(localStorage.getItem('guessed_word_cnt')) < 5) {
        if (word != '' && word != null) {         
            localStorage.setItem('guessed_word_cnt',JSON.parse(localStorage.getItem('guessed_word_cnt'))+1)
            if (guessed_words.length >= 4) { 
                lastturn = true;
                localStorage.setItem('lastturn',JSON.stringify(lastturn));
            };
            // if word is correct
            if (word == word_four || word == word_five) {
                guessed_words.push("<span style='color: rgb(125, 206, 160)'>" + word); // green
                localStorage.setItem('guessed_words',JSON.stringify(guessed_words));
                displayGuesses();
                board = game_board;
                for (i=0; i < boardLoc.length; i++) {
                    board[boardLoc[i]] = ''
                }
                localStorage.setItem('game_board',JSON.stringify(board));
                for (let i = 0; i < board.length; i++) {
                    document.getElementById(i).innerHTML = board[i];
                }
                gameWinCheck(game_board,lastturn,word);
                for (i=0; i < boardLoc.length; i++) {   
                    document.getElementById(boardLoc[i]).classList.add('rotate360'); // rotates letters guesses.
                    document.getElementById(boardLoc[i]).disabled=true; 
                    document.getElementById(boardLoc[i]).style.backgroundColor = 'rgb(113, 121, 126)'; // gray out after correct 
                }
                setTimeout(remove_rotate,1000);
                boardLoc = [] // clear letter location off of board

            } else {  // wrong word
                guessed_words.push("<span style='color: rgb(205, 97, 85)'>" + word); // red 
                localStorage.setItem('guessed_words',JSON.stringify(guessed_words));
                displayGuesses();
                for (i=0; i < boardLoc.length; i++) {
                    document.getElementById(boardLoc[i]).classList.add('apply-shake');
                }
                setTimeout(remove_shake,1000); // remove shake animation after 1 second
                boardLoc = []; // clear letter location off of board
                gameWinCheck(game_board,lastturn,word);
            }
        } else {document.getElementById("message").innerHTML = "No word Entered. Try again.";}
    //} else {document.getElementById("message").innerHTML = 'Sorry, You have already run out of guesses for today.'}
}


function remove_shake() {
    for (i = 0; i < 9; i++) {
        elm = document.getElementById(i);
        if (elm.classList.contains('apply-shake'))
            elm.classList.remove('apply-shake');
    }
}

function remove_rotate() {
    for (i = 0; i < 9; i++) {
        elm = document.getElementById(i);
        if (elm.classList.contains('rotate360'))
            elm.classList.remove('rotate360');
    }
}

function submitWord() {
    if (gameplay == true) {
        word = document.getElementById("answer_input").getAttribute('value');
        clr = document.getElementById("answer_input").setAttribute('value','');
        for (i=0; i < boardLoc.length; i++) {
            document.getElementById(boardLoc[i]).style.backgroundColor = 'rgb(75, 38, 150)';  // set back to purple 
        }
        checkWord(word);
    } else { document.getElementById("answer_input").setAttribute('value','') }
 }


 //keyboard clicks
const keys = document.querySelectorAll('.bttn');
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
        const key = target.getAttribute('data-key')
        const loc = target.getAttribute('id')
        //console.log(key);
        addSubLetter(loc);
    }
}

document.getElementById("subBttn").addEventListener("click",submitWord);
