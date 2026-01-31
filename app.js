// Activity Database
const activities = [
    // Physical Activities
    {
        id: 1,
        name: "Living Room Obstacle Course",
        description: "Create an obstacle course using pillows, chairs, and blankets. Time each family member and try to beat your best!",
        moods: ["physical", "competitive"],
        time: 30,
        materials: ["Pillows", "Chairs", "Blankets", "Timer/phone"],
        instructions: [
            "Set up stations around the living room - crawl under tables, hop over pillows, balance on a line of tape",
            "Each person gets 3 tries to complete the course",
            "Time each attempt and track the best times",
            "Winner gets to choose the next activity!"
        ]
    },
    {
        id: 2,
        name: "Dance Freeze Party",
        description: "Play music and dance! When the music stops, freeze in place. Last one moving is out.",
        moods: ["physical", "competitive"],
        time: 15,
        materials: ["Music player/phone", "Fun playlist"],
        instructions: [
            "One person controls the music",
            "Everyone dances when music plays",
            "Freeze when music stops - no wobbling!",
            "If you move, you become the next DJ",
            "Play until everyone has had a turn as DJ"
        ]
    },
    {
        id: 3,
        name: "Balloon Keep-Up Challenge",
        description: "Keep a balloon in the air using only specific body parts. Simple but surprisingly fun!",
        moods: ["physical", "cooperative"],
        time: 15,
        materials: ["Balloons (have backups!)"],
        instructions: [
            "Blow up a balloon",
            "Family works together to keep it in the air",
            "Call out body parts to use: 'heads only!' 'elbows only!'",
            "Count how many hits before it touches the ground",
            "Try to beat your family record!"
        ]
    },
    {
        id: 4,
        name: "Indoor Scavenger Hunt",
        description: "Race to find items around the house based on clues or categories.",
        moods: ["physical", "competitive"],
        time: 30,
        materials: ["Paper for clue list", "Timer"],
        instructions: [
            "One person writes 10 items to find (something blue, something that starts with 'S', etc.)",
            "Set a 10-minute timer",
            "Everyone races to collect all items",
            "First one back with all items wins",
            "Take turns being the clue-writer"
        ]
    },

    // Relaxed/Lazy Activities
    {
        id: 5,
        name: "Story Chain",
        description: "Take turns adding to a story, one sentence at a time. Watch it get wonderfully weird!",
        moods: ["lazy", "creative", "cooperative"],
        time: 30,
        materials: ["None! Just imaginations"],
        instructions: [
            "Sit in a circle or on the couch",
            "First person starts with 'Once upon a time...'",
            "Each person adds one sentence",
            "Try to make unexpected twists!",
            "End when someone says 'The End' (but make it a good ending!)"
        ]
    },
    {
        id: 6,
        name: "Cloud/Ceiling Gazing",
        description: "Lie down together and find shapes in the clouds (or ceiling texture). Simple, calming, and imaginative.",
        moods: ["lazy", "creative"],
        time: 15,
        materials: ["Blankets to lie on", "Pillows"],
        instructions: [
            "Everyone lies down looking up",
            "Take turns pointing out shapes you see",
            "Make up stories about the shapes",
            "No wrong answers - creativity rules!"
        ]
    },
    {
        id: 7,
        name: "Would You Rather? Family Edition",
        description: "Take turns asking silly 'would you rather' questions and discussing your choices.",
        moods: ["lazy", "intellectual"],
        time: 30,
        materials: ["None, or paper to write questions"],
        instructions: [
            "Take turns asking 'Would you rather...' questions",
            "Everyone must answer and explain why",
            "Questions can be silly, gross, or thought-provoking",
            "Examples: 'Would you rather have super speed or be able to fly?'"
        ]
    },
    {
        id: 8,
        name: "Blanket Fort Movie Night",
        description: "Build an epic blanket fort and watch a family movie or show together inside.",
        moods: ["lazy", "cooperative"],
        time: 120,
        materials: ["Blankets", "Pillows", "Chairs/couch", "Device for watching", "Snacks!"],
        instructions: [
            "Work together to build the ultimate blanket fort",
            "Make it cozy with pillows inside",
            "Choose a movie everyone agrees on (this might be the hardest part!)",
            "Grab snacks and enjoy!"
        ]
    },

    // Intellectual Activities
    {
        id: 9,
        name: "20 Questions Championship",
        description: "Classic guessing game where one person thinks of something and others get 20 yes/no questions to figure it out.",
        moods: ["intellectual", "lazy"],
        time: 30,
        materials: ["None"],
        instructions: [
            "One person thinks of a person, place, or thing",
            "Others take turns asking yes/no questions",
            "Track how many questions have been asked",
            "Whoever guesses correctly thinks of the next thing",
            "Keep score of who guesses with fewest questions"
        ]
    },
    {
        id: 10,
        name: "Family Trivia Night",
        description: "Quiz each other on family memories, history, and fun facts.",
        moods: ["intellectual", "competitive"],
        time: 60,
        materials: ["Paper and pens", "Treats for prizes (optional)"],
        instructions: [
            "Each person writes 5 questions about family history or memories",
            "Take turns being the host and asking questions",
            "Award points for correct answers",
            "Include questions like 'What was our best vacation?' or 'What's Dad's favorite food?'"
        ]
    },
    {
        id: 11,
        name: "Word Association Battle",
        description: "Say a word, next person says first word that comes to mind. Hesitate and you're out!",
        moods: ["intellectual", "competitive"],
        time: 15,
        materials: ["None"],
        instructions: [
            "Sit in a circle",
            "First person says any word",
            "Next person immediately says a related word",
            "If you pause for more than 3 seconds, you're out",
            "Last person standing wins!"
        ]
    },
    {
        id: 12,
        name: "Puzzle Race",
        description: "Everyone works on sections of a puzzle together, seeing how fast you can complete it as a team.",
        moods: ["intellectual", "cooperative"],
        time: 60,
        materials: ["A jigsaw puzzle (100-300 pieces for an hour)", "Timer"],
        instructions: [
            "Pick a puzzle appropriate for your time",
            "Each person claims a section or edge",
            "Work together to complete it",
            "Time yourselves and try to beat it next time!"
        ]
    },

    // Creative Activities
    {
        id: 13,
        name: "Collaborative Art Challenge",
        description: "Everyone contributes to one piece of art, taking turns adding to it.",
        moods: ["creative", "cooperative"],
        time: 30,
        materials: ["Large paper or poster board", "Markers, crayons, or paint"],
        instructions: [
            "One person draws something (a shape, character, or scene)",
            "Pass it to the next person who adds to it",
            "Set a timer for each turn (1-2 minutes)",
            "Keep going until everyone has added 3 things",
            "Name your masterpiece together!"
        ]
    },
    {
        id: 14,
        name: "Invention Convention",
        description: "Design a wacky invention using items from around the house, then present it to the family.",
        moods: ["creative", "intellectual"],
        time: 60,
        materials: ["Random household items", "Paper for designs", "Imagination!"],
        instructions: [
            "Each person collects 5 random items from the house",
            "You have 15 minutes to 'invent' something using those items",
            "Create a name and a commercial pitch",
            "Present your invention to the family",
            "Vote on most creative, most useful, and funniest"
        ]
    },
    {
        id: 15,
        name: "Draw Together: Blind Artist",
        description: "One person describes a picture while others try to draw it without seeing the original.",
        moods: ["creative", "competitive"],
        time: 30,
        materials: ["Paper for everyone", "Pens/pencils", "Simple pictures to describe"],
        instructions: [
            "One person looks at a picture (from a book or phone)",
            "They describe it without naming what it is",
            "Others try to draw based on the description",
            "Compare drawings at the end - lots of laughs guaranteed!",
            "Take turns being the describer"
        ]
    },
    {
        id: 16,
        name: "Recipe Remix",
        description: "Invent a new snack or treat using ingredients you already have, then taste-test it together.",
        moods: ["creative", "cooperative"],
        time: 60,
        materials: ["Kitchen ingredients", "Kitchen supplies"],
        instructions: [
            "Look through available ingredients together",
            "Each person suggests one ingredient to include",
            "Work together to create something edible",
            "Bonus points for creative presentation",
            "Rate your creation and write down the recipe if it's good!"
        ]
    },

    // Competitive Activities
    {
        id: 17,
        name: "Paper Airplane Tournament",
        description: "Design and test paper airplanes. Compete for distance, accuracy, and style!",
        moods: ["competitive", "creative"],
        time: 30,
        materials: ["Paper", "Tape measure or marked floor", "Target (optional)"],
        instructions: [
            "Everyone designs their own paper airplane",
            "Round 1: Longest flight distance",
            "Round 2: Most accurate (hit a target)",
            "Round 3: Longest time in air",
            "Award points for each round, crown an overall champion"
        ]
    },
    {
        id: 18,
        name: "Minute to Win It Games",
        description: "Series of silly one-minute challenges using household items.",
        moods: ["competitive", "physical"],
        time: 30,
        materials: ["Varies by challenge", "Timer"],
        instructions: [
            "Set up 5 different one-minute challenges",
            "Examples: stack cups, move cotton balls with a spoon, bounce ping pong ball into cups",
            "Each person attempts each challenge",
            "Award 3 points for completing in time",
            "Most points wins!"
        ]
    },
    {
        id: 19,
        name: "Card Game Marathon",
        description: "Play a series of quick card games and track overall points.",
        moods: ["competitive", "lazy"],
        time: 60,
        materials: ["Deck of cards", "Paper for scorekeeping"],
        instructions: [
            "Choose 3-4 quick card games everyone knows (or learn new ones!)",
            "Play each game to completion",
            "Award points based on finishing position",
            "Switch games every 15 minutes",
            "Crown an overall champion at the end"
        ]
    },

    // Cooperative Activities
    {
        id: 20,
        name: "Family Band Jam Session",
        description: "Create music together using instruments, household items, or just your voices!",
        moods: ["cooperative", "creative"],
        time: 30,
        materials: ["Any instruments you have", "Pots, pans, boxes for drums", "Voices!"],
        instructions: [
            "Everyone picks an 'instrument' (real or makeshift)",
            "Start with a simple beat",
            "Take turns adding sounds and rhythms",
            "Try to create a song together",
            "Record it on your phone for memories!"
        ]
    },
    {
        id: 21,
        name: "Build Something Epic",
        description: "Work together to build the tallest/coolest structure using blocks, LEGOs, or cards.",
        moods: ["cooperative", "creative"],
        time: 60,
        materials: ["Building blocks, LEGOs, or playing cards", "Camera for documentation"],
        instructions: [
            "Decide on a building goal together",
            "Everyone contributes to the construction",
            "Take turns adding pieces",
            "See how tall/complex you can make it",
            "Take a photo before it falls!"
        ]
    },
    {
        id: 22,
        name: "Act It Out: Family Edition",
        description: "Charades with categories like family memories, favorite movies, or inside jokes.",
        moods: ["cooperative", "physical", "competitive"],
        time: 45,
        materials: ["Paper for prompts", "Bowl or hat", "Timer"],
        instructions: [
            "Everyone writes 5 prompts on paper slips",
            "Include family memories and inside jokes",
            "Split into teams or play all together",
            "One person acts, others guess",
            "1 minute per turn, keep score by team"
        ]
    },

    // Quick Activities (15 minutes)
    {
        id: 23,
        name: "Rock Paper Scissors Tournament",
        description: "A bracket-style RPS tournament with best-of-three matches.",
        moods: ["competitive", "physical"],
        time: 15,
        materials: ["None"],
        instructions: [
            "Set up tournament bracket (with 3 people, do round-robin)",
            "Each match is best of 3",
            "Winners advance",
            "Championship round is best of 5",
            "Add dramatic commentary for fun!"
        ]
    },
    {
        id: 24,
        name: "Two Truths and a Lie",
        description: "Each person shares three statements about themselves - can you spot the lie?",
        moods: ["intellectual", "lazy"],
        time: 15,
        materials: ["None"],
        instructions: [
            "Each person thinks of two true things and one lie about themselves",
            "Share all three in random order",
            "Others try to guess which is the lie",
            "Award points for correct guesses",
            "Try to be creative and tricky!"
        ]
    },

    // Longer Activities (2+ hours)
    {
        id: 25,
        name: "Board Game Championship",
        description: "Pick a favorite family board game and play to completion.",
        moods: ["competitive", "intellectual"],
        time: 120,
        materials: ["A board game", "Snacks", "Good attitudes!"],
        instructions: [
            "Choose a game everyone enjoys",
            "Set up the game together",
            "Play with good sportsmanship",
            "Snack breaks allowed!",
            "Winner picks the next game night's game"
        ]
    },
    {
        id: 26,
        name: "DIY Escape Room",
        description: "Create puzzles and clues for each other to solve in a home 'escape room.'",
        moods: ["intellectual", "creative", "cooperative"],
        time: 120,
        materials: ["Paper", "Locks if you have them", "Hiding spots", "Timer"],
        instructions: [
            "One person (or team) creates 5-7 puzzles/clues",
            "Hide clues around a room or the house",
            "Set a time limit (45-60 minutes suggested)",
            "Other family members work together to 'escape'",
            "Take turns creating rooms for each other"
        ]
    }
];

// State Management
let state = {
    selectedMood: null,
    selectedTime: null,
    currentActivity: null,
    favorites: JSON.parse(localStorage.getItem('familyFunFavorites')) || [],
    generatorInputs: {
        items: [],
        elements: [],
        theme: '',
        twist: ''
    }
};

// DOM Elements
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const moodBtns = document.querySelectorAll('.mood-btn');
const timeBtns = document.querySelectorAll('.time-btn');
const findActivityBtn = document.getElementById('findActivity');
const resultSection = document.getElementById('result');
const closeResultBtn = document.getElementById('closeResult');
const tryAnotherBtn = document.getElementById('tryAnother');
const addFavoriteBtn = document.getElementById('addFavorite');

// Tab Navigation
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');

        if (targetTab === 'favorites') {
            renderFavorites();
        }
    });
});

// Mood Selection
moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        moodBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.selectedMood = btn.dataset.mood;
        updateFindButton();
    });
});

// Time Selection
timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.selectedTime = parseInt(btn.dataset.time);
        updateFindButton();
    });
});

function updateFindButton() {
    findActivityBtn.disabled = !(state.selectedMood && state.selectedTime);
}

// Find Activity
findActivityBtn.addEventListener('click', () => {
    const matchingActivities = activities.filter(activity => {
        const moodMatch = activity.moods.includes(state.selectedMood);
        const timeMatch = activity.time <= state.selectedTime;
        return moodMatch && timeMatch;
    });

    if (matchingActivities.length === 0) {
        alert('No activities found for those criteria. Try a different combination!');
        return;
    }

    const randomActivity = matchingActivities[Math.floor(Math.random() * matchingActivities.length)];
    displayActivity(randomActivity);
});

function displayActivity(activity) {
    state.currentActivity = activity;

    document.getElementById('activityName').textContent = activity.name;
    document.getElementById('activityDescription').textContent = activity.description;
    document.getElementById('activityTime').textContent = `${activity.time} mins`;
    document.getElementById('activityMood').textContent = activity.moods.map(m =>
        m.charAt(0).toUpperCase() + m.slice(1)
    ).join(', ');

    // Materials
    const materialsSection = document.getElementById('activityMaterials');
    materialsSection.innerHTML = `
        <h4>What You'll Need:</h4>
        <ul>${activity.materials.map(m => `<li>${m}</li>`).join('')}</ul>
    `;

    // Instructions
    const instructionsSection = document.getElementById('activityInstructions');
    instructionsSection.innerHTML = `
        <h4>How to Play:</h4>
        <ol>${activity.instructions.map(i => `<li>${i}</li>`).join('')}</ol>
    `;

    // Update favorite button
    const isFavorite = state.favorites.some(f => f.id === activity.id);
    addFavoriteBtn.textContent = isFavorite ? '💔 Remove from Favorites' : '❤️ Save to Favorites';

    resultSection.classList.remove('hidden');
}

// Close Result
closeResultBtn.addEventListener('click', () => {
    resultSection.classList.add('hidden');
});

// Try Another
tryAnotherBtn.addEventListener('click', () => {
    findActivityBtn.click();
});

// Add to Favorites
addFavoriteBtn.addEventListener('click', () => {
    if (!state.currentActivity) return;

    const existingIndex = state.favorites.findIndex(f => f.id === state.currentActivity.id);

    if (existingIndex > -1) {
        state.favorites.splice(existingIndex, 1);
        addFavoriteBtn.textContent = '❤️ Save to Favorites';
    } else {
        state.favorites.push(state.currentActivity);
        addFavoriteBtn.textContent = '💔 Remove from Favorites';
    }

    localStorage.setItem('familyFunFavorites', JSON.stringify(state.favorites));
});

// Favorites Tab
function renderFavorites() {
    const favoritesList = document.getElementById('favoritesList');

    if (state.favorites.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message">No favorites saved yet! Find an activity and click the heart to save it.</p>';
        return;
    }

    favoritesList.innerHTML = state.favorites.map(activity => `
        <div class="favorite-item" data-id="${activity.id}">
            <div class="favorite-info">
                <h3>${activity.name}</h3>
                <p>${activity.time} mins | ${activity.moods.join(', ')}</p>
            </div>
            <div class="favorite-actions">
                <button class="play-btn" onclick="playFavorite(${activity.id})">Let's Do This!</button>
                <button class="remove-btn" onclick="removeFavorite(${activity.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

window.playFavorite = function(id) {
    const activity = state.favorites.find(f => f.id === id) || activities.find(a => a.id === id);
    if (activity) {
        // Switch to finder tab
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        document.querySelector('[data-tab="finder"]').classList.add('active');
        document.getElementById('finder').classList.add('active');

        displayActivity(activity);
    }
};

window.removeFavorite = function(id) {
    state.favorites = state.favorites.filter(f => f.id !== id);
    localStorage.setItem('familyFunFavorites', JSON.stringify(state.favorites));
    renderFavorites();
};

// Game Generator
const stepNextBtns = document.querySelectorAll('.step-next');
const stepPrevBtns = document.querySelectorAll('.step-prev');
const generateGameBtn = document.getElementById('generateGame');
const generatedGameSection = document.getElementById('generatedGame');
const regenerateBtn = document.getElementById('regenerate');
const saveGeneratedBtn = document.getElementById('saveGenerated');

stepNextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentStep = btn.closest('.step');
        const currentStepNum = parseInt(currentStep.dataset.step);
        const nextStep = document.querySelector(`[data-step="${currentStepNum + 1}"]`);

        // Collect inputs from current step
        if (currentStepNum === 1) {
            state.generatorInputs.items = Array.from(currentStep.querySelectorAll('input:checked')).map(i => i.value);
        } else if (currentStepNum === 2) {
            state.generatorInputs.elements = Array.from(currentStep.querySelectorAll('input:checked')).map(i => i.value);
        }

        currentStep.classList.remove('active');
        nextStep.classList.add('active');
    });
});

stepPrevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentStep = btn.closest('.step');
        const currentStepNum = parseInt(currentStep.dataset.step);
        const prevStep = document.querySelector(`[data-step="${currentStepNum - 1}"]`);

        currentStep.classList.remove('active');
        prevStep.classList.add('active');
    });
});

generateGameBtn.addEventListener('click', () => {
    state.generatorInputs.theme = document.getElementById('customTheme').value;
    state.generatorInputs.twist = document.getElementById('familyTwist').value;

    const game = generateCustomGame();
    displayGeneratedGame(game);
});

// Complete game templates with specific instructions
const gameTemplates = {
    // Games requiring cards
    cardsGames: [
        {
            name: "Speed Snap",
            description: "A fast-paced card matching game where quick reflexes win!",
            setup: "Shuffle the deck and deal all cards face-down equally to each player. Players keep their cards in a pile without looking.",
            rules: [
                "SETUP: Each player holds their face-down card pile in one hand.",
                "GAMEPLAY: Going clockwise, each player quickly flips their top card onto a central pile.",
                "SNAP RULE: When two consecutive cards match (same number/face), the first person to slap the pile and yell 'SNAP!' wins all the cards in the pile.",
                "PENALTY: If you slap incorrectly (no match), you must give 2 cards from your pile to each other player.",
                "WINNING: Play until one person has all the cards, OR set a 10-minute timer - most cards wins!"
            ],
            scoring: "Winner gets all cards in the pile. Game ends when one player collects the entire deck or time runs out."
        },
        {
            name: "Card Tower Race",
            description: "Compete to build the tallest card tower in exactly 3 minutes!",
            setup: "Each player gets exactly 15 cards. Clear a flat surface for each player.",
            rules: [
                "SETUP: Give each player 15 cards. Players sit at their own section of the table.",
                "START: Set timer for 3 minutes. Say 'Ready, Set, Build!'",
                "BUILDING: Lean 2 cards against each other to form a triangle. Place cards flat on top to create floors. Repeat upward.",
                "NO TOUCHING RULE: Once you place a card, you cannot adjust it. If your tower falls, start over with your remaining cards.",
                "TIME'S UP: When timer rings, hands off! Towers are measured from table to highest point."
            ],
            scoring: "Measure each tower's height. Tallest tower wins! Tie-breaker: whoever used fewer cards."
        },
        {
            name: "Memory Match Madness",
            description: "Classic memory game with a twist - you must do a silly action when you get a match!",
            setup: "Remove face cards, use only number cards (Ace-10). Shuffle and lay out all 40 cards face-down in a grid.",
            rules: [
                "SETUP: Lay out cards in 5 rows of 8 cards, all face-down.",
                "YOUR TURN: Flip over exactly 2 cards so everyone can see them.",
                "MATCH FOUND: If both cards show the same number, keep them AND do a silly dance for 5 seconds. Then take another turn.",
                "NO MATCH: If cards don't match, flip them back face-down in the same spots. Turn passes clockwise.",
                "GAME END: When all cards are matched, count your pairs."
            ],
            scoring: "Each pair = 1 point. Most pairs wins! Bonus: +2 points if you remembered a card's location that someone else revealed."
        }
    ],

    // Games requiring dice
    diceGames: [
        {
            name: "Dice Dare Challenge",
            description: "Roll the dice to determine your silly challenge!",
            setup: "You need 2 dice. Write down or remember the challenge list below.",
            rules: [
                "ROLL MEANINGS - Roll 2 dice and add them together:",
                "2 (Snake Eyes): Do your best robot dance for 15 seconds",
                "3: Say the alphabet backwards as fast as you can",
                "4: Do 5 jumping jacks while singing 'Happy Birthday'",
                "5: Talk in a British accent until your next turn",
                "6: Balance on one foot for 20 seconds with eyes closed",
                "7 (Lucky!): Choose any other player to do YOUR dare",
                "8: Do your best impression of another player - they must guess who",
                "9: Say 5 nice things about the person to your left",
                "10: Speak only in questions until your next turn",
                "11: Do a dramatic slow-motion replay of drinking water",
                "12 (Boxcars): Everyone else must do 10 jumping jacks!"
            ],
            scoring: "Complete your dare = 1 point. Refuse = 0 points. First to 7 points wins!"
        },
        {
            name: "Race to 50",
            description: "Strategic dice game - push your luck or play it safe!",
            setup: "Each player needs a way to track their score (paper or phone). You need 2 dice.",
            rules: [
                "GOAL: First player to reach exactly 50 points wins.",
                "YOUR TURN: Roll both dice. You can either BANK your points or ROLL AGAIN.",
                "BANKING: Add your current turn's total to your score. Turn ends. Pass dice.",
                "ROLLING AGAIN: Add the dice total to your turn total, then choose again.",
                "BUST RULE: If you roll a 1 on either die, your turn ends and you score 0 for that turn!",
                "DOUBLE 1s: If you roll two 1s, your turn ends AND you lose ALL your banked points!",
                "EXACT 50: You must land exactly on 50. If your roll would put you over, you score nothing that turn."
            ],
            scoring: "First to exactly 50 points wins. If you go over, your turn total is lost."
        }
    ],

    // Games requiring paper
    paperGames: [
        {
            name: "Broken Telephone Pictionary",
            description: "Draw and guess in a hilarious chain of misunderstandings!",
            setup: "Each player needs 3 small pieces of paper and a pen. Sit in a circle.",
            rules: [
                "ROUND START: Everyone writes a simple phrase on their first paper (e.g., 'Dog riding a skateboard').",
                "PASS LEFT: Pass your paper to the player on your left.",
                "DRAW IT: Look at the phrase you received. On your second paper, DRAW it (no words/letters!). You have 30 seconds.",
                "PASS LEFT AGAIN: Pass ONLY your drawing (not the original phrase).",
                "GUESS IT: Look at the drawing you received. On your third paper, write what you think it shows.",
                "REVEAL: Go around the circle. Each person shows: original phrase → drawing → final guess. Laugh at the chaos!"
            ],
            scoring: "Award 2 points if the final guess matches the original phrase. Most points after 3 rounds wins!"
        },
        {
            name: "Category Sprint",
            description: "Fast-paced word game - list as many items as you can in 30 seconds!",
            setup: "Each player needs paper and a pen. One person is the 'Caller' each round.",
            rules: [
                "CALLER DUTIES: Think of a category (e.g., 'Things that are red', 'Foods you eat cold', 'Animals with 4 legs').",
                "ANNOUNCE: Caller says the category and starts a 30-second timer.",
                "WRITE FAST: Everyone (including Caller) writes as many items as possible that fit the category.",
                "TIME'S UP: Pens down! Go around and read your lists out loud.",
                "SCORING: Cross out any item that ANYONE else also wrote. Count your remaining unique items.",
                "NEXT ROUND: Player to the left becomes the new Caller. Play 5 rounds total."
            ],
            scoring: "Each unique item = 1 point. Highest total after 5 rounds wins!"
        },
        {
            name: "Exquisite Corpse Drawing",
            description: "Create hilarious creatures by drawing in sections without seeing the whole picture!",
            setup: "Each player needs one piece of paper (ideally longer paper works best) and a pen.",
            rules: [
                "FOLD YOUR PAPER: Fold it into 3 equal horizontal sections (like a letter).",
                "SECTION 1 - HEAD: Draw a head/face on the top section. It can be human, animal, monster, anything! Draw 2 small lines extending just past the fold onto section 2.",
                "FOLD & PASS: Fold section 1 back so it's hidden. Pass to the player on your left.",
                "SECTION 2 - BODY: You can only see the 2 lines. Draw a body/torso connecting to those lines. Draw 2 lines extending onto section 3. Fold section 2 back and pass left.",
                "SECTION 3 - LEGS: Draw legs/feet connecting to the visible lines.",
                "REVEAL: Unfold completely and show your creature! Give it a name together."
            ],
            scoring: "No points - just laughs! Vote on: 'Most Likely to Be Real', 'Most Terrifying', 'Would Adopt'"
        }
    ],

    // Games requiring timer
    timerGames: [
        {
            name: "60-Second Expert",
            description: "Become an instant 'expert' on ridiculous topics!",
            setup: "Write 10+ silly topics on paper slips (e.g., 'Why cats secretly run the world', 'The history of belly button lint', 'How to train a goldfish').",
            rules: [
                "DRAW A TOPIC: Active player picks a topic slip without looking first.",
                "PREPARE: You have exactly 10 seconds to think after reading the topic.",
                "PRESENT: Set timer for 60 seconds. You must talk confidently about this topic as if you're an expert. No stopping!",
                "RULES: No saying 'um' or 'uh'. No repeating sentences. Must sound confident even when making things up!",
                "JUDGING: Other players hold up 1-5 fingers for how convincing you were.",
                "ROTATE: Next player clockwise draws a new topic."
            ],
            scoring: "Add up the fingers shown for your score. Highest score after everyone goes twice wins!"
        },
        {
            name: "Speed Stacker Challenge",
            description: "Stack household items as high as possible in exactly 60 seconds!",
            setup: "Gather stackable items: books, cans, boxes, cushions, toys. Each player gets the same items.",
            rules: [
                "ITEM DRAFT: Place all stackable items in the center. Going in turns, each player picks 1 item until everyone has 10 items.",
                "BUILDING ZONE: Each player sits at their designated spot at least 3 feet apart.",
                "GO!: Start the 60-second timer. Stack your items as high as possible!",
                "MUST STAND: Your tower must stand on its own for 5 seconds after time is called.",
                "NO LEANING: Tower cannot lean against walls, furniture, or people.",
                "COLLAPSE: If your tower falls during building, you can rebuild with remaining time."
            ],
            scoring: "Measure tower height in inches. Tallest standing tower wins! If tied, fewer items used wins."
        }
    ],

    // Games requiring ball
    ballGames: [
        {
            name: "Hot Potato Trivia",
            description: "Pass the ball while answering questions - hesitate and you're out!",
            setup: "Sit in a circle. One person is the 'Question Master' and doesn't hold the ball.",
            rules: [
                "START: Question Master starts music (or counts silently). Ball holder begins passing clockwise.",
                "QUESTION TIME: Question Master stops music/counting randomly and asks a quick question to whoever holds the ball.",
                "CATEGORIES: Animals, Foods, Movies, Colors, Countries - Question Master picks the category.",
                "ANSWER FAST: Ball holder must give a valid answer within 3 seconds. Answer must fit the category and not be repeated.",
                "OUT: Fail to answer in time, repeat an answer, or give an invalid answer = you're out. Sit out and help judge.",
                "CONTINUE: Remaining players keep passing. Last person standing wins!"
            ],
            scoring: "Last person remaining wins the round. Best of 3 rounds = champion!"
        },
        {
            name: "Bounce Battle",
            description: "Competitive ball bouncing into targets - easy to learn, hard to master!",
            setup: "Set up 5 targets at different distances: a pot, a box, a bag, etc. Mark a throwing line with tape.",
            rules: [
                "TARGET SETUP: Place targets at varying distances. Closer targets = fewer points.",
                "TARGET POINTS: Closest = 1 point, Next = 2 points, Middle = 3 points, Far = 5 points, Farthest = 10 points.",
                "THROWING: Stand behind the line. You must bounce the ball ONCE before it lands in a target.",
                "TURNS: Each player gets 5 throws per round. Play 3 rounds total.",
                "BOUNCE REQUIRED: Ball must bounce exactly once. Direct throws or multiple bounces don't count.",
                "STUCK BONUS: If ball stays in target = double points for that throw!"
            ],
            scoring: "Add up points from all rounds. Highest total wins! Tie-breaker: sudden death throw at farthest target."
        }
    ],

    // Games requiring blankets
    blanketGames: [
        {
            name: "Mummy Wrap Race",
            description: "Wrap your teammate in a blanket mummy as fast as possible!",
            setup: "You need at least 2 blankets. Split into teams of 2 (one wrapper, one mummy).",
            rules: [
                "POSITIONS: 'Mummy' stands with arms at their sides. 'Wrapper' holds the blanket ready.",
                "GOAL: Wrap your mummy completely - only face can show. Arms, legs, body all covered.",
                "START: Someone says 'Ready, Set, Wrap!' All teams start at the same time.",
                "WRAPPING RULES: Mummy must stand still. No blanket can touch the floor. Mummy cannot help.",
                "DONE: When wrapper thinks they're finished, both people yell 'MUMMY!' and freeze.",
                "JUDGING: Check each mummy. Any skin showing (except face) = not done. First complete mummy wins!"
            ],
            scoring: "First team done = 5 points. Second = 3 points. Third = 1 point. Switch roles and play again!"
        },
        {
            name: "Blanket Fort Architect",
            description: "Competitive fort building with specific requirements!",
            setup: "Each team gets: 2 blankets, 4 pillows, and 3 chairs. Set a 10-minute timer.",
            rules: [
                "REQUIREMENTS - Your fort MUST have all of these:",
                "1. An entrance big enough to crawl through",
                "2. Room for all team members to sit inside",
                "3. A 'window' (hole you can see through)",
                "4. A 'flag' (corner of blanket sticking up on top)",
                "5. The fort must stand on its own for 30 seconds",
                "BUILDING: 10 minutes to complete. All team members must help.",
                "JUDGING: At 10 minutes, hands off! Forts are checked for all 5 requirements."
            ],
            scoring: "Each requirement met = 2 points. Fastest to finish (if both complete) = 3 bonus points."
        }
    ],

    // Games requiring music
    musicGames: [
        {
            name: "Freeze Dance Eliminator",
            description: "Dance when the music plays, freeze when it stops!",
            setup: "Clear a dancing area. One person controls the music (the DJ).",
            rules: [
                "DJ CONTROLS: DJ plays music facing away from dancers. DJ pauses music randomly every 10-30 seconds.",
                "DANCING: When music plays, everyone MUST dance. No standing still allowed!",
                "FREEZING: When music stops, FREEZE immediately. Hold your exact position.",
                "JUDGING: DJ slowly turns around and watches for 5 seconds. ANY movement = you're out.",
                "MOVEMENT = Moving arms, legs, head, swaying, blinking too much, or laughing so hard you shake!",
                "LAST DANCER: When only one dancer remains, they become the next DJ. Previous DJ joins dancers."
            ],
            scoring: "Last person dancing each round = 3 points. Play 5 rounds. Highest points wins!"
        },
        {
            name: "Lyric Sync Battle",
            description: "Lip sync and perform to song snippets - be dramatic!",
            setup: "Create a playlist of 10 well-known songs. Each player gets a turn to perform.",
            rules: [
                "SONG SELECTION: DJ plays a random song from the playlist for 30-45 seconds.",
                "PERFORMANCE: The performer must dramatically lip sync AND add dance moves/gestures.",
                "ENERGY REQUIRED: You must use the whole performance space. Move around! Be dramatic!",
                "JUDGING CRITERIA: Other players rate 1-10 on: Accuracy of lyrics (mouth movement), Energy/Dancing, Dramatic flair",
                "PROPS BONUS: Using any household item as a 'microphone' or prop = +2 bonus points",
                "EVERYONE PERFORMS: Each player performs to 2 different songs."
            ],
            scoring: "Add up all ratings received. Highest total score wins! Award 'Best Dramatic Moment' too."
        }
    ],

    // Games requiring craft supplies
    craftGames: [
        {
            name: "Wearable Art Fashion Show",
            description: "Create an outfit or accessory from craft supplies and model it!",
            setup: "Gather: paper, tape, scissors, markers, string, any craft supplies. 15 minutes to create.",
            rules: [
                "MATERIALS: Each player gets equal supplies. May also use newspaper, bags, etc.",
                "THEME (pick one): Futuristic, Nature-inspired, Formal wear, Superhero costume",
                "CREATION: 15 minutes to design and make a wearable item. Can be hat, jewelry, cape, full outfit.",
                "MUST BE WEARABLE: You have to actually wear it for the fashion show.",
                "FASHION SHOW: Clear a 'runway' space. Each person walks the runway, poses at the end, walks back.",
                "COMMENTARY: One person gives fashion commentary like a real show ('And here comes Alex in a stunning paper hat...')"
            ],
            scoring: "Vote on: Most Creative, Best Constructed, Best Runway Walk. Winners get 3 points each. Multiple categories = more points!"
        },
        {
            name: "60-Second Sculpture Sprint",
            description: "Create a recognizable sculpture in just 60 seconds!",
            setup: "Each player gets: 5 pipe cleaners OR a ball of clay/playdough OR 10 pieces of paper + tape.",
            rules: [
                "ANNOUNCER: One person announces a random object (e.g., 'elephant', 'car', 'pizza', 'guitar').",
                "CREATE: Start 60-second timer. Using only your materials, sculpt that object!",
                "HANDS OFF: When timer ends, step away from your sculpture.",
                "GUESSING: Cover or hide all sculptures. Reveal one at a time - others guess what it is.",
                "SCORING: If guessed correctly = 2 points for the artist. Wrong guess = artist gets 0.",
                "ROTATE: Different person announces next round. Everyone plays 4 rounds."
            ],
            scoring: "Add up points from all rounds. Most points wins! Bonus: 'Most Unrecognizable' award (no points, just laughs)."
        }
    ],

    // Acting/Performing games
    actingGames: [
        {
            name: "Emotion Explosion",
            description: "Act out everyday activities with extreme emotions!",
            setup: "Write emotions on slips: FURIOUS, OVERJOYED, TERRIFIED, DISGUSTED, MADLY IN LOVE, EXTREMELY BORED, SUSPICIOUS, HYPER",
            rules: [
                "ACTIVITY LIST: Making a sandwich, Brushing teeth, Opening a present, Answering the phone, Finding a spider, Reading a text message",
                "DRAW BOTH: Active player draws one EMOTION and one ACTIVITY slip.",
                "PERFORM: You have 60 seconds to act out the activity while showing that emotion. No talking!",
                "GUESSING: Other players must guess BOTH the emotion AND the activity.",
                "PARTIAL CREDIT: Guessing emotion only = 1 point for guesser. Activity only = 1 point. Both = 3 points.",
                "PERFORMER POINTS: If someone guesses both correctly, performer also gets 2 points."
            ],
            scoring: "First to 15 points wins! (Both guessers and performers can earn points)"
        },
        {
            name: "One-Word Story Actors",
            description: "Create a story one word at a time, then act out the whole thing!",
            setup: "Sit in a circle. Designate someone to write down the story.",
            rules: [
                "STORY BUILDING: Go around the circle. Each person adds exactly ONE word to the story.",
                "STORY LENGTH: Continue until you've gone around 4 times (about 12 words with 3 players).",
                "GRAMMAR COUNTS: You can say 'period' or 'comma' as your word to end sentences.",
                "READ IT BACK: Story writer reads the complete story dramatically.",
                "ASSIGN ROLES: Decide who plays each character/object mentioned in the story.",
                "PERFORM: Act out the entire story! One person narrates while others perform.",
                "REPEAT: Create 3 different stories, taking turns as narrator."
            ],
            scoring: "No points - just creative fun! Vote on 'Best Story' and 'Best Performance' at the end."
        }
    ],

    // Guessing games
    guessingGames: [
        {
            name: "Celebrity Head",
            description: "Guess who you are by asking yes/no questions!",
            setup: "Write famous characters/people on sticky notes or paper slips: movie characters, cartoon characters, celebrities everyone knows.",
            rules: [
                "SECRET IDENTITY: Without looking, each player gets a name stuck to their forehead (or held behind their head).",
                "QUESTIONS: On your turn, ask ONE yes/no question about who you are. ('Am I a cartoon?' 'Am I female?')",
                "ANSWERS: Everyone else answers honestly. If split (some yes, some no), it counts as 'maybe'.",
                "GUESSING: Instead of a question, you can guess who you are. Wrong guess = your turn ends.",
                "OUT: Correct guess = you're done! Help answer others' questions.",
                "TURN ORDER: Keep rotating. Eliminated players still help answer."
            ],
            scoring: "First to guess correctly = 5 points. Second = 3 points. Third = 1 point."
        },
        {
            name: "Sound Effect Guessing",
            description: "Make sound effects for objects/actions while others guess!",
            setup: "Write items on slips: Popcorn popping, Thunderstorm, Cat purring, Door creaking, Toilet flushing, Helicopter, Snoring, etc.",
            rules: [
                "DRAW A SOUND: Active player picks a slip and sees the sound they must make.",
                "MAKE THE SOUND: Using only your voice (no words!), create that sound effect. Repeat as needed.",
                "GUESSING: Other players shout out guesses. First correct guess wins the round.",
                "ONE MINUTE LIMIT: If no one guesses in 60 seconds, reveal the answer. No points awarded.",
                "NO ACTIONS: Sound maker cannot mime or gesture - voice only!",
                "ROTATE: Everyone takes 3 turns making sounds."
            ],
            scoring: "Guesser gets 2 points for correct guess. Sound maker gets 1 point if someone guesses correctly."
        }
    ],

    // Team games
    teamGames: [
        {
            name: "Back-to-Back Drawing",
            description: "One describes, one draws - but you can't see each other!",
            setup: "Split into pairs. Each pair sits back-to-back. Drawer has paper and pen. Describer has a simple image.",
            rules: [
                "IMAGES: Use simple pictures - shapes, basic objects, stick figures. Nothing too complex.",
                "DESCRIBING: Describer explains the image WITHOUT naming what it is. ('Draw a circle in the top left')",
                "DRAWING: Drawer follows instructions exactly. Cannot ask questions!",
                "TIME LIMIT: 90 seconds per drawing.",
                "REVEALING: Compare the original image to the drawing. Rate similarity 1-10.",
                "SWITCH: Partners swap roles. Do 3 rounds each."
            ],
            scoring: "Add up similarity ratings. Team with highest combined score wins!"
        },
        {
            name: "Human Knot Race",
            description: "Untangle your team's human knot faster than the other team!",
            setup: "Need at least 6 players. Split into 2 teams. Each team forms a circle.",
            rules: [
                "FORM THE KNOT: Everyone reaches into the circle with both hands and grabs two DIFFERENT people's hands.",
                "RULES: Cannot hold both hands of the same person. Cannot hold the hand of someone right next to you.",
                "GO!: Both teams start untangling at the same time.",
                "UNTANGLING: Climb over, duck under, twist around - but NEVER let go of hands!",
                "GOAL: Form a complete circle (or figure-8) where everyone faces inward, still holding hands.",
                "TALKING: Lots of communication! ('Step over my arm!' 'Duck under here!')"
            ],
            scoring: "First team to untangle wins! If neither succeeds in 10 minutes, team closest to solved wins."
        }
    ],

    // Default/fallback games
    defaultGames: [
        {
            name: "Statue Maker",
            description: "Mold your partner into a statue, then everyone guesses what it is!",
            setup: "Split into pairs. One is the 'clay', one is the 'sculptor'.",
            rules: [
                "SECRET STATUE: Sculptor whispers to the host what statue they'll make (e.g., 'Statue of Liberty', 'baseball player', 'dog').",
                "MOLDING: Clay person goes limp. Sculptor has 60 seconds to position them into the statue pose.",
                "NO TALKING: Sculptor cannot speak or gesture to clay. Only physically move their arms, legs, head.",
                "FREEZE: Clay holds the position perfectly still.",
                "GUESSING: Other players have 30 seconds to guess what the statue represents.",
                "SWITCH: Partners swap roles. Everyone has 2 turns as sculptor."
            ],
            scoring: "Correct guess = 2 points for sculptor, 1 point for guesser. Fastest guess = 1 bonus point."
        },
        {
            name: "Fortunately/Unfortunately",
            description: "Build a wild story that swings between good and bad luck!",
            setup: "Sit in a circle. Decide on a main character name (can be someone playing or a made-up name).",
            rules: [
                "STARTING: First player begins with a situation. ('Alex went to the store to buy milk.')",
                "UNFORTUNATELY: Next player continues with something bad. ('Unfortunately, the store was being robbed by a clown.')",
                "FORTUNATELY: Next player counters with something good. ('Fortunately, Alex is a trained clown fighter.')",
                "PATTERN: Continue alternating unfortunately/fortunately around the circle.",
                "BUILD ON IT: Each addition must connect to the previous statement logically (even if silly).",
                "ENDING: After 3 full rounds, the next player must conclude the story."
            ],
            scoring: "Vote on: Most Creative Addition (3 points), Funniest Line (3 points), Best Ending (3 points)."
        },
        {
            name: "Rhythm Name Game",
            description: "Keep the beat while calling names - mess up and you're out!",
            setup: "Sit in a circle. Learn the rhythm: slap thighs twice, clap twice, snap twice (or any consistent pattern).",
            rules: [
                "THE BEAT: Everyone does the rhythm together. Keep it steady throughout the game!",
                "CALLING: On the SNAPS, active player says their name then another player's name.",
                "EXAMPLE: (slap slap, clap clap) 'Alex - Sam' (said on the snaps)",
                "RESPONSE: Sam must respond on the very next set of snaps with 'Sam - [new name]'.",
                "OUT: You're out if you: miss the beat, hesitate too long, call someone already out, or call yourself.",
                "SPEED UP: Every time someone gets out, the rhythm gets slightly faster!"
            ],
            scoring: "Last person in the game wins! Play best of 3 rounds."
        }
    ]
};

function generateCustomGame() {
    const { items, elements, theme, twist } = state.generatorInputs;

    // Determine which game pool to use based on items and elements
    let possibleGames = [];

    // Add games based on available items
    if (items.includes('cards')) {
        possibleGames.push(...gameTemplates.cardsGames);
    }
    if (items.includes('dice')) {
        possibleGames.push(...gameTemplates.diceGames);
    }
    if (items.includes('paper')) {
        possibleGames.push(...gameTemplates.paperGames);
    }
    if (items.includes('timer')) {
        possibleGames.push(...gameTemplates.timerGames);
    }
    if (items.includes('ball')) {
        possibleGames.push(...gameTemplates.ballGames);
    }
    if (items.includes('blankets')) {
        possibleGames.push(...gameTemplates.blanketGames);
    }
    if (items.includes('music')) {
        possibleGames.push(...gameTemplates.musicGames);
    }
    if (items.includes('craft')) {
        possibleGames.push(...gameTemplates.craftGames);
    }

    // Add games based on elements
    if (elements.includes('acting')) {
        possibleGames.push(...gameTemplates.actingGames);
    }
    if (elements.includes('guessing')) {
        possibleGames.push(...gameTemplates.guessingGames);
    }
    if (elements.includes('teams')) {
        possibleGames.push(...gameTemplates.teamGames);
    }

    // If no specific matches, use default games
    if (possibleGames.length === 0) {
        possibleGames = gameTemplates.defaultGames;
    }

    // Pick a random game from the possibilities
    const selectedGame = possibleGames[Math.floor(Math.random() * possibleGames.length)];

    // Customize with theme and twist if provided
    let gameName = selectedGame.name;
    let gameDescription = selectedGame.description;

    if (theme) {
        gameName = `${capitalize(theme)} ${selectedGame.name}`;
        gameDescription = `${selectedGame.description} Theme: ${theme}!`;
    }

    // Build complete rules list
    const rules = [];

    if (selectedGame.setup) {
        rules.push(`SETUP: ${selectedGame.setup}`);
    }

    rules.push(...selectedGame.rules);

    if (selectedGame.scoring) {
        rules.push(`SCORING: ${selectedGame.scoring}`);
    }

    if (twist) {
        rules.push(`FAMILY TWIST: Whenever anyone says or does something related to "${twist}", everyone must freeze for 3 seconds!`);
    }

    return {
        name: gameName,
        description: gameDescription,
        rules: rules
    };
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let currentGeneratedGame = null;

function displayGeneratedGame(game) {
    currentGeneratedGame = {
        id: Date.now(),
        name: game.name,
        description: game.description,
        moods: ['creative', 'custom'],
        time: 30,
        materials: state.generatorInputs.items.length > 0
            ? state.generatorInputs.items.map(i => i.charAt(0).toUpperCase() + i.slice(1))
            : ['Just yourselves!'],
        instructions: game.rules
    };

    document.getElementById('generatedName').textContent = game.name;
    document.getElementById('generatedDescription').textContent = game.description;
    document.getElementById('generatedRules').innerHTML = `
        <h4>How to Play:</h4>
        <ol>${game.rules.map(r => `<li>${r}</li>`).join('')}</ol>
    `;

    generatedGameSection.classList.remove('hidden');

    // Scroll to result
    generatedGameSection.scrollIntoView({ behavior: 'smooth' });
}

regenerateBtn.addEventListener('click', () => {
    const game = generateCustomGame();
    displayGeneratedGame(game);
});

saveGeneratedBtn.addEventListener('click', () => {
    if (!currentGeneratedGame) return;

    state.favorites.push(currentGeneratedGame);
    localStorage.setItem('familyFunFavorites', JSON.stringify(state.favorites));

    saveGeneratedBtn.textContent = 'Saved!';
    setTimeout(() => {
        saveGeneratedBtn.textContent = '❤️ Save This Game';
    }, 2000);
});

// Initialize
renderFavorites();
