

var scores , roundScore , activePlayer ,gamePlaying,lastDice

init();



//setter
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//getter
var x = document.querySelector('#score-0').textContent;
console.log(x);





//Roll-dice

document.querySelector('.btn-roll').addEventListener('click' , function(){
if(gamePlaying)
{

    var   dice1 = Math.floor(Math.random() * 6 ) + 1; 
    var   dice2 = Math.floor(Math.random() * 6 ) + 1; 
    // console.log(dice1);
    document.getElementById('dice-1').style.display= 'block';
    document.getElementById('dice-2').style.display= 'block';
  
    document.getElementById('dice-1').src = 'dice-' + dice1 +'.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 +'.png';


    // if(lastDice === 6 && dice1 === 6 )
    // {
    //     scores[activePlayer]=0;
    //     document.querySelector('#score-'+activePlayer).textContent='0';
    //     nextPlayer();

    // }
    //  else
     if(dice1 !== 1 && dice2 !== 1)
     {
    roundScore += dice1 + dice2;
    
    document.querySelector('#current-' +activePlayer).textContent= roundScore;


     }
     else
     {
        nextPlayer();
     }


    //  lastDice = dice1;

}
})


document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying)
   {
      var scoreValue = document.querySelector('.final-score').value;
        var winng ;
        if(scoreValue)
        {
            winng = scoreValue

        }
        else
        {
            winng= 100;

        }
    console.log('activePlayer:'+activePlayer);
    scores[activePlayer] += roundScore;
    console.log('scores:'+scores[activePlayer]);

    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    if(scores[activePlayer]>= winng){
        document.querySelector('#name-'+activePlayer).textContent='WINNER';
        document.getElementById('dice-1').style.display= 'none';
        document.getElementById('dice-2').style.display= 'none';

        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying =false;
    }
    else
    {
        nextPlayer();
    }

   }
  

    

})
//DRY principle
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

   //  document.querySelector('.player-0-panel').classList.remove('active');
   //  document.querySelector('.player-1-panel').classList.add('active');

   
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display= 'none';
    document.getElementById('dice-2').style.display= 'none';
}

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
    
scores =[0,0];
roundScore =0;
activePlayer = 0;
gamePlaying = true;

   
    document.getElementById('dice-1').style.display= 'none';
    document.getElementById('dice-2').style.display= 'none';


    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    
}