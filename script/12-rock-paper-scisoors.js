
            let score=JSON.parse(localStorage.getItem('score'));
            if(!score)
         {
            score={
               wins:0,
      losses:0,
      ties:0
            };
         }
         updateScore();

   document.querySelector('.js-rock-button').
   addEventListener('click',()=>{
      playGame('rock');
      }
      );
      document.querySelector('.js-paper-button').
   addEventListener('click',()=>{
      playGame('paper');
      }
      );
      document.querySelector('.js-scissors-button').
      addEventListener('click',()=>{
         playGame('scissors');
         }
         );

document.body.addEventListener('keydown',(event)=>{
   if(event.key==='r')
   {
      playGame('rock');
   }else if(event.key==='p')
      {
         playGame('paper');
}if(event.key==='s')
   {
      playGame('scissors');
   }
}
   );

            function playGame(playerMove){

      const computerMove=pickComputerMove();
      
      let result='';
         if(playerMove==='scissors')
         {

         
         if(computerMove==='scissors')
         {
            result='Tie';
         }
         else if(computerMove==='rock')
         {
            result='You Loose';
         }
         else if(computerMove==='paper')
         {
            result='You Win';
         }
      }
      
      else if(playerMove==='paper')
         {
      if(computerMove==='paper')
      {
         result='Tie';
      }
      else if(computerMove==='scissors')
      {
         result='You Loose';
      }
      else if(computerMove==='rock')
      {
         result='You Win';
      }
         }
         
      else if(playerMove==='rock')
         { if(computerMove==='rock')
      {
         result='Tie';
      }
      else if(computerMove==='paper')
      {
         result='You Loose';
      }
      else if(computerMove==='scissors')
      {
         result='You Win';
      }
   }
      if(result==='You Win')
      {
         score.wins+=1;
      }else if(result==='You Loose')
      {
         score.losses+=1;
      }else if(result==='Tie')
      {
         score.ties+=1;
      }



      localStorage.setItem('score', JSON.stringify(score));

      updateScore();
      document.querySelector('.js-result').
      innerHTML =result;
      document.querySelector('.js-moves').
      innerHTML =`you <img src="images/${playerMove}-emoji.png"class="move-icon">
      <img src="images/${computerMove}-emoji.png"class="move-icon"> Computer`;
      

      
            }
            function updateScore()
            {
               document.querySelector('.js-score').
         innerHTML=`Wins: ${score.wins},Losses: ${score.losses}, Ties: ${score.ties}`;

            }
            function pickComputerMove()
            {
               let computerMove='';
               const randomNumber=Math.random();
      
         if(randomNumber>=0 && randomNumber<1/3)
      {
         computerMove='rock';
      }
      else if(randomNumber>=1/3 && randomNumber<2/3)
      {
            computerMove='paper';
      }
      else if(randomNumber>=2/3 && randomNumber<1)
      {
            computerMove='scissors';
      } 
      return computerMove;
            }
            let isAutoPlaying=false;
            let intervalId;
            function autoPlay()
            {
            if(!isAutoPlaying)
            
            {
               intervalId=setInterval(()=>
            {
               const playerMove=pickComputerMove();
               playGame(playerMove);
            },1000);
            isAutoPlaying=true;
         }else{
               clearInterval(intervalId);
               isAutoPlaying=false;
         }

            }
      
         