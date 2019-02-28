const db = require("../models");
const questions = [
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the A Song of Ice And Fire fantasy novel series?",
    correct_answer: "George R. R. Martin",
    incorrect_answers: ["George Lucas", "George Orwell", "George Eliot"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "George Orwell wrote this book, which is often considered a statement on government oversight.",
    correct_answer: "1984",
    incorrect_answers: [
      "The Old Man and the Sea",
      "Catcher and the Rye",
      "To Kill a Mockingbird"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    correct_answer: "Badger",
    incorrect_answers: ["Fox", "Frog", "Rabbit"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "How many books are in the Chronicles of Narnia series?",
    correct_answer: "7",
    incorrect_answers: ["6", "8", "5"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What was the name of Captain Nemo's submarine in 20,000 Leagues Under the Sea?",
    correct_answer: "The Nautilus",
    incorrect_answers: ["The Neptune", "The Poseidon ", "The Atlantis"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the book The Martian, how long was Mark Watney trapped on Mars (in Sols)?",
    correct_answer: "549 Days",
    incorrect_answers: ["765 Days", "401 Days", "324 Days"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which of the following is the world's best-selling book?",
    correct_answer: "The Lord of the Rings",
    incorrect_answers: [
      "The Little Prince",
      "Harry Potter and the Philosopher's Stone",
      "The Da Vinci Code"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the 1967 horror novel Rosemary's Baby?",
    correct_answer: "Ira Levin",
    incorrect_answers: ["Stephen King", "Robert Bloch", "Mary Shelley"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
    correct_answer: "Oswald",
    incorrect_answers: ["James", "Harold", "Christopher"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
    correct_answer: "Astoria Greengrass",
    incorrect_answers: [
      "Pansy Parkinson",
      "Millicent Bulstrode",
      "Hermione Granger"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "What is Hermione Granger's middle name?",
    correct_answer: "Jean",
    incorrect_answers: ["Jane", "Emma", "Jo"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "What is Ron Weasley's middle name?",
    correct_answer: "Bilius",
    incorrect_answers: ["Arthur", "John", "Dominic"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
    correct_answer: "Gloin",
    incorrect_answers: ["Thorin Oakenshield", "Bombur", "Dwalin"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What position does Harry Potter play in Quidditch?",
    correct_answer: "Seeker",
    incorrect_answers: ["Beater", "Chaser", "Keeper"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
    correct_answer: "The Artful Dodger",
    incorrect_answers: ["Fagin", "Bull's-eye", "Mr. Fang"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who wrote the novel 'Fear And Loathing In Las Vegas'?",
    correct_answer: "Hunter S. Thompson",
    incorrect_answers: [
      "F. Scott Fitzgerald",
      "Henry Miller",
      "William S. Burroughs"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "Which famous spy novelist wrote the childrens' story Chitty-Chitty-Bang-Bang?",
    correct_answer: "Ian Fleming",
    incorrect_answers: ["Joseph Conrad", "John Buchan", "Graham Greene"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "By what name was the author Eric Blair better known?",
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What was the pen name of novelist, Mary Ann Evans?",
    correct_answer: "George Eliot",
    incorrect_answers: [
      "George Orwell",
      "George Bernard Shaw",
      "George Saunders"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the children's story The Little Match Girl?",
    correct_answer: "Hans Christian Andersen",
    incorrect_answers: ["Charles Dickens", "Lewis Carroll", "Oscar Wilde"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter series, what is Headmaster Dumbledore's full name?",
    correct_answer: "Albus Percival Wulfric Brian Dumbledore",
    incorrect_answers: [
      "Albus Valum Jetta Mobius Dumbledore",
      "Albus James Lunae Otto Dumbledore",
      "Albus Valencium Horatio Kul Dumbledore"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "How many Harry Potter books are there?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "6"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?",
    correct_answer: "Richard Bachman",
    incorrect_answers: ["J. D. Robb", "Mark Twain", "Lewis Carroll"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "The novel Jane Eyre was written by what author? ",
    correct_answer: "Charlotte Bronte",
    incorrect_answers: ["Emily Bronte", "Jane Austen", "Louisa May Alcott"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "The novel Of Mice And Men was written by what author? ",
    correct_answer: "John Steinbeck ",
    incorrect_answers: ["George Orwell", "Mark Twain ", "Harper Lee"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who wrote the young adult novel The Fault in Our Stars?",
    correct_answer: "John Green",
    incorrect_answers: ["Stephenie Meyer", "Suzanne Collins", "Stephen Chbosky"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who was the author of the 1954 novel, Lord of the Flies?",
    correct_answer: "William Golding",
    incorrect_answers: ["Stephen King", "F. Scott Fitzgerald", "Hunter Fox"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "J.K. Rowling completed Harry Potter and the Deathly Hallows in which hotel in Edinburgh, Scotland?",
    correct_answer: "The Balmoral",
    incorrect_answers: [
      "The Dunstane Hotel",
      "Hotel Novotel",
      "Sheraton Grand Hotel & Spa"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In the year 1818, novelist Mary Shelly is credited with writing a fiction novel and creating this infamous character.",
    correct_answer: "Frankenstein's monster",
    incorrect_answers: ["Dracula", "The Thing", "The Invisible Man"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer's Stone?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Spike", "Poofy", "Spot"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "The title of Adolf Hitler's autobiography Mein Kampf is what when translated to English?",
    correct_answer: "My Struggle",
    incorrect_answers: ["My Hatred", "My Sadness", "My Desire"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the protagonist of J.D. Salinger's novel Catcher in the Rye?",
    correct_answer: "Holden Caulfield",
    incorrect_answers: ["Fletcher Christian", "Jay Gatsby", "Randall Flagg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "Where does the book The Silence of the Lambs get its title from?",
    correct_answer: "The main character's trauma in childhood",
    incorrect_answers: [
      "The relation it has with killing the innocents",
      "The villain's favourite meal",
      "The voice of innocent people being shut by the powerful"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of these book series is by James Patterson?",
    correct_answer: "Maximum Ride",
    incorrect_answers: [
      "Harry Potter",
      "The Legend of Xanth",
      "The Bartemaeus Trilogy"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In the novel Lord of the Rings, how many rings of power were given to the race of man?",
    correct_answer: "9",
    incorrect_answers: ["5", "11", "13"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In Michael Crichton's novel Jurassic Park, John Hammond meets his demise at the claws of which dinosaur?",
    correct_answer: "Procompsognathus",
    incorrect_answers: ["Dilophosaurus", "Tyrannosaurus Rex", "Velociraptor"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In the Harry Potter novels, what must a Hogwarts student do to enter the Ravenclaw Common Room?",
    correct_answer: "Answer a riddle",
    incorrect_answers: [
      "Rhythmically tap barrels with a wand",
      "Speak a password",
      "Knock in sequence"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What is the name of Sherlock Holmes's brother?",
    correct_answer: "Mycroft Holmes",
    incorrect_answers: [
      "Mederi Holmes",
      "Martin Holmes",
      "Herbie Hancock Holmes"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in Jurassic Park?",
    correct_answer: "1992 Toyota Land Cruiser",
    incorrect_answers: [
      "1992 Jeep Wrangler YJ Sahar",
      "1992 Ford Explorer XLT",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the book series Odd Thomas, Danny Jessup has what genetic disease? ",
    correct_answer: " Osteogenesis Imperfecta",
    incorrect_answers: [
      "Spinocerebellar ataxia",
      "Adrenoleukodystrophy",
      "Cystic Fibrosis"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In Little Women, which of the March sisters married Laurie?",
    correct_answer: "Amy",
    incorrect_answers: ["Beth", "Jo", "Meg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Antiquities, Ice Age, and Alliances expansions take place on which continent?",
    correct_answer: "Terisiare",
    incorrect_answers: ["Aerona", "Shiv", "Jamuraa"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Fallen Empires expansion takes place on which continent?",
    correct_answer: "Sarpadia",
    incorrect_answers: ["Otaria", "Terisiare", "Shiv"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, which plane does the Homelands expansion take place in?",
    correct_answer: "Ulgrotha",
    incorrect_answers: ["Bant", "Llanowar", "Tazeem"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What's the second book in George R. R. Martin's 'A Song of Ice and Fire' series?",
    correct_answer: "A Clash of Kings",
    incorrect_answers: [
      "A Dance with Dragons",
      "A Storm of Swords",
      "A Feast for Crows"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In which classic novel is there a character named Homer Simpson?",
    correct_answer: "The Day of the Locust",
    incorrect_answers: ["Catch-22", "Of Mice and Men", "A Separate Peace"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What is the name of Eragon's dragon in Eragon?",
    correct_answer: "Saphira",
    incorrect_answers: ["Glaedr", "Thorn", "Arya"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "In the name of the fictional SCP Foundation, what does the SCP stand for?",
    correct_answer: "Special Containment Procedures",
    incorrect_answers: [
      "Secure, Contain, Protect",
      "Supernatural Creature Preservation",
      "Silent Community Protection"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    correct_answer: "SCP-173",
    incorrect_answers: ["SCP-001", "SCP-999", "SCP-1459"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What breed of dog was 'Marley' in the film 'Marley & Me'?",
    correct_answer: "Labrador Retriever",
    incorrect_answers: ["Golden Retriever", "Dalmatian", "Shiba Inu"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which of the following is not the name of a 'Bond Girl'? ",
    correct_answer: "Vanessa Kensington",
    incorrect_answers: ["Pam Bouvier", "Mary Goodnight", "Wai Lin"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Which of the following movies was not based on a novel by Stephen King? ",
    correct_answer: "The Thing",
    incorrect_answers: ["Carrie", "Misery", "The Green Mile"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Who directed E.T. the Extra-Terrestrial (1982)?",
    correct_answer: "Steven Spielberg",
    incorrect_answers: ["Stanley Kubrick", "James Cameron", "Tim Burton"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Who played Deputy Marshal Samuel Gerard in the 1993 film The Fugitive?",
    correct_answer: "Tommy Lee Jones",
    incorrect_answers: ["Harrison Ford", "Harvey Keitel", "Martin Landau"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
    correct_answer: "Chicago",
    incorrect_answers: ["Dreamgirls", "Cabaret", "All That Jazz"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1984 movie The Terminator, what model number is the Terminator portrayed by Arnold Schwarzenegger?",
    correct_answer: "T-800",
    incorrect_answers: ["I-950", "T-888", "T-1000"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the name of James Dean's character in the 1955 movie Rebel Without a Cause?",
    correct_answer: "Jim Stark",
    incorrect_answers: ["Ned Stark", "Jim Kane", "Frank Stark"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was Dorothy's surname in 'The Wizard Of Oz'?",
    correct_answer: "Gale",
    incorrect_answers: ["Perkins", "Day", "Parker"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the name of the robot in the 1951 science fiction film classic 'The Day the Earth Stood Still'?",
    correct_answer: "Gort",
    incorrect_answers: ["Robby", "Colossus", "Box"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who played Batman in the 1997 film Batman and Robin?",
    correct_answer: "George Clooney",
    incorrect_answers: ["Michael Keaton", "Val Kilmer", "Christian Bale"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "This movie contains the quote, I love the smell of napalm in the morning!",
    correct_answer: "Apocalypse Now",
    incorrect_answers: ["Platoon", "The Deer Hunter", "Full Metal Jacket"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "This movie contains the quote, Houston, we have a problem.",
    correct_answer: "Apollo 13",
    incorrect_answers: ["The Right Stuff", "Capricorn One", "Marooned"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What was the name of the planet in Aliens?",
    correct_answer: "LV-426",
    incorrect_answers: ["Weyland Yutani Corporation Base", "FR-838", "DI-621"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "What is the name of the first Star Wars film by release order?",
    correct_answer: "A New Hope",
    incorrect_answers: [
      "The Phantom Menace",
      "The Force Awakens",
      "Revenge of the Sith"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was the first James Bond film?",
    correct_answer: "Dr. No",
    incorrect_answers: ["Goldfinger", "From Russia With Love", "Thunderball"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What did the first moving picture depict?",
    correct_answer: "A galloping horse",
    incorrect_answers: [
      "A woman in a dress",
      "A man walking",
      "A crackling fire"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which of these movies did Jeff Bridges not star in?",
    correct_answer: "The Hateful Eight",
    incorrect_answers: ["Tron: Legacy", "The Giver", "True Grit"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Who plays Alice in the Resident Evil movies?",
    correct_answer: "Milla Jovovich",
    incorrect_answers: ["Madison Derpe", "Milla Johnson", "Kim Demp"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In 2012, which movie won every category in the 32nd Golden Raspberry Awards?",
    correct_answer: "Jack and Jill",
    incorrect_answers: [
      "The Girl with the Dragon Tattoo",
      "Thor",
      "The King's Speech"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the name of the villian in the 2015 Russian-American Sci-Fi Movie Hardcore Henry?",
    correct_answer: "Akan",
    incorrect_answers: ["Estelle", "Jimmy", "Henry"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1979 British film Quadrophenia what is the name of the main protagonist?",
    correct_answer: "Jimmy Cooper",
    incorrect_answers: ["Pete Townshend", "Franc Roddam", "Archie Bunker"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
    correct_answer: "Jackie Earle Haley",
    incorrect_answers: ["Tyler Mane", "Derek Mears", "Gunnar Hansen"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "The 1939 movie The Wizard of Oz contained a horse that changed color, what material did they use to achieve this effect?",
    correct_answer: "Gelatin",
    incorrect_answers: ["Dye", "Paint", "CGI Effect"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Which one of these films are shot entirely in one-take?",
    correct_answer: "Russian Ark",
    incorrect_answers: ["Good Will Hunting", "Birdman", "Schindler's List"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which movie of film director Stanley Kubrick is known to be an adaptation of a Stephen King novel?",
    correct_answer: "The Shining",
    incorrect_answers: [
      "2001: A Space Odyssey",
      " Dr. Strangelove ",
      "Eyes Wide Shut"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Who is the main protagonist in, the 1985 film, Back to the Future?",
    correct_answer: "Marty McFly",
    incorrect_answers: ["Emmett Doc Brown", "Biff Tannen", "George McFly"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What was the first movie to ever use a Wilhelm Scream?",
    correct_answer: "Distant Drums",
    incorrect_answers: [
      "Treasure of the Sierra Madre",
      "The Charge at Feather River",
      "Indiana Jones"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In Jurassic World, what is the name of the dinosaur that is a genetic hybrid?",
    correct_answer: "Indominus Rex",
    incorrect_answers: ["Mosasaurus", "Pteranodon", "Tyrannosaurus Rex "]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1999 movie Fight Club, which of these is not a rule of the fight club?",
    correct_answer: "Always wear a shirt",
    incorrect_answers: [
      "You do not talk about FIGHT CLUB",
      "Only two guys to a fight",
      "Fights will go on as long as they have to"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was the first monster to appear alongside Godzilla?",
    correct_answer: "Anguirus",
    incorrect_answers: ["King Kong", "Mothra", "King Ghidora"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
    correct_answer: "Animalympics",
    incorrect_answers: [
      "The Fox and the Hound",
      "The Black Cauldron",
      "The Great Mouse Detecive"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "What city did the monster attack in the film, Cloverfield?",
    correct_answer: "New York, New York",
    incorrect_answers: [
      "Las Vegas, Nevada",
      "Chicago, Illinois",
      "Orlando, Florida"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In the movie Gremlins, after what time of day should you not feed Mogwai?",
    correct_answer: "Midnight",
    incorrect_answers: ["Evening", "Morning", "Afternoon"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In which movie does Robin Williams' character have to disguise themselves into a woman?",
    correct_answer: "Mrs. Doubtfire",
    incorrect_answers: ["Old Dogs", "Jumanji", "Awakenings"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What type of cheese, loved by Wallace and Gromit, had it's sale prices rise after their successful short films?",
    correct_answer: "Wensleydale",
    incorrect_answers: ["Cheddar", "Moon Cheese", "Edam"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "The 2016 Disney animated film 'Moana' is based on which culture?",
    correct_answer: "Polynesian",
    incorrect_answers: ["Native American", "Japanese", "Nordic"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "In the 1995 film Balto, who are Steele's accomplices?",
    correct_answer: "Kaltag, Nikki, and Star",
    incorrect_answers: [
      "Dusty, Kirby, and Ralph",
      "Nuk, Yak, and Sumac",
      "Jenna, Sylvie, and Dixie"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who is the director of the 1991 film Silence of the Lambs?",
    correct_answer: "Jonathan Demme",
    incorrect_answers: ["Stanley Kubrick", "Frank Darabont", "Michael Bay"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In order to cut costs, what were most of the extras of Mad Max (1979) paid with?",
    correct_answer: "Beer",
    incorrect_answers: ["Fast food", "Food stamps", "They weren't paid"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Leonardo Di Caprio won his first Best Actor Oscar for his performance in which film?",
    correct_answer: "The Revenant",
    incorrect_answers: [
      "The Wolf Of Wall Street",
      "Shutter Island",
      "Inception"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "According to Star Wars lore, which planet does Obi-Wan Kenobi come from?",
    correct_answer: "Stewjon",
    incorrect_answers: ["Alderaan", "Tatooine", "Naboo"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In Jurassic World, which company purchases InGen and creates Jurassic World?",
    correct_answer: "Masrani Global Corporation ",
    incorrect_answers: [
      "Biology Synthetics Technologies",
      "International Genetics Incorporated",
      "International Genetic Technologies"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who plays Bruce Wayne in the 2008 movie The Dark Knight?",
    correct_answer: "Christian Bale",
    incorrect_answers: ["Michael Caine", "Ron Dean", "Heath Ledger"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which former Star Trek actor directed Three Men and a Baby (1987)?",
    correct_answer: "Leonard Nimoy",
    incorrect_answers: ["William Shatner", "George Takei", "James Doohan"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was the first feature-length computer-animated movie?",
    correct_answer: "Toy Story",
    incorrect_answers: ["Tron", "Lion king", "101 Dalmatians"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "In Mulan (1998), who is the leader of the Huns?",
    correct_answer: "Shan Yu",
    incorrect_answers: ["Chien-Po", "Li Shang", "Fa Zhou"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "What is Lilo's last name from Lilo and Stitch?",
    correct_answer: "Pelekai",
    incorrect_answers: ["Anoaʻi", "Kealoha", "Kuʻulei"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "In Big Hero 6, what fictional city is the Big Hero 6 from?",
    correct_answer: "San Fransokyo",
    incorrect_answers: ["San Tokyo", "Tokysisco", "Sankyo"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Which director directed the movie Pan's Labyrinth?",
    correct_answer: "Guillermo Del Toro",
    incorrect_answers: [
      "Alfonso Cuaron",
      "Alejandro Gonzalez Inarritu",
      " Alejandro Jodorowsky"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which of the following sports is not part of the triathlon?",
    correct_answer: "Horse-Riding",
    incorrect_answers: ["Cycling", "Swimming", "Running"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "At which bridge does the annual Oxford and Cambridge boat race start?",
    correct_answer: "Putney",
    incorrect_answers: ["Hammersmith", "Vauxhall ", "Battersea"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
    correct_answer: "Nine",
    incorrect_answers: ["Ten", "Seven", "Eight"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
    correct_answer: "Jordan",
    incorrect_answers: ["Benetton", "Ferrari", "Mercedes"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In golf, what name is given to a hole score of two under par?",
    correct_answer: "Eagle",
    incorrect_answers: ["Birdie", "Bogey", "Albatross"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What cricketing term denotes a batsman being dismissed with a score of zero?",
    correct_answer: "Duck",
    incorrect_answers: ["Bye", "Beamer", "Carry"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of these teams isn't a member of the NHL's Original Six era?",
    correct_answer: "Philadelphia Flyers",
    incorrect_answers: [
      "New York Rangers",
      "Toronto Maple Leafs",
      "Boston Bruins"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Who was the British professional wrestler Shirley Crabtree better known as?",
    correct_answer: "Big Daddy",
    incorrect_answers: ["Giant Haystacks", "Kendo Nagasaki", "Masambula"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the nickname of Northampton town's rugby union club?",
    correct_answer: "Saints",
    incorrect_answers: ["Harlequins", "Saracens", "Wasps"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which English football club has the nickname 'The Foxes'?",
    correct_answer: "Leicester City",
    incorrect_answers: [
      "Northampton Town",
      "Bradford City",
      "West Bromwich Albion"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "How many soccer players should be on the field at the same time?",
    correct_answer: "22",
    incorrect_answers: ["20", "24", "26"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In what sport is a shuttlecock used?",
    correct_answer: "Badminton",
    incorrect_answers: ["Table Tennis", "Rugby", "Cricket"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team won the 2015-16 English Premier League?",
    correct_answer: "Leicester City",
    incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "A stimpmeter measures the speed of a ball over what surface?",
    correct_answer: "Golf Putting Green",
    incorrect_answers: [" Football Pitch", "Cricket Outfield", "Pinball Table"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "How many scoring zones are there on a conventional dart board?",
    correct_answer: "82",
    incorrect_answers: ["62", "42", "102"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "In a game of snooker, what colour ball is worth 3 points?",
    correct_answer: "Green",
    incorrect_answers: ["Yellow", "Brown", "Blue"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In baseball, how many fouls are an out?",
    correct_answer: "0",
    incorrect_answers: ["5", "3", "2"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which nation hosted the FIFA World Cup in 2006?",
    correct_answer: "Germany",
    incorrect_answers: ["United Kingdom", "Brazil", "South Africa"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "The F1 season of 1994 is remembered for what tragic event?",
    correct_answer: "Death of Ayrton Senna (San Marino)",
    incorrect_answers: [
      "The Showdown (Australia)",
      "Verstappen on Fire (Germany)",
      "Schumacher's Ban (Britain)"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the highest belt you can get in Taekwondo?",
    correct_answer: "Black",
    incorrect_answers: ["White", "Red", "Green"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "The Rio 2016 Summer Olympics held it's closing ceremony on what date?",
    correct_answer: "August 21",
    incorrect_answers: ["August 23", "August 19", "August 17"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which country is hosting the 2018 FIFA World Cup?",
    correct_answer: "Russia",
    incorrect_answers: ["Germany", "United States", "Saudi Arabia"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Who won the 2015 Formula 1 World Championship?",
    correct_answer: "Lewis Hamilton",
    incorrect_answers: ["Nico Rosberg", "Sebastian Vettel", "Jenson Button"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "Which driver has been the Formula 1 world champion for a record 7 times?",
    correct_answer: "Michael Schumacher",
    incorrect_answers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
    correct_answer: "7 - 1",
    incorrect_answers: ["0 - 1", "3 - 4", "16 - 0"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which team was the 2015-2016 NBA Champions?",
    correct_answer: "Cleveland Cavaliers",
    incorrect_answers: [
      "Golden State Warriors",
      "Toronto Raptors",
      "Oklahoma City Thunders"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "Where was the Games of the XXII Olympiad held?",
    correct_answer: "Moscow",
    incorrect_answers: ["Barcelona", "Tokyo", "Los Angeles"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Josh Mansour is part of what NRL team?",
    correct_answer: "Penrith Panthers",
    incorrect_answers: [
      "Melbourne Storm",
      "Sydney Roosters",
      "North Queensland Cowboys"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which car manufacturer won the 2016 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Ferrari"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which Italian footballer told Neuer where he's putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which male player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "Ma Long (China)",
    incorrect_answers: [
      "Zhang Jike (China)",
      "Jun Mizutani (Japan)",
      "Vladimir Samsonov (Belarus)"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which soccer team won the Copa America 2015 Championship ?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Paraguay"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team won 2014 FIFA World Cup in Brazil?",
    correct_answer: "Germany",
    incorrect_answers: ["Argentina", "Brazil", "Netherlands"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "How many points did LeBron James score in his first NBA game?",
    correct_answer: "25",
    incorrect_answers: ["19", "69", "41"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What national team won the 2016 edition of UEFA European Championship?",
    correct_answer: "Portugal",
    incorrect_answers: ["France", "Germany", "England"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Who won the 2016 Formula 1 World Driver's Championship?",
    correct_answer: "Nico Rosberg",
    incorrect_answers: ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "What team won the 2016 MLS Cup?",
    correct_answer: "Seattle Sounders",
    incorrect_answers: ["Colorado Rapids", "Toronto FC", "Montreal Impact"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the oldest team in the NFL?",
    correct_answer: "Arizona Cardinals",
    incorrect_answers: ["Chicago Bears", "Green Bay Packers", "New York Giants"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the oldest team in Major League Baseball?",
    correct_answer: "Atlanta Braves",
    incorrect_answers: [
      "Chicago Cubs",
      "Cincinnati Reds",
      "St. Louis Cardinals"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?",
    correct_answer: "Jules Bianchi",
    incorrect_answers: [
      "Ayrton Senna",
      "Ronald Ratzenberger",
      "Gilles Villeneuve"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
    correct_answer: "84.39m",
    incorrect_answers: ["100m", "100yd", "109.36yd"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "This Canadian television sportscaster is known for his Hockey Night in Canada role, a commentary show during hockey games.",
    correct_answer: "Don Cherry",
    incorrect_answers: ["Don McKellar", "Don Taylor ", "Donald Sutherland"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team has won the most Stanley Cups in the NHL?",
    correct_answer: "Montreal Canadians",
    incorrect_answers: [
      "Chicago Blackhawks",
      "Toronto Maple Leafs",
      "Detroit Red Wings"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "What is the full name of the footballer Cristiano Ronaldo?",
    correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
    incorrect_answers: [
      "Cristiano Ronaldo los Santos Diego",
      "Cristiano Armando Diego Ronaldo",
      "Cristiano Luis Armando Ronaldo"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "Which year was the third Super Bowl held?",
    correct_answer: "1969",
    incorrect_answers: ["1968", "1971", "1970"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Why was The Green Monster at Fenway Park was originally built?",
    correct_answer: "To prevent viewing games from outside the park.",
    incorrect_answers: [
      "To make getting home runs harder.",
      "To display advertisements.",
      "To provide extra seating."
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
    correct_answer: "American Football",
    incorrect_answers: ["Wrestling", "Archery", "Horse-Racing"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which car manufacturer won the 2017 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Chevrolet"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "When was the first official international game played?",
    correct_answer: "1872",
    incorrect_answers: ["1880", "1863", "1865"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the TV series Person of Interest, who plays the character Harold Finch?",
    correct_answer: "Michael Emerson",
    incorrect_answers: ["Jim Caviezel", "Taraji P. Henson", "Kevin Chapman"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What year did the television company BBC officially launch the channel BBC One?",
    correct_answer: "1936",
    incorrect_answers: ["1948", "1932", "1955"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What was the name of the police officer in the cartoon Top Cat?",
    correct_answer: "Dibble",
    incorrect_answers: ["Barbrady", "Mahoney", "Murphy"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which character was played by Dustin Diamond in the sitcom 'Saved by the Bell'?",
    correct_answer: "Screech",
    incorrect_answers: ["Zack", "Mr. Belding", "A.C. Slater"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Which track by Massive Attack is used for the theme of House? ",
    correct_answer: "Teardrop",
    incorrect_answers: ["Protection", "Angel", "Black Milk"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, 'Top Gear'?",
    correct_answer: "Jessica",
    incorrect_answers: ["Angela", "Erica", "Sandra"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Who sang the theme song for the TV show 'Rawhide'?",
    correct_answer: "Frankie Laine",
    incorrect_answers: ["Guy Mitchell", " Tennessee Ernie Ford", "Slim Whitman"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In what year did The Big Bang Theory debut on CBS?",
    correct_answer: "2007",
    incorrect_answers: ["2008", "2006", "2009"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Who is the star of the AMC series Breaking Bad?",
    correct_answer: "Walter White",
    incorrect_answers: ["Saul Goodman", "Jesse Pinkman", "Skyler White"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "The theme for the popular science fiction series Doctor Who was composed by who?",
    correct_answer: "Ron Grainer",
    incorrect_answers: ["Murray Gold", "Delia Derbyshire", "Peter Howell"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Grant Gustin plays which superhero on the CW show of the same name?",
    correct_answer: "The Flash",
    incorrect_answers: ["The Arrow", "Black Canary", "Daredevil"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of the following Autobot names in Michael Bay's movies was NOT a name for a Transformer in the original 1980's cartoon?",
    correct_answer: "Mudflap",
    incorrect_answers: ["Skids", "Sideswipe", "Ratchet"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which of these Bojack Horseman characters is a human?",
    correct_answer: "Todd Chavez",
    incorrect_answers: [
      "Lennie Turtletaub",
      "Princess Carolyn",
      "Tom Jumbo-Grumbo"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What was the name of Ross' pet monkey on Friends?",
    correct_answer: "Marcel",
    incorrect_answers: ["Jojo", "George", "Champ"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which of these characters in Stranger Things has the power of Telekinesis?",
    correct_answer: "Eleven",
    incorrect_answers: ["Mike", "Lucas", "Karen"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the episode of SpongeBob SquarePants, Survival of the Idiots, Spongebob called Patrick which nickname?",
    correct_answer: "Pinhead",
    incorrect_answers: ["Starfish", "Larry", "Dirty Dan"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In Breaking Bad, the initials W.W. refer to which of the following?",
    correct_answer: "Walter White",
    incorrect_answers: ["William Wolf", "Willy Wonka", "Wally Walrus"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Guy's Grocery Games is hosted by which presenter?",
    correct_answer: "Guy Fieri",
    incorrect_answers: ["Guy Martin", "Guy Ritchie", "Ainsley Harriott"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "How many seasons did Stargate SG-1 have?",
    correct_answer: "10",
    incorrect_answers: ["3", "7", "12"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the Star Trek universe, what color is Vulcan blood?",
    correct_answer: "Green",
    incorrect_answers: ["Blue", "Red", "Purple"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What country is Cory in the House set in?",
    correct_answer: "The United States of America",
    incorrect_answers: ["Canada", "Venezuala", "England"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "On the show Rick and Morty, in episode Total Rickall, who was a parasite?",
    correct_answer: "Pencilvester",
    incorrect_answers: ["Beth Smith", "Summer Smith", "Mr. Poopy Butthole"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Game of Thrones, what continent lies across the Narrow Sea from Westeros?",
    correct_answer: "Essos",
    incorrect_answers: ["Easteros", "Westereast", "Esuntos"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "When did the TV show Rick and Morty first air on Adult Swim?",
    correct_answer: "2013",
    incorrect_answers: ["2014", "2016", "2015"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What was the name of the the first episode of Doctor Who to air in 1963?",
    correct_answer: "An Unearthly Child",
    incorrect_answers: ["The Daleks", "The Aztecs", "The Edge of Destruction"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of these television shows makes everyone look under their chair?",
    correct_answer: "Oprah",
    incorrect_answers: ["Jimmy Fallon", "Saturday Night Live", "Larry Rubert"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who played the sun baby in the original run of Teletubbies?",
    correct_answer: "Jessica Smith",
    incorrect_answers: ["Pui Fan Lee", "Sue Monroe", "Lisa Brockwell"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What is the real name of the famous spanish humorist, El Risitas?",
    correct_answer: "Juan Joya Borga",
    incorrect_answers: [
      "Gabriel Garcia Marquez",
      "Jesus Quintero",
      "Ernesto Guevara"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "How long was Ken Jennings' win streak on Jeopardy?",
    correct_answer: "74",
    incorrect_answers: ["88", "49", "62"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What is the name of the main character in The Flash TV series?",
    correct_answer: "Barry Allen",
    incorrect_answers: ["Oliver Queen", "Bart Allen", "Bruce Wayne"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What is the name of the Flash and Arrow spinoff featuring a team of characters that have appeared on both shows?",
    correct_answer: "Legends of Tomorrow",
    incorrect_answers: [
      "Heroes of Tomorrow",
      "The Justice Society of America",
      "The Justice Society"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What is Meg's full name in Family Guy?",
    correct_answer: "Megatron Griffin",
    incorrect_answers: ["Who-Cares Griffin", "Neil Griffin", "Megan Griffin"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Breaking Bad, Walter White is a high school teacher diagnosed with which form of cancer?",
    correct_answer: "Lung Cancer",
    incorrect_answers: ["Prostate Cancer", "Brain Cancer", "Testicular Cancer"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "How many seasons did the TV show Donkey Kong Country last?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "5"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In Donkey Kong Country, why does Donkey Kong want to know the secret of the crystal coconut?",
    correct_answer: "He's the big kahuna.",
    incorrect_answers: [
      "To find out where all the bananas are.",
      "Because Diddy Kong forced him.",
      "He wants to punish brutes."
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In Star Trek, who was the founder of the Klingon Empire and its philosophy?",
    correct_answer: "Kahless the Unforgettable",
    incorrect_answers: [
      "Lady Lukara of the Great Hall",
      "Molor the Unforgiving",
      "Dahar Master Kor"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Which race enjoys a glass of warm baghol in Star Trek?",
    correct_answer: "Klingon",
    incorrect_answers: ["Vulcan", "Human", "Botha"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "In Star Trek, what is the Klingon delicacy of gagh made from?",
    correct_answer: "Serpent worms",
    incorrect_answers: ["Earthworms", "Spaghetti noodles", "Klingworms"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show Stargate Atlantis have?",
    correct_answer: "5",
    incorrect_answers: ["10", "2", "7"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show Stargate Universe have?",
    correct_answer: "2",
    incorrect_answers: ["10", "5", "3"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of the following was not an actor/actress on the American television show Saturday Night Live in Season 42?",
    correct_answer: "Tina Fey",
    incorrect_answers: ["Mikey Day", "Kate McKinnon", "Sasheer Zamata"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "What was the name of the inflatable duck sacrified to the crowd at the end of Episode 34 of the 18th season of Big Brother?",
    correct_answer: "Pablo",
    incorrect_answers: ["Esteban", "Carlos", "Duckster"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Star Trek: Voyager, which episode did Voyager establish real-time communication with Starfleet Headquarters?",
    correct_answer: "Pathfinder",
    incorrect_answers: [
      "Message In A Bottle",
      "Someone To Watch Over Me",
      "Counterpoint"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the TV show Mad Men, what was Donald Draper's birthname?",
    correct_answer: "Richard Dick Whitman",
    incorrect_answers: [
      "Donald Draper",
      "John Ashbury",
      "Michael Mikey Wilhelm"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In The Simpsons, what is the real name of Comic Book Guy?",
    correct_answer: "Jeff Albertson",
    incorrect_answers: ["Comic Book Guy", "Edward Stone", "Jack Richardson"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What NBC sitcom once saw two of its characters try to pitch NBC on a sitcom about nothing?",
    correct_answer: "Seinfeld",
    incorrect_answers: ["Frasier", "Becker", "Friends"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which of the following won the first season of American Idol in 2002?",
    correct_answer: "Kelly Clarkson",
    incorrect_answers: ["Justin Guarini", "Ruben Studdard", "Chris Daughtry"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "On the NBC show Community what was Star Burns' real name?",
    correct_answer: "Alex",
    incorrect_answers: ["Todd", "Neal", "Grimus"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who was the winner of Big Brother Season 10?",
    correct_answer: "Dan Gheesling",
    incorrect_answers: ["Bryce Kranyik", "Ryan Sutfin", "Chris Mundorf"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "The HBO series Game of Thrones is based on which series of books?",
    correct_answer: "A Song of Ice and Fire",
    incorrect_answers: ["The Wheel of Time", "Harry Potter", "The Notebook"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What was the character Kirby originally going to be named?",
    correct_answer: "Popopo",
    incorrect_answers: ["Dedede", "Waddle Dee", "Prince Puff"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Who of these people was the creator and director of the Katamari Damacy series?",
    correct_answer: "Keita Takahashi",
    incorrect_answers: ["Hideki Kamiya", "Shu Takumi", "Shinji Mikami"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In the Super Mario Bros. Series, what is Yoshi's scientific name?",
    correct_answer: "T. Yoshisaur Munchakoopas",
    incorrect_answers: ["Yoshi", "T. Yoshisotop Munchakoopas", "Yossy"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In which country's version of Half-Life are the HECU Marines replaced with robots?",
    correct_answer: "Germany",
    incorrect_answers: ["Japan", "China", "France"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In Kingdom Hearts, how many members does Organization XIII have in total?",
    correct_answer: "14",
    incorrect_answers: ["10", "13", "12"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "What was the world's first video game?",
    correct_answer: "Tennis for Two",
    incorrect_answers: ["Spacewar!", "Pong", "Space Travel"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "In Undertale, how many main endings are there?",
    correct_answer: "3",
    incorrect_answers: ["2", "5", "13"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "The original mascot of the popular Nintendo game, Splatoon was going to be...",
    correct_answer: "Mario",
    incorrect_answers: ["Inklings", "Octolings", "Zelda"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Who is the main character in The Stanley Parable?",
    correct_answer: "Stanley",
    incorrect_answers: ["The Adventure Line", "The Narrator", "The Boss"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Sonic the Hedgehog 2 for the Sega Genesis, what do you input in the sound test screen to access the secret level select?",
    correct_answer: "The Lead Programmer's birthday",
    incorrect_answers: [
      "The first release date of Sonic the Hedgehog",
      "The date Sonic Team was founded",
      "The first release date of Sonic the Hedgehog 2"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What is the name of the final boss in Turok: Dinosaur Hunter?",
    correct_answer: "The Campaigner",
    incorrect_answers: ["The Primagen", "Oblivion", "Lord Tyrannus"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In what Half-Life expansion can you find Gordon's picture in an Employee of the Month picture frame?",
    correct_answer: "Half-Life: Opposing Force",
    incorrect_answers: [
      "Half-Life: Blue Shift",
      "Half-Life: Decay",
      "They Hunger"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which of these characters is the mascot of the video game company SEGA?",
    correct_answer: "Sonic the Hedgehog",
    incorrect_answers: ["Dynamite Headdy", "Alex Kidd", "Opa-Opa"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In what year were achivements added to Steam?",
    correct_answer: "2007",
    incorrect_answers: ["2008", "2009", "2006"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What was the original name of Crash Bandicoot?",
    correct_answer: "Willie Wombat",
    incorrect_answers: ["Coco Bandicoot", "Marvelous Mole", "Wally Wombat"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What happened to Half-Life 2 prior to its release, which resulted in Valve starting over the development of the game?",
    correct_answer: "The source code got leaked",
    incorrect_answers: [
      "They weren't satisfied with the result",
      "The story was not good enough",
      "Way too many bugs to be fixed"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "The Touhou Project series of games is often associated with which genre?",
    correct_answer: "Shoot 'em up",
    incorrect_answers: ["Strategy", "FPS", "Casual"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In the Half-Life series, Gordon Freeman's signature weapon is a:",
    correct_answer: "Crowbar",
    incorrect_answers: ["Sledgehammer", "Fiber Wire", "Katana"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Who is the leader of Team Mystic in Pokemon Go?",
    correct_answer: "Blanche",
    incorrect_answers: ["Candela", "Spark", "Willow"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In the game Battleblock Theater, what was the name of the voice actor who voiced the narrator?",
    correct_answer: "Will Stamper",
    incorrect_answers: ["Steve Blum", "Richard Epcar", "Yuri Lowenthal"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "Which car did not appear in the 2002 Lego Game: Drome Racers?",
    correct_answer: "Wasp",
    incorrect_answers: ["Raptor", "Hornet", "Behemoth"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "Which Kingdom Hearts game featured the cast of The World Ends With You?",
    correct_answer: "Dream Drop Distance",
    incorrect_answers: ["Birth By Sleep", "365/2 Days", "Re:Chain of Memories"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "The voice actor for which Portal 2 character was not a TV or film actor prior to the game?",
    correct_answer: "GLaDOS",
    incorrect_answers: ["Cave Johnson", "Wheatley", "Atlas / P-Body"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the game Persona 4, what is the canonical name of the protagonist?",
    correct_answer: "Yu Narukami",
    incorrect_answers: ["Chino Mashido", "Tunki Sunada", "Masaki Narinaka"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which of the following is not a real Pokemon?",
    correct_answer: "Luminid",
    incorrect_answers: ["Dragalge", "Mandibuzz", "Araquanid"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What level do you have to be to get a service medal on CS:GO?",
    correct_answer: "40",
    incorrect_answers: ["50", "30", "20"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "When was Left 4 Dead 2 released?",
    correct_answer: "November 17, 2009",
    incorrect_answers: ["May 3, 2008", "November 30, 2009", "June 30, 2010"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "How many voice channels does the Super Nintendo Entertainment System support?",
    correct_answer: "8",
    incorrect_answers: ["6", "10", "12"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which of the following names is the Mega Man Franchise known as in Japan?",
    correct_answer: "Rockman",
    incorrect_answers: ["Paperman", "Scissorsman", "Mega Man"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Valve Corporation is an American video game developer located in which city?",
    correct_answer: "Bellevue, Washington",
    incorrect_answers: [
      "Austin, Texas",
      "Seattle, Washington",
      "San Francisco, California"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Minecraft was released from beta in 2011 during a convention held in which city?",
    correct_answer: "Las Vegas",
    incorrect_answers: ["Paris", "Bellevue", "London"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In The Binding of Isaac, what is the name of the final boss that you fight in The Void?",
    correct_answer: "Delirium",
    incorrect_answers: ["Mega Satan", "Hush", "The Lamb"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Who is the main character in most of the games of the YS series?",
    correct_answer: "Adol Christin ",
    incorrect_answers: [
      "Character doesn't have a name",
      "Estelle Bright",
      "Roger Wilco"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which game is NOT part of the Science Adventure series by 5pb. and Nitroplus?",
    correct_answer: "Occultic; Nine",
    incorrect_answers: ["Steins; Gate", "Robotics; Notes", "Chaos; Child"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "Which of the following games in the The Legend of Zelda franchise was released in North America before Japan?",
    correct_answer: "The Legend of Zelda: Twilight Princess",
    incorrect_answers: [
      "Zelda II: The Adventure of Link",
      "The Legend of Zelda: Four Swords Adventures",
      "The Legend of Zelda: Majora's Mask"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "In Earthbound, how does one enter Master Belch's factory?",
    correct_answer: "Wait 3 Minutes",
    incorrect_answers: [
      "Enter the password Fly Honey",
      "Enter the password Master Belch Rules",
      "Enter the password Mr Saturn Drools"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In the Halo series, what is the name of the race of aliens humans refer to as Grunts?",
    correct_answer: "Unggoy",
    incorrect_answers: ["Huragok", "Sangheili", "Yanme'e"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "When was the video game P.A.M.E.L.A. released on Steam?",
    correct_answer: "March 9, 2017",
    incorrect_answers: [
      "January 7, 2007",
      "October 23, 1997",
      "February 16, 2015"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the name of the creature that the main character befriends in The Last Guardian?",
    correct_answer: "Trico",
    incorrect_answers: ["Nico", "Wolf", "Andazi"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the full name of the protagonist from the indie adventure game Night in the Woods?",
    correct_answer: "Margaret Borowski",
    incorrect_answers: ["Marlena Woborski", "Milena Catharina", "Katia Managan"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Call Of Duty: Zombies, which map's opening cutscene shows Richtofen killing another version of himself?",
    correct_answer: "The Giant",
    incorrect_answers: ["Shadows Of Evil", "Der Eisendrache", "Moon"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "What is the name of the game developer who created Call Of Duty: Zombies?",
    correct_answer: "Treyarch",
    incorrect_answers: ["Sledgehammer Games", "Infinity Ward", "Naughty Dog"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Call of Duty: Black Ops III Zombies, what does completing all the main easter eggs reward you with?",
    correct_answer: "1,000,000 XP",
    incorrect_answers: [
      "Juggernog at the start of each game",
      "50 Liquid Diviniums",
      "All three options."
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What animal is featured in Bloons TD Battles?",
    correct_answer: "Monkeys",
    incorrect_answers: ["Alligators", "Pigeons", "Lizards"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Who is the main character in the video game Just Cause 3?",
    correct_answer: "Rico Rodriguez",
    incorrect_answers: ["Tom Sheldon", "Marcus Holloway", "Mario Frigo"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Team Fortress 2, what is the fastest taunt kill that can be pulled off?",
    correct_answer: "Showdown",
    incorrect_answers: ["Hadouken", "Organ Grinder", "Skewer"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the name of the protagonist's first Persona in Persona 5?",
    correct_answer: "Arsene",
    incorrect_answers: ["Mara", "Izanagi", "Sandaphlon"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the Blademaster in the middle lane of the Dragon's Stand zone?",
    correct_answer: "Diarmid",
    incorrect_answers: ["Adryn", "Hareth", "Gerent"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary fiery dragon-headed torch?",
    correct_answer: "Rodgort",
    incorrect_answers: ["The Predator", "Incinerator", "Flames of War"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What are Sans and Papyrus named after in Undertale?",
    correct_answer: "Fonts",
    incorrect_answers: ["Plants", "Companies", "Ancient writing paper"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "What is not a wind instrument?",
    correct_answer: "Viola",
    incorrect_answers: ["Oboe", "Trombone", "Duduk"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the artist of the recent new album the Uncanny Valley?",
    correct_answer: "Perturbator",
    incorrect_answers: ["Carpenter Brut", "GOST", "Dan Terminus "]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "In the Rossini opera, what was the name of 'The Barber of Seville'?",
    correct_answer: "Figaro",
    incorrect_answers: ["Angelo", "Fernando", "Dave"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which French duo had UK hits in 1998 with the songs 'Sexy Boy', 'Kelly Watch The Stars' & 'All I Need'?",
    correct_answer: "Air",
    incorrect_answers: ["Fire", "Earth", "Water"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "The song Twin Size Mattress was written by which band?",
    correct_answer: "The Front Bottoms",
    incorrect_answers: [
      "Twenty One Pilots",
      "The Wonder Years",
      "The Smith Street Band"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Who is the primary lyricist for Canadian progressive rock band Rush?",
    correct_answer: "Neil Peart",
    incorrect_answers: ["Geddy Lee", "Alex Lifeson", "John Rutsey"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who wrote the musical composition, Rhapsody In Blue?",
    correct_answer: "George Gershwin",
    incorrect_answers: ["Irving Berlin", "Duke Ellington", "Johnny Mandel"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who had a 1981 hit with the song Japanese Boy?",
    correct_answer: "Aneka",
    incorrect_answers: ["Toyah", "Sandra", "Madonna"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Irish musician Hozier released a music track in 2013 titled, Take Me to ______",
    correct_answer: "Church",
    incorrect_answers: ["Mosque", "Synagogue", "Temple"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which member of the English band The xx released their solo album In Colour in 2015?",
    correct_answer: "Jamie xx",
    incorrect_answers: ["Romy Madley Croft", "Oliver Sim", "Baria Qureshi"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Which M83 album is the song Midnight City featured in?",
    correct_answer: "Hurry Up, We're Dreaming",
    incorrect_answers: ["Saturdays = Youth", "Before the Dawn Heals Us", "Junk"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What genre of EDM is the Dutch DJ, musician, and remixer Armin van Buuren most well-known for?",
    correct_answer: "Trance",
    incorrect_answers: ["House", "Drum and Bass", "Dubstep"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which of these songs by Skrillex features Fatman Scoop as a side artist?",
    correct_answer: "Recess",
    incorrect_answers: [
      "All is Fair in Love and Brostep",
      "Rock N Roll (Will Take You to the Mountain)",
      "Scary Monsters and Nice Sprites"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who was not in the band The Smiths?",
    correct_answer: "Martin Chambers",
    incorrect_answers: ["Morrissey", "Andy Rourke", "Mike Joyce"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "How many members are there in the idol group &micro;'s?",
    correct_answer: "9",
    incorrect_answers: ["48", "6", "3"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these is NOT the name of an album released by American rapper Viper?",
    correct_answer: "The Life of Pablo",
    incorrect_answers: [
      "Kill Urself My Man",
      "You'll Cowards Don't Even Smoke Crack",
      "Yo Wife Handcuffin' Me"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which artist released the 2012 single Harlem Shake, which was used in numerous YouTube videos in 2013?",
    correct_answer: "Baauer",
    incorrect_answers: ["RL Grime", "NGHTMRE", "Flosstradamus"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?",
    correct_answer: "Entranas",
    incorrect_answers: ["cow", "Sheep", "Xen"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the lead singer of Silverchair?",
    correct_answer: "Daniel Johns",
    incorrect_answers: ["Ben Gillies", "Chris Joannou", ""]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who won the 1989 Drum Corps International championships?",
    correct_answer: "Santa Clara Vanguard",
    incorrect_answers: ["Blue Devils", "The Academy", "The Bluecoats"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which brass instrument has the lowest pitch in an orchestra?",
    correct_answer: "Tuba",
    incorrect_answers: ["Trumpet", "Saxophone", "Trombone"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which of these is NOT a song featured on the Lockjaw EP released in 2013 by Flume & Chet Faker?",
    correct_answer: "Left Alone",
    incorrect_answers: [
      "What About Us",
      "This Song Is Not About A Girl",
      "Drop The Game"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Brian May was the guitarist for which band?",
    correct_answer: "Queen",
    incorrect_answers: ["Pink Floyd", "Rolling Stones", "The Doors"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which Death Grips album is the only one to feature a band member?",
    correct_answer: "No Love Deep Web",
    incorrect_answers: [
      "Bottomless Pit",
      "The Money Store",
      "The Powers That B"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Johnny Cash did a cover of this song written by lead singer of Nine Inch Nails, Trent Reznor.",
    correct_answer: "Hurt",
    incorrect_answers: ["Closer", "A Warm Place", "Big Man with a Gun"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What is the name of French electronic music producer Madeon's 2015 debut studio album?",
    correct_answer: "Adventure",
    incorrect_answers: ["The City", "Icarus", "Pop Culture"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "The song Feel Good Inc. by British band Gorillaz features which hip hop group?",
    correct_answer: "De La Soul",
    incorrect_answers: ["Public Enemy", "OutKast", "Cypress Hill"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which band released songs suchs as Rio, Girls on Film, and The Reflex?",
    correct_answer: "Duran Duran",
    incorrect_answers: ["The Cure", "New Order", "Depeche Mode"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which one of these songs did the group Men At Work NOT make?",
    correct_answer: "Safety Dance",
    incorrect_answers: ["Down Under", "Who Can It Be Now?", "It's a Mistake"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which year was the album Floral Shoppe by Macintosh Plus released?",
    correct_answer: "2011",
    incorrect_answers: ["2014", "2013", "2012"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which famous 90's rap album is commonly referred to as The Bible of Hip Hop?",
    correct_answer: "Illmatic",
    incorrect_answers: [
      "The Low End Theory",
      "The Chronic",
      "Enter The Wu-Tang (36 Chambers)"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "This album, now considered to be one of the greatest of all time, was a commercial failure when it was released.",
    correct_answer: "The Velvet Underground and Nico",
    incorrect_answers: ["Abbey Road", "Led Zeppelin IV", "Pet Sounds"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What is the name of the main character from the music video of Shelter by Porter Robinson and A-1 Studios?",
    correct_answer: "Rin",
    incorrect_answers: ["Rem", "Ren", "Ram"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which country does the electronic music duo The Knife originate from?",
    correct_answer: "Sweden",
    incorrect_answers: ["Finland", "Denmark", "Norway"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which song in Drake's Views features Future?",
    correct_answer: "Grammys",
    incorrect_answers: ["Too Good", "Faithful", "Pop Style"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Which album was released by Kanye West in 2013?",
    correct_answer: "Yeezus",
    incorrect_answers: [
      "My Beautiful Dark Twisted Fantasy",
      "The Life of Pablo",
      "Watch the Throne"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the lead singer of The Lumineers?",
    correct_answer: "Wesley Schultz",
    incorrect_answers: ["Jeremiah Fraites", "Jay Van Dyke", "Neyla Pekarek"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which of the following bands is Tom DeLonge not a part of?",
    correct_answer: "+44",
    incorrect_answers: ["Box Car Racer", "Blink-182", "Angels & Airwaves"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which company did the animation for Peter Gabriel's Video Sledgehammer (1986)?",
    correct_answer: "Aardman Animations",
    incorrect_answers: [
      "HIT Entertainment",
      "Illumination Entertainment",
      "VIZ Media"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "What is the first Studio Album to be released on the Internet with a Pay-What-You-Want price?",
    correct_answer: "In Rainbows",
    incorrect_answers: [
      "The Help Album",
      "Skrillex and Diplo Present Jack &Uuml;",
      "Blackstar"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Ellie Goulding's earliest album was named?",
    correct_answer: "Lights",
    incorrect_answers: ["Halcyon", "Bright Lights", "Halcyon Days"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "How many copies have Metallica album Metallica (A.K.A The Black Album) sold worldwide (in Millions of Copies)?",
    correct_answer: "20.5",
    incorrect_answers: ["19.5", "22.5", "25.5"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which classical composer wrote the Moonlight Sonata?",
    correct_answer: "Ludvig Van Beethoven",
    incorrect_answers: [
      "Chief Keef",
      "Wolfgang Amadeus Mozart",
      "Johannes Brahms"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who is a pioneer of Minimal Music in 1960s?",
    correct_answer: "Steve Reich",
    incorrect_answers: ["Wolfgang Amadeus Mozart", "Brian Eno", "Sigur Ros"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which member of The Beatles narrated episodes of Thomas the Tank Engine?",
    correct_answer: "Ringo Starr",
    incorrect_answers: ["George Harrison", "John Lennon", "Paul McCartney"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which rock band released the album The Bends in March 1995?",
    correct_answer: "Radiohead",
    incorrect_answers: ["Nirvana", "Coldplay", "U2"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which former boy-band star released hit solo single Angels in 1997?",
    correct_answer: "Robbie Williams",
    incorrect_answers: ["Justin Timberlake", "Harry Styles", "Gary Barlow"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "What is the stage name of New Zealand singer Phillipa Pip Brown?",
    correct_answer: "Ladyhawke",
    incorrect_answers: ["Lorde", "Kesha", "Anika Moa"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these is not a single by Pink Floyd guitarist, David Gilmour?",
    correct_answer: "Sunset Strip",
    incorrect_answers: ["Rattle That Lock", "Blue Light", "Arnold Layne"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Electronic artists Boys Noize and Skrillex have collaborated and released tracks under what name?",
    correct_answer: "Dog Blood",
    incorrect_answers: ["Jack &Uuml;", "What So Not", "Noisia"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which Apollo mission was the first one to land on the Moon?",
    correct_answer: "Apollo 11",
    incorrect_answers: ["Apollo 10", "Apollo 9", "Apollo 13"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the colour of unoxidized blood?",
    correct_answer: "Red",
    incorrect_answers: ["Blue", "Purple", "Green"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many objects are equivalent to one mole?",
    correct_answer: "6.022 x 10^23",
    incorrect_answers: ["6.002 x 10^22", "6.022 x 10^22", "6.002 x 10^23"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which is the longest bone in the human body? ",
    correct_answer: "Femur",
    incorrect_answers: ["Scapula", "Fibula", "Ulna"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the powerhouse of the Eukaryotic animal cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Nucleus", "Chloroplast", "Endoplasmic Reticulum"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "This element, when overcome with extreme heat and pressure, creates diamonds.",
    correct_answer: "Carbon",
    incorrect_answers: ["Nitrogen", "Oxygen", "Hydrogen"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "The 'Islets of Langerhans' is found in which human organ?",
    correct_answer: "Pancreas",
    incorrect_answers: ["Kidney", "Liver", "Brain"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many planets are in our Solar System?",
    correct_answer: "Eight",
    incorrect_answers: ["Nine", "Seven", "Ten"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the hottest planet in the Solar System?",
    correct_answer: "Venus",
    incorrect_answers: ["Mars", "Mercury", "Jupiter"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the first element on the periodic table?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Oxygen", "Lithium"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What mineral has the lowest number on the Mohs scale?",
    correct_answer: "Talc",
    incorrect_answers: ["Quartz", "Diamond", "Gypsum"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "How many degrees Fahrenheit is 100 degrees Celsius? ",
    correct_answer: "212",
    incorrect_answers: ["326", "100", "451"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which chemical element has the lowest boiling point?",
    correct_answer: "Helium",
    incorrect_answers: ["Hydrogen", "Neon", "Nitrogen"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the standard SI unit for temperature?",
    correct_answer: "Kelvin",
    incorrect_answers: ["Fahrenheit", "Celsius", "Rankine"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which element has the atomic number of 7?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Hydrogen", "Neon"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "All the following metal elements are liquids at or near room temperature EXCEPT:",
    correct_answer: "Beryllium",
    incorrect_answers: ["Gallium", "Caesium", "Mercury"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.",
    correct_answer: "low, all",
    incorrect_answers: ["low, some", "high, all", "high, some"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the scientific name of the knee cap?",
    correct_answer: "Patella",
    incorrect_answers: ["Femur", "Foramen Magnum", "Scapula"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "If you planted the seeds of Quercus robur what would grow?",
    correct_answer: "Trees",
    incorrect_answers: ["Flowers", "Vegtables", "Grains"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Who developed the first successful polio vaccine in the 1950s?",
    correct_answer: "Jonas Salk",
    incorrect_answers: ["John F. Enders", "Thomas Weller", "Frederick Robbins"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
    correct_answer: "Sputnik 1",
    incorrect_answers: ["Soyuz 7K-OK", "Zenit-2", "Voskhod 3KV"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the chemical formula for ammonia?",
    correct_answer: "NH3",
    incorrect_answers: ["CO2", "NO3", "CH4"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which is not a type of neuron?",
    correct_answer: "Perceptual Neuron",
    incorrect_answers: ["Sensory Neuron", "Motor Neuron", "Interneuron"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Folic acid is the synthetic form of which vitamin?",
    correct_answer: "Vitamin B",
    incorrect_answers: ["Vitamin A", "Vitamin C", "Vitamin D"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the atomic number of the element Strontium?",
    correct_answer: "38",
    incorrect_answers: ["73", "47", "11"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which part of the body does glaucoma affect?",
    correct_answer: "Eyes",
    incorrect_answers: ["Throat", "Stomach", "Blood"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which one of these is scientific term for Brain Freeze?",
    correct_answer: "Sphenopalatine Ganglioneuralgia",
    incorrect_answers: [
      "Hyacinthoides Italica",
      "Amaranthus Retroflexus",
      "Amblyomma Americanum"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "The Big Bang Theory was first theorized by a priest of what religious ideology?",
    correct_answer: "Catholic",
    incorrect_answers: ["Christian", "Jewish", "Islamic"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Which one of these scientists conducted the Gold Foil Experiment which concluded that atoms are mostly made of empty space?",
    correct_answer: "Ernest Rutherford",
    incorrect_answers: [
      "Joseph John Thomson",
      "Archimedes",
      "Niels Henrik David Bohr"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "After which Danish city is the 72th element on the periodic table named?",
    correct_answer: "Copenhagen",
    incorrect_answers: ["Odense", "Herning", "Skagen"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What does the yellow diamond on the NFPA 704 fire diamond represent?",
    correct_answer: "Reactivity",
    incorrect_answers: ["Health", "Flammability", "Radioactivity"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "The element involved in making human blood red is which of the following?",
    correct_answer: "Iron",
    incorrect_answers: ["Copper", "Iridium", "Cobalt"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Human cells typically have how many copies of each gene?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "3"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Myopia is the scientific term for which condition?",
    correct_answer: "Shortsightedness",
    incorrect_answers: ["Farsightedness", "Double Vision", "Clouded Vision"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the molecular formula of Ozone?",
    correct_answer: "O3",
    incorrect_answers: ["C6H2O6", "N2O", "SO4"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which element has the highest melting point?",
    correct_answer: "Carbon",
    incorrect_answers: ["Tungsten", "Platinum", "Osmium"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which of these is a stop codon in DNA?",
    correct_answer: "TAA",
    incorrect_answers: ["ACT", "ACA", "GTA"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Which of the following plastic is commonly used for window frames, gutters and drain pipes?",
    correct_answer: "Polyvinylchloride (PVC) ",
    incorrect_answers: [
      "Polyethylene (PE)",
      "Polypropylene (PP)",
      "Polystyrene (PS)"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
    correct_answer: "Interphase",
    incorrect_answers: ["Prophase", "Stasis", "Telophase"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many chromosomes are in your body cells?",
    correct_answer: "23",
    incorrect_answers: ["21", "22", "24"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Who made the discovery of X-rays?",
    correct_answer: "Wilhelm Conrad R&ouml;ntgen",
    incorrect_answers: ["Thomas Alva Edison", "James Watt", "Albert Einstein"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What nucleotide pairs with guanine?",
    correct_answer: "Cytosine",
    incorrect_answers: ["Thymine", "Adenine", "Uracil"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What does LASER stand for?",
    correct_answer:
      "Light amplifiaction by stimulated eminission of radioation",
    incorrect_answers: [
      "Lite analysing by stereo ecorazer",
      "Light ampiflier by standby energy of radio",
      "Life antimatter by standing entry of range"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the unit of electrical capacitance?",
    correct_answer: "Farad",
    incorrect_answers: ["Gauss", "Henry", "Watt"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Muscle fiber is constructed of bundles small long organelles called what?",
    correct_answer: "Myofibrils",
    incorrect_answers: ["Epimysium", "Myofiaments", "Myocardium"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "What animal takes part in Schrodinger's most famous thought experiment?",
    correct_answer: "Cat",
    incorrect_answers: ["Dog", "Bat", "Butterfly"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "The Sun consists of mostly which two elements?",
    correct_answer: "Hydrogen & Helium",
    incorrect_answers: [
      "Hydrogen & Nitrogen",
      "Carbon & Nitrogen",
      "Carbon & Helium"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "What is the scientific name for the extinct hominin known as Lucy?",
    correct_answer: "Australopithecus Afarensis",
    incorrect_answers: [
      "Australopithecus Africanus",
      "Australopithecus Architeuthis",
      "Australopithecus Antaris"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "The Western Lowland Gorilla is scientifically know as?",
    correct_answer: "Gorilla Gorilla Gorilla",
    incorrect_answers: [
      "Gorilla Gorilla Diehli",
      "Gorilla Beringei Graueri",
      "Gorilla Beringei Beringei"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Electronic music producer Kygo's popularity skyrocketed after a certain remix. Which song did he remix?",
    correct_answer: "Ed Sheeran - I See Fire",
    incorrect_answers: [
      "Marvin Gaye - Sexual Healing",
      "Coldplay - Midnight",
      "a-ha - Take On Me"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "This field is sometimes known as The Dismal Science.&rdquo;",
    correct_answer: "Economics",
    incorrect_answers: ["Philosophy", "Politics", "Physics"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What does a milliner make and sell?",
    correct_answer: "Hats",
    incorrect_answers: ["Shoes", "Belts", "Shirts"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which river flows through the Scottish city of Glasgow?",
    correct_answer: "Clyde",
    incorrect_answers: ["Tay", "Dee", "Tweed"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "When was the Declaration of Independence approved by the Second Continental Congress?",
    correct_answer: "July 2, 1776",
    incorrect_answers: ["May 4, 1776", "June 4, 1776", "July 4, 1776"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    correct_answer: "Demolition",
    incorrect_answers: [
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What name represents the letter M in the NATO phonetic alphabet?",
    correct_answer: "Mike",
    incorrect_answers: ["Matthew", "Mark", "Max"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    correct_answer: "Cabbage Patch Kids",
    incorrect_answers: ["Transformers", "Care Bears", "Rubik's Cube"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Rolex is a company that specializes in what type of product?",
    correct_answer: "Watches",
    incorrect_answers: ["Cars", "Computers", "Sports equipment"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "A doctor with a PhD is a doctor of what?",
    correct_answer: "Philosophy",
    incorrect_answers: ["Psychology", "Phrenology", "Physical Therapy"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Area 51 is located in which US state?",
    correct_answer: "Nevada",
    incorrect_answers: ["Arizona", "New Mexico", "Utah"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which sign of the zodiac is represented by the Crab?",
    correct_answer: "Cancer",
    incorrect_answers: ["Libra", "Virgo", "Sagittarius"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What alcoholic drink is made from molasses?",
    correct_answer: "Rum",
    incorrect_answers: ["Gin", "Vodka", "Whisky"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which American president appears on a one dollar bill?",
    correct_answer: "George Washington",
    incorrect_answers: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is dabbing?",
    correct_answer: "A dance",
    incorrect_answers: ["A medical procedure", "A sport", "A language"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
    correct_answer: "Gorilla",
    incorrect_answers: ["Tiger", "Panda", "Crocodile"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What year was Queen Elizabeth II born?",
    correct_answer: "1926",
    incorrect_answers: ["1923", "1929", "1930"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which of these companies does NOT manufacture automobiles?",
    correct_answer: "Ducati",
    incorrect_answers: ["Nissan", "GMC", "Fiat"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Sciophobia is the fear of what?",
    correct_answer: "Shadows",
    incorrect_answers: ["Eating", "Bright lights", "Transportation"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
    correct_answer: "OCBC",
    incorrect_answers: ["HSBC", "Standard Chartered", "Bank of China"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is on display in the Madame Tussaud's museum in London?",
    correct_answer: "Wax sculptures",
    incorrect_answers: [
      "Designer clothing",
      "Unreleased film reels",
      "Vintage cars"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which of these colours is NOT featured in the logo for Google?",
    correct_answer: "Pink",
    incorrect_answers: ["Yellow", "Blue", "Green"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What is the romanized Chinese word for airplane?",
    correct_answer: "Feiji",
    incorrect_answers: ["Qiche", "Zongxian", "Huojian"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What is the romanized Arabic word for moon?",
    correct_answer: "Qamar",
    incorrect_answers: ["Najma", "Kawkab", "Shams"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the Italian word for tomato?",
    correct_answer: "Pomodoro",
    incorrect_answers: ["Aglio", "Cipolla", "Peperoncino"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the romanized Russian word for winter?",
    correct_answer: "Zima",
    incorrect_answers: ["Leto", "Vesna", "Osen'"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Which musician has collaborated with American producer Porter Robinson and released the 2016 song Shelter?",
    correct_answer: "Madeon",
    incorrect_answers: ["Mat Zo", "deadmau5", "Zedd"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "The term scientist was coined in which year?",
    correct_answer: "1833",
    incorrect_answers: ["1933", "1942", "1796"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the last letter of the Greek alphabet?",
    correct_answer: "Omega",
    incorrect_answers: ["Mu", "Epsilon", "Kappa"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "How long did it take the motorized window washers of the original World Trade Center to clean the entire exterior of the building?",
    correct_answer: "1 Month",
    incorrect_answers: ["3 Weeks", "1 Week", "2 Months"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "When was Nintendo founded?",
    correct_answer: "September 23rd, 1889",
    incorrect_answers: [
      "October 19th, 1891",
      "March 4th, 1887",
      "December 27th, 1894"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Which American-owned brewery led the country in sales by volume in 2015?",
    correct_answer: "D. G. Yuengling and Son, Inc",
    incorrect_answers: ["Anheuser Busch", "Boston Beer Company", "Miller Coors"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Amsterdam Centraal station is twinned with what station?",
    correct_answer: "London Liverpool Street",
    incorrect_answers: [
      "Frankfurt (Main) Hauptbahnhof",
      "Paris Gare du Nord",
      "Brussels Midi"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which of the following carbonated soft drinks were introduced first?",
    correct_answer: "Dr. Pepper",
    incorrect_answers: ["Coca-Cola", "Sprite", "Mountain Dew"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "The New York Times slogan is, All the News That's Fit to",
    correct_answer: "Print",
    incorrect_answers: ["Digest", "Look", "Read"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What do the letters of the fast food chain KFC stand for?",
    correct_answer: "Kentucky Fried Chicken",
    incorrect_answers: [
      "Kentucky Fresh Cheese",
      "Kibbled Freaky Cow",
      "Kiwi Food Cut"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "When was Hubba Bubba first introduced?",
    correct_answer: "1979",
    incorrect_answers: ["1984", "1972", "1980"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "How tall is the Burj Khalifa?",
    correct_answer: "2,722 ft",
    incorrect_answers: ["2,717 ft", "2,546 ft", "3,024 ft"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What year was the RoboSapien toy robot released?",
    correct_answer: "2004",
    incorrect_answers: ["2000", "2001", "2006"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "According to Fair Works Australia, how long do you have to work to get Long Service Leave?",
    correct_answer: "7 years",
    incorrect_answers: ["2 years", "8 years", "6 months"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?",
    correct_answer: "28%",
    incorrect_answers: ["13%", "20%", "7%"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Toshiba", "Asus", "Dell"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which slogan did the fast food company, McDonald's, use before their I'm Lovin' It slogan?",
    correct_answer: "We Love to See You Smile",
    incorrect_answers: [
      "Why Pay More!?",
      "Have It Your Way",
      "Making People Happy Through Food"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is real haggis made of?",
    correct_answer: "Sheep's Heart, Liver and Lungs",
    incorrect_answers: [
      "Sheep's Heart, Kidneys and Lungs",
      "Sheep's Liver, Kidneys and Eyes",
      "Whole Sheep"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Earl Grey tea is black tea flavoured with what?",
    correct_answer: "Bergamot oil",
    incorrect_answers: ["Lavender", "Vanilla", "Honey"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Whose greyscale face is on the kappa emoticon on Twitch?",
    correct_answer: "Josh DeSeno",
    incorrect_answers: ["Justin DeSeno", "John DeSeno", "Jimmy DeSeno"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    correct_answer: "Brazil",
    incorrect_answers: ["China", "South Korea", "United States of America"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "In which fast food chain can you order a Jamocha Shake?",
    correct_answer: "Arby's",
    incorrect_answers: ["McDonald's", "Burger King", "Wendy's"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Nephelococcygia is the practice of doing what?",
    correct_answer: "Finding shapes in clouds",
    incorrect_answers: [
      "Sleeping with your eyes open",
      "Breaking glass with your voice",
      "Swimming in freezing water"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who wrote Harry Potter?",
    correct_answer: "J.K. Rowling",
    incorrect_answers: ["J.R.R. Tolkien", "Terry Pratchett", "Daniel Radcliffe"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which famous book is sub-titled 'The Modern Prometheus'?",
    correct_answer: "Frankenstein",
    incorrect_answers: [
      "Dracula",
      "The Strange Case of Dr. Jekyll and Mr. Hyde ",
      "The Legend of Sleepy Hollow"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Who wrote the novel Moby-Dick?",
    correct_answer: "Herman Melville",
    incorrect_answers: [
      "William Golding",
      "William Shakespeare",
      "J. R. R. Tolkien"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What was the name of Captain Nemo's submarine in 20,000 Leagues Under the Sea?",
    correct_answer: "The Nautilus",
    incorrect_answers: ["The Neptune", "The Poseidon ", "The Atlantis"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the book The Martian, how long was Mark Watney trapped on Mars (in Sols)?",
    correct_answer: "549 Days",
    incorrect_answers: ["765 Days", "401 Days", "324 Days"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which of the following is the world's best-selling book?",
    correct_answer: "The Lord of the Rings",
    incorrect_answers: [
      "The Little Prince",
      "Harry Potter and the Philosopher's Stone",
      "The Da Vinci Code"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the 1967 horror novel Rosemary's Baby?",
    correct_answer: "Ira Levin",
    incorrect_answers: ["Stephen King", "Robert Bloch", "Mary Shelley"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
    correct_answer: "Oswald",
    incorrect_answers: ["James", "Harold", "Christopher"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
    correct_answer: "Astoria Greengrass",
    incorrect_answers: [
      "Pansy Parkinson",
      "Millicent Bulstrode",
      "Hermione Granger"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "What is Hermione Granger's middle name?",
    correct_answer: "Jean",
    incorrect_answers: ["Jane", "Emma", "Jo"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "What is Ron Weasley's middle name?",
    correct_answer: "Bilius",
    incorrect_answers: ["Arthur", "John", "Dominic"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What position does Harry Potter play in Quidditch?",
    correct_answer: "Seeker",
    incorrect_answers: ["Beater", "Chaser", "Keeper"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
    correct_answer: "The Artful Dodger",
    incorrect_answers: ["Fagin", "Bull's-eye", "Mr. Fang"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Abel Magwitch is a character from which Charles Dickens novel?",
    correct_answer: "Great Expectations",
    incorrect_answers: [
      "The Pickwick Papers",
      "Nicholas Nickleby",
      "Oliver Twist"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "Which famous spy novelist wrote the childrens' story Chitty-Chitty-Bang-Bang?",
    correct_answer: "Ian Fleming",
    incorrect_answers: ["Joseph Conrad", "John Buchan", "Graham Greene"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What was the name of the Mysterious Island, in Jules Verne's The Mysterious Island?",
    correct_answer: "Lincoln Island",
    incorrect_answers: [
      "Vulcania Island",
      "Prometheus Island",
      "Neptune Island"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "By what name was the author Eric Blair better known?",
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What was the pen name of novelist, Mary Ann Evans?",
    correct_answer: "George Eliot",
    incorrect_answers: [
      "George Orwell",
      "George Bernard Shaw",
      "George Saunders"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the children's story The Little Match Girl?",
    correct_answer: "Hans Christian Andersen",
    incorrect_answers: ["Charles Dickens", "Lewis Carroll", "Oscar Wilde"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter series, what is Headmaster Dumbledore's full name?",
    correct_answer: "Albus Percival Wulfric Brian Dumbledore",
    incorrect_answers: [
      "Albus Valum Jetta Mobius Dumbledore",
      "Albus James Lunae Otto Dumbledore",
      "Albus Valencium Horatio Kul Dumbledore"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "How many Harry Potter books are there?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "6"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What's Harry Potter's dad's name?",
    correct_answer: "James Potter",
    incorrect_answers: ["Joey Potter", "Frank Potter", "Hairy Potter Sr."]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "The novel Jane Eyre was written by what author? ",
    correct_answer: "Charlotte Bronte",
    incorrect_answers: ["Emily Bronte", "Jane Austen", "Louisa May Alcott"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who was the author of the 1954 novel, Lord of the Flies?",
    correct_answer: "William Golding",
    incorrect_answers: ["Stephen King", "F. Scott Fitzgerald", "Hunter Fox"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "J.K. Rowling completed Harry Potter and the Deathly Hallows in which hotel in Edinburgh, Scotland?",
    correct_answer: "The Balmoral",
    incorrect_answers: [
      "The Dunstane Hotel",
      "Hotel Novotel",
      "Sheraton Grand Hotel & Spa"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In the year 1818, novelist Mary Shelly is credited with writing a fiction novel and creating this infamous character.",
    correct_answer: "Frankenstein's monster",
    incorrect_answers: ["Dracula", "The Thing", "The Invisible Man"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "The title of Adolf Hitler's autobiography Mein Kampf is what when translated to English?",
    correct_answer: "My Struggle",
    incorrect_answers: ["My Hatred", "My Sadness", "My Desire"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the protagonist of J.D. Salinger's novel Catcher in the Rye?",
    correct_answer: "Holden Caulfield",
    incorrect_answers: ["Fletcher Christian", "Jay Gatsby", "Randall Flagg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?",
    correct_answer: "A Study in Scarlet",
    incorrect_answers: [
      "The Sign of the Four",
      "A Case of Identity",
      "The Doings of Raffles Haw"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "Which American author was also a budding travel writer and wrote of his adventures with his dog Charley?",
    correct_answer: "John Steinbeck",
    incorrect_answers: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "William Faulkner"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "According to The Hitchhiker's Guide to the Galaxy book, the answer to life, the universe and everything else is...",
    correct_answer: "42",
    incorrect_answers: ["Loving everyone around you", "Chocolate", "Death"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "The book The Little Prince was written by...",
    correct_answer: "Antoine de Saint-Exupery",
    incorrect_answers: [
      "Miguel de Cervantes Saavedra",
      "Jane Austen",
      "F. Scott Fitzgerald"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "Where does the book The Silence of the Lambs get its title from?",
    correct_answer: "The main character's trauma in childhood",
    incorrect_answers: [
      "The relation it has with killing the innocents",
      "The villain's favourite meal",
      "The voice of innocent people being shut by the powerful"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of these book series is by James Patterson?",
    correct_answer: "Maximum Ride",
    incorrect_answers: [
      "Harry Potter",
      "The Legend of Xanth",
      "The Bartemaeus Trilogy"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In the Harry Potter novels, what must a Hogwarts student do to enter the Ravenclaw Common Room?",
    correct_answer: "Answer a riddle",
    incorrect_answers: [
      "Rhythmically tap barrels with a wand",
      "Speak a password",
      "Knock in sequence"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What is the name of the gang that Ponyboy is a part of in the book, The Outsiders?",
    correct_answer: "The Greasers",
    incorrect_answers: ["The Outsiders", "The Mafia", "The Socs"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "The book Fahrenheit 451 was written by whom?",
    correct_answer: "Ray Bradbury",
    incorrect_answers: [
      "R. L. Stine",
      "Wolfgang Amadeus Mozart",
      "Stephen King"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Which of the following is NOT a work done by Shakespeare?",
    correct_answer: "Trial of Temperance",
    incorrect_answers: ["Measure For Measure", "Titus Andronicus", "Cymbeline"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What is the name of Sherlock Holmes's brother?",
    correct_answer: "Mycroft Holmes",
    incorrect_answers: [
      "Mederi Holmes",
      "Martin Holmes",
      "Herbie Hancock Holmes"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What book series published by Jim Butcher follows a wizard in modern day Chicago?",
    correct_answer: "The Dresden Files",
    incorrect_answers: [
      "A Hat in Time",
      "The Cinder Spires",
      "My Life as a Teenage Wizard"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What was the last message of the Dolphins in The Hitchhiker's Guide to the Galaxy?",
    correct_answer: "So long, and thanks for all the fish.",
    incorrect_answers: [
      "The answer is 42.",
      "Land of the brave.",
      "Goodbye cruel world!"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In Margaret Atwood's The Handmaid's Tale, what is Offred's real name is implied to be?",
    correct_answer: "June",
    incorrect_answers: ["August", "April", "May"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In Little Women, which of the March sisters married Laurie?",
    correct_answer: "Amy",
    incorrect_answers: ["Beth", "Jo", "Meg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Antiquities, Ice Age, and Alliances expansions take place on which continent?",
    correct_answer: "Terisiare",
    incorrect_answers: ["Aerona", "Shiv", "Jamuraa"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In Alice in Wonderland, what is the name of Alice's kitten?",
    correct_answer: "Dinah",
    incorrect_answers: ["Oscar", "Heath", "Smokey"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What's the second book in George R. R. Martin's 'A Song of Ice and Fire' series?",
    correct_answer: "A Clash of Kings",
    incorrect_answers: [
      "A Dance with Dragons",
      "A Storm of Swords",
      "A Feast for Crows"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In which classic novel is there a character named Homer Simpson?",
    correct_answer: "The Day of the Locust",
    incorrect_answers: ["Catch-22", "Of Mice and Men", "A Separate Peace"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "In the name of the fictional SCP Foundation, what does the SCP stand for?",
    correct_answer: "Special Containment Procedures",
    incorrect_answers: [
      "Secure, Contain, Protect",
      "Supernatural Creature Preservation",
      "Silent Community Protection"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    correct_answer: "SCP-173",
    incorrect_answers: ["SCP-001", "SCP-999", "SCP-1459"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which of the following is NOT a quote from the 1942 film Casablanca? ",
    correct_answer: "Frankly, my dear, I don't give a damn.",
    incorrect_answers: [
      "Here's lookin' at you, kid.",
      "Of all the gin joints, in all the towns, in all the world, she walks into mine",
      "Round up the usual suspects."
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Who directed E.T. the Extra-Terrestrial (1982)?",
    correct_answer: "Steven Spielberg",
    incorrect_answers: ["Stanley Kubrick", "James Cameron", "Tim Burton"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the film Interstellar, how long did they spend on Miller's planet?",
    correct_answer: "23 years, 4 months, and 8 days",
    incorrect_answers: [
      "15 years, 2 months, and 15 days",
      "10 months and 6 days",
      "26 years, 4 months, and 10 days"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Who played Deputy Marshal Samuel Gerard in the 1993 film The Fugitive?",
    correct_answer: "Tommy Lee Jones",
    incorrect_answers: ["Harrison Ford", "Harvey Keitel", "Martin Landau"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
    correct_answer: "Chicago",
    incorrect_answers: ["Dreamgirls", "Cabaret", "All That Jazz"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which movie contains the quote, Say hello to my little friend!?",
    correct_answer: "Scarface",
    incorrect_answers: ["Reservoir Dogs", "Heat", "Goodfellas"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was Dorothy's surname in 'The Wizard Of Oz'?",
    correct_answer: "Gale",
    incorrect_answers: ["Perkins", "Day", "Parker"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
    correct_answer: "Auric Goldfinger",
    incorrect_answers: ["Dr. Julius No", "Rosa Klebb", "Emilio Largo"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "This movie contains the quote, I love the smell of napalm in the morning!",
    correct_answer: "Apocalypse Now",
    incorrect_answers: ["Platoon", "The Deer Hunter", "Full Metal Jacket"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "What is the orange and white bot's name in Star Wars: The Force Awakens?",
    correct_answer: "BB-8",
    incorrect_answers: ["BB-3", "AA-A", "R2-D2"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "In what year was the first Transformers movie released?",
    correct_answer: "1986",
    incorrect_answers: ["2007", "1984", "2009"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What does TIE stand for in reference to the TIE Fighter in Star Wars?",
    correct_answer: "Twin Ion Engine",
    incorrect_answers: [
      "Twin Iron Engine",
      "Twin Intercepter Engine",
      "Twin Inception Engine"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was the first James Bond film?",
    correct_answer: "Dr. No",
    incorrect_answers: ["Goldfinger", "From Russia With Love", "Thunderball"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the name of the Artificial Intelligence system in the 1983 film, WarGames?",
    correct_answer: "War Operation Plan Response",
    incorrect_answers: [
      "Self Evolving Thought Helix",
      "Master Control Program",
      "West Campus Analog Computer"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What did the first moving picture depict?",
    correct_answer: "A galloping horse",
    incorrect_answers: [
      "A woman in a dress",
      "A man walking",
      "A crackling fire"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which of these movies did Jeff Bridges not star in?",
    correct_answer: "The Hateful Eight",
    incorrect_answers: ["Tron: Legacy", "The Giver", "True Grit"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Who plays Alice in the Resident Evil movies?",
    correct_answer: "Milla Jovovich",
    incorrect_answers: ["Madison Derpe", "Milla Johnson", "Kim Demp"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In 2012, which movie won every category in the 32nd Golden Raspberry Awards?",
    correct_answer: "Jack and Jill",
    incorrect_answers: [
      "The Girl with the Dragon Tattoo",
      "Thor",
      "The King's Speech"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "The 1939 movie The Wizard of Oz contained a horse that changed color, what material did they use to achieve this effect?",
    correct_answer: "Gelatin",
    incorrect_answers: ["Dye", "Paint", "CGI Effect"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which one of these actors is said to be cut from the film 'E.T. the Extra-Terrestrial'?",
    correct_answer: "Harrison Ford",
    incorrect_answers: [
      "Michael J. Fox",
      "Andy Kaufman",
      "Arnold Schwarzenegger"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Who is the main protagonist in, the 1985 film, Back to the Future?",
    correct_answer: "Marty McFly",
    incorrect_answers: ["Emmett Doc Brown", "Biff Tannen", "George McFly"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What was another suggested name for, the 1985 film, Back to the Future?",
    correct_answer: "Spaceman From Pluto",
    incorrect_answers: [
      "Hill Valley Time Travelers",
      "The Time Travelers",
      "The Lucky Man"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In the 1964 film Zulu, what song does the British Army company sing before the final battle?",
    correct_answer: "Men of Harlech",
    incorrect_answers: [
      "Scotland the Brave",
      "Colonel Bogey March",
      "The British Grenadiers"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the correct phrase for the Latin saying Romanes Eunt Domus in Monty Python's Life of Brian?",
    correct_answer: "Romani Ite Domum",
    incorrect_answers: [
      "Romans Go Home",
      "Roxani Ite Domum",
      "Tomate Ite Domum"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "In the movie Scream who is Ghost Face?",
    correct_answer: "Billy Loomis and Stu Macher",
    incorrect_answers: [
      "Dewey Riley",
      "Sidney Prescott",
      "Archie Prescott and Philip Marv"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Who voices the main character Blu in the 2011 animated film Rio?",
    correct_answer: "Jesse Eisenberg",
    incorrect_answers: ["Michael Cera", "Jonah Hill", "Zach Galifianakis"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In the movie Spaceballs, what are the Spaceballs attempting to steal from Planet Druidia?",
    correct_answer: "Air",
    incorrect_answers: ["The Schwartz", "Princess Lonestar", "Meatballs"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film?",
    correct_answer: "Tom Bombadil",
    incorrect_answers: ["Strider", "Barliman Butterbur", "Celeborn"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In Back to the Future Part II, Marty and Dr. Emmett Brown go to which future date?",
    correct_answer: "October 21, 2015",
    incorrect_answers: ["August 28, 2015", "July 20, 2015", "January 25, 2015"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
    correct_answer: "Animalympics",
    incorrect_answers: [
      "The Fox and the Hound",
      "The Black Cauldron",
      "The Great Mouse Detecive"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Who played the Cenobite called Pinhead in the original Hellraiser films?",
    correct_answer: "Doug Bradley",
    incorrect_answers: ["Doug Jones", "Doug Savant", "Doug Benson"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the correct spelling of the protagonist of the book in The NeverEnding Story (1984)?",
    correct_answer: "Atreyu",
    incorrect_answers: ["Atrayu", "Atraiyu", "Atraeyu"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "The first rule is: you don't talk about it is a reference to which movie?",
    correct_answer: "Fight Club",
    incorrect_answers: ["The Island", "Unthinkable", "American Pie"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "In the 2012 film, The Lorax, who is the antagonist?",
    correct_answer: "Aloysius O'Hare",
    incorrect_answers: ["Ted Wiggins", "The Once-Ler", "Grammy Norma"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In the 1992 film Army of Darkness, what name does Ash give to his double-barreled shotgun?",
    correct_answer: "Boomstick",
    incorrect_answers: ["Bloomstick", "Blastbranch", "2-Pump Chump"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "At the end of the 2001 film Rat Race, whose concert do the contestants crash?",
    correct_answer: "Smash Mouth",
    incorrect_answers: ["Bowling for Soup", "Sum 41", "Linkin Park"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In which movie does Robin Williams' character have to disguise themselves into a woman?",
    correct_answer: "Mrs. Doubtfire",
    incorrect_answers: ["Old Dogs", "Jumanji", "Awakenings"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who is the director of the 1991 film Silence of the Lambs?",
    correct_answer: "Jonathan Demme",
    incorrect_answers: ["Stanley Kubrick", "Frank Darabont", "Michael Bay"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "In Star Trek Nemesis, why was Praetor Shinzon created?",
    correct_answer: "To replace Picard as a Romulan Agent",
    incorrect_answers: [
      "To destroy the Enterprise",
      "To become Picard's friend ",
      "To steal the Enterprise"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In what year did Clint Eastwood star as Inspector Harry Callahan in the film Dirty Harry?",
    correct_answer: "1971",
    incorrect_answers: ["1975", "1983", "1969"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "According to Star Wars lore, which planet does Obi-Wan Kenobi come from?",
    correct_answer: "Stewjon",
    incorrect_answers: ["Alderaan", "Tatooine", "Naboo"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In the Jurassic Park universe, what was the first dinosaur cloned by InGen in 1986?",
    correct_answer: "Velociraptor",
    incorrect_answers: ["Triceratops", "Troodon", "Brachiosaurus"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "What was Bruce Campbell's iconic one-liner after getting a chainsaw hand in Evil Dead 2?",
    correct_answer: "Groovy.",
    incorrect_answers: ["Gnarly.", "Perfect.", "Nice."]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What is the species of the Predator in the 1987 movie Predator?",
    correct_answer: "Yautja",
    incorrect_answers: ["Xenomorph", "Praetorian", "Phocrex"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which actor plays the character Tommy Jarvis in Friday the 13th: The Final Chapter (1984)?",
    correct_answer: "Corey Feldman",
    incorrect_answers: ["Macaulay Culkin", "Mel Gibson", "Mark Hamill"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which former Star Trek actor directed Three Men and a Baby (1987)?",
    correct_answer: "Leonard Nimoy",
    incorrect_answers: ["William Shatner", "George Takei", "James Doohan"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "In Finding Nemo, what was the name of Nemo's mom?",
    correct_answer: "Coral",
    incorrect_answers: ["Sandy", "Pearl", "Shelly"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "In Big Hero 6, what fictional city is the Big Hero 6 from?",
    correct_answer: "San Fransokyo",
    incorrect_answers: ["San Tokyo", "Tokysisco", "Sankyo"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "In the Friday The 13th series, what year did Jason drown in?",
    correct_answer: "1957",
    incorrect_answers: ["1955", "1953", "1959"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What film did James Cameron's Avatar dethrone as the highest-grossing film ever?",
    correct_answer: "Titanic",
    incorrect_answers: ["Star Wars", "Gone with the Wind", "Jaws"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "At which bridge does the annual Oxford and Cambridge boat race start?",
    correct_answer: "Putney",
    incorrect_answers: ["Hammersmith", "Vauxhall ", "Battersea"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
    correct_answer: "Nine",
    incorrect_answers: ["Ten", "Seven", "Eight"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "What tool lends it's name to a last-stone advantage in an end in Curling?",
    correct_answer: "Hammer",
    incorrect_answers: ["Wrench", "Drill", "Screwdriver"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In golf, what name is given to a hole score of two under par?",
    correct_answer: "Eagle",
    incorrect_answers: ["Birdie", "Bogey", "Albatross"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What cricketing term denotes a batsman being dismissed with a score of zero?",
    correct_answer: "Duck",
    incorrect_answers: ["Bye", "Beamer", "Carry"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Who was the British professional wrestler Shirley Crabtree better known as?",
    correct_answer: "Big Daddy",
    incorrect_answers: ["Giant Haystacks", "Kendo Nagasaki", "Masambula"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "How many soccer players should be on the field at the same time?",
    correct_answer: "22",
    incorrect_answers: ["20", "24", "26"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team won the 2015-16 English Premier League?",
    correct_answer: "Leicester City",
    incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "A stimpmeter measures the speed of a ball over what surface?",
    correct_answer: "Golf Putting Green",
    incorrect_answers: [" Football Pitch", "Cricket Outfield", "Pinball Table"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which Formula One driver was nicknamed 'The Professor'?",
    correct_answer: "Alain Prost",
    incorrect_answers: ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "How many scoring zones are there on a conventional dart board?",
    correct_answer: "82",
    incorrect_answers: ["62", "42", "102"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "In a game of snooker, what colour ball is worth 3 points?",
    correct_answer: "Green",
    incorrect_answers: ["Yellow", "Brown", "Blue"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "With which doubles partner did John McEnroe have most success?",
    correct_answer: "Peter Fleming",
    incorrect_answers: ["Mark Woodforde", "Michael Stich", "Mary Carillo"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In baseball, how many fouls are an out?",
    correct_answer: "0",
    incorrect_answers: ["5", "3", "2"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which nation hosted the FIFA World Cup in 2006?",
    correct_answer: "Germany",
    incorrect_answers: ["United Kingdom", "Brazil", "South Africa"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "The Rio 2016 Summer Olympics held it's closing ceremony on what date?",
    correct_answer: "August 21",
    incorrect_answers: ["August 23", "August 19", "August 17"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which country will host the 2020 Summer Olympics?",
    correct_answer: "Japan",
    incorrect_answers: ["China", "Australia", "Germany"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which country is hosting the 2018 FIFA World Cup?",
    correct_answer: "Russia",
    incorrect_answers: ["Germany", "United States", "Saudi Arabia"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which country is hosting the 2022 FIFA World Cup?",
    correct_answer: "Qatar",
    incorrect_answers: ["Uganda", "Vietnam", "Bolivia"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
    correct_answer: "7 - 1",
    incorrect_answers: ["0 - 1", "3 - 4", "16 - 0"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which team was the 2015-2016 NBA Champions?",
    correct_answer: "Cleveland Cavaliers",
    incorrect_answers: [
      "Golden State Warriors",
      "Toronto Raptors",
      "Oklahoma City Thunders"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which team was the 2014-2015 NBA Champions?",
    correct_answer: "Golden State Warriors",
    incorrect_answers: [
      "Cleveland Cavaliers",
      "Houston Rockets",
      "Atlanta Hawks"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Josh Mansour is part of what NRL team?",
    correct_answer: "Penrith Panthers",
    incorrect_answers: [
      "Melbourne Storm",
      "Sydney Roosters",
      "North Queensland Cowboys"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which car manufacturer won the 2016 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Ferrari"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which car company is the only Japanese company which won the 24 Hours of Le Mans?",
    correct_answer: "Mazda",
    incorrect_answers: ["Toyota", "Subaru", "Nissan"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which Italian footballer told Neuer where he's putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which male player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "Ma Long (China)",
    incorrect_answers: [
      "Zhang Jike (China)",
      "Jun Mizutani (Japan)",
      "Vladimir Samsonov (Belarus)"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "DING Ning (China)",
    incorrect_answers: [
      "LI Xiaoxia (China)",
      "Ai FUKUHARA (Japan)",
      "Song KIM (North Korea)"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which soccer team won the Copa America 2015 Championship ?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Paraguay"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which soccer team won the Copa America Centenario 2016?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Colombia"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What national team won the 2016 edition of UEFA European Championship?",
    correct_answer: "Portugal",
    incorrect_answers: ["France", "Germany", "England"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
    correct_answer: "4",
    incorrect_answers: ["1", "2", "3"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Who won the 2016 Formula 1 World Driver's Championship?",
    correct_answer: "Nico Rosberg",
    incorrect_answers: ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "In 2016, who won the Formula 1 World Constructor's Championship for the third time in a row?",
    correct_answer: "Mercedes-AMG Petronas",
    incorrect_answers: [
      "Scuderia Ferrari",
      "McLaren Honda",
      "Red Bull Racing Renault"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "Which city did the former NHL team The Nordiques originiate from?",
    correct_answer: "Quebec City",
    incorrect_answers: ["Houston", "Montreal", "New York"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "What team won the 2016 MLS Cup?",
    correct_answer: "Seattle Sounders",
    incorrect_answers: ["Colorado Rapids", "Toronto FC", "Montreal Impact"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the oldest team in Major League Baseball?",
    correct_answer: "Atlanta Braves",
    incorrect_answers: [
      "Chicago Cubs",
      "Cincinnati Reds",
      "St. Louis Cardinals"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?",
    correct_answer: "Jules Bianchi",
    incorrect_answers: [
      "Ayrton Senna",
      "Ronald Ratzenberger",
      "Gilles Villeneuve"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of the following Grand Slam tennis tournaments occurs LAST?",
    correct_answer: "US Open",
    incorrect_answers: ["French Open", "Wimbledon", "Australian Open"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
    correct_answer: "84.39m",
    incorrect_answers: ["100m", "100yd", "109.36yd"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team has won the most Stanley Cups in the NHL?",
    correct_answer: "Montreal Canadians",
    incorrect_answers: [
      "Chicago Blackhawks",
      "Toronto Maple Leafs",
      "Detroit Red Wings"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which portuguese island is soccer player Cristiano Ronaldo from?",
    correct_answer: "Madeira",
    incorrect_answers: ["Terceira", "Santa Maria", "Porto Santo"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "What is the full name of the footballer Cristiano Ronaldo?",
    correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
    incorrect_answers: [
      "Cristiano Ronaldo los Santos Diego",
      "Cristiano Armando Diego Ronaldo",
      "Cristiano Luis Armando Ronaldo"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Who won the 2015 College Football Playoff (CFP) National Championship? ",
    correct_answer: "Ohio State Buckeyes",
    incorrect_answers: [
      "Alabama Crimson Tide",
      "Clemson Tigers",
      "Wisconsin Badgers"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What year was hockey legend Wayne Gretzky born?",
    correct_answer: "1961",
    incorrect_answers: ["1965", "1959", "1963"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "Which year was the third Super Bowl held?",
    correct_answer: "1969",
    incorrect_answers: ["1968", "1971", "1970"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?",
    correct_answer: "Jose Fernandez",
    incorrect_answers: ["Jacob deGrom", "Shelby Miller", "Matt Harvey"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Why was The Green Monster at Fenway Park was originally built?",
    correct_answer: "To prevent viewing games from outside the park.",
    incorrect_answers: [
      "To make getting home runs harder.",
      "To display advertisements.",
      "To provide extra seating."
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
    correct_answer: "American Football",
    incorrect_answers: ["Wrestling", "Archery", "Horse-Racing"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which car manufacturer won the 2017 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Chevrolet"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "From what show is the character James Doakes? ",
    correct_answer: "Dexter",
    incorrect_answers: [
      "Marvel's Daredevil",
      "Boardwalk Empire",
      "The Walking Dead"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What was the name of the police officer in the cartoon Top Cat?",
    correct_answer: "Dibble",
    incorrect_answers: ["Barbrady", "Mahoney", "Murphy"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which character was played by Dustin Diamond in the sitcom 'Saved by the Bell'?",
    correct_answer: "Screech",
    incorrect_answers: ["Zack", "Mr. Belding", "A.C. Slater"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, 'Top Gear'?",
    correct_answer: "Jessica",
    incorrect_answers: ["Angela", "Erica", "Sandra"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the TV show 'M*A*S*H', what was the nickname of Corporal Walter O'Reilly?",
    correct_answer: "Radar",
    incorrect_answers: ["Hawkeye", "Hot Lips", "Trapper"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Who sang the theme song for the TV show 'Rawhide'?",
    correct_answer: "Frankie Laine",
    incorrect_answers: ["Guy Mitchell", " Tennessee Ernie Ford", "Slim Whitman"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In what year did The Big Bang Theory debut on CBS?",
    correct_answer: "2007",
    incorrect_answers: ["2008", "2006", "2009"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "The theme for the popular science fiction series Doctor Who was composed by who?",
    correct_answer: "Ron Grainer",
    incorrect_answers: ["Murray Gold", "Delia Derbyshire", "Peter Howell"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the original Star Trek TV series, what was Captain James T. Kirk's middle name?",
    correct_answer: "Tiberius",
    incorrect_answers: ["Trevor", "Travis", "Tyrone"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In which British seaside town was the BBC sitcom Fawlty Towers set?",
    correct_answer: "Torquay",
    incorrect_answers: ["Blackpool", "Bournemouth", "Great Yarmouth"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What is the setting of the show Parks and Recreation?",
    correct_answer: "Pawnee, Indiana",
    incorrect_answers: [
      "Eagleton, Indiana",
      "Pasadena, California",
      "London, England"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Who was the star of the TV series 24?",
    correct_answer: "Kiefer Sutherland",
    incorrect_answers: ["Kevin Bacon", "Hugh Laurie", "Rob Lowe"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In Breaking Bad, the initials W.W. refer to which of the following?",
    correct_answer: "Walter White",
    incorrect_answers: ["William Wolf", "Willy Wonka", "Wally Walrus"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In It's Always Sunny in Philadelphia what was the name of Frank's wrestling persona?",
    correct_answer: "The Trash Man",
    incorrect_answers: ["Bird of War", "Day Man", "The Maniac"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Who is the main character in the show Burn Notice?",
    correct_answer: "Michael Westen",
    incorrect_answers: ["Sam Axe", "Fiona Glenanne", "Madeline Westen"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the Star Trek universe, what color is Vulcan blood?",
    correct_answer: "Green",
    incorrect_answers: ["Blue", "Red", "Purple"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In Naruto: Shippuden, which of the following elements is a Kekkei Tōta?",
    correct_answer: "Particle Style",
    incorrect_answers: ["Any Doujutsu", "Shadow Style", "Ice Style"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "When did the TV show Rick and Morty first air on Adult Swim?",
    correct_answer: "2013",
    incorrect_answers: ["2014", "2016", "2015"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In Supernatural, what's is Sam's brothers name?",
    correct_answer: "Dean",
    incorrect_answers: ["Dave", "Steve", "Mike"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Which country does the YouTuber SinowBeats originate from?",
    correct_answer: "Scotland",
    incorrect_answers: ["England", "Sweden", "Germany"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What was the name of the the first episode of Doctor Who to air in 1963?",
    correct_answer: "An Unearthly Child",
    incorrect_answers: ["The Daleks", "The Aztecs", "The Edge of Destruction"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In The Big Bang Theory, what is Howard Wolowitz's nickname in World of Warcraft?",
    correct_answer: "Wolowizard",
    incorrect_answers: ["Sheldor", "Rajesh", "Priya"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "How long was Ken Jennings' win streak on Jeopardy?",
    correct_answer: "74",
    incorrect_answers: ["88", "49", "62"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "In Star Trek, what is the name of Spock's father?",
    correct_answer: "Sarek",
    incorrect_answers: ["Tuvok", "T'Pal", "Surak"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Star Trek: The Next Generation, what is the name of Data's cat?",
    correct_answer: "Spot",
    incorrect_answers: ["Mittens", "Tom", "Kitty"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Who won Big Brother 2014 UK?",
    correct_answer: "Helen Wood",
    incorrect_answers: [
      "Christopher Hall",
      "Pauline Bennett",
      "Pavandeep Pav Paul"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Who was the winner of the 2016 WWE Royal Rumble?",
    correct_answer: "Triple H",
    incorrect_answers: ["Roman Reigns", "AJ Styles", "Dean Ambrose"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "British actor David Morrissey stars as which role in The Walking Dead?",
    correct_answer: "The Governor",
    incorrect_answers: ["Negan", "Rick Grimes", "Daryl Dixon"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which of these Disney shows is classified as an anime?",
    correct_answer: "Stitch!",
    incorrect_answers: [
      "Cory in the House",
      "The Emperor's New School",
      "Hannah Montana"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In Donkey Kong Country, why does Donkey Kong want to know the secret of the crystal coconut?",
    correct_answer: "He's the big kahuna.",
    incorrect_answers: [
      "To find out where all the bananas are.",
      "Because Diddy Kong forced him.",
      "He wants to punish brutes."
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In the TV Show Donkey Kong Country, which episode did the song Eddie, Let Me Go Back To My Home play in?",
    correct_answer: "It's a Wonderful Life",
    incorrect_answers: [
      "Message In A Bottle Show",
      "To The Moon Baboon",
      "Ape-Nesia"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the television show Lazy Town, who is the actor of Robbie Rotten?",
    correct_answer: "Stefan Stefansson",
    incorrect_answers: ["Adam Sandler", "Magnus Scheving", "Stephen Carl"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In Star Trek, what is the Ferengi's First Rule of Acquisition?",
    correct_answer: "Once you have their money, you never give it back. ",
    incorrect_answers: [
      "Never place friendship above profit",
      "Greed is Eternal",
      "Never allow family to stand in the way of opportunity"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "What is the Klingon's afterlife called?",
    correct_answer: "Sto-vo-kor",
    incorrect_answers: ["Valhalla", "Karon'gahk", "New Jersey"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In Star Trek, who was the founder of the Klingon Empire and its philosophy?",
    correct_answer: "Kahless the Unforgettable",
    incorrect_answers: [
      "Lady Lukara of the Great Hall",
      "Molor the Unforgiving",
      "Dahar Master Kor"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In Star Trek, what is the Klingon death ritual?",
    correct_answer: "Look into sky and yell loudly in mourning.",
    incorrect_answers: [
      "Kiss the jagged forehead before burial.",
      "Shoot into space in a torpedo casing.",
      "Split the deceased's earnings between bloodkin."
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "In Star Trek, what is the Klingon delicacy of gagh made from?",
    correct_answer: "Serpent worms",
    incorrect_answers: ["Earthworms", "Spaghetti noodles", "Klingworms"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show Stargate Universe have?",
    correct_answer: "2",
    incorrect_answers: ["10", "5", "3"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What breed of dog is Scooby Doo?",
    correct_answer: "Great Dane",
    incorrect_answers: ["Pit bull", "Boxer", "Doberman Pinscher"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In 2008, British celebrity chef Gordon Ramsay believes he almost died after suffering what accident in Iceland while filming?",
    correct_answer: "Slipping off a cliff, and nearly drowning in icy water",
    incorrect_answers: [
      "Crash landing when arriving at Keflavik airport",
      "A minor car accident in a snowstorm",
      "Being served under-cooked chicken at his hotel"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "Which of these voices wasn't a choice for the House AI in The Simpsons Treehouse of Horror short, House of Whacks?",
    correct_answer: "George Clooney",
    incorrect_answers: ["Matthew Perry", "Dennis Miller", "Pierce Brosnan"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What episode of Mr. Bean saw him trying to prevent people from seeing him naked?",
    correct_answer: "Mr. Bean in Room 426",
    incorrect_answers: [
      "Mr. Bean Goes to Town",
      "The Trouble with Mr. Bean",
      "Back to School Mr. Bean"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Alan Reed is known for providing the voice of which character?",
    correct_answer: "Fred Flintstone",
    incorrect_answers: ["Bugs Bunny", "Fangface", "G.I. Joe"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?",
    correct_answer: "Laura Roslin",
    incorrect_answers: ["William Adama", "Tricia Helfer", "Harry Stills"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "What was the name of the inflatable duck sacrified to the crowd at the end of Episode 34 of the 18th season of Big Brother?",
    correct_answer: "Pablo",
    incorrect_answers: ["Esteban", "Carlos", "Duckster"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In season one of the US Kitchen Nightmares, Gordan Ramsay tried to save 10 different restaurants. How many ended up closing afterwards?",
    correct_answer: "9",
    incorrect_answers: ["6", "3", "0"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What NBC sitcom once saw two of its characters try to pitch NBC on a sitcom about nothing?",
    correct_answer: "Seinfeld",
    incorrect_answers: ["Frasier", "Becker", "Friends"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "Prior to working at Wizards of the Coast, Mark Rosewater was a writer for which show?",
    correct_answer: "Roseanne",
    incorrect_answers: ["Boy Meets World", "The X-Files", "NYPD Blue"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "On the NBC show Community, whose catch-phrase was Pop! Pop!?",
    correct_answer: "Magnitude",
    incorrect_answers: ["Star Burns", "Leonard", "Senoir Chang"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who was the winner of Big Brother Season 10?",
    correct_answer: "Dan Gheesling",
    incorrect_answers: ["Bryce Kranyik", "Ryan Sutfin", "Chris Mundorf"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "League of Legends, DOTA 2, Smite and Heroes of the Storm are all part of which game genre?",
    correct_answer: "Multiplayer Online Battle Arena (MOBA)",
    incorrect_answers: [
      "Real Time Strategy (RTS)",
      "First Person Shooter (FPS)",
      "Role Playing Game (RPG)"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Which Greek letter represents the Half-Life logo?",
    correct_answer: "Lambda",
    incorrect_answers: ["Omega", "Alpha", "Sigma"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What is the main character of Metal Gear Solid 2?",
    correct_answer: "Raiden",
    incorrect_answers: ["Solidus Snake", "Big Boss", "Venom Snake"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What was the game Galaga was a sequel to?",
    correct_answer: "Galaxian",
    incorrect_answers: ["Galactica", "Space Invaders", "Galactic Wars"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In the game The Sims, how many Simoleons does each family start with?",
    correct_answer: "20,000",
    incorrect_answers: ["10,000", "15,000", "25,000"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What engine did the original Half-Life run on?",
    correct_answer: "GoldSrc",
    incorrect_answers: ["Source", "Quake", "Unreal"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "What is the most expensive weapon in Counter-Strike: Global Offensive?",
    correct_answer: "Scar-20/G3SG1",
    incorrect_answers: ["M4A1", "AWP", "R8 Revolver"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Which of these is a type of monster found in Minecraft?",
    correct_answer: "Skeleton",
    incorrect_answers: ["Werewolf", "Vampire", "Minotaur"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "What was the nickname of the original model for Half-Life's protagonist Gordon Freeman?",
    correct_answer: "Ivan the Space Biker",
    incorrect_answers: [
      "Gordon the Space Biker",
      "Ivan the Alien Biker",
      "Gordon the Alien Biker"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which student in Yandere Simulator is known for asking irritating and stupid questions?",
    correct_answer: "Midori Gurin",
    incorrect_answers: ["Kokona Hruka", "Oka Ruto", "Pipi Osu"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Portal 2, the iconic character GLaDOS is turned into:",
    correct_answer: "A potato",
    incorrect_answers: ["A tomato", "A lemon", "An apple"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What was the name of the Secret Organization in the Hotline Miami series? ",
    correct_answer: "50 Blessings",
    incorrect_answers: ["American Blessings", "50 Saints", "USSR's Blessings"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the beta version of the 1986 game The Legend of Zelda, players have the choice between a sword and what other item?",
    correct_answer: "Boomerang ",
    incorrect_answers: ["Spear", "Slingshot", "Crossbow"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "By how many minutes are you late to work in Half-Life?",
    correct_answer: "30",
    incorrect_answers: ["5", "60", "15"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In what Half-Life expansion can you find Gordon's picture in an Employee of the Month picture frame?",
    correct_answer: "Half-Life: Opposing Force",
    incorrect_answers: [
      "Half-Life: Blue Shift",
      "Half-Life: Decay",
      "They Hunger"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Overwatch, what is the name of Mercy's ultimate ability?",
    correct_answer: "Valkyrie",
    incorrect_answers: ["Earthshatter", "Rocket Barrage", "Molten Core"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "In Fallout 4 which faction is not present in the game?",
    correct_answer: "The Enclave",
    incorrect_answers: [
      "The Minutemen",
      "The Brotherhood of Steel",
      "The Institute"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
    correct_answer: "Goombario",
    incorrect_answers: ["Goombella", "Goombarry", "Goomby"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What year was the game Dishonored released?",
    correct_answer: "2012",
    incorrect_answers: ["2011", "2008", "2013"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What name does the little headcrab in Half Life 2 have?",
    correct_answer: "Lamarr",
    incorrect_answers: ["Jumperr", "Drett", "Jerry"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Who created the pump F.L.U.D.D. Mario uses in Super Mario Sunshine?",
    correct_answer: "Elvin Gadd",
    incorrect_answers: ["Robert Fludd", "Nirona", "Crygor"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In World of Warcraft lore, which of the following is known as the God of Spiders in the troll's loa beliefs?",
    correct_answer: "Elortha no Shadra",
    incorrect_answers: ["Bwonsamdi", "Hakkar", "Shirvallah"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which of the following characters is NOT a female marriage candidate in the game Stardew Valley?",
    correct_answer: "Caroline",
    incorrect_answers: ["Abigail", "Haley", "Leah"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:",
    correct_answer: "Rhyme",
    incorrect_answers: ["Shiki", "Joshua", "Beat"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the game Terraria, which of these bosses are pre-hardmode bosses?",
    correct_answer: "Eye of Cthulhu",
    incorrect_answers: ["Plantera", "Skeletron Prime", "The Destroyer"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "What was the name of the game created by Masahiro Sakurai and Satoru Iwata that would eventually evolve into Super Smash Bros.?",
    correct_answer: "Dragon King: The Fighting Game",
    incorrect_answers: [
      "Nintendo Legends: Fight!",
      "Martial Arts: King of the Hill",
      "Aerial Warriors: Supreme Battle"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What was the name of the protagonist of Metal Gear Solid V: The Phantom Pain?",
    correct_answer: "Punished Venom Snake",
    incorrect_answers: ["Miller", "Solid Snake", "Ocelot"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "In the Pokemon series, what is Palkia's hidden ability?",
    correct_answer: "Telepathy",
    incorrect_answers: ["Pressure", "Water Bubble", "Hydration"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "Gimmick! is a Japanese Famicom game that uses a sound chip expansion in the cartridge. What is it called?",
    correct_answer: "FME-7",
    incorrect_answers: ["VRC7", "VRC6", "MMC5"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "The Potato Sack was a collection of indie games released on Steam in 2011 as a promotion for which game?",
    correct_answer: "Portal 2",
    incorrect_answers: ["Left 4 Dead 2", "Half-Life 3", "Dota 2"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What was the first Call of Duty game to include the Zombies gamemode?",
    correct_answer: "Call of Duty: World at War",
    incorrect_answers: [
      "Call of Duty: Black Ops",
      "Call of Duty: Modern Warfare 2",
      "Call of Duty: Black Ops III"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Who is the main protagonist in Danganronpa 2: Goodbye Despair?",
    correct_answer: "Hajime Hinata",
    incorrect_answers: ["Nagito Komaeda", "Makoto Naegi", "Junko Enoshima"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which ones of these Mario Kart games was made for the Gameboy Advance?",
    correct_answer: "Mario Kart: Super Circuit",
    incorrect_answers: [
      "Mario Kart: Double Dash",
      "Mario Kart 64",
      "Super Mario Kart"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Call Of Duty: Zombies, what does the game traditionally reward you for completing a boss round?",
    correct_answer: "Max Ammo",
    incorrect_answers: ["A Pack-A-Punched gun", "Death Machine", "Monkey Bombs"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Call of Duty: Zombies, what group does Doctor Maxis work for?",
    correct_answer: "Group 935",
    incorrect_answers: ["Group Reanimate", "Group Rezurrection", "Division 9"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What was the release date of Grand Theft Auto IV?",
    correct_answer: "April 29, 2008",
    incorrect_answers: ["May 21, 2009", "June 22, 2010", "July 28, 2008"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which character does the player play as in the video game Bastion?",
    correct_answer: "The Kid",
    incorrect_answers: ["Rucks", "Zulf", "Zia"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "How many games are there in the Colony Wars series for the PlayStation?",
    correct_answer: "3",
    incorrect_answers: ["2", "4", "5"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Who created the Metal Gear Series?",
    correct_answer: "Hideo Kojima",
    incorrect_answers: ["Hiroshi Yamauchi", "Shigeru Miyamoto", "Gunpei Yokoi"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which of these characters won the Super Smash Bros. Fighter Ballot in 2015?",
    correct_answer: "Bayonetta",
    incorrect_answers: ["Cloud", "Ryu", "Megaman"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Portal, what color is the Intelligence Core?",
    correct_answer: "Blue",
    incorrect_answers: ["Purple", "Red", "Orange"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "The walls of the Goldenrod City Gym in Pokemon Gold and Silver are arranged in the shape of which Pokemon?",
    correct_answer: "Clefairy",
    incorrect_answers: ["Bulbasaur", "Pikachu", "Pidgey"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "Exile and Revelations were the third and fourth installments of which PC game series?",
    correct_answer: "Myst",
    incorrect_answers: ["Shivers", "Doom", "Tropico"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Guild Wars 2, what is the name of the home instance for the Charr race?",
    correct_answer: "Hero's Canton",
    incorrect_answers: ["Gladium Canton", "Praetor's Canton", "Ligacus Notos"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, which Chinese Zodiac sign is not represented in the Zodiac Weapon Set?",
    correct_answer: "Ox",
    incorrect_answers: ["Rabbit", "Tiger", "Goat"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Guild Wars 2, what is Tybalt's last name?",
    correct_answer: "Leftpaw",
    incorrect_answers: ["Wildeye", "Blightaxe", "Blackblood"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the Blademaster in the middle lane of the Dragon's Stand zone?",
    correct_answer: "Diarmid",
    incorrect_answers: ["Adryn", "Hareth", "Gerent"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary mace with a disco ball as its head?",
    correct_answer: "The Moot",
    incorrect_answers: ["The Predator", "Quip", "The Dreamer"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What is the name of the City in Saints Row The Third?",
    correct_answer: "Steelport",
    incorrect_answers: ["Stilwater", "Carcer", "Liberty"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Who is the main villain of the Crash Bandicoot series?",
    correct_answer: "Dr. Neo Cortex",
    incorrect_answers: ["Dr. Evo-Cortex", "Dr. Cortox", "Sir Cartex"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question:
      "Named after a character he played in a 1969 film, what is the name of the ski resort in Utah that Robert Redford bought in 1968?",
    correct_answer: "Sundance",
    incorrect_answers: ["Woodward", "Turner", "Booker"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "Which actress's real name was Frances Ethel Gumm?",
    correct_answer: "Judy Garland",
    incorrect_answers: ["Doris Day", "Julie Andrews", "Marilyn Monroe"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "What is the name of Jontron's parrot?",
    correct_answer: "Jacques",
    incorrect_answers: ["Jak", "John", "Jaques"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "What is the real name of moot, founder of the imageboard 4chan?",
    correct_answer: "Christopher Poole",
    incorrect_answers: ["Mark Zuckerberg", "Allison Harvard", "Catie Wayne"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "What is Doug Walker's YouTube name?",
    correct_answer: "The Nostalgia Critic",
    incorrect_answers: [
      "The Angry Video Game Nerd",
      "AngryJoeShow",
      "The Cinema Snob"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "Paul McCartney has always used his middle name. What is his real first name? ",
    correct_answer: "James",
    incorrect_answers: ["John", "Jack", "Justin"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "By what name is Carlos Estevez better known? ",
    correct_answer: "Charlie Sheen",
    incorrect_answers: ["Ricky Martin", "Bruno Mars", "Joaquin Phoenix"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "Which actress married Michael Douglas in 2000?",
    correct_answer: "Catherine Zeta-Jones",
    incorrect_answers: ["Ruth Jones", "Pam Ferris", "Sara Sugarman"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "Donald J. Trump's Middle Name is...",
    correct_answer: "John",
    incorrect_answers: ["Jeff", "Jerald", "Jason"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "What year did radio icon Howard Stern start a job at radio station WNBC?",
    correct_answer: "1982",
    incorrect_answers: ["1985", "1984", "1995"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "Which of these people is NOT a part of the Internet comedy group Mega64?",
    correct_answer: "Jon Jafari",
    incorrect_answers: ["Rocco Botte", "Derrick Acosta", "Shawn Chatfield"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "What was the cause of death for Freddie Mercury?",
    correct_answer: "Pneumonia",
    incorrect_answers: ["Stomach Cancer", "HIV", "Brain Hemorrhage"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "When was Elvis Presley born?",
    correct_answer: "January 8, 1935",
    incorrect_answers: ["December 13, 1931", "July 18, 1940", "April 17, 1938"]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "What was the religion of famous singer Freddie Mercury?",
    correct_answer: "Zoroastrianism",
    incorrect_answers: ["Paganism", "Ashurism", "Judaism"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "What does film maker Dan Bell typically focus his films on?",
    correct_answer: "Abandoned Buildings and Dead Malls",
    incorrect_answers: ["Historic Landmarks", "Action Films", "Documentaries "]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "What was the cause of Marilyn Monroes suicide?",
    correct_answer: "Drug Overdose",
    incorrect_answers: ["Knife Attack", "House Fire", "Gunshot"]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "How tall is Tom Cruise?",
    correct_answer: "5ft; 7in;",
    incorrect_answers: ["5ft; 9in", "5ft; 4in;", "5ft; 5in;"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "Gwyneth Paltrow has a daughter named...?",
    correct_answer: "Apple",
    incorrect_answers: ["Lily", "French", "Dakota"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "What is generally considered to be William Shakespeare's birth date?",
    correct_answer: "April 23rd, 1564",
    incorrect_answers: [
      "July 4th, 1409",
      "September 29th, 1699",
      "December 1st, 1750"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "If he was still alive, in what year would Elvis Presley celebrate his 100th birthday?",
    correct_answer: "2035",
    incorrect_answers: ["2030", "2040", "2045"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "Before voicing Pearl in Steven Universe, Deedee Magno Hall was part of which American band?",
    correct_answer: "The Party",
    incorrect_answers: [
      "The Weather Girls",
      "The Pussycat Dolls",
      "The Cheetah Girls"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "Which celebrity announced his presidency in 2015?",
    correct_answer: "Kanye West",
    incorrect_answers: ["Donald Trump", "Leonardo DiCaprio", "Miley Cyrus"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "Aubrey Graham is better known as",
    correct_answer: "Drake",
    incorrect_answers: ["Travis Scott", "Lil Wayne", "2 Chainz"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "Where was Kanye West born?",
    correct_answer: "Atlanta, Georgia",
    incorrect_answers: [
      "Chicago, Illinois",
      "Los Angeles, California",
      "Detroit, Michigan"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "What was the name of Marilyn Monroe's first husband?",
    correct_answer: "James Dougherty",
    incorrect_answers: ["Joe Dimaggio", "Kirk Douglas", "Arthur Miller"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "Which radio personality calls himself The King of All Media?",
    correct_answer: "Howard Stern",
    incorrect_answers: ["Rush Limbaugh", "Pete Tong", "Ryan Seacrest"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "How much weight did Chris Pratt lose for his role as Star-Lord in Guardians of the Galaxy?",
    correct_answer: "60 lbs",
    incorrect_answers: ["30 lbs", "50 lbs", "70 lbs"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "Nikki Diamond portrayed which Gladiator in the 1992 TV show Gladiators?",
    correct_answer: "Scorpio",
    incorrect_answers: ["Jet", "Nightshade", "Falcon"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "Who out of these actresses is the youngest?",
    correct_answer: "Kiernan Shipka",
    incorrect_answers: ["Ariel Winter", "Emma Watson", "Bonnie Wright"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "In what year did Bob Ross die?",
    correct_answer: "1995",
    incorrect_answers: ["1986", "1989", "1997"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "In which of these TV shows did the chef Gordon Ramsay not appear?",
    correct_answer: "Auction Hunters",
    incorrect_answers: [
      "Ramsay's Kitchen Nightmares",
      "Hotel Hell",
      "Hell's Kitchen"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Which school in Surrey, England did Steve Backshall attend?",
    correct_answer: "Collingwood College",
    incorrect_answers: [
      "Tomlinscote School",
      "Kings International College",
      "Lyndhurst School"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "Neil Hamburger is played by which comedian?",
    correct_answer: "Gregg Turkington",
    incorrect_answers: ["Nathan Fielder", "Tim Heidecker", "Todd Glass"]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question:
      "The eccentric natural philosopher Tycho Brahe kept what as a pet?",
    correct_answer: "Moose",
    incorrect_answers: ["Dog", "Bear", "Goat"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "Who is James Rolfe better known as?",
    correct_answer: "The Angry Video Game Nerd",
    incorrect_answers: ["TotalBiscuit", "PeanutButterGamer", "PewDiePie"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "Which American celebrity died in 1977 playing golf in La Moraleja, Madrid?",
    correct_answer: "Bing Crosby",
    incorrect_answers: ["Elvis Presley", "Charlie Chaplin", "Groucho Marx"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "By which name is Ramon Estevez better known as?",
    correct_answer: "Martin Sheen",
    incorrect_answers: ["Charlie Sheen", "Ramon Sheen", "Emilio Estevez"]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Who was Donald Trump's first wife?",
    correct_answer: "Ivana Zelničkova",
    incorrect_answers: ["Melania Knauss", "Marla Maples", "Nancy Davis"]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Gabe Newell was born in which year?",
    correct_answer: "1962 ",
    incorrect_answers: ["1970", "1960", "1972"]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Billy Herrington is from which US state?",
    correct_answer: "New York",
    incorrect_answers: ["Arizona", "California", "Georgia"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question:
      "What was the name of the Ethiopian Wolf before they knew it was related to wolves?",
    correct_answer: "Simien Jackel",
    incorrect_answers: ["Ethiopian Coyote", "Amharic Fox", "Canis Simiensis"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What does hippopotamus mean and in what langauge?",
    correct_answer: "River Horse (Greek)",
    incorrect_answers: [
      "River Horse (Latin)",
      "Fat Pig (Greek)",
      "Fat Pig (Latin)"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question:
      "A carnivorous animal eats flesh, what does a nucivorous animal eat?",
    correct_answer: "Nuts",
    incorrect_answers: ["Nothing", "Fruit", "Seaweed"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What type of animal is a natterjack?",
    correct_answer: "Toad",
    incorrect_answers: ["Bird", "Fish", "Insect"]
  },
  {
    category: "Animals",
    difficulty: "easy",
    question: "What is the fastest land animal?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Lion", "Thomson's Gazelle", "Pronghorn Antelope"]
  },
  {
    category: "Animals",
    difficulty: "easy",
    question: "What is the scientific name for modern day humans?",
    correct_answer: "Homo Sapiens",
    incorrect_answers: [
      "Homo Ergaster",
      "Homo Erectus",
      "Homo Neanderthalensis"
    ]
  },
  {
    category: "Animals",
    difficulty: "easy",
    question:
      "The Kākāpō is a large, flightless, nocturnal parrot native to which country?",
    correct_answer: "New Zealand",
    incorrect_answers: ["South Africa", "Australia", "Madagascar"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "Which species of Brown Bear is not extinct?",
    correct_answer: "Syrian Brown Bear",
    incorrect_answers: [
      "California Grizzly Bear",
      "Atlas Bear",
      "Mexican Grizzly Bear"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What color/colour is a polar bear's skin?",
    correct_answer: "Black",
    incorrect_answers: ["White", "Pink", "Green"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "Cashmere is the wool from which kind of animal?",
    correct_answer: "Goat",
    incorrect_answers: ["Sheep", "Camel", "Llama"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What is the scientific name for the Polar Bear?",
    correct_answer: "Ursus Maritimus",
    incorrect_answers: ["Polar Bear", "Ursus Spelaeus", "Ursus Arctos"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What are rhino's horn made of?",
    correct_answer: "Keratin",
    incorrect_answers: ["Bone", "Ivory", "Skin"]
  },
  {
    category: "Animals",
    difficulty: "easy",
    question: "How many legs do butterflies have?",
    correct_answer: "6",
    incorrect_answers: ["2", "4", "0"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "What scientific suborder does the family Hyaenidae belong to?",
    correct_answer: "Feliformia",
    incorrect_answers: ["Haplorhini", "Caniformia", "Ciconiiformes"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "How many known living species of hyenas are there?",
    correct_answer: "4",
    incorrect_answers: ["8", "2", "6"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "What scientific family does the Aardwolf belong to?",
    correct_answer: "Hyaenidae",
    incorrect_answers: ["Canidae", "Felidae", "Eupleridae"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "For what reason would a spotted hyena laugh?",
    correct_answer: "Nervousness",
    incorrect_answers: ["Excitement", "Aggression", "Exhaustion"]
  },
  {
    category: "Animals",
    difficulty: "easy",
    question: "What do you call a baby bat?",
    correct_answer: "Pup",
    incorrect_answers: ["Cub", "Chick", "Kid"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "What is the scientific name of the cheetah?",
    correct_answer: "Acinonyx jubatus",
    incorrect_answers: ["Panthera onca", "Lynx rufus", "Felis catus"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "What is the scientific name of the Budgerigar?",
    correct_answer: "Melopsittacus undulatus",
    incorrect_answers: [
      "Nymphicus hollandicus",
      "Pyrrhura molinae",
      "Ara macao"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question:
      "Which animal was part of an Russian domestication experiment in 1959?",
    correct_answer: "Foxes",
    incorrect_answers: ["Pigeons", "Bears", "Alligators"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "The now extinct species Thylacine was native to where?",
    correct_answer: "Tasmania, Australia",
    incorrect_answers: [
      "Baluchistan, Pakistan",
      "Wallachia, Romania",
      "Oregon, United States"
    ]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "What is the Gray Wolf's scientific name?",
    correct_answer: "Canis Lupus",
    incorrect_answers: ["Canis Aureus", "Canis Latrans", "Canis Lupus Lycaon"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "Which of these animals is NOT a lizard?",
    correct_answer: "Tuatara",
    incorrect_answers: ["Komodo Dragon", "Gila Monster", "Green Iguana"]
  },
  {
    category: "Animals",
    difficulty: "easy",
    question: "What is Grumpy Cat's real name?",
    correct_answer: "Tardar Sauce",
    incorrect_answers: ["Sauce", "Minnie", "Broccoli"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "What type of creature is a Bonobo?",
    correct_answer: "Ape",
    incorrect_answers: ["Lion", "Parrot", "Wildcat"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "Which of these species is not extinct?",
    correct_answer: "Komodo dragon",
    incorrect_answers: ["Japanese sea lion", "Tasmanian tiger", "Saudi gazelle"]
  },
  {
    category: "Animals",
    difficulty: "easy",
    question: "Which class of animals are newts members of?",
    correct_answer: "Amphibian",
    incorrect_answers: ["Fish", "Reptiles", "Mammals"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "Unlike on most salamanders, this part of a newt is flat?",
    correct_answer: "Tail",
    incorrect_answers: ["Head", "Teeth", "Feet"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question:
      "What is the name of the copper-rich protein that creates the blue blood in the Antarctic octopus?",
    correct_answer: "Hemocyanin",
    incorrect_answers: ["Cytochrome", "Iron", "Methionine"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question: "Which species is a mountain chicken?",
    correct_answer: "Frog",
    incorrect_answers: ["Chicken", "Horse", "Fly"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What is the fastest animal?",
    correct_answer: "Peregrine Falcon",
    incorrect_answers: ["Golden Eagle", "Cheetah", "Horsefly"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "The dish Fugu, is made from what family of fish?",
    correct_answer: "Pufferfish",
    incorrect_answers: ["Bass", "Salmon", "Mackerel"]
  },
  {
    category: "Animals",
    difficulty: "easy",
    question: "What is the collective noun for a group of crows?",
    correct_answer: "Murder",
    incorrect_answers: ["Pack", "Gaggle", "Herd"]
  },
  {
    category: "Animals",
    difficulty: "hard",
    question:
      "Which of the following is another name for the Poecilotheria Metallica Tarantula?",
    correct_answer: "Gooty",
    incorrect_answers: ["Hopper", "Silver Stripe", "Woebegone"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Who had hits in the 70s with the songs Lonely Boy and Never Let Her Slip Away?",
    correct_answer: "Andrew Gold",
    incorrect_answers: ["Elton John", "Leo Sayer", "Barry White "]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who had a 1973 hit with the song 'Hocus Pocus'?",
    correct_answer: "Focus",
    incorrect_answers: ["Pilot", "Rush", "AC/DC"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the best selling artist of all time?",
    correct_answer: "The Beatles",
    incorrect_answers: ["Michael Jackson", "Elton John", "Elvis Presley"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which American family band had a 1986 top 10 hit with the song 'Crush On You'?",
    correct_answer: "The Jets",
    incorrect_answers: ["DeBarge", "The Jacksons", "The Cover Girls"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which Elton John hit starts with the line When are you gonna come down?",
    correct_answer: "Goodbye Yellow Brick Road",
    incorrect_answers: ["Rocket Man", "Bennie and the Jets", "Crocodile Rock"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who had a 1983 hit with the song 'Africa'?",
    correct_answer: "Toto",
    incorrect_answers: ["Foreigner", "Steely Dan", "Journey"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Who recorded the1975 album 'Captain Fantastic and the Brown Dirt Cowboy'?",
    correct_answer: "Elton John",
    incorrect_answers: ["John Denver", "Billy Joel", "Joe Cocker"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which English guitarist has the nickname Slowhand?",
    correct_answer: "Eric Clapton",
    incorrect_answers: ["Mark Knopfler", "Jeff Beck", "Jimmy Page"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Typically, how many keys are on a piano?",
    correct_answer: "88",
    incorrect_answers: ["24", "12", "96"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Which of these songs was released in 1996?",
    correct_answer: "The Smashing Pumpkins - 1979",
    incorrect_answers: [
      "Prince - 1999",
      "James Blunt - 1973",
      "David Bowie - 1984"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which Beatle led the way across the zebra crossing on the Abbey Road album cover?",
    correct_answer: "John",
    incorrect_answers: ["Paul", "George", "Ringo"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Which M83 album is the song Midnight City featured in?",
    correct_answer: "Hurry Up, We're Dreaming",
    incorrect_answers: ["Saturdays = Youth", "Before the Dawn Heals Us", "Junk"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which song is not by TheFatRat?",
    correct_answer: "Ascent",
    incorrect_answers: ["Monody", "Windfall", "Infinite Power!"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who was not in the band The Smiths?",
    correct_answer: "Martin Chambers",
    incorrect_answers: ["Morrissey", "Andy Rourke", "Mike Joyce"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which of these artists do NOT originate from France?",
    correct_answer: "The Chemical Brothers",
    incorrect_answers: ["Air", "Justice", "Daft Punk"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "EDM record label Monstercat is based in which country?",
    correct_answer: "Canada",
    incorrect_answers: ["United States", "Australia", "United Kingdom"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the lead singer of Silverchair?",
    correct_answer: "Daniel Johns",
    incorrect_answers: ["Ben Gillies", "Chris Joannou", ""]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which brass instrument has the lowest pitch in an orchestra?",
    correct_answer: "Tuba",
    incorrect_answers: ["Trumpet", "Saxophone", "Trombone"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which of these is NOT a song featured on the Lockjaw EP released in 2013 by Flume & Chet Faker?",
    correct_answer: "Left Alone",
    incorrect_answers: [
      "What About Us",
      "This Song Is Not About A Girl",
      "Drop The Game"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Which of these songs is not by Tatsuro Yamashita?",
    correct_answer: "Lucky Lady Feel So Good ",
    incorrect_answers: ["Merry-Go Round", "Let's Dance Baby", "Love Talkin'"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "May 16th of every year is known as __________ Day, named after a punk band prominent in the 1990s.",
    correct_answer: "Lagwagon",
    incorrect_answers: ["Goldfinger", "Less Than Jake", "Lit"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "In Mean Girls, who has breasts that tell when it's raining?",
    correct_answer: "Karen Smith",
    incorrect_answers: ["Gretchen Weiners", "Janice Ian", "Cady Heron"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What is the real name of Canadian electronic music producer deadmau5?",
    correct_answer: "Joel Zimmerman",
    incorrect_answers: [
      "Sonny Moore",
      "Adam Richard Wiles",
      "Thomas Wesley Pentz"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these is NOT a name of an album released by American rapper Pitbull?",
    correct_answer: "Welcome to Miami",
    incorrect_answers: ["Dale", "Global Warming", "Armando"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the frontman of Muse?",
    correct_answer: "Matt Bellamy",
    incorrect_answers: ["Dominic Howard", "Thom Yorke", "Jonny Greenwood"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which 80s band is fronted by singer/guitarist Robert Smith?",
    correct_answer: "The Cure",
    incorrect_answers: ["The Smiths", "Echo & the Bunnymen", "New Order"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who recorded the album called Down to the Moon in 1986?",
    correct_answer: "Andreas Vollenweider",
    incorrect_answers: ["Jean-Michel Jarre", "Bing Crosby", "Enya"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which song in Drake's Views features Future?",
    correct_answer: "Grammys",
    incorrect_answers: ["Too Good", "Faithful", "Pop Style"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Which album was released by Kanye West in 2013?",
    correct_answer: "Yeezus",
    incorrect_answers: [
      "My Beautiful Dark Twisted Fantasy",
      "The Life of Pablo",
      "Watch the Throne"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Drink the Sea is an album by which electronic music artist?",
    correct_answer: "The Glitch Mob",
    incorrect_answers: ["Avicii", "XXYYXX", "Flux Pavilion"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "In 2006, which band released their debut album A Fever You Can't Sweat Out?",
    correct_answer: "Panic! At the Disco",
    incorrect_answers: [
      "Twenty One Pilots",
      "My Chemical Romance",
      "Fall Out Boy"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who was featured in the song Words by Feint? ",
    correct_answer: "Laura Brehm",
    incorrect_answers: ["Anna Yvette ", "Danyka Nadeau", "Veela"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "In what film was the Michael Jackson song Will You Be There featured?",
    correct_answer: "Free Willy",
    incorrect_answers: ["Sleepless in Seattle", "Men in Black", "Bad Boys"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who performed I Took A Pill In Ibiza?",
    correct_answer: "Mike Posner",
    incorrect_answers: ["Avicii", "Robbie Williams", "Harry Styles"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "How many members are in the Japanese rock band SCANDAL?",
    correct_answer: "4",
    incorrect_answers: ["5", "2", "18"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "How many copies have Metallica album Metallica (A.K.A The Black Album) sold worldwide (in Millions of Copies)?",
    correct_answer: "20.5",
    incorrect_answers: ["19.5", "22.5", "25.5"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "When did Tame Impala release their second album?",
    correct_answer: "2012",
    incorrect_answers: ["2015", "2010", "1967"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "The heavy metal band Black Sabbath hail from which English city?",
    correct_answer: "Birmingham",
    incorrect_answers: ["Manchester", "London", "Newcastle-Upon-Tyne"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which member of The Beatles narrated episodes of Thomas the Tank Engine?",
    correct_answer: "Ringo Starr",
    incorrect_answers: ["George Harrison", "John Lennon", "Paul McCartney"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "What was David Bowie's real surname?",
    correct_answer: "Jones",
    incorrect_answers: ["Johnson", "Edwards", "Carter"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Moby, an American DJ, singer, and musician, achieved worldwide success for the 1999 release of which of the following albums?",
    correct_answer: "Play",
    incorrect_answers: ["Everything Is Wrong", "Moby", "18"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "What is the stage name of New Zealand singer Phillipa Pip Brown?",
    correct_answer: "Ladyhawke",
    incorrect_answers: ["Lorde", "Kesha", "Anika Moa"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "What was the name of Pink Floyd's first studio album?",
    correct_answer: "The Piper at the Gates of Dawn",
    incorrect_answers: ["Ummagumma", "More", "Atom Heart Mother"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these is not a single by Pink Floyd guitarist, David Gilmour?",
    correct_answer: "Sunset Strip",
    incorrect_answers: ["Rattle That Lock", "Blue Light", "Arnold Layne"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which of the following songs did Elton John perform following Princess Diane's passing?",
    correct_answer: "Candles in the Wind",
    incorrect_answers: [
      "I Guess That's Why They Call It The Blues",
      "Your Song",
      "Island Girl"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "When was the 3rd album Notes from the Underground of the band Hollywood Undead released?",
    correct_answer: "2013",
    incorrect_answers: ["2011", "2014", "2009"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Bj&ouml;rk's Unison contains a sample of which Oval song?",
    correct_answer: "Aero Deck",
    incorrect_answers: ["Textuell", "Panorama", "Do While"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "In which year was the Megadeth album Peace Sells... but Who's Buying? released?",
    correct_answer: "1986",
    incorrect_answers: ["1979", "1987", "1986"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "From which country does the piano originate?",
    correct_answer: "Italy",
    incorrect_answers: ["Germany", "Austria", "France"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who performed the guitar solo on Michael Jackson's hit Beat It?",
    correct_answer: "Eddie Van Halen",
    incorrect_answers: ["Steve Vai", "Kirk Hammett", "Zakk Wylde"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which Apollo mission was the first one to land on the Moon?",
    correct_answer: "Apollo 11",
    incorrect_answers: ["Apollo 10", "Apollo 9", "Apollo 13"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which of these bones is hardest to break?",
    correct_answer: "Femur",
    incorrect_answers: ["Cranium", "Humerus", "Tibia"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the colour of unoxidized blood?",
    correct_answer: "Red",
    incorrect_answers: ["Blue", "Purple", "Green"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which is the chemical name of H2O?",
    correct_answer: "Dihydrogen Monoxide",
    incorrect_answers: [
      "Ammonium chloride",
      "Anhydrous Sodium Carbonate",
      "Manganese dioxide"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many objects are equivalent to one mole?",
    correct_answer: "6.022 x 10^23",
    incorrect_answers: ["6.002 x 10^22", "6.022 x 10^22", "6.002 x 10^23"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which element has the chemical symbol 'Fe'?",
    correct_answer: "Iron",
    incorrect_answers: ["Gold", "Silver", "Tin"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "Rhinoplasty is a surgical procedure on what part of the human body?",
    correct_answer: "Nose",
    incorrect_answers: ["Ears", "Chin", "Neck"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which type of rock is created by intense heat AND pressure?",
    correct_answer: "Metamorphic",
    incorrect_answers: ["Sedimentary", "Igneous", "Diamond"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "This element, when overcome with extreme heat and pressure, creates diamonds.",
    correct_answer: "Carbon",
    incorrect_answers: ["Nitrogen", "Oxygen", "Hydrogen"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the elemental symbol for mercury?",
    correct_answer: "Hg",
    incorrect_answers: ["Me", "Mc", "Hy"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the hottest planet in the Solar System?",
    correct_answer: "Venus",
    incorrect_answers: ["Mars", "Mercury", "Jupiter"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the first element on the periodic table?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Oxygen", "Lithium"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "What common name is given to the medial condition, tibial stress syndrome (MTSS)?",
    correct_answer: "Shin Splints",
    incorrect_answers: ["Tennis Elbow", "Carpal Tunnel", "Housemaid's Knee"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
    correct_answer: "8 Minutes",
    incorrect_answers: ["6 Minutes", "2 Minutes", "12 Minutes"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which chemical element has the lowest boiling point?",
    correct_answer: "Helium",
    incorrect_answers: ["Hydrogen", "Neon", "Nitrogen"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the molecular formula of Glucose?",
    correct_answer: "C6H12O6",
    incorrect_answers: ["C2H4O2", "K+", "CH4"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many planets make up our Solar System?",
    correct_answer: "8",
    incorrect_answers: ["7", "9", "6"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which element has the atomic number of 7?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Hydrogen", "Neon"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "All the following metal elements are liquids at or near room temperature EXCEPT:",
    correct_answer: "Beryllium",
    incorrect_answers: ["Gallium", "Caesium", "Mercury"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "The Tibia is found in which part of the body?",
    correct_answer: "Leg",
    incorrect_answers: ["Arm", "Hand", "Head"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Who developed the first successful polio vaccine in the 1950s?",
    correct_answer: "Jonas Salk",
    incorrect_answers: ["John F. Enders", "Thomas Weller", "Frederick Robbins"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is isobutylphenylpropanoic acid more commonly known as?",
    correct_answer: "Ibuprofen",
    incorrect_answers: ["Morphine", "Ketamine", "Aspirin"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the chemical formula for ammonia?",
    correct_answer: "NH3",
    incorrect_answers: ["CO2", "NO3", "CH4"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which of these chemical compounds is NOT found in gastric acid?",
    correct_answer: "Sulfuric acid",
    incorrect_answers: [
      "Hydrochloric acid",
      "Potassium chloride",
      "Sodium chloride"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What does DNA stand for?",
    correct_answer: "Deoxyribonucleic Acid",
    incorrect_answers: [
      "Deoxyribogenetic Acid",
      "Deoxyribogenetic Atoms",
      "Detoxic Acid"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The medical condition osteoporosis affects which part of the body?",
    correct_answer: "Bones",
    incorrect_answers: ["Skin", "Brain", "Heart"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the atomic number of the element Strontium?",
    correct_answer: "38",
    incorrect_answers: ["73", "47", "11"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Who is the chemical element Curium named after?",
    correct_answer: "Marie & Pierre Curie",
    incorrect_answers: [
      "The Curiosity Rover",
      "Curious George",
      "Stephen Curry"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "The Big Bang Theory was first theorized by a priest of what religious ideology?",
    correct_answer: "Catholic",
    incorrect_answers: ["Christian", "Jewish", "Islamic"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "After which Danish city is the 72th element on the periodic table named?",
    correct_answer: "Copenhagen",
    incorrect_answers: ["Odense", "Herning", "Skagen"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What does the yellow diamond on the NFPA 704 fire diamond represent?",
    correct_answer: "Reactivity",
    incorrect_answers: ["Health", "Flammability", "Radioactivity"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "The element involved in making human blood red is which of the following?",
    correct_answer: "Iron",
    incorrect_answers: ["Copper", "Iridium", "Cobalt"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "The asteroid belt is located between which two planets?",
    correct_answer: "Mars and Jupiter",
    incorrect_answers: [
      "Jupiter and Saturn",
      "Mercury and Venus",
      "Earth and Mars"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the molecular formula of Ozone?",
    correct_answer: "O3",
    incorrect_answers: ["C6H2O6", "N2O", "SO4"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "The core of the Sun can reach which temperature?",
    correct_answer: "27&deg; Million F (15&deg; Million C)",
    incorrect_answers: [
      "938,000&deg; F (521093.3&deg; C)",
      "8&deg; Billion F (&deg;4.4 Billion C)",
      "Absolute Zero (Both F and C)"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
    correct_answer: "Interphase",
    incorrect_answers: ["Prophase", "Stasis", "Telophase"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which of these elements on the Periodic Table is a Noble Gas?",
    correct_answer: "Neon",
    incorrect_answers: ["Potassium", "Iodine", "Colbalt"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many chromosomes are in your body cells?",
    correct_answer: "23",
    incorrect_answers: ["21", "22", "24"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Who made the discovery of X-rays?",
    correct_answer: "Wilhelm Conrad R&ouml;ntgen",
    incorrect_answers: ["Thomas Alva Edison", "James Watt", "Albert Einstein"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "71% of the Earth's surface is made up of",
    correct_answer: "Water",
    incorrect_answers: ["Deserts", "Continents", "Forests"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What does LASER stand for?",
    correct_answer:
      "Light amplifiaction by stimulated eminission of radioation",
    incorrect_answers: [
      "Lite analysing by stereo ecorazer",
      "Light ampiflier by standby energy of radio",
      "Life antimatter by standing entry of range"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Botanically speaking, which of these fruits is NOT a berry?",
    correct_answer: "Strawberry",
    incorrect_answers: ["Blueberry", "Banana", "Concord Grape"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the unit of electrical resistance?",
    correct_answer: "Ohm",
    incorrect_answers: ["Mho", "Tesla", "Joule"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the unit of electrical inductance?",
    correct_answer: "Henry",
    incorrect_answers: ["Weber", "Coulomb", "Mho"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Burning which of these metals will produce a bright white flame?",
    correct_answer: "Magnesium",
    incorrect_answers: ["Copper", "Lithium", "Lead"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Which desert is the only desert in the world where the Saguaro cactus grows indigenously?",
    correct_answer: "The Sonoran Desert",
    incorrect_answers: [
      "The Gobi Desert",
      "The Yuma Desert",
      "The Arabian Desert"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "In Psychology, which need appears highest in the Maslow's hierarchy of needs pyramid?",
    correct_answer: "Esteem",
    incorrect_answers: ["Love", "Safety", "Physiological"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What do you study if you are studying entomology?",
    correct_answer: "Insects",
    incorrect_answers: ["Humans", "the Brain", "Fish"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Which of the following is the term for surgical complications resulting from surgical sponges left inside the patient's body?",
    correct_answer: "Gossypiboma",
    incorrect_answers: ["Gongoozler", "Jentacular", "Meupareunia"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur? ",
    correct_answer: "Richard Branson",
    incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "This field is sometimes known as The Dismal Science.&rdquo;",
    correct_answer: "Economics",
    incorrect_answers: ["Philosophy", "Politics", "Physics"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What does a milliner make and sell?",
    correct_answer: "Hats",
    incorrect_answers: ["Shoes", "Belts", "Shirts"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which river flows through the Scottish city of Glasgow?",
    correct_answer: "Clyde",
    incorrect_answers: ["Tay", "Dee", "Tweed"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the most common surname Wales?",
    correct_answer: "Jones",
    incorrect_answers: ["Williams", "Davies", "Evans"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "When was the Declaration of Independence approved by the Second Continental Congress?",
    correct_answer: "July 2, 1776",
    incorrect_answers: ["May 4, 1776", "June 4, 1776", "July 4, 1776"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the first book of the Old Testament?",
    correct_answer: "Genesis",
    incorrect_answers: ["Exodus", "Leviticus", "Numbers"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Area 51 is located in which US state?",
    correct_answer: "Nevada",
    incorrect_answers: ["Arizona", "New Mexico", "Utah"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which sign of the zodiac is represented by the Crab?",
    correct_answer: "Cancer",
    incorrect_answers: ["Libra", "Virgo", "Sagittarius"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What does the G mean in G-Man?",
    correct_answer: "Government",
    incorrect_answers: ["Going", "Ghost", "Geronimo"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which essential condiment is also known as Japanese horseradish?",
    correct_answer: "Wasabi ",
    incorrect_answers: ["Mentsuyu", "Karashi", "Ponzu"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "The words bungalow and shampoo originate from the languages of which country?",
    correct_answer: "India",
    incorrect_answers: ["Papua New Guinea", "Ethiopia", "China"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the name of the very first video uploaded to YouTube?",
    correct_answer: "Me at the zoo",
    incorrect_answers: [
      "tribute",
      "carrie rides a truck",
      "Her new puppy from great grandpa vern."
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "In 2013 how much money was lost by Nigerian scams?",
    correct_answer: "$12.7 Billion",
    incorrect_answers: ["$95 Million", "$956 Million", "$2.7 Billion"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What year was Queen Elizabeth II born?",
    correct_answer: "1926",
    incorrect_answers: ["1923", "1929", "1930"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
    correct_answer: "Niagara Mohawk Building",
    incorrect_answers: ["Taipei 101", "One Detroit Center", "Westendstrasse 1"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012?",
    correct_answer: "Bullfighting",
    incorrect_answers: ["Fiestas", "Flamenco", "Mariachi"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which of these is the name of a Japanese system of alternative medicine, literally meaning finger pressure?",
    correct_answer: "Shiatsu",
    incorrect_answers: ["Ukiyo", "Majime", "Ikigai"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the nickname of the US state of California?",
    correct_answer: "Golden State",
    incorrect_answers: ["Sunshine State", "Bay State", "Treasure State"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    correct_answer: "Spruce Goose",
    incorrect_answers: ["Noah's Ark", "Fat Man", "Trojan Horse"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What is the name given to Indian food cooked over charcoal in a clay oven?",
    correct_answer: "Tandoori",
    incorrect_answers: ["Biryani", "Pani puri", "Tiki masala"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the German word for spoon?",
    correct_answer: "L&ouml;ffel",
    incorrect_answers: ["Gabel", "Messer", "Essst&auml;bchen"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the Swedish word for window?",
    correct_answer: "F&ouml;nster",
    incorrect_answers: ["H&aring;l", "Sk&auml;rm", "Ruta"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Which musician has collaborated with American producer Porter Robinson and released the 2016 song Shelter?",
    correct_answer: "Madeon",
    incorrect_answers: ["Mat Zo", "deadmau5", "Zedd"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "The Swedish word Grunka means what in English?",
    correct_answer: "Thing",
    incorrect_answers: ["People", "Place", "Pineapple"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
    correct_answer: "India",
    incorrect_answers: ["United States of America", "Soviet Union", "Poland"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Who is the founder of The Lego Group?",
    correct_answer: "Ole Kirk Christiansen",
    incorrect_answers: [
      " Jens Niels Christiansen",
      "Kirstine Christiansen",
      " Gerhardt Kirk Christiansen"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Five dollars is worth how many nickles?",
    correct_answer: "100",
    incorrect_answers: ["50", "25", "69"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the last letter of the Greek alphabet?",
    correct_answer: "Omega",
    incorrect_answers: ["Mu", "Epsilon", "Kappa"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What character was once considered to be the 27th letter of the alphabet?",
    correct_answer: "Ampersand",
    incorrect_answers: ["Interrobang", "Tilde", "Pilcrow"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which one of these is not a typical European sword design?",
    correct_answer: "Scimitar",
    incorrect_answers: ["Falchion", "Ulfberht", "Flamberge"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "When was Nintendo founded?",
    correct_answer: "September 23rd, 1889",
    incorrect_answers: [
      "October 19th, 1891",
      "March 4th, 1887",
      "December 27th, 1894"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "The new One World Trade Center in Manhattan, New York City was designed by which architect? ",
    correct_answer: "David Childs",
    incorrect_answers: ["Bjarke Ingels", "Michael Arad", "Fumihiko Maki"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "According to Sherlock Holmes, If you eliminate the impossible, whatever remains, however improbable, must be the...",
    correct_answer: "Truth",
    incorrect_answers: ["Answer", "Cause", "Source"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the name of Poland in Polish?",
    correct_answer: "Polska",
    incorrect_answers: ["Pupcia", "Polszka", "Poland"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "The New York Times slogan is, All the News That's Fit to",
    correct_answer: "Print",
    incorrect_answers: ["Digest", "Look", "Read"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?",
    correct_answer: "Center Parcs",
    incorrect_answers: ["Yelloh Village", "Keycamp", "Villa Plus"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What was the soft drink Pepsi originally introduced as?",
    correct_answer: "Brad's Drink",
    incorrect_answers: ["Pepsin Pop", "Carolina Cola", "Pepsin Syrup"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What color is the Ex in FedEx Ground?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Light Blue", "Orange"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "How tall is the Burj Khalifa?",
    correct_answer: "2,722 ft",
    incorrect_answers: ["2,717 ft", "2,546 ft", "3,024 ft"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What year was the RoboSapien toy robot released?",
    correct_answer: "2004",
    incorrect_answers: ["2000", "2001", "2006"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Where does water from Poland Spring water bottles come from?",
    correct_answer: "Maine, United States",
    incorrect_answers: ["Hesse, Germany", "Masovia, Poland", "Bavaria, Poland"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "In a 1994 CBS interview, Microsoft co-founder Bill Gates performed what unusual trick on camera?",
    correct_answer: "Jumping over an office chair",
    incorrect_answers: [
      "Jumping backwards over a desk",
      "Standing on his head",
      "Typing on a keyboard during a handstand"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Apple co-founder Steve Jobs died from complications of which form of cancer?",
    correct_answer: "Pancreatic",
    incorrect_answers: ["Bone", "Liver", "Stomach"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Who founded the Khan Academy?",
    correct_answer: "Sal Khan",
    incorrect_answers: ["Ben Khan", "Kitt Khan", "Adel Khan"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What machine element is located in the center of fidget spinners?",
    correct_answer: "Bearings",
    incorrect_answers: ["Axles", "Gears", "Belts"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What company developed the vocaloid Hatsune Miku?",
    correct_answer: "Crypton Future Media",
    incorrect_answers: ["Sega", "Sony", "Yamaha Corporation"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary rainbow staff surrounded by an ever glowing rainbow aura?",
    correct_answer: "The Bifrost",
    incorrect_answers: ["Bolt", "Kudzu", "The Moot"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which company's original slogan was Don't be evil?",
    correct_answer: "Google",
    incorrect_answers: ["Apple", "Yahoo", "Microsoft"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the world's most expensive spice by weight?",
    correct_answer: "Saffron",
    incorrect_answers: ["Cinnamon", "Cardamom", "Vanilla"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What does a milliner make and sell?",
    correct_answer: "Hats",
    incorrect_answers: ["Shoes", "Belts", "Shirts"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "What type of dog is 'Handsome Dan', the mascot of Yale University?",
    correct_answer: "Bulldog",
    incorrect_answers: ["Yorkshire Terrier", "Boxer", "Pug"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the most common surname Wales?",
    correct_answer: "Jones",
    incorrect_answers: ["Williams", "Davies", "Evans"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the first book of the Old Testament?",
    correct_answer: "Genesis",
    incorrect_answers: ["Exodus", "Leviticus", "Numbers"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What is the defining characteristic of someone who is described as hirsute?",
    correct_answer: "Hairy",
    incorrect_answers: ["Rude", "Funny", "Tall"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "How would one say goodbye in Spanish?",
    correct_answer: "Adios",
    incorrect_answers: [" Hola", "Au Revoir", "Salir"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the largest organ of the human body?",
    correct_answer: "Skin",
    incorrect_answers: ["Heart", "large Intestine", "Liver"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "On a dartboard, what number is directly opposite No. 1?",
    correct_answer: "19",
    incorrect_answers: ["20", "12", "15"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What does the G mean in G-Man?",
    correct_answer: "Government",
    incorrect_answers: ["Going", "Ghost", "Geronimo"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "The words bungalow and shampoo originate from the languages of which country?",
    correct_answer: "India",
    incorrect_answers: ["Papua New Guinea", "Ethiopia", "China"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the name of the Jewish New Year?",
    correct_answer: "Rosh Hashanah",
    incorrect_answers: ["Elul", "New Year", "Succoss"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
    correct_answer: "Yale University",
    incorrect_answers: [
      "Princeton University",
      "Harvard University",
      "Columbia University"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which one of the following rhythm games was made by Harmonix?",
    correct_answer: "Rock Band",
    incorrect_answers: [
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Which of the following is not another name for the eggplant?",
    correct_answer: "Potimarron",
    incorrect_answers: ["Brinjal", "Guinea Squash", "Melongene"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which of these companies does NOT manufacture automobiles?",
    correct_answer: "Ducati",
    incorrect_answers: ["Nissan", "GMC", "Fiat"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Who is a co-founder of music streaming service Spotify?",
    correct_answer: "Daniel Ek",
    incorrect_answers: [
      "Sean Parker",
      "Felix Miller",
      "Michael Breidenbruecker"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What was the destination of the missing flight MH370?",
    correct_answer: "Beijing",
    incorrect_answers: ["Kuala Lumpur", "Singapore", "Tokyo"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "A factiod is what?",
    correct_answer: "A falsehood",
    incorrect_answers: ["Useless trivia", "A tiny fact", "A scientific figure"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the unit of currency in Laos?",
    correct_answer: "Kip",
    incorrect_answers: ["Ruble", "Konra", "Dollar"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Sciophobia is the fear of what?",
    correct_answer: "Shadows",
    incorrect_answers: ["Eating", "Bright lights", "Transportation"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What alcoholic drink is mainly made from juniper berries?",
    correct_answer: "Gin",
    incorrect_answers: ["Vodka", "Rum", "Tequila"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the nickname of the US state of California?",
    correct_answer: "Golden State",
    incorrect_answers: ["Sunshine State", "Bay State", "Treasure State"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which of these colours is NOT featured in the logo for Google?",
    correct_answer: "Pink",
    incorrect_answers: ["Yellow", "Blue", "Green"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the romanized Japanese word for university?",
    correct_answer: "Daigaku",
    incorrect_answers: ["Toshokan", "Jimusho", "Shokudou"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What is the romanized Chinese word for airplane?",
    correct_answer: "Feiji",
    incorrect_answers: ["Qiche", "Zongxian", "Huojian"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
    correct_answer: "India",
    incorrect_answers: ["United States of America", "Soviet Union", "Poland"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "According to the United States' CDC, one in how many Americans die annually due to smoking?",
    correct_answer: "Five",
    incorrect_answers: ["Twenty", "Ten", "One hundred"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Who is the founder of The Lego Group?",
    correct_answer: "Ole Kirk Christiansen",
    incorrect_answers: [
      " Jens Niels Christiansen",
      "Kirstine Christiansen",
      " Gerhardt Kirk Christiansen"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the last letter of the Greek alphabet?",
    correct_answer: "Omega",
    incorrect_answers: ["Mu", "Epsilon", "Kappa"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Who is depicted on the US hundred dollar bill?",
    correct_answer: "Benjamin Franklin",
    incorrect_answers: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Amsterdam Centraal station is twinned with what station?",
    correct_answer: "London Liverpool Street",
    incorrect_answers: [
      "Frankfurt (Main) Hauptbahnhof",
      "Paris Gare du Nord",
      "Brussels Midi"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "How many calories are in a 355 ml can of Pepsi Cola?",
    correct_answer: "150",
    incorrect_answers: ["200", "100", "155"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What direction does the Statue of Liberty face?",
    correct_answer: "Southeast",
    incorrect_answers: ["Southwest", "Northwest", "Northeast"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What year was Apple Inc. founded?",
    correct_answer: "1976",
    incorrect_answers: ["1978", "1980", "1974"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a Guardians of the Galaxy themed ride?",
    correct_answer: "Twilight Zone Tower of Terror",
    incorrect_answers: [
      "The Haunted Mansion",
      "Pirates of the Caribbean",
      "Peter Pan's Flight"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Who invented Pastafarianism?",
    correct_answer: "Bobby Henderson",
    incorrect_answers: ["Eric Tignor", "Bill Nye", "Zach Soldi"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Virtual reality company Oculus VR lost which of it's co-founders in a freak car accident in 2013?",
    correct_answer: "Andrew Scott Reisse",
    incorrect_answers: ["Nate Mitchell", "Jack McCauley", "Palmer Luckey"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What was the original name of the search engine Google?",
    correct_answer: "BackRub",
    incorrect_answers: ["CatMassage", "SearchPro", "Netscape Navigator"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Who founded the Khan Academy?",
    correct_answer: "Sal Khan",
    incorrect_answers: ["Ben Khan", "Kitt Khan", "Adel Khan"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is Tasmania?",
    correct_answer: "An Australian State",
    incorrect_answers: [
      "A flavor of Ben and Jerry's ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What company developed the vocaloid Hatsune Miku?",
    correct_answer: "Crypton Future Media",
    incorrect_answers: ["Sega", "Sony", "Yamaha Corporation"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Named after the mallow flower, mauve is a shade of what?",
    correct_answer: "Purple",
    incorrect_answers: ["Red", "Brown", "Pink"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which item of clothing is usually worn by a Scotsman at a wedding?",
    correct_answer: "Kilt",
    incorrect_answers: ["Skirt", "Dress", "Rhobes"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which of these words means idle spectator?",
    correct_answer: "Gongoozler",
    incorrect_answers: ["Gossypiboma", "Jentacular", "Meupareunia"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which candy is NOT made by Mars?",
    correct_answer: "Almond Joy",
    incorrect_answers: ["M&M's", "Twix", "Snickers"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which company's original slogan was Don't be evil?",
    correct_answer: "Google",
    incorrect_answers: ["Apple", "Yahoo", "Microsoft"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Nephelococcygia is the practice of doing what?",
    correct_answer: "Finding shapes in clouds",
    incorrect_answers: [
      "Sleeping with your eyes open",
      "Breaking glass with your voice",
      "Swimming in freezing water"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "The Quadrangularis Reversum is best described as which of the following?",
    correct_answer: "A percussion instrument",
    incorrect_answers: [
      "A building in Oxford University",
      "A chess move",
      "A geometric theorem"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Where is Apple Inc. headquartered?",
    correct_answer: "Cupertino, California",
    incorrect_answers: [
      "Redwood City, California",
      "Redmond, Washington",
      "Santa Monica, CA"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the A Song of Ice And Fire fantasy novel series?",
    correct_answer: "George R. R. Martin",
    incorrect_answers: ["George Lucas", "George Orwell", "George Eliot"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "George Orwell wrote this book, which is often considered a statement on government oversight.",
    correct_answer: "1984",
    incorrect_answers: [
      "The Old Man and the Sea",
      "Catcher and the Rye",
      "To Kill a Mockingbird"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "Which author and poet famously wrote the line, The female of the species is more deadly than the male?",
    correct_answer: "Rudyard Kipling",
    incorrect_answers: [
      "Edgar Allan Poe",
      "William Shakespeare",
      "William Wordsworth"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which famous book is sub-titled 'The Modern Prometheus'?",
    correct_answer: "Frankenstein",
    incorrect_answers: [
      "Dracula",
      "The Strange Case of Dr. Jekyll and Mr. Hyde ",
      "The Legend of Sleepy Hollow"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the book The Martian, how long was Mark Watney trapped on Mars (in Sols)?",
    correct_answer: "549 Days",
    incorrect_answers: ["765 Days", "401 Days", "324 Days"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the 1967 horror novel Rosemary's Baby?",
    correct_answer: "Ira Levin",
    incorrect_answers: ["Stephen King", "Robert Bloch", "Mary Shelley"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
    correct_answer: "Oswald",
    incorrect_answers: ["James", "Harold", "Christopher"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
    correct_answer: "Astoria Greengrass",
    incorrect_answers: [
      "Pansy Parkinson",
      "Millicent Bulstrode",
      "Hermione Granger"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "What is Hermione Granger's middle name?",
    correct_answer: "Jean",
    incorrect_answers: ["Jane", "Emma", "Jo"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
    correct_answer: "Gloin",
    incorrect_answers: ["Thorin Oakenshield", "Bombur", "Dwalin"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
    correct_answer: "The Artful Dodger",
    incorrect_answers: ["Fagin", "Bull's-eye", "Mr. Fang"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What is the fourth book of the Old Testament?",
    correct_answer: "Numbers",
    incorrect_answers: ["Genesis", "Exodus", "Leviticus"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Abel Magwitch is a character from which Charles Dickens novel?",
    correct_answer: "Great Expectations",
    incorrect_answers: [
      "The Pickwick Papers",
      "Nicholas Nickleby",
      "Oliver Twist"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Green Eggs And Ham is a book by which author?",
    correct_answer: "Dr. Seuss",
    incorrect_answers: ["Beatrix Potter", "Roald Dahl", "A.A. Milne"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "Which famous spy novelist wrote the childrens' story Chitty-Chitty-Bang-Bang?",
    correct_answer: "Ian Fleming",
    incorrect_answers: ["Joseph Conrad", "John Buchan", "Graham Greene"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What was the name of the Mysterious Island, in Jules Verne's The Mysterious Island?",
    correct_answer: "Lincoln Island",
    incorrect_answers: [
      "Vulcania Island",
      "Prometheus Island",
      "Neptune Island"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "By what name was the author Eric Blair better known?",
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the children's story The Little Match Girl?",
    correct_answer: "Hans Christian Andersen",
    incorrect_answers: ["Charles Dickens", "Lewis Carroll", "Oscar Wilde"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "How many Harry Potter books are there?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "6"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What's Harry Potter's dad's name?",
    correct_answer: "James Potter",
    incorrect_answers: ["Joey Potter", "Frank Potter", "Hairy Potter Sr."]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "The novel Jane Eyre was written by what author? ",
    correct_answer: "Charlotte Bronte",
    incorrect_answers: ["Emily Bronte", "Jane Austen", "Louisa May Alcott"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "The novel Of Mice And Men was written by what author? ",
    correct_answer: "John Steinbeck ",
    incorrect_answers: ["George Orwell", "Mark Twain ", "Harper Lee"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who wrote the young adult novel The Fault in Our Stars?",
    correct_answer: "John Green",
    incorrect_answers: ["Stephenie Meyer", "Suzanne Collins", "Stephen Chbosky"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "Which of these does Charlie NOT read in The Perks of Being a Wallflower?",
    correct_answer: "The Grapes of Wrath",
    incorrect_answers: ["Hamlet", "The Great Gatsby", "Peter Pan"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who was the author of the 1954 novel, Lord of the Flies?",
    correct_answer: "William Golding",
    incorrect_answers: ["Stephen King", "F. Scott Fitzgerald", "Hunter Fox"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "J.K. Rowling completed Harry Potter and the Deathly Hallows in which hotel in Edinburgh, Scotland?",
    correct_answer: "The Balmoral",
    incorrect_answers: [
      "The Dunstane Hotel",
      "Hotel Novotel",
      "Sheraton Grand Hotel & Spa"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In the year 1818, novelist Mary Shelly is credited with writing a fiction novel and creating this infamous character.",
    correct_answer: "Frankenstein's monster",
    incorrect_answers: ["Dracula", "The Thing", "The Invisible Man"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer's Stone?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Spike", "Poofy", "Spot"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "The title of Adolf Hitler's autobiography Mein Kampf is what when translated to English?",
    correct_answer: "My Struggle",
    incorrect_answers: ["My Hatred", "My Sadness", "My Desire"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the protagonist of J.D. Salinger's novel Catcher in the Rye?",
    correct_answer: "Holden Caulfield",
    incorrect_answers: ["Fletcher Christian", "Jay Gatsby", "Randall Flagg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?",
    correct_answer: "A Study in Scarlet",
    incorrect_answers: [
      "The Sign of the Four",
      "A Case of Identity",
      "The Doings of Raffles Haw"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "Which American author was also a budding travel writer and wrote of his adventures with his dog Charley?",
    correct_answer: "John Steinbeck",
    incorrect_answers: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "William Faulkner"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "According to The Hitchhiker's Guide to the Galaxy book, the answer to life, the universe and everything else is...",
    correct_answer: "42",
    incorrect_answers: ["Loving everyone around you", "Chocolate", "Death"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In the Harry Potter novels, what must a Hogwarts student do to enter the Ravenclaw Common Room?",
    correct_answer: "Answer a riddle",
    incorrect_answers: [
      "Rhythmically tap barrels with a wand",
      "Speak a password",
      "Knock in sequence"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What is the name of the gang that Ponyboy is a part of in the book, The Outsiders?",
    correct_answer: "The Greasers",
    incorrect_answers: ["The Outsiders", "The Mafia", "The Socs"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "The book Fahrenheit 451 was written by whom?",
    correct_answer: "Ray Bradbury",
    incorrect_answers: [
      "R. L. Stine",
      "Wolfgang Amadeus Mozart",
      "Stephen King"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Which of the following is NOT a work done by Shakespeare?",
    correct_answer: "Trial of Temperance",
    incorrect_answers: ["Measure For Measure", "Titus Andronicus", "Cymbeline"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What is the name of Sherlock Holmes's brother?",
    correct_answer: "Mycroft Holmes",
    incorrect_answers: [
      "Mederi Holmes",
      "Martin Holmes",
      "Herbie Hancock Holmes"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What book series published by Jim Butcher follows a wizard in modern day Chicago?",
    correct_answer: "The Dresden Files",
    incorrect_answers: [
      "A Hat in Time",
      "The Cinder Spires",
      "My Life as a Teenage Wizard"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What was the last message of the Dolphins in The Hitchhiker's Guide to the Galaxy?",
    correct_answer: "So long, and thanks for all the fish.",
    incorrect_answers: [
      "The answer is 42.",
      "Land of the brave.",
      "Goodbye cruel world!"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in Jurassic Park?",
    correct_answer: "1992 Toyota Land Cruiser",
    incorrect_answers: [
      "1992 Jeep Wrangler YJ Sahar",
      "1992 Ford Explorer XLT",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the book series Odd Thomas, Danny Jessup has what genetic disease? ",
    correct_answer: " Osteogenesis Imperfecta",
    incorrect_answers: [
      "Spinocerebellar ataxia",
      "Adrenoleukodystrophy",
      "Cystic Fibrosis"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In Margaret Atwood's The Handmaid's Tale, what is Offred's real name is implied to be?",
    correct_answer: "June",
    incorrect_answers: ["August", "April", "May"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In Little Women, which of the March sisters married Laurie?",
    correct_answer: "Amy",
    incorrect_answers: ["Beth", "Jo", "Meg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Antiquities, Ice Age, and Alliances expansions take place on which continent?",
    correct_answer: "Terisiare",
    incorrect_answers: ["Aerona", "Shiv", "Jamuraa"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In Alice in Wonderland, what is the name of Alice's kitten?",
    correct_answer: "Dinah",
    incorrect_answers: ["Oscar", "Heath", "Smokey"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What's the second book in George R. R. Martin's 'A Song of Ice and Fire' series?",
    correct_answer: "A Clash of Kings",
    incorrect_answers: [
      "A Dance with Dragons",
      "A Storm of Swords",
      "A Feast for Crows"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In which classic novel is there a character named Homer Simpson?",
    correct_answer: "The Day of the Locust",
    incorrect_answers: ["Catch-22", "Of Mice and Men", "A Separate Peace"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    correct_answer: "SCP-173",
    incorrect_answers: ["SCP-001", "SCP-999", "SCP-1459"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which of the following sports is not part of the triathlon?",
    correct_answer: "Horse-Riding",
    incorrect_answers: ["Cycling", "Swimming", "Running"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
    correct_answer: "Jordan",
    incorrect_answers: ["Benetton", "Ferrari", "Mercedes"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "What tool lends it's name to a last-stone advantage in an end in Curling?",
    correct_answer: "Hammer",
    incorrect_answers: ["Wrench", "Drill", "Screwdriver"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What cricketing term denotes a batsman being dismissed with a score of zero?",
    correct_answer: "Duck",
    incorrect_answers: ["Bye", "Beamer", "Carry"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of these teams isn't a member of the NHL's Original Six era?",
    correct_answer: "Philadelphia Flyers",
    incorrect_answers: [
      "New York Rangers",
      "Toronto Maple Leafs",
      "Boston Bruins"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the nickname of Northampton town's rugby union club?",
    correct_answer: "Saints",
    incorrect_answers: ["Harlequins", "Saracens", "Wasps"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In what sport is a shuttlecock used?",
    correct_answer: "Badminton",
    incorrect_answers: ["Table Tennis", "Rugby", "Cricket"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team won the 2015-16 English Premier League?",
    correct_answer: "Leicester City",
    incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "A stimpmeter measures the speed of a ball over what surface?",
    correct_answer: "Golf Putting Green",
    incorrect_answers: [" Football Pitch", "Cricket Outfield", "Pinball Table"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which Formula One driver was nicknamed 'The Professor'?",
    correct_answer: "Alain Prost",
    incorrect_answers: ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "How many scoring zones are there on a conventional dart board?",
    correct_answer: "82",
    incorrect_answers: ["62", "42", "102"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "In a game of snooker, what colour ball is worth 3 points?",
    correct_answer: "Green",
    incorrect_answers: ["Yellow", "Brown", "Blue"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In baseball, how many fouls are an out?",
    correct_answer: "0",
    incorrect_answers: ["5", "3", "2"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "The F1 season of 1994 is remembered for what tragic event?",
    correct_answer: "Death of Ayrton Senna (San Marino)",
    incorrect_answers: [
      "The Showdown (Australia)",
      "Verstappen on Fire (Germany)",
      "Schumacher's Ban (Britain)"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "The Rio 2016 Summer Olympics held it's closing ceremony on what date?",
    correct_answer: "August 21",
    incorrect_answers: ["August 23", "August 19", "August 17"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which country will host the 2020 Summer Olympics?",
    correct_answer: "Japan",
    incorrect_answers: ["China", "Australia", "Germany"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which country is hosting the 2018 FIFA World Cup?",
    correct_answer: "Russia",
    incorrect_answers: ["Germany", "United States", "Saudi Arabia"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which country is hosting the 2022 FIFA World Cup?",
    correct_answer: "Qatar",
    incorrect_answers: ["Uganda", "Vietnam", "Bolivia"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Who won the 2015 Formula 1 World Championship?",
    correct_answer: "Lewis Hamilton",
    incorrect_answers: ["Nico Rosberg", "Sebastian Vettel", "Jenson Button"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "Which driver has been the Formula 1 world champion for a record 7 times?",
    correct_answer: "Michael Schumacher",
    incorrect_answers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which team was the 2015-2016 NBA Champions?",
    correct_answer: "Cleveland Cavaliers",
    incorrect_answers: [
      "Golden State Warriors",
      "Toronto Raptors",
      "Oklahoma City Thunders"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which team was the 2014-2015 NBA Champions?",
    correct_answer: "Golden State Warriors",
    incorrect_answers: [
      "Cleveland Cavaliers",
      "Houston Rockets",
      "Atlanta Hawks"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Josh Mansour is part of what NRL team?",
    correct_answer: "Penrith Panthers",
    incorrect_answers: [
      "Melbourne Storm",
      "Sydney Roosters",
      "North Queensland Cowboys"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which car manufacturer won the 2016 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Ferrari"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which car company is the only Japanese company which won the 24 Hours of Le Mans?",
    correct_answer: "Mazda",
    incorrect_answers: ["Toyota", "Subaru", "Nissan"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which Italian footballer told Neuer where he's putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which male player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "Ma Long (China)",
    incorrect_answers: [
      "Zhang Jike (China)",
      "Jun Mizutani (Japan)",
      "Vladimir Samsonov (Belarus)"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "DING Ning (China)",
    incorrect_answers: [
      "LI Xiaoxia (China)",
      "Ai FUKUHARA (Japan)",
      "Song KIM (North Korea)"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which soccer team won the Copa America 2015 Championship ?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Paraguay"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which soccer team won the Copa America Centenario 2016?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Colombia"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "How many points did LeBron James score in his first NBA game?",
    correct_answer: "25",
    incorrect_answers: ["19", "69", "41"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What national team won the 2016 edition of UEFA European Championship?",
    correct_answer: "Portugal",
    incorrect_answers: ["France", "Germany", "England"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
    correct_answer: "4",
    incorrect_answers: ["1", "2", "3"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Who won the 2016 Formula 1 World Driver's Championship?",
    correct_answer: "Nico Rosberg",
    incorrect_answers: ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "In 2016, who won the Formula 1 World Constructor's Championship for the third time in a row?",
    correct_answer: "Mercedes-AMG Petronas",
    incorrect_answers: [
      "Scuderia Ferrari",
      "McLaren Honda",
      "Red Bull Racing Renault"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "Which city did the former NHL team The Nordiques originiate from?",
    correct_answer: "Quebec City",
    incorrect_answers: ["Houston", "Montreal", "New York"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "What team won the 2016 MLS Cup?",
    correct_answer: "Seattle Sounders",
    incorrect_answers: ["Colorado Rapids", "Toronto FC", "Montreal Impact"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the oldest team in the NFL?",
    correct_answer: "Arizona Cardinals",
    incorrect_answers: ["Chicago Bears", "Green Bay Packers", "New York Giants"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the oldest team in Major League Baseball?",
    correct_answer: "Atlanta Braves",
    incorrect_answers: [
      "Chicago Cubs",
      "Cincinnati Reds",
      "St. Louis Cardinals"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "What year did the New Orleans Saints win the Super Bowl?",
    correct_answer: "2009",
    incorrect_answers: ["2008", "2010", "2011"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
    correct_answer: "84.39m",
    incorrect_answers: ["100m", "100yd", "109.36yd"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team has won the most Stanley Cups in the NHL?",
    correct_answer: "Montreal Canadians",
    incorrect_answers: [
      "Chicago Blackhawks",
      "Toronto Maple Leafs",
      "Detroit Red Wings"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which portuguese island is soccer player Cristiano Ronaldo from?",
    correct_answer: "Madeira",
    incorrect_answers: ["Terceira", "Santa Maria", "Porto Santo"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "What is the full name of the footballer Cristiano Ronaldo?",
    correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
    incorrect_answers: [
      "Cristiano Ronaldo los Santos Diego",
      "Cristiano Armando Diego Ronaldo",
      "Cristiano Luis Armando Ronaldo"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Who won the Champions League in 1999?",
    correct_answer: "Manchester United",
    incorrect_answers: ["Barcelona", "Bayern Munich", "Liverpool"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Who won the 2015 College Football Playoff (CFP) National Championship? ",
    correct_answer: "Ohio State Buckeyes",
    incorrect_answers: [
      "Alabama Crimson Tide",
      "Clemson Tigers",
      "Wisconsin Badgers"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?",
    correct_answer: "Jose Fernandez",
    incorrect_answers: ["Jacob deGrom", "Shelby Miller", "Matt Harvey"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Why was The Green Monster at Fenway Park was originally built?",
    correct_answer: "To prevent viewing games from outside the park.",
    incorrect_answers: [
      "To make getting home runs harder.",
      "To display advertisements.",
      "To provide extra seating."
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which car manufacturer won the 2017 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Chevrolet"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "When was the first official international game played?",
    correct_answer: "1872",
    incorrect_answers: ["1880", "1863", "1865"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "When was the movie 'Con Air' released?",
    correct_answer: "1997",
    incorrect_answers: ["1985", "1999", "1990"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the film Interstellar, how long did they spend on Miller's planet?",
    correct_answer: "23 years, 4 months, and 8 days",
    incorrect_answers: [
      "15 years, 2 months, and 15 days",
      "10 months and 6 days",
      "26 years, 4 months, and 10 days"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In the 1976 film 'Taxi Driver', how many guns did Travis buy from the salesman?",
    correct_answer: "4",
    incorrect_answers: ["2", "6", "1"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
    correct_answer: "The Vikings ",
    incorrect_answers: ["The Long Ships", "Prince Valiant", "Spartacus"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What was Marilyn Monroe`s character's first name in the film Some Like It Hot?",
    correct_answer: "Sugar",
    incorrect_answers: ["Honey", "Caramel", "Candy"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Which actress danced the twist with John Travolta in 'Pulp Fiction'?",
    correct_answer: "Uma Thurman",
    incorrect_answers: ["Kathy Griffin", "Pam Grier", "Bridget Fonda"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who voiced the character Draco in the 1996 movie 'DragonHeart'?",
    correct_answer: "Sean Connery",
    incorrect_answers: ["Dennis Quaid", "Pete Postlethwaite", "Brian Thompson"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1984 movie The Terminator, what model number is the Terminator portrayed by Arnold Schwarzenegger?",
    correct_answer: "T-800",
    incorrect_answers: ["I-950", "T-888", "T-1000"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which actor played the main character in the 1990 film Edward Scissorhands?",
    correct_answer: "Johnny Depp",
    incorrect_answers: [" Clint Eastwood", "Leonardo DiCaprio", "Ben Stiller"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which movie contains the quote, Say hello to my little friend!?",
    correct_answer: "Scarface",
    incorrect_answers: ["Reservoir Dogs", "Heat", "Goodfellas"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the name of the robot in the 1951 science fiction film classic 'The Day the Earth Stood Still'?",
    correct_answer: "Gort",
    incorrect_answers: ["Robby", "Colossus", "Box"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
    correct_answer: "Auric Goldfinger",
    incorrect_answers: ["Dr. Julius No", "Rosa Klebb", "Emilio Largo"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "This movie contains the quote, Houston, we have a problem.",
    correct_answer: "Apollo 13",
    incorrect_answers: ["The Right Stuff", "Capricorn One", "Marooned"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "This movie contains the quote, Nobody puts Baby in a corner.",
    correct_answer: "Dirty Dancing",
    incorrect_answers: [
      "Three Men and a Baby",
      "Ferris Bueller's Day Off",
      "Pretty in Pink"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Which of these actors/actresses is NOT a part of the cast for the 2016 movie Suicide Squad?",
    correct_answer: "Scarlett Johansson",
    incorrect_answers: ["Jared Leto", "Will Smith", "Margot Robbie"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What did the first moving picture depict?",
    correct_answer: "A galloping horse",
    incorrect_answers: [
      "A woman in a dress",
      "A man walking",
      "A crackling fire"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Which movie includes a giant bunny-like spirit who has magic powers including growing trees?",
    correct_answer: "My Neighbor Totoro",
    incorrect_answers: ["Hop", "Rise of the Guardians", "Alice in Wonderland"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which iconic character is featured in movies such as The Enforcer, Sudden Impact, and The Dead Pool?",
    correct_answer: "Dirty Harry",
    incorrect_answers: ["Indiana Jones", "James Bond", "Harry Potter"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1994 movie Speed, what is the minimum speed the bus must go to prevent to bomb from exploding?",
    correct_answer: "50 mph",
    incorrect_answers: ["60 mph", "40 mph", "70 mph"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In what Disney movie can you spot the character Pac-Man in if you look closely enough in some scenes?",
    correct_answer: "Tron",
    incorrect_answers: ["Big Hero 6", "Fantasia", "Monsters, Inc."]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
    correct_answer: "Jackie Earle Haley",
    incorrect_answers: ["Tyler Mane", "Derek Mears", "Gunnar Hansen"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "The 1939 movie The Wizard of Oz contained a horse that changed color, what material did they use to achieve this effect?",
    correct_answer: "Gelatin",
    incorrect_answers: ["Dye", "Paint", "CGI Effect"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which movie of film director Stanley Kubrick is known to be an adaptation of a Stephen King novel?",
    correct_answer: "The Shining",
    incorrect_answers: [
      "2001: A Space Odyssey",
      " Dr. Strangelove ",
      "Eyes Wide Shut"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the correct phrase for the Latin saying Romanes Eunt Domus in Monty Python's Life of Brian?",
    correct_answer: "Romani Ite Domum",
    incorrect_answers: [
      "Romans Go Home",
      "Roxani Ite Domum",
      "Tomate Ite Domum"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who played Sgt. Gordon Elias in 'Platoon' (1986)?",
    correct_answer: "Willem Dafoe",
    incorrect_answers: ["Charlie Sheen", "Matt Damon", "Johnny Depp"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In Jurassic World, what is the name of the dinosaur that is a genetic hybrid?",
    correct_answer: "Indominus Rex",
    incorrect_answers: ["Mosasaurus", "Pteranodon", "Tyrannosaurus Rex "]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-lll?",
    correct_answer: "Ewan McGregor",
    incorrect_answers: ["Alec Guinness", "Hayden Christensen", "Liam Neeson"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "The 2002 film 28 Days Later is mainly set in which European country?",
    correct_answer: "United Kingdom",
    incorrect_answers: ["France", "Italy", "Germany"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In the movie Spaceballs, what are the Spaceballs attempting to steal from Planet Druidia?",
    correct_answer: "Air",
    incorrect_answers: ["The Schwartz", "Princess Lonestar", "Meatballs"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1999 movie Fight Club, which of these is not a rule of the fight club?",
    correct_answer: "Always wear a shirt",
    incorrect_answers: [
      "You do not talk about FIGHT CLUB",
      "Only two guys to a fight",
      "Fights will go on as long as they have to"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Darth Vader's famous reveal to Luke is iconic. But which of these is the right one?",
    correct_answer: "No. I am your father.",
    incorrect_answers: [
      "Luke, I am your father.",
      "You're wrong. I am your father.",
      "The truth is that I am your father."
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was the first monster to appear alongside Godzilla?",
    correct_answer: "Anguirus",
    incorrect_answers: ["King Kong", "Mothra", "King Ghidora"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "What city did the monster attack in the film, Cloverfield?",
    correct_answer: "New York, New York",
    incorrect_answers: [
      "Las Vegas, Nevada",
      "Chicago, Illinois",
      "Orlando, Florida"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In the movie Gremlins, after what time of day should you not feed Mogwai?",
    correct_answer: "Midnight",
    incorrect_answers: ["Evening", "Morning", "Afternoon"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What was the name of the protagonist in the movie Commando (1985)?",
    correct_answer: "John Matrix",
    incorrect_answers: ["Ben Richards", "Douglas Quaid", "Harry Tasker"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Who played the Cenobite called Pinhead in the original Hellraiser films?",
    correct_answer: "Doug Bradley",
    incorrect_answers: ["Doug Jones", "Doug Savant", "Doug Benson"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "The 2016 Disney animated film 'Moana' is based on which culture?",
    correct_answer: "Polynesian",
    incorrect_answers: ["Native American", "Japanese", "Nordic"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "In Star Trek Nemesis, why was Praetor Shinzon created?",
    correct_answer: "To replace Picard as a Romulan Agent",
    incorrect_answers: [
      "To destroy the Enterprise",
      "To become Picard's friend ",
      "To steal the Enterprise"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Mark Wahlberg played the titular character of which 2008 video-game adaptation?",
    correct_answer: "Max Payne",
    incorrect_answers: ["Alan Wake", "Hitman", "God Of War"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which documentary film maker wrote and starred in the film My Scientology Movie which first debuted in 2015?",
    correct_answer: "Louis Theroux",
    incorrect_answers: ["Errol Morris", "Joe Berlinger", "Adam Curtis"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In what year does Jurassic World open in the Jurassic Park universe?",
    correct_answer: "2005",
    incorrect_answers: ["2007", "2015", "2020"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In Jurassic World, which company purchases InGen and creates Jurassic World?",
    correct_answer: "Masrani Global Corporation ",
    incorrect_answers: [
      "Biology Synthetics Technologies",
      "International Genetics Incorporated",
      "International Genetic Technologies"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who directed the movie Alien?",
    correct_answer: "Ridley Scott",
    incorrect_answers: ["Christopher Nolan", "Michael Bay", "James Cameron"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What Queen song plays during the final fight scene of the film Hardcore Henry?",
    correct_answer: "Don't Stop Me Now",
    incorrect_answers: [
      "Brighton Rock",
      "Another Bites the Dust",
      "We Will Rock You"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?",
    correct_answer: "Dave",
    incorrect_answers: ["John", "Will", "Carl"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was the first feature-length computer-animated movie?",
    correct_answer: "Toy Story",
    incorrect_answers: ["Tron", "Lion king", "101 Dalmatians"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What character in the Winnie the Pooh films was added by Disney and does not appear in the original books?",
    correct_answer: "Gopher",
    incorrect_answers: ["Tigger", "Heffalumps", "Rabbit"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "What is the name of the queen's pet in A Bug's Life?",
    correct_answer: "Aphie",
    incorrect_answers: ["Flik", "Hopper", "Dot"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "In Big Hero 6, what were Baymax's motions modeled after?",
    correct_answer: "Baby penguins",
    incorrect_answers: ["Baby monkeys", "Baby ostriches", "Baby bears"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "In Big Hero 6, what fictional city is the Big Hero 6 from?",
    correct_answer: "San Fransokyo",
    incorrect_answers: ["San Tokyo", "Tokysisco", "Sankyo"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "From what show is the character James Doakes? ",
    correct_answer: "Dexter",
    incorrect_answers: [
      "Marvel's Daredevil",
      "Boardwalk Empire",
      "The Walking Dead"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What year did the television company BBC officially launch the channel BBC One?",
    correct_answer: "1936",
    incorrect_answers: ["1948", "1932", "1955"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the TV show Cheers, Sam Malone was a former relief pitcher for which baseball team?",
    correct_answer: "Boston Red Sox",
    incorrect_answers: [
      "New York Mets",
      "Baltimore Orioles",
      "Milwaukee Brewers"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which character was played by Dustin Diamond in the sitcom 'Saved by the Bell'?",
    correct_answer: "Screech",
    incorrect_answers: ["Zack", "Mr. Belding", "A.C. Slater"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, 'Top Gear'?",
    correct_answer: "Jessica",
    incorrect_answers: ["Angela", "Erica", "Sandra"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "The theme for the popular science fiction series Doctor Who was composed by who?",
    correct_answer: "Ron Grainer",
    incorrect_answers: ["Murray Gold", "Delia Derbyshire", "Peter Howell"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the original Star Trek TV series, what was Captain James T. Kirk's middle name?",
    correct_answer: "Tiberius",
    incorrect_answers: ["Trevor", "Travis", "Tyrone"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which of these Bojack Horseman characters is a human?",
    correct_answer: "Todd Chavez",
    incorrect_answers: [
      "Lennie Turtletaub",
      "Princess Carolyn",
      "Tom Jumbo-Grumbo"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What was the name of Ross' pet monkey on Friends?",
    correct_answer: "Marcel",
    incorrect_answers: ["Jojo", "George", "Champ"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Which character does voice actress Tara Strong NOT voice?",
    correct_answer: "Bubbles (2016)",
    incorrect_answers: ["Twilight Sparkle", "Timmy Turner", "Harley Quinn"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the episode of SpongeBob SquarePants, Survival of the Idiots, Spongebob called Patrick which nickname?",
    correct_answer: "Pinhead",
    incorrect_answers: ["Starfish", "Larry", "Dirty Dan"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In Breaking Bad, the initials W.W. refer to which of the following?",
    correct_answer: "Walter White",
    incorrect_answers: ["William Wolf", "Willy Wonka", "Wally Walrus"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the show, Doctor Who, what does T.A.R.D.I.S stand for?",
    correct_answer: "Time And Relative Dimensions In Space",
    incorrect_answers: [
      "Time And Resting Dimensions In Space",
      "Time And Relative Dimensions In Style",
      "Toilet Aid Rope Dog Is Soup"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Guy's Grocery Games is hosted by which presenter?",
    correct_answer: "Guy Fieri",
    incorrect_answers: ["Guy Martin", "Guy Ritchie", "Ainsley Harriott"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In It's Always Sunny in Philadelphia what was the name of Frank's wrestling persona?",
    correct_answer: "The Trash Man",
    incorrect_answers: ["Bird of War", "Day Man", "The Maniac"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "How many seasons did Stargate SG-1 have?",
    correct_answer: "10",
    incorrect_answers: ["3", "7", "12"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which company has exclusive rights to air episodes of the The Grand Tour?",
    correct_answer: "Amazon",
    incorrect_answers: ["Netflix", "BBC", "CCTV"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the Star Trek universe, what color is Vulcan blood?",
    correct_answer: "Green",
    incorrect_answers: ["Blue", "Red", "Purple"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "On the show Rick and Morty, in episode Total Rickall, who was a parasite?",
    correct_answer: "Pencilvester",
    incorrect_answers: ["Beth Smith", "Summer Smith", "Mr. Poopy Butthole"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In DuckTales, what is the name of the city where all the main characters live?",
    correct_answer: "Duckburg",
    incorrect_answers: ["Duckwing", "Tailspin", "Wingford"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who played the sun baby in the original run of Teletubbies?",
    correct_answer: "Jessica Smith",
    incorrect_answers: ["Pui Fan Lee", "Sue Monroe", "Lisa Brockwell"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the show Tengen Toppa Gurren Lagann what is the name of the character who force everyone to live underground?",
    correct_answer: "Lordgenome",
    incorrect_answers: ["Kingloname", "Lord Genome", "King Loname"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "How long was Ken Jennings' win streak on Jeopardy?",
    correct_answer: "74",
    incorrect_answers: ["88", "49", "62"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What is the name of the main character in The Flash TV series?",
    correct_answer: "Barry Allen",
    incorrect_answers: ["Oliver Queen", "Bart Allen", "Bruce Wayne"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Star Trek: The Next Generation, what is the name of Data's cat?",
    correct_answer: "Spot",
    incorrect_answers: ["Mittens", "Tom", "Kitty"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In which year did the British television series The Bill end?",
    correct_answer: "2010",
    incorrect_answers: ["2001", "2007", "2012"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Which British writer wrote for both Doctor Who and Sherlock?",
    correct_answer: "Steven Moffatt",
    incorrect_answers: ["Phil Ford", "Russell T Davies", "Toby Whithouse"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which of these Disney shows is classified as an anime?",
    correct_answer: "Stitch!",
    incorrect_answers: [
      "Cory in the House",
      "The Emperor's New School",
      "Hannah Montana"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In Donkey Kong Country, why does Donkey Kong want to know the secret of the crystal coconut?",
    correct_answer: "He's the big kahuna.",
    incorrect_answers: [
      "To find out where all the bananas are.",
      "Because Diddy Kong forced him.",
      "He wants to punish brutes."
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "When Donkey Kong died in the Donkey Kong Country episode It's a Wonderful Life, who was his guardian angel?",
    correct_answer: "Eddie the Mean Old Yeti",
    incorrect_answers: ["Kiddy Kong", "Diddy Kong", "King K. Rool"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of following is rude and dishonorable by Klingon standards?",
    correct_answer: "Taking his D'k tahg",
    incorrect_answers: [
      "Insulting and laughing at him at the dinner table",
      "Reaching over and taking his meal",
      "Punching him and taking his ship station position"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In Star Trek, what is the Ferengi's First Rule of Acquisition?",
    correct_answer: "Once you have their money, you never give it back. ",
    incorrect_answers: [
      "Never place friendship above profit",
      "Greed is Eternal",
      "Never allow family to stand in the way of opportunity"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In Star Trek, what is the Klingon death ritual?",
    correct_answer: "Look into sky and yell loudly in mourning.",
    incorrect_answers: [
      "Kiss the jagged forehead before burial.",
      "Shoot into space in a torpedo casing.",
      "Split the deceased's earnings between bloodkin."
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Which race enjoys a glass of warm baghol in Star Trek?",
    correct_answer: "Klingon",
    incorrect_answers: ["Vulcan", "Human", "Botha"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In Star Trek, what sauce is commonly used by Klingons on bregit lung?",
    correct_answer: "Grapok sauce",
    incorrect_answers: [
      "Gazorpazorp pudding",
      "Sweet chili sauce",
      "Grapork sauce"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show Stargate Atlantis have?",
    correct_answer: "5",
    incorrect_answers: ["10", "2", "7"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show Stargate Universe have?",
    correct_answer: "2",
    incorrect_answers: ["10", "5", "3"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What breed of dog is Scooby Doo?",
    correct_answer: "Great Dane",
    incorrect_answers: ["Pit bull", "Boxer", "Doberman Pinscher"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What is the name of the planet that the Doctor from television series Doctor Who comes from?",
    correct_answer: "Gallifrey",
    incorrect_answers: ["Sontar", "Skaro", "Mondas"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "Which of these voices wasn't a choice for the House AI in The Simpsons Treehouse of Horror short, House of Whacks?",
    correct_answer: "George Clooney",
    incorrect_answers: ["Matthew Perry", "Dennis Miller", "Pierce Brosnan"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Alan Reed is known for providing the voice of which character?",
    correct_answer: "Fred Flintstone",
    incorrect_answers: ["Bugs Bunny", "Fangface", "G.I. Joe"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of the following was not an actor/actress on the American television show Saturday Night Live in Season 42?",
    correct_answer: "Tina Fey",
    incorrect_answers: ["Mikey Day", "Kate McKinnon", "Sasheer Zamata"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "Which of the following actors portrayed the Ninth Doctor in the British television show Doctor Who?",
    correct_answer: "Christopher Eccleston",
    incorrect_answers: ["David Tennant", "Matt Smith", "Tom Baker"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?",
    correct_answer: "Laura Roslin",
    incorrect_answers: ["William Adama", "Tricia Helfer", "Harry Stills"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "What was the callsign of Commander William Adama in Battlestar Galactica (2004)?",
    correct_answer: "Husker",
    incorrect_answers: ["Starbuck", "Apollo", "Crashdown"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Star Trek: Voyager, which episode did Voyager establish real-time communication with Starfleet Headquarters?",
    correct_answer: "Pathfinder",
    incorrect_answers: [
      "Message In A Bottle",
      "Someone To Watch Over Me",
      "Counterpoint"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which actor portrays Walter White in the series Breaking Bad?",
    correct_answer: " Bryan Cranston",
    incorrect_answers: ["Andrew Lincoln", "Aaron Paul", "RJ Mitte"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What is the name of Chris's brother in Everybody Hates Chris?",
    correct_answer: "Drew",
    incorrect_answers: ["Jerome", "Greg", "Joe"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "On the NBC show Community, whose catch-phrase was Pop! Pop!?",
    correct_answer: "Magnitude",
    incorrect_answers: ["Star Burns", "Leonard", "Senoir Chang"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who was the winner of Big Brother Season 10?",
    correct_answer: "Dan Gheesling",
    incorrect_answers: ["Bryce Kranyik", "Ryan Sutfin", "Chris Mundorf"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "When was the Sega Genesis released in Japan?",
    correct_answer: "October 29, 1988",
    incorrect_answers: [
      "August 14, 1989",
      "November 30, 1990",
      "September 1, 1986"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In which series of games do you collect souls to empower you and buy weaponry and armor with?",
    correct_answer: "Souls ",
    incorrect_answers: [
      "Final Fantasy ",
      "Monster Hunter",
      "The Legend of Zelda"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What was the code name for the Nintendo Gamecube?",
    correct_answer: "Dolphin",
    incorrect_answers: ["Nitro", "Revolution", "Atlantis"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Which franchise does the creature Slowpoke originate from?",
    correct_answer: "Pokemon",
    incorrect_answers: ["Dragon Ball", "Sonic The Hedgehog", "Yugioh"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Who is the protagonist in the game The Walking Dead: Season One?",
    correct_answer: "Lee Everett",
    incorrect_answers: ["Clementine", "Kenny", "Rick Grimes"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What is the original name of Final Fantasy XV?",
    correct_answer: "Final Fantasy Versus XIII",
    incorrect_answers: [
      "Final Fantasy: Reborn",
      "Final Fantasy XVI",
      "Final Fantasy XIII-3"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which of these of NOT an official game in Nintendo's Super Smash Bros. series?",
    correct_answer: "Super Smash Bros. Crusade",
    incorrect_answers: [
      "Super Smash Bros. Melee",
      "Super Smash Bros. Brawl",
      "Super Smash Bros. for Nintendo 3DS and Wii U"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Clash Royale what is Arena 4 called?",
    correct_answer: "P.E.K.K.A's Playhouse",
    incorrect_answers: ["Barbarian Bowl", "Spell Valley", "Royal Arena"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "The rights to the Rayman series are owned by which company?",
    correct_answer: "Ubisoft",
    incorrect_answers: ["Nintendo", "EA", "Sony"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which of the following Pokemon games released first?",
    correct_answer: "Pokemon Crystal",
    incorrect_answers: ["Pokemon Platinum", "Pokemon FireRed", "Pokemon Black"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which of these characters is the mascot of the video game company SEGA?",
    correct_answer: "Sonic the Hedgehog",
    incorrect_answers: ["Dynamite Headdy", "Alex Kidd", "Opa-Opa"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Need For Speed Most Wanted (2005), what do you drive at the beginning of the career mode?",
    correct_answer: "BMW M3 GTR",
    incorrect_answers: ["Porsche 911 Turbo", "Nissan 240SX", "Ford Mustang"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "TF2: What code does Soldier put into the door keypad in Meet the Spy?",
    correct_answer: "1111",
    incorrect_answers: ["1432", "1337", "No code"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which of these is NOT a game under the Worms series?",
    correct_answer: "Major Malfunction",
    incorrect_answers: ["Crazy Golf", "Clan Wars", "Ultimate Mayhem"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What was the first PlayStation game to require the use of the DualShock controller?",
    correct_answer: "Ape Escape",
    incorrect_answers: ["Metal Gear", "Tekken ", "Tomba 2!"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "How many normal endings are there in Cry Of Fear's campaign mode?",
    correct_answer: "4",
    incorrect_answers: ["5", "3", "6"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In the video game Overwatch, which playable character is infamous for saying It's high noon.?",
    correct_answer: "McCree",
    incorrect_answers: ["Hanzo", "Pharah", "Soldier: 76"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In what year was Garry's Mod released as a standalone title on Valve's Steam distribution service?",
    correct_answer: "2006",
    incorrect_answers: ["2007", "2004", "2003"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which survivor in Left 4 Dead sacrificed themself to save the other survivors?",
    correct_answer: "Bill",
    incorrect_answers: ["Louis", "Francis", "Zoey"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What is the maximum HP in Terraria?",
    correct_answer: "500",
    incorrect_answers: ["400", "1000", "100"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "Which of these characters was considered, but ultimately not included, for Super Smash Bros. Melee?",
    correct_answer: "James Bond",
    incorrect_answers: ["Diddy Kong", "Mega Man", "Wave Racer"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Which Animal Crossing game was for the Nintendo Wii?",
    correct_answer: "Animal Crossing: City Folk",
    incorrect_answers: [
      "Animal Crossing: New Leaf",
      "Animal Crossing: Wild World",
      "Animal Crossing: Population Growing!"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What is not a default game mode in Counter-Strike (2000)?",
    correct_answer: "Arms Race",
    incorrect_answers: ["Hostage Rescue", "Bomb Defusal", "Assassination"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In The Elder Scrolls V: Skyrim, who is the jester in the dark brotherhood?",
    correct_answer: "Cicero",
    incorrect_answers: ["Lucien Lachance", "Archimedes", "Astrid"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Who turns out to be the true victor in the Battle of Armageddon in Mortal Kombat?",
    correct_answer: "Shao Kahn",
    incorrect_answers: ["Liu Kang", "Shang Tsung", "Raiden"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What CS:GO case contains the Butterfly Knife?",
    correct_answer: "Breakout Case",
    incorrect_answers: ["Shadow Case", "Vanguard Case", "Esports 2014 Case"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In what year were screenshots added to Steam?",
    correct_answer: "2011",
    incorrect_answers: ["2010", "2008", "2009"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Undertale, how much do Spider Donuts cost in Hotland?",
    correct_answer: "9999G",
    incorrect_answers: ["7G", "40G", "12G"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In The Binding of Isaac, what is the name of the final boss that you fight in The Void?",
    correct_answer: "Delirium",
    incorrect_answers: ["Mega Satan", "Hush", "The Lamb"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "How many regular Sunken Sea Scrolls are there in Splatoon?",
    correct_answer: "27",
    incorrect_answers: ["32", "30", "5"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Without enchantments, which pickaxe in minecraft mines blocks the quickest.",
    correct_answer: "Golden ",
    incorrect_answers: ["Diamond", "Iron", "Obsidian"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which of the following Copy Abilities was only featured in Kirby & The Amazing Mirror?",
    correct_answer: "Mini",
    incorrect_answers: ["Magic", "Smash", "Missile"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What game was used to advertise Steam?",
    correct_answer: "Counter-Strike 1.6",
    incorrect_answers: ["Half-Life", "Half-Life 2", "Team Fortress"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "Which variant of the MP5 is depicted in Counter-Strike 1.6?",
    correct_answer: "MP5N",
    incorrect_answers: ["MP5SD", "MP5K", "MP5RAS"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is not a playable race in Final Fantasy XIV: A Realm Reborn?",
    correct_answer: "Hume",
    incorrect_answers: ["Miqo'te", "Lalafell", "Roegadyn"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "In Overwatch, which hero is able to wallride?",
    correct_answer: "Lucio",
    incorrect_answers: ["Reinhardt", "Sombra", "Mercy"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "How many unique items does Borderlands 2 claim to have?",
    correct_answer: "87 Bazillion ",
    incorrect_answers: ["87 Million", "87 Trillion", "87 Gazillion "]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In the PAYDAY series, what is the real name of the character known as Dallas?",
    correct_answer: "Nathan Steele",
    incorrect_answers: ["Nate Siemens", "Nick Stamos", "Nolan Stuhlinger"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Call Of Duty: Zombies, what does the game traditionally reward you for completing a boss round?",
    correct_answer: "Max Ammo",
    incorrect_answers: ["A Pack-A-Punched gun", "Death Machine", "Monkey Bombs"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In the Call Of Duty: Zombies map Origins, where is Stamin-Up located?",
    correct_answer: "Generator 5",
    incorrect_answers: ["Generator 3", "Generator 4", "Excavation Site"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Call of Duty: Black Ops III Zombies, what does completing all the main easter eggs reward you with?",
    correct_answer: "1,000,000 XP",
    incorrect_answers: [
      "Juggernog at the start of each game",
      "50 Liquid Diviniums",
      "All three options."
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the name of the 8th installment in the Fire Emblem series?",
    correct_answer: "The Sacred Stones",
    incorrect_answers: ["Blazing Sword", "Awakening", "Path of Radiance"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Telltale Games' The Walking Dead: Season One what is the name of Clementine's father?",
    correct_answer: "Ed",
    incorrect_answers: ["Charles", "Lee", "Walter"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What was the release date of Grand Theft Auto IV?",
    correct_answer: "April 29, 2008",
    incorrect_answers: ["May 21, 2009", "June 22, 2010", "July 28, 2008"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Portal, what color is the Morality Core?",
    correct_answer: "Purple",
    incorrect_answers: ["Red", "Yellow", "Blue"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In which game did the character Mario make his first appearance?",
    correct_answer: "Donkey Kong",
    incorrect_answers: ["Super Mario Bros.", "Super Mario Land", "Mario Bros."]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "Which gaming series includes The Diabolical Box and The Curious Village?",
    correct_answer: "Professor Layton",
    incorrect_answers: ["Persona", "Etrian Odyssey", "Sam & Max"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Guild Wars 2, what is the name of the home instance for the Human race?",
    correct_answer: "Salma District",
    incorrect_answers: ["Eastern Commons", "Rurikton", "The Crown Pavilion"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "In Guild Wars 2, what was Scarlet Briar's original name?",
    correct_answer: "Ceara",
    incorrect_answers: ["Scarlet", "Serimon", "Omadd"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Guild Wars 2, what is Tybalt's last name?",
    correct_answer: "Leftpaw",
    incorrect_answers: ["Wildeye", "Blightaxe", "Blackblood"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What French artist/band is known for playing on the midi instrument Launchpad?",
    correct_answer: "Madeon",
    incorrect_answers: ["Daft Punk ", "Disclosure", "David Guetta"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Who had hits in the 70s with the songs Lonely Boy and Never Let Her Slip Away?",
    correct_answer: "Andrew Gold",
    incorrect_answers: ["Elton John", "Leo Sayer", "Barry White "]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "On which Beatles album would you find the song 'Eleanor Rigby'?",
    correct_answer: "Revolver",
    incorrect_answers: ["Help!", "Rubber Soul", "Abbey Road"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "In the Rossini opera, what was the name of 'The Barber of Seville'?",
    correct_answer: "Figaro",
    incorrect_answers: ["Angelo", "Fernando", "Dave"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "According to their 1974 hit, what were Brownsville Station doing In The Boys' Room?",
    correct_answer: "Smokin'",
    incorrect_answers: ["Hangin'", "Lovin'", "Peein'"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Some people call me the space cowboy is the first line from what song?",
    correct_answer: "The Joker",
    incorrect_answers: [
      "Fandango",
      "Take The Money and Run",
      "Fly Like an Eagle"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "The song Twin Size Mattress was written by which band?",
    correct_answer: "The Front Bottoms",
    incorrect_answers: [
      "Twenty One Pilots",
      "The Wonder Years",
      "The Smith Street Band"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Where does the Mac part of the name Fleetwood Mac come from?",
    correct_answer: "John McVie",
    incorrect_answers: ["Christine McVie", "Mac McAnally", "David Tennant"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who is the lead singer of the band Coldplay?",
    correct_answer: "Chris Martin",
    incorrect_answers: ["Chris Isaak", "Chris Wallace", "Chris Connelly"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which popular rock band has a one-armed drummer?",
    correct_answer: "Def Leppard",
    incorrect_answers: ["The Beatles", "Lynyrd Skynyrd", "Foreigner"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Irish musician Hozier released a music track in 2013 titled, Take Me to ______",
    correct_answer: "Church",
    incorrect_answers: ["Mosque", "Synagogue", "Temple"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which member of the English band The xx released their solo album In Colour in 2015?",
    correct_answer: "Jamie xx",
    incorrect_answers: ["Romy Madley Croft", "Oliver Sim", "Baria Qureshi"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "In 2015, David Hasselhof released a single called...",
    correct_answer: "True Survivor",
    incorrect_answers: ["True Fighter", "Real Kung-Fury", "Real Warrior"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "How many members are there in the idol group &micro;'s?",
    correct_answer: "9",
    incorrect_answers: ["48", "6", "3"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "EDM producer Marshmello performs live wearing clothes and a marshmallow mask of what colour?",
    correct_answer: "White",
    incorrect_answers: ["Black", "Blue", "Yellow"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these languages was NOT included in the 2016 song Don't Mind by Kent Jones?",
    correct_answer: "Portuguese",
    incorrect_answers: ["Japanese", "French", "Spanish"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "What was the name of singer Frank Ocean's second studio album, which was released on August 20, 2016?",
    correct_answer: "Blonde",
    incorrect_answers: ["Brunette", "Black", "Burgundy"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which Twitch streamer is the vocalist for Red Vox?",
    correct_answer: "Vinesauce",
    incorrect_answers: ["The8BitDrummer", "LIRIK", "Sodapoppin"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who won the 1989 Drum Corps International championships?",
    correct_answer: "Santa Clara Vanguard",
    incorrect_answers: ["Blue Devils", "The Academy", "The Bluecoats"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "The 1952 musical composition 4'33, composed by prolific American composer John Cage, is mainly comprised of what sound?",
    correct_answer: "Silence",
    incorrect_answers: ["Farts", "People talking", "Cricket chirps"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which of these is NOT a song featured on the Lockjaw EP released in 2013 by Flume & Chet Faker?",
    correct_answer: "Left Alone",
    incorrect_answers: [
      "What About Us",
      "This Song Is Not About A Girl",
      "Drop The Game"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "What is the stage name of English female rapper Mathangi Arulpragasam, who is known for the song Paper Planes?",
    correct_answer: "M.I.A.",
    incorrect_answers: ["K.I.A.", "C.I.A.", "A.I.A."]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which artist collaborated with American DJ Dillon Francis to release the song 2016 Need You?",
    correct_answer: "NGHTMRE",
    incorrect_answers: ["LOUDPVCK", "KRNE", "DVBBS"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Pink Floyd made this song for their previous lead singer Syd Barrett.",
    correct_answer: "Shine On You Crazy Diamond",
    incorrect_answers: [
      "Wish You Were Here",
      "Have A Cigar",
      "Welcome to the Machine"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which one of these Pink Floyd albums were also a movie?",
    correct_answer: "The Wall",
    incorrect_answers: [
      "The Dark Side of the Moon",
      "Wish You Were Here",
      "Animals"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "In Mean Girls, who has breasts that tell when it's raining?",
    correct_answer: "Karen Smith",
    incorrect_answers: ["Gretchen Weiners", "Janice Ian", "Cady Heron"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What is the name of the 2016 studio album by the French electronic music duo Justice?",
    correct_answer: "Woman",
    incorrect_answers: ["Randy", "Safe and Sound", "Pleasure"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What is the relationship between the band members of American rock band King of Leon?",
    correct_answer: "Brothers & cousins",
    incorrect_answers: [
      "Childhood friends",
      "Former classmates",
      "Fraternity house members"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which band released songs suchs as Rio, Girls on Film, and The Reflex?",
    correct_answer: "Duran Duran",
    incorrect_answers: ["The Cure", "New Order", "Depeche Mode"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which year was the album Floral Shoppe by Macintosh Plus released?",
    correct_answer: "2011",
    incorrect_answers: ["2014", "2013", "2012"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which one of these rappers is NOT a member of the rap group Wu-Tang Clan?",
    correct_answer: "Dr.Dre",
    incorrect_answers: ["Ol' Dirty Bastard", "GZA", "Method Man"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
    correct_answer: "Unknown Pleasures",
    incorrect_answers: [
      "The Dark Side of the Moon",
      "London Calling",
      "The Velvet Underground & Nico"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "What is Brian May's guitar called?",
    correct_answer: "Red Special",
    incorrect_answers: ["Blue Special", "Green Special", "Yellow Special"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "According to a song by Belinda Carlisle, Heaven is a place on what?",
    correct_answer: "Earth",
    incorrect_answers: ["Venus", "Mars", "Uranus"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who recorded the album called Down to the Moon in 1986?",
    correct_answer: "Andreas Vollenweider",
    incorrect_answers: ["Jean-Michel Jarre", "Bing Crosby", "Enya"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which Nirvana album had a naked baby on the cover?",
    correct_answer: "Nevermind",
    incorrect_answers: ["Bleach", "In Utero", "Incesticide"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which of these is not an Ed Sheeran album?",
    correct_answer: "-",
    incorrect_answers: ["+", "X", "&divide;"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "In 2006, which band released their debut album A Fever You Can't Sweat Out?",
    correct_answer: "Panic! At the Disco",
    incorrect_answers: [
      "Twenty One Pilots",
      "My Chemical Romance",
      "Fall Out Boy"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "What album did Bon Iver release in 2016?",
    correct_answer: "22, A Million",
    incorrect_answers: [
      "Bon Iver, Bon Iver",
      "Blood Bank EP",
      "For Emma, Forever Ago"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who was featured in the song Words by Feint? ",
    correct_answer: "Laura Brehm",
    incorrect_answers: ["Anna Yvette ", "Danyka Nadeau", "Veela"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the lead singer of The Lumineers?",
    correct_answer: "Wesley Schultz",
    incorrect_answers: ["Jeremiah Fraites", "Jay Van Dyke", "Neyla Pekarek"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which of the following bands is Tom DeLonge not a part of?",
    correct_answer: "+44",
    incorrect_answers: ["Box Car Racer", "Blink-182", "Angels & Airwaves"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "African-American performer Sammy Davis Jr. was known for losing which part of his body in a car accident?",
    correct_answer: "Left Eye",
    incorrect_answers: ["Right Ear", "Right Middle Finger", "Nose"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "The Singing Cowboy Gene Autry is credited with the first recording for all but which classic Christmas jingle?",
    correct_answer: "White Christmas",
    incorrect_answers: [
      "Frosty the Snowman",
      "Rudolph the Red-Nosed Reindeer",
      "Here Comes Santa Claus"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which former boy-band star released hit solo single Angels in 1997?",
    correct_answer: "Robbie Williams",
    incorrect_answers: ["Justin Timberlake", "Harry Styles", "Gary Barlow"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "The Who's eponymous line, Teenage Wasteland, appears in which of their songs?",
    correct_answer: "Baba O' Riley",
    incorrect_answers: [
      "The Seeker",
      "Won't Get Fooled Again",
      "Pinball Wizard"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which of the following songs did Elton John perform following Princess Diane's passing?",
    correct_answer: "Candles in the Wind",
    incorrect_answers: [
      "I Guess That's Why They Call It The Blues",
      "Your Song",
      "Island Girl"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "From which album is the Gorillaz song, On Melancholy Hill featured in?",
    correct_answer: "Plastic Beach",
    incorrect_answers: ["Demon Days", "Humanz", "The Fall"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "What was the name of the cold-war singer who has a song in Grand Theft Auto IV, and a wall landmark in Moscow for his memorial?",
    correct_answer: "Viktor Tsoi",
    incorrect_answers: ["Jimi Hendrix", "Brian Jones", "Vladimir Vysotsky"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who performed the guitar solo on Michael Jackson's hit Beat It?",
    correct_answer: "Eddie Van Halen",
    incorrect_answers: ["Steve Vai", "Kirk Hammett", "Zakk Wylde"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is considered the rarist form of color blindness?",
    correct_answer: "Blue",
    incorrect_answers: ["Red", "Green", "Purple"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Helium", "Carbon", "Hydrogen"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the largest animal currently on Earth?",
    correct_answer: "Blue Whale",
    incorrect_answers: ["Orca", "Colossal Squid", "Giraffe"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which is the chemical name of H2O?",
    correct_answer: "Dihydrogen Monoxide",
    incorrect_answers: [
      "Ammonium chloride",
      "Anhydrous Sodium Carbonate",
      "Manganese dioxide"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What name is given to all baby marsupials?",
    correct_answer: "Joey",
    incorrect_answers: ["Calf", "Pup", "Cub"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The humerus, paired radius, and ulna come together to form what joint?",
    correct_answer: "Elbow",
    incorrect_answers: ["Knee", "Sholder", "Ankle"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which is the longest bone in the human body? ",
    correct_answer: "Femur",
    incorrect_answers: ["Scapula", "Fibula", "Ulna"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the powerhouse of the Eukaryotic animal cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Nucleus", "Chloroplast", "Endoplasmic Reticulum"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "The 'Islets of Langerhans' is found in which human organ?",
    correct_answer: "Pancreas",
    incorrect_answers: ["Kidney", "Liver", "Brain"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the hottest planet in the Solar System?",
    correct_answer: "Venus",
    incorrect_answers: ["Mars", "Mercury", "Jupiter"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the first element on the periodic table?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Oxygen", "Lithium"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What was the first living creature in space?",
    correct_answer: "Fruit Flies ",
    incorrect_answers: ["Monkey", "Dog", "Mouse"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What mineral has the lowest number on the Mohs scale?",
    correct_answer: "Talc",
    incorrect_answers: ["Quartz", "Diamond", "Gypsum"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which gas forms about 78% of the Earth's atmosphere?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Argon", "Carbon Dioxide"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "An organic compound is considered an alcohol if it has what functional group?",
    correct_answer: "Hydroxyl",
    incorrect_answers: ["Carbonyl", "Alkyl", "Aldehyde"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which element has the atomic number of 7?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Hydrogen", "Neon"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Au on the Periodic Table refers to which element?",
    correct_answer: "Gold",
    incorrect_answers: ["Silver", "Oxygen", "Nickel"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "All the following metal elements are liquids at or near room temperature EXCEPT:",
    correct_answer: "Beryllium",
    incorrect_answers: ["Gallium", "Caesium", "Mercury"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
    correct_answer: "2",
    incorrect_answers: ["0", "1", "5"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Which psychological term refers to the stress of holding contrasting beliefs?",
    correct_answer: "Cognitive Dissonance",
    incorrect_answers: ["Flip-Flop Syndrome", "Split-Brain", "Blind Sight"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the chemical makeup of water?",
    correct_answer: "H20",
    incorrect_answers: ["C12H6O2", "CO2", "H"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "Alzheimer's disease primarily affects which part of the human body?",
    correct_answer: "Brain",
    incorrect_answers: ["Lungs", "Skin", "Heart"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Who developed the first successful polio vaccine in the 1950s?",
    correct_answer: "Jonas Salk",
    incorrect_answers: ["John F. Enders", "Thomas Weller", "Frederick Robbins"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the chemical formula for ammonia?",
    correct_answer: "NH3",
    incorrect_answers: ["CO2", "NO3", "CH4"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many bones are in the human body?",
    correct_answer: "206",
    incorrect_answers: ["203", "209", "200"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The medical condition osteoporosis affects which part of the body?",
    correct_answer: "Bones",
    incorrect_answers: ["Skin", "Brain", "Heart"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which of the following is NOT a real element?",
    correct_answer: "Vitrainium",
    incorrect_answers: ["Praseodymium", "Hassium", "Lutetium"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Which one of these scientists conducted the Gold Foil Experiment which concluded that atoms are mostly made of empty space?",
    correct_answer: "Ernest Rutherford",
    incorrect_answers: [
      "Joseph John Thomson",
      "Archimedes",
      "Niels Henrik David Bohr"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "After which Danish city is the 72th element on the periodic table named?",
    correct_answer: "Copenhagen",
    incorrect_answers: ["Odense", "Herning", "Skagen"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which of these is a type of stretch/deep tendon reflex?",
    correct_answer: "Ankle jerk reflex",
    incorrect_answers: [
      "Gag reflex",
      "Pupillary light reflex",
      "Scratch reflex"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What does the yellow diamond on the NFPA 704 fire diamond represent?",
    correct_answer: "Reactivity",
    incorrect_answers: ["Health", "Flammability", "Radioactivity"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "A comet's gaseous envelope (which creates the tail) is called what?",
    correct_answer: "The coma",
    incorrect_answers: ["The wake", "The backwash", "The ablative"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which of these is a stop codon in DNA?",
    correct_answer: "TAA",
    incorrect_answers: ["ACT", "ACA", "GTA"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
    correct_answer: "Interphase",
    incorrect_answers: ["Prophase", "Stasis", "Telophase"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Deuterium is an isotope of which element?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Nitrogen", "Helium", "Neon"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "What genetic disease is caused by having an extra Y chromosome (XYY)?",
    correct_answer: "Jacob's Syndrome",
    incorrect_answers: [
      "Klinefelter's Syndrome",
      "Turner's Syndrome",
      "Down Syndrome"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is radiation measured in?",
    correct_answer: "Gray ",
    incorrect_answers: ["Watt", "Decibel", "Kelvin"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Botanically speaking, which of these fruits is NOT a berry?",
    correct_answer: "Strawberry",
    incorrect_answers: ["Blueberry", "Banana", "Concord Grape"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the unit of electrical resistance?",
    correct_answer: "Ohm",
    incorrect_answers: ["Mho", "Tesla", "Joule"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Burning which of these metals will produce a bright white flame?",
    correct_answer: "Magnesium",
    incorrect_answers: ["Copper", "Lithium", "Lead"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "In Psychology, which need appears highest in the Maslow's hierarchy of needs pyramid?",
    correct_answer: "Esteem",
    incorrect_answers: ["Love", "Safety", "Physiological"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What are human nails made of?",
    correct_answer: "Keratin",
    incorrect_answers: ["Bone", "Chitin", "Calcium"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "The Sun consists of mostly which two elements?",
    correct_answer: "Hydrogen & Helium",
    incorrect_answers: [
      "Hydrogen & Nitrogen",
      "Carbon & Nitrogen",
      "Carbon & Helium"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Where is the Gluteus Maximus muscle located?",
    correct_answer: "Butt",
    incorrect_answers: ["Arm", "Head", "Torso"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What part of the brain takes its name from the Greek for seahorse?",
    correct_answer: "Hippocampus",
    incorrect_answers: ["Cerebellum", "Thalamus", "Amygdala"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Which planet did the Viking 1 spacecraft send surface images of, starting in 1976?",
    correct_answer: "Mars",
    incorrect_answers: ["Saturn", "Jupiter", "Venus"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Coulrophobia is the irrational fear of what?",
    correct_answer: "Clowns",
    incorrect_answers: ["Cemeteries", "Needles", "Tunnels"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Which of the following men does not have a chemical element named after him?",
    correct_answer: "Sir Isaac Newton",
    incorrect_answers: ["Albert Einstein", "Niels Bohr", "Enrico Fermi"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Down Syndrome is usually caused by an extra copy of which chromosome?",
    correct_answer: "21",
    incorrect_answers: ["23", "15", "24"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who wrote Harry Potter?",
    correct_answer: "J.K. Rowling",
    incorrect_answers: ["J.R.R. Tolkien", "Terry Pratchett", "Daniel Radcliffe"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "George Orwell wrote this book, which is often considered a statement on government oversight.",
    correct_answer: "1984",
    incorrect_answers: [
      "The Old Man and the Sea",
      "Catcher and the Rye",
      "To Kill a Mockingbird"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "Which author and poet famously wrote the line, The female of the species is more deadly than the male?",
    correct_answer: "Rudyard Kipling",
    incorrect_answers: [
      "Edgar Allan Poe",
      "William Shakespeare",
      "William Wordsworth"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    correct_answer: "Badger",
    incorrect_answers: ["Fox", "Frog", "Rabbit"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which famous book is sub-titled 'The Modern Prometheus'?",
    correct_answer: "Frankenstein",
    incorrect_answers: [
      "Dracula",
      "The Strange Case of Dr. Jekyll and Mr. Hyde ",
      "The Legend of Sleepy Hollow"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Who wrote the novel Moby-Dick?",
    correct_answer: "Herman Melville",
    incorrect_answers: [
      "William Golding",
      "William Shakespeare",
      "J. R. R. Tolkien"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What was the name of Captain Nemo's submarine in 20,000 Leagues Under the Sea?",
    correct_answer: "The Nautilus",
    incorrect_answers: ["The Neptune", "The Poseidon ", "The Atlantis"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the book The Martian, how long was Mark Watney trapped on Mars (in Sols)?",
    correct_answer: "549 Days",
    incorrect_answers: ["765 Days", "401 Days", "324 Days"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which of the following is the world's best-selling book?",
    correct_answer: "The Lord of the Rings",
    incorrect_answers: [
      "The Little Prince",
      "Harry Potter and the Philosopher's Stone",
      "The Da Vinci Code"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
    correct_answer: "Oswald",
    incorrect_answers: ["James", "Harold", "Christopher"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
    correct_answer: "Astoria Greengrass",
    incorrect_answers: [
      "Pansy Parkinson",
      "Millicent Bulstrode",
      "Hermione Granger"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "What is Hermione Granger's middle name?",
    correct_answer: "Jean",
    incorrect_answers: ["Jane", "Emma", "Jo"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
    correct_answer: "Gloin",
    incorrect_answers: ["Thorin Oakenshield", "Bombur", "Dwalin"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What position does Harry Potter play in Quidditch?",
    correct_answer: "Seeker",
    incorrect_answers: ["Beater", "Chaser", "Keeper"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
    correct_answer: "The Artful Dodger",
    incorrect_answers: ["Fagin", "Bull's-eye", "Mr. Fang"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Green Eggs And Ham is a book by which author?",
    correct_answer: "Dr. Seuss",
    incorrect_answers: ["Beatrix Potter", "Roald Dahl", "A.A. Milne"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "Which famous spy novelist wrote the childrens' story Chitty-Chitty-Bang-Bang?",
    correct_answer: "Ian Fleming",
    incorrect_answers: ["Joseph Conrad", "John Buchan", "Graham Greene"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What was the name of the Mysterious Island, in Jules Verne's The Mysterious Island?",
    correct_answer: "Lincoln Island",
    incorrect_answers: [
      "Vulcania Island",
      "Prometheus Island",
      "Neptune Island"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "By what name was the author Eric Blair better known?",
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What was the pen name of novelist, Mary Ann Evans?",
    correct_answer: "George Eliot",
    incorrect_answers: [
      "George Orwell",
      "George Bernard Shaw",
      "George Saunders"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the children's story The Little Match Girl?",
    correct_answer: "Hans Christian Andersen",
    incorrect_answers: ["Charles Dickens", "Lewis Carroll", "Oscar Wilde"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter series, what is Headmaster Dumbledore's full name?",
    correct_answer: "Albus Percival Wulfric Brian Dumbledore",
    incorrect_answers: [
      "Albus Valum Jetta Mobius Dumbledore",
      "Albus James Lunae Otto Dumbledore",
      "Albus Valencium Horatio Kul Dumbledore"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In the The Hobbit, who kills Smaug?",
    correct_answer: "Bard",
    incorrect_answers: ["Bilbo Baggins", "Gandalf the Grey", "Frodo"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "How many Harry Potter books are there?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "6"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?",
    correct_answer: "Richard Bachman",
    incorrect_answers: ["J. D. Robb", "Mark Twain", "Lewis Carroll"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What's Harry Potter's dad's name?",
    correct_answer: "James Potter",
    incorrect_answers: ["Joey Potter", "Frank Potter", "Hairy Potter Sr."]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "The novel Jane Eyre was written by what author? ",
    correct_answer: "Charlotte Bronte",
    incorrect_answers: ["Emily Bronte", "Jane Austen", "Louisa May Alcott"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "The novel Of Mice And Men was written by what author? ",
    correct_answer: "John Steinbeck ",
    incorrect_answers: ["George Orwell", "Mark Twain ", "Harper Lee"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who wrote the young adult novel The Fault in Our Stars?",
    correct_answer: "John Green",
    incorrect_answers: ["Stephenie Meyer", "Suzanne Collins", "Stephen Chbosky"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer's Stone?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Spike", "Poofy", "Spot"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "The title of Adolf Hitler's autobiography Mein Kampf is what when translated to English?",
    correct_answer: "My Struggle",
    incorrect_answers: ["My Hatred", "My Sadness", "My Desire"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the protagonist of J.D. Salinger's novel Catcher in the Rye?",
    correct_answer: "Holden Caulfield",
    incorrect_answers: ["Fletcher Christian", "Jay Gatsby", "Randall Flagg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "The book The Little Prince was written by...",
    correct_answer: "Antoine de Saint-Exupery",
    incorrect_answers: [
      "Miguel de Cervantes Saavedra",
      "Jane Austen",
      "F. Scott Fitzgerald"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "Where does the book The Silence of the Lambs get its title from?",
    correct_answer: "The main character's trauma in childhood",
    incorrect_answers: [
      "The relation it has with killing the innocents",
      "The villain's favourite meal",
      "The voice of innocent people being shut by the powerful"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In Michael Crichton's novel Jurassic Park, John Hammond meets his demise at the claws of which dinosaur?",
    correct_answer: "Procompsognathus",
    incorrect_answers: ["Dilophosaurus", "Tyrannosaurus Rex", "Velociraptor"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In the Harry Potter novels, what must a Hogwarts student do to enter the Ravenclaw Common Room?",
    correct_answer: "Answer a riddle",
    incorrect_answers: [
      "Rhythmically tap barrels with a wand",
      "Speak a password",
      "Knock in sequence"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Which of the following is NOT a work done by Shakespeare?",
    correct_answer: "Trial of Temperance",
    incorrect_answers: ["Measure For Measure", "Titus Andronicus", "Cymbeline"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What is the name of Sherlock Holmes's brother?",
    correct_answer: "Mycroft Holmes",
    incorrect_answers: [
      "Mederi Holmes",
      "Martin Holmes",
      "Herbie Hancock Holmes"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What book series published by Jim Butcher follows a wizard in modern day Chicago?",
    correct_answer: "The Dresden Files",
    incorrect_answers: [
      "A Hat in Time",
      "The Cinder Spires",
      "My Life as a Teenage Wizard"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What was the last message of the Dolphins in The Hitchhiker's Guide to the Galaxy?",
    correct_answer: "So long, and thanks for all the fish.",
    incorrect_answers: [
      "The answer is 42.",
      "Land of the brave.",
      "Goodbye cruel world!"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in Jurassic Park?",
    correct_answer: "1992 Toyota Land Cruiser",
    incorrect_answers: [
      "1992 Jeep Wrangler YJ Sahar",
      "1992 Ford Explorer XLT",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the book series Odd Thomas, Danny Jessup has what genetic disease? ",
    correct_answer: " Osteogenesis Imperfecta",
    incorrect_answers: [
      "Spinocerebellar ataxia",
      "Adrenoleukodystrophy",
      "Cystic Fibrosis"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In Margaret Atwood's The Handmaid's Tale, what is Offred's real name is implied to be?",
    correct_answer: "June",
    incorrect_answers: ["August", "April", "May"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In Little Women, which of the March sisters married Laurie?",
    correct_answer: "Amy",
    incorrect_answers: ["Beth", "Jo", "Meg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Antiquities, Ice Age, and Alliances expansions take place on which continent?",
    correct_answer: "Terisiare",
    incorrect_answers: ["Aerona", "Shiv", "Jamuraa"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Fallen Empires expansion takes place on which continent?",
    correct_answer: "Sarpadia",
    incorrect_answers: ["Otaria", "Terisiare", "Shiv"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, which plane does the Homelands expansion take place in?",
    correct_answer: "Ulgrotha",
    incorrect_answers: ["Bant", "Llanowar", "Tazeem"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In Alice in Wonderland, what is the name of Alice's kitten?",
    correct_answer: "Dinah",
    incorrect_answers: ["Oscar", "Heath", "Smokey"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "In the name of the fictional SCP Foundation, what does the SCP stand for?",
    correct_answer: "Special Containment Procedures",
    incorrect_answers: [
      "Secure, Contain, Protect",
      "Supernatural Creature Preservation",
      "Silent Community Protection"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What breed of dog was 'Marley' in the film 'Marley & Me'?",
    correct_answer: "Labrador Retriever",
    incorrect_answers: ["Golden Retriever", "Dalmatian", "Shiba Inu"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which of the following is NOT a quote from the 1942 film Casablanca? ",
    correct_answer: "Frankly, my dear, I don't give a damn.",
    incorrect_answers: [
      "Here's lookin' at you, kid.",
      "Of all the gin joints, in all the towns, in all the world, she walks into mine",
      "Round up the usual suspects."
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which of the following is not the name of a 'Bond Girl'? ",
    correct_answer: "Vanessa Kensington",
    incorrect_answers: ["Pam Bouvier", "Mary Goodnight", "Wai Lin"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    correct_answer: "Harry Potter",
    incorrect_answers: ["Ted", "Spy Kids", "Pirates of the Caribbean "]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the movie The Iron Giant,&rdquo; this character is the protagonist.",
    correct_answer: "Hogarth Hughes",
    incorrect_answers: ["Kent Mansley", "Dean McCoppin", "Annie Hughes"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In the 1976 film 'Taxi Driver', how many guns did Travis buy from the salesman?",
    correct_answer: "4",
    incorrect_answers: ["2", "6", "1"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
    correct_answer: "The Vikings ",
    incorrect_answers: ["The Long Ships", "Prince Valiant", "Spartacus"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In which 1973 film does Yul Brynner play a robotic cowboy who malfunctions and goes on a killing	spree?",
    correct_answer: "Westworld",
    incorrect_answers: ["Runaway", "Android", "The Terminators"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who voiced the character Draco in the 1996 movie 'DragonHeart'?",
    correct_answer: "Sean Connery",
    incorrect_answers: ["Dennis Quaid", "Pete Postlethwaite", "Brian Thompson"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "In which 1955 film does Frank Sinatra play Nathan Detroit?",
    correct_answer: "Guys and Dolls",
    incorrect_answers: [
      "Anchors Aweigh",
      "From Here to Eternity",
      "High Society"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was Dorothy's surname in 'The Wizard Of Oz'?",
    correct_answer: "Gale",
    incorrect_answers: ["Perkins", "Day", "Parker"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
    correct_answer: "Auric Goldfinger",
    incorrect_answers: ["Dr. Julius No", "Rosa Klebb", "Emilio Largo"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "This movie contains the quote, I feel the need ... the need for speed!",
    correct_answer: "Top Gun",
    incorrect_answers: ["Days of Thunder", "The Color of Money", "Cocktail"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "This movie contains the quote, What we've got here is a failure to communicate.",
    correct_answer: "Cool Hand Luke",
    incorrect_answers: [
      "Bonnie and Clyde",
      "The Graduate",
      "In the Heat of the Night"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In which African country was the 2006 film 'Blood Diamond' mostly set in?",
    correct_answer: "Sierra Leone",
    incorrect_answers: ["Liberia", "Burkina Faso", "Central African Republic"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "In what year was the first Transformers movie released?",
    correct_answer: "1986",
    incorrect_answers: ["2007", "1984", "2009"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What does TIE stand for in reference to the TIE Fighter in Star Wars?",
    correct_answer: "Twin Ion Engine",
    incorrect_answers: [
      "Twin Iron Engine",
      "Twin Intercepter Engine",
      "Twin Inception Engine"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What was the name of the planet in Aliens?",
    correct_answer: "LV-426",
    incorrect_answers: ["Weyland Yutani Corporation Base", "FR-838", "DI-621"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "What is the name of the first Star Wars film by release order?",
    correct_answer: "A New Hope",
    incorrect_answers: [
      "The Phantom Menace",
      "The Force Awakens",
      "Revenge of the Sith"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was the first James Bond film?",
    correct_answer: "Dr. No",
    incorrect_answers: ["Goldfinger", "From Russia With Love", "Thunderball"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Which of these actors/actresses is NOT a part of the cast for the 2016 movie Suicide Squad?",
    correct_answer: "Scarlett Johansson",
    incorrect_answers: ["Jared Leto", "Will Smith", "Margot Robbie"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which iconic character is featured in movies such as The Enforcer, Sudden Impact, and The Dead Pool?",
    correct_answer: "Dirty Harry",
    incorrect_answers: ["Indiana Jones", "James Bond", "Harry Potter"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1994 movie Speed, what is the minimum speed the bus must go to prevent to bomb from exploding?",
    correct_answer: "50 mph",
    incorrect_answers: ["60 mph", "40 mph", "70 mph"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In 2012, which movie won every category in the 32nd Golden Raspberry Awards?",
    correct_answer: "Jack and Jill",
    incorrect_answers: [
      "The Girl with the Dragon Tattoo",
      "Thor",
      "The King's Speech"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In what Disney movie can you spot the character Pac-Man in if you look closely enough in some scenes?",
    correct_answer: "Tron",
    incorrect_answers: ["Big Hero 6", "Fantasia", "Monsters, Inc."]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Who played Baron Victor Frankestein in the 1957 Hammer horror film The Curse of Frankenstein?",
    correct_answer: "Peter Cushing",
    incorrect_answers: ["Boris Karloff", "Vincent Price", "Lon Chaney Jr."]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Which one of these action movies are shot entirely in one take?",
    correct_answer: "Victoria",
    incorrect_answers: [
      "Ip Man 2",
      "The Bourne Legacy",
      "Leon: The Professional"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What was another suggested name for, the 1985 film, Back to the Future?",
    correct_answer: "Spaceman From Pluto",
    incorrect_answers: [
      "Hill Valley Time Travelers",
      "The Time Travelers",
      "The Lucky Man"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the correct phrase for the Latin saying Romanes Eunt Domus in Monty Python's Life of Brian?",
    correct_answer: "Romani Ite Domum",
    incorrect_answers: [
      "Romans Go Home",
      "Roxani Ite Domum",
      "Tomate Ite Domum"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who played Sgt. Gordon Elias in 'Platoon' (1986)?",
    correct_answer: "Willem Dafoe",
    incorrect_answers: ["Charlie Sheen", "Matt Damon", "Johnny Depp"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Who in Pulp Fiction says No, they got the metric system there, they wouldn't know what the fuck a Quarter Pounder is.",
    correct_answer: "Vincent Vega",
    incorrect_answers: ["Jules Winnfield", "Jimmie Dimmick", "Butch Coolidge"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In Jurassic World, what is the name of the dinosaur that is a genetic hybrid?",
    correct_answer: "Indominus Rex",
    incorrect_answers: ["Mosasaurus", "Pteranodon", "Tyrannosaurus Rex "]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "In the movie Scream who is Ghost Face?",
    correct_answer: "Billy Loomis and Stu Macher",
    incorrect_answers: [
      "Dewey Riley",
      "Sidney Prescott",
      "Archie Prescott and Philip Marv"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "In what year was the movie Police Academy released?",
    correct_answer: "1984",
    incorrect_answers: ["1986", "1985", "1983"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "What city did the monster attack in the film, Cloverfield?",
    correct_answer: "New York, New York",
    incorrect_answers: [
      "Las Vegas, Nevada",
      "Chicago, Illinois",
      "Orlando, Florida"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In the movie Gremlins, after what time of day should you not feed Mogwai?",
    correct_answer: "Midnight",
    incorrect_answers: ["Evening", "Morning", "Afternoon"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What was the name of the protagonist in the movie Commando (1985)?",
    correct_answer: "John Matrix",
    incorrect_answers: ["Ben Richards", "Douglas Quaid", "Harry Tasker"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Who played the Cenobite called Pinhead in the original Hellraiser films?",
    correct_answer: "Doug Bradley",
    incorrect_answers: ["Doug Jones", "Doug Savant", "Doug Benson"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "At the end of the 2001 film Rat Race, whose concert do the contestants crash?",
    correct_answer: "Smash Mouth",
    incorrect_answers: ["Bowling for Soup", "Sum 41", "Linkin Park"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In which movie does Robin Williams' character have to disguise themselves into a woman?",
    correct_answer: "Mrs. Doubtfire",
    incorrect_answers: ["Old Dogs", "Jumanji", "Awakenings"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "In the 1995 film Balto, who are Steele's accomplices?",
    correct_answer: "Kaltag, Nikki, and Star",
    incorrect_answers: [
      "Dusty, Kirby, and Ralph",
      "Nuk, Yak, and Sumac",
      "Jenna, Sylvie, and Dixie"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What is the name of the island that Jurassic Park is built on?",
    correct_answer: "Isla Nublar",
    incorrect_answers: ["Isla Sorna", "Isla Muerta", "Isla Pena"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the Jurassic Park universe, what is the name of the island that contains InGen's Site B?",
    correct_answer: "Isla Sorna",
    incorrect_answers: ["Isla Nublar", "Isla Pena", "Isla Muerta"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in Jurassic Park?",
    correct_answer: "1992 Ford Explorer XLT",
    incorrect_answers: [
      "1992 Toyota Land Cruiser",
      "1992 Jeep Wrangler YJ Sahar",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In the Jurassic Park universe, what was the first dinosaur cloned by InGen in 1986?",
    correct_answer: "Velociraptor",
    incorrect_answers: ["Triceratops", "Troodon", "Brachiosaurus"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "Which actress portrayed Dr. Grace Augustine in the James Cameron movie Avatar?",
    correct_answer: "Sigourney Weaver",
    incorrect_answers: ["Jessica Chastain", "Melissa Beckett", "Alyssa Monroe "]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Who plays Bruce Wayne in the 2008 movie The Dark Knight?",
    correct_answer: "Christian Bale",
    incorrect_answers: ["Michael Caine", "Ron Dean", "Heath Ledger"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "In Big Hero 6, what fictional city is the Big Hero 6 from?",
    correct_answer: "San Fransokyo",
    incorrect_answers: ["San Tokyo", "Tokysisco", "Sankyo"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "In the Friday The 13th series, what year did Jason drown in?",
    correct_answer: "1957",
    incorrect_answers: ["1955", "1953", "1959"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What film did James Cameron's Avatar dethrone as the highest-grossing film ever?",
    correct_answer: "Titanic",
    incorrect_answers: ["Star Wars", "Gone with the Wind", "Jaws"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which of the following sports is not part of the triathlon?",
    correct_answer: "Horse-Riding",
    incorrect_answers: ["Cycling", "Swimming", "Running"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
    correct_answer: "Jordan",
    incorrect_answers: ["Benetton", "Ferrari", "Mercedes"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "What tool lends it's name to a last-stone advantage in an end in Curling?",
    correct_answer: "Hammer",
    incorrect_answers: ["Wrench", "Drill", "Screwdriver"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In golf, what name is given to a hole score of two under par?",
    correct_answer: "Eagle",
    incorrect_answers: ["Birdie", "Bogey", "Albatross"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What cricketing term denotes a batsman being dismissed with a score of zero?",
    correct_answer: "Duck",
    incorrect_answers: ["Bye", "Beamer", "Carry"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of these teams isn't a member of the NHL's Original Six era?",
    correct_answer: "Philadelphia Flyers",
    incorrect_answers: [
      "New York Rangers",
      "Toronto Maple Leafs",
      "Boston Bruins"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the nickname of Northampton town's rugby union club?",
    correct_answer: "Saints",
    incorrect_answers: ["Harlequins", "Saracens", "Wasps"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which English football club has the nickname 'The Foxes'?",
    correct_answer: "Leicester City",
    incorrect_answers: [
      "Northampton Town",
      "Bradford City",
      "West Bromwich Albion"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "A stimpmeter measures the speed of a ball over what surface?",
    correct_answer: "Golf Putting Green",
    incorrect_answers: [" Football Pitch", "Cricket Outfield", "Pinball Table"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which Formula One driver was nicknamed 'The Professor'?",
    correct_answer: "Alain Prost",
    incorrect_answers: ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "How many scoring zones are there on a conventional dart board?",
    correct_answer: "82",
    incorrect_answers: ["62", "42", "102"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "In a game of snooker, what colour ball is worth 3 points?",
    correct_answer: "Green",
    incorrect_answers: ["Yellow", "Brown", "Blue"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "With which doubles partner did John McEnroe have most success?",
    correct_answer: "Peter Fleming",
    incorrect_answers: ["Mark Woodforde", "Michael Stich", "Mary Carillo"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In baseball, how many fouls are an out?",
    correct_answer: "0",
    incorrect_answers: ["5", "3", "2"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which nation hosted the FIFA World Cup in 2006?",
    correct_answer: "Germany",
    incorrect_answers: ["United Kingdom", "Brazil", "South Africa"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "The F1 season of 1994 is remembered for what tragic event?",
    correct_answer: "Death of Ayrton Senna (San Marino)",
    incorrect_answers: [
      "The Showdown (Australia)",
      "Verstappen on Fire (Germany)",
      "Schumacher's Ban (Britain)"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the highest belt you can get in Taekwondo?",
    correct_answer: "Black",
    incorrect_answers: ["White", "Red", "Green"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which country is hosting the 2018 FIFA World Cup?",
    correct_answer: "Russia",
    incorrect_answers: ["Germany", "United States", "Saudi Arabia"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which country is hosting the 2022 FIFA World Cup?",
    correct_answer: "Qatar",
    incorrect_answers: ["Uganda", "Vietnam", "Bolivia"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Who won the 2015 Formula 1 World Championship?",
    correct_answer: "Lewis Hamilton",
    incorrect_answers: ["Nico Rosberg", "Sebastian Vettel", "Jenson Button"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "Which driver has been the Formula 1 world champion for a record 7 times?",
    correct_answer: "Michael Schumacher",
    incorrect_answers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
    correct_answer: "7 - 1",
    incorrect_answers: ["0 - 1", "3 - 4", "16 - 0"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which team was the 2014-2015 NBA Champions?",
    correct_answer: "Golden State Warriors",
    incorrect_answers: [
      "Cleveland Cavaliers",
      "Houston Rockets",
      "Atlanta Hawks"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Josh Mansour is part of what NRL team?",
    correct_answer: "Penrith Panthers",
    incorrect_answers: [
      "Melbourne Storm",
      "Sydney Roosters",
      "North Queensland Cowboys"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which car manufacturer won the 2016 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Ferrari"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which car company is the only Japanese company which won the 24 Hours of Le Mans?",
    correct_answer: "Mazda",
    incorrect_answers: ["Toyota", "Subaru", "Nissan"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which Italian footballer told Neuer where he's putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which male player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "Ma Long (China)",
    incorrect_answers: [
      "Zhang Jike (China)",
      "Jun Mizutani (Japan)",
      "Vladimir Samsonov (Belarus)"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "DING Ning (China)",
    incorrect_answers: [
      "LI Xiaoxia (China)",
      "Ai FUKUHARA (Japan)",
      "Song KIM (North Korea)"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which soccer team won the Copa America Centenario 2016?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Colombia"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team won 2014 FIFA World Cup in Brazil?",
    correct_answer: "Germany",
    incorrect_answers: ["Argentina", "Brazil", "Netherlands"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "How many points did LeBron James score in his first NBA game?",
    correct_answer: "25",
    incorrect_answers: ["19", "69", "41"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What national team won the 2016 edition of UEFA European Championship?",
    correct_answer: "Portugal",
    incorrect_answers: ["France", "Germany", "England"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
    correct_answer: "4",
    incorrect_answers: ["1", "2", "3"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "In 2016, who won the Formula 1 World Constructor's Championship for the third time in a row?",
    correct_answer: "Mercedes-AMG Petronas",
    incorrect_answers: [
      "Scuderia Ferrari",
      "McLaren Honda",
      "Red Bull Racing Renault"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "Which city did the former NHL team The Nordiques originiate from?",
    correct_answer: "Quebec City",
    incorrect_answers: ["Houston", "Montreal", "New York"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the oldest team in the NFL?",
    correct_answer: "Arizona Cardinals",
    incorrect_answers: ["Chicago Bears", "Green Bay Packers", "New York Giants"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?",
    correct_answer: "Jules Bianchi",
    incorrect_answers: [
      "Ayrton Senna",
      "Ronald Ratzenberger",
      "Gilles Villeneuve"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of the following Grand Slam tennis tournaments occurs LAST?",
    correct_answer: "US Open",
    incorrect_answers: ["French Open", "Wimbledon", "Australian Open"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "What year did the New Orleans Saints win the Super Bowl?",
    correct_answer: "2009",
    incorrect_answers: ["2008", "2010", "2011"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
    correct_answer: "84.39m",
    incorrect_answers: ["100m", "100yd", "109.36yd"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "This Canadian television sportscaster is known for his Hockey Night in Canada role, a commentary show during hockey games.",
    correct_answer: "Don Cherry",
    incorrect_answers: ["Don McKellar", "Don Taylor ", "Donald Sutherland"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team has won the most Stanley Cups in the NHL?",
    correct_answer: "Montreal Canadians",
    incorrect_answers: [
      "Chicago Blackhawks",
      "Toronto Maple Leafs",
      "Detroit Red Wings"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which portuguese island is soccer player Cristiano Ronaldo from?",
    correct_answer: "Madeira",
    incorrect_answers: ["Terceira", "Santa Maria", "Porto Santo"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "What is the full name of the footballer Cristiano Ronaldo?",
    correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
    incorrect_answers: [
      "Cristiano Ronaldo los Santos Diego",
      "Cristiano Armando Diego Ronaldo",
      "Cristiano Luis Armando Ronaldo"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "Which year was the third Super Bowl held?",
    correct_answer: "1969",
    incorrect_answers: ["1968", "1971", "1970"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?",
    correct_answer: "Jose Fernandez",
    incorrect_answers: ["Jacob deGrom", "Shelby Miller", "Matt Harvey"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which car manufacturer won the 2017 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Chevrolet"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "When was the first official international game played?",
    correct_answer: "1872",
    incorrect_answers: ["1880", "1863", "1865"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What year did the television company BBC officially launch the channel BBC One?",
    correct_answer: "1936",
    incorrect_answers: ["1948", "1932", "1955"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, 'Top Gear'?",
    correct_answer: "Jessica",
    incorrect_answers: ["Angela", "Erica", "Sandra"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the TV show 'M*A*S*H', what was the nickname of Corporal Walter O'Reilly?",
    correct_answer: "Radar",
    incorrect_answers: ["Hawkeye", "Hot Lips", "Trapper"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Who sang the theme song for the TV show 'Rawhide'?",
    correct_answer: "Frankie Laine",
    incorrect_answers: ["Guy Mitchell", " Tennessee Ernie Ford", "Slim Whitman"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In what year did The Big Bang Theory debut on CBS?",
    correct_answer: "2007",
    incorrect_answers: ["2008", "2006", "2009"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the original Star Trek TV series, what was Captain James T. Kirk's middle name?",
    correct_answer: "Tiberius",
    incorrect_answers: ["Trevor", "Travis", "Tyrone"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Grant Gustin plays which superhero on the CW show of the same name?",
    correct_answer: "The Flash",
    incorrect_answers: ["The Arrow", "Black Canary", "Daredevil"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "What's Dr. Doofenshmirtz first name?",
    correct_answer: "Heinz",
    incorrect_answers: ["Hans", "Hank", "Heidi"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What was the name of Ross' pet monkey on Friends?",
    correct_answer: "Marcel",
    incorrect_answers: ["Jojo", "George", "Champ"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the episode of SpongeBob SquarePants, Survival of the Idiots, Spongebob called Patrick which nickname?",
    correct_answer: "Pinhead",
    incorrect_answers: ["Starfish", "Larry", "Dirty Dan"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the show Stranger Things, what is Eleven's favorite breakfast food?",
    correct_answer: "Eggo Waffles",
    incorrect_answers: ["Toast", "Captain Crunch", "Bacon and Eggs"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the show, Doctor Who, what does T.A.R.D.I.S stand for?",
    correct_answer: "Time And Relative Dimensions In Space",
    incorrect_answers: [
      "Time And Resting Dimensions In Space",
      "Time And Relative Dimensions In Style",
      "Toilet Aid Rope Dog Is Soup"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In It's Always Sunny in Philadelphia what was the name of Frank's wrestling persona?",
    correct_answer: "The Trash Man",
    incorrect_answers: ["Bird of War", "Day Man", "The Maniac"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Who co-founded the YouTube Let's Play channel Game Grumps alongside Newgrounds animator Egoraptor?",
    correct_answer: "JonTron",
    incorrect_answers: ["Pewdiepie", "Tobuscus", "Markiplier"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which company has exclusive rights to air episodes of the The Grand Tour?",
    correct_answer: "Amazon",
    incorrect_answers: ["Netflix", "BBC", "CCTV"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Dee from It's Always Sunny in Philadelphia has dated all of the following guys EXCEPT",
    correct_answer: "Matthew Rickety Cricket Mara",
    incorrect_answers: [
      "Colin the Thief",
      "Ben the Soldier",
      "Kevin Gallagher aka Lil' Kevin"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What country is Cory in the House set in?",
    correct_answer: "The United States of America",
    incorrect_answers: ["Canada", "Venezuala", "England"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In Supernatural, what's is Sam's brothers name?",
    correct_answer: "Dean",
    incorrect_answers: ["Dave", "Steve", "Mike"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the Netflix show, Stranger Things, what song would Will sing to himself as he was missing?",
    correct_answer: "Should I Stay or Should I Go?",
    incorrect_answers: [
      "Love Will Tear Us Apart",
      "This Charming Man",
      "Africa"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Which country does the YouTuber SinowBeats originate from?",
    correct_answer: "Scotland",
    incorrect_answers: ["England", "Sweden", "Germany"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What was the name of the the first episode of Doctor Who to air in 1963?",
    correct_answer: "An Unearthly Child",
    incorrect_answers: ["The Daleks", "The Aztecs", "The Edge of Destruction"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of these television shows makes everyone look under their chair?",
    correct_answer: "Oprah",
    incorrect_answers: ["Jimmy Fallon", "Saturday Night Live", "Larry Rubert"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who played the sun baby in the original run of Teletubbies?",
    correct_answer: "Jessica Smith",
    incorrect_answers: ["Pui Fan Lee", "Sue Monroe", "Lisa Brockwell"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What is the surname of the character Daryl in AMC's show The Walking Dead?",
    correct_answer: "Dixon",
    incorrect_answers: ["Grimes", "Dickinson", "Dicketson"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "How long was Ken Jennings' win streak on Jeopardy?",
    correct_answer: "74",
    incorrect_answers: ["88", "49", "62"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "In Star Trek, what is the name of Spock's father?",
    correct_answer: "Sarek",
    incorrect_answers: ["Tuvok", "T'Pal", "Surak"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Star Trek: The Next Generation, what is the name of Data's cat?",
    correct_answer: "Spot",
    incorrect_answers: ["Mittens", "Tom", "Kitty"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In which year did the British television series The Bill end?",
    correct_answer: "2010",
    incorrect_answers: ["2001", "2007", "2012"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Which British writer wrote for both Doctor Who and Sherlock?",
    correct_answer: "Steven Moffatt",
    incorrect_answers: ["Phil Ford", "Russell T Davies", "Toby Whithouse"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What is Meg's full name in Family Guy?",
    correct_answer: "Megatron Griffin",
    incorrect_answers: ["Who-Cares Griffin", "Neil Griffin", "Megan Griffin"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In season one of the Netflix political drama House of Cards, what government position does Frank Underwood hold?",
    correct_answer: "House Majority Whip",
    incorrect_answers: ["Attorney General", "President", "Chief of Staff"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which of these Disney shows is classified as an anime?",
    correct_answer: "Stitch!",
    incorrect_answers: [
      "Cory in the House",
      "The Emperor's New School",
      "Hannah Montana"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "When Donkey Kong died in the Donkey Kong Country episode It's a Wonderful Life, who was his guardian angel?",
    correct_answer: "Eddie the Mean Old Yeti",
    incorrect_answers: ["Kiddy Kong", "Diddy Kong", "King K. Rool"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of following is rude and dishonorable by Klingon standards?",
    correct_answer: "Taking his D'k tahg",
    incorrect_answers: [
      "Insulting and laughing at him at the dinner table",
      "Reaching over and taking his meal",
      "Punching him and taking his ship station position"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In Star Trek, what is the Klingon death ritual?",
    correct_answer: "Look into sky and yell loudly in mourning.",
    incorrect_answers: [
      "Kiss the jagged forehead before burial.",
      "Shoot into space in a torpedo casing.",
      "Split the deceased's earnings between bloodkin."
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Which race enjoys a glass of warm baghol in Star Trek?",
    correct_answer: "Klingon",
    incorrect_answers: ["Vulcan", "Human", "Botha"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "In Star Trek, what is the Klingon delicacy of gagh made from?",
    correct_answer: "Serpent worms",
    incorrect_answers: ["Earthworms", "Spaghetti noodles", "Klingworms"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What breed of dog is Scooby Doo?",
    correct_answer: "Great Dane",
    incorrect_answers: ["Pit bull", "Boxer", "Doberman Pinscher"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In 2008, British celebrity chef Gordon Ramsay believes he almost died after suffering what accident in Iceland while filming?",
    correct_answer: "Slipping off a cliff, and nearly drowning in icy water",
    incorrect_answers: [
      "Crash landing when arriving at Keflavik airport",
      "A minor car accident in a snowstorm",
      "Being served under-cooked chicken at his hotel"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of the following was not an actor/actress on the American television show Saturday Night Live in Season 42?",
    correct_answer: "Tina Fey",
    incorrect_answers: ["Mikey Day", "Kate McKinnon", "Sasheer Zamata"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?",
    correct_answer: "Laura Roslin",
    incorrect_answers: ["William Adama", "Tricia Helfer", "Harry Stills"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "What was the callsign of Commander William Adama in Battlestar Galactica (2004)?",
    correct_answer: "Husker",
    incorrect_answers: ["Starbuck", "Apollo", "Crashdown"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the TV show Mad Men, what was Donald Draper's birthname?",
    correct_answer: "Richard Dick Whitman",
    incorrect_answers: [
      "Donald Draper",
      "John Ashbury",
      "Michael Mikey Wilhelm"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Who was the first ever actor to play The Doctor on Doctor Who?",
    correct_answer: "William Hartnell",
    incorrect_answers: ["David Tennant", "Peter Capaldi", "Tom Baker"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which actor portrays Walter White in the series Breaking Bad?",
    correct_answer: " Bryan Cranston",
    incorrect_answers: ["Andrew Lincoln", "Aaron Paul", "RJ Mitte"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In The Simpsons, what is the real name of Comic Book Guy?",
    correct_answer: "Jeff Albertson",
    incorrect_answers: ["Comic Book Guy", "Edward Stone", "Jack Richardson"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What NBC sitcom once saw two of its characters try to pitch NBC on a sitcom about nothing?",
    correct_answer: "Seinfeld",
    incorrect_answers: ["Frasier", "Becker", "Friends"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "Prior to working at Wizards of the Coast, Mark Rosewater was a writer for which show?",
    correct_answer: "Roseanne",
    incorrect_answers: ["Boy Meets World", "The X-Files", "NYPD Blue"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What is the name of Chris's brother in Everybody Hates Chris?",
    correct_answer: "Drew",
    incorrect_answers: ["Jerome", "Greg", "Joe"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who was the winner of Big Brother Season 10?",
    correct_answer: "Dan Gheesling",
    incorrect_answers: ["Bryce Kranyik", "Ryan Sutfin", "Chris Mundorf"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Which game did Sonic The Hedgehog make his first appearance in?",
    correct_answer: "Rad Mobile",
    incorrect_answers: ["Sonic The Hedgehog", "Super Mario 64", "Mega Man"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "What is the name of Team Fortress 2 update, in which it became Free-to-play?",
    correct_answer: "&Uuml;ber Update",
    incorrect_answers: [
      "Pyromania Update",
      "Mann-Conomy Update",
      "Engineer Update"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In which series of games do you collect souls to empower you and buy weaponry and armor with?",
    correct_answer: "Souls ",
    incorrect_answers: [
      "Final Fantasy ",
      "Monster Hunter",
      "The Legend of Zelda"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the name of the virus that infected New York in Tom Clancy's The Division?",
    correct_answer: "Dollar Flu",
    incorrect_answers: ["Ebola", "Red Poison", "Smallpox"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "What is the name of Team Fortress 2's Heavy Weapons Guy's minigun?",
    correct_answer: "Sasha",
    incorrect_answers: ["Betty", "Anna", "Diana"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which of these is NOT a map included in the game Counter-Strike: Global Offensive?",
    correct_answer: "Oilrig",
    incorrect_answers: ["Assault", "Mirage", "Cache"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which video game earned music composer Mike Morasky the most awards for his work?",
    correct_answer: "Portal 2",
    incorrect_answers: [
      "Left 4 Dead 2",
      "Team Fortress 2",
      "Counter-Strike: Global Offensive"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "What is the main ship used by Commander Shepard in the Mass Effect Franchise called?",
    correct_answer: "Normandy",
    incorrect_answers: ["Osiris", "Infinity", "Endeavour"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In what year was the original Sonic the Hedgehog game released?",
    correct_answer: "1991",
    incorrect_answers: ["1989", "1993", "1995"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "The city of Rockport is featured in which of the following video games?",
    correct_answer: "Need for Speed: Most Wanted (2005)",
    incorrect_answers: [
      "Infamous 2",
      "Saints Row: The Third",
      "Burnout Revenge"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which eSports team came first place in The International Dota 2 Championship 2016?",
    correct_answer: "Wings Gaming",
    incorrect_answers: ["Digital Chaos", "Evil Geniuses", "Fnatic"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In which Mario game did the Mega Mushroom make its debut?",
    correct_answer: "Mario Party 4",
    incorrect_answers: [
      "New Super Mario Bros.",
      "Mario Kart Wii",
      "Super Mario 3D World"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "Which souls game was not directed by Hidetaka Miyazaki?",
    correct_answer: "Dark Souls 2",
    incorrect_answers: ["Demon Souls", "Dark Souls", "Dark Souls 3"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In what city in the dystopia alternate future of Half-Life 2 do you first start in?",
    correct_answer: "City 17",
    incorrect_answers: ["City 18", "City 6", "City 45"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which of these is the name of a cut enemy from Half-Life 2?",
    correct_answer: "Hydra",
    incorrect_answers: ["Cthulu", "Spike", "Tremor"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Who is the protagonist in Dead Rising (2006)?",
    correct_answer: "Frank West",
    incorrect_answers: ["Chuck Greene", "John North", "Jason Grey"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What happened to Half-Life 2 prior to its release, which resulted in Valve starting over the development of the game?",
    correct_answer: "The source code got leaked",
    incorrect_answers: [
      "They weren't satisfied with the result",
      "The story was not good enough",
      "Way too many bugs to be fixed"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Who is the leader of Team Instinct in Pokemon Go?",
    correct_answer: "Spark",
    incorrect_answers: ["Candela", "Blanche", "Willow"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Cook, Serve, Delicious!, which food is NOT included in the game?",
    correct_answer: "Pie",
    incorrect_answers: ["Shish Kabob", "Hamburger", "Lasagna"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "How many differently shaped Tetris pieces are there?",
    correct_answer: "7",
    incorrect_answers: ["5", "6", "8"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "How many flagship monsters appear in Monster Hunter Gernerations?",
    correct_answer: "4",
    incorrect_answers: ["1", "2", "3"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which Sonic the Hedgehog game was originally supposed to be packaged with Sonic 3, but was cut in half due to time constraints?",
    correct_answer: "Sonic & Knuckles",
    incorrect_answers: ["Sonic 2", "Sonic CD", "Sonic 3D Blast"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "The name of the Metroid series comes from what?",
    correct_answer: "An enemy in the game",
    incorrect_answers: [
      "The final boss's name",
      "The main character's name",
      "A spaceship's name"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which franchise had a special event hosted in the popular MMORPG Final Fantasy XIV: A Realm Reborn?",
    correct_answer: "Yo-kai Watch",
    incorrect_answers: ["Pokemon", "Yu-gi-oh", "Buddyfight"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which survivor in Left 4 Dead sacrificed themself to save the other survivors?",
    correct_answer: "Bill",
    incorrect_answers: ["Louis", "Francis", "Zoey"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which Elite Four member from the first generation of Pokemon became the champion in the next generation?",
    correct_answer: "Lance",
    incorrect_answers: ["Agatha", "Bruno", "Lorelei"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which of these characters was NOT planned to be playable for Super Smash Bros. 64?",
    correct_answer: "Peach",
    incorrect_answers: ["Bowser", "Mewtwo", "King Dedede"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the item required to summon the boss Duke Fishron in the game Terraria?",
    correct_answer: "Truffle Worm",
    incorrect_answers: ["Suspicious Looking Fish", "King Grasshopper", "Slug"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In which year did the first Monster Hunter game get released?",
    correct_answer: "2004",
    incorrect_answers: ["2006", "2005", "2002"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "In the Lego Island trilogy, who taught Pepper Roni how to read?",
    correct_answer: "Officer Laura Brick",
    incorrect_answers: [
      "Papa Brickolini",
      "Officer Nick Brick",
      "Mama Brickolini"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "What is the name of the world that the MMO RuneScape takes place in?",
    correct_answer: "Gielinor",
    incorrect_answers: ["Glindor", "Azeroth", "Zaros"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which of these operators from Tom Clancy's Rainbow Six Siege has the ability to damage reinforced walls?",
    correct_answer: "Jordan Thermite Trace",
    incorrect_answers: [
      "Eliza Ash Cohen",
      "Seamus Sledge Cowden",
      "Dominic Bandit Brunsmeier"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which of the following is not a character in the Street Fighter series?",
    correct_answer: "Mai Shiranui",
    incorrect_answers: ["Laura Matsuda", "Sakura Kasugano", "Ibuki"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "In Earthbound, how does one enter Master Belch's factory?",
    correct_answer: "Wait 3 Minutes",
    incorrect_answers: [
      "Enter the password Fly Honey",
      "Enter the password Master Belch Rules",
      "Enter the password Mr Saturn Drools"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which of these stages is not playable in Super Smash Bros. for Wii U?",
    correct_answer: "Fountain of Dreams",
    incorrect_answers: ["Bridge of Eldin", "75m", "Miiverse"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the game Red Dead Redemption, what is the name of John Marston's dog?",
    correct_answer: "Rufus",
    incorrect_answers: ["Rutus", "Finn", "Apollo"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Starbound, according to the asset files, the description of the Erchius Ghost is the same as which other assets?",
    correct_answer: "Spookit",
    incorrect_answers: ["Petricub", "Trictus", "Pyromantle"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "In Starbound, what is the max HP of the monster Punchy?",
    correct_answer: "50,000 HP",
    incorrect_answers: ["9,000,000 HP", "100 HP", "150,000 HP"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "According to the lore of Starbound, what does the Colony Deed do when it is placed down?",
    correct_answer: "Sends out an advertisement for someone to move in.",
    incorrect_answers: [
      "Teleports somebody from somewhere on the planet it is placed.",
      "Teleports a random person to the location.",
      "Materializes a new being at it's location."
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "How many unique items does Borderlands 2 claim to have?",
    correct_answer: "87 Bazillion ",
    incorrect_answers: ["87 Million", "87 Trillion", "87 Gazillion "]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Which Perk-A-Cola in Call Of Duty: Zombies was reworked in Call of Duty: Black Ops II?",
    correct_answer: "Double Tap Root Beer",
    incorrect_answers: ["Who's Who", "Juggernog", "Mule Kick"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the Call Of Duty: Zombies map Moon, there is a secondary called the QED. What does QED stand for?",
    correct_answer: "Quantum Entanglement Device",
    incorrect_answers: [
      "Quad Ectoplasmic Driver",
      "Question Every Dog",
      "Quality Edward Device"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Call Of Duty: Zombies, what is the name of Samantha Maxis' dog?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Baxter", "Fido", "Henry"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Call Of Duty: Zombies, which weapon does NOT deal any damage?",
    correct_answer: "31-79 JGb215",
    incorrect_answers: ["Sliquifier", "V-R11", "Wunderwaffe DG-2"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which one of these games came out first?",
    correct_answer: "Terraria",
    incorrect_answers: ["Minecraft", "Starbound", "Factorio"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the name of Joel's daughter in the game, The Last of Us? ",
    correct_answer: "Sarah",
    incorrect_answers: ["Ellie", "Tess", "Marlene"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "Which gaming series includes The Diabolical Box and The Curious Village?",
    correct_answer: "Professor Layton",
    incorrect_answers: ["Persona", "Etrian Odyssey", "Sam & Max"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary pistol that resembles a toy party favor?",
    correct_answer: "Quip",
    incorrect_answers: ["Eureka", "The Minstrel", "The Moot"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What is the name of the City in Saints Row The Third?",
    correct_answer: "Steelport",
    incorrect_answers: ["Stilwater", "Carcer", "Liberty"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What was the first game in the Battlefield series?",
    correct_answer: "Battlefield 1942",
    incorrect_answers: ["Battlefield Vietnam", "Battlefield 2", "Battlefield 1"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What French artist/band is known for playing on the midi instrument Launchpad?",
    correct_answer: "Madeon",
    incorrect_answers: ["Daft Punk ", "Disclosure", "David Guetta"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "On which Beatles album would you find the song 'Eleanor Rigby'?",
    correct_answer: "Revolver",
    incorrect_answers: ["Help!", "Rubber Soul", "Abbey Road"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "In the song The Ultimate Showdown of Ultimate Destiny,&rdquo; who is the only one to survive the battle?",
    correct_answer: "Mr. Rogers",
    incorrect_answers: ["Batman", "Chuck Norris", "Godzilla"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "In the Rossini opera, what was the name of 'The Barber of Seville'?",
    correct_answer: "Figaro",
    incorrect_answers: ["Angelo", "Fernando", "Dave"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which American family band had a 1986 top 10 hit with the song 'Crush On You'?",
    correct_answer: "The Jets",
    incorrect_answers: ["DeBarge", "The Jacksons", "The Cover Girls"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Who is the founder and leader of industrial rock band, 'Nine Inch Nails'?",
    correct_answer: "Trent Reznor",
    incorrect_answers: ["Marilyn Manson", "Robin Finck", "Josh Homme"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "What was the title of ABBA`s first UK hit single?",
    correct_answer: "Waterloo",
    incorrect_answers: ["Mamma Mia", "Fernando", "Dancing Queen"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Some people call me the space cowboy is the first line from what song?",
    correct_answer: "The Joker",
    incorrect_answers: [
      "Fandango",
      "Take The Money and Run",
      "Fly Like an Eagle"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which English guitarist has the nickname Slowhand?",
    correct_answer: "Eric Clapton",
    incorrect_answers: ["Mark Knopfler", "Jeff Beck", "Jimmy Page"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Ringo Starr of The Beatles mainly played what instrument?",
    correct_answer: "Drums",
    incorrect_answers: ["Bass", "Guitar", "Piano"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "How many studio albums have the duo Daft Punk released?",
    correct_answer: "4",
    incorrect_answers: ["1", "5", "2"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "What is the best selling album of all time from 1976 to 2018?",
    correct_answer: "Thriller",
    incorrect_answers: [
      "Back in Black",
      "Abbey Road",
      "The Dark Side of the Moon"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which member of the Foo Fighters was previously the drummer for Nirvana?",
    correct_answer: "Dave Grohl",
    incorrect_answers: ["Taylor Hawkins", "Nate Mendel", "Chris Shiflett"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Which M83 album is the song Midnight City featured in?",
    correct_answer: "Hurry Up, We're Dreaming",
    incorrect_answers: ["Saturdays = Youth", "Before the Dawn Heals Us", "Junk"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which of these songs by Skrillex features Fatman Scoop as a side artist?",
    correct_answer: "Recess",
    incorrect_answers: [
      "All is Fair in Love and Brostep",
      "Rock N Roll (Will Take You to the Mountain)",
      "Scary Monsters and Nice Sprites"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "How many members are there in the idol group &micro;'s?",
    correct_answer: "9",
    incorrect_answers: ["48", "6", "3"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which of these aliases has NOT been used by electronic musician Aphex Twin?",
    correct_answer: "Burial",
    incorrect_answers: ["Caustic Window", "Bradley Strider", "GAK"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these languages was NOT included in the 2016 song Don't Mind by Kent Jones?",
    correct_answer: "Portuguese",
    incorrect_answers: ["Japanese", "French", "Spanish"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "What was the name of singer Frank Ocean's second studio album, which was released on August 20, 2016?",
    correct_answer: "Blonde",
    incorrect_answers: ["Brunette", "Black", "Burgundy"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which Twitch streamer is the vocalist for Red Vox?",
    correct_answer: "Vinesauce",
    incorrect_answers: ["The8BitDrummer", "LIRIK", "Sodapoppin"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these artists has NOT been a member of dancehall group Major Lazer?",
    correct_answer: "Skrillex",
    incorrect_answers: ["Diplo", "Jillionaire", "Walshy Fire"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?",
    correct_answer: "Entranas",
    incorrect_answers: ["cow", "Sheep", "Xen"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "What's the most common time signature for rock songs?",
    correct_answer: "4/4",
    incorrect_answers: ["1/2", "8/12", "2/4"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which brass instrument has the lowest pitch in an orchestra?",
    correct_answer: "Tuba",
    incorrect_answers: ["Trumpet", "Saxophone", "Trombone"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What animal is featured on the cover of English electronic music group The Prodigy's album, The Fat of the Land?",
    correct_answer: "Crab",
    incorrect_answers: ["Fox", "Elephant", "Tiger"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
    correct_answer: "12",
    incorrect_answers: ["19", "21", "25"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "What was Rage Against the Machine's debut album?",
    correct_answer: "Rage Against the Machine",
    incorrect_answers: ["Evil Empire", "Bombtrack", "The Battle Of Los Angeles"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which one of these Pink Floyd albums were also a movie?",
    correct_answer: "The Wall",
    incorrect_answers: [
      "The Dark Side of the Moon",
      "Wish You Were Here",
      "Animals"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Johnny Cash did a cover of this song written by lead singer of Nine Inch Nails, Trent Reznor.",
    correct_answer: "Hurt",
    incorrect_answers: ["Closer", "A Warm Place", "Big Man with a Gun"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these songs by artist Eminem contain the lyric Nice to meet you. Hi, my name is... I forgot my name!?",
    correct_answer: "Rain Man",
    incorrect_answers: ["Without Me", "Kim", "Square Dance"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which country does the power metal band Sabaton originate from?",
    correct_answer: "Sweden",
    incorrect_answers: ["Germany", "United States", "Finland"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which of these bands are NOT from Australia?",
    correct_answer: "The Naked and Famous",
    incorrect_answers: ["Cut Copy", "Empire of the Sun", "Tame Impala"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What is the name of French electronic music producer Madeon's 2015 debut studio album?",
    correct_answer: "Adventure",
    incorrect_answers: ["The City", "Icarus", "Pop Culture"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "In Kendrick Lamar's 2012 album, Good Kid, M.A.A.D City, the album's story takes place in which city?",
    correct_answer: "Compton",
    incorrect_answers: ["Detroit", "New York", "Baltimore"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "This album, now considered to be one of the greatest of all time, was a commercial failure when it was released.",
    correct_answer: "The Velvet Underground and Nico",
    incorrect_answers: ["Abbey Road", "Led Zeppelin IV", "Pet Sounds"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which Disney character sings the song A Dream is a Wish Your Heart Makes?",
    correct_answer: "Cinderella",
    incorrect_answers: ["Belle", "Snow White", "Pocahontas"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "When did The Beatles release the LP Please Please Me?",
    correct_answer: "1963",
    incorrect_answers: ["1970", "1960", "1969"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Drink the Sea is an album by which electronic music artist?",
    correct_answer: "The Glitch Mob",
    incorrect_answers: ["Avicii", "XXYYXX", "Flux Pavilion"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who was featured in the song Words by Feint? ",
    correct_answer: "Laura Brehm",
    incorrect_answers: ["Anna Yvette ", "Danyka Nadeau", "Veela"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "What is the first track on Kanye West's 808s & Heartbreak?",
    correct_answer: "Say You Will",
    incorrect_answers: ["Welcome to Heartbreak", "Street Lights", "Heartless"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which song on Daft Punk's Random Access Memories features Pharrell Williams?",
    correct_answer: "Get Lucky",
    incorrect_answers: ["Doin' It Right", "Instant Crush", "The Game of Love"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the lead singer of The Lumineers?",
    correct_answer: "Wesley Schultz",
    incorrect_answers: ["Jeremiah Fraites", "Jay Van Dyke", "Neyla Pekarek"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which of the following bands is Tom DeLonge not a part of?",
    correct_answer: "+44",
    incorrect_answers: ["Box Car Racer", "Blink-182", "Angels & Airwaves"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who performed I Took A Pill In Ibiza?",
    correct_answer: "Mike Posner",
    incorrect_answers: ["Avicii", "Robbie Williams", "Harry Styles"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "What year was Min Yoongi from South Korea boy band BTS born in?",
    correct_answer: "1993",
    incorrect_answers: ["1992", "1995", "1994"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who is a pioneer of Minimal Music in 1960s?",
    correct_answer: "Steve Reich",
    incorrect_answers: ["Wolfgang Amadeus Mozart", "Brian Eno", "Sigur Ros"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the vocalist and frontman of rock band Guns N' Roses?",
    correct_answer: "Axl Rose",
    incorrect_answers: ["Kurt Cobain", "Slash", "Bono"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which artist or group did John Lennon consider son(s) of the Beatles?",
    correct_answer: "Jeff Lynne's Electric Light Orchestra",
    incorrect_answers: ["The Rolling Stones", "Pink Floyd", "The Who"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which of these songs did Jimi Hendrix cover?",
    correct_answer: "All of these songs",
    incorrect_answers: [
      "Sgt. Pepper's Lonely Hearts Club Band",
      "All Along the Watchtower",
      "House of the Rising Sun"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "When was the 3rd album Notes from the Underground of the band Hollywood Undead released?",
    correct_answer: "2013",
    incorrect_answers: ["2011", "2014", "2009"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which Apollo mission was the first one to land on the Moon?",
    correct_answer: "Apollo 11",
    incorrect_answers: ["Apollo 10", "Apollo 9", "Apollo 13"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Which of the following liquids is least viscous? Assume temperature is 25&deg;C.",
    correct_answer: "Acetone",
    incorrect_answers: ["Water", "Mercury", "Benzene"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the largest animal currently on Earth?",
    correct_answer: "Blue Whale",
    incorrect_answers: ["Orca", "Colossal Squid", "Giraffe"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which is the chemical name of H2O?",
    correct_answer: "Dihydrogen Monoxide",
    incorrect_answers: [
      "Ammonium chloride",
      "Anhydrous Sodium Carbonate",
      "Manganese dioxide"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?",
    correct_answer: "Uranus",
    incorrect_answers: ["Jupiter", "Venus", "Neptune"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which type of rock is created by intense heat AND pressure?",
    correct_answer: "Metamorphic",
    incorrect_answers: ["Sedimentary", "Igneous", "Diamond"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the powerhouse of the Eukaryotic animal cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Nucleus", "Chloroplast", "Endoplasmic Reticulum"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the elemental symbol for mercury?",
    correct_answer: "Hg",
    incorrect_answers: ["Me", "Mc", "Hy"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which of these stars is the largest?",
    correct_answer: "UY Scuti",
    incorrect_answers: ["VY Canis Majoris", "Betelgeuse", "RW Cephei"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the hottest planet in the Solar System?",
    correct_answer: "Venus",
    incorrect_answers: ["Mars", "Mercury", "Jupiter"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the first element on the periodic table?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Oxygen", "Lithium"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What was the first living creature in space?",
    correct_answer: "Fruit Flies ",
    incorrect_answers: ["Monkey", "Dog", "Mouse"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "On the Beaufort Scale of wind force, what wind name is given to number 8?",
    correct_answer: "Gale",
    incorrect_answers: ["Storm", "Hurricane", "Breeze"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What mineral has the lowest number on the Mohs scale?",
    correct_answer: "Talc",
    incorrect_answers: ["Quartz", "Diamond", "Gypsum"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Gannymede is the largest moon of which planet?",
    correct_answer: "Jupiter",
    incorrect_answers: ["Uranus", "Neptune", "Mars"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which gas forms about 78% of the Earth's atmosphere?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Argon", "Carbon Dioxide"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
    correct_answer: "8 Minutes",
    incorrect_answers: ["6 Minutes", "2 Minutes", "12 Minutes"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "An organic compound is considered an alcohol if it has what functional group?",
    correct_answer: "Hydroxyl",
    incorrect_answers: ["Carbonyl", "Alkyl", "Aldehyde"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.",
    correct_answer: "low, all",
    incorrect_answers: ["low, some", "high, all", "high, some"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which horizon in a soil profile consists of bedrock?",
    correct_answer: "R",
    incorrect_answers: ["O", "B", "D"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the chemical formula for ammonia?",
    correct_answer: "NH3",
    incorrect_answers: ["CO2", "NO3", "CH4"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many bones are in the human body?",
    correct_answer: "206",
    incorrect_answers: ["203", "209", "200"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What does DNA stand for?",
    correct_answer: "Deoxyribonucleic Acid",
    incorrect_answers: [
      "Deoxyribogenetic Acid",
      "Deoxyribogenetic Atoms",
      "Detoxic Acid"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which is not a type of neuron?",
    correct_answer: "Perceptual Neuron",
    incorrect_answers: ["Sensory Neuron", "Motor Neuron", "Interneuron"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The medical condition osteoporosis affects which part of the body?",
    correct_answer: "Bones",
    incorrect_answers: ["Skin", "Brain", "Heart"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which one of these is scientific term for Brain Freeze?",
    correct_answer: "Sphenopalatine Ganglioneuralgia",
    incorrect_answers: [
      "Hyacinthoides Italica",
      "Amaranthus Retroflexus",
      "Amblyomma Americanum"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which of these is a type of stretch/deep tendon reflex?",
    correct_answer: "Ankle jerk reflex",
    incorrect_answers: [
      "Gag reflex",
      "Pupillary light reflex",
      "Scratch reflex"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Human cells typically have how many copies of each gene?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "3"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which is the most abundant element in the universe?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Lithium", "Oxygen"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "The medical term for the belly button is which of the following?",
    correct_answer: "Umbilicus",
    incorrect_answers: ["Nevus", "Nares", "Paxillus"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which element has the highest melting point?",
    correct_answer: "Carbon",
    incorrect_answers: ["Tungsten", "Platinum", "Osmium"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which of these is a stop codon in DNA?",
    correct_answer: "TAA",
    incorrect_answers: ["ACT", "ACA", "GTA"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Which of the following plastic is commonly used for window frames, gutters and drain pipes?",
    correct_answer: "Polyvinylchloride (PVC) ",
    incorrect_answers: [
      "Polyethylene (PE)",
      "Polypropylene (PP)",
      "Polystyrene (PS)"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
    correct_answer: "Interphase",
    incorrect_answers: ["Prophase", "Stasis", "Telophase"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which of these elements on the Periodic Table is a Noble Gas?",
    correct_answer: "Neon",
    incorrect_answers: ["Potassium", "Iodine", "Colbalt"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many chromosomes are in your body cells?",
    correct_answer: "23",
    incorrect_answers: ["21", "22", "24"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the standard atomic weight of a Plutonium nucleus?",
    correct_answer: "244",
    incorrect_answers: ["94", "481", "128"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "A positron is an antiparticle of a what?",
    correct_answer: "Electron",
    incorrect_answers: ["Neutron", "Proton", "Photon"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "71% of the Earth's surface is made up of",
    correct_answer: "Water",
    incorrect_answers: ["Deserts", "Continents", "Forests"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What element on the periodic table has 92 electrons?",
    correct_answer: "Uranium",
    incorrect_answers: ["Sulfur", "Hydrogen", "Iron"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "About how old is Earth?",
    correct_answer: "4.5 Billion Years",
    incorrect_answers: [
      "3.5 Billion Years",
      "2.5 Billion Years",
      "5.5 Billion Years"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the unit of electrical inductance?",
    correct_answer: "Henry",
    incorrect_answers: ["Weber", "Coulomb", "Mho"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Which of the following is NOT a word used to describe an earthquake?",
    correct_answer: "Drop-slide",
    incorrect_answers: ["Foreshock", "Strike-slip", "Temblor"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the largest living organism currently known to man?",
    correct_answer: "Honey Fungus",
    incorrect_answers: ["Blue Whale", "Redwood Tree", "The Coral Reef"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "How long is a light-year?",
    correct_answer: "9.461 Trillion Kilometres",
    incorrect_answers: ["1 AU", "105.40 Earth-years", "501.2 Million Miles"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "What is the scientific name for the extinct hominin known as Lucy?",
    correct_answer: "Australopithecus Afarensis",
    incorrect_answers: [
      "Australopithecus Africanus",
      "Australopithecus Architeuthis",
      "Australopithecus Antaris"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What part of the brain takes its name from the Greek for seahorse?",
    correct_answer: "Hippocampus",
    incorrect_answers: ["Cerebellum", "Thalamus", "Amygdala"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What do you study if you are studying entomology?",
    correct_answer: "Insects",
    incorrect_answers: ["Humans", "the Brain", "Fish"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "Which of the following is the term for surgical complications resulting from surgical sponges left inside the patient's body?",
    correct_answer: "Gossypiboma",
    incorrect_answers: ["Gongoozler", "Jentacular", "Meupareunia"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Approximately how long is a year on Uranus?",
    correct_answer: "84 Earth years",
    incorrect_answers: ["47 Earth years", "62 Earth years", "109 Earth years"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Electronic music producer Kygo's popularity skyrocketed after a certain remix. Which song did he remix?",
    correct_answer: "Ed Sheeran - I See Fire",
    incorrect_answers: [
      "Marvin Gaye - Sexual Healing",
      "Coldplay - Midnight",
      "a-ha - Take On Me"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur? ",
    correct_answer: "Richard Branson",
    incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "According to the BBPA, what is the most common pub name in the UK?",
    correct_answer: "Red Lion",
    incorrect_answers: ["Royal Oak", "White Hart", "King's Head"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What does a milliner make and sell?",
    correct_answer: "Hats",
    incorrect_answers: ["Shoes", "Belts", "Shirts"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "In a standard set of playing cards, which is the only king without a moustache?",
    correct_answer: "Hearts",
    incorrect_answers: ["Spades", "Diamonds", "Clubs"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    correct_answer: "HTC",
    incorrect_answers: ["Oculus", "Google", "Razer"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What's the name of Batman's parents?",
    correct_answer: "Thomas & Martha",
    incorrect_answers: ["Joey & Jackie", "Jason & Sarah", "Todd & Mira"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which river flows through the Scottish city of Glasgow?",
    correct_answer: "Clyde",
    incorrect_answers: ["Tay", "Dee", "Tweed"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the most common surname Wales?",
    correct_answer: "Jones",
    incorrect_answers: ["Williams", "Davies", "Evans"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    correct_answer: "Demolition",
    incorrect_answers: [
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    correct_answer: "Key",
    incorrect_answers: ["Sword", "Pen", "Cellphone"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What is the defining characteristic of someone who is described as hirsute?",
    correct_answer: "Hairy",
    incorrect_answers: ["Rude", "Funny", "Tall"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Rolex is a company that specializes in what type of product?",
    correct_answer: "Watches",
    incorrect_answers: ["Cars", "Computers", "Sports equipment"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What word represents the letter 'T' in the NATO phonetic alphabet?",
    correct_answer: "Tango",
    incorrect_answers: ["Target", "Taxi", "Turkey"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is dabbing?",
    correct_answer: "A dance",
    incorrect_answers: ["A medical procedure", "A sport", "A language"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "When was YouTube founded?",
    correct_answer: "February 14, 2005",
    incorrect_answers: ["May 22, 2004", "September 12, 2005", "July 19, 2009"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the name of the very first video uploaded to YouTube?",
    correct_answer: "Me at the zoo",
    incorrect_answers: [
      "tribute",
      "carrie rides a truck",
      "Her new puppy from great grandpa vern."
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Before the 19th Century, the Living Room was originally called the...",
    correct_answer: "Parlor",
    incorrect_answers: ["Open Room", "Sitting Room", "Loft"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What year was Queen Elizabeth II born?",
    correct_answer: "1926",
    incorrect_answers: ["1923", "1929", "1930"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Who is a co-founder of music streaming service Spotify?",
    correct_answer: "Daniel Ek",
    incorrect_answers: [
      "Sean Parker",
      "Felix Miller",
      "Michael Breidenbruecker"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
    correct_answer: "OCBC",
    incorrect_answers: ["HSBC", "Standard Chartered", "Bank of China"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012?",
    correct_answer: "Bullfighting",
    incorrect_answers: ["Fiestas", "Flamenco", "Mariachi"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    correct_answer: "Spruce Goose",
    incorrect_answers: ["Noah's Ark", "Fat Man", "Trojan Horse"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of these is NOT one of them?",
    correct_answer: "Harry",
    incorrect_answers: ["Gus", "Phineas", "Ezra"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
    correct_answer: "India",
    incorrect_answers: ["United States of America", "Soviet Union", "Poland"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Five dollars is worth how many nickles?",
    correct_answer: "100",
    incorrect_answers: ["50", "25", "69"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which one of these is not a typical European sword design?",
    correct_answer: "Scimitar",
    incorrect_answers: ["Falchion", "Ulfberht", "Flamberge"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Which American-owned brewery led the country in sales by volume in 2015?",
    correct_answer: "D. G. Yuengling and Son, Inc",
    incorrect_answers: ["Anheuser Busch", "Boston Beer Company", "Miller Coors"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "The new One World Trade Center in Manhattan, New York City was designed by which architect? ",
    correct_answer: "David Childs",
    incorrect_answers: ["Bjarke Ingels", "Michael Arad", "Fumihiko Maki"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which of the following carbonated soft drinks were introduced first?",
    correct_answer: "Dr. Pepper",
    incorrect_answers: ["Coca-Cola", "Sprite", "Mountain Dew"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the name of Poland in Polish?",
    correct_answer: "Polska",
    incorrect_answers: ["Pupcia", "Polszka", "Poland"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What was the soft drink Pepsi originally introduced as?",
    correct_answer: "Brad's Drink",
    incorrect_answers: ["Pepsin Pop", "Carolina Cola", "Pepsin Syrup"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Where does water from Poland Spring water bottles come from?",
    correct_answer: "Maine, United States",
    incorrect_answers: ["Hesse, Germany", "Masovia, Poland", "Bavaria, Poland"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What was Bank of America originally established as?",
    correct_answer: "Bank of Italy",
    incorrect_answers: [
      "Bank of Long Island",
      "Bank of Pennsylvania",
      "Bank of Charlotte"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "In a 1994 CBS interview, Microsoft co-founder Bill Gates performed what unusual trick on camera?",
    correct_answer: "Jumping over an office chair",
    incorrect_answers: [
      "Jumping backwards over a desk",
      "Standing on his head",
      "Typing on a keyboard during a handstand"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Toshiba", "Asus", "Dell"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which slogan did the fast food company, McDonald's, use before their I'm Lovin' It slogan?",
    correct_answer: "We Love to See You Smile",
    incorrect_answers: [
      "Why Pay More!?",
      "Have It Your Way",
      "Making People Happy Through Food"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is real haggis made of?",
    correct_answer: "Sheep's Heart, Liver and Lungs",
    incorrect_answers: [
      "Sheep's Heart, Kidneys and Lungs",
      "Sheep's Liver, Kidneys and Eyes",
      "Whole Sheep"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What was the original name of the search engine Google?",
    correct_answer: "BackRub",
    incorrect_answers: ["CatMassage", "SearchPro", "Netscape Navigator"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is Tasmania?",
    correct_answer: "An Australian State",
    incorrect_answers: [
      "A flavor of Ben and Jerry's ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Where did the pineapple plant originate?",
    correct_answer: "South America",
    incorrect_answers: ["Hawaii", "Europe", "Asia"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Whose greyscale face is on the kappa emoticon on Twitch?",
    correct_answer: "Josh DeSeno",
    incorrect_answers: ["Justin DeSeno", "John DeSeno", "Jimmy DeSeno"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What company developed the vocaloid Hatsune Miku?",
    correct_answer: "Crypton Future Media",
    incorrect_answers: ["Sega", "Sony", "Yamaha Corporation"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary rainbow staff surrounded by an ever glowing rainbow aura?",
    correct_answer: "The Bifrost",
    incorrect_answers: ["Bolt", "Kudzu", "The Moot"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Named after the mallow flower, mauve is a shade of what?",
    correct_answer: "Purple",
    incorrect_answers: ["Red", "Brown", "Pink"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Which of these words means idle spectator?",
    correct_answer: "Gongoozler",
    incorrect_answers: ["Gossypiboma", "Jentacular", "Meupareunia"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    correct_answer: "Brazil",
    incorrect_answers: ["China", "South Korea", "United States of America"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "The Quadrangularis Reversum is best described as which of the following?",
    correct_answer: "A percussion instrument",
    incorrect_answers: [
      "A building in Oxford University",
      "A chess move",
      "A geometric theorem"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Where is Apple Inc. headquartered?",
    correct_answer: "Cupertino, California",
    incorrect_answers: [
      "Redwood City, California",
      "Redmond, Washington",
      "Santa Monica, CA"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Who wrote the A Song of Ice And Fire fantasy novel series?",
    correct_answer: "George R. R. Martin",
    incorrect_answers: ["George Lucas", "George Orwell", "George Eliot"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "Which author and poet famously wrote the line, The female of the species is more deadly than the male?",
    correct_answer: "Rudyard Kipling",
    incorrect_answers: [
      "Edgar Allan Poe",
      "William Shakespeare",
      "William Wordsworth"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    correct_answer: "Badger",
    incorrect_answers: ["Fox", "Frog", "Rabbit"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which famous book is sub-titled 'The Modern Prometheus'?",
    correct_answer: "Frankenstein",
    incorrect_answers: [
      "Dracula",
      "The Strange Case of Dr. Jekyll and Mr. Hyde ",
      "The Legend of Sleepy Hollow"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Who wrote the novel Moby-Dick?",
    correct_answer: "Herman Melville",
    incorrect_answers: [
      "William Golding",
      "William Shakespeare",
      "J. R. R. Tolkien"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What was the name of Captain Nemo's submarine in 20,000 Leagues Under the Sea?",
    correct_answer: "The Nautilus",
    incorrect_answers: ["The Neptune", "The Poseidon ", "The Atlantis"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the book The Martian, how long was Mark Watney trapped on Mars (in Sols)?",
    correct_answer: "549 Days",
    incorrect_answers: ["765 Days", "401 Days", "324 Days"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which of the following is the world's best-selling book?",
    correct_answer: "The Lord of the Rings",
    incorrect_answers: [
      "The Little Prince",
      "Harry Potter and the Philosopher's Stone",
      "The Da Vinci Code"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
    correct_answer: "Oswald",
    incorrect_answers: ["James", "Harold", "Christopher"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
    correct_answer: "Astoria Greengrass",
    incorrect_answers: [
      "Pansy Parkinson",
      "Millicent Bulstrode",
      "Hermione Granger"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "What is Hermione Granger's middle name?",
    correct_answer: "Jean",
    incorrect_answers: ["Jane", "Emma", "Jo"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
    correct_answer: "Gloin",
    incorrect_answers: ["Thorin Oakenshield", "Bombur", "Dwalin"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What position does Harry Potter play in Quidditch?",
    correct_answer: "Seeker",
    incorrect_answers: ["Beater", "Chaser", "Keeper"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
    correct_answer: "The Artful Dodger",
    incorrect_answers: ["Fagin", "Bull's-eye", "Mr. Fang"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What is the fourth book of the Old Testament?",
    correct_answer: "Numbers",
    incorrect_answers: ["Genesis", "Exodus", "Leviticus"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Green Eggs And Ham is a book by which author?",
    correct_answer: "Dr. Seuss",
    incorrect_answers: ["Beatrix Potter", "Roald Dahl", "A.A. Milne"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "Which famous spy novelist wrote the childrens' story Chitty-Chitty-Bang-Bang?",
    correct_answer: "Ian Fleming",
    incorrect_answers: ["Joseph Conrad", "John Buchan", "Graham Greene"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What was the name of the Mysterious Island, in Jules Verne's The Mysterious Island?",
    correct_answer: "Lincoln Island",
    incorrect_answers: [
      "Vulcania Island",
      "Prometheus Island",
      "Neptune Island"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "By what name was the author Eric Blair better known?",
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What was the pen name of novelist, Mary Ann Evans?",
    correct_answer: "George Eliot",
    incorrect_answers: [
      "George Orwell",
      "George Bernard Shaw",
      "George Saunders"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Harry Potter series, what is Headmaster Dumbledore's full name?",
    correct_answer: "Albus Percival Wulfric Brian Dumbledore",
    incorrect_answers: [
      "Albus Valum Jetta Mobius Dumbledore",
      "Albus James Lunae Otto Dumbledore",
      "Albus Valencium Horatio Kul Dumbledore"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In the The Hobbit, who kills Smaug?",
    correct_answer: "Bard",
    incorrect_answers: ["Bilbo Baggins", "Gandalf the Grey", "Frodo"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "How many Harry Potter books are there?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "6"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?",
    correct_answer: "Richard Bachman",
    incorrect_answers: ["J. D. Robb", "Mark Twain", "Lewis Carroll"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What's Harry Potter's dad's name?",
    correct_answer: "James Potter",
    incorrect_answers: ["Joey Potter", "Frank Potter", "Hairy Potter Sr."]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "The novel Jane Eyre was written by what author? ",
    correct_answer: "Charlotte Bronte",
    incorrect_answers: ["Emily Bronte", "Jane Austen", "Louisa May Alcott"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who wrote the young adult novel The Fault in Our Stars?",
    correct_answer: "John Green",
    incorrect_answers: ["Stephenie Meyer", "Suzanne Collins", "Stephen Chbosky"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "J.K. Rowling completed Harry Potter and the Deathly Hallows in which hotel in Edinburgh, Scotland?",
    correct_answer: "The Balmoral",
    incorrect_answers: [
      "The Dunstane Hotel",
      "Hotel Novotel",
      "Sheraton Grand Hotel & Spa"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer's Stone?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Spike", "Poofy", "Spot"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What is the name of the protagonist of J.D. Salinger's novel Catcher in the Rye?",
    correct_answer: "Holden Caulfield",
    incorrect_answers: ["Fletcher Christian", "Jay Gatsby", "Randall Flagg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "Which American author was also a budding travel writer and wrote of his adventures with his dog Charley?",
    correct_answer: "John Steinbeck",
    incorrect_answers: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "William Faulkner"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "According to The Hitchhiker's Guide to the Galaxy book, the answer to life, the universe and everything else is...",
    correct_answer: "42",
    incorrect_answers: ["Loving everyone around you", "Chocolate", "Death"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "The book The Little Prince was written by...",
    correct_answer: "Antoine de Saint-Exupery",
    incorrect_answers: [
      "Miguel de Cervantes Saavedra",
      "Jane Austen",
      "F. Scott Fitzgerald"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "Where does the book The Silence of the Lambs get its title from?",
    correct_answer: "The main character's trauma in childhood",
    incorrect_answers: [
      "The relation it has with killing the innocents",
      "The villain's favourite meal",
      "The voice of innocent people being shut by the powerful"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of these book series is by James Patterson?",
    correct_answer: "Maximum Ride",
    incorrect_answers: [
      "Harry Potter",
      "The Legend of Xanth",
      "The Bartemaeus Trilogy"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "In Michael Crichton's novel Jurassic Park, John Hammond meets his demise at the claws of which dinosaur?",
    correct_answer: "Procompsognathus",
    incorrect_answers: ["Dilophosaurus", "Tyrannosaurus Rex", "Velociraptor"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question: "Which of the following is NOT a work done by Shakespeare?",
    correct_answer: "Trial of Temperance",
    incorrect_answers: ["Measure For Measure", "Titus Andronicus", "Cymbeline"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "What is the name of Sherlock Holmes's brother?",
    correct_answer: "Mycroft Holmes",
    incorrect_answers: [
      "Mederi Holmes",
      "Martin Holmes",
      "Herbie Hancock Holmes"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What book series published by Jim Butcher follows a wizard in modern day Chicago?",
    correct_answer: "The Dresden Files",
    incorrect_answers: [
      "A Hat in Time",
      "The Cinder Spires",
      "My Life as a Teenage Wizard"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in Jurassic Park?",
    correct_answer: "1992 Toyota Land Cruiser",
    incorrect_answers: [
      "1992 Jeep Wrangler YJ Sahar",
      "1992 Ford Explorer XLT",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of the following was the author of Username Evie?",
    correct_answer: "Joe Sugg",
    incorrect_answers: ["Zoe Sugg", "Joe Weller", "Alfie Deyes"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "In Little Women, which of the March sisters married Laurie?",
    correct_answer: "Amy",
    incorrect_answers: ["Beth", "Jo", "Meg"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Antiquities, Ice Age, and Alliances expansions take place on which continent?",
    correct_answer: "Terisiare",
    incorrect_answers: ["Aerona", "Shiv", "Jamuraa"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Fallen Empires expansion takes place on which continent?",
    correct_answer: "Sarpadia",
    incorrect_answers: ["Otaria", "Terisiare", "Shiv"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, which plane does the Homelands expansion take place in?",
    correct_answer: "Ulgrotha",
    incorrect_answers: ["Bant", "Llanowar", "Tazeem"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What's the second book in George R. R. Martin's 'A Song of Ice and Fire' series?",
    correct_answer: "A Clash of Kings",
    incorrect_answers: [
      "A Dance with Dragons",
      "A Storm of Swords",
      "A Feast for Crows"
    ]
  },
  {
    category: "Entertainment: Books",
    difficulty: "hard",
    question:
      "In which classic novel is there a character named Homer Simpson?",
    correct_answer: "The Day of the Locust",
    incorrect_answers: ["Catch-22", "Of Mice and Men", "A Separate Peace"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "What is the name of Eragon's dragon in Eragon?",
    correct_answer: "Saphira",
    incorrect_answers: ["Glaedr", "Thorn", "Arya"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question:
      "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    correct_answer: "SCP-173",
    incorrect_answers: ["SCP-001", "SCP-999", "SCP-1459"]
  },
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Which is NOT a book in the Harry Potter Series?",
    correct_answer: "The House Elf",
    incorrect_answers: [
      "The Chamber of Secrets",
      "The Prisoner of Azkaban",
      "The Deathly Hallows"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which of the following is not the name of a 'Bond Girl'? ",
    correct_answer: "Vanessa Kensington",
    incorrect_answers: ["Pam Bouvier", "Mary Goodnight", "Wai Lin"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which of the following was not one of 'The Magnificent Seven'?",
    correct_answer: "Clint Eastwood",
    incorrect_answers: ["Steve McQueen", "Charles Bronson", "Robert Vaughn"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the movie The Iron Giant,&rdquo; this character is the protagonist.",
    correct_answer: "Hogarth Hughes",
    incorrect_answers: ["Kent Mansley", "Dean McCoppin", "Annie Hughes"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What was the last Marx Brothers film to feature Zeppo?",
    correct_answer: "Duck Soup",
    incorrect_answers: [
      "A Night at the Opera",
      "A Day at the Races",
      "Monkey Business"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "What is the highest grossing film of all time (without adjusting for inflation)?",
    correct_answer: "Avatar",
    incorrect_answers: [
      "Jurassic World",
      "Star Wars: The Force Awakens",
      "Titanic"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "When was the movie 'Con Air' released?",
    correct_answer: "1997",
    incorrect_answers: ["1985", "1999", "1990"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the film Interstellar, how long did they spend on Miller's planet?",
    correct_answer: "23 years, 4 months, and 8 days",
    incorrect_answers: [
      "15 years, 2 months, and 15 days",
      "10 months and 6 days",
      "26 years, 4 months, and 10 days"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In the 1976 film 'Taxi Driver', how many guns did Travis buy from the salesman?",
    correct_answer: "4",
    incorrect_answers: ["2", "6", "1"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Who wrote and directed the 1986 film 'Platoon'?",
    correct_answer: "Oliver Stone",
    incorrect_answers: [
      "Francis Ford Coppola",
      "Stanley Kubrick",
      "Michael Cimino"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which retired American football quarterback played himself in 'Ace Ventura: Pet Detective' and 'Little Nicky'?",
    correct_answer: "Dan Marino",
    incorrect_answers: ["John Elway", "Tom Brady", "Joe Montana"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Who played Deputy Marshal Samuel Gerard in the 1993 film The Fugitive?",
    correct_answer: "Tommy Lee Jones",
    incorrect_answers: ["Harrison Ford", "Harvey Keitel", "Martin Landau"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What was Marilyn Monroe`s character's first name in the film Some Like It Hot?",
    correct_answer: "Sugar",
    incorrect_answers: ["Honey", "Caramel", "Candy"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Which movie contains the quote, Say hello to my little friend!?",
    correct_answer: "Scarface",
    incorrect_answers: ["Reservoir Dogs", "Heat", "Goodfellas"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "In which 1955 film does Frank Sinatra play Nathan Detroit?",
    correct_answer: "Guys and Dolls",
    incorrect_answers: [
      "Anchors Aweigh",
      "From Here to Eternity",
      "High Society"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "The Queen song `A Kind Of Magic` is featured in which 1986 film?",
    correct_answer: "Highlander",
    incorrect_answers: ["Flash Gordon", "Labyrinth", "Howard the Duck"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "This movie contains the quote, I love the smell of napalm in the morning!",
    correct_answer: "Apocalypse Now",
    incorrect_answers: ["Platoon", "The Deer Hunter", "Full Metal Jacket"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "This movie contains the quote, Houston, we have a problem.",
    correct_answer: "Apollo 13",
    incorrect_answers: ["The Right Stuff", "Capricorn One", "Marooned"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In which African country was the 2006 film 'Blood Diamond' mostly set in?",
    correct_answer: "Sierra Leone",
    incorrect_answers: ["Liberia", "Burkina Faso", "Central African Republic"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the name of the dog that played Toto in the 1939 film The Wizard of Oz?",
    correct_answer: "Terry",
    incorrect_answers: ["Tommy", "Teddy", "Toto"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "What is the orange and white bot's name in Star Wars: The Force Awakens?",
    correct_answer: "BB-8",
    incorrect_answers: ["BB-3", "AA-A", "R2-D2"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What is the name of the assassin in the first Hellboy movie?",
    correct_answer: "Karl Ruprecht Kroenen",
    incorrect_answers: [
      "Klaus Werner von Krupt",
      "Grigori Efimovich Rasputin",
      "Ilsa Haupstein"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "What is the name of the first Star Wars film by release order?",
    correct_answer: "A New Hope",
    incorrect_answers: [
      "The Phantom Menace",
      "The Force Awakens",
      "Revenge of the Sith"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "Which of these actors/actresses is NOT a part of the cast for the 2016 movie Suicide Squad?",
    correct_answer: "Scarlett Johansson",
    incorrect_answers: ["Jared Leto", "Will Smith", "Margot Robbie"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question: "What did the first moving picture depict?",
    correct_answer: "A galloping horse",
    incorrect_answers: [
      "A woman in a dress",
      "A man walking",
      "A crackling fire"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which iconic character is featured in movies such as The Enforcer, Sudden Impact, and The Dead Pool?",
    correct_answer: "Dirty Harry",
    incorrect_answers: ["Indiana Jones", "James Bond", "Harry Potter"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1971 film Willy Wonka & the Chocolate Factory, who played Willy Wonka?",
    correct_answer: "Gene Wilder",
    incorrect_answers: ["Shia LeBouf", "Peter Ostrum", "Johnny Depp"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In what Disney movie can you spot the character Pac-Man in if you look closely enough in some scenes?",
    correct_answer: "Tron",
    incorrect_answers: ["Big Hero 6", "Fantasia", "Monsters, Inc."]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the 1979 British film Quadrophenia what is the name of the seaside city the mods are visiting?",
    correct_answer: "Brighton",
    incorrect_answers: ["Eastbourne", "Mousehole", "Bridlington"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Who played Baron Victor Frankestein in the 1957 Hammer horror film The Curse of Frankenstein?",
    correct_answer: "Peter Cushing",
    incorrect_answers: ["Boris Karloff", "Vincent Price", "Lon Chaney Jr."]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Which one of these action movies are shot entirely in one take?",
    correct_answer: "Victoria",
    incorrect_answers: [
      "Ip Man 2",
      "The Bourne Legacy",
      "Leon: The Professional"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "In the movie Cast Away the main protagonist's best friend while on the island is named",
    correct_answer: "Wilson",
    incorrect_answers: ["Carson", "Jackson", "Willy"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "The 2002 film 28 Days Later is mainly set in which European country?",
    correct_answer: "United Kingdom",
    incorrect_answers: ["France", "Italy", "Germany"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In Back to the Future Part II, Marty and Dr. Emmett Brown go to which future date?",
    correct_answer: "October 21, 2015",
    incorrect_answers: ["August 28, 2015", "July 20, 2015", "January 25, 2015"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Darth Vader's famous reveal to Luke is iconic. But which of these is the right one?",
    correct_answer: "No. I am your father.",
    incorrect_answers: [
      "Luke, I am your father.",
      "You're wrong. I am your father.",
      "The truth is that I am your father."
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "What was the first monster to appear alongside Godzilla?",
    correct_answer: "Anguirus",
    incorrect_answers: ["King Kong", "Mothra", "King Ghidora"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "What was the name of the actor who played Leatherface in the 1974 horror film, The Texas Chainsaw Massacre?",
    correct_answer: "Gunnar Hansen",
    incorrect_answers: ["Edwin Neal", "John Dugan", "Joe Bill Hogan"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Who played the Cenobite called Pinhead in the original Hellraiser films?",
    correct_answer: "Doug Bradley",
    incorrect_answers: ["Doug Jones", "Doug Savant", "Doug Benson"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the correct spelling of the protagonist of the book in The NeverEnding Story (1984)?",
    correct_answer: "Atreyu",
    incorrect_answers: ["Atrayu", "Atraiyu", "Atraeyu"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "At the end of the 2001 film Rat Race, whose concert do the contestants crash?",
    correct_answer: "Smash Mouth",
    incorrect_answers: ["Bowling for Soup", "Sum 41", "Linkin Park"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "Which famous singer was portrayed by actor Kevin Spacey in the 2004 biographical film Beyond the Sea?",
    correct_answer: "Bobby Darin",
    incorrect_answers: ["Louis Armstrong", "Frank Sinatra", "Dean Martin"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question:
      "The 2016 Disney animated film 'Moana' is based on which culture?",
    correct_answer: "Polynesian",
    incorrect_answers: ["Native American", "Japanese", "Nordic"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "In the 1995 film Balto, who are Steele's accomplices?",
    correct_answer: "Kaltag, Nikki, and Star",
    incorrect_answers: [
      "Dusty, Kirby, and Ralph",
      "Nuk, Yak, and Sumac",
      "Jenna, Sylvie, and Dixie"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "In the Jurassic Park universe, what is the name of the island that contains InGen's Site B?",
    correct_answer: "Isla Sorna",
    incorrect_answers: ["Isla Nublar", "Isla Pena", "Isla Muerta"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in Jurassic Park?",
    correct_answer: "1992 Ford Explorer XLT",
    incorrect_answers: [
      "1992 Toyota Land Cruiser",
      "1992 Jeep Wrangler YJ Sahar",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "In what year does Jurassic World open in the Jurassic Park universe?",
    correct_answer: "2005",
    incorrect_answers: ["2007", "2015", "2020"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "What is the name of the supercomputer located in the control room in Jurassic Park?",
    correct_answer: "Thinking Machines CM-5",
    incorrect_answers: ["Cray X-MP", "Cray XK7", "IBM Blue Gene/Q"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "Before Jurassic Park III was finalized and the Spinosaurus was chosen, which dinosaur was going to be the star?",
    correct_answer: "Baryonyx",
    incorrect_answers: ["Tyrannosaurus Rex", "Velociraptor", "Suchomimus"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "hard",
    question:
      "What three movies, in order from release date, make up the Dollars Trilogy?",
    correct_answer:
      "A Fistful of Dollars, For a Few Dollars More, The Good, the Bad, and the Ugly",
    incorrect_answers: [
      "The Good, the Bad, and the Ugly, For A Few Dollars More, A Fistful of Dollars",
      "For a Few Dollars More, The Good, the Bad, and the Ugly, A Fistful of Dollars",
      "For a Few Dollars More, A Fistful of Dollars, The Good, the Bad, and the Ugly"
    ]
  },
  {
    category: "Entertainment: Film",
    difficulty: "easy",
    question: "Where does the original Friday The 13th movie take place?",
    correct_answer: "Camp Crystal Lake",
    incorrect_answers: ["Packanack", "Higgins Haven", "Camp Forest Green"]
  },
  {
    category: "Entertainment: Film",
    difficulty: "medium",
    question: "Which director directed the movie Pan's Labyrinth?",
    correct_answer: "Guillermo Del Toro",
    incorrect_answers: [
      "Alfonso Cuaron",
      "Alejandro Gonzalez Inarritu",
      " Alejandro Jodorowsky"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "At which bridge does the annual Oxford and Cambridge boat race start?",
    correct_answer: "Putney",
    incorrect_answers: ["Hammersmith", "Vauxhall ", "Battersea"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
    correct_answer: "Nine",
    incorrect_answers: ["Ten", "Seven", "Eight"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
    correct_answer: "Jordan",
    incorrect_answers: ["Benetton", "Ferrari", "Mercedes"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "What tool lends it's name to a last-stone advantage in an end in Curling?",
    correct_answer: "Hammer",
    incorrect_answers: ["Wrench", "Drill", "Screwdriver"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of these teams isn't a member of the NHL's Original Six era?",
    correct_answer: "Philadelphia Flyers",
    incorrect_answers: [
      "New York Rangers",
      "Toronto Maple Leafs",
      "Boston Bruins"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Who was the British professional wrestler Shirley Crabtree better known as?",
    correct_answer: "Big Daddy",
    incorrect_answers: ["Giant Haystacks", "Kendo Nagasaki", "Masambula"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the nickname of Northampton town's rugby union club?",
    correct_answer: "Saints",
    incorrect_answers: ["Harlequins", "Saracens", "Wasps"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "How many soccer players should be on the field at the same time?",
    correct_answer: "22",
    incorrect_answers: ["20", "24", "26"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In what sport is a shuttlecock used?",
    correct_answer: "Badminton",
    incorrect_answers: ["Table Tennis", "Rugby", "Cricket"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which team won the 2015-16 English Premier League?",
    correct_answer: "Leicester City",
    incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which Formula One driver was nicknamed 'The Professor'?",
    correct_answer: "Alain Prost",
    incorrect_answers: ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "How many scoring zones are there on a conventional dart board?",
    correct_answer: "82",
    incorrect_answers: ["62", "42", "102"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "In a game of snooker, what colour ball is worth 3 points?",
    correct_answer: "Green",
    incorrect_answers: ["Yellow", "Brown", "Blue"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "With which doubles partner did John McEnroe have most success?",
    correct_answer: "Peter Fleming",
    incorrect_answers: ["Mark Woodforde", "Michael Stich", "Mary Carillo"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "In baseball, how many fouls are an out?",
    correct_answer: "0",
    incorrect_answers: ["5", "3", "2"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which nation hosted the FIFA World Cup in 2006?",
    correct_answer: "Germany",
    incorrect_answers: ["United Kingdom", "Brazil", "South Africa"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the highest belt you can get in Taekwondo?",
    correct_answer: "Black",
    incorrect_answers: ["White", "Red", "Green"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "The Rio 2016 Summer Olympics held it's closing ceremony on what date?",
    correct_answer: "August 21",
    incorrect_answers: ["August 23", "August 19", "August 17"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Which country is hosting the 2018 FIFA World Cup?",
    correct_answer: "Russia",
    incorrect_answers: ["Germany", "United States", "Saudi Arabia"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "Which driver has been the Formula 1 world champion for a record 7 times?",
    correct_answer: "Michael Schumacher",
    incorrect_answers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which team was the 2015-2016 NBA Champions?",
    correct_answer: "Cleveland Cavaliers",
    incorrect_answers: [
      "Golden State Warriors",
      "Toronto Raptors",
      "Oklahoma City Thunders"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which team was the 2014-2015 NBA Champions?",
    correct_answer: "Golden State Warriors",
    incorrect_answers: [
      "Cleveland Cavaliers",
      "Houston Rockets",
      "Atlanta Hawks"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "Where was the Games of the XXII Olympiad held?",
    correct_answer: "Moscow",
    incorrect_answers: ["Barcelona", "Tokyo", "Los Angeles"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Josh Mansour is part of what NRL team?",
    correct_answer: "Penrith Panthers",
    incorrect_answers: [
      "Melbourne Storm",
      "Sydney Roosters",
      "North Queensland Cowboys"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which car company is the only Japanese company which won the 24 Hours of Le Mans?",
    correct_answer: "Mazda",
    incorrect_answers: ["Toyota", "Subaru", "Nissan"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which Italian footballer told Neuer where he's putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which male player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "Ma Long (China)",
    incorrect_answers: [
      "Zhang Jike (China)",
      "Jun Mizutani (Japan)",
      "Vladimir Samsonov (Belarus)"
    ]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question:
      "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "DING Ning (China)",
    incorrect_answers: [
      "LI Xiaoxia (China)",
      "Ai FUKUHARA (Japan)",
      "Song KIM (North Korea)"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which soccer team won the Copa America 2015 Championship ?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Paraguay"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Which soccer team won the Copa America Centenario 2016?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Colombia"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "How many points did LeBron James score in his first NBA game?",
    correct_answer: "25",
    incorrect_answers: ["19", "69", "41"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "What national team won the 2016 edition of UEFA European Championship?",
    correct_answer: "Portugal",
    incorrect_answers: ["France", "Germany", "England"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
    correct_answer: "4",
    incorrect_answers: ["1", "2", "3"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "Who won the 2016 Formula 1 World Driver's Championship?",
    correct_answer: "Nico Rosberg",
    incorrect_answers: ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "In 2016, who won the Formula 1 World Constructor's Championship for the third time in a row?",
    correct_answer: "Mercedes-AMG Petronas",
    incorrect_answers: [
      "Scuderia Ferrari",
      "McLaren Honda",
      "Red Bull Racing Renault"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "Which city did the former NHL team The Nordiques originiate from?",
    correct_answer: "Quebec City",
    incorrect_answers: ["Houston", "Montreal", "New York"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "What team won the 2016 MLS Cup?",
    correct_answer: "Seattle Sounders",
    incorrect_answers: ["Colorado Rapids", "Toronto FC", "Montreal Impact"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the oldest team in the NFL?",
    correct_answer: "Arizona Cardinals",
    incorrect_answers: ["Chicago Bears", "Green Bay Packers", "New York Giants"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What is the oldest team in Major League Baseball?",
    correct_answer: "Atlanta Braves",
    incorrect_answers: [
      "Chicago Cubs",
      "Cincinnati Reds",
      "St. Louis Cardinals"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?",
    correct_answer: "Jules Bianchi",
    incorrect_answers: [
      "Ayrton Senna",
      "Ronald Ratzenberger",
      "Gilles Villeneuve"
    ]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question:
      "This Canadian television sportscaster is known for his Hockey Night in Canada role, a commentary show during hockey games.",
    correct_answer: "Don Cherry",
    incorrect_answers: ["Don McKellar", "Don Taylor ", "Donald Sutherland"]
  },
  {
    category: "Sports",
    difficulty: "hard",
    question: "What is the full name of the footballer Cristiano Ronaldo?",
    correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
    incorrect_answers: [
      "Cristiano Ronaldo los Santos Diego",
      "Cristiano Armando Diego Ronaldo",
      "Cristiano Luis Armando Ronaldo"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Who won the Champions League in 1999?",
    correct_answer: "Manchester United",
    incorrect_answers: ["Barcelona", "Bayern Munich", "Liverpool"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Who won the 2015 College Football Playoff (CFP) National Championship? ",
    correct_answer: "Ohio State Buckeyes",
    incorrect_answers: [
      "Alabama Crimson Tide",
      "Clemson Tigers",
      "Wisconsin Badgers"
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "What year was hockey legend Wayne Gretzky born?",
    correct_answer: "1961",
    incorrect_answers: ["1965", "1959", "1963"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?",
    correct_answer: "Jose Fernandez",
    incorrect_answers: ["Jacob deGrom", "Shelby Miller", "Matt Harvey"]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question: "Why was The Green Monster at Fenway Park was originally built?",
    correct_answer: "To prevent viewing games from outside the park.",
    incorrect_answers: [
      "To make getting home runs harder.",
      "To display advertisements.",
      "To provide extra seating."
    ]
  },
  {
    category: "Sports",
    difficulty: "medium",
    question:
      "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
    correct_answer: "American Football",
    incorrect_answers: ["Wrestling", "Archery", "Horse-Racing"]
  },
  {
    category: "Sports",
    difficulty: "easy",
    question: "When was the first official international game played?",
    correct_answer: "1872",
    incorrect_answers: ["1880", "1863", "1865"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "From what show is the character James Doakes? ",
    correct_answer: "Dexter",
    incorrect_answers: [
      "Marvel's Daredevil",
      "Boardwalk Empire",
      "The Walking Dead"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the TV series Person of Interest, who plays the character Harold Finch?",
    correct_answer: "Michael Emerson",
    incorrect_answers: ["Jim Caviezel", "Taraji P. Henson", "Kevin Chapman"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the Doctor Who universe, how many times can a time lord normally regenerate?",
    correct_answer: "12",
    incorrect_answers: ["11", "13", "15"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the TV show Cheers, Sam Malone was a former relief pitcher for which baseball team?",
    correct_answer: "Boston Red Sox",
    incorrect_answers: [
      "New York Mets",
      "Baltimore Orioles",
      "Milwaukee Brewers"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Who played Agent Fox Mulder in the TV sci-fi drama The X-Files?",
    correct_answer: "David Duchovny",
    incorrect_answers: ["Gillian Anderson", "Robert Patrick", "Mitch Pileggi"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Who is the star of the AMC series Breaking Bad?",
    correct_answer: "Walter White",
    incorrect_answers: ["Saul Goodman", "Jesse Pinkman", "Skyler White"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In which British seaside town was the BBC sitcom Fawlty Towers set?",
    correct_answer: "Torquay",
    incorrect_answers: ["Blackpool", "Bournemouth", "Great Yarmouth"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "What was the name of Ross' pet monkey on Friends?",
    correct_answer: "Marcel",
    incorrect_answers: ["Jojo", "George", "Champ"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which of these characters in Stranger Things has the power of Telekinesis?",
    correct_answer: "Eleven",
    incorrect_answers: ["Mike", "Lucas", "Karen"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the show, Doctor Who, what does T.A.R.D.I.S stand for?",
    correct_answer: "Time And Relative Dimensions In Space",
    incorrect_answers: [
      "Time And Resting Dimensions In Space",
      "Time And Relative Dimensions In Style",
      "Toilet Aid Rope Dog Is Soup"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In It's Always Sunny in Philadelphia what was the name of Frank's wrestling persona?",
    correct_answer: "The Trash Man",
    incorrect_answers: ["Bird of War", "Day Man", "The Maniac"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "Which company has exclusive rights to air episodes of the The Grand Tour?",
    correct_answer: "Amazon",
    incorrect_answers: ["Netflix", "BBC", "CCTV"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Dee from It's Always Sunny in Philadelphia has dated all of the following guys EXCEPT",
    correct_answer: "Matthew Rickety Cricket Mara",
    incorrect_answers: [
      "Colin the Thief",
      "Ben the Soldier",
      "Kevin Gallagher aka Lil' Kevin"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Game of Thrones, what continent lies across the Narrow Sea from Westeros?",
    correct_answer: "Essos",
    incorrect_answers: ["Easteros", "Westereast", "Esuntos"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In Supernatural, what's is Sam's brothers name?",
    correct_answer: "Dean",
    incorrect_answers: ["Dave", "Steve", "Mike"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In DuckTales, what is the name of the city where all the main characters live?",
    correct_answer: "Duckburg",
    incorrect_answers: ["Duckwing", "Tailspin", "Wingford"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In the television show Breaking Bad, what is the street name of Walter and Jesse's notorious product?",
    correct_answer: "Blue Sky",
    incorrect_answers: ["Baby Blue", "Rock Candy", "Pure Glass"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the Netflix show, Stranger Things, what song would Will sing to himself as he was missing?",
    correct_answer: "Should I Stay or Should I Go?",
    incorrect_answers: [
      "Love Will Tear Us Apart",
      "This Charming Man",
      "Africa"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Which country does the YouTuber SinowBeats originate from?",
    correct_answer: "Scotland",
    incorrect_answers: ["England", "Sweden", "Germany"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who played the sun baby in the original run of Teletubbies?",
    correct_answer: "Jessica Smith",
    incorrect_answers: ["Pui Fan Lee", "Sue Monroe", "Lisa Brockwell"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "What is the real name of the famous spanish humorist, El Risitas?",
    correct_answer: "Juan Joya Borga",
    incorrect_answers: [
      "Gabriel Garcia Marquez",
      "Jesus Quintero",
      "Ernesto Guevara"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What is the surname of the character Daryl in AMC's show The Walking Dead?",
    correct_answer: "Dixon",
    incorrect_answers: ["Grimes", "Dickinson", "Dicketson"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "How long was Ken Jennings' win streak on Jeopardy?",
    correct_answer: "74",
    incorrect_answers: ["88", "49", "62"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "In Star Trek, what is the name of Spock's father?",
    correct_answer: "Sarek",
    incorrect_answers: ["Tuvok", "T'Pal", "Surak"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Star Trek: The Next Generation, what is the name of Data's cat?",
    correct_answer: "Spot",
    incorrect_answers: ["Mittens", "Tom", "Kitty"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In which year did the British television series The Bill end?",
    correct_answer: "2010",
    incorrect_answers: ["2001", "2007", "2012"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Who was the winner of the 2016 WWE Royal Rumble?",
    correct_answer: "Triple H",
    incorrect_answers: ["Roman Reigns", "AJ Styles", "Dean Ambrose"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "British actor David Morrissey stars as which role in The Walking Dead?",
    correct_answer: "The Governor",
    incorrect_answers: ["Negan", "Rick Grimes", "Daryl Dixon"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which of these Disney shows is classified as an anime?",
    correct_answer: "Stitch!",
    incorrect_answers: [
      "Cory in the House",
      "The Emperor's New School",
      "Hannah Montana"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "How many seasons did the TV show Donkey Kong Country last?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "5"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "In the television show Lazy Town, who is the actor of Robbie Rotten?",
    correct_answer: "Stefan Stefansson",
    incorrect_answers: ["Adam Sandler", "Magnus Scheving", "Stephen Carl"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In Star Trek, what is the Ferengi's First Rule of Acquisition?",
    correct_answer: "Once you have their money, you never give it back. ",
    incorrect_answers: [
      "Never place friendship above profit",
      "Greed is Eternal",
      "Never allow family to stand in the way of opportunity"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In Star Trek, what sauce is commonly used by Klingons on bregit lung?",
    correct_answer: "Grapok sauce",
    incorrect_answers: [
      "Gazorpazorp pudding",
      "Sweet chili sauce",
      "Grapork sauce"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "In Star Trek, what is the Klingon delicacy of gagh made from?",
    correct_answer: "Serpent worms",
    incorrect_answers: ["Earthworms", "Spaghetti noodles", "Klingworms"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "Alan Reed is known for providing the voice of which character?",
    correct_answer: "Fred Flintstone",
    incorrect_answers: ["Bugs Bunny", "Fangface", "G.I. Joe"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which of the following was not an actor/actress on the American television show Saturday Night Live in Season 42?",
    correct_answer: "Tina Fey",
    incorrect_answers: ["Mikey Day", "Kate McKinnon", "Sasheer Zamata"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "What is the name of the main antagonists in Battlestar Galactica?",
    correct_answer: "The Cylons",
    incorrect_answers: ["The Collective", "The Federation", "The Rebels"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "What was the name of the inflatable duck sacrified to the crowd at the end of Episode 34 of the 18th season of Big Brother?",
    correct_answer: "Pablo",
    incorrect_answers: ["Esteban", "Carlos", "Duckster"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "In season one of the US Kitchen Nightmares, Gordan Ramsay tried to save 10 different restaurants. How many ended up closing afterwards?",
    correct_answer: "9",
    incorrect_answers: ["6", "3", "0"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question:
      "In Star Trek: Voyager, which episode did Voyager establish real-time communication with Starfleet Headquarters?",
    correct_answer: "Pathfinder",
    incorrect_answers: [
      "Message In A Bottle",
      "Someone To Watch Over Me",
      "Counterpoint"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "In the TV show Mad Men, what was Donald Draper's birthname?",
    correct_answer: "Richard Dick Whitman",
    incorrect_answers: [
      "Donald Draper",
      "John Ashbury",
      "Michael Mikey Wilhelm"
    ]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Who was the first ever actor to play The Doctor on Doctor Who?",
    correct_answer: "William Hartnell",
    incorrect_answers: ["David Tennant", "Peter Capaldi", "Tom Baker"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "Which actor portrays Walter White in the series Breaking Bad?",
    correct_answer: " Bryan Cranston",
    incorrect_answers: ["Andrew Lincoln", "Aaron Paul", "RJ Mitte"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "In The Simpsons, what is the real name of Comic Book Guy?",
    correct_answer: "Jeff Albertson",
    incorrect_answers: ["Comic Book Guy", "Edward Stone", "Jack Richardson"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question:
      "Prior to working at Wizards of the Coast, Mark Rosewater was a writer for which show?",
    correct_answer: "Roseanne",
    incorrect_answers: ["Boy Meets World", "The X-Files", "NYPD Blue"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question:
      "Which WWF wrestler had the nickname The Ayatollah of Rock 'N' Rolla?",
    correct_answer: "Chris Jericho",
    incorrect_answers: ["Marty Jannetty", "Scott Hall", "Shawn Michaels"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "What is the name of Chris's brother in Everybody Hates Chris?",
    correct_answer: "Drew",
    incorrect_answers: ["Jerome", "Greg", "Joe"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "easy",
    question: "On the NBC show Community, whose catch-phrase was Pop! Pop!?",
    correct_answer: "Magnitude",
    incorrect_answers: ["Star Burns", "Leonard", "Senoir Chang"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "medium",
    question: "On the NBC show Community what was Star Burns' real name?",
    correct_answer: "Alex",
    incorrect_answers: ["Todd", "Neal", "Grimus"]
  },
  {
    category: "Entertainment: Television",
    difficulty: "hard",
    question: "Who was the winner of Big Brother Season 10?",
    correct_answer: "Dan Gheesling",
    incorrect_answers: ["Bryce Kranyik", "Ryan Sutfin", "Chris Mundorf"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Who's the creator of Geometry Dash?",
    correct_answer: "Robert Topala",
    incorrect_answers: ["Scott Cawthon", "Adam Engels", "Andrew Spinks"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which company developed the video game Borderlands?",
    correct_answer: "Gearbox Software",
    incorrect_answers: ["2K Games", "Activision", "Rockstar Games"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In the Halo franchise, in what country is New Mombasa?",
    correct_answer: "Kenya",
    incorrect_answers: ["India", "Turkey", "Slovakia"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What is the main character of Metal Gear Solid 2?",
    correct_answer: "Raiden",
    incorrect_answers: ["Solidus Snake", "Big Boss", "Venom Snake"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "Which of these is NOT a player class in Team Fortress 2?",
    correct_answer: "Healer",
    incorrect_answers: ["Demoman", "Pyro", "Spy"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "Which of these characters in Undertale can the player NOT go on a date with?",
    correct_answer: "Toriel",
    incorrect_answers: ["Papyrus", "Undyne", "Alphys"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In the original Super Mario Bros., what is the acceleration of Mario if he was in free fall?",
    correct_answer: "9.31 g",
    incorrect_answers: ["11 g", "9.42 g", "4.4 g"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What is the name of the final boss in Turok: Dinosaur Hunter?",
    correct_answer: "The Campaigner",
    incorrect_answers: ["The Primagen", "Oblivion", "Lord Tyrannus"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the name the location-based augmented reality game developed by Niantic before Pokemon GO?",
    correct_answer: "Ingress",
    incorrect_answers: ["Aggress", "Regress", "Digress"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What is the title of song on the main menu in Halo?",
    correct_answer: "Halo",
    incorrect_answers: ["Opening Suite", "Shadows", "Suite Autumn"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Who is the founder of Team Fortress 2's fictional company Mann Co?",
    correct_answer: "Zepheniah Mann",
    incorrect_answers: ["Cave Johnson", "Wallace Breem", "Saxton Hale"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "In Overwatch, what is the hero McCree's full name?",
    correct_answer: "Jesse McCree",
    incorrect_answers: [
      "Jack McCree Morrison",
      "Gabriel Reyes",
      "Jamison Deadeye Fawkes"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Who is the protagonist of the videogame Dead Rising 2?",
    correct_answer: "Chuck Greene",
    incorrect_answers: ["Nick Ramos", "Frank West", "Katie Greene"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "The creator of the Touhou Project series is:",
    correct_answer: "ZUN",
    incorrect_answers: ["SUN", "RUN", "PUN"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "Which of the following is NOT a summon in the game South Park: The Stick of Truth?",
    correct_answer: "Towelie",
    incorrect_answers: ["Jesus", "Mr. Hankey", "Mr. Slave"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What name does the little headcrab in Half Life 2 have?",
    correct_answer: "Lamarr",
    incorrect_answers: ["Jumperr", "Drett", "Jerry"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question: "What was the world's first handheld game device?",
    correct_answer: "Mattel Auto Race",
    incorrect_answers: ["Game Boy", "Microvision", "Game & Watch"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What is the name of the main character in Life is Strange?",
    correct_answer: "Maxine Caulfield",
    incorrect_answers: ["Victoria Chase", "Stella Hill", "Chloe Price"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What was the name of the first MMORPG to popularize the genre?",
    correct_answer: "Ultima Online",
    incorrect_answers: ["World of Warcraft", "Meridian 59", "Guild Wars"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "In the video game Team Fortress 2, which class is able to double jump?",
    correct_answer: "Scout",
    incorrect_answers: ["Spy", "Engineer", "Pyro"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which one of these games wasn't released in 2016?",
    correct_answer: "Metal Gear Solid V",
    incorrect_answers: [
      "Tom Clancy's The Division",
      "Killing Floor 2",
      "Hitman"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Hitman: Blood Money, what is the name of the target in the mission Death of a Showman?",
    correct_answer: "Joseph Clarence",
    incorrect_answers: ["The Swing King", "Maynard John", "Manuel Delgado"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "How many trophies are there in Super Smash Bros. for Nintendo 3DS?",
    correct_answer: "685",
    incorrect_answers: ["1360", "716", "1155"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "What element does the Zinogre use in Monster Hunter?",
    correct_answer: "Thunder",
    incorrect_answers: ["Ice", "Fire", "Water"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "How many voice channels does the Super Nintendo Entertainment System support?",
    correct_answer: "8",
    incorrect_answers: ["6", "10", "12"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Fallout 4, what is the name of the dog you find at Red Rocket truck stop?",
    correct_answer: "Dogmeat",
    incorrect_answers: ["Sparky", "Quazar", "Chop"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "The Potato Sack was a collection of indie games released on Steam in 2011 as a promotion for which game?",
    correct_answer: "Portal 2",
    incorrect_answers: ["Left 4 Dead 2", "Half-Life 3", "Dota 2"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "Danganronpa Another Episode: Ultra Despair Girls is set after which Danganronpa game?",
    correct_answer: "Danganronpa: Trigger Happy Havoc",
    incorrect_answers: [
      "Danganronpa 2: Goodbye Despair",
      "Danganronpa V3: Killing Harmony",
      "Danganronpa 3: The End of Hope's Peak High School"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "When was the video game P.A.M.E.L.A. released on Steam?",
    correct_answer: "March 9, 2017",
    incorrect_answers: [
      "January 7, 2007",
      "October 23, 1997",
      "February 16, 2015"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which of these is not a DLC vehicle in Mario Kart 8?",
    correct_answer: "Wild Wiggler",
    incorrect_answers: ["Bone Rattler", "B Dasher", "300 SL Roadster"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "What programming language was used to create the game Minecraft?",
    correct_answer: "Java",
    incorrect_answers: ["HTML 5", "C++", "Python"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "When was the video game publisher Ubisoft founded ?",
    correct_answer: "March 1986",
    incorrect_answers: ["April 1990", "June 2001", "August 1956"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "How many unique items does Borderlands 2 claim to have?",
    correct_answer: "87 Bazillion ",
    incorrect_answers: ["87 Million", "87 Trillion", "87 Gazillion "]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the Call Of Duty: Zombies map Moon, there is a secondary called the QED. What does QED stand for?",
    correct_answer: "Quantum Entanglement Device",
    incorrect_answers: [
      "Quad Ectoplasmic Driver",
      "Question Every Dog",
      "Quality Edward Device"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the perk that was introduced in the Call Of Duty: Zombies map, Mob Of The Dead?",
    correct_answer: "Electric Cherry",
    incorrect_answers: ["Quick Revive", "Vulture Aid", "Tombstone"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In the Call Of Duty: Zombies map Origins, how many steps are there to upgrade a Staff?",
    correct_answer: "4",
    incorrect_answers: ["7", "5", "3"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which of these is not a character in the game, Lethal League?",
    correct_answer: "Rex",
    incorrect_answers: ["Switch", "Candyman", "Sonata"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question: "What were the first two blocks in Minecraft?",
    correct_answer: "Grass and Cobblestone",
    incorrect_answers: [
      "Grass and Stone",
      "Crafting Table and Cobblestone",
      "Cobblestone and Stone"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "What is the name of the first boss the player encounters in the 2017 game, Little Nightmares?",
    correct_answer: "The Janitor",
    incorrect_answers: ["The Warden", "The Caretaker", "The Overseer"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "On which planet does the game Freedom Planet (2014) take place?",
    correct_answer: "Avalice",
    incorrect_answers: ["Freedom", "Galaxytrail", "Shang Mu"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "In Guild Wars 2, which of these Charr legions is not able to be selected during character creation?",
    correct_answer: "Flame Legion",
    incorrect_answers: ["Ash Legion", "Blood Legion", "Iron Legion"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the first name of Kasmeer Meade's brother?",
    correct_answer: "Kyle",
    incorrect_answers: ["Dave", "Kevin", "Ken"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, Admiral Taidha Covington can be found in which zone?",
    correct_answer: "Bloodtide Coast",
    incorrect_answers: ["Southsun Cove", "Lake Doric", "Gendarran Fields"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the Blademaster in the middle lane of the Dragon's Stand zone?",
    correct_answer: "Diarmid",
    incorrect_answers: ["Adryn", "Hareth", "Gerent"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "easy",
    question:
      "What is the last name of the primary female protagonist of Final Fantasy VIII?",
    correct_answer: "Heartilly",
    incorrect_answers: ["Loire", "Almasy", "Trepe"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "What is the real name of Warhead in the Sega Genesis game Vectorman?",
    correct_answer: "Raster",
    incorrect_answers: ["Peacehead", "Vectorkid", "Bitmap"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary glowing orrery whose planets and clouds move?",
    correct_answer: "Meteorlogicus",
    incorrect_answers: [
      "The Juggernaut",
      "The Flameseeker Prophecies",
      "Kamohoali'i Kotaki"
    ]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary mace with a disco ball as its head?",
    correct_answer: "The Moot",
    incorrect_answers: ["The Predator", "Quip", "The Dreamer"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Which of these characters is NOT a boss in Crash Bash?",
    correct_answer: "Ripper Roo",
    incorrect_answers: ["Papu Papu", "Komodo brothers", "Nitros Oxide"]
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question: "Why were only only 300,000 copies of Uniracers were produced?",
    correct_answer:
      "DMA Designs was sued by Pixar, preventing more copies from being produced",
    incorrect_answers: [
      "There was a disagreement between DMA Designs and Nintendo",
      "It didn't sell well due to poor review scores",
      "No public information is available"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "On which Beatles album would you find the song 'Eleanor Rigby'?",
    correct_answer: "Revolver",
    incorrect_answers: ["Help!", "Rubber Soul", "Abbey Road"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who wrote the Sinead O`Connor hit 'Nothing Compares 2 U'?",
    correct_answer: "Prince",
    incorrect_answers: ["Michael Jackson", "Cameo", "Rick James"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Who had a US and UK number 1 hit in 1962 with the instrumental, 'Telstar'?",
    correct_answer: "The Tornados",
    incorrect_answers: ["The Ventures", "The Spotnicks", "The Tremeloes"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "What was the title of ABBA`s first UK hit single?",
    correct_answer: "Waterloo",
    incorrect_answers: ["Mamma Mia", "Fernando", "Dancing Queen"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Who recorded the1975 album 'Captain Fantastic and the Brown Dirt Cowboy'?",
    correct_answer: "Elton John",
    incorrect_answers: ["John Denver", "Billy Joel", "Joe Cocker"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Who had a 1976 hit with the song 'You Make Me Feel Like Dancing'?",
    correct_answer: "Leo Sayer",
    incorrect_answers: ["Elton John", "Billy Joel", "Andy Gibb"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which of these is NOT an album released by The Beatles?",
    correct_answer: "The Wall",
    incorrect_answers: ["Abbey Road", "Magical Mystery Tour", "Revolver"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which singer was featured in Jack &Uuml; (Skrillex & Diplo)'s 2015 song 'Where Are &Uuml; Now'?",
    correct_answer: "Justin Bieber",
    incorrect_answers: ["Selena Gomez", "Ellie Goulding", "The Weeknd"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Who is the frontman of the band 30 Seconds to Mars?",
    correct_answer: "Jared Leto",
    incorrect_answers: ["Gerard Way", "Matthew Bellamy", "Mike Shinoda"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "How many members are there in the band Nirvana?",
    correct_answer: "Three",
    incorrect_answers: ["Two", "Four", "Five"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which popular rock band has a one-armed drummer?",
    correct_answer: "Def Leppard",
    incorrect_answers: ["The Beatles", "Lynyrd Skynyrd", "Foreigner"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who had a 1981 hit with the song Japanese Boy?",
    correct_answer: "Aneka",
    incorrect_answers: ["Toyah", "Sandra", "Madonna"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which member of the English band The xx released their solo album In Colour in 2015?",
    correct_answer: "Jamie xx",
    incorrect_answers: ["Romy Madley Croft", "Oliver Sim", "Baria Qureshi"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "What is the name of Finnish DJ Darude's hit single released in October 1999?",
    correct_answer: "Sandstorm",
    incorrect_answers: ["Dust Devil", "Sirocco", "Khamsin"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these artists was NOT a member of the electronic music supergroup Swedish House Mafia, which split up in 2013?",
    correct_answer: "Alesso",
    incorrect_answers: ["Steve Angello", "Sebastian Ingrosso", "Axwell"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which Queen song was covered by Brittany Murphy in the 2006 film Happy Feet?",
    correct_answer: "Somebody to Love",
    incorrect_answers: ["Under Pressure", "Flash", "Bohemian Rhapsody"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "What was the name of singer Frank Ocean's second studio album, which was released on August 20, 2016?",
    correct_answer: "Blonde",
    incorrect_answers: ["Brunette", "Black", "Burgundy"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "Which band is the longest active band in the world with no breaks or line-up changes?",
    correct_answer: "U2",
    incorrect_answers: ["Radiohead", "Rush", "Rolling Stones"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Brian May was the guitarist for which band?",
    correct_answer: "Queen",
    incorrect_answers: ["Pink Floyd", "Rolling Stones", "The Doors"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "What is the stage name of English female rapper Mathangi Arulpragasam, who is known for the song Paper Planes?",
    correct_answer: "M.I.A.",
    incorrect_answers: ["K.I.A.", "C.I.A.", "A.I.A."]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What animal is featured on the cover of English electronic music group The Prodigy's album, The Fat of the Land?",
    correct_answer: "Crab",
    incorrect_answers: ["Fox", "Elephant", "Tiger"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
    correct_answer: "12",
    incorrect_answers: ["19", "21", "25"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "What is the English title of the vaporwave track リサフランク420 / 現代のコンピュー by Macintosh Plus (Vektroid)?",
    correct_answer: "Lisa Frank 420 / Modern Computing",
    incorrect_answers: [
      "Smoke Weed 420 / Everyday",
      "Make Your Move 420 / My Mind",
      "It's All In Your Head 420 / Understand"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "What was Rage Against the Machine's debut album?",
    correct_answer: "Rage Against the Machine",
    incorrect_answers: ["Evil Empire", "Bombtrack", "The Battle Of Los Angeles"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Which of these songs is NOT included in the Suicide Squad OST?",
    correct_answer: "Skies on Fire - AC/DC",
    incorrect_answers: [
      "Heathens - Twenty One Pilots",
      "Without Me - Eminem",
      "Fortunate Son - Creedence Clearwater Revival"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "What is the real name of Canadian electronic music producer deadmau5?",
    correct_answer: "Joel Zimmerman",
    incorrect_answers: [
      "Sonny Moore",
      "Adam Richard Wiles",
      "Thomas Wesley Pentz"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these is NOT a name of an album released by American rapper Pitbull?",
    correct_answer: "Welcome to Miami",
    incorrect_answers: ["Dale", "Global Warming", "Armando"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "The song Feel Good Inc. by British band Gorillaz features which hip hop group?",
    correct_answer: "De La Soul",
    incorrect_answers: ["Public Enemy", "OutKast", "Cypress Hill"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which famous 90's rap album is commonly referred to as The Bible of Hip Hop?",
    correct_answer: "Illmatic",
    incorrect_answers: [
      "The Low End Theory",
      "The Chronic",
      "Enter The Wu-Tang (36 Chambers)"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "This album, now considered to be one of the greatest of all time, was a commercial failure when it was released.",
    correct_answer: "The Velvet Underground and Nico",
    incorrect_answers: ["Abbey Road", "Led Zeppelin IV", "Pet Sounds"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Which Nirvana album had a naked baby on the cover?",
    correct_answer: "Nevermind",
    incorrect_answers: ["Bleach", "In Utero", "Incesticide"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "When did The Beatles release the LP Please Please Me?",
    correct_answer: "1963",
    incorrect_answers: ["1970", "1960", "1969"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question: "Kanye West's Gold Digger featured which Oscar-winning actor?",
    correct_answer: "Jamie Foxx",
    incorrect_answers: ["Alec Baldwin", "Dwayne Johnson", " Bruce Willis"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "All the Boys by Panic! At the Disco was released as a bonus track on what album?",
    correct_answer: "Too Weird To Live, Too Rare To Die!",
    incorrect_answers: [
      "A Fever You Can't Sweat Out",
      "Death Of A Bachelor",
      "Vices & Virtues"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the lead singer of Bastille?",
    correct_answer: "Dan Smith",
    incorrect_answers: ["Will Farquarson", "Kyle Simmons", "Chris Wood"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "The song Caramelldansen is commonly mistaken as a Japanese song, what language is the song actually sung in?",
    correct_answer: "Swedish",
    incorrect_answers: ["Hungarian", "Finnish", "Chinese"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "The Singing Cowboy Gene Autry is credited with the first recording for all but which classic Christmas jingle?",
    correct_answer: "White Christmas",
    incorrect_answers: [
      "Frosty the Snowman",
      "Rudolph the Red-Nosed Reindeer",
      "Here Comes Santa Claus"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "The heavy metal band Black Sabbath hail from which English city?",
    correct_answer: "Birmingham",
    incorrect_answers: ["Manchester", "London", "Newcastle-Upon-Tyne"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question: "Who is a pioneer of Minimal Music in 1960s?",
    correct_answer: "Steve Reich",
    incorrect_answers: ["Wolfgang Amadeus Mozart", "Brian Eno", "Sigur Ros"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which band released the album Sonic Highways in 2014?",
    correct_answer: "Foo Fighters",
    incorrect_answers: ["Coldplay", "Nickelback", "The Flaming Lips"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who is the vocalist and frontman of rock band Guns N' Roses?",
    correct_answer: "Axl Rose",
    incorrect_answers: ["Kurt Cobain", "Slash", "Bono"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Which rock band released the album The Bends in March 1995?",
    correct_answer: "Radiohead",
    incorrect_answers: ["Nirvana", "Coldplay", "U2"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "What was David Bowie's real surname?",
    correct_answer: "Jones",
    incorrect_answers: ["Johnson", "Edwards", "Carter"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which of these is not a single by Pink Floyd guitarist, David Gilmour?",
    correct_answer: "Sunset Strip",
    incorrect_answers: ["Rattle That Lock", "Blue Light", "Arnold Layne"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which artist or group did John Lennon consider son(s) of the Beatles?",
    correct_answer: "Jeff Lynne's Electric Light Orchestra",
    incorrect_answers: ["The Rolling Stones", "Pink Floyd", "The Who"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Where did the British Boy Band Bros come from?",
    correct_answer: "Camberley",
    incorrect_answers: ["Guildford", "Aldershot", "Bagshot"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "hard",
    question:
      "What was the name of the cold-war singer who has a song in Grand Theft Auto IV, and a wall landmark in Moscow for his memorial?",
    correct_answer: "Viktor Tsoi",
    incorrect_answers: ["Jimi Hendrix", "Brian Jones", "Vladimir Vysotsky"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "easy",
    question:
      "The band Muse released their first album, Showbiz, in what year?",
    correct_answer: "1999",
    incorrect_answers: ["1998", "2000", "2001"]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question:
      "Which Iron Maiden album did the song Dream of Mirrors feature in?",
    correct_answer: "Brave New World",
    incorrect_answers: [
      "Dance of Death",
      "A Matter of Life and Death",
      "Somewhere in Time"
    ]
  },
  {
    category: "Entertainment: Music",
    difficulty: "medium",
    question: "Who performed the guitar solo on Michael Jackson's hit Beat It?",
    correct_answer: "Eddie Van Halen",
    incorrect_answers: ["Steve Vai", "Kirk Hammett", "Zakk Wylde"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is considered the rarist form of color blindness?",
    correct_answer: "Blue",
    incorrect_answers: ["Red", "Green", "Purple"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many objects are equivalent to one mole?",
    correct_answer: "6.022 x 10^23",
    incorrect_answers: ["6.002 x 10^22", "6.022 x 10^22", "6.002 x 10^23"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?",
    correct_answer: "Uranus",
    incorrect_answers: ["Jupiter", "Venus", "Neptune"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "The humerus, paired radius, and ulna come together to form what joint?",
    correct_answer: "Elbow",
    incorrect_answers: ["Knee", "Sholder", "Ankle"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "In aeronautics, flaps and slats are used to control what on an aircraft?",
    correct_answer: "Lift",
    incorrect_answers: ["Thrust", "Drag", "Weight "]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which type of rock is created by intense heat AND pressure?",
    correct_answer: "Metamorphic",
    incorrect_answers: ["Sedimentary", "Igneous", "Diamond"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "How many planets are in our Solar System?",
    correct_answer: "Eight",
    incorrect_answers: ["Nine", "Seven", "Ten"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "How many legs is it biologically impossible for a centipede to have?",
    correct_answer: "100",
    incorrect_answers: ["26", "50", "74"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What was the first living creature in space?",
    correct_answer: "Fruit Flies ",
    incorrect_answers: ["Monkey", "Dog", "Mouse"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "What common name is given to the medial condition, tibial stress syndrome (MTSS)?",
    correct_answer: "Shin Splints",
    incorrect_answers: ["Tennis Elbow", "Carpal Tunnel", "Housemaid's Knee"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Gannymede is the largest moon of which planet?",
    correct_answer: "Jupiter",
    incorrect_answers: ["Uranus", "Neptune", "Mars"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the powerhouse of the cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Ribosome", "Redbull", "Nucleus"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which element has the atomic number of 7?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Hydrogen", "Neon"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
    correct_answer: "Haplogroup U",
    incorrect_answers: ["Haplogroup L", "Haplogroup T", "Haplogroup J"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
    correct_answer: "2",
    incorrect_answers: ["0", "1", "5"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the chemical makeup of water?",
    correct_answer: "H20",
    incorrect_answers: ["C12H6O2", "CO2", "H"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which horizon in a soil profile consists of bedrock?",
    correct_answer: "R",
    incorrect_answers: ["O", "B", "D"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "The Tibia is found in which part of the body?",
    correct_answer: "Leg",
    incorrect_answers: ["Arm", "Hand", "Head"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the scientific name of the knee cap?",
    correct_answer: "Patella",
    incorrect_answers: ["Femur", "Foramen Magnum", "Scapula"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "Alzheimer's disease primarily affects which part of the human body?",
    correct_answer: "Brain",
    incorrect_answers: ["Lungs", "Skin", "Heart"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is the chemical formula for ammonia?",
    correct_answer: "NH3",
    incorrect_answers: ["CO2", "NO3", "CH4"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Which of these chemical compounds is NOT found in gastric acid?",
    correct_answer: "Sulfuric acid",
    incorrect_answers: [
      "Hydrochloric acid",
      "Potassium chloride",
      "Sodium chloride"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What does DNA stand for?",
    correct_answer: "Deoxyribonucleic Acid",
    incorrect_answers: [
      "Deoxyribogenetic Acid",
      "Deoxyribogenetic Atoms",
      "Detoxic Acid"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Where did the dog breed Chihuahua originate?",
    correct_answer: "Mexico",
    incorrect_answers: ["France", "Spain", "Russia"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What polymer is used to make CDs, safety goggles and riot shields?",
    correct_answer: "Polycarbonate",
    incorrect_answers: ["Rubber", "Nylon", "Bakelite"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Who is the chemical element Curium named after?",
    correct_answer: "Marie & Pierre Curie",
    incorrect_answers: [
      "The Curiosity Rover",
      "Curious George",
      "Stephen Curry"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question:
      "The Big Bang Theory was first theorized by a priest of what religious ideology?",
    correct_answer: "Catholic",
    incorrect_answers: ["Christian", "Jewish", "Islamic"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Which one of these scientists conducted the Gold Foil Experiment which concluded that atoms are mostly made of empty space?",
    correct_answer: "Ernest Rutherford",
    incorrect_answers: [
      "Joseph John Thomson",
      "Archimedes",
      "Niels Henrik David Bohr"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "After which Danish city is the 72th element on the periodic table named?",
    correct_answer: "Copenhagen",
    incorrect_answers: ["Odense", "Herning", "Skagen"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which of these is a type of stretch/deep tendon reflex?",
    correct_answer: "Ankle jerk reflex",
    incorrect_answers: [
      "Gag reflex",
      "Pupillary light reflex",
      "Scratch reflex"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "The human heart has how many chambers?",
    correct_answer: "4",
    incorrect_answers: ["2", "6", "3"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "The asteroid belt is located between which two planets?",
    correct_answer: "Mars and Jupiter",
    incorrect_answers: [
      "Jupiter and Saturn",
      "Mercury and Venus",
      "Earth and Mars"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Human cells typically have how many copies of each gene?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "3"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which is the most abundant element in the universe?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Lithium", "Oxygen"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the molecular formula of Ozone?",
    correct_answer: "O3",
    incorrect_answers: ["C6H2O6", "N2O", "SO4"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question:
      "The biggest distinction between a eukaryotic cell and a prokaryotic cell is:",
    correct_answer: "The presence or absence of a nucleus",
    incorrect_answers: [
      "The overall size",
      "The presence or absence of certain organelles",
      "The mode of reproduction"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "Which element has the highest melting point?",
    correct_answer: "Carbon",
    incorrect_answers: ["Tungsten", "Platinum", "Osmium"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"]
  },
  {
    category: "Science & Nature",
    difficulty: "easy",
    question: "What is the standard atomic weight of a Plutonium nucleus?",
    correct_answer: "244",
    incorrect_answers: ["94", "481", "128"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Deuterium is an isotope of which element?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Nitrogen", "Helium", "Neon"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "What is the same in Celsius and Fahrenheit?",
    correct_answer: "-40",
    incorrect_answers: ["32", "-39", "-42"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What is radiation measured in?",
    correct_answer: "Gray ",
    incorrect_answers: ["Watt", "Decibel", "Kelvin"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "How much radiation does a banana emit?",
    correct_answer: "0.1 Microsievert",
    incorrect_answers: [
      "0.3 Microsievert",
      "0.5 Microsievert",
      "0.7 Microsievert"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "What part of the brain takes its name from the Greek for seahorse?",
    correct_answer: "Hippocampus",
    incorrect_answers: ["Cerebellum", "Thalamus", "Amygdala"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "What do you study if you are studying entomology?",
    correct_answer: "Insects",
    incorrect_answers: ["Humans", "the Brain", "Fish"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "Coulrophobia is the irrational fear of what?",
    correct_answer: "Clowns",
    incorrect_answers: ["Cemeteries", "Needles", "Tunnels"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question: "Which chemical element was originally known as Alabamine?",
    correct_answer: "Astatine",
    incorrect_answers: ["Selenium", "Antimony", "Molybdenum"]
  },
  {
    category: "Science & Nature",
    difficulty: "hard",
    question: "The Western Lowland Gorilla is scientifically know as?",
    correct_answer: "Gorilla Gorilla Gorilla",
    incorrect_answers: [
      "Gorilla Gorilla Diehli",
      "Gorilla Beringei Graueri",
      "Gorilla Beringei Beringei"
    ]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Which of the following men does not have a chemical element named after him?",
    correct_answer: "Sir Isaac Newton",
    incorrect_answers: ["Albert Einstein", "Niels Bohr", "Enrico Fermi"]
  },
  {
    category: "Science & Nature",
    difficulty: "medium",
    question:
      "Down Syndrome is usually caused by an extra copy of which chromosome?",
    correct_answer: "21",
    incorrect_answers: ["23", "15", "24"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Electronic music producer Kygo's popularity skyrocketed after a certain remix. Which song did he remix?",
    correct_answer: "Ed Sheeran - I See Fire",
    incorrect_answers: [
      "Marvin Gaye - Sexual Healing",
      "Coldplay - Midnight",
      "a-ha - Take On Me"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur? ",
    correct_answer: "Richard Branson",
    incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "According to the BBPA, what is the most common pub name in the UK?",
    correct_answer: "Red Lion",
    incorrect_answers: ["Royal Oak", "White Hart", "King's Head"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the world's most expensive spice by weight?",
    correct_answer: "Saffron",
    incorrect_answers: ["Cinnamon", "Cardamom", "Vanilla"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What does a milliner make and sell?",
    correct_answer: "Hats",
    incorrect_answers: ["Shoes", "Belts", "Shirts"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "What type of dog is 'Handsome Dan', the mascot of Yale University?",
    correct_answer: "Bulldog",
    incorrect_answers: ["Yorkshire Terrier", "Boxer", "Pug"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the most common surname Wales?",
    correct_answer: "Jones",
    incorrect_answers: ["Williams", "Davies", "Evans"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What name represents the letter M in the NATO phonetic alphabet?",
    correct_answer: "Mike",
    incorrect_answers: ["Matthew", "Mark", "Max"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What does a funambulist walk on?",
    correct_answer: "A Tight Rope",
    incorrect_answers: ["Broken Glass", "Balls", "The Moon"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "In past times, what would a gentleman keep in his fob pocket?",
    correct_answer: "Watch",
    incorrect_answers: ["Money", "Keys", "Notebook"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What is the airspeed velocity of an unladen swallow?",
    correct_answer: "24 MPH",
    incorrect_answers: ["15 MPH", "20 MPH", "200 MPH"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Scotch whisky and Drambuie make up which cocktail?",
    correct_answer: "Rusty Nail",
    incorrect_answers: ["Screwdriver", "Sex on the Beach", "Manhattan"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    correct_answer: "Subscriber",
    incorrect_answers: ["Single", "Secure", "Solid"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What word represents the letter 'T' in the NATO phonetic alphabet?",
    correct_answer: "Tango",
    incorrect_answers: ["Target", "Taxi", "Turkey"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the name of the Jewish New Year?",
    correct_answer: "Rosh Hashanah",
    incorrect_answers: ["Elul", "New Year", "Succoss"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which one of the following rhythm games was made by Harmonix?",
    correct_answer: "Rock Band",
    incorrect_answers: [
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is a dakimakura?",
    correct_answer: "A body pillow",
    incorrect_answers: [
      "A Chinese meal, essentially composed of fish",
      "A yoga posture",
      "A word used to describe two people who truly love each other"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "In 2013 how much money was lost by Nigerian scams?",
    correct_answer: "$12.7 Billion",
    incorrect_answers: ["$95 Million", "$956 Million", "$2.7 Billion"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What year was Queen Elizabeth II born?",
    correct_answer: "1926",
    incorrect_answers: ["1923", "1929", "1930"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "After how many years would you celebrate your crystal anniversary?",
    correct_answer: "15",
    incorrect_answers: ["20", "10", "25"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Which of the following is not another name for the eggplant?",
    correct_answer: "Potimarron",
    incorrect_answers: ["Brinjal", "Guinea Squash", "Melongene"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What was the destination of the missing flight MH370?",
    correct_answer: "Beijing",
    incorrect_answers: ["Kuala Lumpur", "Singapore", "Tokyo"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "A factiod is what?",
    correct_answer: "A falsehood",
    incorrect_answers: ["Useless trivia", "A tiny fact", "A scientific figure"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the unit of currency in Laos?",
    correct_answer: "Kip",
    incorrect_answers: ["Ruble", "Konra", "Dollar"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Which of the following is an existing family in The Sims?",
    correct_answer: "The Goth Family",
    incorrect_answers: ["The Family", "The Simoleon Family", "The Proud Family"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which of these colours is NOT featured in the logo for Google?",
    correct_answer: "Pink",
    incorrect_answers: ["Yellow", "Blue", "Green"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What is the romanized Japanese word for university?",
    correct_answer: "Daigaku",
    incorrect_answers: ["Toshokan", "Jimusho", "Shokudou"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "The Swedish word Grunka means what in English?",
    correct_answer: "Thing",
    incorrect_answers: ["People", "Place", "Pineapple"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "The term scientist was coined in which year?",
    correct_answer: "1833",
    incorrect_answers: ["1933", "1942", "1796"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Five dollars is worth how many nickles?",
    correct_answer: "100",
    incorrect_answers: ["50", "25", "69"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question: "Which one of these is not a typical European sword design?",
    correct_answer: "Scimitar",
    incorrect_answers: ["Falchion", "Ulfberht", "Flamberge"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "When was Nintendo founded?",
    correct_answer: "September 23rd, 1889",
    incorrect_answers: [
      "October 19th, 1891",
      "March 4th, 1887",
      "December 27th, 1894"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?",
    correct_answer: "Center Parcs",
    incorrect_answers: ["Yelloh Village", "Keycamp", "Villa Plus"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "What was Mountain Dew's original slogan?",
    correct_answer: "Yahoo! Mountain Dew... It'll tickle your innards!",
    incorrect_answers: [
      "Give Me A Dew",
      "Do The Dew",
      "Get' that barefoot feelin' drinkin' Mountain Dew"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What year was the RoboSapien toy robot released?",
    correct_answer: "2004",
    incorrect_answers: ["2000", "2001", "2006"]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "Which of the following card games revolves around numbers and basic math?",
    correct_answer: "Uno",
    incorrect_answers: ["Go Fish", "Twister", "Munchkin"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Where does water from Poland Spring water bottles come from?",
    correct_answer: "Maine, United States",
    incorrect_answers: ["Hesse, Germany", "Masovia, Poland", "Bavaria, Poland"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?",
    correct_answer: "28%",
    incorrect_answers: ["13%", "20%", "7%"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "What was Bank of America originally established as?",
    correct_answer: "Bank of Italy",
    incorrect_answers: [
      "Bank of Long Island",
      "Bank of Pennsylvania",
      "Bank of Charlotte"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "What does the Latin phrase Veni, vidi, vici translate into English?",
    correct_answer: "I came, I saw, I conquered",
    incorrect_answers: [
      "See no evil, hear no evil, speak no evil",
      "Life, liberty, and happiness",
      "Past, present, and future"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "When did the website Facebook launch?",
    correct_answer: "2004",
    incorrect_answers: ["2005", "2003", "2006"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Who invented Pastafarianism?",
    correct_answer: "Bobby Henderson",
    incorrect_answers: ["Eric Tignor", "Bill Nye", "Zach Soldi"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Apple co-founder Steve Jobs died from complications of which form of cancer?",
    correct_answer: "Pancreatic",
    incorrect_answers: ["Bone", "Liver", "Stomach"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question:
      "Which slogan did the fast food company, McDonald's, use before their I'm Lovin' It slogan?",
    correct_answer: "We Love to See You Smile",
    incorrect_answers: [
      "Why Pay More!?",
      "Have It Your Way",
      "Making People Happy Through Food"
    ]
  },
  {
    category: "General Knowledge",
    difficulty: "easy",
    question:
      "What machine element is located in the center of fidget spinners?",
    correct_answer: "Bearings",
    incorrect_answers: ["Axles", "Gears", "Belts"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Earl Grey tea is black tea flavoured with what?",
    correct_answer: "Bergamot oil",
    incorrect_answers: ["Lavender", "Vanilla", "Honey"]
  },
  {
    category: "General Knowledge",
    difficulty: "medium",
    question: "Whose greyscale face is on the kappa emoticon on Twitch?",
    correct_answer: "Josh DeSeno",
    incorrect_answers: ["Justin DeSeno", "John DeSeno", "Jimmy DeSeno"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question: "Chartreuse is a color between yellow and what?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Black", "Purple"]
  },
  {
    category: "General Knowledge",
    difficulty: "hard",
    question:
      "The Quadrangularis Reversum is best described as which of the following?",
    correct_answer: "A percussion instrument",
    incorrect_answers: [
      "A building in Oxford University",
      "A chess move",
      "A geometric theorem"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "The seed drill was invented by which British inventor?",
    correct_answer: "Jethro Tull",
    incorrect_answers: ["Charles Babbage", "Isaac Newton", "J.J Thomson"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What disease crippled President Franklin D. Roosevelt and led him to help the nation find a cure? ",
    correct_answer: "Polio",
    incorrect_answers: ["Cancer", "Meningitis", "HIV"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which king was killed at the Battle of Bosworth Field in 1485? ",
    correct_answer: "Richard III",
    incorrect_answers: ["Edward V", "Henry VII", "James I"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What historical event was Tchaikovsky&#039;s 1812 Overture referencing?",
    correct_answer: "The Napoleonic Wars",
    incorrect_answers: [
      "The American War of 1812",
      "The Russian Revolution",
      "The Charge of the Light Brigade (Crimean War)"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What number does the Roman numeral &quot;D&quot; stand for?",
    correct_answer: "500",
    incorrect_answers: ["100", "1000", "50"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which one of these tanks was designed and operated by the United Kingdom?",
    correct_answer: "Tog II",
    incorrect_answers: ["M4 Sherman", "Tiger H1", "T-34"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "On what day did Germany invade Poland?",
    correct_answer: "September 1, 1939",
    incorrect_answers: ["December 7, 1941", "June 22, 1941", "July 7, 1937"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is NOT classified as a Semetic language?",
    correct_answer: "Sumerian",
    incorrect_answers: ["Maltese", "Akkadian", "Mandaic"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following battles is often considered as marking the beginning of the fall of the Western Roman Empire?",
    correct_answer: "Battle of Adrianople",
    incorrect_answers: [
      "Battle of Thessalonica",
      "Battle of Pollentia",
      "Battle of Constantinople"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "In what year was the last natural case of smallpox documented?",
    correct_answer: "1977",
    incorrect_answers: ["1982", "1980", "1990"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
    correct_answer: "Illyrians",
    incorrect_answers: ["Dorians", "Achaeans", "Ionians"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "What age was King Henry V when he died?",
    correct_answer: "36",
    incorrect_answers: ["62", "87", "73"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "What was Manfred von Richthofen&#039;s nickname?",
    correct_answer: "The Red Baron",
    incorrect_answers: [
      "The High Flying Ace",
      "The Blue Serpent ",
      "The Germany Gunner"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "On which day did construction start on &quot;The Pentagon&quot;, the headquarters for the United States Department of Defense?",
    correct_answer: "September 11, 1941",
    incorrect_answers: [
      "June 15, 1947",
      "January 15, 1943",
      "September 2, 1962"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these countries was NOT a part of the Soviet Union?",
    correct_answer: "Afghanistan",
    incorrect_answers: ["Turkmenistan", "Kazakhstan", "Uzbekistan"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
    correct_answer: "USS Pueblo",
    incorrect_answers: [
      "USS North Carolina",
      "USS Constitution",
      "USS Indianapolis"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What year did the Battle of Agincourt take place?",
    correct_answer: "1415",
    incorrect_answers: ["1463", "1401", "1422"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "During the Wars of the Roses (1455 - 1487) which Englishman was dubbed &quot;the Kingmaker&quot;?",
    correct_answer: "Richard Neville",
    incorrect_answers: ["Richard III", "Henry V", "Thomas Warwick"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "When was Adolf Hitler appointed as Chancellor of Germany?",
    correct_answer: "January 30, 1933",
    incorrect_answers: [
      "September 1, 1939",
      "February 27, 1933",
      "October 6, 1939"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "Bohdan Khmelnytsky was which of the following?",
    correct_answer: "Leader of the Ukrainian Cossacks",
    incorrect_answers: [
      "General Secretary of the Communist Party of the USSR",
      "Prince of Wallachia",
      "Grand Prince of Novgorod"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which one of these rulers did not belong to the Habsburg dynasty?",
    correct_answer: "Philip V",
    incorrect_answers: ["Charles V", "Philip II", "Francis Joseph"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Against which country did the Dutch Republic fight the Eighty Years&#039; War?",
    correct_answer: "Spain",
    incorrect_answers: ["France", "England", "Portugal"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who was the Prime Minister of Japan when Japan declared war on the US?",
    correct_answer: "Hideki Tojo",
    incorrect_answers: [
      "Michinomiya Hirohito",
      "Isoroku Yamamoto",
      "Fumimaro Konoe"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What nationality was sultan Saladin?",
    correct_answer: "Kurdish",
    incorrect_answers: ["Arab", "Egyptian", "Syrian"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Who invented the &quot;Flying Shuttle&quot; in 1738; one of the key developments in the industrialization of weaving?",
    correct_answer: "John Kay",
    incorrect_answers: ["James Hargreaves", "Richard Arkwright", "John Deere"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What were the first states to break away from Yugoslavia?",
    correct_answer: "Slovenia, Croatia",
    incorrect_answers: [
      "Macedonia, Montenegro",
      "Slovenia, Macedonia",
      "Montenegro, Slovenia"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Hagia Sophia was commissioned by which emperor of the Byzantine Empire?",
    correct_answer: "Justinian I",
    incorrect_answers: ["Constantine IV", "Arcadius", "Theodosius the Great"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "What was found in 1946 by two young shepards near a cave?",
    correct_answer: "Dead Sea Scrolls",
    incorrect_answers: [
      "The Blackbeard Chest",
      "Sheep",
      "The First Oaxaca Cave Sleeper"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did Norway become free from Sweden?",
    correct_answer: "1905",
    incorrect_answers: ["1925", "1814", "1834"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "When Christopher Columbus sailed to America, what was the first region he arrived in?",
    correct_answer: "The Bahamas Archipelago",
    incorrect_answers: ["Florida", "Isthmus of Panama", "Nicaragua"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following snipers has the highest amount of confirmed kills?",
    correct_answer: "Simo H&auml;yh&auml;",
    incorrect_answers: ["Chris Kyle", "Vasily Zaytsev", "Craig Harrison"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What was the unofficial name for Germany between 1919 and 1933?",
    correct_answer: "Weimar Republic",
    incorrect_answers: [
      "German Democratic Republic",
      "Federal Republic of Germany",
      "Oesterreich "
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which U.S. president took part in the Potsdam Conference, where the Allies reached a peace settlement with Germany?",
    correct_answer: "Harry S. Truman",
    incorrect_answers: [
      "Dwight D. Eisenhower",
      "Franklin D. Roosevelt",
      "Herbert Hoover"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the code name for the Allied invasion of Southern France on August 15th, 1944?",
    correct_answer: "Operation Dragoon",
    incorrect_answers: [
      "Operation Overlord",
      "Operation Market Garden",
      "Operation Torch"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Las Vegas casino was originally constructed and operated by mobster Bugsy Siegel?",
    correct_answer: "The Flamingo",
    incorrect_answers: ["The MGM Grand", "The Sands", "The Sahara"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "The &quot;Trail of Tears&quot; was a result of which United States President&#039;s Indian Removal Policy?",
    correct_answer: "Andrew Jackson",
    incorrect_answers: [
      "Harry S. Truman",
      "Martin Van Buren",
      "John Quincy Adams"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?",
    correct_answer: "The Polish President",
    incorrect_answers: ["Pope John Paul II", "Bang-Ding Ow", "Albert Putin"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "The United States Army Air Corps became the United States Air Force on what date?",
    correct_answer: "September 18, 1947",
    incorrect_answers: [
      "December 14, 1946",
      "October 27, 1945",
      "November 08, 1944"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "In what year did the Berlin Wall fall?",
    correct_answer: "1989",
    incorrect_answers: ["1987", "1991", "1993"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following was not one of Joseph Stalin&#039;s ten blows during World War II?",
    correct_answer: "Vistula-Oder Offensive",
    incorrect_answers: [
      "Crimean Offensive",
      "Leningrad-Novgorod Offensive",
      "Operation Bagration"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When was the People&#039;s Republic of China founded?",
    correct_answer: "October 1, 1949",
    incorrect_answers: ["April 3, 1947", "May 7, 1945", "December 6, 1950"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which country gifted the Statue of Liberty to the United States of America?",
    correct_answer: "France",
    incorrect_answers: ["Spain", "England", "Germany"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "On which aircraft carrier did the Doolitte Raid launch from on April 18, 1942 during World War II?",
    correct_answer: "USS Hornet",
    incorrect_answers: ["USS Enterprise", "USS Lexington", "USS Saratoga"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did construction of the Suez Canal finish?",
    correct_answer: "1869",
    incorrect_answers: ["1859", "1860", "1850"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Who led the Communist Revolution of Russia?",
    correct_answer: "Vladimir Lenin",
    incorrect_answers: ["Joseph Stalin", "Vladimir Putin", "Mikhail Gorbachev"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following was Brazil was a former colony under?",
    correct_answer: "Portugal",
    incorrect_answers: ["Spain", "The Netherlands", "France"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "What is the historical name of Sri Lanka?",
    correct_answer: "Ceylon",
    incorrect_answers: ["Myanmar", "Colombo", "Badulla"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Before the American colonies switched to the Gregorian calendar in 1752, on what date did their new year start?",
    correct_answer: "March 25th",
    incorrect_answers: ["June 1st", "September 25th", "December 1st"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Presidents of the United States was assassinated?",
    correct_answer: "William McKinley",
    incorrect_answers: [
      "Lyndon Johnson",
      "Chester Arthur",
      "Franklin Roosevelt"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the only US President to be elected four times?",
    correct_answer: "Franklin Roosevelt",
    incorrect_answers: [
      "Theodore Roosevelt",
      "George Washington",
      "Abraham Lincoln"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Which city is the capital of the United States of America?",
    correct_answer: "Washington D.C",
    incorrect_answers: ["Seattle", "Albany", "Los Angeles"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "In which city, is the Big Nickel located in Canada?",
    correct_answer: "Sudbury, Ontario",
    incorrect_answers: [
      "Calgary, Alberta",
      "Halifax, Nova Scotia ",
      "Victoria, British Columbia"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the only country in the world with a flag that doesn&#039;t have four right angles?",
    correct_answer: "Nepal",
    incorrect_answers: ["Panama", "Angola", "Egypt"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "The Principality of Sealand is an unrecognized micronation off the coast of what country?",
    correct_answer: "The United Kingdom",
    incorrect_answers: ["Japan", "Austrailia", "Argentina"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Chile?",
    correct_answer: "Santiago",
    incorrect_answers: ["Valpara&iacute;so", "Copiap&oacute;", "Antofagasta"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Jamaica?",
    correct_answer: "Kingston",
    incorrect_answers: ["San Juan", "Port-au-Prince", "Bridgetown"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which is the largest city in Morocco?",
    correct_answer: "Casablanca",
    incorrect_answers: ["Rabat", "Fes", "Sale"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "In which English county is Stonehenge?",
    correct_answer: "Wiltshire",
    incorrect_answers: ["Somerset", "Cumbria", "Herefordshire"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What are the four corner states of the US?",
    correct_answer: "Utah, Colorado, Arizona, New Mexico",
    incorrect_answers: [
      "Oregon, Idaho, Nevada, Utah",
      "Kansas, Oklahoma, Arkansas, Louisiana",
      "South Dakota, Minnesota, Nebraska, Iowa"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "How many federal states does Germany have?",
    correct_answer: "16",
    incorrect_answers: ["13", "32", "25"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Australia?",
    correct_answer: "Canberra",
    incorrect_answers: ["Sydney", "Melbourne", "Brisbane"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Kuala Lumpur is the capital of which country?",
    correct_answer: "Malaysia",
    incorrect_answers: ["Indonesia", "Singapore", "Thailand"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Jamaica?",
    correct_answer: "Kingston",
    incorrect_answers: ["Rio de Janeiro", "Dar es Salaam", "Kano"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "The mountainous Khyber Pass connects which of the two following countries?",
    correct_answer: "Afghanistan and Pakistan",
    incorrect_answers: [
      "India and Nepal",
      "Pakistan and India",
      "Tajikistan and Kyrgyzstan"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "The following Spanish provinces are located in the northern area of Spain except:",
    correct_answer: "Murcia",
    incorrect_answers: ["Asturias", "Navarre", "Le&oacute;n"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "The land of Gotland is located in which European country?",
    correct_answer: "Sweden",
    incorrect_answers: ["Denmark", "Norway", "Germany"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following countries does NOT recognize Armenia as an independent country?",
    correct_answer: "Pakistan",
    incorrect_answers: ["Iran", "Turkey", "Azerbaijan"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "On which continent is the country of Angola located?",
    correct_answer: "Africa",
    incorrect_answers: ["South America", "Europe", "Asia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What African country has Portuguese as its official language?",
    correct_answer: "Mozambique",
    incorrect_answers: ["Botswana", "Gabon", "Togo"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following languages does NOT use the Latin alphabet?",
    correct_answer: "Georgian",
    incorrect_answers: ["Turkish", "Swahili", "Vietnamese"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these countries is NOT located in Africa?",
    correct_answer: "Suriname",
    incorrect_answers: ["Burkina Faso", "Mozambique", "Algeria"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "The Japanese district Akihabara is also known by what nickname?",
    correct_answer: "Electric Town",
    incorrect_answers: ["Moon Walk River", "Otaku Central ", "Big Eyes"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Gibraltar, located just south of the Iberian peninsula, is a territory of which West Europe country?",
    correct_answer: "United Kingdom",
    incorrect_answers: ["Spain", "Portugal", "France"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "The historical city Timbuktu is located in which West African country?",
    correct_answer: "Mali",
    incorrect_answers: ["Senegal", "Niger", "Burkina Faso"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What year is on the flag of the US state Wisconsin?",
    correct_answer: "1848",
    incorrect_answers: ["1634", "1783", "1901"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "How many countries does Spain have a land border with?",
    correct_answer: "5",
    incorrect_answers: ["2", "3", "4"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Senegal?",
    correct_answer: "Dakar",
    incorrect_answers: ["Nouakchott", "Conakry", "Monrovia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which is the largest freshwater lake in the world?",
    correct_answer: "Lake Superior ",
    incorrect_answers: ["Caspian Sea", "Lake Michigan", "Lake Huron"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these African countries list &quot;Spanish&quot; as an official language?",
    correct_answer: "Equatorial Guinea",
    incorrect_answers: ["Guinea", "Cameroon", "Angola"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the most populous Muslim-majority nation in 2010?",
    correct_answer: "Indonesia",
    incorrect_answers: ["Saudi Arabia", "Iran", "Sudan"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the official language of Bhutan?",
    correct_answer: "Dzongkha",
    incorrect_answers: ["Ladakhi", "Karen", "Groma"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the peninsula containing Spain and Portugal?",
    correct_answer: "Iberian Peninsula",
    incorrect_answers: [
      "European Peninsula",
      "Peloponnesian Peninsula",
      "Scandinavian Peninsula"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Harvard University is located in which city?",
    correct_answer: "Cambridge",
    incorrect_answers: ["Providence", "New York", "Washington D.C."]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which Canadian province has Charlottetown as its capital?",
    correct_answer: "Prince Edward Island",
    incorrect_answers: ["Saskachewan", "Northwest Terrirories", "Ontario"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the name of the Canadian national anthem?",
    correct_answer: "O Canada",
    incorrect_answers: [
      "O Red Maple",
      "Leaf-Spangled Banner",
      "March of the Puck Drop"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is Canada&#039;s smallest province?",
    correct_answer: "Prince Edward Island",
    incorrect_answers: ["New Brunswick", "Nova Scotia", "Yukon"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the tallest mountain in Canada?",
    correct_answer: "Mount Logan",
    incorrect_answers: ["Mont Tremblant", "Whistler Mountain", "Blue Mountain"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the formerly rich fishing grounds off the island of Newfoundland, Canada?",
    correct_answer: "Grand Banks",
    incorrect_answers: ["Great Barrier Reef", "Mariana Trench", "Hudson Bay"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "When does Finland celebrate their independence day?",
    correct_answer: "December 6th",
    incorrect_answers: ["January 2nd", "November 12th", "February 8th"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of India?",
    correct_answer: "New Delhi",
    incorrect_answers: ["Bejing", "Montreal", "Tithi"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "What&#039;s the first National Park designated in the United States?",
    correct_answer: "Yellowstone",
    incorrect_answers: ["Sequoia ", "Yosemite", "Rocky Mountain"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What was the most populous city in the Americas in 2015?",
    correct_answer: "S&atilde;o Paulo",
    incorrect_answers: ["New York", "Mexico City", "Los Angeles"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the land connecting North America and South America?",
    correct_answer: "Isthmus of Panama",
    incorrect_answers: ["Isthmus of Suez", "Urals", "Australasia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these cities has a 4&deg; East longitude. ",
    correct_answer: "Amsterdam",
    incorrect_answers: ["Rio de Janero", "Toronto", "Hong Kong"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the capital city of Bermuda?",
    correct_answer: "Hamilton",
    incorrect_answers: ["Santo Dominigo", "San Juan", "Havana"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
    correct_answer: "Sri Lanka",
    incorrect_answers: ["Kiribati", "Scotland", "Bhutan"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many stations does the Central Line have on the London Underground?",
    correct_answer: "49",
    incorrect_answers: ["51", "43", "47"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Which ocean borders the west coast of the United States?",
    correct_answer: "Pacific",
    incorrect_answers: ["Atlantic", "Indian", "Arctic"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "In which country is Tallinn located?",
    correct_answer: "Estonia",
    incorrect_answers: ["Finland", "Sweden", "Poland"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many independent countries are there within the continent of South America?",
    correct_answer: "12",
    incorrect_answers: ["8", "9", "10"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question:
      "What celebrity was the victim of an infamous 'wardrobe malfunction' during the 2004 Super Bowl halftime show?",
    correct_answer: "Janet Jackson",
    incorrect_answers: ["Mariah Carey", "Madonna", "Lady Gaga"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "Which celebrity is a former firefighter?",
    correct_answer: "Steve Buscemi",
    incorrect_answers: ["Dwayne Johnson", "Sean Penn", "Tommy Lee Jones"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question:
      "Who did Britney Spears kiss onstage at the 2003 MTV Video Music Awards?",
    correct_answer: "Madonna",
    incorrect_answers: ["Eminem", "Justin Bieber", "Justin Timberlake"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "How tall is Ariana Grande?",
    correct_answer: "5'0",
    incorrect_answers: ["5'2", "4'10", "5'4"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question:
      "which millennial holds the current record for the most streamed song on the Spotify?",
    correct_answer: "Ed Sheeran",
    incorrect_answers: ["Drake", "Adele", "Taylor Swift"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question:
      "At the 2009 MTV VMA's Taylor Swift was ambushed during her award speech by which rap artist?",
    correct_answer: "Kanye West",
    incorrect_answers: ["Eminem", "Gucci Mane", "Jay-Z"]
  },
  {
    category: "Celebrities",
    difficulty: "easy",
    question: "Which American actor and film maker was born Mark Sinclair?",
    correct_answer: "Vin Diesel",
    incorrect_answers: ["Brad Pitt", "Johnny Depp", "Tom Hanks"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "What was the name of Michael Jackson's chimpanzee?",
    correct_answer: "Bubbles",
    incorrect_answers: ["Mojo", "Toto", "Guenter"]
  },
  {
    category: "Celebrities",
    difficulty: "medium",
    question: "Where was Kanye West born?",
    correct_answer: "Atlanta, Georgia",
    incorrect_answers: [
      "Chicago, Illinois",
      "Detroit, Michigan ",
      "Los Angeles, California"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What kind of animal is a Komodo dragon? ",
    correct_answer: "A lizard",
    incorrect_answers: ["A dragon", "A fish", "A frog"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "Which bird has the largest wingspan of any living bird? ",
    correct_answer: "The wandering albatross",
    incorrect_answers: ["The golden eagle", "The ostrich", "The blue heron"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What type of animal is a Mexican hairless? ",
    correct_answer: "A dog",
    incorrect_answers: ["A cat", "A mole", "A rat"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What kind of creature is a Portuguese man o' war? ",
    correct_answer: "Jelly fish",
    incorrect_answers: ["A squid", "A lizard", "A rat"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " How many legs does a lobster have? ",
    correct_answer: "10",
    incorrect_answers: ["6", "8", "12"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " How many legs does a lobster have? ",
    correct_answer: "10",
    incorrect_answers: ["6", "8", "12"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " What type of animal is a Flemish giant? ",
    correct_answer: "Rabbit",
    incorrect_answers: ["Rat", "Sheep", "Dog"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " Which creatures produce gossamer? ",
    correct_answer: "Spiders",
    incorrect_answers: ["Silk Worms", "Caterpillars", "Grasshoppers"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " What is a palmiped? ",
    correct_answer: "A bird with webbed feet",
    incorrect_answers: [
      "A mammal that lays eggs",
      "A flightless bird",
      "A snake that doesn't lay eggs"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " How many arms do most starfish have? ",
    correct_answer: "5",
    incorrect_answers: ["8", "4", "6"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " What is a cabbage white? ",
    correct_answer: "A butterly",
    incorrect_answers: ["A swallow", "A pigeon", "A hornet"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " What is the natural habitat of arboreal animals? ",
    correct_answer: "In Trees",
    incorrect_answers: ["Underwater", "In grasslands", "Underground"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question:
      " What are the male honey bees called that are the only members of the colony allowed to mate with the queen? ",
    correct_answer: "Drones",
    incorrect_answers: ["Studs", "Workers", "Adonises"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question:
      " Which adjective is used to describe a horse with two different colored patches, usually black and white? ",
    correct_answer: "Piebald",
    incorrect_answers: ["Mottled", "Speckled", "Two-toned"]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: " Which is the largest mammal in the world? ",
    correct_answer: "The Blue Whale",
    incorrect_answers: [
      "The African Elephant",
      "The White Rhino",
      "The Sperm Whale"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "In which city, is the Big Nickel located in Canada?",
    correct_answer: "Sudbury, Ontario",
    incorrect_answers: [
      "Calgary, Alberta",
      "Halifax, Nova Scotia ",
      "Victoria, British Columbia"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Montreal is in which Canadian province?",
    correct_answer: "Quebec",
    incorrect_answers: ["Ontario", "Nova Scotia", "Alberta"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Which country does Austria not border?",
    correct_answer: "France",
    incorrect_answers: ["Slovenia", "Switzerland", "Slovakia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Chile?",
    correct_answer: "Santiago",
    incorrect_answers: ["Valpara&iacute;so", "Copiap&oacute;", "Antofagasta"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which is the largest city in Morocco?",
    correct_answer: "Casablanca",
    incorrect_answers: ["Rabat", "Fes", "Sale"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of the capital of Turkey?",
    correct_answer: "Ankara",
    incorrect_answers: ["Istanbul", "Izmir", "Bursa"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What are the four corner states of the US?",
    correct_answer: "Utah, Colorado, Arizona, New Mexico",
    incorrect_answers: [
      "Oregon, Idaho, Nevada, Utah",
      "Kansas, Oklahoma, Arkansas, Louisiana",
      "South Dakota, Minnesota, Nebraska, Iowa"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "How many federal states does Germany have?",
    correct_answer: "16",
    incorrect_answers: ["13", "32", "25"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which country is completely landlocked by South Africa?",
    correct_answer: "Lesotho",
    incorrect_answers: ["Swaziland", "Botswana", "Zimbabwe"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Denmark?",
    correct_answer: "Copenhagen",
    incorrect_answers: ["Aarhus", "Odense", "Aalborg"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Kuala Lumpur is the capital of which country?",
    correct_answer: "Malaysia",
    incorrect_answers: ["Indonesia", "Singapore", "Thailand"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is NOT a province in China?",
    correct_answer: "Yangtze",
    incorrect_answers: ["Fujian", "Sichuan", "Guangdong"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Jamaica?",
    correct_answer: "Kingston",
    incorrect_answers: ["Rio de Janeiro", "Dar es Salaam", "Kano"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "All of the following are classified as Finno-Ugric languages EXCEPT:",
    correct_answer: "Samoyedic",
    incorrect_answers: ["Hungarian", "Finnish", "Estonian"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "The derisive acronym &quot;PIIGS&quot; refers to which of the following European countries and their economic statuses?",
    correct_answer: "Portugal, Ireland, Italy, Greece, Spain",
    incorrect_answers: [
      "Poland, Iceland, Italy, Greece, Serbia",
      "Poland, Iceland, Italy, Greenland, Spain",
      "Portugal, Iceland, Ireland, Greece, Serbia"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "The land of Gotland is located in which European country?",
    correct_answer: "Sweden",
    incorrect_answers: ["Denmark", "Norway", "Germany"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "On which continent is the country of Angola located?",
    correct_answer: "Africa",
    incorrect_answers: ["South America", "Europe", "Asia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What African country has Portuguese as its official language?",
    correct_answer: "Mozambique",
    incorrect_answers: ["Botswana", "Gabon", "Togo"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 2012 the German-speaking microstate &quot;Liechtenstein&quot; in Central Europe had a population of how many inhabitants?",
    correct_answer: "36,600",
    incorrect_answers: ["2,400", "90,000", "323,400"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Where is Earth&#039;s South Magnetic Pole?",
    correct_answer: "The North Pole",
    incorrect_answers: ["The South Pole", "The Tropic of Cancer", "The Equator"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "The Japanese district Akihabara is also known by what nickname?",
    correct_answer: "Electric Town",
    incorrect_answers: ["Moon Walk River", "Otaku Central ", "Big Eyes"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "What name was historically used for the Turkish city currently known as Istanbul?",
    correct_answer: "Constaninople",
    incorrect_answers: ["H&uuml;davendigar", "S&ouml;ğ&uuml;t", "Adrianople"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of the US state Nevada?",
    correct_answer: "Carson City",
    incorrect_answers: ["Las Vegas", "Henderson", "Reno"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many countries does the United States share a land border with?",
    correct_answer: "2",
    incorrect_answers: ["1", "3", "4"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
    correct_answer: "Qatar",
    incorrect_answers: ["Kuwait", "United Arab Emirates", "Jordan"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What event led to Liechenstein adding a crown to its flag?",
    correct_answer: "The 1936 Olympics",
    incorrect_answers: [
      "Coronation of Prince Johann I Joseph in 1805",
      "Charles VI&#039;s decree in 1719",
      "Signing of the 1862 Constitution of Liechtenstein"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Which UK country features a dragon on their flag?",
    correct_answer: "Wales",
    incorrect_answers: ["England", "North Ireland", "Scotland"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which is the largest freshwater lake in the world?",
    correct_answer: "Lake Superior ",
    incorrect_answers: ["Caspian Sea", "Lake Michigan", "Lake Huron"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the nickname for the US state Delaware?",
    correct_answer: "The First State",
    incorrect_answers: [
      "The Fiftieth State",
      "The Second State",
      "The Sixteenth State"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Fucking is a village in which country?",
    correct_answer: "Austria",
    incorrect_answers: ["Germany", "Switzerland", "Czech Republic"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the most populous Muslim-majority nation in 2010?",
    correct_answer: "Indonesia",
    incorrect_answers: ["Saudi Arabia", "Iran", "Sudan"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which country was NOT formerly part of Yugoslavia?",
    correct_answer: "Albania",
    incorrect_answers: ["Croatia", "Serbia", "Macedonia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the official language of Bhutan?",
    correct_answer: "Dzongkha",
    incorrect_answers: ["Ladakhi", "Karen", "Groma"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the peninsula containing Spain and Portugal?",
    correct_answer: "Iberian Peninsula",
    incorrect_answers: [
      "European Peninsula",
      "Peloponnesian Peninsula",
      "Scandinavian Peninsula"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which country has three capital cities?",
    correct_answer: "South Africa",
    incorrect_answers: ["Somalia", "China", "United Kingdom"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What city is known as the Rose Capital of the World?",
    correct_answer: "Tyler, Texas",
    incorrect_answers: [
      "San Diego, California",
      "Miami, Florida",
      "Anaheim, California"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Slovakia?",
    correct_answer: "Bratislava",
    incorrect_answers: ["Sofia", "Ljubljana", "Sarajevo"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the largest Muslim country in the world?",
    correct_answer: "Indonesia",
    incorrect_answers: ["Pakistan", "Saudi Arabia", "Iran"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is Canada&#039;s largest island?",
    correct_answer: "Baffin Island",
    incorrect_answers: [
      "Prince Edward Island",
      "Vancouver Island",
      "Newfoundland"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Seychelles?",
    correct_answer: "Victoria",
    incorrect_answers: ["Luanda", "N&#039;Djamena", "Tripoli"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the second-largest city in Lithuania?",
    correct_answer: "Kaunas",
    incorrect_answers: ["Panevėžys", "Vilnius", "Klaipėda"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "How many timezones does Russia have?",
    correct_answer: "11",
    incorrect_answers: ["6", "24", "16"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of New Zealand&#039;s indigenous people?",
    correct_answer: "Maori",
    incorrect_answers: ["Vikings", "Polynesians", "Samoans"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these countries is the smallest by population?",
    correct_answer: "Norway",
    incorrect_answers: ["Slovakia", "Finland", "Hong Kong"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 2016 Global Peace Index poll, out of 163 countries, what was the United States of America ranked?",
    correct_answer: "103",
    incorrect_answers: ["10", "59", "79"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "What&#039;s the first National Park designated in the United States?",
    correct_answer: "Yellowstone",
    incorrect_answers: ["Sequoia ", "Yosemite", "Rocky Mountain"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these cities has a 4&deg; East longitude. ",
    correct_answer: "Amsterdam",
    incorrect_answers: ["Rio de Janero", "Toronto", "Hong Kong"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "In which country is Tallinn located?",
    correct_answer: "Estonia",
    incorrect_answers: ["Finland", "Sweden", "Poland"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "How many rivers are in Saudi Arabia?",
    correct_answer: "0",
    incorrect_answers: ["1", "2", "3"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which is the world&#039;s longest river?",
    correct_answer: "Nile",
    incorrect_answers: ["Missouri", "Amazon", "Yangtze"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What event marked the start of World War II?",
    correct_answer: "Invasion of Poland (1939)",
    incorrect_answers: [
      "Invasion of Russia (1942)",
      "Battle of Britain (1940)",
      "Invasion of Normandy (1944)"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which one of these was not a beach landing site in the Invasion of Normandy?",
    correct_answer: "Silver",
    incorrect_answers: ["Gold", "Juno", "Sword"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "King Henry VIII was the second monarch of which European royal house?",
    correct_answer: "Tudor",
    incorrect_answers: ["York", "Stuart", "Lancaster"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Pianist Fr&eacute;d&eacute;ric Chopin was a composer of which musical era?",
    correct_answer: "Romantic",
    incorrect_answers: ["Classic", "Baroque", "Renaissance"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "What was William Frederick Cody better known as?",
    correct_answer: "Buffalo Bill",
    incorrect_answers: ["Billy the Kid", "Wild Bill Hickok", "Pawnee Bill"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
    correct_answer: "John and Mary",
    incorrect_answers: [
      "Joseph and Catherine",
      "William and Elizabeth",
      "George and Anne"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Which German field marshal was known as the `Desert Fox`?",
    correct_answer: "Erwin Rommel",
    incorrect_answers: [
      "Ernst Busch",
      "Wolfram Freiherr von Richthofen",
      "Wilhelm List"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "The Tsar Bomba, the most powerful nuclear bomb ever tested, had a yield of 50 megatons but theoretically had a maximum yield of how much?",
    correct_answer: "100 Megatons",
    incorrect_answers: ["200 Megatons", "75 Megatons", "150 Megatons"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What was the capital of South Vietnam before the Vietnam War?",
    correct_answer: "Saigon",
    incorrect_answers: ["Ho Chi Minh City", "Hanoi", "Hue"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the spy ring that helped the United States win the Revolutionary War?",
    correct_answer: "Culper Ring",
    incorrect_answers: [
      "New York Spy Ring",
      "Washington&#039;s Spies",
      "Unnamed"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what year was the famous 45 foot tall Hollywood sign first erected?",
    correct_answer: "1923",
    incorrect_answers: ["1903", "1913", "1933"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "On what day did Germany invade Poland?",
    correct_answer: "September 1, 1939",
    incorrect_answers: ["December 7, 1941", "June 22, 1941", "July 7, 1937"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did Jamaica recieve its independence from England? ",
    correct_answer: "1962",
    incorrect_answers: ["1492", "1963", "1987"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?",
    correct_answer: "Assyrians",
    incorrect_answers: ["Babylonians", "Hittites", "Elamites"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following African countries was most successful in resisting colonization?",
    correct_answer: "Ethiopia",
    incorrect_answers: ["C&ocirc;te d&rsquo;Ivoire", "Congo", "Namibia"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "The Herero genocide was perpetrated in Africa by which of the following colonial nations?",
    correct_answer: "Germany",
    incorrect_answers: ["Britain", "Belgium", "France"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which famous world leader is famed for the saying, &quot;Let them eat cake&quot;, yet is rumored that he/she never said it at all?",
    correct_answer: "Marie Antoinette",
    incorrect_answers: ["Czar Nicholas II", "Elizabeth I", "Henry VIII"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which infamous European traitor was known as &quot;the last person to enter Parliament with honest intentions&quot;?",
    correct_answer: "Guy Fawkes",
    incorrect_answers: ["Robert Catesby", "Francis Tresham", "Everard Digby"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "What age was King Henry V when he died?",
    correct_answer: "36",
    incorrect_answers: ["62", "87", "73"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
    correct_answer: "USS Pueblo",
    incorrect_answers: [
      "USS North Carolina",
      "USS Constitution",
      "USS Indianapolis"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What did the first vending machines in the early 1880&#039;s dispense?",
    correct_answer: "Post cards",
    incorrect_answers: ["Alcohol", "Cigarettes", "Sodas "]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What year did the Battle of Agincourt take place?",
    correct_answer: "1415",
    incorrect_answers: ["1463", "1401", "1422"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "In which year did the First World War begin?",
    correct_answer: "1914",
    incorrect_answers: ["1930", "1917", "1939"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which one of these rulers did not belong to the Habsburg dynasty?",
    correct_answer: "Philip V",
    incorrect_answers: ["Charles V", "Philip II", "Francis Joseph"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year did the Boxing Day earthquake &amp; tsunami occur in the Indian Ocean?",
    correct_answer: "2004",
    incorrect_answers: ["2006", "2008", "2002"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "In which year did the Tokyo Subway Sarin Attack occur?",
    correct_answer: "1995",
    incorrect_answers: ["2001", "2011", "1991"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who was the Prime Minister of Japan when Japan declared war on the US?",
    correct_answer: "Hideki Tojo",
    incorrect_answers: [
      "Michinomiya Hirohito",
      "Isoroku Yamamoto",
      "Fumimaro Konoe"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which Nation DID NOT have a Colony in Modern-day America?",
    correct_answer: "Portugal",
    incorrect_answers: ["Spain", "Sweden", "Netherlands"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the mnemonic device for remembering the fates of the wives of Henry VIII?",
    correct_answer: "Divorced, Beheaded, Died, Divorced, Beheaded, Survived",
    incorrect_answers: [
      "Beheaded, Died, Divorced, Divorced, Beheaded, Survived",
      "Died, Beheaded, Divorced, Beheaded, Survived, Divorced",
      "Survived, Beheaded, Died, Divorced, Divorced, Beheaded"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year is considered to be the year that the British Empire ended?",
    correct_answer: "1997",
    incorrect_answers: ["1986", "1981", "1971"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did Norway become free from Sweden?",
    correct_answer: "1905",
    incorrect_answers: ["1925", "1814", "1834"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following snipers has the highest amount of confirmed kills?",
    correct_answer: "Simo H&auml;yh&auml;",
    incorrect_answers: ["Chris Kyle", "Vasily Zaytsev", "Craig Harrison"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Who was the first prime minister of Canada?",
    correct_answer: "John Macdonald",
    incorrect_answers: ["John Abbott", "Alexander Mackenzie", "Robert Borden"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "How was Socrates executed?",
    correct_answer: "Poison",
    incorrect_answers: ["Decapitation", "Firing squad", "Crucifixion "]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who was the first president born in the independent United States?",
    correct_answer: "Martin Van Buren",
    incorrect_answers: ["John Adams", "George Washington", "James Monroe "]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "How long did World War II last?",
    correct_answer: "6 years",
    incorrect_answers: ["4 years", "5 years", "7 years"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the code name for the Allied invasion of Southern France on August 15th, 1944?",
    correct_answer: "Operation Dragoon",
    incorrect_answers: [
      "Operation Overlord",
      "Operation Market Garden",
      "Operation Torch"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What was the total length of the Titanic?",
    correct_answer: "882 ft | 268.8 m",
    incorrect_answers: [
      "759 ft | 231.3 m",
      "1042 ft | 317.6 m",
      "825 ft | 251.5 m"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the leader of the Communist Party of Yugoslavia ?",
    correct_answer: "Josip Broz Tito",
    incorrect_answers: [
      "Karadjordje Petrovic",
      "Milos Obilic",
      "Aleskandar Petrovic"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "The &quot;Trail of Tears&quot; was a result of which United States President&#039;s Indian Removal Policy?",
    correct_answer: "Andrew Jackson",
    incorrect_answers: [
      "Harry S. Truman",
      "Martin Van Buren",
      "John Quincy Adams"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which country gifted the Statue of Liberty to the United States of America?",
    correct_answer: "France",
    incorrect_answers: ["Spain", "England", "Germany"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "How many years did the Hundred Years&#039; War last?",
    correct_answer: "116",
    incorrect_answers: ["100", "90", "101"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "How old was Adolf Hitler when he died?",
    correct_answer: "56",
    incorrect_answers: ["43", "65", "47"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "Which day did World War I begin?",
    correct_answer: "July 28",
    incorrect_answers: ["January 28", "June 28", "April 28"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "On which aircraft carrier did the Doolitte Raid launch from on April 18, 1942 during World War II?",
    correct_answer: "USS Hornet",
    incorrect_answers: ["USS Enterprise", "USS Lexington", "USS Saratoga"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the ship which was only a few miles away from the RMS Titanic when it struck an iceberg on April 14, 1912?",
    correct_answer: "Californian",
    incorrect_answers: ["Carpathia", "Cristol", "Commerce"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the last colony the UK ceded marking the end of the British Empire?",
    correct_answer: "Hong Kong",
    incorrect_answers: ["India", "Australia", "Ireland"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Which country was Josef Stalin born in?",
    correct_answer: "Georgia",
    incorrect_answers: ["Russia", "Germany", "Poland"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Who led the Communist Revolution of Russia?",
    correct_answer: "Vladimir Lenin",
    incorrect_answers: ["Joseph Stalin", "Vladimir Putin", "Mikhail Gorbachev"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What year did the Vietnam War end?",
    correct_answer: "1975",
    incorrect_answers: ["1978", "1967", "1969"]
  }
];

db.sequelize.sync({ force: true }).then(function() {
  db.Question.bulkCreate(questions)
    .then(function(rows) {
      console.log("Data successfully added!");
    })
    .catch(function(error) {
      console.log("Error", error);
    });
});
