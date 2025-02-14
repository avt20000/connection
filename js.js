let btn = document.getElementById('btn');
let output = document.getElementById('output');
let output2 = document.getElementById('output2');


let quote =
    ['Given the choice of anyone in the world, whom would you want as a dinner guest?',
        'Would you like to be famous? In what way?',
        'Before making a telephone call, do you ever rehearse what you are going to say? Why?',
        'What would constitute a "perfect" day for you?',
        'When did you last sing to yourself? To someone else?',
        'If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?',
        'Do you have a secret hunch about how you will die?',
        'Name three things you and I appear to have in common.',
        'For what in your life do you feel most grateful?',
        'If you could change anything about the way you were raised, what would it be?',
        'Take four minutes and tell me your life story in as much detail as possible.',
        'If you could wake up tomorrow having gained any one quality or ability, what would it be?',
        'If a crystal ball could tell you the truth about yourself, your life, the future, or anything else, what would you want to know?',
        'Is there something that youve dreamed of doing for a long time? Why havent you done it?',
        'What is the greatest accomplishment of your life?',
        'What do you value most in a friendship?',
        'What is your most treasured memory?',
        'What is your most terrible memory?',
        'If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?',
        'What does friendship mean to you?',
        'What roles do love and affection play in your life?',]


let quote2 = ['Love is when you can appreciate someone through their hardest times and their best.',
    'In wedding vows they say: “to hold from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, to love and to cherish, till death us do part,”',
    'Love isnt a feeling, its a decision.',

    'The decision to stay committed and sometimes the unintended chase of something/someone.',

    'Love for my rational side, that is if I think of it as a concept and what Love entails, is sharing.',

    'Love can encompass many relationships, and in my opinion is a base for most, – you love your family, your friends, your partners, or that one guy your friends diss on all the time.',

    'I think it’s a beautiful topic for a conflict.',
    'Love makes me give up things I care about and value in an instant for the sake of the person I love.',

    'When you are in love, you want your loved one to be happy more than you want yourself to be happy.',

    'When youre in love, you think about the person you love all day long, and if you really love that person, if theyre struggling, if theyre having a hard time, you want to work with them to solve their problems and overcome them together.',

    'To truly love someone requires happiness, responsibility, loyalty, stability, respect, caring, passion, trust, understanding, and courage.',

    'I think the most ideal relationship is one where you know each other so well that you can understand each other very well, where you can trust each other no matter how far apart you are, where you dont feel lonely.',

    'Love means enthusiastically answering my many, many questions with an unexpected level of depth.',
    'At its core, love requires the basics of care.',
    'Its trust that my partner is an accurate and healthy mirror for self-reflection and knowing Im the same for them.',
    'It’s being brave enough to give someone the parts of you that are messy, complicated, and not Instagram-perfect.',
    'A healthy partnership allows those in it to be more of themselves, not less.',
    'My emotions wheel says love is a feeling of lightness and security, but I’ve never felt that way.',
    'Love is like sinking into a warm bath at the end of an awful day.',
    'Humility isnt necessarily humiliating.',
    'It’s knowing that although they hold all the tools to break your heart, they’ll build you up instead.',
]









btn.addEventListener('click', function () {
    let randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = "";
    output2.innerHTML = "";
    let randomQuote2 = quote2[Math.floor(Math.random() * quote2.length)];
    typeWriter(randomQuote, 'output', 50);
    typeWriter(randomQuote2, 'output2', 75);
})



function typeWriter(text, elementId, speed) {
    let i = 0;
    const targetElement = document.getElementById(elementId);
   
    function type() {
       if (i < text.length) {
         targetElement.innerHTML += text.charAt(i);
         i++;
         setTimeout(type, speed);
       }
     }
   
    type();
   }

   
   