
startDate = new Date('Thu Mar 23 2023 00:00:00 GMT-0400 (Eastern Daylight Time)');
todayDate = new Date();

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
 
let word_four_list = ['move','hear','call','stop','turn','talk','hope','stay','hold','wish','lead','wait','send','form','sell','open','join','save','fall','mind','deal','face','lose','walk','tend','draw','pick','cost','pass','seek','grow','care','note','beat','bear','shut','wear','cope','pull','fill','gain','hurt','miss','rise','fail','vary','drop','push','cast','ring','test','last','rely','plan','mark','sign','vote','deny','hide','sing','dare','earn','rest','suit','lift','sort','roll','wash','ride','jump','cook','step','view','risk','wake','pray','slip','link','name','lend','head','land','burn','rule','shed','warn','ease','pour','knit','back','free','lack','stir','kick','list','copy','hand','quit','swim','fund','pack','sail','slow','rush','sink','grab','calm','drag','flow','pose','time','spot','wipe','harm','hire','bend','urge','lock','warm','tour','halt','cool','heat','melt','lean','load','hunt','tear','line','fish','shop','race','cure','swap','stem','wind','snap','bake','fold','base','host','curb','fade','book','leap','wrap','date','boil','flee','park','bury','echo','edit','ruin','ship','fool','heal','cash','chat','seal','plug','trap','file','spin','wave','plot','trim','peer','part','rain','undo','scan','defy','weep','tidy','soak','dump','rock','tape','chew','cite','team','mend','chop','skip','type','long','reap','rank','exit','tuck','pity','peel','prop','envy','toss','dine','slap','pump','haul','sack','mess','soar','tack','dash','bail','tune','star','gaze','rear','roam','omit','fend','dial','fare','rate','bond','term','curl','dust','iron','bank','emit','near','lure','pile','duck','poke','clip','mask','bust','hook','tire','bump','root','busy','bowl','raid','slam','mock','levy','heed','veto','glue','crop','tilt','glow','leak','site','sway','nick','boot','ward','tone','hail','bark','thin','bulk','pipe','fuel','hack','bare','comb','fret','nest','lurk','slot','deem','sift','diet','oust','ache','pave','flip','code','dawn','film','rake','blur','fuse','zoom','wage','loom','coat','trot','hint','clap','joke','post','brew','coax','yell','snow','nail','flex','foul','wade','blot','inch','hurl','seep','roar','cram','soil','peak','lash','claw','bait','mash','foot','damp','gasp','drum','grin','rack','bask','wilt','fake','rust','beam','tame','snip','bath','flap','mail','fuss','skim','dart','keel','dish','wire','hiss','dull','slim','boss','weld','vent','hark','prod','howl','wean','down','dock','foil','wing','sigh','bolt','spur','thaw','farm','wane','veer','plod','trip','grit','even','clog','home','stun','bide','lump','swop','rein','chip','yawn','port','side','toil','coil','dent','warp','mull','cart','gulp','loop','edge','bale','reel','coin','idle','pare','snub','flop','hush','wail','fine','leaf','heap','itch','camp','neck','trek','stew','quiz','mine','shoe','skid','fray','moss','zero']
let word_five_list = ['would','think','shall','leave','bring','start','thank','allow','write','carry','offer','speak','stand','learn','agree','apply','avoid','begin','voice','spend','build','reach','enjoy','watch','cover','raise','cause','break','prove','occur','exist','check','serve','share','enter','visit','claim','worry','place','drive','argue','catch','fight','refer','admit','sleep','close','arise','point','drink','treat','throw','study','press','sound','teach','trust','match','state','marry','split','adopt','stick','clear','guess','blame','cross','focus','count','doubt','laugh','judge','solve','alter','order','burst','relax','issue','train','clean','limit','climb','shift','imply','shoot','phone','waste','dance','score','upset','paint','grant','react','guide','knock','reply','shake','fetch','fancy','trace','print','boost','smile','cease','adapt','quote','yield','spell','shout','spare','dress','delay','steal','range','hurry','store','trade','light','swear','dream','block','stare','house','slide','grasp','swing','speed','plant','taste','weigh','mount','brush','cater','repay','sense','shape','alert','seize','exert','crack','guard','float','greet','bless','spoil','merge','coach','drain','chase','anger','await','drift','renew','sweep','cheer','steer','shine','unite','draft','track','price','elect','amend','round','march','level','widen','board','crash','chuck','plead','creep','twist','blend','drown','dwell','strip','grade','value','award','spill','stock','cling','empty','pause','tread','stage','boast','incur','stamp','panic','rally','infer','crawl','stuff','label','evoke','abide','drill','flood','click','total','punch','tempt','cough','cheat','shell','crush','model','evade','beset','field','scare','hatch','rival','sweat','haunt','blast','equip','alarm','abuse','merit','input','swell','chair','excel','shear','flash','scrap','shove','annoy','nurse','forge','sneak','spray','amuse','avert','slice','decay','rinse','mould','tense','shock','frame','carve','defer','mimic','clash','rebel','loose','recur','stake','scrub','usher','weave','hover','scale','gauge','ferry','whisk','wreck','utter','blind','shrug','flush','pinch','brief','dread','erase','lobby','trail','lodge','queue','space','toast','reset','pitch','flick','stray','shame','equal','adore','scoop','query','charm','halve','chart','wield','pluck','graze','slash','enact','budge','kneel','spark','ensue','quell','waive','bathe','expel','repel','allay','dodge','heave','spawn','mourn','unify','align','rouse','bully','blink','enrol','glide','forgo','curse','clamp','front','relay','index','title','erupt','avail','trick','lease','water','video','perch','lapse','bribe','power','erode','crowd','pride','group','stain','stack','storm','curve','prise','stall','flock','fling','blush','prune','faint','sting','crave','brake','thump','purge','fault','shore','swoop','patch','pilot','roast','squat','nudge','brace','stoop','spike','swamp','reign','adorn','inset','delve','ripen','sight','endow','amaze','quash','stave','piece','awake','audit','wreak','crown','exact','spoon','slump','chill','ditch','blaze','pedal','brave','chant','court','bloom','revel','yearn','shade','groan','hedge','bluff','clasp','wring','surge','vouch','cloud','motor']

let gameplay = true;
let lastturn = false;

let guessed_words = [];

date = new Date();

pseudoRandNum = date.getDate().toString() + date.getMonth().toString().padStart(2,0) + date.getYear().toString()
pseudoRandNum = parseInt(pseudoRandNum)
pseudoRandNum = (pseudoRandNum/(date.getDay()+110))
pseudoRandNum = pseudoRandNum % 1


function getRandom(word_list) {
    let rand_num = Math.floor(pseudoRandNum * word_list.length)
    return rand_num;
}

let word_four = ''
let word_five = ''


function displayBoard () {
    // Initialize Board
    if (localStorage.getItem('init_board') == null) {
        word_four = word_four_list[getRandom(word_four_list)];
        word_five = word_five_list[getRandom(word_five_list)];
        let combined_words = word_four + word_five;
        localStorage.setItem('word_four',JSON.stringify(word_four));
        localStorage.setItem('word_five',JSON.stringify(word_five));
        gb = createBoard(combined_words);
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

function scrambleWords(words) {
    var arr = words.split('');
    arr.sort(function() {
        return 0.5 - pseudoRandNum;
    });
    words = arr.join('');
    return words
}

function createBoard(combined_words) {
    let game_board = [];
    let board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    scramble = scrambleWords(combined_words);
    for (let i = 0; i < scramble.length; i++) {
        board[i] = scramble[i];
        document.getElementById(i).innerHTML = board[i];
        game_board.push(board[i])
    }
    return game_board;
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
