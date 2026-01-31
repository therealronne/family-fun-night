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

function generateCustomGame() {
    const { items, elements, theme, twist } = state.generatorInputs;

    // Game templates based on elements
    const templates = [
        {
            condition: () => elements.includes('guessing') && elements.includes('acting'),
            generate: () => ({
                name: theme ? `${capitalize(theme)} Charades` : 'Family Charades Remix',
                description: `Act out ${theme || 'fun prompts'} while your family guesses!${twist ? ` Special rule: ${twist} must be included somehow!` : ''}`,
                rules: [
                    items.includes('timer') ? 'Set a 60-second timer for each turn' : 'Count to 30 for each turn',
                    items.includes('paper') ? 'Write prompts on paper slips and draw from a bowl' : 'Take turns thinking of prompts',
                    'No talking or sounds allowed while acting!',
                    elements.includes('teams') ? 'Split into teams and alternate turns' : 'Everyone plays together - guesser becomes next actor',
                    elements.includes('points') ? 'Award 2 points for correct guesses within time' : 'Just have fun - no scores needed!',
                    twist ? `Bonus: Work in "${twist}" whenever possible for extra laughs!` : 'Be creative with your acting!'
                ]
            })
        },
        {
            condition: () => elements.includes('building'),
            generate: () => ({
                name: theme ? `${capitalize(theme)} Construction Challenge` : 'Master Builders',
                description: `Build something amazing together!${twist ? ` Inspired by: ${twist}` : ''}`,
                rules: [
                    items.includes('craft') ? 'Use craft supplies to build your creation' : 'Use whatever building materials you have',
                    elements.includes('teams') ? 'Work in teams to build competing structures' : 'Work together on one epic creation',
                    elements.includes('turns') ? 'Take turns adding one piece at a time' : 'Everyone builds simultaneously',
                    items.includes('timer') ? 'You have 10 minutes to complete your build!' : 'Take your time and be creative',
                    theme ? `Your build must fit the "${theme}" theme` : 'Build anything your imagination dreams up',
                    elements.includes('points') ? 'Judge on creativity, stability, and theme-matching' : 'Celebrate everyone\'s creation!'
                ]
            })
        },
        {
            condition: () => elements.includes('story'),
            generate: () => ({
                name: theme ? `Tales of ${capitalize(theme)}` : 'Story Spinners',
                description: `Create an amazing story together, one piece at a time!${twist ? ` Featuring: ${twist}` : ''}`,
                rules: [
                    elements.includes('turns') ? 'Each person adds one sentence to the story' : 'Pass the story whenever someone says a keyword',
                    items.includes('dice') ? 'Roll dice to determine what happens next (1-2: danger, 3-4: new character, 5-6: plot twist)' : 'Let your imagination guide the story',
                    theme ? `The story must take place in a "${theme}" setting` : 'The story can go anywhere!',
                    twist ? `The character "${twist}" must appear in the story` : 'Add unexpected characters!',
                    items.includes('paper') ? 'Write down the story as you go' : 'Just tell it out loud',
                    'The story ends when someone dramatically says "THE END!"'
                ]
            })
        },
        {
            condition: () => elements.includes('challenge'),
            generate: () => ({
                name: theme ? `${capitalize(theme)} Challenge Gauntlet` : 'Family Challenge Time',
                description: `Complete silly physical challenges to win!${twist ? ` ${twist} might make an appearance!` : ''}`,
                rules: [
                    items.includes('timer') ? 'Each challenge has a 60-second time limit' : 'Complete challenges as fast as you can',
                    items.includes('ball') ? 'Challenge 1: Balance the ball on your head while walking across the room' : 'Challenge 1: Hop on one foot for 30 seconds',
                    items.includes('blankets') ? 'Challenge 2: Wrap yourself in a blanket burrito, then unwrap as fast as possible' : 'Challenge 2: Do 10 jumping jacks in silly slow motion',
                    elements.includes('teams') ? 'Teams take turns attempting challenges' : 'Everyone attempts each challenge',
                    elements.includes('points') ? 'Award 10 points for completing each challenge' : 'Cheer for everyone who tries!',
                    theme ? `All challenges must be done in a "${theme}" style` : 'Add your own flair to each challenge!'
                ]
            })
        },
        {
            condition: () => elements.includes('points'),
            generate: () => ({
                name: theme ? `${capitalize(theme)} Points Race` : 'Family Points Showdown',
                description: `Compete in mini-games to earn the most points!${twist ? ` Watch out for ${twist}!` : ''}`,
                rules: [
                    'Play 5 quick rounds of different mini-games',
                    items.includes('cards') ? 'Round 1: Fastest to build a 3-level card tower' : 'Round 1: First to name 10 animals',
                    items.includes('dice') ? 'Round 2: Roll dice - highest total wins' : 'Round 2: Rock-paper-scissors tournament',
                    items.includes('paper') ? 'Round 3: Draw something in 30 seconds, others guess' : 'Round 3: Staring contest',
                    theme ? `Round 4: Best ${theme}-themed impression` : 'Round 4: Silliest dance move',
                    twist ? `Round 5: Everyone must incorporate "${twist}" somehow` : 'Round 5: Best joke wins',
                    'Winner of each round gets 10 points. Most points at the end wins!'
                ]
            })
        },
        // Default template
        {
            condition: () => true,
            generate: () => ({
                name: theme ? `The ${capitalize(theme)} Game` : 'Family Fun Mashup',
                description: `A custom game created just for your family!${twist ? ` Featuring the legendary ${twist}!` : ''}`,
                rules: generateDefaultRules(items, elements, theme, twist)
            })
        }
    ];

    // Find first matching template
    const template = templates.find(t => t.condition());
    return template.generate();
}

function generateDefaultRules(items, elements, theme, twist) {
    const rules = [];

    // Setup rule
    if (items.includes('cards')) {
        rules.push('Shuffle the deck and deal 5 cards to each player');
    } else if (items.includes('dice')) {
        rules.push('Each player rolls the dice to determine turn order (highest goes first)');
    } else {
        rules.push('Youngest player goes first, then go clockwise');
    }

    // Main mechanic
    if (elements.includes('turns')) {
        rules.push('Take turns clockwise around the group');
    }
    if (elements.includes('teams')) {
        rules.push('Split into two teams (parents vs kid, or mix it up!)');
    }

    // Action rules
    if (items.includes('timer') && elements.includes('guessing')) {
        rules.push('You have 30 seconds to give clues while your team guesses');
    }
    if (items.includes('music') && elements.includes('acting')) {
        rules.push('When the music plays, perform! When it stops, freeze!');
    }
    if (elements.includes('challenge') && items.includes('ball')) {
        rules.push('Pass the ball while doing the challenge - drop it and you\'re out!');
    }

    // Scoring
    if (elements.includes('points')) {
        rules.push('Earn 5 points for each successful round. First to 25 wins!');
    }

    // Theme integration
    if (theme) {
        rules.push(`Everything must relate to the "${theme}" theme - be creative!`);
    }

    // Twist integration
    if (twist) {
        rules.push(`Special rule: Whenever someone mentions "${twist}", everyone must do a silly action!`);
    }

    // Fallback rules if not many were generated
    if (rules.length < 4) {
        rules.push('Take turns doing something fun');
        rules.push('Cheer for each other!');
        rules.push('The most important rule: Have fun together!');
    }

    return rules;
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
