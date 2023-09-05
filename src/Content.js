import React from 'react'
import RandomText from './RandomText'
import './Content.css';
import { useState, useEffect } from 'react';


const Content = () => {


    const easyParagraphs =[
      
      "Studying is the main source of knowledge. Books are indeed never failing friends of man. For a mature mind, reading is the greatest source of pleasure and solace to distressed minds. The study of good books ennobles us and broadens our outlook. Therefore, the habit of reading should be cultivated. A student should never confine himself to his school books only. He should not miss the pleasure locked in the classics, poetry, drama, history, philosophy etc.",
      "Being human makes us susceptible to the onset of feelings. The role of these emotions varies. Some of them are useful while others may be harmful. The use of social media for self-expression has reached a point that it makes us feel we can say anything. This begins when we see people expressing anything and everything that comes to mind. When we see everyone else voicing their likes and dislikes, their irritations and desires we tend to imitate what they do. And because many engage in this, we think that it is normal and healthy.",
      "Two common terms used to describe a salesperson are 'Farmer' and 'Hunter'. The reality is that most professional salespeople have a little of both. A hunter is often associated with aggressive personalities who use aggressive sales techniques. In terms of sales methodology, a hunter refers to a person whose focus is on bringing in and closing deals. This process is called 'sales capturing'. ",
      "Colors are all around us and there is no way we can escape them. But what do certain colors stand for? The meaning of colors has changed in the course of history but certain facts are still true about them Black often means power and authority. Overweight people often wear black because it makes you look thinner. Black also means that you are willing to obey someone. Priests, for example, wear black because they obey God. Black also symbolizes evil and death. Villains often wear black clothes and people wear black at a funeral. White is a symbol of innocence and cleanness.",
      "Geometry is a part of mathematics that deals with forms, shapes and the sizes of objects. There are many different kinds of shapes. Some are two-dimensional like circles, squares or triangles, others are three-dimensional like cubes, balls or cones. Geometry shows us how we can construct or draw such forms and how to measure them. We need geometry in everyday life. Houses are made up of geometrical shapes. Pilots use geometry when they plan their routes and surveyors need geometry to make maps and measure areas of land. The world is full of geometric shapes.",
      "I am not usually comfortable in a bar by myself, but I had been in San Francisco for a week and the apartment I subletted had no chairs in it, just a bed and a couch. My friends in town were married or worked nights. One Tuesday I had lentil soup for supper standing up at the kitchen counter. After I finished, I moved to the couch in the empty living room and sat under the flat overhead light refreshing feeds on my laptop. This was not a way to live. A man would go to a bar alone, I told myself. So I went to a bar alone.",


        


    ];

    const mediumParagraphs = [

      "An ever-growing number of complex and rigid rules plus hard-to-cope-with regulations are now being legislated from state to state. Key federal regulations were formulated by the FDA, FTC, and the CPSC. Each of these federal agencies serves a specific mission. One example: Laws sponsored by the Office of the Fair Debt Collection Practices prevent an agency from purposefully harassing clients in serious debt. The Fair Packaging and Labeling Act makes certain that protection from misleading packaging of goods is guaranteed to each buyer of goods carried in small shops as well as in large supermarkets. Products on the market must reveal the names of all ingredients on the label. Language must be in clear and precise terms that can be understood by everyone.",
      "Some people combine touch typing and hunting and pecking by using a buffering method. In the buffer method, the typist looks at the source copy, mentally stores one or several sentences, then looks at the keyboard and types out the buffer of sentences. This eliminates frequent up and down motions with the head and is used in typing competitions in which the typist is not well versed in touch typing. Not normally used in day-to-day contact with keyboards, this buffer method is used only when time is of the essence.",
      "The basic technique stands in contrast to hunt and peck typing in which the typist keeps his or her eyes on the source copy at all times. Touch typing also involves the use of the home row method, where typists keep their wrists up, rather than resting them on a desk or keyboard (which can cause carpal tunnel syndrome). To avoid this, typists should sit up tall, leaning slightly forward from the waist, place their feet flat on the floor in front of them with one foot slightly in front of the other, and keep their elbows close to their sides.",
      "The machine age gives us year by year more hours of leisure but it fails to teach us how to use them. It gives us mechanical habits of mind and represses the spirit to adventure-except along machine-made lines. We will need all our creative powers to think our way out of the social problems which science has created for us. It is science that has given us the unexpected redistribution of the age groups. Almost every year, some modem drug adds a little more to the average span of life, until the upper group is overcrowded. In the United States, for instance, there were already nine million people in the 1950's. In fifteen years' time, this number will reach the astonishing figure of forty-five million.",
      "Fish are animals that live in water. They are vertebrates, animals with backbones, and come in all kinds of shapes, sizes and colors. Fish first appeared in the oceans of the Earth about 500 million years ago, long before dinosaurs roamed our planet. Today there are tens of thousands of different kinds of fish and new species are discovered every year. Over millions of years fish have changed their features and adapted to their surroundings in order to survive. The whale shark is the largest fish on Earth. It can grow up to 12 meters in length and can weigh up to 15 tons. In contrast tiny gobies are often only a few mm long. Fish are important to people.",
      "Many mammals, birds, fish, insects and other animals travel regularly from one place to another during a certain time of the year. This journey is called migration. Animals change their living areas because they may get more food, better places to build nests or more sunlight somewhere else. Some animals travel thousands of kilometers across land and water. Others travel only short distances. Water animals, for example, often move vertically from deeper water to the surface area. Birds are animals that travel the greatest distances. Many types of birds migrate each year between their breeding grounds in the northern part of the world and warmer regions near the equator where they spend their summer months."


    ];

    const hardParagraphs = [

      "An ever-growing number of complex and rigid rules plus hard-to-cope-with regulations are now being legislated from state to state. Key federal regulations were formulated by the FDA, FTC, and the CPSC. Each of these federal agencies serves a specific mission. One example: Laws sponsored by the Office of the Fair Debt Collection Practices prevent an agency from purposefully harassing clients in serious debt. The Fair Packaging and Labeling Act makes certain that protection from misleading packaging of goods is guaranteed to each buyer of goods carried in small shops as well as in large supermarkets. Products on the market must reveal the names of all ingredients on the label. Language must be in clear and precise terms that can be understood by everyone.",
      "Some people combine touch typing and hunting and pecking by using a buffering method. In the buffer method, the typist looks at the source copy, mentally stores one or several sentences, then looks at the keyboard and types out the buffer of sentences. This eliminates frequent up and down motions with the head and is used in typing competitions in which the typist is not well versed in touch typing. Not normally used in day-to-day contact with keyboards, this buffer method is used only when time is of the essence.",
      "The basic technique stands in contrast to hunt and peck typing in which the typist keeps his or her eyes on the source copy at all times. Touch typing also involves the use of the home row method, where typists keep their wrists up, rather than resting them on a desk or keyboard (which can cause carpal tunnel syndrome). To avoid this, typists should sit up tall, leaning slightly forward from the waist, place their feet flat on the floor in front of them with one foot slightly in front of the other, and keep their elbows close to their sides.",
      "The machine age gives us year by year more hours of leisure but it fails to teach us how to use them. It gives us mechanical habits of mind and represses the spirit to adventure-except along machine-made lines. We will need all our creative powers to think our way out of the social problems which science has created for us. It is science that has given us the unexpected redistribution of the age groups. Almost every year, some modem drug adds a little more to the average span of life, until the upper group is overcrowded. In the United States, for instance, there were already nine million people in the 1950's. In fifteen years' time, this number will reach the astonishing figure of forty-five million.",
      "Fish are animals that live in water. They are vertebrates, animals with backbones, and come in all kinds of shapes, sizes and colors. Fish first appeared in the oceans of the Earth about 500 million years ago, long before dinosaurs roamed our planet. Today there are tens of thousands of different kinds of fish and new species are discovered every year. Over millions of years fish have changed their features and adapted to their surroundings in order to survive. The whale shark is the largest fish on Earth. It can grow up to 12 meters in length and can weigh up to 15 tons. In contrast tiny gobies are often only a few mm long. Fish are important to people.",
      "Many mammals, birds, fish, insects and other animals travel regularly from one place to another during a certain time of the year. This journey is called migration. Animals change their living areas because they may get more food, better places to build nests or more sunlight somewhere else. Some animals travel thousands of kilometers across land and water. Others travel only short distances. Water animals, for example, often move vertically from deeper water to the surface area. Birds are animals that travel the greatest distances. Many types of birds migrate each year between their breeding grounds in the northern part of the world and warmer regions near the equator where they spend their summer months."


    ];




    const [selectedDifficulty, setSelectedDifficulty] = useState("");

    const [currentParagraph, setCurrentParagraph] = useState('');
    const [showTimer, setShowTimer] = useState(false);
    const [secondsRemaining, setSecondsRemaining] = useState(60);
    const [typedText, setTypedText] = useState('');
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [totalKeysPressed, setTotalKeysPressed] = useState(0);
    const [correctKeysPressed, setCorrectKeysPressed] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [showInitialText, setShowInitialText] = useState(true);
    const [timerExpired, setTimerExpired] = useState(false);
    const [paragraphWords, setParagraphWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);



    

    const generateParagraph = (difficulty) => {

        let selectedParagraph = '';

        if (difficulty === 'easy'){

          const randomIndex = Math.floor(Math.random() * easyParagraphs.length);
          selectedParagraph = easyParagraphs [randomIndex];

        } else if (difficulty === 'medium'){

          const randomIndex = Math.floor(Math.random() * mediumParagraphs.length);
          selectedParagraph = mediumParagraphs [randomIndex];

        } else if (difficulty === 'hard'){
          const randomIndex = Math.floor(Math.random() * hardParagraphs.length);
          selectedParagraph = hardParagraphs [randomIndex];
        }

        const wordsArray = selectedParagraph.split(/\s+/);
        setParagraphWords(wordsArray);
       
        setCurrentParagraph(selectedParagraph);
        setShowTimer(true);
        setSecondsRemaining(60);
        setTypedText('');
        setIncorrectCount(0);
        setTotalKeysPressed(0);
        setCorrectKeysPressed(0);
        setShowResults(false);
        setCurrentWordIndex(0);
      };


    const handleTyping = (event) =>{
        const typedValue = event.target.value;
        setTypedText(typedValue);
        setTotalKeysPressed(typedValue.length);

        let incorrect = 0;
        for(let i = 0; i <typedValue.length;i++){
          if(typedValue[i] !== currentParagraph[i]){
            incorrect++;
          }
        }

        setIncorrectCount(incorrect);
        setCorrectKeysPressed(typedValue.length - incorrect);

        const typedWords = typedValue.trim().split(/\s+/);
        setCurrentWordIndex(typedWords.length - 1);

    }
    
    useEffect(() => {
        let countdownInterval;
    
        if (showTimer) {
          countdownInterval = setInterval(() => {
            setSecondsRemaining((prevSeconds) => prevSeconds - 1);
          }, 1000);
        }
    
        if (secondsRemaining === 0) {
          clearInterval(countdownInterval);

          setTimerExpired(true);
          
          setShowResults(true);
        }
    
        return () => {
          clearInterval(countdownInterval);
        };
      }, [showTimer, secondsRemaining]);


      // Calculating WPM
      const wordCount = typedText.trim().split(/\s+/).length;
      const accuracy = Math.floor((correctKeysPressed/(totalKeysPressed))*100);

      // Start function
      const handleStart = () =>{
        generateParagraph(selectedDifficulty);
        setShowTimer(true);
        setShowInitialText(false);
      };

      // Start again function
      const handleTryAgain = () =>{
        generateParagraph(selectedDifficulty);
        setShowTimer(true);
        setTimerExpired(false); 
        setCurrentWordIndex(0);
      };

      //To keep the color of the difficulty buttons after selection
     

     

      function handleEasyClick() {
        setSelectedDifficulty('easy');

        if (showTimer) {
          generateParagraph('easy');
          setSecondsRemaining(60);
        }
        
      }
      function handleMediumClick() {
        setSelectedDifficulty('medium');

        if (showTimer) {
          generateParagraph('medium');
          setSecondsRemaining(60);
        }
      
      }
      function handleHardClick(){
        setSelectedDifficulty('hard');

        if (showTimer) {
          generateParagraph('hard');
          setSecondsRemaining(60);
        }
        
      }

      
      return (
        
        <main>

          

          
          {!showTimer ? (

            
            <div className="all-content">
    
            <h2>Hi Typist!</h2>
            <h2>Choose a difficulty level:</h2>
            <div className = "difficulty-buttons">
            
            <button onClick={()=>handleEasyClick() } className={`difficulty-btn ${selectedDifficulty === 'easy' ? 'selected' : ''}`} >Easy</button>
            <button onClick={()=>handleMediumClick()} className={`difficulty-btn ${selectedDifficulty === 'medium' ? 'selected' : ''}`}>Medium</button>
            <button onClick={()=>handleHardClick()} className={`difficulty-btn ${selectedDifficulty === 'hard' ? 'selected' : ''}`} id='hard'>Hard</button>
          </div>
            
            <div className="paragraph">
  {paragraphWords.map((word, index) => (
    <span
      key={index}
      className={`word ${index === currentWordIndex ? 'current-word' : ''}`}
    >
      {word}
      {index < paragraphWords.length - 1 && ' '}
    </span>
  ))}
</div>

            <h2>Start typing away!</h2>
            <button onClick={handleStart} className='start-btn'>Start</button>
            

            
            </div>
            
          ) : (
            <div>

          <div className = "difficulty-buttons">
            
          <button onClick={()=>handleEasyClick() } className={`difficulty-btn ${selectedDifficulty === 'easy' ? 'selected' : ''} type-page`} >Easy</button>
            <button onClick={()=>handleMediumClick()} className={`difficulty-btn ${selectedDifficulty === 'medium' ? 'selected' : ''} type-page`}>Medium</button>
            <button onClick={()=>handleHardClick()} className={`difficulty-btn ${selectedDifficulty === 'hard' ? 'selected' : ''} type-page`} >Hard</button>
          </div>
          
              
          <div className="paragraph">
  {paragraphWords.map((word, index) => (
    <span
      key={index}
      className={`word ${index === currentWordIndex ? 'current-word' : ''}`}
    >
      {word}
      {index < paragraphWords.length - 1 && ' '}
    </span>
  ))}
</div>

              {
                showResults ? (
                  <div>
                    <p>WPM: {wordCount}</p>
                    <p>Accuracy: {accuracy}%</p>
                    <button onClick={handleTryAgain} className="try-btn">Try It Again!</button>
                  </div>
                ) : (
                  <p>Time Remaining: {secondsRemaining} s</p>
                )
              }

              <textarea value={typedText} onChange={handleTyping} placeholder='Start typing here..' className='textbox' disabled={timerExpired}/>

              

              

              



            </div>
          )}
        </main>
      );
    };
    
export default Content;
