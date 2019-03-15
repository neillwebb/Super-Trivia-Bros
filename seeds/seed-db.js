const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/supertriviabros");

const questions = [
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question: "Who wrote 'Harry Potter'?",
    correct_answer: "J.K. Rowling",
    incorrect_answers: ["J.R.R. Tolkien", "Terry Pratchett", "Daniel Radcliffe"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which author and poet famously wrote the line, 'The female of the species is more deadly than the male'?",
    correct_answer: "Rudyard Kipling",
    incorrect_answers: [
      "Edgar Allan Poe",
      "William Shakespeare",
      "William Wordsworth"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    correct_answer: "Badger",
    incorrect_answers: ["Fox", "Frog", "Rabbit"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which famous book is sub-titled 'The Modern Prometheus'?",
    correct_answer: "Frankenstein",
    incorrect_answers: [
      "Dracula",
      "The Strange Case of Dr. Jekyll and Mr. Hyde ",
      "The Legend of Sleepy Hollow"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question: "Who wrote the novel 'Moby-Dick'?",
    correct_answer: "Herman Melville",
    incorrect_answers: [
      "William Golding",
      "William Shakespeare",
      "J. R. R. Tolkien"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "How many books are in the Chronicles of Narnia series?",
    correct_answer: "7",
    incorrect_answers: ["6", "8", "5"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the book 'The Martian', how long was Mark Watney trapped on Mars (in Sols)?",
    correct_answer: "549 Days",
    incorrect_answers: ["765 Days", "401 Days", "324 Days"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who wrote the 1967 horror novel 'Rosemary's Baby'?",
    correct_answer: "Ira Levin",
    incorrect_answers: ["Stephen King", "Robert Bloch", "Mary Shelley"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
    correct_answer: "Oswald",
    incorrect_answers: ["James", "Harold", "Christopher"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
    correct_answer: "Gloin",
    incorrect_answers: ["Thorin Oakenshield", "Bombur", "Dwalin"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "What position does Harry Potter play in Quidditch?",
    correct_answer: "Seeker",
    incorrect_answers: ["Beater", "Chaser", "Keeper"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
    correct_answer: "The Artful Dodger",
    incorrect_answers: ["Fagin", "Bull's-eye", "Mr. Fang"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "What is the fourth book of the Old Testament?",
    correct_answer: "Numbers",
    incorrect_answers: ["Genesis", "Exodus", "Leviticus"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question: "'Green Eggs And Ham' is a book by which author?",
    correct_answer: "Dr. Seuss",
    incorrect_answers: ["Beatrix Potter", "Roald Dahl", "A.A. Milne"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of the Mysterious Island, in Jules Verne's 'The Mysterious Island'?",
    correct_answer: "Lincoln Island",
    incorrect_answers: [
      "Vulcania Island",
      "Prometheus Island",
      "Neptune Island"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "By what name was the author Eric Blair better known?",
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who wrote the children's story 'The Little Match Girl'?",
    correct_answer: "Hans Christian Andersen",
    incorrect_answers: ["Charles Dickens", "Lewis Carroll", "Oscar Wilde"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'Harry Potter' series, what is Headmaster Dumbledore's full name?",
    correct_answer: "Albus Percival Wulfric Brian Dumbledore",
    incorrect_answers: [
      "Albus Valum Jetta Mobius Dumbledore",
      "Albus James Lunae Otto Dumbledore",
      "Albus Valencium Horatio Kul Dumbledore"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question: "How many Harry Potter books are there?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "6"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?",
    correct_answer: "Richard Bachman",
    incorrect_answers: ["J. D. Robb", "Mark Twain", "Lewis Carroll"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question: "What's Harry Potter's dad's name?",
    correct_answer: "James Potter",
    incorrect_answers: ["Joey Potter", "Frank Potter", "Hairy Potter Sr."]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who wrote the young adult novel 'The Fault in Our Stars'?",
    correct_answer: "John Green",
    incorrect_answers: ["Stephenie Meyer", "Suzanne Collins", "Stephen Chbosky"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these does Charlie NOT read in The Perks of Being a Wallflower?",
    correct_answer: "The Grapes of Wrath",
    incorrect_answers: ["Hamlet", "The Great Gatsby", "Peter Pan"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who was the author of the 1954 novel, 'Lord of the Flies'?",
    correct_answer: "William Golding",
    incorrect_answers: ["Stephen King", "F. Scott Fitzgerald", "Hunter Fox"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the year 1818, novelist Mary Shelly is credited with writing a fiction novel and creating this infamous character.",
    correct_answer: "Frankenstein's monster",
    incorrect_answers: ["Dracula", "The Thing", "The Invisible Man"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer's Stone?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Spike", "Poofy", "Spot"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "The title of Adolf Hitler's autobiography 'Mein Kampf' is what when translated to English?",
    correct_answer: "My Struggle",
    incorrect_answers: ["My Hatred", "My Sadness", "My Desire"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "Where does the book 'The Silence of the Lambs' get its title from?",
    correct_answer: "The main character's trauma in childhood",
    incorrect_answers: [
      "The relation it has with killing the innocents",
      "The villain's favourite meal",
      "The voice of innocent people being shut by the powerful"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Michael Crichton's novel 'Jurassic Park', John Hammond meets his demise at the claws of which dinosaur?",
    correct_answer: "Procompsognathus",
    incorrect_answers: ["Dilophosaurus", "Tyrannosaurus Rex", "Velociraptor"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'Harry Potter' novels, what must a Hogwarts student do to enter the Ravenclaw Common Room?",
    correct_answer: "Answer a riddle",
    incorrect_answers: [
      "Rhythmically tap barrels with a wand",
      "Speak a password",
      "Knock in sequence"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "The book 'Fahrenheit 451' was written by whom?",
    correct_answer: "Ray Bradbury",
    incorrect_answers: [
      "R. L. Stine",
      "Wolfgang Amadeus Mozart",
      "Stephen King"
    ]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the last message of the Dolphins in 'The Hitchhiker's Guide to the Galaxy'?",
    correct_answer: "'So long, and thanks for all the fish.'",
    incorrect_answers: [
      "'The answer is 42.'",
      "'Land of the brave.'",
      "'Goodbye cruel world!'"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the book series 'Odd Thomas', Danny Jessup has what genetic disease? ",
    correct_answer: "Osteogenesis Imperfecta",
    incorrect_answers: [
      "Spinocerebellar ataxia",
      "Adrenoleukodystrophy",
      "Cystic Fibrosis"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Margaret Atwood's 'The Handmaid's Tale', what is Offred's real name is implied to be?",
    correct_answer: "June",
    incorrect_answers: ["August", "April", "May"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Antiquities, Ice Age, and Alliances expansions take place on which continent?",
    correct_answer: "Terisiare",
    incorrect_answers: ["Aerona", "Shiv", "Jamuraa"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, which plane does the Homelands expansion take place in?",
    correct_answer: "Ulgrotha",
    incorrect_answers: ["Bant", "Llanowar", "Tazeem"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Alice in Wonderland, what is the name of Alice's kitten?",
    correct_answer: "Dinah",
    incorrect_answers: ["Oscar", "Heath", "Smokey"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In which classic novel is there a character named Homer Simpson?",
    correct_answer: "The Day of the Locust",
    incorrect_answers: ["Catch-22", "Of Mice and Men", "A Separate Peace"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of Eragon's dragon in 'Eragon'?",
    correct_answer: "Saphira",
    incorrect_answers: ["Glaedr", "Thorn", "Arya"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who wrote the 'A Song of Ice And Fire' fantasy novel series?",
    correct_answer: "George R. R. Martin",
    incorrect_answers: ["George Lucas", "George Orwell", "George Eliot"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the name of Captain Nemo's submarine in '20,000 Leagues Under the Sea'?",
    correct_answer: "The Nautilus",
    incorrect_answers: ["The Neptune", "The Poseidon ", "The Atlantis"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question: "What is Hermione Granger's middle name?",
    correct_answer: "Jean",
    incorrect_answers: ["Jane", "Emma", "Jo"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question: "What is Ron Weasley's middle name?",
    correct_answer: "Bilius",
    incorrect_answers: ["Arthur", "John", "Dominic"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which famous spy novelist wrote the childrens' story 'Chitty-Chitty-Bang-Bang'?",
    correct_answer: "Ian Fleming",
    incorrect_answers: ["Joseph Conrad", "John Buchan", "Graham Greene"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question: "In the 'The Hobbit', who kills Smaug?",
    correct_answer: "Bard",
    incorrect_answers: ["Bilbo Baggins", "Gandalf the Grey", "Frodo"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question: "The novel 'Jane Eyre' was written by what author? ",
    correct_answer: "Charlotte Bronte",
    incorrect_answers: ["Emily Bronte", "Jane Austen", "Louisa May Alcott"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "The novel 'Of Mice And Men' was written by what author? ",
    correct_answer: "John Steinbeck ",
    incorrect_answers: ["George Orwell", "Mark Twain ", "Harper Lee"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "J.K. Rowling completed 'Harry Potter and the Deathly Hallows' in which hotel in Edinburgh, Scotland?",
    correct_answer: "The Balmoral",
    incorrect_answers: [
      "The Dunstane Hotel",
      "Hotel Novotel",
      "Sheraton Grand Hotel & Spa"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the protagonist of J.D. Salinger's novel Catcher in the Rye?",
    correct_answer: "Holden Caulfield",
    incorrect_answers: ["Fletcher Christian", "Jay Gatsby", "Randall Flagg"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to The Hitchhiker's Guide to the Galaxy book, the answer to life, the universe and everything else is...",
    correct_answer: "42",
    incorrect_answers: ["Loving everyone around you", "Chocolate", "Death"]
  },
  {
    category: "Books",
    type: "multiple",
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
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the gang that Ponyboy is a part of in the book, The Outsiders?",
    correct_answer: "The Greasers",
    incorrect_answers: ["The Outsiders", "The Mafia", "The Socs"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is NOT a work done by Shakespeare?",
    correct_answer: "Trial of Temperance",
    incorrect_answers: ["Measure For Measure", "Titus Andronicus", "Cymbeline"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in 'Jurassic Park'?",
    correct_answer: "1992 Toyota Land Cruiser",
    incorrect_answers: [
      "1992 Jeep Wrangler YJ Sahar",
      "1992 Ford Explorer XLT",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Little Women', which of the March sisters married Laurie?",
    correct_answer: "Amy",
    incorrect_answers: ["Beth", "Jo", "Meg"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Fallen Empires expansion takes place on which continent?",
    correct_answer: "Sarpadia",
    incorrect_answers: ["Otaria", "Terisiare", "Shiv"]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the name of the fictional SCP Foundation, what does the 'SCP' stand for?",
    correct_answer: "Special Containment Procedures",
    incorrect_answers: [
      "Secure, Contain, Protect",
      "Supernatural Creature Preservation",
      "Silent Community Protection"
    ]
  },
  {
    category: "Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    correct_answer: "SCP-173",
    incorrect_answers: ["SCP-001", "SCP-999", "SCP-1459"]
  },

  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following movies was not based on a novel by Stephen King? ",
    correct_answer: "The Thing",
    incorrect_answers: ["Carrie", "Misery", "The Green Mile"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who starred as Bruce Wayne and Batman in Tim Burton's 1989 movie 'Batman'?",
    correct_answer: "Michael Keaton",
    incorrect_answers: ["George Clooney", "Val Kilmer", "Adam West"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the movie 'The Iron Giant,' this character is the protagonist.",
    correct_answer: "Hogarth Hughes",
    incorrect_answers: ["Kent Mansley", "Dean McCoppin", "Annie Hughes"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the film 'Interstellar', how long did they spend on Miller's planet?",
    correct_answer: "23 years, 4 months, and 8 days",
    incorrect_answers: [
      "15 years, 2 months, and 15 days",
      "10 months and 6 days",
      "26 years, 4 months, and 10 days"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which retired American football quarterback played himself in 'Ace Ventura: Pet Detective' and 'Little Nicky'?",
    correct_answer: "Dan Marino",
    incorrect_answers: ["John Elway", "Tom Brady", "Joe Montana"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who played Deputy Marshal Samuel Gerard in the 1993 film 'The Fugitive'?",
    correct_answer: "Tommy Lee Jones",
    incorrect_answers: ["Harrison Ford", "Harvey Keitel", "Martin Landau"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
    correct_answer: "Chicago",
    incorrect_answers: ["Dreamgirls", "Cabaret", "All That Jazz"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which actress danced the twist with John Travolta in 'Pulp Fiction'?",
    correct_answer: "Uma Thurman",
    incorrect_answers: ["Kathy Griffin", "Pam Grier", "Bridget Fonda"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which movie contains the quote, 'Say hello to my little friend!'?",
    correct_answer: "Scarface",
    incorrect_answers: ["Reservoir Dogs", "Heat", "Goodfellas"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who directed the movies 'Pulp Fiction', 'Reservoir Dogs' and 'Django Unchained'?",
    correct_answer: "Quentin Tarantino",
    incorrect_answers: ["Martin Scorcese", "Steven Spielberg", "James Cameron"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "The Queen song `A Kind Of Magic` is featured in which 1986 film?",
    correct_answer: "Highlander",
    incorrect_answers: ["Flash Gordon", "Labyrinth", "Howard the Duck"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was Dorothy's surname in 'The Wizard Of Oz'?",
    correct_answer: "Gale",
    incorrect_answers: ["Perkins", "Day", "Parker"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "What was the title of the first Bond movie, released in 1962?",
    correct_answer: "Dr. No",
    incorrect_answers: ["From Russia with Love", "Goldfinger", "Thunderball"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
    correct_answer: "Auric Goldfinger",
    incorrect_answers: ["Dr. Julius No", "Rosa Klebb", "Emilio Largo"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "Who directed the 1973 film 'American Graffiti'?",
    correct_answer: "George Lucas",
    incorrect_answers: [
      "Ron Howard",
      "Francis Ford Coppola",
      "Steven Spielberg"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "This movie contains the quote, 'Nobody puts Baby in a corner.'",
    correct_answer: "Dirty Dancing",
    incorrect_answers: [
      "Three Men and a Baby",
      "Ferris Bueller's Day Off",
      "Pretty in Pink"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the dog that played Toto in the 1939 film 'The Wizard of Oz'?",
    correct_answer: "Terry",
    incorrect_answers: ["Tommy", "Teddy", "Toto"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "In what year was the first Transformers movie released?",
    correct_answer: "1986",
    incorrect_answers: ["2007", "1984", "2009"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What does TIE stand for in reference to the TIE Fighter in 'Star Wars'?",
    correct_answer: "Twin Ion Engine",
    incorrect_answers: [
      "Twin Iron Engine",
      "Twin Intercepter Engine",
      "Twin Inception Engine"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the assassin in the first 'Hellboy' movie?",
    correct_answer: "Karl Ruprecht Kroenen",
    incorrect_answers: [
      "Klaus Werner von Krupt",
      "Grigori Efimovich Rasputin",
      "Ilsa Haupstein"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first James Bond film?",
    correct_answer: "Dr. No",
    incorrect_answers: ["Goldfinger", "From Russia With Love", "Thunderball"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which movie includes a giant bunny-like spirit who has magic powers including growing trees?",
    correct_answer: "My Neighbor Totoro",
    incorrect_answers: ["Hop", "Rise of the Guardians", "Alice in Wonderland"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1994 movie 'Speed', what is the minimum speed the bus must go to prevent to bomb from exploding?",
    correct_answer: "50 mph",
    incorrect_answers: ["60 mph", "40 mph", "70 mph"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 2012, which movie won every category in the 32nd 'Golden Raspberry Awards'?",
    correct_answer: "Jack and Jill",
    incorrect_answers: [
      "The Girl with the Dragon Tattoo",
      "Thor",
      "The King's Speech"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the villian in the 2015 Russian-American Sci-Fi Movie 'Hardcore Henry'?",
    correct_answer: "Akan",
    incorrect_answers: ["Estelle", "Jimmy", "Henry"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1979 British film 'Quadrophenia' what is the name of the seaside city the mods are visiting?",
    correct_answer: "Brighton",
    incorrect_answers: ["Eastbourne", "Mousehole", "Bridlington"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
    correct_answer: "Jackie Earle Haley",
    incorrect_answers: ["Tyler Mane", "Derek Mears", "Gunnar Hansen"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who in Pulp Fiction says 'No, they got the metric system there, they wouldn't know what the fuck a Quarter Pounder is.'",
    correct_answer: "Vincent Vega",
    incorrect_answers: ["Jules Winnfield", "Jimmie Dimmick", "Butch Coolidge"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question: "In the movie 'Scream' who is Ghost Face?",
    correct_answer: "Billy Loomis and Stu Macher",
    incorrect_answers: [
      "Dewey Riley",
      "Sidney Prescott",
      "Archie Prescott and Philip Marv"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "In what year was the movie 'Police Academy' released?",
    correct_answer: "1984",
    incorrect_answers: ["1986", "1985", "1983"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film?",
    correct_answer: "Tom Bombadil",
    incorrect_answers: ["Strider", "Barliman Butterbur", "Celeborn"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1999 movie Fight Club, which of these is not a rule of the 'fight club'?",
    correct_answer: "Always wear a shirt",
    incorrect_answers: [
      "You do not talk about FIGHT CLUB",
      "Only two guys to a fight",
      "Fights will go on as long as they have to"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Darth Vader's famous reveal to Luke is iconic. But which of these is the right one?",
    correct_answer: "'No. I am your father.'",
    incorrect_answers: [
      "'Luke, I am your father.'",
      "'You're wrong. I am your father.'",
      "'The truth is that I am your father.'"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "This trope refers to minor characters that are killed off to show how a monster works.",
    correct_answer: "Red Shirt",
    incorrect_answers: ["Minions", "Expendables", "Cannon Fodder"]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who played the Cenobite called 'Pinhead' in the original Hellraiser films?",
    correct_answer: "Doug Bradley",
    incorrect_answers: ["Doug Jones", "Doug Savant", "Doug Benson"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the director of the 1991 film 'Silence of the Lambs'?",
    correct_answer: "Jonathan Demme",
    incorrect_answers: ["Stanley Kubrick", "Frank Darabont", "Michael Bay"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In order to cut costs, what were most of the extras of Mad Max (1979) paid with?",
    correct_answer: "Beer",
    incorrect_answers: ["Fast food", "Food stamps", "They weren't paid"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Star Trek Nemesis', why was Praetor Shinzon created?",
    correct_answer: "To replace Picard as a Romulan Agent",
    incorrect_answers: [
      "To destroy the Enterprise",
      "To become Picard's friend ",
      "To steal the Enterprise"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Mark Wahlberg played the titular character of which 2008 video-game adaptation?",
    correct_answer: "Max Payne",
    incorrect_answers: ["Alan Wake", "Hitman", "God Of War"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In what year does Jurassic World open in the 'Jurassic Park' universe?",
    correct_answer: "2005",
    incorrect_answers: ["2007", "2015", "2020"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the supercomputer located in the control room in 'Jurassic Park'?",
    correct_answer: "Thinking Machines CM-5",
    incorrect_answers: ["Cray X-MP", "Cray XK7", "IBM Blue Gene/Q"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "Before 'Jurassic Park III' was finalized and the Spinosaurus was chosen, which dinosaur was going to be the star?",
    correct_answer: "Baryonyx",
    incorrect_answers: ["Tyrannosaurus Rex", "Velociraptor", "Suchomimus"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'Jurassic Park' universe, what was the first dinosaur cloned by InGen in 1986?",
    correct_answer: "Velociraptor",
    incorrect_answers: ["Triceratops", "Troodon", "Brachiosaurus"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "Who directed the movie 'Alien'?",
    correct_answer: "Ridley Scott",
    incorrect_answers: ["Christopher Nolan", "Michael Bay", "James Cameron"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who plays 'Bruce Wayne' in the 2008 movie 'The Dark Knight'?",
    correct_answer: "Christian Bale",
    incorrect_answers: ["Michael Caine", "Ron Dean", "Heath Ledger"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "What is Lilo's last name from Lilo and Stitch?",
    correct_answer: "Pelekai",
    incorrect_answers: ["Anoaʻi", "Kealoha", "Kuʻulei"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question: "In the Friday The 13th series, what year did Jason drown in?",
    correct_answer: "1957",
    incorrect_answers: ["1955", "1953", "1959"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "Where does the original Friday The 13th movie take place?",
    correct_answer: "Camp Crystal Lake",
    incorrect_answers: ["Packanack", "Higgins Haven", "Camp Forest Green"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which director directed the movie 'Pan's Labyrinth'?",
    correct_answer: "Guillermo Del Toro",
    incorrect_answers: [
      "Alfonso Cuaron",
      "Alejandro Gonzalez In;arritu",
      "Alejandro Jodorowsky"
    ]
  },

  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which movie released in 2016 features Superman and Batman fighting?",
    correct_answer: "Batman v Superman: Dawn of Justice",
    incorrect_answers: [
      "Batman v Superman: Superapocalypse",
      "Batman v Superman: Black of Knight",
      "Batman v Superman: Knightfall"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?",
    correct_answer: "Wilson",
    incorrect_answers: ["Friday", "Jones", "Billy"]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which animated movie was first to feature a celebrity as a voice actor?",
    correct_answer: "Aladdin",
    incorrect_answers: [
      "Toy Story",
      "James and the Giant Peach",
      "The Hunchback of Notre Dame"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 1976 film 'Taxi Driver', how many guns did Travis buy from the salesman?",
    correct_answer: "4",
    incorrect_answers: ["2", "6", "1"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who played the female lead in the 1933 film 'King Kong'?",
    correct_answer: "Fay Wray",
    incorrect_answers: ["Jean Harlow", "Vivien Leigh", "Mae West"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was Marilyn Monroe`s character's first name in the film 'Some Like It Hot'?",
    correct_answer: "Sugar",
    incorrect_answers: ["Honey", "Caramel", "Candy"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which 1973 film does Yul Brynner play a robotic cowboy who malfunctions and goes on a killing	spree?",
    correct_answer: "Westworld",
    incorrect_answers: ["Runaway", "Android", "The Terminators"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who starred in the film 1973 movie 'Enter The Dragon'?",
    correct_answer: "Bruce Lee",
    incorrect_answers: ["Jackie Chan", "Jet Li", "Yun-Fat Chow"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of James Dean's character in the 1955 movie 'Rebel Without a Cause'?",
    correct_answer: "Jim Stark",
    incorrect_answers: ["Ned Stark", "Jim Kane", "Frank Stark"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "Who directed the 2015 movie 'The Revenant'?",
    correct_answer: "Alejandro G. In;arritu",
    incorrect_answers: ["Christopher Nolan", "David Fincher", "Wes Anderson"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "This movie contains the quote, 'I love the smell of napalm in the morning!'",
    correct_answer: "Apocalypse Now",
    incorrect_answers: ["Platoon", "The Deer Hunter", "Full Metal Jacket"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "This movie contains the quote, 'Houston, we have a problem.'",
    correct_answer: "Apollo 13",
    incorrect_answers: ["The Right Stuff", "Capricorn One", "Marooned"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "This movie contains the quote, 'What we've got here is a failure to communicate.'",
    correct_answer: "Cool Hand Luke",
    incorrect_answers: [
      "Bonnie and Clyde",
      "The Graduate",
      "In the Heat of the Night"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the first 'Star Wars' film by release order?",
    correct_answer: "A New Hope",
    incorrect_answers: [
      "The Phantom Menace",
      "The Force Awakens",
      "Revenge of the Sith"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the Artificial Intelligence system in the 1983 film, 'WarGames'?",
    correct_answer: "War Operation Plan Response",
    incorrect_answers: [
      "Self Evolving Thought Helix",
      "Master Control Program",
      "West Campus Analog Computer"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these movies did Jeff Bridges not star in?",
    correct_answer: "The Hateful Eight",
    incorrect_answers: ["Tron: Legacy", "The Giver", "True Grit"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which iconic character is featured in movies such as 'The Enforcer', 'Sudden Impact', and 'The Dead Pool'?",
    correct_answer: "Dirty Harry",
    incorrect_answers: ["Indiana Jones", "James Bond", "Harry Potter"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1971 film 'Willy Wonka & the Chocolate Factory', who played Willy Wonka?",
    correct_answer: "Gene Wilder",
    incorrect_answers: ["Shia LeBouf", "Peter Ostrum", "Johnny Depp"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "Who plays Alice in the Resident Evil movies?",
    correct_answer: "Milla Jovovich",
    incorrect_answers: ["Madison Derpe", "Milla Johnson", "Kim Demp"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In what Disney movie can you spot the character 'Pac-Man' in if you look closely enough in some scenes?",
    correct_answer: "Tron",
    incorrect_answers: ["Big Hero 6", "Fantasia", "Monsters, Inc."]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1979 British film 'Quadrophenia' what is the name of the main protagonist?",
    correct_answer: "Jimmy Cooper",
    incorrect_answers: ["Pete Townshend", "Franc Roddam", "Archie Bunker"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who played Baron Victor Frankestein in the 1957 Hammer horror film 'The Curse of Frankenstein'?",
    correct_answer: "Peter Cushing",
    incorrect_answers: ["Boris Karloff", "Vincent Price", "Lon Chaney Jr."]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the movie 'Cast Away' the main protagonist's best friend while on the island is named",
    correct_answer: "Wilson",
    incorrect_answers: ["Carson", "Jackson", "Willy"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the correct phrase for the Latin saying 'Romanes Eunt Domus' in Monty Python's Life of Brian?",
    correct_answer: "Romani Ite Domum",
    incorrect_answers: [
      "Romans Go Home",
      "Roxani Ite Domum",
      "Tomate Ite Domum"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who voices the main character Blu in the 2011 animated film 'Rio'?",
    correct_answer: "Jesse Eisenberg",
    incorrect_answers: ["Michael Cera", "Jonah Hill", "Zach Galifianakis"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the movie 'Spaceballs', what are the Spaceballs attempting to steal from Planet Druidia?",
    correct_answer: "Air",
    incorrect_answers: ["The Schwartz", "Princess Lonestar", "Meatballs"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the actor who played Leatherface in the 1974 horror film, The Texas Chainsaw Massacre?",
    correct_answer: "Gunnar Hansen",
    incorrect_answers: ["Edwin Neal", "John Dugan", "Joe Bill Hogan"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year did the James Cameron film 'Titanic' come out in theaters?",
    correct_answer: "1997",
    incorrect_answers: ["1996", "1998", "1999"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "When does 'Rogue One: A Star Wars Story' take place chronologically in the series?",
    correct_answer: "Between Episode 3 and 4",
    incorrect_answers: [
      "After Episode 6",
      "Before Episode 1",
      "Between Episode 4 and 5"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of the protagonist in the movie Commando (1985)?",
    correct_answer: "John Matrix",
    incorrect_answers: ["Ben Richards", "Douglas Quaid", "Harry Tasker"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the correct spelling of the protagonist of the book in The NeverEnding Story (1984)?",
    correct_answer: "Atreyu",
    incorrect_answers: ["Atrayu", "Atraiyu", "Atraeyu"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the 1992 film 'Army of Darkness', what name does Ash give to his double-barreled shotgun?",
    correct_answer: "Boomstick",
    incorrect_answers: ["Bloomstick", "Blastbranch", "2-Pump Chump"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "Who plays the character of Po in the Kung Fu Panda movies?",
    correct_answer: "Jack Black",
    incorrect_answers: ["Mirana Jonnes", "McConahey Ramses", "Jim Petersson"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the movie 'Blade Runner', what is the term used for human-like androids ?",
    correct_answer: "Replicants",
    incorrect_answers: ["Cylons", "Synthetics", "Skinjobs"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who was the director of 'Scott Pilgrim vs. the World (2010)'?",
    correct_answer: "Edgar Wright",
    incorrect_answers: ["Phil Lord", "Chris Miller", "Seth Rogan"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In what year did Clint Eastwood star as Inspector Harry Callahan in the film 'Dirty Harry'?",
    correct_answer: "1971",
    incorrect_answers: ["1975", "1983", "1969"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to 'Star Wars' lore, which planet does Obi-Wan Kenobi come from?",
    correct_answer: "Stewjon",
    incorrect_answers: ["Alderaan", "Tatooine", "Naboo"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Jurassic World', which company purchases InGen and creates Jurassic World?",
    correct_answer: "Masrani Global Corporation ",
    incorrect_answers: [
      "Biology Synthetics Technologies",
      "International Genetics Incorporated",
      "International Genetic Technologies"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which actors made up the trio in 'The Good, the Bad, and the Ugly'? ",
    correct_answer: "Clint Eastwood, Eli Wallach, and Lee Van Cleef",
    incorrect_answers: [
      "Sergio Leone, Ennio Morricone, and Tonino Delli Colli",
      "Yul Brynner, Steve McQueen, and Charles Bronson",
      "Aldo Giuffr&egrave;, Mario Brega, and Luigi Pistilli"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was Bruce Campbell's iconic one-liner after getting a chainsaw hand in Evil Dead 2?",
    correct_answer: "Groovy.",
    incorrect_answers: ["Gnarly.", "Perfect.", "Nice."]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What Queen song plays during the final fight scene of the film 'Hardcore Henry'?",
    correct_answer: "Don't Stop Me Now",
    incorrect_answers: [
      "Brighton Rock",
      "Another Bites the Dust",
      "We Will Rock You"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the species of the 'Predator' in the 1987 movie 'Predator'?",
    correct_answer: "Yautja",
    incorrect_answers: ["Xenomorph", "Praetorian", "Phocrex"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first feature-length computer-animated movie?",
    correct_answer: "Toy Story",
    incorrect_answers: ["Tron", "Lion king", "101 Dalmatians"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "In Mulan (1998), who is the leader of the Huns?",
    correct_answer: "Shan Yu",
    incorrect_answers: ["Chien-Po", "Li Shang", "Fa Zhou"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of the queen's pet in A Bug's Life?",
    correct_answer: "Aphie",
    incorrect_answers: ["Flik", "Hopper", "Dot"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "In Finding Nemo, what was the name of Nemo's mom?",
    correct_answer: "Coral",
    incorrect_answers: ["Sandy", "Pearl", "Shelly"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who provided a majority of the songs and lyrics for 'Spirit: Stallion of the Cimarron'?",
    correct_answer: "Bryan Adams",
    incorrect_answers: ["Smash Mouth", "Oasis", "Air Supply"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What film did James Cameron's Avatar dethrone as the highest-grossing film ever?",
    correct_answer: "Titanic",
    incorrect_answers: ["Star Wars", "Gone with the Wind", "Jaws"]
  },

  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "What breed of dog was 'Marley' in the film 'Marley & Me'?",
    correct_answer: "Labrador Retriever",
    incorrect_answers: ["Golden Retriever", "Dalmatian", "Shiba Inu"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following is NOT a quote from the 1942 film Casablanca? ",
    correct_answer: "'Frankly, my dear, I don't give a damn.'",
    incorrect_answers: [
      "'Here's lookin' at you, kid.'",
      "'Of all the gin joints, in all the towns, in all the world, she walks into mine...'",
      "'Round up the usual suspects.'"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following was not one of 'The Magnificent Seven'?",
    correct_answer: "Clint Eastwood",
    incorrect_answers: ["Steve McQueen", "Charles Bronson", "Robert Vaughn"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    correct_answer: "Harry Potter",
    incorrect_answers: ["Ted", "Spy Kids", "Pirates of the Caribbean "]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "Who directed 'E.T. the Extra-Terrestrial' (1982)?",
    correct_answer: "Steven Spielberg",
    incorrect_answers: ["Stanley Kubrick", "James Cameron", "Tim Burton"]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "When was the movie 'Con Air' released?",
    correct_answer: "1997",
    incorrect_answers: ["1985", "1999", "1990"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
    correct_answer: "The Vikings ",
    incorrect_answers: ["The Long Ships", "Prince Valiant", "Spartacus"]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1984 movie 'The Terminator', what model number is the Terminator portrayed by Arnold Schwarzenegger?",
    correct_answer: "T-800",
    incorrect_answers: ["I-950", "T-888", "T-1000"]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the robot in the 1951 science fiction film classic 'The Day the Earth Stood Still'?",
    correct_answer: "Gort",
    incorrect_answers: ["Robby", "Colossus", "Box"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "This movie contains the quote, 'I feel the need ... the need for speed!'",
    correct_answer: "Top Gun",
    incorrect_answers: ["Days of Thunder", "The Color of Money", "Cocktail"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which African country was the 2006 film 'Blood Diamond' mostly set in?",
    correct_answer: "Sierra Leone",
    incorrect_answers: ["Liberia", "Burkina Faso", "Central African Republic"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the orange and white bot's name in 'Star Wars: The Force Awakens'?",
    correct_answer: "BB-8",
    incorrect_answers: ["BB-3", "AA-A", "R2-D2"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the planet in 'Aliens'?",
    correct_answer: "LV-426",
    incorrect_answers: ["Weyland Yutani Corporation Base", "FR-838", "DI-621"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these actors/actresses is NOT a part of the cast for the 2016 movie 'Suicide Squad'?",
    correct_answer: "Scarlett Johansson",
    incorrect_answers: ["Jared Leto", "Will Smith", "Margot Robbie"]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which movie sequel had improved box office results compared to its original film?",
    correct_answer: "Toy Story 2",
    incorrect_answers: [
      "Sin City: A Dame to Kill For",
      "Speed 2: Cruise Control",
      "Son of the Mask"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "Who plays the Nemesis in the Resident Evil movies?",
    correct_answer: "Matthew Taylor",
    incorrect_answers: ["Jason Dip", "Eric Mabius", "Jimmy Matts"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "What is the oldest Disney film?",
    correct_answer: "Snow White and the Seven Dwarfs",
    incorrect_answers: ["Pinocchio", "Dumbo", "Fantasia"]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which movie of film director Stanley Kubrick is known to be an adaptation of a Stephen King novel?",
    correct_answer: "The Shining",
    incorrect_answers: [
      "2001: A Space Odyssey",
      "Dr. Strangelove ",
      "Eyes Wide Shut"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who is the main protagonist in, the 1985 film, Back to the Future?",
    correct_answer: "Marty McFly",
    incorrect_answers: [
      "Emmett 'Doc' Brown",
      "Biff Tannen",
      "George McFly"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 1964 film 'Zulu', what song does the British Army company sing before the final battle?",
    correct_answer: "Men of Harlech",
    incorrect_answers: [
      "Scotland the Brave",
      "Colonel Bogey March",
      "The British Grenadiers"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "Who played Sgt. Gordon Elias in 'Platoon' (1986)?",
    correct_answer: "Willem Dafoe",
    incorrect_answers: ["Charlie Sheen", "Matt Damon", "Johnny Depp"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 'Jurassic World', what is the name of the dinosaur that is a genetic hybrid?",
    correct_answer: "Indominus Rex",
    incorrect_answers: ["Mosasaurus", "Pteranodon", "Tyrannosaurus Rex "]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "The 2002 film '28 Days Later' is mainly set in which European country?",
    correct_answer: "United Kingdom",
    incorrect_answers: ["France", "Italy", "Germany"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the movie Gremlins, after what time of day should you not feed Mogwai?",
    correct_answer: "Midnight",
    incorrect_answers: ["Evening", "Morning", "Afternoon"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "'The first rule is: you don't talk about it' is a reference to which movie?",
    correct_answer: "Fight Club",
    incorrect_answers: ["The Island", "Unthinkable", "American Pie"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "In the 2012 film, 'The Lorax', who is the antagonist?",
    correct_answer: "Aloysius O'Hare",
    incorrect_answers: ["Ted Wiggins", "The Once-Ler", "Grammy Norma"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "At the end of the 2001 film 'Rat Race', whose concert do the contestants crash?",
    correct_answer: "Smash Mouth",
    incorrect_answers: ["Bowling for Soup", "Sum 41", "Linkin Park"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which movie does Robin Williams' character have to disguise themselves into a woman?",
    correct_answer: "Mrs. Doubtfire",
    incorrect_answers: ["Old Dogs", "Jumanji", "Awakenings"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What type of cheese, loved by Wallace and Gromit, had it's sale prices rise after their successful short films?",
    correct_answer: "Wensleydale",
    incorrect_answers: ["Cheddar", "Moon Cheese", "Edam"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "The 2016 Disney animated film 'Moana' is based on which culture?",
    correct_answer: "Polynesian",
    incorrect_answers: ["Native American", "Japanese", "Nordic"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the 1995 film 'Balto', who are Steele's accomplices?",
    correct_answer: "Kaltag, Nikki, and Star",
    incorrect_answers: [
      "Dusty, Kirby, and Ralph",
      "Nuk, Yak, and Sumac",
      "Jenna, Sylvie, and Dixie"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which documentary film maker wrote and starred in the film 'My Scientology Movie' which first debuted in 2015?",
    correct_answer: "Louis Theroux",
    incorrect_answers: ["Errol Morris", "Joe Berlinger", "Adam Curtis"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the island that 'Jurassic Park' is built on?",
    correct_answer: "Isla Nublar",
    incorrect_answers: ["Isla Sorna", "Isla Muerta", "Isla Pena"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'Jurassic Park' universe, what is the name of the island that contains InGen's Site B?",
    correct_answer: "Isla Sorna",
    incorrect_answers: ["Isla Nublar", "Isla Pena", "Isla Muerta"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'Jurassic Park' universe, when did 'Jurassic Park: San Diego' begin construction?",
    correct_answer: "1985",
    incorrect_answers: ["1988", "1986", "1993"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which actress portrayed Dr. Grace Augustine in the James Cameron movie 'Avatar'?",
    correct_answer: "Sigourney Weaver",
    incorrect_answers: ["Jessica Chastain", "Melissa Beckett", "Alyssa Monroe "]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "For the film 'Raiders of The Lost Ark', what was Harrison Ford sick with during the filming of the Cairo chase?",
    correct_answer: "Dysentery",
    incorrect_answers: ["Anemia", "Constipation", "Acid Reflux "]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which former Star Trek actor directed Three Men and a Baby (1987)?",
    correct_answer: "Leonard Nimoy",
    incorrect_answers: ["William Shatner", "George Takei", "James Doohan"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?",
    correct_answer: "Dave",
    incorrect_answers: ["John", "Will", "Carl"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which town is the setting for the Disney movie The Love Bug (1968)?",
    correct_answer: "San Francisco",
    incorrect_answers: ["Los Angeles", "Sacramento", "San Jose"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question: "In Big Hero 6, what were Baymax's motions modeled after?",
    correct_answer: "Baby penguins",
    incorrect_answers: ["Baby monkeys", "Baby ostriches", "Baby bears"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question: "In Big Hero 6, what fictional city is the Big Hero 6 from?",
    correct_answer: "San Fransokyo",
    incorrect_answers: ["San Tokyo", "Tokysisco", "Sankyo"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Friday The 13th series, what is Jason's mother's first name?",
    correct_answer: "Pamela",
    incorrect_answers: ["Mary", "Christine", "Angeline"]
  },

  {
    category: "Movies",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following is not the name of a 'Bond Girl'? ",
    correct_answer: "Vanessa Kensington",
    incorrect_answers: ["Pam Bouvier", "Mary Goodnight", "Wai Lin"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which was the first of Alfred Hitchcock's movies to be filmed in colour?",
    correct_answer: "Rope",
    incorrect_answers: ["Psycho", "Vertigo", "Rebecca"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who voiced the character Draco in the 1996 movie 'DragonHeart'?",
    correct_answer: "Sean Connery",
    incorrect_answers: ["Dennis Quaid", "Pete Postlethwaite", "Brian Thompson"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which actor played the main character in the 1990 film 'Edward Scissorhands'?",
    correct_answer: "Johnny Depp",
    incorrect_answers: ["Clint Eastwood", "Leonardo DiCaprio", "Ben Stiller"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "What did Alfred Hitchcock use as blood in the film 'Psycho'? ",
    correct_answer: "Chocolate syrup",
    incorrect_answers: ["Ketchup", "Red food coloring", "Maple syrup"]
  },
  {
    category: "Movies",
    type: "multiple",
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
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "What city did the monster attack in the film, 'Cloverfield'?",
    correct_answer: "New York, New York",
    incorrect_answers: [
      "Las Vegas, Nevada",
      "Chicago, Illinois",
      "Orlando, Florida"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question: "Who voiced Metalbeard in 'The Lego Movie'?",
    correct_answer: "Nick Offerman",
    incorrect_answers: ["Liam Neeson", "Morgan Freeman", "Will Arnet"]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "hard",
    question:
      "What three movies, in order from release date, make up the 'Dollars Trilogy'?",
    correct_answer:
      "'A Fistful of Dollars', 'For a Few Dollars More', 'The Good, the Bad, and the Ugly'",
    incorrect_answers: [
      "'The Good, the Bad, and the Ugly', 'For A Few Dollars More', 'A Fistful of Dollars'",
      "'For a Few Dollars More', 'The Good, the Bad, and the Ugly', 'A Fistful of Dollars'",
      "'For a Few Dollars More', 'A Fistful of Dollars', 'The Good, the Bad, and the Ugly'"
    ]
  },
  {
    category: "Movies",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which actor plays the character 'Tommy Jarvis' in 'Friday the 13th: The Final Chapter' (1984)?",
    correct_answer: "Corey Feldman",
    incorrect_answers: ["Macaulay Culkin", "Mel Gibson", "Mark Hamill"]
  },

  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following sports is not part of the triathlon?",
    correct_answer: "Horse-Riding",
    incorrect_answers: ["Cycling", "Swimming", "Running"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "At which bridge does the annual Oxford and Cambridge boat race start?",
    correct_answer: "Putney",
    incorrect_answers: ["Hammersmith", "Vauxhall ", "Battersea"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
    correct_answer: "Nine",
    incorrect_answers: ["Ten", "Seven", "Eight"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
    correct_answer: "Jordan",
    incorrect_answers: ["Benetton", "Ferrari", "Mercedes"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which German sportswear company's logo is the 'Formstripe'?",
    correct_answer: "Puma",
    incorrect_answers: ["Nike", "Adidas", "Reebok"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "In golf, what name is given to a hole score of two under par?",
    correct_answer: "Eagle",
    incorrect_answers: ["Birdie", "Bogey", "Albatross"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "What cricketing term denotes a batsman being dismissed with a score of zero?",
    correct_answer: "Duck",
    incorrect_answers: ["Bye", "Beamer", "Carry"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these teams isn't a member of the NHL's 'Original Six' era?",
    correct_answer: "Philadelphia Flyers",
    incorrect_answers: [
      "New York Rangers",
      "Toronto Maple Leafs",
      "Boston Bruins"
    ]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who was the British professional wrestler Shirley Crabtree better known as?",
    correct_answer: "Big Daddy",
    incorrect_answers: ["Giant Haystacks", "Kendo Nagasaki", "Masambula"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the nickname of Northampton town's rugby union club?",
    correct_answer: "Saints",
    incorrect_answers: ["Harlequins", "Saracens", "Wasps"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "In what sport is a 'shuttlecock' used?",
    correct_answer: "Badminton",
    incorrect_answers: ["Table Tennis", "Rugby", "Cricket"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "A stimpmeter measures the speed of a ball over what surface?",
    correct_answer: "Golf Putting Green",
    incorrect_answers: ["Football Pitch", "Cricket Outfield", "Pinball Table"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Formula One driver was nicknamed 'The Professor'?",
    correct_answer: "Alain Prost",
    incorrect_answers: ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "How many scoring zones are there on a conventional dart board?",
    correct_answer: "82",
    incorrect_answers: ["62", "42", "102"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "In a game of snooker, what colour ball is worth 3 points?",
    correct_answer: "Green",
    incorrect_answers: ["Yellow", "Brown", "Blue"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question: "With which doubles partner did John McEnroe have most success?",
    correct_answer: "Peter Fleming",
    incorrect_answers: ["Mark Woodforde", "Michael Stich", "Mary Carillo"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "In baseball, how many fouls are an out?",
    correct_answer: "0",
    incorrect_answers: ["5", "3", "2"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Which nation hosted the FIFA World Cup in 2006?",
    correct_answer: "Germany",
    incorrect_answers: ["United Kingdom", "Brazil", "South Africa"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Which country will host the 2020 Summer Olympics?",
    correct_answer: "Japan",
    incorrect_answers: ["China", "Australia", "Germany"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Which country is hosting the 2022 FIFA World Cup?",
    correct_answer: "Qatar",
    incorrect_answers: ["Uganda", "Vietnam", "Bolivia"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Who won the 2015 Formula 1 World Championship?",
    correct_answer: "Lewis Hamilton",
    incorrect_answers: ["Nico Rosberg", "Sebastian Vettel", "Jenson Button"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which driver has been the Formula 1 world champion for a record 7 times?",
    correct_answer: "Michael Schumacher",
    incorrect_answers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
    correct_answer: "7 - 1",
    incorrect_answers: ["0 - 1", "3 - 4", "16 - 0"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question: "Which car manufacturer won the 2016 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Ferrari"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which car company is the only Japanese company which won the 24 Hours of Le Mans?",
    correct_answer: "Mazda",
    incorrect_answers: ["Toyota", "Subaru", "Nissan"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "Which soccer team won the Copa America 2015 Championship ?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Paraguay"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Which soccer team won the Copa America Centenario 2016?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Colombia"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Which team won 2014 FIFA World Cup in Brazil?",
    correct_answer: "Germany",
    incorrect_answers: ["Argentina", "Brazil", "Netherlands"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
    correct_answer: "4",
    incorrect_answers: ["5", "2", "3"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Who won the 2016 Formula 1 World Driver's Championship?",
    correct_answer: "Nico Rosberg",
    incorrect_answers: ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question: "What team won the 2016 MLS Cup?",
    correct_answer: "Seattle Sounders",
    incorrect_answers: ["Colorado Rapids", "Toronto FC", "Montreal Impact"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "What is the oldest team in the NFL?",
    correct_answer: "Arizona Cardinals",
    incorrect_answers: ["Chicago Bears", "Green Bay Packers", "New York Giants"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Grand Slam tennis tournaments occurs LAST?",
    correct_answer: "US Open",
    incorrect_answers: ["French Open", "Wimbledon", "Australian Open"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "What year did the New Orleans Saints win the Super Bowl?",
    correct_answer: "2009",
    incorrect_answers: ["2008", "2010", "2011"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "Which portuguese island is soccer player Cristiano Ronaldo from?",
    correct_answer: "Madeira",
    incorrect_answers: ["Terceira", "Santa Maria", "Porto Santo"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Who won the 'Champions League' in 1999?",
    correct_answer: "Manchester United",
    incorrect_answers: ["Barcelona", "Bayern Munich", "Liverpool"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "What year was hockey legend Wayne Gretzky born?",
    correct_answer: "1961",
    incorrect_answers: ["1965", "1959", "1963"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question: "Which year was the third Super Bowl held?",
    correct_answer: "1969",
    incorrect_answers: ["1968", "1971", "1970"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?",
    correct_answer: "Jose Fernandez",
    incorrect_answers: ["Jacob deGrom", "Shelby Miller", "Matt Harvey"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
    correct_answer: "American Football",
    incorrect_answers: ["Wrestling", "Archery", "Horse-Racing"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Which car manufacturer won the 2017 24 Hours of Le Mans?",
    correct_answer: "Porsche",
    incorrect_answers: ["Toyota", "Audi", "Chevrolet"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "When was the first official international game played?",
    correct_answer: "1872",
    incorrect_answers: ["1880", "1863", "1865"]
  },

  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which English football club has the nickname 'The Foxes'?",
    correct_answer: "Leicester City",
    incorrect_answers: [
      "Northampton Town",
      "Bradford City",
      "West Bromwich Albion"
    ]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Which team won the 2015-16 English Premier League?",
    correct_answer: "Leicester City",
    incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question: "What is the highest belt you can get in Taekwondo?",
    correct_answer: "Black",
    incorrect_answers: ["White", "Red", "Green"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Which country is hosting the 2018 FIFA World Cup?",
    correct_answer: "Russia",
    incorrect_answers: ["Germany", "United States", "Saudi Arabia"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which Italian footballer told Neuer where he's putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "How many points did LeBron James score in his first NBA game?",
    correct_answer: "25",
    incorrect_answers: ["19", "69", "41"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which city did the former NHL team 'The Nordiques' originiate from?",
    correct_answer: "Quebec City",
    incorrect_answers: ["Houston", "Montreal", "New York"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "This Canadian television sportscaster is known for his 'Hockey Night in Canada' role, a commentary show during hockey games.",
    correct_answer: "Don Cherry",
    incorrect_answers: ["Don McKellar", "Don Taylor ", "Donald Sutherland"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the TV series 'Person of Interest', who plays the character 'Harold Finch'?",
    correct_answer: "Michael Emerson",
    incorrect_answers: ["Jim Caviezel", "Taraji P. Henson", "Kevin Chapman"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "Who sang the theme song for the TV show 'Rawhide'?",
    correct_answer: "Frankie Laine",
    incorrect_answers: ["Guy Mitchell", "Tennessee Ernie Ford", "Slim Whitman"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "In what year did 'The Big Bang Theory' debut on CBS?",
    correct_answer: "2007",
    incorrect_answers: ["2008", "2006", "2009"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the original Doctor Who series (1963), fourth doctor Tom Baker's scarf was how long?",
    correct_answer: "7 Meters",
    incorrect_answers: ["10 Meters", "2 Meters", "5 Meters"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the star of the AMC series Breaking Bad?",
    correct_answer: "Walter White",
    incorrect_answers: ["Saul Goodman", "Jesse Pinkman", "Skyler White"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Autobot names in Michael Bay's movies was NOT a name for a Transformer in the original 1980's cartoon?",
    correct_answer: "Mudflap",
    incorrect_answers: ["Skids", "Sideswipe", "Ratchet"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the setting of the show 'Parks and Recreation'?",
    correct_answer: "Pawnee, Indiana",
    incorrect_answers: [
      "Eagleton, Indiana",
      "Pasadena, California",
      "London, England"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these characters in 'Stranger Things' has the power of Telekinesis?",
    correct_answer: "Eleven",
    incorrect_answers: ["Mike", "Lucas", "Karen"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Breaking Bad, the initials W.W. refer to which of the following?",
    correct_answer: "Walter White",
    incorrect_answers: ["William Wolf", "Willy Wonka", "Wally Walrus"]
  },
  {
    category: "Television",
    type: "multiple",
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
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "How many seasons did 'Stargate SG-1' have?",
    correct_answer: "10",
    incorrect_answers: ["3", "7", "12"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the main character in the show 'Burn Notice'?",
    correct_answer: "Michael Westen",
    incorrect_answers: ["Sam Axe", "Fiona Glenanne", "Madeline Westen"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "In the Star Trek universe, what color is Vulcan blood?",
    correct_answer: "Green",
    incorrect_answers: ["Blue", "Red", "Purple"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Naruto: Shippuden, which of the following elements is a 'Kekkei Tōta?'",
    correct_answer: "Particle Style",
    incorrect_answers: ["Any Doujutsu", "Shadow Style", "Ice Style"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Dee from 'It's Always Sunny in Philadelphia' has dated all of the following guys EXCEPT",
    correct_answer: "Matthew 'Rickety Cricket' Mara",
    incorrect_answers: [
      "Colin the Thief",
      "Ben the Soldier",
      "Kevin Gallagher aka Lil' Kevin"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which country does the YouTuber 'SinowBeats' originate from?",
    correct_answer: "Scotland",
    incorrect_answers: ["England", "Sweden", "Germany"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the name of the the first episode of Doctor Who to air in 1963?",
    correct_answer: "An Unearthly Child",
    incorrect_answers: ["The Daleks", "The Aztecs", "The Edge of Destruction"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the main character in 'The Flash' TV series?",
    correct_answer: "Barry Allen",
    incorrect_answers: ["Oliver Queen", "Bart Allen", "Bruce Wayne"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question: "In Star Trek, what is the name of Spock's father?",
    correct_answer: "Sarek",
    incorrect_answers: ["Tuvok", "T'Pal", "Surak"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Star Trek: The Next Generation, what is the name of Data's cat?",
    correct_answer: "Spot",
    incorrect_answers: ["Mittens", "Tom", "Kitty"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "Who won Big Brother 2014 UK?",
    correct_answer: "Helen Wood",
    incorrect_answers: [
      "Christopher Hall",
      "Pauline Bennett",
      "Pavandeep 'Pav' Paul"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which year did the British television series 'The Bill' end?",
    correct_answer: "2010",
    incorrect_answers: ["2001", "2007", "2012"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "What is Meg's full name in 'Family Guy'?",
    correct_answer: "Megatron Griffin",
    incorrect_answers: ["Who-Cares Griffin", "Neil Griffin", "Megan Griffin"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In season one of the Netflix political drama 'House of Cards', what government position does Frank Underwood hold?",
    correct_answer: "House Majority Whip",
    incorrect_answers: ["Attorney General", "President", "Chief of Staff"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "British actor David Morrissey stars as which role in 'The Walking Dead'?",
    correct_answer: "The Governor",
    incorrect_answers: ["Negan", "Rick Grimes", "Daryl Dixon"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many seasons did the TV show 'Donkey Kong Country' last?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "5"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the TV Show 'Donkey Kong Country', which episode did the song 'Eddie, Let Me Go Back To My Home' play in?",
    correct_answer: "It's a Wonderful Life",
    incorrect_answers: [
      "Message In A Bottle Show",
      "To The Moon Baboon",
      "Ape-Nesia"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "When Donkey Kong died in the 'Donkey Kong Country' episode 'It's a Wonderful Life', who was his guardian angel?",
    correct_answer: "Eddie the Mean Old Yeti",
    incorrect_answers: ["Kiddy Kong", "Diddy Kong", "King K. Rool"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these in the Star Trek series is NOT Klingon food?",
    correct_answer: "Hors d'oeuvre",
    incorrect_answers: ["Racht", "Gagh", "Bloodwine"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Star Trek', what is the Ferengi's First Rule of Acquisition?",
    correct_answer: "Once you have their money, you never give it back. ",
    incorrect_answers: [
      "Never place friendship above profit",
      "Greed is Eternal",
      "Never allow family to stand in the way of opportunity"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question: "What is the Klingon's afterlife called?",
    correct_answer: "Sto-vo-kor",
    incorrect_answers: ["Valhalla", "Karon'gahk", "New Jersey"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "What was Nickelodeon's original name?",
    correct_answer: "Pinwheel",
    incorrect_answers: ["MTVKids", "KidsTV", "Splat!"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "In 'Star Trek', what is the Klingon death ritual?",
    correct_answer: "Look into sky and yell loudly in mourning.",
    incorrect_answers: [
      "Kiss the jagged forehead before burial.",
      "Shoot into space in a torpedo casing.",
      "Split the deceased's earnings between bloodkin."
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which race enjoys a glass of warm baghol in 'Star Trek'?",
    correct_answer: "Klingon",
    incorrect_answers: ["Vulcan", "Human", "Botha"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Star Trek', what sauce is commonly used by Klingons on bregit lung?",
    correct_answer: "Grapok sauce",
    incorrect_answers: [
      "Gazorpazorp pudding",
      "Sweet chili sauce",
      "Grapork sauce"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Star Trek', what is the Klingon delicacy of 'gagh' made from?",
    correct_answer: "Serpent worms",
    incorrect_answers: ["Earthworms", "Spaghetti noodles", "Klingworms"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show 'Stargate Universe' have?",
    correct_answer: "2",
    incorrect_answers: ["10", "5", "3"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these voices wasn't a choice for the House AI in 'The Simpsons Treehouse of Horror' short, House of Whacks?",
    correct_answer: "George Clooney",
    incorrect_answers: ["Matthew Perry", "Dennis Miller", "Pierce Brosnan"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who played the Waitress in the Spam sketch of 'Monty Python's Flying Circus'?",
    correct_answer: "Terry Jones",
    incorrect_answers: ["Eric Idle", "Graham Chapman", "John Cleese"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "Alan Reed is known for providing the voice of which character?",
    correct_answer: "Fred Flintstone",
    incorrect_answers: ["Bugs Bunny", "Fangface", "G.I. Joe"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the callsign of Commander William Adama in Battlestar Galactica (2004)?",
    correct_answer: "Husker",
    incorrect_answers: ["Starbuck", "Apollo", "Crashdown"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the inflatable duck sacrified to the crowd at the end of Episode 34 of the 18th season of Big Brother?",
    correct_answer: "Pablo",
    incorrect_answers: ["Esteban", "Carlos", "Duckster"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In season one of the US Kitchen Nightmares, Gordan Ramsay tried to save 10 different restaurants. How many ended up closing afterwards?",
    correct_answer: "9",
    incorrect_answers: ["6", "3", "0"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 'Star Trek: Voyager', which episode did Voyager establish real-time communication with Starfleet Headquarters?",
    correct_answer: "Pathfinder",
    incorrect_answers: [
      "Message In A Bottle",
      "Someone To Watch Over Me",
      "Counterpoint"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the TV show 'Mad Men', what was Donald Draper's birthname?",
    correct_answer: "Richard 'Dick' Whitman",
    incorrect_answers: [
      "Donald Draper",
      "John Ashbury",
      "Michael 'Mikey' Wilhelm"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who was the first ever actor to play 'The Doctor' on 'Doctor Who'?",
    correct_answer: "William Hartnell",
    incorrect_answers: ["David Tennant", "Peter Capaldi", "Tom Baker"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'The Simpsons', what is the real name of 'Comic Book Guy'?",
    correct_answer: "Jeff Albertson",
    incorrect_answers: ["Comic Book Guy", "Edward Stone", "Jack Richardson"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "What NBC sitcom once saw two of its characters try to pitch NBC on a sitcom about nothing?",
    correct_answer: "Seinfeld",
    incorrect_answers: ["Frasier", "Becker", "Friends"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following won the first season of American Idol in 2002?",
    correct_answer: "Kelly Clarkson",
    incorrect_answers: ["Justin Guarini", "Ruben Studdard", "Chris Daughtry"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question: "Who was the winner of 'Big Brother' Season 10?",
    correct_answer: "Dan Gheesling",
    incorrect_answers: ["Bryce Kranyik", "Ryan Sutfin", "Chris Mundorf"]
  },

  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "From what show is the character 'James Doakes'? ",
    correct_answer: "Dexter",
    incorrect_answers: [
      "Marvel's Daredevil",
      "Boardwalk Empire",
      "The Walking Dead"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year did the television company BBC officially launch the channel BBC One?",
    correct_answer: "1936",
    incorrect_answers: ["1948", "1932", "1955"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the TV show 'Cheers', Sam Malone was a former relief pitcher for which baseball team?",
    correct_answer: "Boston Red Sox",
    incorrect_answers: [
      "New York Mets",
      "Baltimore Orioles",
      "Milwaukee Brewers"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which character was played by Dustin Diamond in the sitcom 'Saved by the Bell'?",
    correct_answer: "Screech",
    incorrect_answers: ["Zack", "Mr. Belding", "A.C. Slater"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who played Agent Fox Mulder in the TV sci-fi drama 'The X-Files'?",
    correct_answer: "David Duchovny",
    incorrect_answers: ["Gillian Anderson", "Robert Patrick", "Mitch Pileggi"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the original Star Trek TV series, what was Captain James T. Kirk's middle name?",
    correct_answer: "Tiberius",
    incorrect_answers: ["Trevor", "Travis", "Tyrone"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Grant Gustin plays which superhero on the CW show of the same name?",
    correct_answer: "The Flash",
    incorrect_answers: ["The Arrow", "Black Canary", "Daredevil"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question: "What's Dr. Doofenshmirtz first name?",
    correct_answer: "Heinz",
    incorrect_answers: ["Hans", "Hank", "Heidi"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In which British seaside town was the BBC sitcom 'Fawlty Towers' set?",
    correct_answer: "Torquay",
    incorrect_answers: ["Blackpool", "Bournemouth", "Great Yarmouth"]
  },
  {
    category: "Television",
    type: "multiple",
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
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the star of the TV series '24'?",
    correct_answer: "Kiefer Sutherland",
    incorrect_answers: ["Kevin Bacon", "Hugh Laurie", "Rob Lowe"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of Ross' pet monkey on 'Friends'?",
    correct_answer: "Marcel",
    incorrect_answers: ["Jojo", "George", "Champ"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "Which character does voice actress Tara Strong NOT voice?",
    correct_answer: "Bubbles (2016)",
    incorrect_answers: ["Twilight Sparkle", "Timmy Turner", "Harley Quinn"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the episode of SpongeBob SquarePants, 'Survival of the Idiots', Spongebob called Patrick which nickname?",
    correct_answer: "Pinhead",
    incorrect_answers: ["Starfish", "Larry", "Dirty Dan"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "Guy's Grocery Games is hosted by which presenter?",
    correct_answer: "Guy Fieri",
    incorrect_answers: ["Guy Martin", "Guy Ritchie", "Ainsley Harriott"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'It's Always Sunny in Philadelphia' what was the name of Frank's wrestling persona?",
    correct_answer: "The Trash Man",
    incorrect_answers: ["Bird of War", "Day Man", "The Maniac"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "The 'Psycho' series of videos on YouTube was created by which of the following?",
    correct_answer: "RiDGiD STUDiOS",
    incorrect_answers: ["Dan Bell", "Billy Familia", "VeganGainz"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who co-founded the YouTube Let's Play channel 'Game Grumps' alongside Newgrounds animator Egoraptor?",
    correct_answer: "JonTron",
    incorrect_answers: ["Pewdiepie", "Tobuscus", "Markiplier"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "On the show 'Rick and Morty', in episode 'Total Rickall', who was a parasite?",
    correct_answer: "Pencilvester",
    incorrect_answers: ["Beth Smith", "Summer Smith", "Mr. Poopy Butthole"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Game of Thrones, what continent lies across the Narrow Sea from Westeros?",
    correct_answer: "Essos",
    incorrect_answers: ["Easteros", "Westereast", "Esuntos"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "In Game of Thrones, what is Littlefinger's real name?",
    correct_answer: "Petyr Baelish",
    incorrect_answers: ["Podrick Payne", "Lancel Lannister", "Torrhen Karstark"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "When did the TV show Rick and Morty first air on Adult Swim?",
    correct_answer: "2013",
    incorrect_answers: ["2014", "2016", "2015"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question: "In Supernatural, what's is Sam's brothers name?",
    correct_answer: "Dean",
    incorrect_answers: ["Dave", "Steve", "Mike"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In DuckTales, what is the name of the city where all the main characters live?",
    correct_answer: "Duckburg",
    incorrect_answers: ["Duckwing", "Tailspin", "Wingford"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the television show Breaking Bad, what is the street name of Walter and Jesse's notorious product?",
    correct_answer: "Blue Sky",
    incorrect_answers: ["Baby Blue", "Rock Candy", "Pure Glass"]
  },
  {
    category: "Television",
    type: "multiple",
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
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these television shows makes everyone look under their chair?",
    correct_answer: "Oprah",
    incorrect_answers: ["Jimmy Fallon", "Saturday Night Live", "Larry Rubert"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question: "Who played the sun baby in the original run of Teletubbies?",
    correct_answer: "Jessica Smith",
    incorrect_answers: ["Pui Fan Lee", "Sue Monroe", "Lisa Brockwell"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the show 'Tengen Toppa Gurren Lagann' what is the name of the character who force everyone to live underground?",
    correct_answer: "Lordgenome",
    incorrect_answers: ["Kingloname", "Lord Genome", "King Loname"]
  },
  {
    category: "Television",
    type: "multiple",
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
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'The Big Bang Theory', what is Howard Wolowitz's nickname in World of Warcraft?",
    correct_answer: "Wolowizard",
    incorrect_answers: ["Sheldor", "Rajesh", "Priya"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the surname of the character Daryl in AMC's show The Walking Dead?",
    correct_answer: "Dixon",
    incorrect_answers: ["Grimes", "Dickinson", "Dicketson"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which show is known for the songs 'You are a Pirate', 'Cooking by the Book' and 'We Are Number One'?",
    correct_answer: "LazyTown",
    incorrect_answers: ["Sofia the First", "DuckTales", "Tom and Jerry"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "Which British writer wrote for both Doctor Who and Sherlock?",
    correct_answer: "Steven Moffatt",
    incorrect_answers: ["Phil Ford", "Russell T Davies", "Toby Whithouse"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the winner of the 2016 WWE Royal Rumble?",
    correct_answer: "Triple H",
    incorrect_answers: ["Roman Reigns", "AJ Styles", "Dean Ambrose"]
  },
  {
    category: "Television",
    type: "multiple",
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
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Donkey Kong Country', why does Donkey Kong want to know the secret of the crystal coconut?",
    correct_answer: "He's the big kahuna.",
    incorrect_answers: [
      "To find out where all the bananas are.",
      "Because Diddy Kong forced him.",
      "He wants to punish brutes."
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Star Trek', who was the founder of the Klingon Empire and its philosophy?",
    correct_answer: "Kahless the Unforgettable",
    incorrect_answers: [
      "Lady Lukara of the Great Hall",
      "Molor the Unforgiving",
      "Dahar Master Kor"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "What breed of dog is 'Scooby Doo'?",
    correct_answer: "Great Dane",
    incorrect_answers: ["Pit bull", "Boxer", "Doberman Pinscher"]
  },
  {
    category: "Television",
    type: "multiple",
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
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What episode of 'Mr. Bean' saw him trying to prevent people from seeing him naked?",
    correct_answer: "Mr. Bean in Room 426",
    incorrect_answers: [
      "Mr. Bean Goes to Town",
      "The Trouble with Mr. Bean",
      "Back to School Mr. Bean"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following actors portrayed the Ninth Doctor in the British television show 'Doctor Who'?",
    correct_answer: "Christopher Eccleston",
    incorrect_answers: ["David Tennant", "Matt Smith", "Tom Baker"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?",
    correct_answer: "Laura Roslin",
    incorrect_answers: ["William Adama", "Tricia Helfer", "Harry Stills"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the main antagonists in Battlestar Galactica?",
    correct_answer: "The Cylons",
    incorrect_answers: ["The Collective", "The Federation", "The Rebels"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which actor portrays 'Walter White' in the series 'Breaking Bad'?",
    correct_answer: "Bryan Cranston",
    incorrect_answers: ["Andrew Lincoln", "Aaron Paul", "RJ Mitte"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Prior to working at Wizards of the Coast, 'Mark Rosewater' was a writer for which show?",
    correct_answer: "Roseanne",
    incorrect_answers: ["Boy Meets World", "The X-Files", "NYPD Blue"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of Chris's brother in 'Everybody Hates Chris'?",
    correct_answer: "Drew",
    incorrect_answers: ["Jerome", "Greg", "Joe"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "On the NBC show Community, whose catch-phrase was 'Pop! Pop!'?",
    correct_answer: "Magnitude",
    incorrect_answers: ["Star Burns", "Leonard", "Senoir Chang"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question: "On the NBC show Community what was Star Burns' real name?",
    correct_answer: "Alex",
    incorrect_answers: ["Todd", "Neal", "Grimus"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "The HBO series 'Game of Thrones' is based on which series of books?",
    correct_answer: "A Song of Ice and Fire",
    incorrect_answers: ["The Wheel of Time", "Harry Potter", "The Notebook"]
  },

  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Doctor Who universe, how many times can a time lord normally regenerate?",
    correct_answer: "12",
    incorrect_answers: ["11", "13", "15"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which track by 'Massive Attack' is used for the theme of 'House'? ",
    correct_answer: "Teardrop",
    incorrect_answers: ["Protection", "Angel", "Black Milk"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, 'Top Gear'?",
    correct_answer: "Jessica",
    incorrect_answers: ["Angela", "Erica", "Sandra"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "The theme for the popular science fiction series 'Doctor Who' was composed by who?",
    correct_answer: "Ron Grainer",
    incorrect_answers: ["Murray Gold", "Delia Derbyshire", "Peter Howell"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the show Stranger Things, what is Eleven's favorite breakfast food?",
    correct_answer: "Eggo Waffles",
    incorrect_answers: ["Toast", "Captain Crunch", "Bacon and Eggs"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which company has exclusive rights to air episodes of the 'The Grand Tour'?",
    correct_answer: "Amazon",
    incorrect_answers: ["Netflix", "BBC", "CCTV"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the 'Flash' and 'Arrow' spinoff featuring a team of characters that have appeared on both shows?",
    correct_answer: "Legends of Tomorrow",
    incorrect_answers: [
      "Heroes of Tomorrow",
      "The Justice Society of America",
      "The Justice Society"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the television show 'Lazy Town', who is the actor of Robbie Rotten?",
    correct_answer: "Stefan Stefansson",
    incorrect_answers: [
      "Adam Sandler",
      "Magnus Scheving",
      "Stephen Carl"
    ]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show 'Stargate Atlantis' have?",
    correct_answer: "5",
    incorrect_answers: ["10", "2", "7"]
  },
  {
    category: "Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the planet that the Doctor from television series 'Doctor Who' comes from?",
    correct_answer: "Gallifrey",
    incorrect_answers: ["Sontar", "Skaro", "Mondas"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many games in the Crash Bandicoot series were released on the original Playstation?",
    correct_answer: "5",
    incorrect_answers: ["3", "7", "6"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of 'Team Fortress 2' update, in which it became Free-to-play?",
    correct_answer: "uber Update",
    incorrect_answers: [
      "Pyromania Update",
      "Mann-Conomy Update",
      "Engineer Update"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the punishment for playing Postal 2 in New Zealand?",
    correct_answer: "10 years in prison and a fine of $50,000",
    incorrect_answers: [
      "Fine of $5,000",
      "Nothing",
      "15 years in prison and a fine of $10,000"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who created the digital distribution platform Steam?",
    correct_answer: "Valve",
    incorrect_answers: ["Pixeltail Games", "Ubisoft", "Electronic Arts"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What year was the game Team Fortress 2 released?",
    correct_answer: "2007",
    incorrect_answers: ["2009", "2005", "2010"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "When Halo 3: ODST was unveiled in 2008, it had a different title. What was the game formally called?",
    correct_answer: "Halo 3: Recon",
    incorrect_answers: [
      "Halo 3: Helljumpers",
      "Halo 3: Phantom",
      "Halo 3: Guerilla"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT a terrorist faction in Counter-Strike (2000)?",
    correct_answer: "Midwest Militia",
    incorrect_answers: ["Phoenix Connection", "Elite Crew", "Guerrilla Warfare"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the currency in the 'Animal Crossing' series?",
    correct_answer: "Bells",
    incorrect_answers: ["Sea Shells", "Leaves", "Bugs"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who was the voice actor for Snake in Metal Gear Solid V: The Phantom Pain?",
    correct_answer: "Kiefer Sutherland",
    incorrect_answers: ["David Hayter", "Norman Reedus", "Hideo Kojima"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the first female protagonist in a video game?",
    correct_answer: "Samus Aran",
    incorrect_answers: ["Lara Croft", "Alis Landale", "Chell"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following Pokemon games released first?",
    correct_answer: "Pokemon Crystal",
    incorrect_answers: [
      "Pokemon Platinum",
      "Pokemon FireRed",
      "Pokemon Black"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Portal series, Aperture Science was founded under what name in the early 1940s?",
    correct_answer: "Aperture Fixtures",
    incorrect_answers: [
      "Aperture Lavatories",
      "Aperture Science Innovators",
      "Wheatley Laboratories"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which Mario spin-off game did Waluigi make his debut?",
    correct_answer: "Mario Tennis",
    incorrect_answers: [
      "Mario Party 3",
      "Mario Kart: Double Dash!!",
      "Mario Golf: Toadstool Tour"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In what city in the dystopia alternate future of Half-Life 2 do you first start in?",
    correct_answer: "City 17",
    incorrect_answers: ["City 18", "City 6", "City 45"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many zombies need to be killed to get the 'Zombie Genocider' achievement in Dead Rising (2006)?",
    correct_answer: "53,594",
    incorrect_answers: ["53,593", "53,595", "53,596"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the Half-Life series, Gordon Freeman's signature weapon is a:",
    correct_answer: "Crowbar",
    incorrect_answers: ["Sledgehammer", "Fiber Wire", "Katana"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "The 'Day of Defeat' series of games take place during which war?",
    correct_answer: "World War II",
    incorrect_answers: ["World War I", "Vietnam War", "Iraq War"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Overwatch', what is the name of Mercy's 'ultimate ability'?",
    correct_answer: "Valkyrie",
    incorrect_answers: ["Earthshatter", "Rocket Barrage", "Molten Core"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Mirror's Edge Catalyst takes place in the City of...?",
    correct_answer: "Glass",
    incorrect_answers: ["Mirrors", "Purity", "Diamonds"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT the name of a team leader in Pokemon GO?",
    correct_answer: "Leif",
    incorrect_answers: ["Blanche", "Spark", "Candela"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What animal is on Link's pajamas in The Legend of Zelda: The Wind Waker?",
    correct_answer: "Crawfish",
    incorrect_answers: ["Lobster", "Salmon", "Swordfish"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the video game 'Metal Gear Solid', what did Revolver Ocelot consider the greatest handgun ever made?",
    correct_answer: "Colt Single Action Army",
    incorrect_answers: ["Colt Python", "Colt M1892", "Colt 1851 Navy Revolver"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In what year was Hearthstone released?",
    correct_answer: "2014",
    incorrect_answers: ["2011", "2013", "2012"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which survivor in Left 4 Dead sacrificed themself to save the other survivors?",
    correct_answer: "Bill",
    incorrect_answers: ["Louis", "Francis", "Zoey"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the title of the game 'Luigi's Mansion', what is the only letter to not appear with a pair of eyes in it?",
    correct_answer: "s",
    incorrect_answers: ["n", "i", "m"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is not a default game mode in Counter-Strike (2000)?",
    correct_answer: "Arms Race",
    incorrect_answers: ["Hostage Rescue", "Bomb Defusal", "Assassination"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What do the video games No Man's Sky and Mighty No. 9 have in common?",
    correct_answer: "Both were announced in 2013.",
    incorrect_answers: [
      "Both were crowdfunded.",
      "Both were developed by indie studios.",
      "Both were released for the PlayStation 3."
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What level do you have to be to get a service medal on CS:GO?",
    correct_answer: "40",
    incorrect_answers: ["50", "30", "20"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following has Jennifer Taylor NOT voiced?",
    correct_answer: "Sarah Kerrigan",
    incorrect_answers: ["Princess Peach", "Zoey", "Cortana"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Overwatch, how old is Reinhardt Wilhelm?",
    correct_answer: "61",
    incorrect_answers: ["59", "65", "62"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "During development of 'Super Mario World', Yoshi's hard saddle was originally which of these?",
    correct_answer: "A shell",
    incorrect_answers: ["A slide of Gelatin", "A poffin", "A spike"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Halo 2', what is the name of the monitor of Installation 05?",
    correct_answer: "2401 Penitent Tangent",
    incorrect_answers: [
      "343 Guilty Spark",
      "031 Exuberant Witness",
      "252 Biodis Expolsion"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Fallout 4', what is the name of the dog you find at Red Rocket truck stop?",
    correct_answer: "Dogmeat",
    incorrect_answers: ["Sparky", "Quazar", "Chop"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which operation in 'Tom Clancy's Rainbow Six Siege' introduced the 'Skyscraper' map?",
    correct_answer: "Red Crow",
    incorrect_answers: ["Velvet Shell", "Skull Rain", "Dust Line"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What video game engine does the videogame Quake 2 run in?",
    correct_answer: "iD Tech 2",
    incorrect_answers: ["iD Tech 3", "iD Tech 1", "Unreal Engine"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Final Fantasy VI', what is the name of (summoned) Gilgamesh's weakest attack?",
    correct_answer: "Excalipoor",
    incorrect_answers: ["Excalibore", "Excalisnore", "Excalisore"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was the video game 'P.A.M.E.L.A.' released on Steam?",
    correct_answer: "March 9, 2017",
    incorrect_answers: [
      "January 7, 2007",
      "October 23, 1997",
      "February 16, 2015"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of Cream the Rabbit's mom in the 'Sonic the Hedgehog' series?",
    correct_answer: "Vanilla",
    incorrect_answers: ["Peach", "Strawberry", "Mint"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the perk that was introduced in the 'Call Of Duty: Zombies' map, 'Mob Of The Dead'?",
    correct_answer: "Electric Cherry",
    incorrect_answers: ["Quick Revive", "Vulture Aid", "Tombstone"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'Call Of Duty: Zombies' map 'Origins', how many numbered power generators are there?",
    correct_answer: "6",
    incorrect_answers: ["8", "5", "3"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Call Of Duty: Zombies', completing which map's easter egg will reward you with the achievement, 'Time Travel Will Tell'?",
    correct_answer: "Shangri-La",
    incorrect_answers: ["Ascension", "Moon", "Die Rise"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'Call Of Duty: Zombies' map 'Origins', where is 'Stamin-Up' located?",
    correct_answer: "Generator 5",
    incorrect_answers: ["Generator 3", "Generator 4", "Excavation Site"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is not a character in the game, 'Lethal League'?",
    correct_answer: "Rex",
    incorrect_answers: ["Switch", "Candyman", "Sonata"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Call of Duty: Zombies', what group does Doctor Maxis work for?",
    correct_answer: "Group 935",
    incorrect_answers: ["Group Reanimate", "Group Rezurrection", "Division 9"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What former MOBA, created by Waystone Games and published by EA, was shut down in 2014?",
    correct_answer: "Dawngate",
    incorrect_answers: ["Strife", "League of Legends", "Heroes of Newerth"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Call of Duty games was a PS3 launch title?",
    correct_answer: "Call of Duty 3",
    incorrect_answers: [
      "Call of Duty 4: Modern Warfare",
      "Call of Duty: World at War",
      "Call of Duty: Roads to Victory"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "The Khajiit are a race of cat-like creatures from which epic series of role-playing games, set across the land of Tamriel?",
    correct_answer: "The Elder Scrolls",
    incorrect_answers: [
      "Lord of the Rings",
      "The Witcher",
      "Neverwinter Nights"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, Marjory Delaqua is a human detective of which descent?",
    correct_answer: "Canthan",
    incorrect_answers: ["Elonian", "Krytan", "Ascalonian"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the main protagonist in 'Xenoblade Chronicles'?",
    correct_answer: "Shulk",
    incorrect_answers: ["Reyn", "Fiora", "Dunban"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these TrackMania environments was NOT in the original game?",
    correct_answer: "Bay",
    incorrect_answers: ["Desert", "Snow", "Rally"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "The most graphically violent game to precede the creation of the ESRB (Entertainment Software Rating Board) was...",
    correct_answer: "Mortal Kombat",
    incorrect_answers: ["Duke Nukem", "Resident Evil", "Doom"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Kingdom Hearts, how many members does Organization XIII have in total?",
    correct_answer: "14",
    incorrect_answers: ["10", "13", "12"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of the main healing item in Dark Souls?",
    correct_answer: "Estus Flask",
    incorrect_answers: ["Health Potion", "Orange Juice", "Ashen Flask"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the world's first video game console?",
    correct_answer: "Magnavox Odyssey",
    incorrect_answers: [
      "Coleco Telstar",
      "Nintendo Color TV Game",
      "Atari 2600"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following commercial vehicles from Grand Theft Auto IV did NOT reappear in Grand Theft Auto V?",
    correct_answer: "Steed",
    incorrect_answers: ["Mule", "Benson", "Pony"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which one of the following actors did not voice a character in 'Saints Row: The Third'?",
    correct_answer: "Ron Jeremy",
    incorrect_answers: ["Sasha Grey", "Burt Reynolds", "Hulk Hogan"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Where was the Sniper character in Team Fortress 2 born?",
    correct_answer: "New Zealand",
    incorrect_answers: ["South Africa", "Antarctica", "Australia"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who composed the soundtrack for the game VVVVVV?",
    correct_answer: "Magnus Palsson",
    incorrect_answers: ["Terry Cavanagh", "Danny Baranowsky", "Joel Zimmerman"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the 'Worms' series of video games, which of these weapons is affected by wind?",
    correct_answer: "Bazooka",
    incorrect_answers: ["Grenade", "Air Strike", "Mortar"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these 'Worms' games featured 3D gameplay?",
    correct_answer: "Worms 4: Mayhem",
    incorrect_answers: [
      "Worms W.M.D",
      "Worms Reloaded",
      "Worms: Open Warfare 2"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the game Nuclear Throne, what organization chases the player character throughout the game?",
    correct_answer: "The I.D.P.D",
    incorrect_answers: ["The Fishmen", "The Bandits", "The Y.V.G.G"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the machine that fails and essentially dooms mankind in the beginning of the first Half-Life game?",
    correct_answer: "Anti-mass spectrometer",
    incorrect_answers: [
      "Oscillation generator",
      "Dark fusion reactor",
      "Dark fusion resonator"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the first game of the Sly Cooper franchise, what family heirloom did Sly Cooper want to steal back?",
    correct_answer: "Thievius Raccoonus",
    incorrect_answers: [
      "Raccoon Training 101",
      "The Art of Sneak",
      "Raccoonus Teachus"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What two characters from the game Undertale are never in a relationship or not related?",
    correct_answer: "Frisk & Chara",
    incorrect_answers: [
      "Sans & Papyrus",
      "Toriel & Asgore",
      "Alphys & Undyne"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "One of the early prototypes of the Sega Dreamcast controller resembled which of the following?",
    correct_answer: "Television Remote",
    incorrect_answers: ["Tablet", "Hairdryer", "Flip Phone"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What was the original name of Crash Bandicoot?",
    correct_answer: "Willie Wombat",
    incorrect_answers: ["Coco Bandicoot", "Marvelous Mole", "Wally Wombat"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT a playable character race in the video game 'Starbound'?",
    correct_answer: "Fenerox",
    incorrect_answers: ["Floran", "Novakid", "Hylotl"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In vanilla Minecraft, you can make armor out of all BUT which of the following?",
    correct_answer: "Emeralds",
    incorrect_answers: ["Diamonds", "Iron", "Leather"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the leader of Team Instinct in Pokemon Go?",
    correct_answer: "Spark",
    incorrect_answers: ["Candela", "Blanche", "Willow"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the default alias that Princess Garnet goes by in Final Fantasy IX?",
    correct_answer: "Dagger",
    incorrect_answers: ["Dirk", "Garnet", "Quina"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who created the pump 'F.L.U.D.D.' Mario uses in Super Mario Sunshine?",
    correct_answer: "Elvin Gadd",
    incorrect_answers: ["Robert Fludd", "Nirona", "Crygor"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In World of Warcraft lore, which of the following is known as the God of Spiders in the troll's loa beliefs?",
    correct_answer: "Elortha no Shadra",
    incorrect_answers: ["Bwonsamdi", "Hakkar", "Shirvallah"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which character, in the game 'Morenatsu', has the most possible endings to their route, at a total of four different endings?",
    correct_answer: "Shin Kuroi",
    incorrect_answers: ["Kouya Aotsuki", "Soutarou Touno", "Torahiko Ooshima"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the game Danganronpa: Happy Trigger Havoc, the character Aoi Asahina's ultimate ability is what?",
    correct_answer: "Ultimate Swimmer",
    incorrect_answers: [
      "Ultimate Detective",
      "Ultimate Gambler",
      "Ultimate Dancer"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Of the following space shooter games, which came out first?",
    correct_answer: "Space Invaders",
    incorrect_answers: ["Galaxian", "Galaga", "Sinistar"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Super Smash Bros. for Nintendo 3DS and Nintendo Wii U, who was the sixth fighter to be added to the game post-launch?",
    correct_answer: "Corrin",
    incorrect_answers: ["Cloud", "Bayonnetta", "Ryu"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to Overwatch's lore, who was once a member of the Deadlock Gang?",
    correct_answer: "McCree",
    incorrect_answers: ["Roadhog", "Soldier 76", "Junkrat"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which actor provided the voice for the main character's father in Fallout 3?",
    correct_answer: "Liam Neeson",
    incorrect_answers: [
      "Kiefer Sutherland",
      "Brendan Gleeson",
      "Robbie Coltrane"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What minimum level in the Defence skill is needed to equip Dragon Armour in the MMO RuneScape?",
    correct_answer: "60",
    incorrect_answers: ["65", "55", "70"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these operators from 'Tom Clancy's Rainbow Six Siege' has the ability to damage reinforced walls?",
    correct_answer: "Jordan 'Thermite' Trace",
    incorrect_answers: [
      "Eliza 'Ash' Cohen",
      "Seamus 'Sledge' Cowden",
      "Dominic 'Bandit' Brunsmeier"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these games was NOT developed by Markus Persson?",
    correct_answer: "Dwarf Fortress",
    incorrect_answers: ["Minecraft", "Wurm Online", "0x10c"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Zombies mode of 'Call of Duty: Black Ops', what is the 'Pack-A-Punched' version of the 'Galil' called?",
    correct_answer: "Lamentation",
    incorrect_answers: [
      "Galvanized Atomic Lead Insertion Liquidator",
      "Gabig",
      "Predictive Death Wish"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the main protagonist of 'Ace Combat Zero: The Belkan War'?",
    correct_answer: "Cipher",
    incorrect_answers: ["Mobius 1", "Blaze", "Pixy"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which game in the 'Monster Hunter' series introduced the 'Insect Glaive' weapon?",
    correct_answer: "Monster Hunter 4",
    incorrect_answers: [
      "Monster Hunter Freedom",
      "Monster Hunter Stories",
      "Monster Hunter 2"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who voices the character 'Vernon Cherry' in 'Red Dead Redemption'?",
    correct_answer: "Casey Mongillo",
    incorrect_answers: ["Tara Strong", "Troy Baker", "Rob Wiethoff"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'Ace Attorney' series, what is the relationship between Apollo Justice and Trucy Wright?",
    correct_answer: "They're half-siblings",
    incorrect_answers: [
      "They're co-workers",
      "They're friends",
      "They're both attorneys"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the first 'Call Of Duty: Zombies' map to be directed by Jason Blundell?",
    correct_answer: "Mob Of The Dead",
    incorrect_answers: ["Buried", "Origins", "Moon"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the beginning of the game 'Sonic Adventure', what color Chaos Emerald does Tails own?",
    correct_answer: "Purple",
    incorrect_answers: ["Red", "Green", "Blue"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "When was the Valve Corporation founded?",
    correct_answer: "August 24, 1996",
    incorrect_answers: ["December 26, 1994", "March 22, 1997", "March 13, 1997"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the 4th boss in the 1997 video game 'Crash Bandicoot 2: Cortex Strikes Back'?",
    correct_answer: "Dr. N. Gin",
    incorrect_answers: ["Dr. Neo Cortex", "Komodo Brothers", "Tiny Tiger"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Where does 'The Legend of Zelda: Majora's Mask' take place?",
    correct_answer: "Termina",
    incorrect_answers: ["Hyrule", "Gysahl", "Besaid"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which gaming series includes 'The Diabolical Box' and 'The Curious Village'?",
    correct_answer: "Professor Layton",
    incorrect_answers: ["Persona", "Etrian Odyssey", "Sam & Max"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the subtitle for Gran Turismo 3?",
    correct_answer: "A-Spec",
    incorrect_answers: ["Championship", "Drive", "Nitro"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary golden lightning sword with dragons twisting up the blade?",
    correct_answer: "Bolt",
    incorrect_answers: ["Kudzu", "Twilight", "Astralaria"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the hardest possible difficulty in 'Deus Ex: Mankind Divided'?",
    correct_answer: "I Never Asked For This",
    incorrect_answers: ["Nightmare", "Extreme", "Guru"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the Nintendo DS game 'Ghost Trick: Phantom Detective', what is the name of the hitman seen at the start of the game?",
    correct_answer: "Nearsighted Jeego",
    incorrect_answers: ["One Step Ahead Tengo", "Missile", "Cabanela"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these games was the earliest known first-person shooter with a known time of publication?",
    correct_answer: "Spasim",
    incorrect_answers: ["Doom", "Wolfenstein", "Quake"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who is the main character of the game Half-Life: Opposing Force?",
    correct_answer: "Adrian Shephard",
    incorrect_answers: ["Gordon Freeman", "Alyx Vance", "Barney Calhoun"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who made Garry's Mod?",
    correct_answer: "Garry Newman",
    incorrect_answers: ["Randy Newman", "Facepunch Studios", "Gabe Newell"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these video game engines was made by the company Epic Games?",
    correct_answer: "Unreal",
    incorrect_answers: ["Unity", "Game Maker: Studio", "Cry Engine"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the first video game in the Batman 'Arkham' series?",
    correct_answer: "Arkham Asylum",
    incorrect_answers: ["Arkham Knight", "Arkham City", "Arkham Origins"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What snowy mob was added in Minecraft 1.10?",
    correct_answer: "Polar bears",
    incorrect_answers: ["Eskimos", "Penguins", "Walking TNT"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name the location-based augmented reality game developed by Niantic before Pokemon GO?",
    correct_answer: "Ingress",
    incorrect_answers: ["Aggress", "Regress", "Digress"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the virus in 'Metal Gear Solid 1'?",
    correct_answer: "FOXDIE",
    incorrect_answers: ["FOXENGINE", "FOXALIVE", "FOXKILL"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "When was the first 'Half-Life' released?",
    correct_answer: "1998",
    incorrect_answers: ["2004", "1999", "1997"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How long are all the cutscenes from Metal Gear Solid 4 (PS3, 2008) combined?",
    correct_answer: "8 hours",
    incorrect_answers: ["4 hours", "12 hours", "5 hours"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the fastest speed possible in Trackmania 2: Stadium?",
    correct_answer: "1000 km/h",
    incorrect_answers: ["500 km/h", "320 km/h", "100 km/h"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What company created and developed the game 'Overwatch'?",
    correct_answer: "Blizzard Entertainment",
    incorrect_answers: ["Valve", "Hi-Rez Studios", "Gearbox Software"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
    correct_answer: "Goombario",
    incorrect_answers: ["Goombella", "Goombarry", "Goomby"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What year was the game Dishonored released?",
    correct_answer: "2012",
    incorrect_answers: ["2011", "2008", "2013"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What name does the little headcrab in 'Half Life 2' have?",
    correct_answer: "Lamarr",
    incorrect_answers: ["Jumperr", "Drett", "Jerry"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which is not a playable character in the 2005 video game Killer7?",
    correct_answer: "Frank Smith",
    incorrect_answers: ["Mask de Smith", "Dan Smith", "Coyote Smith"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "The starting pistol of the Terrorist team in a competitive match of Counter Strike: Global Offensive is what?",
    correct_answer: "Glock-18",
    incorrect_answers: ["Tec-9", "Desert Eagle", "Dual Berretas"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Destiny, who succeeded Peter Dinklage in voicing the protagonist's 'Ghost'?",
    correct_answer: "Nolan North",
    incorrect_answers: ["John DiMaggio", "Mark Hamill", "Troy Baker"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "What was the world's first handheld game device?",
    correct_answer: "Mattel Auto Race",
    incorrect_answers: ["Game Boy", "Microvision", "Game & Watch"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which game does a character say, 'Sometimes, I dream about cheese'?",
    correct_answer: "Half Life 2",
    incorrect_answers: [
      "Team Fortress 2",
      "Dark Souls",
      "Serious Sam: The Second Encounter"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the original DOOM games, which of the following demons is a recolor of the Baron of Hell, but is weaker than the Baron?",
    correct_answer: "Hell Knight",
    incorrect_answers: ["Mancubus", "Pinky", "Arch-Vile"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In what year was the first 'Mass Effect' game released?",
    correct_answer: "2007",
    incorrect_answers: ["2008", "2009", "2010"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the video game 'League of Legends' which character is known as 'The Sinister Blade'?",
    correct_answer: "Katarina",
    incorrect_answers: ["Shaco", "Akali", "Zed"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "In what year was the game 'Eliminator' released?",
    correct_answer: "1998",
    incorrect_answers: ["2000", "1999", "2001"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the maximum HP in Terraria?",
    correct_answer: "500",
    incorrect_answers: ["400", "1000", "100"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "This weapon in Counter-Strike: Global Offensive does not exist in real life.",
    correct_answer: "M4A4",
    incorrect_answers: ["AWP", "M4A1", "MP9"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Terraria, what does the Wall of Flesh not drop upon defeat?",
    correct_answer: "Picksaw",
    incorrect_answers: ["Pwnhammer", "Breaker Blade", "Laser Rifle"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many trophies are there in 'Super Smash Bros. for Nintendo 3DS'?",
    correct_answer: "685",
    incorrect_answers: ["1360", "716", "1155"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "When was Left 4 Dead 2 released?",
    correct_answer: "November 17, 2009",
    incorrect_answers: ["May 3, 2008", "November 30, 2009", "June 30, 2010"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "'Gimmick!' is a Japanese Famicom game that uses a sound chip expansion in the cartridge. What is it called?",
    correct_answer: "FME-7",
    incorrect_answers: ["VRC7", "VRC6", "MMC5"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What was the original name of 'Minecraft'?",
    correct_answer: "Cave Game",
    incorrect_answers: [
      "Minecraft: Order of the Stone",
      "Dig And Build",
      "Infiniminer"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the main protagonist in Danganronpa 2: Goodbye Despair?",
    correct_answer: "Hajime Hinata",
    incorrect_answers: ["Nagito Komaeda", "Makoto Naegi", "Junko Enoshima"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Pokemon Conquest, which warlord is able to bond with Zekrom and a shiny Rayquazza?",
    correct_answer: "Nobunaga",
    incorrect_answers: ["The Player", "Oichi", "Hideyoshi"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the original DOOM (1993) which of the following is NOT a cheat code?",
    correct_answer: "IDCLIP",
    incorrect_answers: ["IDFA", "IDDQD", "IDSPISPOPD"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Earthbound', how does one enter 'Master Belch's' factory?",
    correct_answer: "Wait 3 Minutes",
    incorrect_answers: [
      "Enter the password 'Fly Honey'",
      "Enter the password 'Master Belch Rules'",
      "Enter the password 'Mr Saturn Drools'"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the common, gun-toting enemies of the 'Oddworld' video game series?",
    correct_answer: "Sligs",
    incorrect_answers: ["Scrabs", "Slogs", "Glukkons"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Super Mario Sunshine', how do you unlock the 'Corona Mountain' level?",
    correct_answer: "By clearing every 7th episode",
    incorrect_answers: [
      "By obtaining 70 Shines",
      "By clearing every episode involving a 'Secret'",
      "By unlocking every nozzle F.L.U.D.D can use"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "When was the video game publisher 'Ubisoft' founded ?",
    correct_answer: "March 1986",
    incorrect_answers: ["April 1990", "June 2001", "August 1956"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'PAYDAY' series, what is the real name of the character known as 'Dallas'?",
    correct_answer: "Nathan Steele",
    incorrect_answers: ["Nate Siemens", "Nick Stamos", "Nolan Stuhlinger"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the boss round featured in the 'Call Of Duty: Zombies' map 'Five'?",
    correct_answer: "The Pentagon Thief",
    incorrect_answers: ["Hellhounds", "Jumping Jacks", "Napalm Zombie"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which artist composed the original soundtrack for 'Watch Dogs 2'?",
    correct_answer: "Hudson Mohawke",
    incorrect_answers: ["Rustie", "Machinedrum", "Flying Lotus"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What was the main currency in Club Penguin?",
    correct_answer: "Coins",
    incorrect_answers: ["Stamps", "Tickets", "Gems"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the main island in PLAYERUNKNOWN'S BATTLEGROUNDS?",
    correct_answer: "Erangel",
    incorrect_answers: ["Marmara", "Severny", "Lastovo"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these characters won the Super Smash Bros. Fighter Ballot in 2015?",
    correct_answer: "Bayonetta",
    incorrect_answers: ["Cloud", "Ryu", "Megaman"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Guild Wars 2, what is the name of the home instance for the Human race?",
    correct_answer: "Salma District",
    incorrect_answers: ["Eastern Commons", "Rurikton", "The Crown Pavilion"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary green longbow covered in flowers?",
    correct_answer: "Kudzu",
    incorrect_answers: ["Quip", "The Dreamer", "Nevermore"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary mace with a disco ball as its head?",
    correct_answer: "The Moot",
    incorrect_answers: ["The Predator", "Quip", "The Dreamer"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which game did 'Sonic The Hedgehog' make his first appearance in?",
    correct_answer: "Rad Mobile",
    incorrect_answers: ["Sonic The Hedgehog", "Super Mario 64", "Mega Man"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which company developed the video game 'Borderlands'?",
    correct_answer: "Gearbox Software",
    incorrect_answers: ["2K Games", "Activision", "Rockstar Games"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which popular First Person Shooter (FPS) franchise, got a Real Time Strategy (RTS) game developed based on its universe?",
    correct_answer: "Halo",
    incorrect_answers: ["Battlefield", "Call of Duty", "Borderlands"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Killing Floor started as a mod for which Unreal Engine 2 game?",
    correct_answer: "Unreal Tournament 2004",
    incorrect_answers: [
      "Deus Ex: Invisible War",
      "Unreal Tournament 3",
      "Postal"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who was the mascot of SEGA mascot before 'Sonic the Hedgehog'?",
    correct_answer: "Alex Kidd",
    incorrect_answers: ["Opa Opa", "NiGHTS", "Ristar"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "What is the name of your team in Star Wars: Republic Commando?",
    correct_answer: "Delta Squad",
    incorrect_answers: ["The Commandos", "Bravo Six", "Vader's Fist"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What engine did the original 'Half-Life' run on?",
    correct_answer: "GoldSrc",
    incorrect_answers: ["Source", "Quake", "Unreal"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What was the name of the cancelled sequel of Team Fortress?",
    correct_answer: "Team Fortress 2: Brotherhood of Arms",
    incorrect_answers: [
      "Team Fortress 2: Desert Mercenaries",
      "Team Fortress 2: Operation Gear Grinder",
      "Team Fortress 2: Return to Classic"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In 'Undertale', how many main endings are there?",
    correct_answer: "3",
    incorrect_answers: ["2", "5", "13"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many times do you fight Gilgamesh in 'Final Fantasy 5'?",
    correct_answer: "6",
    incorrect_answers: ["4", "5", "3"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the original 'Super Mario Bros.', what is the acceleration of Mario if he was in free fall?",
    correct_answer: "9.31 g",
    incorrect_answers: ["11 g", "9.42 g", "4.4 g"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of the Secret Organization in the Hotline Miami series? ",
    correct_answer: "50 Blessings",
    incorrect_answers: [
      "American Blessings",
      "50 Saints",
      "USSR's Blessings"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Grand Theft Auto V, what was Michael De Santa's former surname?",
    correct_answer: "Townley",
    incorrect_answers: ["De Santos", "Watson", "Simpson"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What ingredient is NOT used to craft a cake in Minecraft?",
    correct_answer: "Bread",
    incorrect_answers: ["Wheat", "Milk", "Egg"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which puzzle game was designed by a Russian programmer, featuring Russian buildings and music?",
    correct_answer: "Tetris",
    incorrect_answers: ["Jenga", "Boulder Dash", "Puzzled"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "'Rollercoaster Tycoon' was programmed mostly entirely in...",
    correct_answer: "x86 Assembly",
    incorrect_answers: ["C++", "C", "ALGOL"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Left 4 Dead, what is the name of the Special Infected that is unplayable in Versus mode?",
    correct_answer: "The Witch",
    incorrect_answers: ["The Tank", "The Smoker", "The Spitter"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In World of Warcraft lore, who was first to have the title 'The Ashbringer'?",
    correct_answer: "Alexandros Mograine",
    incorrect_answers: [
      "Tirion Fordring",
      "Arthas Menethil",
      "Uther the Lightbringer"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Before Super Smash Bros. contained Nintendo characters, what was it known as internally?",
    correct_answer: "Dragon King: The Fighting Game",
    incorrect_answers: [
      "Contest of Champions",
      "Smash and Pummel",
      "Fighter of the Ages: Conquest"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In PROTOTYPE 2. who is referred to as 'Tango Primary'?",
    correct_answer: "James Heller",
    incorrect_answers: [
      "Alex Mercer",
      "Dana Mercer",
      "Any Goliaths roaming around"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many times do you fight the Imprisoned in The Legend of Zelda: Skyward Sword?",
    correct_answer: "3",
    incorrect_answers: ["2", "4", "5"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was Chapter 1 of the Source Engine mod 'Underhell' released?",
    correct_answer: "September 1st, 2013",
    incorrect_answers: [
      "March 3rd, 2011",
      "September 12th, 2013",
      "October 2nd, 2012"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Need for Speed: Most Wanted (2005), what was the name of the main antagonist?",
    correct_answer: "Clarence 'Razor' Callahan",
    incorrect_answers: [
      "Hector 'Ming' Domingo",
      "Toru 'Bull' Sato",
      "Karl 'Baron' Smit"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the first game ever released that ran on the Source engine?",
    correct_answer: "Counter-Strike: Source",
    incorrect_answers: ["Half-Life 2", "Garry's Mod", "Team Fortress 2"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which water-type Pokemon starter was introduced in the 4th generation of the series?",
    correct_answer: "Piplup",
    incorrect_answers: ["Totodile", "Oshawott", "Mudkip"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:",
    correct_answer: "Rhyme",
    incorrect_answers: ["Shiki", "Joshua", "Beat"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following Elite Four members from the 6th Generation of Pokemon was a member of Team Flare?",
    correct_answer: "Malva",
    incorrect_answers: ["Siebold", "Wikstrom", "Drasna"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Pokemon series, which type is Sudowoodo, the Imitation Pokemon?",
    correct_answer: "Rock",
    incorrect_answers: ["Grass", "Bug", "Ground"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Phil Fish was the designer of which game?",
    correct_answer: "Fez",
    incorrect_answers: ["Super Meat Boy", "Hotline Miami", "FTL"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The creeper in Minecraft was the result of a bug while implementing which creature?",
    correct_answer: "Pig",
    incorrect_answers: ["Zombie", "Chicken", "Cow"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which 'Fallout: New Vegas' quest is NOT named after a real-life song?",
    correct_answer: "They Went That-a-Way",
    incorrect_answers: [
      "Come Fly With Me",
      "Ain't That a Kick in the Head",
      "Ring-a-Ding Ding"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which one of these was not a member of the Fiendish Five in the game Sly Cooper and the Thievius Raccoonus?",
    correct_answer: "Dimitri Lousteau",
    incorrect_answers: ["Mz. Ruby", "Muggshot", "Clockwerk"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What household item make the characters of 'Steins; Gate' travel through time?",
    correct_answer: "Microwave",
    incorrect_answers: ["Computer", "Refrigerator", "Televison"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "Which variant of the MP5 is depicted in Counter-Strike 1.6?",
    correct_answer: "MP5N",
    incorrect_answers: ["MP5SD", "MP5K", "MP5RAS"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many different notes is the tune, 'Song of Healing', comprised of in 'The Legend of Zelda: Majora's Mask'?",
    correct_answer: "3",
    incorrect_answers: ["4", "1", "6"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game 'Red Dead Redemption', what is the name of John Marston's dog?",
    correct_answer: "Rufus",
    incorrect_answers: ["Rutus", "Finn", "Apollo"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who created the indie adventure game 'Night in the Woods'?",
    correct_answer: "Alec Holowka",
    incorrect_answers: ["Ron Gilbert", "Tim Schafer", "Tommy Refenes"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the first level in 'Call of Duty: World at War'?",
    correct_answer: "Semper Fi",
    incorrect_answers: ["Ring of Steel", "Vendetta", "Eviction"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Call Of Duty: Zombies', which map's opening cutscene shows 'Richtofen' killing another version of himself?",
    correct_answer: "The Giant",
    incorrect_answers: ["Shadows Of Evil", "Der Eisendrache", "Moon"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is not a wonder weapon in 'Call Of Duty: Zombies'?",
    correct_answer: "R115 Resonator",
    incorrect_answers: ["GKZ-45 Mk3", "Ray Gun", "Scavenger"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Call Of Duty: Zombies', which map features the 'Fly Trap' easter egg?",
    correct_answer: "Der Riese",
    incorrect_answers: ["Tranzit", "Call Of The Dead", "Shi No Numa"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Call Of Duty: Zombies', which map introduced the perk 'PhD Flopper'?",
    correct_answer: "Ascension",
    incorrect_answers: ["Moon", "Call Of The Dead", "Die Rise"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is the only fighter in the game 'Super Smash Bros. Melee' capable of dealing damage with their taunt animation?",
    correct_answer: "Luigi",
    incorrect_answers: ["Mr. Game & Watch", "Jigglypuff", "Pichu"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Telltale Games' 'The Walking Dead: Season One' what is the name of Clementine's father?",
    correct_answer: "Ed",
    incorrect_answers: ["Charles", "Lee", "Walter"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Grand Theft Auto: V, what wanted level does the player receive if they enter Zancudo Army Base north of Los Santos?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "1"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?",
    correct_answer: "Donkey Kong",
    incorrect_answers: ["Mario", "Kirby", "Zelda"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Guild Wars 2, what is the name of the home instance for the Norn race?",
    correct_answer: "Hunter's Hearth",
    incorrect_answers: ["Biergarten", "Hero's Compass", "Wolf Lodge"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Guild Wars 2, what is the name of the home instance for the Sylvari race?",
    correct_answer: "Dreamer's Terrace",
    incorrect_answers: [
      "Envoy's Terrace",
      "Maker's Terrace",
      "Tender's Terrace"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these Generation 1 Pokemon did NOT have an evolution in Generation 4?",
    correct_answer: "Jynx",
    incorrect_answers: ["Electabuzz", "Magmar", "Rhydon"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What's the best selling video game to date?",
    correct_answer: "Tetris",
    incorrect_answers: ["Wii Sports", "Minecraft", "Super Mario Bros"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Just Cause 2 was mainly set in what fictional Southeast Asian island country?",
    correct_answer: "Panau",
    incorrect_answers: ["Davao", "Macau", "Palau"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Internet Meme 'All your base are belong to us' is based on the poorly translated English Version of which Video Game?",
    correct_answer: "Zero Wing",
    incorrect_answers: ["F-Zero", "Wing Commander", "Star Wars: X-Wing"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which one of the following titles by Valve is not based on a Community Mod?",
    correct_answer: "Ricochet",
    incorrect_answers: ["Day of Defeat", "Counter-Strike", "Alien Swarm"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who is the protagonist in the game 'The Walking Dead: Season One'?",
    correct_answer: "Lee Everett",
    incorrect_answers: ["Clementine", "Kenny", "Rick Grimes"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "If a '360 no-scope' is one full rotation before shooting, how many rotations would a '1080 no-scope' be?",
    correct_answer: "3",
    incorrect_answers: ["4", "2", "5"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these levels does NOT appear in the console/PC versions of the game 'Sonic Generations'?",
    correct_answer: "Mushroom Hill",
    incorrect_answers: ["City Escape", "Planet Wisp", "Sky Sanctuary"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which video game was recalled for containing a hidden, playable South Park episode?",
    correct_answer: "Tiger Woods 99 PGA Tour",
    incorrect_answers: [
      "Tony Hawk's Pro Skater 3",
      "Sonic Adventure",
      "Madden 99"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Why was the character Trevor Philips discharged from the Air Force?",
    correct_answer: "Mental Health Issues",
    incorrect_answers: ["Injuries", "Disease", "Danger to Others"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "The rights to the 'Rayman' series are owned by which company?",
    correct_answer: "Ubisoft",
    incorrect_answers: ["Nintendo", "EA", "Sony"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game series 'The Legend of Zelda', what was the first 3D game?",
    correct_answer: "Ocarina of Time",
    incorrect_answers: [
      "Majora's Mask",
      "A Link to the Past",
      "The Wind Waker"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Sonic the Hedgehog 3' for the Sega Genesis, what is the color of the second Chaos Emerald you can get from Special Stages?",
    correct_answer: "Orange",
    incorrect_answers: ["Blue", "Green", "Magenta"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the main character of 'Metal Gear Solid 3'?",
    correct_answer: "Naked Snake",
    incorrect_answers: ["Solid Snake", "Liquid Snake", "Venom Snake"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "When was the game 'Portal 2' released?",
    correct_answer: "2011",
    incorrect_answers: ["2014", "2009", "2007"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the main character in the video game VA-11 HALL-A: Cyberpunk Bartender Action?",
    correct_answer: "Jill",
    incorrect_answers: ["Dana", "Alma", "Anna"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the game Dark Souls, what is the name of the region you're in for the majority of the game?",
    correct_answer: "Lordran",
    incorrect_answers: ["Drangleic", "Oolacile", "Catarina"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Team Fortress 2, which class wields a shotgun?",
    correct_answer: "Everyone Listed",
    incorrect_answers: ["Heavy", "Soldier", "Engineer"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the game 'Overwatch,' which quote does the hero 'McCree' NOT say upon using his flashbang ability?",
    correct_answer: "'You done?'",
    incorrect_answers: [
      "'Whoa there.'",
      "'Hold up now.'",
      "'Don't move.'"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which company made the Japanese RPG 'Dragon Quest'?",
    correct_answer: "Square Enix",
    incorrect_answers: ["Capcom", "Konami", "Blizzard"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "The Touhou Project series of games is often associated with which genre?",
    correct_answer: "Shoot 'em up",
    incorrect_answers: ["Strategy", "FPS", "Casual"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What was Frank West's job in 'Dead Rising'?",
    correct_answer: "Photojournalist",
    incorrect_answers: ["Janitor", "Chef", "Taxi Driver"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these is NOT a game under the Worms series?",
    correct_answer: "Major Malfunction",
    incorrect_answers: ["Crazy Golf", "Clan Wars", "Ultimate Mayhem"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Cook, Serve, Delicious!, which food is NOT included in the game?",
    correct_answer: "Pie",
    incorrect_answers: ["Shish Kabob", "Hamburger", "Lasagna"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the homeworld of the Elites from Halo?",
    correct_answer: "Sanghelios",
    incorrect_answers: ["Te", "Doisac", "Eayn"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Hitman: Blood Money, what is the name of the target in the mission 'Death of a Showman'?",
    correct_answer: "Joseph Clarence",
    incorrect_answers: ["The Swing King", "Maynard John", "Manuel Delgado"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many playable characters are there in Super Smash Bros. for Nintendo 3DS and Wii U?",
    correct_answer: "58",
    incorrect_answers: ["48", "51", "55"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What video game genre were the original Warcraft games?",
    correct_answer: "RTS (Real Time Strategy)",
    incorrect_answers: [
      "RPG (Role Playing Game)",
      "TBS (Turn Based Strategy)",
      "MMO (Massively Multiplayer Online)"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Dota 2, what is Earthshaker's real name?",
    correct_answer: "Raigor Stonehoof",
    incorrect_answers: ["Banehallow Ambry", "Carl", "Barathrum"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Without enchantments, which pickaxe in minecraft mines blocks the quickest.",
    correct_answer: "Golden ",
    incorrect_answers: ["Diamond", "Iron", "Obsidian"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What was the #1 selling game on Steam by revenue in 2016?",
    correct_answer: "Sid Meier's Civilization VI",
    incorrect_answers: [
      "Grand Theft Auto V",
      "Counter Strike: Global Offensive",
      "Dark Souls III"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The 'D' in the term 'D-Mail' from the game 'Steins; Gate' is short for what?",
    correct_answer: "DeLorean",
    incorrect_answers: ["Deep", "Demo", "Dev"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the browser game Kantai Collection heavily inspired by?",
    correct_answer: "Second World War",
    incorrect_answers: ["Manga", "World of Warcraft", "An Anime"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the creature that the main character befriends in 'The Last Guardian'?",
    correct_answer: "Trico",
    incorrect_answers: ["Nico", "Wolf", "Andazi"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'Devil May Cry' franchise, which game is chronologically first?",
    correct_answer: "Devil May Cry 3: Dante's Awakening ",
    incorrect_answers: ["Devil May Cry 4", "Devil May Cry", "Devil May Cry 2"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the creator of Touhou project?",
    correct_answer: "Zun",
    incorrect_answers: ["Jun", "Twilight Frontier", "Tasofro"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Call Of Duty: Zombies', what is the name of Samantha Maxis' dog?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Baxter", "Fido", "Henry"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Call Of Duty: Zombies', what does the game traditionally reward you for completing a boss round?",
    correct_answer: "Max Ammo",
    incorrect_answers: ["A Pack-A-Punched gun", "Death Machine", "Monkey Bombs"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Call Of Duty: Zombies', completing which map's main easter egg will reward you with the achievement, 'High Maintenance'?",
    correct_answer: "Die Rise",
    incorrect_answers: ["Mob Of The Dead", "Origins", "Ascension"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Magicka', which two elements are combined to cast the spell, 'Nullify'?",
    correct_answer: "Arcane + Shield",
    incorrect_answers: [
      "Lightning + Shield",
      "Lightning + Life",
      "Arcane + Life"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the 8th installment in the Fire Emblem series?",
    correct_answer: "The Sacred Stones",
    incorrect_answers: ["Blazing Sword", "Awakening", "Path of Radiance"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Team Fortress 2', how much health does a scout have when overhealed?",
    correct_answer: "185",
    incorrect_answers: ["215", "195", "225"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What military rank is the protagonist 'Nomad' in 'Crysis'?",
    correct_answer: "First Lieutenant",
    incorrect_answers: ["Captain", "First Sargent ", "Staff Sargent"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "On which planet does the game Freedom Planet (2014) take place?",
    correct_answer: "Avalice",
    incorrect_answers: ["Freedom", "Galaxytrail", "Shang Mu"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Diablo lore, this lesser evil spawned from one of the seven heads of Tathamet, and was known as the Maiden of Anguish.",
    correct_answer: "Andariel",
    incorrect_answers: ["Valla", "Malthael", "Kashya"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Guild Wars 2, which of these Charr legions is not able to be selected during character creation?",
    correct_answer: "Flame Legion",
    incorrect_answers: ["Ash Legion", "Blood Legion", "Iron Legion"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, which Chinese Zodiac sign is not represented in the Zodiac Weapon Set?",
    correct_answer: "Ox",
    incorrect_answers: ["Rabbit", "Tiger", "Goat"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, Admiral Taidha Covington can be found in which zone?",
    correct_answer: "Bloodtide Coast",
    incorrect_answers: ["Southsun Cove", "Lake Doric", "Gendarran Fields"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary Balthazar-themed torch?",
    correct_answer: "Flames of War",
    incorrect_answers: ["Sunrise", "Incinerator", "The Flameseeker Prophecies"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who created Agent 47 in the game series 'Hitman'?",
    correct_answer: "Dr. Otto Wolfgang Ort-Meyer",
    incorrect_answers: [
      "Professor Hertz Amadeus Schneider",
      "Dr. Josef Mengele",
      "Professor Otto Rothwinkler"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following is NOT a Nintendo game console?",
    correct_answer: "Dreamcast",
    incorrect_answers: ["SNES", "Wii", "Switch"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What's the name of the main protagonist in the 'Legend of Zelda' franchise?",
    correct_answer: "Link",
    incorrect_answers: ["Mario", "Zelda", "Pit"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "When was the first Call of Duty title released?",
    correct_answer: "October 29, 2003",
    incorrect_answers: [
      "December 1, 2003",
      "November 14, 2002",
      "July 18, 2004"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which company did Gabe Newell work at before founding Valve Corporation?",
    correct_answer: "Microsoft",
    incorrect_answers: ["Apple", "Google", "Yahoo"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who of these people was the creator and director of the Katamari Damacy series?",
    correct_answer: "Keita Takahashi",
    incorrect_answers: ["Hideki Kamiya", "Shu Takumi", "Shinji Mikami"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most expensive weapon in Counter-Strike: Global Offensive?",
    correct_answer: "Scar-20/G3SG1",
    incorrect_answers: ["M4A1", "AWP", "R8 Revolver"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the game Half-Life, which enemy is showcased as the final boss?",
    correct_answer: "The Nihilanth",
    incorrect_answers: ["Dr. Wallace Breen", "G-Man", "The Gonarch"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "The original Planetside was released in North America on...",
    correct_answer: "May 20, 2003",
    incorrect_answers: [
      "June 17, 2001",
      "September 29, 2003",
      "January 14, 2005"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these features was added in the 1994 game 'Heretic' that the original 'DOOM' could not add due to limitations?",
    correct_answer: "Looking up and down",
    incorrect_answers: [
      "Increased room sizes",
      "Unlimited weapons",
      "Highly-detailed textures"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Excluding their instructor, how many members of Class VII are there in the game 'Legend of Heroes: Trails of Cold Steel'?",
    correct_answer: "9",
    incorrect_answers: ["6", "10", "3"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which eSports team came first place in The International Dota 2 Championship 2016?",
    correct_answer: "Wings Gaming",
    incorrect_answers: ["Digital Chaos", "Evil Geniuses", "Fnatic"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "What is the main theme song of 'Sonic Adventure 2'?",
    correct_answer: "Live and Learn",
    incorrect_answers: [
      "Open Your Heart",
      "Can You Feel the Sunshine?",
      "His World"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In what year was 'Metal Gear Solid' released in North America?",
    correct_answer: "1998",
    incorrect_answers: ["1987", "2001", "2004"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the title of song on the main menu in Halo?",
    correct_answer: "Halo",
    incorrect_answers: ["Opening Suite", "Shadows", "Suite Autumn"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the protagonist's title given by the demons in DOOM (2016)?",
    correct_answer: "Doom Slayer",
    incorrect_answers: ["Doom Guy", "Doom Marine", "Doom Reaper"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What was the FIRST Valve game to have VR?",
    correct_answer: "The Lab",
    incorrect_answers: ["Dota 2", "Destinations", "Half-Life 2"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who is the founder of Team Fortress 2's fictional company 'Mann Co'?",
    correct_answer: "Zepheniah Mann",
    incorrect_answers: ["Cave Johnson", "Wallace Breem", "Saxton Hale"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which game was the first time Mario was voiced by Charles Martinet?",
    correct_answer: "Mario's Game Gallery",
    incorrect_answers: ["Super Mario 64", "Mario Tennis", "Dr. Mario 64"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In Undertale, what's the prize for answering correctly?",
    correct_answer: "More questions",
    incorrect_answers: ["New car", "Mercy", "Money"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these is NOT a possible drink to be made in the game 'VA-11 HALL-A: Cyberpunk Bartender Action'?",
    correct_answer: "Sour Appletini",
    incorrect_answers: ["Fringe Weaver", "Piano Man", "Bad Touch"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following is NOT a summon in the game 'South Park: The Stick of Truth'?",
    correct_answer: "Towelie",
    incorrect_answers: ["Jesus", "Mr. Hankey", "Mr. Slave"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "In the National Pokedex what number is Porygon-Z?",
    correct_answer: "474",
    incorrect_answers: ["376", "432", "589"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many flagship monsters appear in Monster Hunter Gernerations?",
    correct_answer: "4",
    incorrect_answers: ["5", "8", "3"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Monster Hunter Generations, which of the following monsters are a part of the 'Fated Four'?",
    correct_answer: "Astalos",
    incorrect_answers: ["Gore Magala", "Malfestio", "Arzuros"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Xenoblade Chronicles X, which class has a sniper rifle as it's primary weapon?",
    correct_answer: "Partisan Eagle",
    incorrect_answers: ["Blast Fencer", "Winged Viper", "Bastion Warrior"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In what Anno game did the eco balance an part of the game play?",
    correct_answer: "Anno 2070",
    incorrect_answers: ["Anno 1404", "Anno 2205", "Anno 1701"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Super Mario Bros., who informs Mario that the princess is in another castle?",
    correct_answer: "Toad",
    incorrect_answers: ["Luigi", "Yoshi", "Bowser"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is not the name of a city in the Grand Theft Auto series?",
    correct_answer: "San Andreas",
    incorrect_answers: ["San Fierro", "Las Venturas", "Vice City"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following characters is NOT a female marriage candidate in the game Stardew Valley?",
    correct_answer: "Caroline",
    incorrect_answers: ["Abigail", "Haley", "Leah"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which Elite Four member from the first generation of Pokemon became the champion in the next generation?",
    correct_answer: "Lance",
    incorrect_answers: ["Agatha", "Bruno", "Lorelei"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In what year was the game 'FTL: Faster Than Light' released?",
    correct_answer: "2012",
    incorrect_answers: ["2014", "2013", "2011"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 'Mario & Sonic at the Olympic Games', characters are split into how many types?",
    correct_answer: "4",
    incorrect_answers: ["6", "5", "3"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the world that the MMO 'RuneScape' takes place in?",
    correct_answer: "Gielinor",
    incorrect_answers: ["Glindor", "Azeroth", "Zaros"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In what year was 'Super Mario Sunshine' released?",
    correct_answer: "2002",
    incorrect_answers: ["2003", "2000", "2004"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Aperture Science CEO Cave Johnson is voiced by which American actor?",
    correct_answer: "J.K. Simmons",
    incorrect_answers: [
      "Nolan North",
      "John Patrick Lowrie",
      "Christopher Lloyd"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What game was used to advertise Steam?",
    correct_answer: "Counter-Strike 1.6",
    incorrect_answers: ["Half-Life", "Half-Life 2", "Team Fortress"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'Little Lost Girl' Easter Egg in Call of Duty: Black Ops II, what's the last step required for the achievement?",
    correct_answer: "Raise Hell",
    incorrect_answers: [
      "Freedom",
      "Skewer the Winged Beast",
      "Ascend from Darkness"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Sean Bean voices the character of 'Martin Septim' in which Elder Scrolls game?",
    correct_answer: "The Elder Scrolls IV: Oblivion",
    incorrect_answers: [
      "The Elder Scrolls V: Skyrim",
      "The Elder Scrolls III: Morrowind ",
      "The Elder Scrolls Online"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many unique items does 'Borderlands 2' claim to have?",
    correct_answer: "87 Bazillion ",
    incorrect_answers: ["87 Million", "87 Trillion", "87 Gazillion "]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which 'Call Of Duty: Zombies' map introduced the 'Staffs Of The Ancients'?",
    correct_answer: "Origins",
    incorrect_answers: ["Shangri-La", "Revelations", "Nuketown"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the first boss the player encounters in the 2017 game, 'Little Nightmares'?",
    correct_answer: "The Janitor",
    incorrect_answers: ["The Warden", "The Caretaker", "The Overseer"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What was the release date of 'Grand Theft Auto IV'?",
    correct_answer: "April 29, 2008",
    incorrect_answers: ["May 21, 2009", "June 22, 2010", "July 28, 2008"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many controllers could a Nintendo GameCube have plugged in at one time?",
    correct_answer: "4",
    incorrect_answers: ["8", "6", "2"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In which game did the Konami Code make its first appearance?",
    correct_answer: "Gradius",
    incorrect_answers: ["Contra", "Castlevania", "Dance Dance Revolution"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "In Guild Wars 2, what was Scarlet Briar's original name?",
    correct_answer: "Ceara",
    incorrect_answers: ["Scarlet", "Serimon", "Omadd"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, Taimi is an Asura studying at the College of what?",
    correct_answer: "Synergetics",
    incorrect_answers: ["Dynamics", "Statics", "Golems"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "In Guild Wars 2, what is the name of the Hylek's sun god?",
    correct_answer: "Zintl",
    incorrect_answers: ["Huelec", "Ameyalli", "Cueyatl"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the last name of the primary female protagonist of Final Fantasy VIII?",
    correct_answer: "Heartilly",
    incorrect_answers: ["Loire", "Almasy", "Trepe"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the main villain of the Crash Bandicoot series?",
    correct_answer: "Dr. Neo Cortex",
    incorrect_answers: ["Dr. Evo-Cortex", "Dr. Cortox", "Sir Cartex"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What Pokemon's Base Stat Total does not change when it evolves?",
    correct_answer: "Scyther",
    incorrect_answers: ["Pikachu", "Sneasel", "Larvesta"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'Halo' franchise, in what country is New Mombasa?",
    correct_answer: "Kenya",
    incorrect_answers: ["India", "Turkey", "Slovakia"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who's the voice actor for Thrall in the Warcraft game series?",
    correct_answer: "Chris Metzen",
    incorrect_answers: ["Ben Affleck", "Jason Derulo", "Jim Carrey"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the virus that infected New York in Tom Clancy's The Division?",
    correct_answer: "Dollar Flu",
    incorrect_answers: ["Ebola", "Red Poison", "Smallpox"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Super Mario Bros. Series, what is Yoshi's scientific name?",
    correct_answer: "T. Yoshisaur Munchakoopas",
    incorrect_answers: ["Yoshi", "T. Yoshisotop Munchakoopas", "Yossy"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the villain company in 'Stardew Valley'?",
    correct_answer: "Joja Co ",
    incorrect_answers: ["Ronin", "Empire", "Robotnik Industry's "]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many copies of the notorious E.T. game for the Atari 2600 did Atari end up selling?",
    correct_answer: "1.5 Million",
    incorrect_answers: ["1 Million", "250 Thousand", "Less than 250 Thousand"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Gamecube Version of 'Resident Evil' what text document is open on the monitor of the computer in the Visual Data Room?",
    correct_answer: "A GDC Document",
    incorrect_answers: [
      "Text Document on Herbs",
      "Nothing",
      "Document on B.O.Ws"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is NOT a team available in the game Pokemon Go?",
    correct_answer: "Team Rocket",
    incorrect_answers: ["Team Instinct", "Team Valor", "Team Mystic"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which football player is featured on the international cover version of the video game FIFA 16?",
    correct_answer: "Lionel Messi",
    incorrect_answers: ["Cristiano Ronaldo", "Wayne Rooney", "David Beckham"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is NOT a playable character in the 2016 video game Overwatch?",
    correct_answer: "Invoker",
    incorrect_answers: ["Mercy", "Winston", "Zenyatta"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which CS:GO eSports team won the major event ESL One Cologne 2016?",
    correct_answer: "SK Gaming",
    incorrect_answers: ["Team Liquid", "Fnatic", "Virtus.pro"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Portal 2, how did CEO of Aperture Science, Cave Johnson, presumably die?",
    correct_answer: "Moon Rock Poisoning",
    incorrect_answers: [
      "Accidentally sending a portal to the Moon",
      "Slipped in the shower",
      "Asbestos Poisoning"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Overwatch,' what is the hero McCree's full name?",
    correct_answer: "Jesse McCree",
    incorrect_answers: [
      "Jack 'McCree' Morrison",
      "Gabriel Reyes",
      "Jamison 'Deadeye' Fawkes"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the protagonist of the videogame 'Dead Rising 2'?",
    correct_answer: "Chuck Greene",
    incorrect_answers: ["Nick Ramos", "Frank West", "Katie Greene"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "If you play the Super Mario RPG and nap in a rented hotel room, you will wake up next to what familiar looking character?",
    correct_answer: "Link",
    incorrect_answers: ["Wario", "Q*bert", "Solid Snake"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who created the 2011 Video Game 'Minecraft'?",
    correct_answer: "Markus Persson",
    incorrect_answers: ["Jens Bergensten", "Daniel Rosenfeld", "Carl Manneh"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Capcom's survival horror title Dead Rising, canonically starts on what day of September 2006?",
    correct_answer: "September 19th",
    incorrect_answers: ["September 21st", "September 30th", "September 14th"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the leader of Team Valor in Pokemon Go?",
    correct_answer: "Candela",
    incorrect_answers: ["Willow", "Blanche", "Spark"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "In the Fallout series, on which date did The Great War happen?",
    correct_answer: "October 23rd, 2077",
    incorrect_answers: [
      "May 15th, 2058",
      "December 14th, 2069",
      "November 5th, 2076"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "When was Final Fantasy XV released?",
    correct_answer: "November 29th, 2016",
    incorrect_answers: [
      "October 25th, 2016",
      "December 31th, 2016",
      "November 30th, 2016"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which Sonic the Hedgehog game was originally supposed to be packaged with Sonic 3, but was cut in half due to time constraints?",
    correct_answer: "Sonic & Knuckles",
    incorrect_answers: ["Sonic 2", "Sonic CD", "Sonic 3D Blast"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "Which car did not appear in the 2002 Lego Game: Drome Racers?",
    correct_answer: "Wasp",
    incorrect_answers: ["Raptor", "Hornet", "Behemoth"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these songs does NOT play during the Ruins segments of the 2015 game 'Undertale'?",
    correct_answer: "Another Medium",
    incorrect_answers: ["Anticipation", "Unnecessary Tension", "Ruins"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following is not a faction in Tom Clancy's The Division?",
    correct_answer: "CDC",
    incorrect_answers: ["Cleaners", "Last Man Batallion", "Rikers"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is not a real Pokemon?",
    correct_answer: "Luminid",
    incorrect_answers: ["Dragalge", "Mandibuzz", "Araquanid"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Undertale, how much do Spider Donuts cost in Hotland?",
    correct_answer: "9999G",
    incorrect_answers: ["7G", "40G", "12G"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "On the 6th of June 2006, what was the name of the infamous glitch that occurred in the MMO RuneScape?",
    correct_answer: "The Falador Massacre",
    incorrect_answers: [
      "Noclip glitch",
      "Party-hat Duplication Glitch",
      "TzHaar Massacre"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many voice channels does the Super Nintendo Entertainment System support?",
    correct_answer: "8",
    incorrect_answers: ["6", "10", "12"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which German city does the map 'Clubhouse' in 'Tom Clancy's Rainbow Six Siege' take place in?",
    correct_answer: "Hannover",
    incorrect_answers: ["Berlin", "Hamburg", "Munich"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game 'Brawlhalla', what species is the character Bodvar is?",
    correct_answer: "Half Human / Half Bear",
    incorrect_answers: [
      "A Human",
      "Half Wolf / Half Bear",
      "Half Tiger / Half Human"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which location does Dark Sun Gwyndolin reside in 'Dark Souls'?",
    correct_answer: "Anor Londo",
    incorrect_answers: [
      "Firelink Shrine",
      "Blighttown",
      "Kiln of the first flame"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How much did the indie game 'Cave Story' cost when it was first released in 2004?",
    correct_answer: "$0 USD",
    incorrect_answers: ["$5 USD", "$10 USD", "$15 USD"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Starbound', what is the max HP of the monster 'Punchy'?",
    correct_answer: "50,000 HP",
    incorrect_answers: ["9,000,000 HP", "100 HP", "150,000 HP"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is not a playable race in 'Final Fantasy XIV: A Realm Reborn'?",
    correct_answer: "Hume",
    incorrect_answers: ["Miqo'te", "Lalafell", "Roegadyn"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 'Call Of Duty: Zombies', what is the name of the machine that upgrades weapons?",
    correct_answer: "Pack-A-Punch",
    incorrect_answers: ["Wunderfizz", "Gersch Device", "Mule Kick"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Call Of Duty: Zombies', which weapon does NOT deal any damage?",
    correct_answer: "31-79 JGb215",
    incorrect_answers: ["Sliquifier", "V-R11", "Wunderwaffe DG-2"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In which mall does 'Dead Rising' take place?",
    correct_answer: "Willamette Parkview Mall",
    incorrect_answers: [
      "Liberty Mall",
      "Twin Pines Mall",
      "Central Square Shopping Center"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which character does the player play as in the video game 'Bastion'?",
    correct_answer: "The Kid",
    incorrect_answers: ["Rucks", "Zulf", "Zia"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the protagonist's first Persona in 'Persona 5'?",
    correct_answer: "Arsene",
    incorrect_answers: ["Mara", "Izanagi", "Sandaphlon"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Resident Evil 2', what is Leon Kennedy's middle name?",
    correct_answer: "Scott",
    incorrect_answers: ["Shaun", "Simon", "Sam"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Guild Wars 2, what is the name of the home instance for the Charr race?",
    correct_answer: "Hero's Canton",
    incorrect_answers: [
      "Gladium Canton",
      "Praetor's Canton",
      "Ligacus Notos"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Guild Wars 2, what is Tybalt's last name?",
    correct_answer: "Leftpaw",
    incorrect_answers: ["Wildeye", "Blightaxe", "Blackblood"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the Blademaster in the middle lane of the Dragon's Stand zone?",
    correct_answer: "Diarmid",
    incorrect_answers: ["Adryn", "Hareth", "Gerent"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Tom Clancy's Rainbow 6 Siege, what organization is Valkyrie from?",
    correct_answer: "Navy Seals",
    incorrect_answers: ["S.A.S", "G.I.G.N", "F.B.I"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which pop singer was brought in by SEGA to produce the music for 'Sonic the Hedgehog 3'?",
    correct_answer: "Michael Jackson ",
    incorrect_answers: ["Prince", "George Michael", "Vanilla Ice "]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the 'Hitman' series, what is the name of the main character?",
    correct_answer: "Agent 47",
    incorrect_answers: ["Agent 27", "Agent Smith", "Agent 67"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first game in the 'Battlefield' series?",
    correct_answer: "Battlefield 1942",
    incorrect_answers: ["Battlefield Vietnam", "Battlefield 2", "Battlefield 1"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which Greek letter represents the 'Half-Life' logo?",
    correct_answer: "Lambda",
    incorrect_answers: ["Omega", "Alpha", "Sigma"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is Solid Snake's real name?",
    correct_answer: "David",
    incorrect_answers: ["Solid Snake", "John", "Huey"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many Chaos Emeralds can you collect in the first Sonic The Hedgehog?",
    correct_answer: "Six",
    incorrect_answers: ["Seven", "Five", "Eight"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which character is from 'Splatoon'?",
    correct_answer: "Marie",
    incorrect_answers: ["Cyrus", "Palutena", "Shulk"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who was the first jedi that Starkiller had to kill in Star Wars: The Force Unleashed?",
    correct_answer: "Rahm Kota",
    incorrect_answers: ["Ahsoka Tano", "Kazdan Paratus", "Kento Marek"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the hero in the 80s animated video game 'Dragon's Lair'?",
    correct_answer: "Dirk the Daring",
    incorrect_answers: ["Arthur", "Sir Toby Belch", "Guy of Gisbourne"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is Pikachu's National PokeDex Number?",
    correct_answer: "#025",
    incorrect_answers: ["#001", "#031", "#109"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which country's version of Half-Life are the HECU Marines replaced with robots?",
    correct_answer: "Germany",
    incorrect_answers: ["Japan", "China", "France"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the main ship used by Commander Shepard in the Mass Effect Franchise called?",
    correct_answer: "Normandy",
    incorrect_answers: ["Osiris", "Infinity", "Endeavour"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of the final boss in Turok: Dinosaur Hunter?",
    correct_answer: "The Campaigner",
    incorrect_answers: ["The Primagen", "Oblivion", "Lord Tyrannus"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which order do you need to hit some Deku Scrubs to open the first boss door in 'Ocarina of Time'?",
    correct_answer: "2, 3, 1",
    incorrect_answers: ["1, 2, 3", "1, 3, 2", "2, 1, 3"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "How many classes are there in Team Fortress 2?",
    correct_answer: "9",
    incorrect_answers: ["10", "8", "7"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who voices Max Payne in the 2001 game 'Max Payne'?",
    correct_answer: "James McCaffrey",
    incorrect_answers: ["Sam Lake", "Troy Baker", "Hideo Kojima"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 2002 video game 'Kingdom Hearts', how many playable worlds were there?",
    correct_answer: "14",
    incorrect_answers: ["13", "16", "11"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "Which game was exclusive to Dreamcast?",
    correct_answer: "Pen Pen TriIcelon",
    incorrect_answers: [
      "Sylvester & Tweety in Cagey Capers",
      "Perfect Dark",
      "Tetrisphere"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these Starbound races has a Wild West culture?",
    correct_answer: "Novakid",
    incorrect_answers: ["Avian", "Human", "Hylotl"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is Gabe Newell's favorite class in Team Fortress 2?",
    correct_answer: "Spy",
    incorrect_answers: ["Heavy", "Medic", "Pyro"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What's the Team Fortress 2 Scout's city of origin?",
    correct_answer: "Boston",
    incorrect_answers: ["Sydney", "Detroit", "New York"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?",
    correct_answer: "Casserole",
    incorrect_answers: ["Sub Sandwich", "Chicken Soup", "Pepperoni Pizza"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is the name of a cut enemy from 'Half-Life 2'?",
    correct_answer: "Hydra",
    incorrect_answers: ["Cthulu", "Spike", "Tremor"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "The creator of the Touhou Project series is:",
    correct_answer: "ZUN",
    incorrect_answers: ["SUN", "RUN", "PUN"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How long was the World Record Speed Run of Valve Software's 'Half-Life' that was done in 2014.",
    correct_answer: "20 Minutes, 41 Seconds",
    incorrect_answers: [
      "45 Minutes, 32 Seconds",
      "5 Minutes, 50 Seconds",
      "12 Minutes, 59 Seconds"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the first weapon you acquire in Half-Life?",
    correct_answer: "A crowbar",
    incorrect_answers: ["A pistol", "The H.E.V suit", "Your fists"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In Dota 2, Wraith King was previously known as...",
    correct_answer: "Skeleton King",
    incorrect_answers: ["Reaper King", "Skull King", "Hell King"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Fallout 4, which type of power armor is first encountered in the early mission 'When Freedom Calls' in a crashed Vertibird?",
    correct_answer: "T-45",
    incorrect_answers: ["T-51", "T-60", "X-01"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the leader of Team Mystic in Pokemon Go?",
    correct_answer: "Blanche",
    incorrect_answers: ["Candela", "Spark", "Willow"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the full name of the protagonist from the SNES game Clock Tower?",
    correct_answer: "Jennifer Simpson",
    incorrect_answers: [
      "Jennifer Barrows",
      "Jennifer Cartwright",
      "Jennifer Maxwell"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which horror movie had a sequel in the form of a video game released in August 20, 2002?",
    correct_answer: "The Thing",
    incorrect_answers: ["The Evil Dead", "Saw", "Alien"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the game Battleblock Theater, what was the name of the voice actor who voiced the narrator?",
    correct_answer: "Will Stamper",
    incorrect_answers: ["Steve Blum", "Richard Epcar", "Yuri Lowenthal"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the main character in 'Life is Strange'?",
    correct_answer: "Maxine Caulfield",
    incorrect_answers: ["Victoria Chase", "Stella Hill", "Chloe Price"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which Pokemon generation did the fan-named 'Masuda Method' first appear in? ",
    correct_answer: "Diamond/Pearl",
    incorrect_answers: ["Ruby/Sapphire", "Black/White", "X/Y"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Portal series of games, who was the founder of Aperture Science?",
    correct_answer: "Cave Johnson",
    incorrect_answers: ["GLaDOs", "Wallace Breen", "Gordon Freeman"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game 'Persona 4', what is the canonical name of the protagonist?",
    correct_answer: "Yu Narukami",
    incorrect_answers: ["Chino Mashido", "Tunki Sunada", "Masaki Narinaka"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these characters was NOT planned to be playable for Super Smash Bros. 64?",
    correct_answer: "Peach",
    incorrect_answers: ["Bowser", "Mewtwo", "King Dedede"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What does Solid Snake use to hide himself with?",
    correct_answer: "Cardboard Box",
    incorrect_answers: ["Cloaking Device", "Metal Crate", "Cardboard cut-out"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In Animal Crossing, who is the manager of the town shop?",
    correct_answer: "Tom Nook",
    incorrect_answers: ["Mr. Resetti", "Gracie", "K.K. Slider"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who turns out to be the true victor in the Battle of Armageddon in Mortal Kombat?",
    correct_answer: "Shao Kahn",
    incorrect_answers: ["Liu Kang", "Shang Tsung", "Raiden"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many voice channels does the Nintendo Entertainment System support natively?",
    correct_answer: "5",
    incorrect_answers: ["4", "6", "3"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following names is the 'Mega Man' Franchise known as in Japan?",
    correct_answer: "Rockman",
    incorrect_answers: ["Paperman", "Scissorsman", "Mega Man"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the real name of the Scout in 'Team Fortress 2'?",
    correct_answer: "Jeremy",
    incorrect_answers: ["Lance", "Walter", "John"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many regular Sunken Sea Scrolls are there in 'Splatoon'?",
    correct_answer: "27",
    incorrect_answers: ["32", "30", "5"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which town was Seamus 'Sledge' Cowden from 'Tom Clancy's Rainbow Six Siege' born in?",
    correct_answer: "John O'Groats",
    incorrect_answers: ["Brawl", "Kearvaig", "Talmine"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What was the first weapon pack for 'PAYDAY 2'?",
    correct_answer: "The Gage Weapon Pack #1",
    incorrect_answers: [
      "The Overkill Pack",
      "The Gage Chivalry Pack",
      "The Gage Historical Pack"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Pokemon Conquest, how many kingdoms make up the region of Ransei?",
    correct_answer: "17",
    incorrect_answers: ["18", "15", "16"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'Halo' series, what is the name of the race of aliens humans refer to as 'Grunts'?",
    correct_answer: "Unggoy",
    incorrect_answers: ["Huragok", "Sangheili", "Yanme'e"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 'Ace Attorney' series, who was the truly responsible of the forging of the autopsy report of the pivotal IS-7 incident?",
    correct_answer: "Bansai Ichiyanagi",
    incorrect_answers: [
      "Manfred Von Karma",
      "Gregory Edgeworth",
      "Tateyuki Shigaraki"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What were the first two blocks in 'Minecraft'?",
    correct_answer: "Grass and Cobblestone",
    incorrect_answers: [
      "Grass and Stone",
      "Crafting Table and Cobblestone",
      "Cobblestone and Stone"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the Stavemaster in the north lane of the Dragon's Stand zone?",
    correct_answer: "Adryn",
    incorrect_answers: ["Diarmid", "Hareth", "Gerent"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary shark spear that has a purple glow on it?",
    correct_answer: "Kamohoali'i Kotaki",
    incorrect_answers: ["Kraitkin", "The HMS Divinity", "Frenzy"]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which franchise does the creature 'Slowpoke' originate from?",
    correct_answer: "Pokemon",
    incorrect_answers: ["Dragon Ball", "Sonic The Hedgehog", "Yugioh"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the main character in 'The Stanley Parable'?",
    correct_answer: "Stanley",
    incorrect_answers: ["The Adventure Line", "The Narrator", "The Boss"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the first 'Team Fortress 2' update to include a war?",
    correct_answer: "Sniper vs. Spy Update",
    incorrect_answers: [
      "WAR! Update",
      "Meet Your Match Update",
      "Spy Vs. Engineer Update"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "When was 'Garry's Mod' released?",
    correct_answer: "December 24, 2004",
    incorrect_answers: [
      "November 13, 2004",
      "December 13, 2004",
      "November 12, 2004"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What does IWHBYD stand for on the skull in the Halo series?",
    correct_answer: "I Would Have Been Your Daddy",
    incorrect_answers: [
      "I Wanna Have Babies You Down",
      "I Would Hate Being Your Driver",
      "I Would Have Bought Your Dog"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Terraria, which of the following items does the Martian Saucer mini-boss NOT drop?",
    correct_answer: "Drill Containment Unit",
    incorrect_answers: ["Anti-Gravity Hook", "Influx Waver", "Cosmic Car Key"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what Half-Life expansion can you find Gordon's picture in an 'Employee of the Month' picture frame?",
    correct_answer: "Half-Life: Opposing Force",
    incorrect_answers: [
      "Half-Life: Blue Shift",
      "Half-Life: Decay",
      "They Hunger"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following characters were considered for inclusion in Super Smash Bros. Melee?",
    correct_answer: "Lucas",
    incorrect_answers: ["Mega Man", "Meta Knight", "Diddy Kong"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT a faction included in the game Counter-Strike: Global Offensive?",
    correct_answer: "BOPE",
    incorrect_answers: ["GSG-9", "Elite Crew", "Phoenix Connexion"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Rocket League is a game which features..",
    correct_answer: "Cars",
    incorrect_answers: ["Helicopters", "Planes", "Submarines"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the main antagonist of Max Payne 3 (2012)?",
    correct_answer: "Victor Branco",
    incorrect_answers: ["alvaro Neves", "Armando Becker", "Milo Rego"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is NOT a playable character in 'Left 4 Dead'?",
    correct_answer: "Nick",
    incorrect_answers: ["Louis", "Zoey", "Bill"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What ingredients are required to make a cake in Minecraft?",
    correct_answer: "Milk, Sugar, Egg, and Wheat",
    incorrect_answers: [
      "Milk, Bread, Egg, and Wheat",
      "Milk, Sugar Cane, Egg, and Wheat",
      "Milk, Sugar, and Wheat"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Touhou: Embodiment of Scarlet Devil, what song plays during Flandre Scarlet's boss fight?",
    correct_answer: "U.N. Owen Was Her",
    incorrect_answers: [
      "Septette for the Dead Princess",
      "Flowering Night",
      "Pierrot of the Star-Spangled Banner"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which company did Bethesda purchase the Fallout Series from?",
    correct_answer: "Interplay Entertainment ",
    incorrect_answers: ["Capcom", "Blizzard Entertainment", "Nintendo"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What company develops the Rock Band series of rhythm games?",
    correct_answer: "Harmonix",
    incorrect_answers: ["Activision", "Konami", "Electronic Arts"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Final Fantasy VI was originally released outside Japan under what name?",
    correct_answer: "Final Fantasy III",
    incorrect_answers: [
      "Final Fantasy VI",
      "Final Fantasy V",
      "Final Fantasy II"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In WarioWare: Smooth Moves, which one of these is NOT a Form?",
    correct_answer: "The Hotshot",
    incorrect_answers: ["The Discard", "The Elephant", "The Mohawk"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "How many total monsters appear in Monster Hunter Generations?",
    correct_answer: "105",
    incorrect_answers: ["100", "98", "73"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In TF2 Lore, what are the names of the Heavy's younger sisters?",
    correct_answer: "Yana and Bronislava",
    incorrect_answers: [
      "Gaba and Anna",
      "Yanna and Gaba",
      "Anna and Bronislava"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the first Left 4 Dead, you can play as either of these four characters.",
    correct_answer: "Francis, Bill, Zoey, and Louis",
    incorrect_answers: [
      "Bender, Andrew, Allison, and Brian",
      "Coach, Ellis, Nick, and Rochelle",
      "Harry, Ron, Hermione and Dumbledore"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The voice actor for which Portal 2 character was not a TV or film actor prior to the game?",
    correct_answer: "GLaDOS",
    incorrect_answers: ["Cave Johnson", "Wheatley", "Atlas / P-Body"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "The default playermodel of Garry's Mod is this Half Life 2 character.",
    correct_answer: "Isaac Kleiner",
    incorrect_answers: ["G-Man", "Alyx Vance", "Gordon Freeman"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What CS:GO case contains the Butterfly Knife?",
    correct_answer: "Breakout Case",
    incorrect_answers: ["Shadow Case", "Vanguard Case", "Esports 2014 Case"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What element does the Zinogre use in Monster Hunter?",
    correct_answer: "Thunder",
    incorrect_answers: ["Ice", "Fire", "Water"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following characters from the game 'Overwatch' was revealed to be homosexual in December of 2016?",
    correct_answer: "Tracer",
    incorrect_answers: ["Widowmaker", "Sombra", "Symmetra"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Ellen McLain, the voice of GLaDOS in the Portal game series, is married to the voice actor for which Team Fortress 2 character?",
    correct_answer: "Sniper",
    incorrect_answers: ["Heavy", "Soldier", "Scout"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which franchise was NOT featured in the 2015 video game 'Lego Dimensions'?",
    correct_answer: "Breaking Bad",
    incorrect_answers: ["Portal", "Doctor Who", "Back to the Future"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "The cake depicted in Valve's 'Portal' franchise most closely resembles which real-world type of cake?",
    correct_answer: "Black Forest",
    incorrect_answers: [
      "Devil's Food",
      "Molten Chocolate",
      "German Chocolate"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which game is NOT part of the Science Adventure series by 5pb. and Nitroplus?",
    correct_answer: "Occultic; Nine",
    incorrect_answers: ["Steins; Gate", "Robotics; Notes", "Chaos; Child"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the English voice actor for Sora from the Kingdom Hearts series?",
    correct_answer: "Haley Joel Osment",
    incorrect_answers: ["Kōki Uchiyama", "Jesse McCartney", "Miyu Irino"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In 'Overwatch', which hero is able to wallride?",
    correct_answer: "Lucio",
    incorrect_answers: ["Reinhardt", "Sombra", "Mercy"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'Call Of Duty: Zombies' map 'Moon', there is a secondary called the QED. What does QED stand for?",
    correct_answer: "Quantum Entanglement Device",
    incorrect_answers: [
      "Quad Ectoplasmic Driver",
      "Question Every Dog",
      "Quality Edward Device"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'Call Of Duty: Zombies' map 'Origins', how many steps are there to upgrade a Staff?",
    correct_answer: "4",
    incorrect_answers: ["7", "5", "3"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who developed the 2016 farming RPG 'Stardew Valley'?",
    correct_answer: "Eric Barone",
    incorrect_answers: ["Daisuke Amaya", "Jasper Byrne", "Lucas Pope"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which company developed and published Game Dev Tycoon?",
    correct_answer: "Greenheart Games",
    incorrect_answers: ["Greenland Games", "The Tycoonists", "MomCorp"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What animal is featured in 'Bloons TD Battles'?",
    correct_answer: "Monkeys",
    incorrect_answers: ["Alligators", "Pigeons", "Lizards"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what year was Pokemon Diamond & Pearl released in Japan?",
    correct_answer: "2006",
    incorrect_answers: ["2009", "2007", "2008"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of Joel's daughter in the game, 'The Last of Us'? ",
    correct_answer: "Sarah",
    incorrect_answers: ["Ellie", "Tess", "Marlene"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'Portal' series, who was Cave Johnson's personal assistant?",
    correct_answer: "Caroline",
    incorrect_answers: ["Heather", "Melissa", "Jane"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of Sonic the Hedgehog's original human girlfriend?",
    correct_answer: "Madonna",
    incorrect_answers: ["Celeste", "Sierra", "Nina"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Guild Wars 2, Brooloonu is a small village for which race?",
    correct_answer: "Quaggan",
    incorrect_answers: ["Kodan", "Charr", "Tengu"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1980s, a service called Gameline allowed users to download games to what console?",
    correct_answer: "Atari 2600",
    incorrect_answers: [
      "Sega Genesis",
      "Nintendo Entertainment System",
      "ColecoVision"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which Sonic the Hedgehog game introudced Knuckles the Echidna?",
    correct_answer: "Sonic the Hedgehog 3",
    incorrect_answers: [
      "Sonic the Hedgehog 2",
      "Sonic & Knuckles",
      "Sonic Adventure"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary weapon that is an alicorn-styled bow?",
    correct_answer: "The Dreamer",
    incorrect_answers: ["Kudzu", "The Moot", "Astralaria"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary rainbow fish harpoon gun?",
    correct_answer: "Frenzy",
    incorrect_answers: ["Kamohoali'i Kotaki", "Kraitkin", "The Predator"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary fiery dragon-headed torch?",
    correct_answer: "Rodgort",
    incorrect_answers: ["The Predator", "Incinerator", "Flames of War"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these characters is NOT a boss in Crash Bash?",
    correct_answer: "Ripper Roo",
    incorrect_answers: ["Papu Papu", "Komodo brothers", "Nitros Oxide"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which stage was planned to be a part of 'Sonic the Hedgehog 2', but was scrapped during development?",
    correct_answer: "Genocide City Zone",
    incorrect_answers: [
      "Stardust Speedway Zone",
      "Sky High Zone ",
      "Clockwork Zone"
    ]
  },

  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What name did 'Mario', from 'Super Mario Brothers', originally have?",
    correct_answer: "Ossan",
    incorrect_answers: ["Jumpman", "Mr. Video", "Mario"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "When was the original Star Wars: Battlefront II released?",
    correct_answer: "October 31, 2005",
    incorrect_answers: [
      "December 18, 2004",
      "November 21, 2006",
      "September 9, 2007"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What was the character Kirby originally going to be named?",
    correct_answer: "Popopo",
    incorrect_answers: ["Dedede", "Waddle Dee", "Prince Puff"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the main character of Metal Gear Solid 2?",
    correct_answer: "Raiden",
    incorrect_answers: ["Solidus Snake", "Big Boss", "Venom Snake"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What's the famous line Vaas says in 'Far Cry 3'?",
    correct_answer: "Did I ever tell you the definition of Insanity?",
    incorrect_answers: [
      "Have I failed to entertain you?",
      "You're my b*tch!",
      "Maybe your best course...would be to tread lightly."
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of Team Fortress 2's Heavy Weapons Guy's minigun?",
    correct_answer: "Sasha",
    incorrect_answers: ["Betty", "Anna", "Diana"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is NOT a map included in the game Counter-Strike: Global Offensive?",
    correct_answer: "Oilrig",
    incorrect_answers: ["Assault", "Mirage", "Cache"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these is a type of monster found in Minecraft?",
    correct_answer: "Skeleton",
    incorrect_answers: ["Werewolf", "Vampire", "Minotaur"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Along with Gabe Newell, who co-founded Valve?",
    correct_answer: "Mike Harrington",
    incorrect_answers: ["Robin Walker", "Marc Laidlaw", "Stephen Bahl"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In what engine was Titanfall made in?",
    correct_answer: "Source Engine",
    incorrect_answers: ["Frostbite 3", "Unreal Engine", "Cryengine"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In World of Warcraft Lore, four Old Gods created a giant and powerful creature. What was it called? ",
    correct_answer: "The Ancient One",
    incorrect_answers: ["Anomalous", "Eater of Souls", "The Lich King"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these is NOT a player class in Team Fortress 2?",
    correct_answer: "Healer",
    incorrect_answers: ["Demoman", "Pyro", "Spy"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Blinky, Pinky, Inky and Clyde are characters from which classic video game?",
    correct_answer: "Pac-Man",
    incorrect_answers: ["Gauntlet", "Space Invaders", "Street Fighter"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many Star Spirits do you rescue in the Nintendo 64 video game 'Paper Mario'?",
    correct_answer: "7",
    incorrect_answers: ["5", "10", "12"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is NOT a main playable character in 'Grand Theft Auto V'?",
    correct_answer: "Lamar",
    incorrect_answers: ["Trevor", "Michael", "Franklin"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which student in Yandere Simulator is known for asking irritating and stupid questions?",
    correct_answer: "Midori Gurin",
    incorrect_answers: ["Kokona Hruka", "Oka Ruto", "Pipi Osu"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Forza Motorsport 6, which of these track-exclusive cars was NOT featured in the game, either originally with the game or added as DLC?",
    correct_answer: "Aston Martin Vulcan",
    incorrect_answers: ["Ferrari FXX-K", "McLaren P1 GTR", "Lotus E23"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these weapons is NOT available to the Terrorist team in the game, 'Counter-Strike: Global Offensive'?",
    correct_answer: "SCAR-20",
    incorrect_answers: ["SG 550", "CZ-75", "XM1014"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Sonic the Hedgehog 2' for the Sega Genesis, what do you input in the sound test screen to access the secret level select?",
    correct_answer: "The Lead Programmer's birthday",
    incorrect_answers: [
      "The first release date of 'Sonic the Hedgehog'",
      "The date Sonic Team was founded",
      "The first release date of 'Sonic the Hedgehog 2'"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In most FPS video games such as Counter-Strike, shooting which part of the body does the highest damage?",
    correct_answer: "Head",
    incorrect_answers: ["Arm", "Leg", "Chest"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "When was Minecraft first released to the public?",
    correct_answer: "May 17th, 2009",
    incorrect_answers: [
      "September 17th, 2009",
      "November 18th, 2011",
      "October 7th, 2011"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Call of Duty: United Offensive, what two soldiers share a name of a video game character?",
    correct_answer: "Gordon & Freeman",
    incorrect_answers: [
      "Sam & Fisher",
      "Nathan & Drake",
      "Dig & Dug"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the main protagonist of Dead Space?",
    correct_answer: "Isaac Clarke",
    incorrect_answers: ["Commander Shepard", "Gordon Freeman", "Master Chief"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which musical artist was NOT featured as playable avatars in the game 'DJ Hero'?",
    correct_answer: "Dr. Dre",
    incorrect_answers: ["DJ Shadow", "Daft Punk", "Grandmaster Flash"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What type of genre is the controversial 2015 game 'Hatred'?",
    correct_answer: "Shoot 'Em Up",
    incorrect_answers: ["Point & Click", "MMORPG", "Simulation"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to Toby Fox, what was the method to creating the initial tune for Megalovania?",
    correct_answer: "Singing into a Microphone",
    incorrect_answers: [
      "Playing a Piano",
      "Using a Composer Software",
      "Listened to birds at the park"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these game franchises were made by Namco?",
    correct_answer: "Tekken",
    incorrect_answers: ["Street Fighter", "Mortal Kombat", "Dragon Quest"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who voices the infamous Citadel Station A.I known as S.H.O.D.A.N, in the System Shock games?",
    correct_answer: "Terri Brosius",
    incorrect_answers: ["Jennifer Hale", "Jenn Taylor", "Lori Alan"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "The first version of Blockland came out in which year?",
    correct_answer: "2004",
    incorrect_answers: ["2007", "2008", "2006"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What block in Minecraft has the highest blast resistance?",
    correct_answer: "Barrier",
    incorrect_answers: ["Obsidian", "Bedrock", "Block of Diamond"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the item required to summon the boss Duke Fishron in the game Terraria?",
    correct_answer: "Truffle Worm",
    incorrect_answers: ["Suspicious Looking Fish", "King Grasshopper", "Slug"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'Halo', what is the name of the planet which Installation 04 orbits?",
    correct_answer: "Threshold",
    incorrect_answers: ["Substance", "Sanghelios", "Te"]
  },
  {
    category: "Video Games",
    type: "multiple",
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
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which Kirby game first introduced Copy Abilities?",
    correct_answer: "Kirby's Adventure",
    incorrect_answers: [
      "Kirby Super Star",
      "Kirby's Dream Land 2",
      "Kirby's Dream Land"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Copy Abilities was only featured in 'Kirby & The Amazing Mirror'?",
    correct_answer: "Mini",
    incorrect_answers: ["Magic", "Smash", "Missile"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 'Overwatch', how much health does Roadhog's 'Take a Breather' ability recover?",
    correct_answer: "300",
    incorrect_answers: ["100", "200", "400"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these blocks in 'Minecraft' has the lowest blast resistance?",
    correct_answer: "Sand",
    incorrect_answers: ["End Stone", "Water", "Wood Planks"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which game in the 'Monster Hunter' series introduced the monster 'Gobul'?",
    correct_answer: "Monster Hunter Tri",
    incorrect_answers: [
      "Monster Hunter Freedom Unite",
      "Monster Hunter Frontier",
      "Monster Hunter Generations"
    ]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these stages is not playable in 'Super Smash Bros. for Wii U'?",
    correct_answer: "Fountain of Dreams",
    incorrect_answers: ["Bridge of Eldin", "75m", "Miiverse"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What programming language was used to create the game 'Minecraft'?",
    correct_answer: "Java",
    incorrect_answers: ["HTML 5", "C++", "Python"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 'Call Of Duty: Zombies', what is the name of the Pack-A-Punched Crossbow?",
    correct_answer: "Awful Lawton",
    incorrect_answers: ["Longinus", "V-R11", "Predator"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the main character in the video game 'Just Cause 3'?",
    correct_answer: "Rico Rodriguez",
    incorrect_answers: ["Tom Sheldon", "Marcus Holloway", "Mario Frigo"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which character in the 'Animal Crossing' series uses the phrase 'zip zoom' when talking to the player?",
    correct_answer: "Scoot",
    incorrect_answers: ["Drake", "Bill", "Mallary"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 'The Witness', how many lasers must be activated to get into the mountain area?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "12"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Portal, what color is the Morality Core?",
    correct_answer: "Purple",
    incorrect_answers: ["Red", "Yellow", "Blue"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Left 4 Dead, which campaign has the protagonists going through a subway in order to reach a hospital for evacuation?",
    correct_answer: "No Mercy",
    incorrect_answers: ["Subway Sprint", "Hospital Havoc", "Blood Harvest"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the Axemaster in the south lane of the Dragon's Stand zone?",
    correct_answer: "Hareth",
    incorrect_answers: ["Diarmid", "Adryn", "Gerent"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What are the names of the Ice Climbers in the video game Ice Climber?",
    correct_answer: "Popo and Nana",
    incorrect_answers: ["Popo and Nina", "Papi and Nana", "Papi and Nina"]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In the Halo series, which era of SPARTAN is Master Chief? ",
    correct_answer: "SPARTAN-II",
    incorrect_answers: ["SPARTAN-I", "SPARTAN-III", ""]
  },
  {
    category: "Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 'S.T.A.L.K.E.R.' series, which of these items can't be used to lower the player's accumulated radiation?",
    correct_answer: "Radioprotectant",
    incorrect_answers: ["Anti-rad", "Medkit", "Vodka"]
  },

  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "What is not a wind instrument?",
    correct_answer: "Viola",
    incorrect_answers: ["Oboe", "Trombone", "Duduk"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the best selling artist of all time?",
    correct_answer: "The Beatles",
    incorrect_answers: ["Michael Jackson", "Elton John", "Elvis Presley"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the founder and leader of industrial rock band, 'Nine Inch Nails'?",
    correct_answer: "Trent Reznor",
    incorrect_answers: ["Marilyn Manson", "Robin Finck", "Josh Homme"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the last Aphex Twin album released before his decade-long hiatus?",
    correct_answer: "Drukqs",
    incorrect_answers: ["Windowlicker", "Syro", "Collected Ambient Works 85-92"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who wrote the musical composition, 'Rhapsody In Blue'?",
    correct_answer: "George Gershwin",
    incorrect_answers: ["Irving Berlin", "Duke Ellington", "Johnny Mandel"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who had a 1981 hit with the song 'Japanese Boy'?",
    correct_answer: "Aneka",
    incorrect_answers: ["Toyah", "Sandra", "Madonna"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which song in rapper Kanye West's album 'The Life of Pablo' features Rihanna?",
    correct_answer: "Famous",
    incorrect_answers: ["Wolves", "Ultralight Beam", "Highlights"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which M83 album is the song 'Midnight City' featured in?",
    correct_answer: "Hurry Up, We're Dreaming",
    incorrect_answers: ["Saturdays = Youth", "Before the Dawn Heals Us", "Junk"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which famous rapper is featured in Jack u (Skrillex and Diplo)'s 2015 single called 'Febreze'?",
    correct_answer: "2 Chainz",
    incorrect_answers: ["Kendrick Lamar", "Future", "Fatman Scoop"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these languages was NOT included in the 2016 song 'Don't Mind' by Kent Jones?",
    correct_answer: "Portuguese",
    incorrect_answers: ["Japanese", "French", "Spanish"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Finish these lyrics from the 2016 song 'Panda' by Desiigner: 'I got broads in _______'.",
    correct_answer: "Atlanta",
    incorrect_answers: ["Savannah", "Augusta", "Marietta"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the lead singer of the British pop rock band Coldplay?",
    correct_answer: "Chris Martin",
    incorrect_answers: ["Jonny Buckland", "Guy Berryman", "Will Champion"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is the name of an American psychedelic rock band formed in 2002 by Benjamin Goldwasser and Andrew VanWyngarden?",
    correct_answer: "MGMT",
    incorrect_answers: ["MSTRKRFT", "STRFKR", "SBTRKT"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
    correct_answer: "12",
    incorrect_answers: ["19", "21", "25"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Johnny Cash did a cover of this song written by lead singer of Nine Inch Nails, Trent Reznor.",
    correct_answer: "Hurt",
    incorrect_answers: ["Closer", "A Warm Place", "Big Man with a Gun"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these is the name of a song by Tears for Fears?",
    correct_answer: "Shout",
    incorrect_answers: ["Scream", "Yell", "Shriek"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which band released songs suchs as 'Rio', 'Girls on Film', and 'The Reflex'?",
    correct_answer: "Duran Duran",
    incorrect_answers: ["The Cure", "New Order", "Depeche Mode"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to the American rapper Nelly, what should you do when its hot in here?",
    correct_answer: "Take off all your clothes",
    incorrect_answers: [
      "Take a cool shower",
      "Drink some water",
      "Go skinny dipping"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "The key of sharps does the key of G# minor contain?",
    correct_answer: "5",
    incorrect_answers: ["3", "7", "0"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which one of these rappers is NOT a member of the rap group Wu-Tang Clan?",
    correct_answer: "Dr.Dre",
    incorrect_answers: ["Ol' Dirty Bastard", "GZA", "Method Man"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "The 2016 song 'Starboy' by Canadian singer The Weeknd features which prominent electronic artist?",
    correct_answer: "Daft Punk",
    incorrect_answers: ["deadmau5", "Disclosure", "DJ Shadow"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "From which country did the song 'Gangnam Style' originate from?",
    correct_answer: "South Korea",
    incorrect_answers: ["Japan", "North Korea", "China"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the main character from the music video of 'Shelter' by Porter Robinson and A-1 Studios?",
    correct_answer: "Rin",
    incorrect_answers: ["Rem", "Ren", "Ram"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to a song by Belinda Carlisle, Heaven is a place on what?",
    correct_answer: "Earth",
    incorrect_answers: ["Venus", "Mars", "Uranus"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "What was Radiohead's first album?",
    correct_answer: "Pablo Honey",
    incorrect_answers: ["The Bends", "Kid A", "A Moon Shaped Pool"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What collaborative album was released by Kanye West and Jay-Z in 2011?",
    correct_answer: "Watch the Throne",
    incorrect_answers: [
      "Distant Relatives",
      "What a Time to be Alive",
      "Unfinished Business"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "'Lift Your Spirit' is an album by which artist?",
    correct_answer: "Aloe Blacc",
    incorrect_answers: ["Lena Meyer-Landrut", "Stevie Wonder", "Taylor Swift"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these bands is the oldest?",
    correct_answer: "Pink Floyd",
    incorrect_answers: ["AC/DC", "Metallica", "Red Hot Chili Peppers"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who was featured in the song 'Words' by Feint? ",
    correct_answer: "Laura Brehm",
    incorrect_answers: ["Anna Yvette ", "Danyka Nadeau", "Veela"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the song by Beyonce and Alejandro Fernandez released in 2007?",
    correct_answer: "Amor Gitano",
    incorrect_answers: ["La ultima vez", "Rocket", "Hasta Dondes Estes"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The song 'Caramelldansen' is commonly mistaken as a Japanese song, what language is the song actually sung in?",
    correct_answer: "Swedish",
    incorrect_answers: ["Hungarian", "Finnish", "Chinese"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "'The Singing Cowboy' Gene Autry is credited with the first recording for all but which classic Christmas jingle?",
    correct_answer: "White Christmas",
    incorrect_answers: [
      "Frosty the Snowman",
      "Rudolph the Red-Nosed Reindeer",
      "Here Comes Santa Claus"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these songs is not on the 'untitled' album by Led Zeppelin?",
    correct_answer: "Celebration Day",
    incorrect_answers: ["Stairway to Heaven", "Black Dog", "Rock and Roll"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "The heavy metal band Black Sabbath hail from which English city?",
    correct_answer: "Birmingham",
    incorrect_answers: ["Manchester", "London", "Newcastle-Upon-Tyne"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who is a pioneer of 'Minimal Music' in 1960s?",
    correct_answer: "Steve Reich",
    incorrect_answers: [
      "Wolfgang Amadeus Mozart",
      "Brian Eno",
      "Sigur Ros"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the vocalist and frontman of rock band 'Guns N' Roses'?",
    correct_answer: "Axl Rose",
    incorrect_answers: ["Kurt Cobain", "Slash", "Bono"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which rock band released the album 'The Bends' in March 1995?",
    correct_answer: "Radiohead",
    incorrect_answers: ["Nirvana", "Coldplay", "U2"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which former boy-band star released hit solo single 'Angels' in 1997?",
    correct_answer: "Robbie Williams",
    incorrect_answers: ["Justin Timberlake", "Harry Styles", "Gary Barlow"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the hip hop group Kanye West was a member of in the late 90s?",
    correct_answer: "The Go-Getters",
    incorrect_answers: ["The Jumpers", "The Kickstarters", "The Beat-Busters"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the lead singer and frontman of rock band R.E.M?",
    correct_answer: "Michael Stipe",
    incorrect_answers: ["Chris Martin", "Thom Yorke", "George Michael"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these bands was a featuring artist in Compton rapper Kendrick Lamar's 2017 album, 'DAMN.'?",
    correct_answer: "U2",
    incorrect_answers: ["Radiohead", "Coldplay", "Bon Jovi"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which artist or group did John Lennon consider 'son(s) of the Beatles'?",
    correct_answer: "Jeff Lynne's Electric Light Orchestra",
    incorrect_answers: ["The Rolling Stones", "Pink Floyd", "The Who"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was the 3rd album 'Notes from the Underground' of the band 'Hollywood Undead' released?",
    correct_answer: "2013",
    incorrect_answers: ["2011", "2014", "2009"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which band recorded the album 'Parallel Lines'?",
    correct_answer: "Blondie",
    incorrect_answers: ["Paramore", "Coldplay", "The Police"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the rock band that Nobuo Uematsu formed that played songs from various Final Fantasy games?",
    correct_answer: "The Black Mages",
    incorrect_answers: [
      "The Final Fantasies",
      "The Espers",
      "The Rock Summoners"
    ]
  },

  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the Rossini opera, what was the name of 'The Barber of Seville'?",
    correct_answer: "Figaro",
    incorrect_answers: ["Angelo", "Fernando", "Dave"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which French duo had UK hits in 1998 with the songs 'Sexy Boy', 'Kelly Watch The Stars' & 'All I Need'?",
    correct_answer: "Air",
    incorrect_answers: ["Fire", "Earth", "Water"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which Canadian reggae musician had a 1993 hit with the song 'Informer'?",
    correct_answer: "Snow",
    incorrect_answers: ["Rain", "Hail", "Sleet"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who had a 1983 hit with the song 'Africa'?",
    correct_answer: "Toto",
    incorrect_answers: ["Foreigner", "Steely Dan", "Journey"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the lead singer of Pearl Jam?",
    correct_answer: "Eddie Vedder",
    incorrect_answers: ["Ozzy Osbourne", "Stone Gossard", "Kurt Cobain"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which singer was featured in Jack u (Skrillex & Diplo)'s 2015 song 'Where Are u Now'?",
    correct_answer: "Justin Bieber",
    incorrect_answers: ["Selena Gomez", "Ellie Goulding", "The Weeknd"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which country does the band Rammstein hail from?",
    correct_answer: "Germany",
    incorrect_answers: ["Austria", "Armenia", "Belgium"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who was the original drummer for The Beatles?",
    correct_answer: "Tommy Moore",
    incorrect_answers: ["Ringo Starr", "Stuart Sutcliffe", "Pete Best"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Whose signature guitar technique is called the 'windmill'?",
    correct_answer: "Pete Townshend",
    incorrect_answers: ["Jimmy Page", "Eddie Van Halen", "Jimi Hendrix"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Where does the Mac part of the name Fleetwood Mac come from?",
    correct_answer: "John McVie",
    incorrect_answers: ["Christine McVie", "Mac McAnally", "David Tennant"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to a Beatles song, who kept her face in a jar by the door?",
    correct_answer: "Eleanor Rigby",
    incorrect_answers: ["Loretta Martin", "Molly Jones", "Lady Madonna"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What genre of EDM is the Dutch DJ, musician, and remixer Armin van Buuren most well-known for?",
    correct_answer: "Trance",
    incorrect_answers: ["House", "Drum and Bass", "Dubstep"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which one of these artists appears in the album Deltron 3030?",
    correct_answer: "Dan the Automater",
    incorrect_answers: ["Lamarr Kendrick", "Danger Mouse", "CeeLo Green"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these aliases has NOT been used by electronic musician Aphex Twin?",
    correct_answer: "Burial",
    incorrect_answers: ["Caustic Window", "Bradley Strider", "GAK"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which city did American rap producer DJ Khaled originate from?",
    correct_answer: "Miami",
    incorrect_answers: ["New York", "Detroit", "Atlanta"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Toronto landmark was featured on the cover art of Canadian rapper Drake's 2016 album 'Views'?",
    correct_answer: "CN Tower",
    incorrect_answers: [
      "Allan Gardens",
      "Union Station",
      "Prince of Wales Theatre"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "EDM record label Monstercat is based in which country?",
    correct_answer: "Canada",
    incorrect_answers: ["United States", "Australia", "United Kingdom"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which artist released the 2012 single 'Harlem Shake', which was used in numerous YouTube videos in 2013?",
    correct_answer: "Baauer",
    incorrect_answers: ["RL Grime", "NGHTMRE", "Flosstradamus"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?",
    correct_answer: "Entran;as",
    incorrect_answers: ["Arca", "Sheep", "Xen"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which song by Swedish electronic musician Avicii samples the song 'Something's Got A Hold On Me' by Etta James?",
    correct_answer: "Levels",
    incorrect_answers: ["Fade Into Darkness", "Silhouettes", "Seek Bromance"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who won the 1989 Drum Corps International championships?",
    correct_answer: "Santa Clara Vanguard",
    incorrect_answers: ["Blue Devils", "The Academy", "The Bluecoats"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The 1952 musical composition 4'33', composed by prolific American composer John Cage, is mainly comprised of what sound?",
    correct_answer: "Silence",
    incorrect_answers: ["Farts", "People talking", "Cricket chirps"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which artist collaborated with American DJ Dillon Francis to release the song 2016 'Need You'?",
    correct_answer: "NGHTMRE",
    incorrect_answers: ["LOUDPVCK", "KRNE", "DVBBS"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What animal is featured on the cover of English electronic music group The Prodigy's album, 'The Fat of the Land'?",
    correct_answer: "Crab",
    incorrect_answers: ["Fox", "Elephant", "Tiger"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these songs is not by Tatsuro Yamashita?",
    correct_answer: "Lucky Lady Feel So Good ",
    incorrect_answers: [
      "Merry-Go Round",
      "Let's Dance Baby",
      "Love Talkin'"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "What was Rage Against the Machine's debut album?",
    correct_answer: "Rage Against the Machine",
    incorrect_answers: ["Evil Empire", "Bombtrack", "The Battle Of Los Angeles"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which Beatles album does NOT feature any of the band members on it's cover?",
    correct_answer: "The Beatles (White Album)",
    incorrect_answers: ["Rubber Soul", "Abbey Road", "Magical Mystery Tour"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Kanye West at 2009 VMA's interrupted which celebrity?",
    correct_answer: "Taylor Swift",
    incorrect_answers: ["MF DOOM", "Beyonce", "Beck"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which year was the album 'Floral Shoppe' by Macintosh Plus released?",
    correct_answer: "2011",
    incorrect_answers: ["2014", "2013", "2012"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "What is Brian May's guitar called?",
    correct_answer: "Red Special",
    incorrect_answers: ["Blue Special", "Green Special", "Yellow Special"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who recorded the album called 'Down to the Moon' in 1986?",
    correct_answer: "Andreas Vollenweider",
    incorrect_answers: ["Jean-Michel Jarre", "Bing Crosby", "Enya"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which Nirvana album had a naked baby on the cover?",
    correct_answer: "Nevermind",
    incorrect_answers: ["Bleach", "In Utero", "Incesticide"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Who designed the album cover for True Romance, an album by Estelle?",
    correct_answer: "Rebecca Sugar",
    incorrect_answers: ["Matt Burnett", "Ian Jones Quartey", "Ben Leven"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "When did The Beatles release the LP 'Please Please Me'?",
    correct_answer: "1963",
    incorrect_answers: ["1970", "1960", "1969"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year was Red Hot Chill Pepper's album 'Californication' released?",
    correct_answer: "1999",
    incorrect_answers: ["1997", "2000", "1992"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "'All the Boys' by Panic! At the Disco was released as a bonus track on what album?",
    correct_answer: "Too Weird To Live, Too Rare To Die!",
    incorrect_answers: [
      "A Fever You Can't Sweat Out",
      "Death Of A Bachelor",
      "Vices & Virtues"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the lead singer of Bastille?",
    correct_answer: "Dan Smith",
    incorrect_answers: ["Will Farquarson", "Kyle Simmons", "Chris Wood"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who performed 'I Took A Pill In Ibiza'?",
    correct_answer: "Mike Posner",
    incorrect_answers: ["Avicii", "Robbie Williams", "Harry Styles"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the first Studio Album to be released on the Internet with a 'Pay-What-You-Want' price?",
    correct_answer: "In Rainbows",
    incorrect_answers: [
      "The Help Album",
      "Skrillex and Diplo Present Jack u",
      "Blackstar"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Ellie Goulding's earliest album was named?",
    correct_answer: "Lights",
    incorrect_answers: ["Halcyon", "Bright Lights", "Halcyon Days"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "African-American performer Sammy Davis Jr. was known for losing which part of his body in a car accident?",
    correct_answer: "Left Eye",
    incorrect_answers: ["Right Ear", "Right Middle Finger", "Nose"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these is NOT a song by Pegboard Nerds?",
    correct_answer: "WiFi Tears",
    incorrect_answers: ["Swamp Thing", "Emoji", "BAMF"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Which of Michael Jackson's albums sold the most copies?",
    correct_answer: "Thriller",
    incorrect_answers: ["Dangerous", "Bad", "Off the Wall"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which classical composer wrote the 'Moonlight Sonata'?",
    correct_answer: "Ludvig Van Beethoven",
    incorrect_answers: [
      "Chief Keef",
      "Wolfgang Amadeus Mozart",
      "Johannes Brahms"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which lyric is about Red Hot Chili Peppers frontman Anthony Kiedis?",
    correct_answer: "'A rainy Lithuanian / Is dancing as an Indian'",
    incorrect_answers: [
      "'Fly away on, my zephyr / I feel it more than ever'",
      "'And I liked the dimple in your chin / Your pale blue eyes'",
      "'You used to be so warm and affectionate...but now you're quick to get into your regret'"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Where did the British Boy Band 'Bros' come from?",
    correct_answer: "Camberley",
    incorrect_answers: ["Guildford", "Aldershot", "Bagshot"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Bjork's 'Unison' contains a sample of which Oval song?",
    correct_answer: "Aero Deck",
    incorrect_answers: ["Textuell", "Panorama", "Do While"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which album by American rapper Kanye West contained songs such as 'Love Lockdown', 'Paranoid' and 'Heartless'?",
    correct_answer: "808s & Heartbreak",
    incorrect_answers: ["Late Registration", "The Life of Pablo", "Graduation"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "The band Muse released their first album, Showbiz, in what year?",
    correct_answer: "1999",
    incorrect_answers: ["1998", "2000", "2001"]
  },

  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the song 'The Ultimate Showdown of Ultimate Destiny,' who is the only one to survive the battle?",
    correct_answer: "Mr. Rogers",
    incorrect_answers: ["Batman", "Chuck Norris", "Godzilla"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to their 1974 hit, what were Brownsville Station doing 'In The Boys' Room'?",
    correct_answer: "Smokin'",
    incorrect_answers: ["Hangin'", "Lovin'", "Peein'"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "What was the title of ABBA`s first UK hit single?",
    correct_answer: "Waterloo",
    incorrect_answers: ["Mamma Mia", "Fernando", "Dancing Queen"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which English guitarist has the nickname 'Slowhand'?",
    correct_answer: "Eric Clapton",
    incorrect_answers: ["Mark Knopfler", "Jeff Beck", "Jimmy Page"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "The Red Hot Chili Pepper song 'Give It Away' is from what album?",
    correct_answer: "Blood Sugar Sex Magik",
    incorrect_answers: ["One Hot Minute", "By the Way", "Stadium Arcadium"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The song 'Twin Size Mattress' was written by which band?",
    correct_answer: "The Front Bottoms",
    incorrect_answers: [
      "Twenty One Pilots",
      "The Wonder Years",
      "The Smith Street Band"
    ]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the primary lyricist for Canadian progressive rock band Rush?",
    correct_answer: "Neil Peart",
    incorrect_answers: ["Geddy Lee", "Alex Lifeson", "John Rutsey"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the lead singer of the band Coldplay?",
    correct_answer: "Chris Martin",
    incorrect_answers: ["Chris Isaak", "Chris Wallace", "Chris Connelly"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "How many members are there in the band Nirvana?",
    correct_answer: "Three",
    incorrect_answers: ["Two", "Four", "Five"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which popular rock band has a one-armed drummer?",
    correct_answer: "Def Leppard",
    incorrect_answers: ["The Beatles", "Lynyrd Skynyrd", "Foreigner"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which singer was featured in Swedish producer Avicii's song 'Wake Me Up'?",
    correct_answer: "Aloe Blacc",
    incorrect_answers: ["John Legend", "CeeLo Green", "Pharrell Williams"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Irish musician Hozier released a music track in 2013 titled, 'Take Me to ______'",
    correct_answer: "Church",
    incorrect_answers: ["Mosque", "Synagogue", "Temple"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the album released in 2014 by American band Maroon 5?",
    correct_answer: "V",
    incorrect_answers: ["X", "III", "IV"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which song is not by TheFatRat?",
    correct_answer: "Ascent",
    incorrect_answers: ["Monody", "Windfall", "Infinite Power!"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "In 2015, David Hasselhof released a single called...",
    correct_answer: "True Survivor",
    incorrect_answers: ["True Fighter", "Real Kung-Fury", "Real Warrior"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the name of singer Frank Ocean's second studio album, which was released on August 20, 2016?",
    correct_answer: "Blonde",
    incorrect_answers: ["Brunette", "Black", "Burgundy"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT a song on The Beatles' 1968 self titled album, also known as the White album?",
    correct_answer: "Being For The Benefit Of Mr. Kite!",
    incorrect_answers: [
      "Why Don't We Do It in the Road?",
      "Everybody's Got Something to Hide Except Me and My Monkey",
      "The Continuing Story of Bungalow Bill"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these artists has NOT been a member of dancehall group Major Lazer?",
    correct_answer: "Skrillex",
    incorrect_answers: ["Diplo", "Jillionaire", "Walshy Fire"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT the name of an album released by Miami-based producer DJ Khaled?",
    correct_answer: "Don't Ever Play Yourself",
    incorrect_answers: [
      "Major Key",
      "Suffering From Success",
      "I Changed A Lot"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "What is the British term for a 64th note?",
    correct_answer: "Hemidemisemiquaver",
    incorrect_answers: [
      "Semihemidemisemiquaver",
      "Semiquaver",
      "Demisemiquaver"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is NOT a real song from the band Thousand Foot Krutch?",
    correct_answer: "Limitless Fury",
    incorrect_answers: ["Let The Sparks Fly", "Down", "Give Up The Ghost"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the English title of the vaporwave track 'リサフランク420 / 現代のコンピュー' by Macintosh Plus (Vektroid)?",
    correct_answer: "Lisa Frank 420 / Modern Computing",
    incorrect_answers: [
      "Smoke Weed 420 / Everyday",
      "Make Your Move 420 / My Mind",
      "It's All In Your Head 420 / Understand"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "May 16th of every year is known as __________ Day, named after a punk band prominent in the 1990s.",
    correct_answer: "Lagwagon",
    incorrect_answers: ["Goldfinger", "Less Than Jake", "Lit"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these songs by artist Eminem contain the lyric 'Nice to meet you. Hi, my name is... I forgot my name!'?",
    correct_answer: "Rain Man",
    incorrect_answers: ["Without Me", "Kim", "Square Dance"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these bands are NOT from Australia?",
    correct_answer: "The Naked and Famous",
    incorrect_answers: ["Cut Copy", "Empire of the Sun", "Tame Impala"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT a name of an album released by American rapper Pitbull?",
    correct_answer: "Welcome to Miami",
    incorrect_answers: ["Dale", "Global Warming", "Armando"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which famous 90's rap album is commonly referred to as 'The Bible of Hip Hop'?",
    correct_answer: "Illmatic",
    incorrect_answers: [
      "The Low End Theory",
      "The Chronic",
      "Enter The Wu-Tang (36 Chambers)"
    ]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which 80s band is fronted by singer/guitarist Robert Smith?",
    correct_answer: "The Cure",
    incorrect_answers: ["The Smiths", "Echo & the Bunnymen", "New Order"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which country does the electronic music duo 'The Knife' originate from?",
    correct_answer: "Sweden",
    incorrect_answers: ["Finland", "Denmark", "Norway"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which song in Drake's 'Views' features Future?",
    correct_answer: "Grammys",
    incorrect_answers: ["Too Good", "Faithful", "Pop Style"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Kanye West's 'Gold Digger' featured which Oscar-winning actor?",
    correct_answer: "Jamie Foxx",
    incorrect_answers: ["Alec Baldwin", "Dwayne Johnson", "Bruce Willis"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "'Drink the Sea' is an album by which electronic music artist?",
    correct_answer: "The Glitch Mob",
    incorrect_answers: ["Avicii", "XXYYXX", "Flux Pavilion"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what film was the Michael Jackson song 'Will You Be There' featured?",
    correct_answer: "Free Willy",
    incorrect_answers: ["Sleepless in Seattle", "Men in Black", "Bad Boys"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the first track on Kanye West's 808s & Heartbreak?",
    correct_answer: "Say You Will",
    incorrect_answers: ["Welcome to Heartbreak", "Street Lights", "Heartless"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the lead singer of The Lumineers?",
    correct_answer: "Wesley Schultz",
    incorrect_answers: ["Jeremiah Fraites", "Jay Van Dyke", "Neyla Pekarek"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following bands is Tom DeLonge not a part of?",
    correct_answer: "+44",
    incorrect_answers: ["Box Car Racer", "Blink-182", "Angels & Airwaves"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many copies have Metallica album 'Metallica' (A.K.A The Black Album) sold worldwide (in Millions of Copies)?",
    correct_answer: "20.5",
    incorrect_answers: ["19.5", "22.5", "25.5"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "When did Tame Impala release their second album?",
    correct_answer: "2012",
    incorrect_answers: ["2015", "2010", "1967"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which member of 'The Beatles' narrated episodes of 'Thomas the Tank Engine'?",
    correct_answer: "Ringo Starr",
    incorrect_answers: ["George Harrison", "John Lennon", "Paul McCartney"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "What was David Bowie's real surname?",
    correct_answer: "Jones",
    incorrect_answers: ["Johnson", "Edwards", "Carter"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Moby, an American DJ, singer, and musician, achieved worldwide success for the 1999 release of which of the following albums?",
    correct_answer: "Play",
    incorrect_answers: ["Everything Is Wrong", "Moby", "18"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the stage name of New Zealand singer Phillipa 'Pip' Brown?",
    correct_answer: "Ladyhawke",
    incorrect_answers: ["Lorde", "Kesha", "Anika Moa"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The Who's eponymous line, 'Teenage Wasteland', appears in which of their songs?",
    correct_answer: "Baba O' Riley",
    incorrect_answers: [
      "The Seeker",
      "Won't Get Fooled Again",
      "Pinball Wizard"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is not a single by Pink Floyd guitarist, David Gilmour?",
    correct_answer: "Sunset Strip",
    incorrect_answers: ["Rattle That Lock", "Blue Light", "Arnold Layne"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "From which album is the Gorillaz song, 'On Melancholy Hill' featured in?",
    correct_answer: "Plastic Beach",
    incorrect_answers: ["Demon Days", "Humanz", "The Fall"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Iron Maiden album did the song 'Dream of Mirrors' feature in?",
    correct_answer: "Brave New World",
    incorrect_answers: [
      "Dance of Death",
      "A Matter of Life and Death",
      "Somewhere in Time"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these songs is NOT in The Beatles' album 'Sgt. Pepper's Lonely Hearts Club Band'?",
    correct_answer: "Strawberry Fields Forever",
    incorrect_answers: [
      "Getting Better",
      "Fixing a Hole",
      "Lucy in the Sky with Diamonds"
    ]
  },

  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who had hits in the 70s with the songs 'Lonely Boy' and 'Never Let Her Slip Away'?",
    correct_answer: "Andrew Gold",
    incorrect_answers: ["Elton John", "Leo Sayer", "Barry White "]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the artist of the recent new album the Uncanny Valley?",
    correct_answer: "Perturbator",
    incorrect_answers: ["Carpenter Brut", "GOST", "Dan Terminus "]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which band had hits in 1972 with the songs 'Baby I'm A Want You', 'Everything I Own' and 'The Guitar Man'",
    correct_answer: "Bread",
    incorrect_answers: ["America", "Chicago", "Smokie"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who wrote the Sinead O`Connor hit 'Nothing Compares 2 U'?",
    correct_answer: "Prince",
    incorrect_answers: ["Michael Jackson", "Cameo", "Rick James"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who had a 1969 top 5 hit with the song, 'A Boy Named Sue'?",
    correct_answer: "Johnny Cash",
    incorrect_answers: ["Bob Dylan", "Willie Nelson", "Kris Kristofferson"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "'Some people call me the space cowboy' is the first line from what song?",
    correct_answer: "The Joker",
    incorrect_answers: [
      "Fandango",
      "Take The Money and Run",
      "Fly Like an Eagle"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who had a 1976 hit with the song 'You Make Me Feel Like Dancing'?",
    correct_answer: "Leo Sayer",
    incorrect_answers: ["Elton John", "Billy Joel", "Andy Gibb"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Ringo Starr of The Beatles mainly played what instrument?",
    correct_answer: "Drums",
    incorrect_answers: ["Bass", "Guitar", "Piano"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the frontman of the band 30 Seconds to Mars?",
    correct_answer: "Jared Leto",
    incorrect_answers: ["Gerard Way", "Matthew Bellamy", "Mike Shinoda"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Saul Hudson (Slash) of the band Guns N' Roses is known for playing what type of guitar?",
    correct_answer: "Les Paul Standard",
    incorrect_answers: ["Fender Stratocaster", "LsL Mongrel", "Gretsch Falcon"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which country is singer Kyary Pamyu Pamyu from?",
    correct_answer: "Japan",
    incorrect_answers: ["South Korea", "China", "Vietnam"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which band released songs such as 'Electric Feel', 'Kids', and 'Time to Pretend'?",
    correct_answer: "MGMT",
    incorrect_answers: ["Passion Pit", "Phoenix", "Franz Ferdinand"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who was not in the band 'The Smiths'?",
    correct_answer: "Martin Chambers",
    incorrect_answers: ["Morrissey", "Andy Rourke", "Mike Joyce"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of Finnish DJ Darude's hit single released in October 1999?",
    correct_answer: "Sandstorm",
    incorrect_answers: ["Dust Devil", "Sirocco", "Khamsin"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "EDM producer Marshmello performs live wearing clothes and a marshmallow mask of what colour?",
    correct_answer: "White",
    incorrect_answers: ["Black", "Blue", "Yellow"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Queen song was covered by Brittany Murphy in the 2006 film 'Happy Feet'?",
    correct_answer: "Somebody to Love",
    incorrect_answers: ["Under Pressure", "Flash", "Bohemian Rhapsody"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which Twitch streamer is the vocalist for Red Vox?",
    correct_answer: "Vinesauce",
    incorrect_answers: ["The8BitDrummer", "LIRIK", "Sodapoppin"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the lead singer of Silverchair?",
    correct_answer: "Daniel Johns",
    incorrect_answers: ["Ben Gillies", "Chris Joannou", ""]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which brass instrument has the lowest pitch in an orchestra?",
    correct_answer: "Tuba",
    incorrect_answers: ["Trumpet", "Saxophone", "Trombone"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the subject of the 2014 song 'CoCo' by American rapper O. T. Genasis?",
    correct_answer: "Cocaine",
    incorrect_answers: [
      "Conan O'Brien",
      "Cobalt(II) carbonate",
      "Coconut cream pie"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which one of these Rammstein songs has two official music videos?",
    correct_answer: "Du Riechst So Gut",
    incorrect_answers: ["Du Hast", "Benzin", "Mein Teil"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What year was Huun Huur Tu's album Altai Sayan Tandy-Uula released? ",
    correct_answer: "2004",
    incorrect_answers: ["1993", "2006", "2010"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Mean Girls, who has breasts that tell when it's raining?",
    correct_answer: "Karen Smith",
    incorrect_answers: ["Gretchen Weiners", "Janice Ian", "Cady Heron"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which country does the power metal band 'Sabaton' originate from?",
    correct_answer: "Sweden",
    incorrect_answers: ["Germany", "United States", "Finland"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the 2016 studio album by the French electronic music duo Justice?",
    correct_answer: "Woman",
    incorrect_answers: ["Randy", "Safe and Sound", "Pleasure"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the title of Sakamoto Kyu's song 'Ue o Muite Arukou' (I Look Up As I Walk) changed to in the United States?",
    correct_answer: "Sukiyaki",
    incorrect_answers: ["Takoyaki", "Sushi", "Oden"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which one of these songs did the group 'Men At Work' NOT make?",
    correct_answer: "Safety Dance",
    incorrect_answers: [
      "Down Under",
      "Who Can It Be Now?",
      "It's a Mistake"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Sting, the lead vocalist of The Police, primarily plays what instrument?",
    correct_answer: "Bass Guitar",
    incorrect_answers: ["Drums", "Guitar", "Keyboards"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the frontman of Muse?",
    correct_answer: "Matt Bellamy",
    incorrect_answers: ["Dominic Howard", "Thom Yorke", "Jonny Greenwood"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Kendrick Lamar's 2012 album, 'Good Kid, M.A.A.D City', the album's story takes place in which city?",
    correct_answer: "Compton",
    incorrect_answers: ["Detroit", "New York", "Baltimore"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What musician made the song 'Fuckin` Perfect' in 2010?",
    correct_answer: "P!nk",
    incorrect_answers: ["Mitis", "Adam lambert", "Koven"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which Disney character sings the song 'A Dream is a Wish Your Heart Makes'?",
    correct_answer: "Cinderella",
    incorrect_answers: ["Belle", "Snow White", "Pocahontas"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "What is the last song on the first Panic! At the Disco album?",
    correct_answer: "Build God, Then We'll Talk",
    incorrect_answers: [
      "Nails for Breakfast, Tacks for Snacks",
      "I Write Sins Not Tragedies",
      "Lying Is The Most Fun A Girl Can Have Without Taking Her Clothes Off"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 2006, which band released their debut album 'A Fever You Can't Sweat Out'?",
    correct_answer: "Panic! At the Disco",
    incorrect_answers: [
      "Twenty One Pilots",
      "My Chemical Romance",
      "Fall Out Boy"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "What was Daft Punk's first studio album?",
    correct_answer: "Homework",
    incorrect_answers: [
      "Discovery",
      "Random Access Memories",
      "Human After All"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "What was the best selling album of 2015?",
    correct_answer: "Adele, 25",
    incorrect_answers: [
      "Fetty Wap, Fetty Wap",
      "Taylor Swift, 1989",
      "Justin Bieber, Purpose"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which song on Daft Punk's 'Random Access Memories' features Pharrell Williams?",
    correct_answer: "Get Lucky",
    incorrect_answers: [
      "Doin' It Right",
      "Instant Crush",
      "The Game of Love"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who wrote the song 'You Know You Like It'?",
    correct_answer: "AlunaGeorge",
    incorrect_answers: ["DJ Snake", "Steve Aoki", "Major Lazer"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "How many members are in the Japanese rock band SCANDAL?",
    correct_answer: "4",
    incorrect_answers: ["5", "2", "18"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "When was Gangnam Style uploaded to YouTube?",
    correct_answer: "2012",
    incorrect_answers: ["2013", "2014", "2011"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which rapper had an album that went double platinum with no features?",
    correct_answer: "J. Cole",
    incorrect_answers: ["Kendrick Lamar", "Drake", "Big Sean"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Pete Townshend collaborated with which famous guitarist for an event at Brixton Academy in 1985?",
    correct_answer: "David Gilmour",
    incorrect_answers: ["Jimmy Page", "Mark Knopfler", "Eric Clapton"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the cold-war singer who has a song in Grand Theft Auto IV, and a wall landmark in Moscow for his memorial?",
    correct_answer: "Viktor Tsoi",
    incorrect_answers: ["Jimi Hendrix", "Brian Jones", "Vladimir Vysotsky"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which year was the Megadeth album 'Peace Sells... but Who's Buying?' released?",
    correct_answer: "1986",
    incorrect_answers: ["1979", "1987", "1986"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "From which country does the piano originate?",
    correct_answer: "Italy",
    incorrect_answers: ["Germany", "Austria", "France"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who performed the guitar solo on Michael Jackson's hit 'Beat It'?",
    correct_answer: "Eddie Van Halen",
    incorrect_answers: ["Steve Vai", "Kirk Hammett", "Zakk Wylde"]
  },

  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What French artist/band is known for playing on the midi instrument 'Launchpad'?",
    correct_answer: "Madeon",
    incorrect_answers: ["Daft Punk ", "Disclosure", "David Guetta"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who had a 1973 hit with the song 'Hocus Pocus'?",
    correct_answer: "Focus",
    incorrect_answers: ["Pilot", "Rush", "AC/DC"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "On which Beatles album would you find the song 'Eleanor Rigby'?",
    correct_answer: "Revolver",
    incorrect_answers: ["Help!", "Rubber Soul", "Abbey Road"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which band had hits in 1975 with the songs, 'One Of These Nights' & 'Lyin Eyes'?",
    correct_answer: "The Eagles",
    incorrect_answers: ["Fools Gold", "The Doobie Brothers", "Fleetwood Mac"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which American family band had a 1986 top 10 hit with the song 'Crush On You'?",
    correct_answer: "The Jets",
    incorrect_answers: ["DeBarge", "The Jacksons", "The Cover Girls"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who had a US and UK number 1 hit in 1962 with the instrumental, 'Telstar'?",
    correct_answer: "The Tornados",
    incorrect_answers: ["The Ventures", "The Spotnicks", "The Tremeloes"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Elton John hit starts with the line 'When are you gonna come down'?",
    correct_answer: "Goodbye Yellow Brick Road",
    incorrect_answers: ["Rocket Man", "Bennie and the Jets", "Crocodile Rock"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Who recorded the1975 album 'Captain Fantastic and the Brown Dirt Cowboy'?",
    correct_answer: "Elton John",
    incorrect_answers: ["John Denver", "Billy Joel", "Joe Cocker"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these is NOT an album released by The Beatles?",
    correct_answer: "The Wall",
    incorrect_answers: ["Abbey Road", "Magical Mystery Tour", "Revolver"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which rap group released the album 'Straight Outta Compton'?",
    correct_answer: "N.W.A",
    incorrect_answers: ["Wu-Tang Clan", "Run-D.M.C.", "Beastie Boys"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these songs was released in 1996?",
    correct_answer: "The Smashing Pumpkins - '1979'",
    incorrect_answers: [
      "Prince - '1999'",
      "James Blunt - '1973'",
      "David Bowie - '1984'"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the Pink Floyd song 'Shine On You Crazy Diamond' written about?",
    correct_answer: "Syd Barrett",
    incorrect_answers: ["John Lennon", "David Gilmour", "Floyd"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which member of the Foo Fighters was previously the drummer for Nirvana?",
    correct_answer: "Dave Grohl",
    incorrect_answers: ["Taylor Hawkins", "Nate Mendel", "Chris Shiflett"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Beatle led the way across the zebra crossing on the Abbey Road album cover?",
    correct_answer: "John",
    incorrect_answers: ["Paul", "George", "Ringo"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which member of the English band 'The xx' released their solo album 'In Colour' in 2015?",
    correct_answer: "Jamie xx",
    incorrect_answers: ["Romy Madley Croft", "Oliver Sim", "Baria Qureshi"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many members are there in the idol group 'µ's'?",
    correct_answer: "9",
    incorrect_answers: ["48", "6", "3"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these artists was NOT a member of the electronic music supergroup Swedish House Mafia, which split up in 2013?",
    correct_answer: "Alesso",
    incorrect_answers: ["Steve Angello", "Sebastian Ingrosso", "Axwell"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Madonna's song 'Hung Up' includes a piece from which popular 70s song?",
    correct_answer: "Gimmie! Gimmie! Gimme! (A Man After Midnight)",
    incorrect_answers: ["Staying Alive", "Night Fever", "The Chain"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these artists did NOT remix the song 'Faded' by Alan Walker?",
    correct_answer: "Skrillex",
    incorrect_answers: ["Tiesto", "Slushii", "Dash Berlin"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which band is the longest active band in the world with no breaks or line-up changes?",
    correct_answer: "U2",
    incorrect_answers: ["Radiohead", "Rush", "Rolling Stones"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "Brian May was the guitarist for which band?",
    correct_answer: "Queen",
    incorrect_answers: ["Pink Floyd", "Rolling Stones", "The Doors"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the stage name of English female rapper Mathangi Arulpragasam, who is known for the song 'Paper Planes'?",
    correct_answer: "M.I.A.",
    incorrect_answers: ["K.I.A.", "C.I.A.", "A.I.A."]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "The 'K' in 'K-Pop' stands for which word?",
    correct_answer: "Korean",
    incorrect_answers: ["Kenyan", "Kazakhstan", "Kuwaiti"]
  },
  {
    category: "Music",
    type: "multiple",
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
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "In an orchestra, what is the lowest member of the brass family?",
    correct_answer: "Tuba",
    incorrect_answers: ["Trombone", "Contrabass", "Bassoon"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "This album, now considered to be one of the greatest of all time, was a commercial failure when it was released.",
    correct_answer: "The Velvet Underground and Nico",
    incorrect_answers: ["Abbey Road", "Led Zeppelin IV", "Pet Sounds"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these is not an Ed Sheeran album?",
    correct_answer: "-",
    incorrect_answers: ["+", "X", "divide"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "What album did The Lumineers release in 2016?",
    correct_answer: "Cleopatra",
    incorrect_answers: ["Winter", "The Lumineers", "Tracks From The Attic"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Panic! At the Disco's song 'Nothern Downpour', which lyric follows 'I know the world's a broken bone'.",
    correct_answer: "'So melt your headaches call it home'",
    incorrect_answers: [
      "'So sing your song until you're home'",
      "'So let them know they're on their own'",
      "'So start a fire in their cold stone'"
    ]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Cryoshell, known for 'Creeping in My Soul' did the advertising music for what Lego Theme?",
    correct_answer: "Bionicle",
    incorrect_answers: ["Hero Factory", "Ben 10 Alien Force", "Star Wars"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What year was Min Yoongi from South Korea boy band 'BTS' born in?",
    correct_answer: "1993",
    incorrect_answers: ["1992", "1995", "1994"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which year did 'Caravan Palace' release their first album?",
    correct_answer: "2008",
    incorrect_answers: ["2000", "2015", "2004"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which band released the album 'Sonic Highways' in 2014?",
    correct_answer: "Foo Fighters",
    incorrect_answers: ["Coldplay", "Nickelback", "The Flaming Lips"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "What is rapper Drake's real name?",
    correct_answer: "Aubrey Graham",
    incorrect_answers: ["Shaun Carter", "Dwayne Carter", "Andre Young"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name of Pink Floyd's first studio album?",
    correct_answer: "The Piper at the Gates of Dawn",
    incorrect_answers: ["Ummagumma", "More", "Atom Heart Mother"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Electronic artists Boys Noize and Skrillex have collaborated and released tracks under what name?",
    correct_answer: "Dog Blood",
    incorrect_answers: ["Jack u", "What So Not", "Noisia"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following guitarists recorded an album as a member of the Red Hot Chili Peppers?",
    correct_answer: "Dave Navarro",
    incorrect_answers: ["Tom Morello ", "Billy Corgan", "Ed O'Brien"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "'Make You Feel My Love' was originally written and performed by which singer-songwriter?",
    correct_answer: "Bob Dylan",
    incorrect_answers: ["Elvis", "Adele", "Billy Joel"]
  },
  {
    category: "Music",
    type: "multiple",
    difficulty: "easy",
    question: "What is the frontman's name of the metal band Megadeth?",
    correct_answer: "Dave Mustaine",
    incorrect_answers: ["Rob Halford", "Vince Neil", "James Hetfield"]
  },

  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which Apollo mission was the first one to land on the Moon?",
    correct_answer: "Apollo 11",
    incorrect_answers: ["Apollo 10", "Apollo 9", "Apollo 13"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Helium", "Carbon", "Hydrogen"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the largest animal currently on Earth?",
    correct_answer: "Blue Whale",
    incorrect_answers: ["Orca", "Colossal Squid", "Giraffe"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many objects are equivalent to one mole?",
    correct_answer: "6.022 x 10^23",
    incorrect_answers: ["6.002 x 10^22", "6.022 x 10^22", "6.002 x 10^23"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which element has the chemical symbol 'Fe'?",
    correct_answer: "Iron",
    incorrect_answers: ["Gold", "Silver", "Tin"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?",
    correct_answer: "Uranus",
    incorrect_answers: ["Jupiter", "Venus", "Neptune"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "Rhinoplasty is a surgical procedure on what part of the human body?",
    correct_answer: "Nose",
    incorrect_answers: ["Ears", "Chin", "Neck"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the elemental symbol for mercury?",
    correct_answer: "Hg",
    incorrect_answers: ["Me", "Mc", "Hy"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many planets are in our Solar System?",
    correct_answer: "Eight",
    incorrect_answers: ["Nine", "Seven", "Ten"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the first element on the periodic table?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Oxygen", "Lithium"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What was the first living creature in space?",
    correct_answer: "Fruit Flies ",
    incorrect_answers: ["Monkey", "Dog", "Mouse"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which gas forms about 78% of the Earth's atmosphere?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Argon", "Carbon Dioxide"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "How many degrees Fahrenheit is 100 degrees Celsius? ",
    correct_answer: "212",
    incorrect_answers: ["326", "100", "451"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
    correct_answer: "8 Minutes",
    incorrect_answers: ["6 Minutes", "2 Minutes", "12 Minutes"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the molecular formula of Glucose?",
    correct_answer: "C6H12O6",
    incorrect_answers: ["C2H4O2", "K+", "CH4"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "An organic compound is considered an alcohol if it has what functional group?",
    correct_answer: "Hydroxyl",
    incorrect_answers: ["Carbonyl", "Alkyl", "Aldehyde"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which element has the atomic number of 7?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Hydrogen", "Neon"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
    correct_answer: "Haplogroup U",
    incorrect_answers: ["Haplogroup L", "Haplogroup T", "Haplogroup J"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following blood vessels carries deoxygenated blood?",
    correct_answer: "Pulmonary Artery",
    incorrect_answers: ["Pulmonary Vein", "Aorta", "Coronary Artery"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which psychological term refers to the stress of holding contrasting beliefs?",
    correct_answer: "Cognitive Dissonance",
    incorrect_answers: ["Flip-Flop Syndrome", "Split-Brain", "Blind Sight"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "The 'Tibia' is found in which part of the body?",
    correct_answer: "Leg",
    incorrect_answers: ["Arm", "Hand", "Head"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the scientific name of the knee cap?",
    correct_answer: "Patella",
    incorrect_answers: ["Femur", "Foramen Magnum", "Scapula"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "If you planted the seeds of Quercus robur what would grow?",
    correct_answer: "Trees",
    incorrect_answers: ["Flowers", "Vegtables", "Grains"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Who developed the first successful polio vaccine in the 1950s?",
    correct_answer: "Jonas Salk",
    incorrect_answers: ["John F. Enders", "Thomas Weller", "Frederick Robbins"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many bones are in the human body?",
    correct_answer: "206",
    incorrect_answers: ["203", "209", "200"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the scientific name of the red fox?",
    correct_answer: "Vulpes Vulpes",
    incorrect_answers: ["Vulpes Redus", "Red Fox", "Vulpes Vulpie"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which part of the body does glaucoma affect?",
    correct_answer: "Eyes",
    incorrect_answers: ["Throat", "Stomach", "Blood"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which one of these is scientific term for 'Brain Freeze'?",
    correct_answer: "Sphenopalatine Ganglioneuralgia",
    incorrect_answers: [
      "Hyacinthoides Italica",
      "Amaranthus Retroflexus",
      "Amblyomma Americanum"
    ]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "'The Big Bang Theory' was first theorized by a priest of what religious ideology?",
    correct_answer: "Catholic",
    incorrect_answers: ["Christian", "Jewish", "Islamic"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "A comet's gaseous envelope (which creates the tail) is called what?",
    correct_answer: "The coma",
    incorrect_answers: ["The wake", "The backwash", "The ablative"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Myopia is the scientific term for which condition?",
    correct_answer: "Shortsightedness",
    incorrect_answers: ["Farsightedness", "Double Vision", "Clouded Vision"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "The medical term for the belly button is which of the following?",
    correct_answer: "Umbilicus",
    incorrect_answers: ["Nevus", "Nares", "Paxillus"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is a stop codon in DNA?",
    correct_answer: "TAA",
    incorrect_answers: ["ACT", "ACA", "GTA"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "At what temperature does water boil?",
    correct_answer: "212°F",
    incorrect_answers: ["200°F", "181°F", "178°F"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "A positron is an antiparticle of a what?",
    correct_answer: "Electron",
    incorrect_answers: ["Neutron", "Proton", "Photon"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is the unit of electrical capacitance?",
    correct_answer: "Farad",
    incorrect_answers: ["Gauss", "Henry", "Watt"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the unit of electrical inductance?",
    correct_answer: "Henry",
    incorrect_answers: ["Weber", "Coulomb", "Mho"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Psychology, which need appears highest in the 'Maslow's hierarchy of needs' pyramid?",
    correct_answer: "Esteem",
    incorrect_answers: ["Love", "Safety", "Physiological"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "What animal takes part in Schrodinger's most famous thought experiment?",
    correct_answer: "Cat",
    incorrect_answers: ["Dog", "Bat", "Butterfly"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is the largest living organism currently known to man?",
    correct_answer: "Honey Fungus",
    incorrect_answers: ["Blue Whale", "Redwood Tree", "The Coral Reef"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "On which mission did the Space Shuttle Columbia break up upon re-entry?",
    correct_answer: "STS-107",
    incorrect_answers: ["STS-51-L", "STS-61-C", "STS-109"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is the term for 'surgical complications resulting from surgical sponges left inside the patient's body?",
    correct_answer: "Gossypiboma",
    incorrect_answers: ["Gongoozler", "Jentacular", "Meupareunia"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which chemical element was originally known as Alabamine?",
    correct_answer: "Astatine",
    incorrect_answers: ["Selenium", "Antimony", "Molybdenum"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Down Syndrome is usually caused by an extra copy of which chromosome?",
    correct_answer: "21",
    incorrect_answers: ["23", "15", "24"]
  },

  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is considered the rarist form of color blindness?",
    correct_answer: "Blue",
    incorrect_answers: ["Red", "Green", "Purple"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following liquids is least viscous? Assume temperature is 25°C.",
    correct_answer: "Acetone",
    incorrect_answers: ["Water", "Mercury", "Benzene"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "What does the letter 'S' stand for in 'NASA'?",
    correct_answer: "Space",
    incorrect_answers: ["Science", "Society", "Star"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What name is given to all baby marsupials?",
    correct_answer: "Joey",
    incorrect_answers: ["Calf", "Pup", "Cub"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "The humerus, paired radius, and ulna come together to form what joint?",
    correct_answer: "Elbow",
    incorrect_answers: ["Knee", "Sholder", "Ankle"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which is the longest bone in the human body? ",
    correct_answer: "Femur",
    incorrect_answers: ["Scapula", "Fibula", "Ulna"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which type of rock is created by intense heat AND pressure?",
    correct_answer: "Metamorphic",
    incorrect_answers: ["Sedimentary", "Igneous", "Diamond"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "This element, when overcome with extreme heat and pressure, creates diamonds.",
    correct_answer: "Carbon",
    incorrect_answers: ["Nitrogen", "Oxygen", "Hydrogen"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the hottest planet in the Solar System?",
    correct_answer: "Venus",
    incorrect_answers: ["Mars", "Mercury", "Jupiter"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "What common name is given to the medial condition, tibial stress syndrome (MTSS)?",
    correct_answer: "Shin Splints",
    incorrect_answers: [
      "Tennis Elbow",
      "Carpal Tunnel",
      "Housemaid's Knee"
    ]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "On the Beaufort Scale of wind force, what wind name is given to number 8?",
    correct_answer: "Gale",
    incorrect_answers: ["Storm", "Hurricane", "Breeze"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What mineral has the lowest number on the Mohs scale?",
    correct_answer: "Talc",
    incorrect_answers: ["Quartz", "Diamond", "Gypsum"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the powerhouse of the cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Ribosome", "Redbull", "Nucleus"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many planets make up our Solar System?",
    correct_answer: "8",
    incorrect_answers: ["7", "9", "6"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "All the following metal elements are liquids at or near room temperature EXCEPT:",
    correct_answer: "Beryllium",
    incorrect_answers: ["Gallium", "Caesium", "Mercury"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.",
    correct_answer: "low, all",
    incorrect_answers: ["low, some", "high, all", "high, some"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the chemical makeup of water?",
    correct_answer: "H20",
    incorrect_answers: ["C12H6O2", "CO2", "H"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Which horizon in a soil profile consists of bedrock?",
    correct_answer: "R",
    incorrect_answers: ["O", "B", "D"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the primary addictive substance found in tobacco?",
    correct_answer: "Nicotine",
    incorrect_answers: ["Cathinone", "Ephedrine", "Glaucine"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is isobutylphenylpropanoic acid more commonly known as?",
    correct_answer: "Ibuprofen",
    incorrect_answers: ["Morphine", "Ketamine", "Aspirin"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Where did the dog breed 'Chihuahua' originate?",
    correct_answer: "Mexico",
    incorrect_answers: ["France", "Spain", "Russia"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "The medical condition osteoporosis affects which part of the body?",
    correct_answer: "Bones",
    incorrect_answers: ["Skin", "Brain", "Heart"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is the atomic number of the element Strontium?",
    correct_answer: "38",
    incorrect_answers: ["73", "47", "11"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT a part of the structure of a typical neuron?",
    correct_answer: "Islets of Langerhans",
    incorrect_answers: ["Node of Ranvier", "Schwann cell", "Myelin sheath"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is NOT a real element?",
    correct_answer: "Vitrainium",
    incorrect_answers: ["Praseodymium", "Hassium", "Lutetium"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What term is best associated with Sigmund Freud?",
    correct_answer: "Psychoanalysis",
    incorrect_answers: [
      "Cognitive-Behavioral Therapy",
      "Theory of Gravity",
      "Dialectical Behavior Therapy"
    ]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "After which Danish city is the 72th element on the periodic table named?",
    correct_answer: "Copenhagen",
    incorrect_answers: ["Odense", "Herning", "Skagen"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "What does the yellow diamond on the NFPA 704 fire diamond represent?",
    correct_answer: "Reactivity",
    incorrect_answers: ["Health", "Flammability", "Radioactivity"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which moon is the only satellite in our solar system to possess a dense atmosphere?",
    correct_answer: "Titan",
    incorrect_answers: ["Europa", "Miranda", "Callisto"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "The human right lung has how many lobes?",
    correct_answer: "3",
    incorrect_answers: ["4", "2", "1"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the molecular formula of Ozone?",
    correct_answer: "O3",
    incorrect_answers: ["C6H2O6", "N2O", "SO4"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "The core of the Sun can reach which temperature?",
    correct_answer: "27° Million F (15° Million C)",
    incorrect_answers: [
      "938,000° F (521093.3° C)",
      "8° Billion F (°4.4 Billion C)",
      "Absolute Zero (Both F and C)"
    ]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many chromosomes are in your body cells?",
    correct_answer: "23",
    incorrect_answers: ["21", "22", "24"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Deuterium is an isotope of which element?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Nitrogen", "Helium", "Neon"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Who made the discovery of X-rays?",
    correct_answer: "Wilhelm Conrad Rontgen",
    incorrect_answers: ["Thomas Alva Edison", "James Watt", "Albert Einstein"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What element on the periodic table has 92 electrons?",
    correct_answer: "Uranium",
    incorrect_answers: ["Sulfur", "Hydrogen", "Iron"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What nucleotide pairs with guanine?",
    correct_answer: "Cytosine",
    incorrect_answers: ["Thymine", "Adenine", "Uracil"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the same in Celsius and Fahrenheit?",
    correct_answer: "-40",
    incorrect_answers: ["32", "-39", "-42"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Botanically speaking, which of these fruits is NOT a berry?",
    correct_answer: "Strawberry",
    incorrect_answers: ["Blueberry", "Banana", "Concord Grape"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Burning which of these metals will produce a bright white flame?",
    correct_answer: "Magnesium",
    incorrect_answers: ["Copper", "Lithium", "Lead"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "How long is a light-year?",
    correct_answer: "9.461 Trillion Kilometres",
    incorrect_answers: ["1 AU", "105.40 Earth-years", "501.2 Million Miles"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Coulrophobia is the irrational fear of what?",
    correct_answer: "Clowns",
    incorrect_answers: ["Cemeteries", "Needles", "Tunnels"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following men does not have a chemical element named after him?",
    correct_answer: "Sir Isaac Newton",
    incorrect_answers: ["Albert Einstein", "Niels Bohr", "Enrico Fermi"]
  },

  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following bones is not in the leg?",
    correct_answer: "Radius",
    incorrect_answers: ["Patella", "Tibia", "Fibula "]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is the colour of unoxidized blood?",
    correct_answer: "Red",
    incorrect_answers: ["Blue", "Purple", "Green"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "In aeronautics, flaps and slats are used to control what on an aircraft?",
    correct_answer: "Lift",
    incorrect_answers: ["Thrust", "Drag", "Weight "]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the 'powerhouse' of the Eukaryotic animal cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Nucleus", "Chloroplast", "Endoplasmic Reticulum"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "The 'Islets of Langerhans' is found in which human organ?",
    correct_answer: "Pancreas",
    incorrect_answers: ["Kidney", "Liver", "Brain"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these stars is the largest?",
    correct_answer: "UY Scuti",
    incorrect_answers: ["VY Canis Majoris", "Betelgeuse", "RW Cephei"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many legs is it biologically impossible for a centipede to have?",
    correct_answer: "100",
    incorrect_answers: ["26", "50", "74"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Gannymede is the largest moon of which planet?",
    correct_answer: "Jupiter",
    incorrect_answers: ["Uranus", "Neptune", "Mars"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Au on the Periodic Table refers to which element?",
    correct_answer: "Gold",
    incorrect_answers: ["Silver", "Oxygen", "Nickel"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
    correct_answer: "2",
    incorrect_answers: ["0", "1", "5"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "Alzheimer's disease primarily affects which part of the human body?",
    correct_answer: "Brain",
    incorrect_answers: ["Lungs", "Skin", "Heart"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
    correct_answer: "Sputnik 1",
    incorrect_answers: ["Soyuz 7K-OK", "Zenit-2", "Voskhod 3KV"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is the chemical formula for ammonia?",
    correct_answer: "NH3",
    incorrect_answers: ["CO2", "NO3", "CH4"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Which is not a type of neuron?",
    correct_answer: "Perceptual Neuron",
    incorrect_answers: ["Sensory Neuron", "Motor Neuron", "Interneuron"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "What polymer is used to make CDs, safety goggles and riot shields?",
    correct_answer: "Polycarbonate",
    incorrect_answers: ["Rubber", "Nylon", "Bakelite"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Folic acid is the synthetic form of which vitamin?",
    correct_answer: "Vitamin B",
    incorrect_answers: ["Vitamin A", "Vitamin C", "Vitamin D"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "The human heart has how many chambers?",
    correct_answer: "4",
    incorrect_answers: ["2", "6", "3"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "The element involved in making human blood red is which of the following?",
    correct_answer: "Iron",
    incorrect_answers: ["Copper", "Iridium", "Cobalt"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Human cells typically have how many copies of each gene?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "3"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which is the most abundant element in the universe?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Lithium", "Oxygen"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which element has the highest melting point?",
    correct_answer: "Carbon",
    incorrect_answers: ["Tungsten", "Platinum", "Osmium"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
    correct_answer: "Interphase",
    incorrect_answers: ["Prophase", "Stasis", "Telophase"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these elements on the Periodic Table is a Noble Gas?",
    correct_answer: "Neon",
    incorrect_answers: ["Potassium", "Iodine", "Colbalt"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the standard atomic weight of a Plutonium nucleus?",
    correct_answer: "244",
    incorrect_answers: ["94", "481", "128"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "71% of the Earth's surface is made up of",
    correct_answer: "Water",
    incorrect_answers: ["Deserts", "Continents", "Forests"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
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
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is radiation measured in?",
    correct_answer: "Gray ",
    incorrect_answers: ["Watt", "Decibel", "Kelvin"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "What does the term 'isolation' refer to in microbiology?",
    correct_answer:
      "The separation of a strain from a natural, mixed population of living microbes",
    incorrect_answers: [
      "A lack of nutrition in microenviroments",
      "The nitrogen level in soil",
      "Testing effects of certain microorganisms in an isolated enviroments, such as caves"
    ]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the unit of electrical resistance?",
    correct_answer: "Ohm",
    incorrect_answers: ["Mho", "Tesla", "Joule"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which desert is the only desert in the world where the 'Saguaro' cactus grows indigenously?",
    correct_answer: "The Sonoran Desert",
    incorrect_answers: [
      "The Gobi Desert",
      "The Yuma Desert",
      "The Arabian Desert"
    ]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Muscle fiber is constructed of bundles small long organelles called what?",
    correct_answer: "Myofibrils",
    incorrect_answers: ["Epimysium", "Myofiaments", "Myocardium"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is NOT a word used to describe an earthquake?",
    correct_answer: "Drop-slide",
    incorrect_answers: ["Foreshock", "Strike-slip", "Temblor"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What are human nails made of?",
    correct_answer: "Keratin",
    incorrect_answers: ["Bone", "Chitin", "Calcium"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Where is the Gluteus Maximus muscle located?",
    correct_answer: "Butt",
    incorrect_answers: ["Arm", "Head", "Torso"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the scientific name for the extinct hominin known as 'Lucy'?",
    correct_answer: "Australopithecus Afarensis",
    incorrect_answers: [
      "Australopithecus Africanus",
      "Australopithecus Architeuthis",
      "Australopithecus Antaris"
    ]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "What part of the brain takes its name from the Greek for seahorse?",
    correct_answer: "Hippocampus",
    incorrect_answers: ["Cerebellum", "Thalamus", "Amygdala"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which planet did the 'Viking 1' spacecraft send surface images of, starting in 1976?",
    correct_answer: "Mars",
    incorrect_answers: ["Saturn", "Jupiter", "Venus"]
  },
  {
    category: "Science And Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What do you study if you are studying entomology?",
    correct_answer: "Insects",
    incorrect_answers: ["Humans", "the Brain", "Fish"]
  },

  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the world's most expensive spice by weight?",
    correct_answer: "Saffron",
    incorrect_answers: ["Cinnamon", "Cardamom", "Vanilla"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What does a milliner make and sell?",
    correct_answer: "Hats",
    incorrect_answers: ["Shoes", "Belts", "Shirts"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "In a standard set of playing cards, which is the only king without a moustache?",
    correct_answer: "Hearts",
    incorrect_answers: ["Spades", "Diamonds", "Clubs"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which river flows through the Scottish city of Glasgow?",
    correct_answer: "Clyde",
    incorrect_answers: ["Tay", "Dee", "Tweed"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    correct_answer: "Key",
    incorrect_answers: ["Sword", "Pen", "Cellphone"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    correct_answer: "Cabbage Patch Kids",
    incorrect_answers: ["Transformers", "Care Bears", "Rubik's Cube"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What does a funambulist walk on?",
    correct_answer: "A Tight Rope",
    incorrect_answers: ["Broken Glass", "Balls", "The Moon"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Scotch whisky and Drambuie make up which cocktail?",
    correct_answer: "Rusty Nail",
    incorrect_answers: ["Screwdriver", "Sex on the Beach", "Manhattan"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What alcoholic drink is made from molasses?",
    correct_answer: "Rum",
    incorrect_answers: ["Gin", "Vodka", "Whisky"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which essential condiment is also known as Japanese horseradish?",
    correct_answer: "Wasabi ",
    incorrect_answers: ["Mentsuyu", "Karashi", "Ponzu"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of the Jewish New Year?",
    correct_answer: "Rosh Hashanah",
    incorrect_answers: ["Elul", "New Year", "Succoss"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "When was 'YouTube' founded?",
    correct_answer: "February 14, 2005",
    incorrect_answers: ["May 22, 2004", "September 12, 2005", "July 19, 2009"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Before the 19th Century, the 'Living Room' was originally called the...",
    correct_answer: "Parlor",
    incorrect_answers: ["Open Room", "Sitting Room", "Loft"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Red Vines is a brand of what type of candy?",
    correct_answer: "Licorice",
    incorrect_answers: ["Lollipop", "Chocolate", "Bubblegum"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question: "What is the unit of currency in Laos?",
    correct_answer: "Kip",
    incorrect_answers: ["Ruble", "Konra", "Dollar"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Sciophobia is the fear of what?",
    correct_answer: "Shadows",
    incorrect_answers: ["Eating", "Bright lights", "Transportation"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    correct_answer: "Spruce Goose",
    incorrect_answers: ["Noah's Ark", "Fat Man", "Trojan Horse"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the French word for 'hat'?",
    correct_answer: "Chapeau",
    incorrect_answers: ["Bonnet", "echarpe", "Casque"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Swedish word for 'window'?",
    correct_answer: "Fonster",
    incorrect_answers: ["Hal", "Skarm", "Ruta"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Italian word for 'tomato'?",
    correct_answer: "Pomodoro",
    incorrect_answers: ["Aglio", "Cipolla", "Peperoncino"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the romanized Russian word for 'winter'?",
    correct_answer: "Zima",
    incorrect_answers: ["Leto", "Vesna", "Osen'"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which musician has collaborated with American producer Porter Robinson and released the 2016 song 'Shelter'?",
    correct_answer: "Madeon",
    incorrect_answers: ["Mat Zo", "deadmau5", "Zedd"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "The term 'scientist' was coined in which year?",
    correct_answer: "1833",
    incorrect_answers: ["1933", "1942", "1796"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the founder of 'The Lego Group'?",
    correct_answer: "Ole Kirk Christiansen",
    incorrect_answers: [
      "Jens Niels Christiansen",
      "Kirstine Christiansen",
      "Gerhardt Kirk Christiansen"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Five dollars is worth how many nickles?",
    correct_answer: "100",
    incorrect_answers: ["50", "25", "69"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the last letter of the Greek alphabet?",
    correct_answer: "Omega",
    incorrect_answers: ["Mu", "Epsilon", "Kappa"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What do the letters in the GMT time zone stand for?",
    correct_answer: "Greenwich Mean Time",
    incorrect_answers: [
      "Global Meridian Time",
      "General Median Time",
      "Glasgow Man Time"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "Which American-owned brewery led the country in sales by volume in 2015?",
    correct_answer: "D. G. Yuengling and Son, Inc",
    incorrect_answers: ["Anheuser Busch", "Boston Beer Company", "Miller Coors"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to Sherlock Holmes, 'If you eliminate the impossible, whatever remains, however improbable, must be the...'",
    correct_answer: "Truth",
    incorrect_answers: ["Answer", "Cause", "Source"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question: "When was Hubba Bubba first introduced?",
    correct_answer: "1979",
    incorrect_answers: ["1984", "1972", "1980"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "What machine element is located in the center of fidget spinners?",
    correct_answer: "Bearings",
    incorrect_answers: ["Axles", "Gears", "Belts"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Earl Grey tea is black tea flavoured with what?",
    correct_answer: "Bergamot oil",
    incorrect_answers: ["Lavender", "Vanilla", "Honey"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "If someone said 'you are olid', what would they mean?",
    correct_answer: "You smell extremely unpleasant.",
    incorrect_answers: [
      "You are out of shape/weak.",
      "Your appearance is repulsive.",
      "You are incomprehensible/an idiot."
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What company developed the vocaloid Hatsune Miku?",
    correct_answer: "Crypton Future Media",
    incorrect_answers: ["Sega", "Sony", "Yamaha Corporation"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Named after the mallow flower, mauve is a shade of what?",
    correct_answer: "Purple",
    incorrect_answers: ["Red", "Brown", "Pink"]
  },

  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "Where is the train station 'Llanfairpwllgwyngyll'?",
    correct_answer: "Wales",
    incorrect_answers: ["Moldova", "Czech Republic", "Denmark"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    correct_answer: "HTC",
    incorrect_answers: ["Oculus", "Google", "Razer"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What's the name of Batman's parents?",
    correct_answer: "Thomas & Martha",
    incorrect_answers: [
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most common surname Wales?",
    correct_answer: "Jones",
    incorrect_answers: ["Williams", "Davies", "Evans"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Rolex is a company that specializes in what type of product?",
    correct_answer: "Watches",
    incorrect_answers: ["Cars", "Computers", "Sports equipment"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "A doctor with a PhD is a doctor of what?",
    correct_answer: "Philosophy",
    incorrect_answers: ["Psychology", "Phrenology", "Physical Therapy"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "How would one say goodbye in Spanish?",
    correct_answer: "Adios",
    incorrect_answers: ["Hola", "Au Revoir", "Salir"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "On a dartboard, what number is directly opposite No. 1?",
    correct_answer: "19",
    incorrect_answers: ["20", "12", "15"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    correct_answer: "Subscriber",
    incorrect_answers: ["Single", "Secure", "Solid"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What word represents the letter 'T' in the NATO phonetic alphabet?",
    correct_answer: "Tango",
    incorrect_answers: ["Target", "Taxi", "Turkey"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
    correct_answer: "Cube",
    incorrect_answers: ["Sphere", "Cylinder", "Pyramid"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is not another name for the eggplant?",
    correct_answer: "Potimarron",
    incorrect_answers: ["Brinjal", "Guinea Squash", "Melongene"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is an existing family in 'The Sims'?",
    correct_answer: "The Goth Family",
    incorrect_answers: ["The Family", "The Simoleon Family", "The Proud Family"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
    correct_answer: "Niagara Mohawk Building",
    incorrect_answers: ["Taipei 101", "One Detroit Center", "Westendstrasse 1"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is the name of a Japanese system of alternative medicine, literally meaning 'finger pressure'?",
    correct_answer: "Shiatsu",
    incorrect_answers: ["Ukiyo", "Majime", "Ikigai"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the romanized Japanese word for 'university'?",
    correct_answer: "Daigaku",
    incorrect_answers: ["Toshokan", "Jimusho", "Shokudou"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the popular animatronic singing fish prop, singing such hits such as 'Don't Worry, Be Happy'?",
    correct_answer: "Big Mouth Billy Bass",
    incorrect_answers: ["Big Billy Bass", "Singing Fish", "Sardeen"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of these is NOT one of them?",
    correct_answer: "Harry",
    incorrect_answers: ["Gus", "Phineas", "Ezra"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "On average, Americans consume 100 pounds of what per second?",
    correct_answer: "Chocolate",
    incorrect_answers: ["Potatoes", "Donuts", "Cocaine"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which one of these is not a typical European sword design?",
    correct_answer: "Scimitar",
    incorrect_answers: ["Falchion", "Ulfberht", "Flamberge"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "The new One World Trade Center in Manhattan, New York City was designed by which architect? ",
    correct_answer: "David Childs",
    incorrect_answers: ["Bjarke Ingels", "Michael Arad", "Fumihiko Maki"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Which one of these Swedish companies was founded in 1943?",
    correct_answer: "IKEA",
    incorrect_answers: ["H & M", "Lindex", "Clas Ohlson"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following carbonated soft drinks were introduced first?",
    correct_answer: "Dr. Pepper",
    incorrect_answers: ["Coca-Cola", "Sprite", "Mountain Dew"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "How many calories are in a 355 ml can of Pepsi Cola?",
    correct_answer: "150",
    incorrect_answers: ["200", "100", "155"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What direction does the Statue of Liberty face?",
    correct_answer: "Southeast",
    incorrect_answers: ["Southwest", "Northwest", "Northeast"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "In what year was McDonald's founded?",
    correct_answer: "1955",
    incorrect_answers: ["1964", "1951", "1947"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the General Mills Corporation's monster cereals was the last to be released in the 1970's?",
    correct_answer: "Fruit Brute",
    incorrect_answers: ["Count Chocula", "Franken Berry", "Boo-Berry"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which restaurant's mascot is a clown?",
    correct_answer: "McDonald's",
    incorrect_answers: ["Whataburger", "Burger King", "Sonic"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What was the soft drink Pepsi originally introduced as?",
    correct_answer: "Brad's Drink",
    incorrect_answers: ["Pepsin Pop", "Carolina Cola", "Pepsin Syrup"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What color is the 'Ex' in FedEx Ground?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Light Blue", "Orange"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first ever London Underground line to be built?",
    correct_answer: "Metropolitan Line",
    incorrect_answers: ["Circle Line", "Bakerloo Line", "Victoria Line"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "How tall is the Burj Khalifa?",
    correct_answer: "2,722 ft",
    incorrect_answers: ["2,717 ft", "2,546 ft", "3,024 ft"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to Fair Works Australia, how long do you have to work to get Long Service Leave?",
    correct_answer: "7 years",
    incorrect_answers: ["2 years", "8 years", "6 months"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Where does water from Poland Spring water bottles come from?",
    correct_answer: "Maine, United States",
    incorrect_answers: ["Hesse, Germany", "Masovia, Poland", "Bavaria, Poland"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?",
    correct_answer: "28%",
    incorrect_answers: ["13%", "20%", "7%"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is a Burgee?",
    correct_answer: "A flag",
    incorrect_answers: ["A rope", "A window", "A type of food"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "What does the Latin phrase 'Veni, vidi, vici' translate into English?",
    correct_answer: "I came, I saw, I conquered",
    incorrect_answers: [
      "See no evil, hear no evil, speak no evil",
      "Life, liberty, and happiness",
      "Past, present, and future"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "When did the website 'Facebook' launch?",
    correct_answer: "2004",
    incorrect_answers: ["2005", "2003", "2006"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Who invented Pastafarianism?",
    correct_answer: "Bobby Henderson",
    incorrect_answers: ["Eric Tignor", "Bill Nye", "Zach Soldi"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Apple co-founder Steve Jobs died from complications of which form of cancer?",
    correct_answer: "Pancreatic",
    incorrect_answers: ["Bone", "Liver", "Stomach"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which slogan did the fast food company, McDonald's, use before their 'I'm Lovin' It' slogan?",
    correct_answer: "We Love to See You Smile",
    incorrect_answers: [
      "Why Pay More!?",
      "Have It Your Way",
      "Making People Happy Through Food"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "The website 'Shut Up & Sit Down' reviews which form of media?",
    correct_answer: "Board Games",
    incorrect_answers: ["Television Shows", "Video Games", "Films"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Where did the pineapple plant originate?",
    correct_answer: "South America",
    incorrect_answers: ["Hawaii", "Europe", "Asia"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Whose greyscale face is on the kappa emoticon on Twitch?",
    correct_answer: "Josh DeSeno",
    incorrect_answers: ["Justin DeSeno", "John DeSeno", "Jimmy DeSeno"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which item of clothing is usually worn by a Scotsman at a wedding?",
    correct_answer: "Kilt",
    incorrect_answers: ["Skirt", "Dress", "Rhobes"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these words means 'idle spectator'?",
    correct_answer: "Gongoozler",
    incorrect_answers: ["Gossypiboma", "Jentacular", "Meupareunia"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur? ",
    correct_answer: "Richard Branson",
    incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to the BBPA, what is the most common pub name in the UK?",
    correct_answer: "Red Lion",
    incorrect_answers: ["Royal Oak", "White Hart", "King's Head"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "What type of dog is 'Handsome Dan', the mascot of Yale University?",
    correct_answer: "Bulldog",
    incorrect_answers: ["Yorkshire Terrier", "Boxer", "Pug"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was the Declaration of Independence approved by the Second Continental Congress?",
    correct_answer: "July 2, 1776",
    incorrect_answers: ["May 4, 1776", "June 4, 1776", "July 4, 1776"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What name represents the letter 'M' in the NATO phonetic alphabet?",
    correct_answer: "Mike",
    incorrect_answers: ["Matthew", "Mark", "Max"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the defining characteristic of someone who is described as hirsute?",
    correct_answer: "Hairy",
    incorrect_answers: ["Rude", "Funny", "Tall"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "In past times, what would a gentleman keep in his fob pocket?",
    correct_answer: "Watch",
    incorrect_answers: ["Money", "Keys", "Notebook"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Area 51 is located in which US state?",
    correct_answer: "Nevada",
    incorrect_answers: ["Arizona", "New Mexico", "Utah"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the largest organ of the human body?",
    correct_answer: "Skin",
    incorrect_answers: ["Heart", "large Intestine", "Liver"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is 'dabbing'?",
    correct_answer: "A dance",
    incorrect_answers: ["A medical procedure", "A sport", "A language"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is a 'dakimakura'?",
    correct_answer: "A body pillow",
    incorrect_answers: [
      "A Chinese meal, essentially composed of fish",
      "A yoga posture",
      "A word used to describe two people who truly love each other"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question: "In 2013 how much money was lost by Nigerian scams?",
    correct_answer: "$12.7 Billion",
    incorrect_answers: ["$95 Million", "$956 Million", "$2.7 Billion"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What year was Queen Elizabeth II born?",
    correct_answer: "1926",
    incorrect_answers: ["1923", "1929", "1930"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "After how many years would you celebrate your crystal anniversary?",
    correct_answer: "15",
    incorrect_answers: ["20", "10", "25"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "A factiod is what?",
    correct_answer: "A falsehood",
    incorrect_answers: ["Useless trivia", "A tiny fact", "A scientific figure"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
    correct_answer: "OCBC",
    incorrect_answers: ["HSBC", "Standard Chartered", "Bank of China"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the nickname of the US state of California?",
    correct_answer: "Golden State",
    incorrect_answers: ["Sunshine State", "Bay State", "Treasure State"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name given to Indian food cooked over charcoal in a clay oven?",
    correct_answer: "Tandoori",
    incorrect_answers: ["Biryani", "Pani puri", "Tiki masala"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these colours is NOT featured in the logo for Google?",
    correct_answer: "Pink",
    incorrect_answers: ["Yellow", "Blue", "Green"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What is the romanized Chinese word for 'airplane'?",
    correct_answer: "Feiji",
    incorrect_answers: ["Qiche", "Zongxian", "Huojian"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What is the romanized Korean word for 'heart'?",
    correct_answer: "Simjang",
    incorrect_answers: ["Aejeong", "Jeongsin", "Segseu"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What is the romanized Arabic word for 'moon'?",
    correct_answer: "Qamar",
    incorrect_answers: ["Najma", "Kawkab", "Shams"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "The Swedish word 'Grunka' means what in English?",
    correct_answer: "Thing",
    incorrect_answers: ["People", "Place", "Pineapple"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to the United States' CDC, one in how many Americans die annually due to smoking?",
    correct_answer: "Five",
    incorrect_answers: ["Twenty", "Ten", "One hundred"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "hard",
    question:
      "How long did it take the motorized window washers of the original World Trade Center to clean the entire exterior of the building?",
    correct_answer: "1 Month",
    incorrect_answers: ["3 Weeks", "1 Week", "2 Months"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What character was once considered to be the 27th letter of the alphabet?",
    correct_answer: "Ampersand",
    incorrect_answers: ["Interrobang", "Tilde", "Pilcrow"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of Poland in Polish?",
    correct_answer: "Polska",
    incorrect_answers: ["Pupcia", "Polszka", "Poland"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "The New York Times slogan is, 'All the News That's Fit to...'",
    correct_answer: "Print",
    incorrect_answers: ["Digest", "Look", "Read"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?",
    correct_answer: "Center Parcs",
    incorrect_answers: ["Yelloh Village", "Keycamp", "Villa Plus"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What year was Apple Inc. founded?",
    correct_answer: "1976",
    incorrect_answers: ["1978", "1980", "1974"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a 'Guardians of the Galaxy' themed ride?",
    correct_answer: "Twilight Zone Tower of Terror",
    incorrect_answers: [
      "The Haunted Mansion",
      "Pirates of the Caribbean",
      "Peter Pan's Flight"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What year was the RoboSapien toy robot released?",
    correct_answer: "2004",
    incorrect_answers: ["2000", "2001", "2006"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Portuguese word for 'Brazil'?",
    correct_answer: "Brasil",
    incorrect_answers: ["Brazil", "Brasilia", "Brasíl"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the original name of the search engine 'Google'?",
    correct_answer: "BackRub",
    incorrect_answers: ["CatMassage", "SearchPro", "Netscape Navigator"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Who founded the Khan Academy?",
    correct_answer: "Sal Khan",
    incorrect_answers: ["Ben Khan", "Kitt Khan", "Adel Khan"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    correct_answer: "Libra",
    incorrect_answers: ["Gemini", "Taurus", "Capricorn"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following presidents is not on Mount Rushmore?",
    correct_answer: "John F. Kennedy",
    incorrect_answers: [
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary rainbow staff surrounded by an ever glowing rainbow aura?",
    correct_answer: "The Bifrost",
    incorrect_answers: ["Bolt", "Kudzu", "The Moot"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Chartreuse is a color between yellow and what?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Black", "Purple"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Originally another word for poppy, coquelicot is a shade of what?",
    correct_answer: "Red",
    incorrect_answers: ["Green", "Blue", "Pink"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which country drives on the left side of the road?",
    correct_answer: "Japan",
    incorrect_answers: ["Germany", "Russia", "China"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    correct_answer: "Brazil",
    incorrect_answers: ["China", "South Korea", "United States of America"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which candy is NOT made by Mars?",
    correct_answer: "Almond Joy",
    incorrect_answers: ["M&M's", "Twix", "Snickers"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "In which fast food chain can you order a Jamocha Shake?",
    correct_answer: "Arby's",
    incorrect_answers: ["McDonald's", "Burger King", "Wendy's"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which company's original slogan was 'Don't be evil'?",
    correct_answer: "Google",
    incorrect_answers: ["Apple", "Yahoo", "Microsoft"]
  },

  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "This field is sometimes known as 'The Dismal Science.'",
    correct_answer: "Economics",
    incorrect_answers: ["Philosophy", "Politics", "Physics"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the first book of the Old Testament?",
    correct_answer: "Genesis",
    incorrect_answers: ["Exodus", "Leviticus", "Numbers"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What is the airspeed velocity of an unladen swallow?",
    correct_answer: "24 MPH",
    incorrect_answers: ["15 MPH", "20 MPH", "200 MPH"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which sign of the zodiac is represented by the Crab?",
    correct_answer: "Cancer",
    incorrect_answers: ["Libra", "Virgo", "Sagittarius"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "In the Morse code, which letter is indicated by 3 dots? ",
    correct_answer: "S",
    incorrect_answers: ["O", "A", "C"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What does the 'G' mean in 'G-Man'?",
    correct_answer: "Government",
    incorrect_answers: ["Going", "Ghost", "Geronimo"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which language is NOT Indo-European?",
    correct_answer: "Hungarian",
    incorrect_answers: ["Russian", "Greek", "Latvian"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What geometric shape is generally used for stop signs?",
    correct_answer: "Octagon",
    incorrect_answers: ["Hexagon", "Circle", "Triangle"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "The words 'bungalow' and 'shampoo' originate from the languages of which country?",
    correct_answer: "India",
    incorrect_answers: ["Papua New Guinea", "Ethiopia", "China"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
    correct_answer: "Gorilla",
    incorrect_answers: ["Tiger", "Panda", "Crocodile"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "How many colors are there in a rainbow?",
    correct_answer: "7",
    incorrect_answers: ["9", "8", "10"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Which film star has his statue in Leicester Square?",
    correct_answer: "Charlie Chaplin",
    incorrect_answers: ["Paul Newman", "Rowan Atkinson ", "Alfred Hitchcock"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following chemicals are found in eggplant seeds?",
    correct_answer: "Nicotine",
    incorrect_answers: ["Mescaline", "Cyanide", "Psilocybin"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these companies does NOT manufacture automobiles?",
    correct_answer: "Ducati",
    incorrect_answers: ["Nissan", "GMC", "Fiat"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What was the destination of the missing flight MH370?",
    correct_answer: "Beijing",
    incorrect_answers: ["Kuala Lumpur", "Singapore", "Tokyo"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What alcoholic drink is mainly made from juniper berries?",
    correct_answer: "Gin",
    incorrect_answers: ["Vodka", "Rum", "Tequila"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012?",
    correct_answer: "Bullfighting",
    incorrect_answers: ["Fiestas", "Flamenco", "Mariachi"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is on display in the Madame Tussaud's museum in London?",
    correct_answer: "Wax sculptures",
    incorrect_answers: [
      "Designer clothing",
      "Unreleased film reels",
      "Vintage cars"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the German word for 'spoon'?",
    correct_answer: "Loffel",
    incorrect_answers: ["Gabel", "Messer", "Essstabchen"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
    correct_answer: "India",
    incorrect_answers: ["United States of America", "Soviet Union", "Poland"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is a dead mall?",
    correct_answer:
      "A mall with high vacancy rates or low consumer foot traffic",
    incorrect_answers: [
      "A mall with no stores",
      "A mall that has been condemed",
      "A mall after business hours"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following languages does NOT use gender as a part of its grammar?",
    correct_answer: "Turkish",
    incorrect_answers: ["German", "Danish", "Polish"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following card games revolves around numbers and basic math?",
    correct_answer: "Uno",
    incorrect_answers: ["Go Fish", "Twister", "Munchkin"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Toshiba", "Asus", "Dell"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
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
    type: "multiple",
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
    type: "multiple",
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
    difficulty: "medium",
    question: "During what war did the 'Cuban Missile Crisis' occur?",
    correct_answer: "Cold War",
    incorrect_answers: ["World War I", "World War II", "Revolutionary War"]
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
    question: "The Spitfire L.F. Mk IX had what engine?",
    correct_answer: "Merlin 66",
    incorrect_answers: ["Griffon 65", "Merlin 50", "Merlin X"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What number does the Roman numeral 'D' stand for?",
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
    difficulty: "easy",
    question:
      "During WWII, in 1945, the United States dropped atomic bombs on the two Japanese cities of Hiroshima and what other city?",
    correct_answer: "Nagasaki",
    incorrect_answers: ["Kawasaki", "Tokyo", "Kagoshima"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which of his six wives was Henry VIII married to the longest?",
    correct_answer: "Catherine of Aragon",
    incorrect_answers: ["Anne Boleyn", "Jane Seymour", "Catherine Parr"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which dictator killed the most people?",
    correct_answer: "Mao Zedong",
    incorrect_answers: ["Joseph Stalin", "Adolf Hitler", "Kim Il Sung"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following African countries was most successful in resisting colonization?",
    correct_answer: "Ethiopia",
    incorrect_answers: ["Cote d'Ivoire", "Congo", "Namibia"]
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
    difficulty: "medium",
    question:
      "One of the deadliest pandemics, the 'Spanish Flu', killed off what percentage of the human world population at the time?",
    correct_answer: "3 to 6 percent",
    incorrect_answers: [
      "6 to 10 percent",
      "1 to 3 percent",
      "less than 1 percent"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to scholarly estimates, what percentage of the world population at the time died due to Tamerlane's conquests?",
    correct_answer: "5%",
    incorrect_answers: ["1%", "3%", "2%"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which infamous European traitor was known as 'the last person to enter Parliament with honest intentions'?",
    correct_answer: "Guy Fawkes",
    incorrect_answers: ["Robert Catesby", "Francis Tresham", "Everard Digby"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "The creator of the Enigma Cypher and Machine was of what nationality?",
    correct_answer: "German",
    incorrect_answers: ["American", "British", "Polish"]
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
    difficulty: "easy",
    question:
      "Which modern day country is the region that was known as Phrygia in ancient times?",
    correct_answer: "Turkey",
    incorrect_answers: ["Syria", "Greece", "Egypt"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did the Battle of the Bulge end?",
    correct_answer: "January 25, 1945",
    incorrect_answers: [
      "August 6, 1945",
      "December 7, 1941",
      "December 16, 1944"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what year was the video game company Electronic Arts founded?",
    correct_answer: "1982",
    incorrect_answers: ["1999", "1981", "2005"]
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
      "Where and when was the first cardboard box made for industrial use?",
    correct_answer: "England, 1817",
    incorrect_answers: [
      "United States, 1817",
      "England, 1917",
      "United States, 1917"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "How many sonatas did Ludwig van Beethoven write?",
    correct_answer: "32",
    incorrect_answers: ["50", "31", "21"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year were the Marian Reforms instituted in the Roman Republic?",
    correct_answer: "107 BCE",
    incorrect_answers: ["42 BCE", "264 BCE", "102 CE"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Adolf Hitler was born on which date?",
    correct_answer: "April 20, 1889",
    incorrect_answers: ["June 12, 1889", "February 6, 1889", "April 16, 1889"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "When was Google founded?",
    correct_answer: "September 4, 1998",
    incorrect_answers: [
      "October 9, 1997",
      "December 12, 1989",
      "Feburary 7th, 2000"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year did the Boxing Day earthquake & tsunami occur in the Indian Ocean?",
    correct_answer: "2004",
    incorrect_answers: ["2006", "2008", "2002"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "During the Spanish Civil War (1936), Francisco Franco fought for which political faction?",
    correct_answer: "Nationalist Spain",
    incorrect_answers: ["Republican Spain", "Popular Front", "Papal State"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which American civilization is the source of the belief that the world would end or drastically change on December 21st, 2012?",
    correct_answer: "The Mayans",
    incorrect_answers: ["The Incas", "The Aztecs", "The Navajos"]
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
    difficulty: "hard",
    question:
      "Who was the President of the United States during the signing of the Gadsden Purchase?",
    correct_answer: "Franklin Pierce",
    incorrect_answers: ["Andrew Johnson", "Abraham Lincoln", "James Polk"]
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
      "How many women joined the United States Armed Services during World War II?",
    correct_answer: "350,000",
    incorrect_answers: ["225,000", "100,000", "500,000"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following countries was not an axis power during World War II?",
    correct_answer: "Soviet Union",
    incorrect_answers: ["Poland", "Germany", "Japan"]
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
      "The Fallingwater House, located in Pennsylvania, was designed by which architect?",
    correct_answer: "Frank Lloyd Wright",
    incorrect_answers: ["Antoni Gaudi", "Frank Gehry", "Le Corbusier"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of one of the surviving palaces of Henry VIII located near Richmond, London?",
    correct_answer: "Hampton Court",
    incorrect_answers: [
      "St James's Palace",
      "Buckingham Palace",
      "Coughton Court"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What year did Australia become a federation?",
    correct_answer: "1901",
    incorrect_answers: ["1910", "1899", "1911"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In World War I, what was the name of the alliance of Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria?",
    correct_answer: "The Central Powers",
    incorrect_answers: [
      "The Axis Powers",
      "The Federation of Empires",
      "Authoritarian Alliance"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "How long did the Warsaw Uprising during World War II last?",
    correct_answer: "63 Days",
    incorrect_answers: ["20 Days", "55 Days", "224 Days"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the aim of the 'Umbrella Revolution' in Hong Kong in 2014?",
    correct_answer: "Genuine universal suffrage",
    incorrect_answers: [
      "Gaining Independence",
      "Go back under British Rule",
      "Lower taxes"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "These two countries held a commonwealth from the 16th to 18th century.",
    correct_answer: "Poland and Lithuania",
    incorrect_answers: [
      "Hutu and Rwanda",
      "North Korea and South Korea",
      "Bangladesh and Bhutan"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "What year did World War I begin?",
    correct_answer: "1914",
    incorrect_answers: ["1905", "1919", "1925"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "When was the 'Siege of Leningrad' lifted during World War II?",
    correct_answer: "January 1944",
    incorrect_answers: ["September 1943", "November 1943", "March 1944"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "The main objective of the German operation 'Case Blue' during World War II was originally to capture what?",
    correct_answer: "Caucasus",
    incorrect_answers: ["Stalingrad", "Crimea", "Voronezh"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "The minigun was designed in 1960 by which manufacturer.",
    correct_answer: "General Electric",
    incorrect_answers: ["Colt Firearms", "Heckler & Koch", "Sig Sauer"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "How many years did the Hundred Years' War last?",
    correct_answer: "116",
    incorrect_answers: ["100", "90", "101"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the code name for the German invasion of the Soviet Union in WW2?",
    correct_answer: "Operation Barbarossa",
    incorrect_answers: [
      "Operation Kaiserschlact",
      "Operation Unthinkable",
      "Operation Molotov"
    ]
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
    difficulty: "hard",
    question:
      "With which Greek philosopher would you associate the phrase, 'I know that I know nothing'?",
    correct_answer: "Socrates",
    incorrect_answers: ["Aristotle", "Plato", "Pythagoras"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?",
    correct_answer: "Brazil",
    incorrect_answers: ["India", "Mozambique", "Madagascar"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "During the Mongolian invasions of Japan, what were the Mongol boats mostly stopped by?",
    correct_answer: "Typhoons",
    incorrect_answers: ["Tornados", "Economic depression", "Samurai"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Who discovered Penicillin?",
    correct_answer: "Alexander Flemming",
    incorrect_answers: ["Marie Curie", "Alfred Nobel", "Louis Pasteur"]
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
    difficulty: "easy",
    question: "How many manned moon landings have there been?",
    correct_answer: "6",
    incorrect_answers: ["1", "3", "7"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Spain was formed in 1469 with the marriage of Isabella I of Castile and Ferdinand II of what other Iberian kingdom?",
    correct_answer: "Aragon",
    incorrect_answers: ["Galicia", "Leon", "Navarre"]
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
    difficulty: "easy",
    question: "The idea of Socialism was articulated and advanced by whom?",
    correct_answer: "Karl Marx",
    incorrect_answers: ["Vladimir Lenin", "Joseph Stalin", "Vladimir Putin"]
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
    difficulty: "medium",
    question: "On what day did Germany invade Poland?",
    correct_answer: "September 1, 1939",
    incorrect_answers: ["December 7, 1941", "June 22, 1941", "July 7, 1937"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "When did Spanish Peninsular War start?",
    correct_answer: "1808",
    incorrect_answers: ["1806", "1810", "1809"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who was the Prime Minister of the United Kingdom for most of World War II?",
    correct_answer: "Winston Churchill",
    incorrect_answers: [
      "Neville Chamberlain",
      "Harold Macmillan",
      "Edward Heath"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which country had an 'Orange Revolution' between 2004 and 2005?",
    correct_answer: "Ukraine",
    incorrect_answers: ["Belarus", "Latvia", "Lithuania"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "What year was Canada founded in?",
    correct_answer: "1867",
    incorrect_answers: ["1798", "1859", "1668"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Assyrian kings did NOT rule during the Neo-Assyrian Empire?",
    correct_answer: "Shamshi-Adad III",
    incorrect_answers: ["Shalmaneser V", "Esharhaddon", "Ashur-nasir-pal II"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which famous world leader is famed for the saying, 'Let them eat cake', yet is rumored that he/she never said it at all?",
    correct_answer: "Marie Antoinette",
    incorrect_answers: ["Czar Nicholas II", "Elizabeth I", "Henry VIII"]
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
    question: "What was Manfred von Richthofen's nickname?",
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
      "How old was Lyndon B. Johnson when he assumed the role of President of the United States?",
    correct_answer: "55",
    incorrect_answers: ["50", "60", "54"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Apollo mission was the last one in NASA's Apollo program?",
    correct_answer: "Apollo 17",
    incorrect_answers: ["Apollo 13", "Apollo 11", "Apollo 15"]
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
    difficulty: "medium",
    question: "In what prison was Adolf Hitler held in 1924?",
    correct_answer: "Landsberg Prison",
    incorrect_answers: ["Spandau Prison", "Ebrach Abbey", "Hohenasperg"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Against which country did the Dutch Republic fight the Eighty Years' War?",
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
    difficulty: "hard",
    question:
      "Who invented the 'Flying Shuttle' in 1738; one of the key developments in the industrialization of weaving?",
    correct_answer: "John Kay",
    incorrect_answers: ["James Hargreaves", "Richard Arkwright", "John Deere"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What year was the United States Declaration of Independence signed?",
    correct_answer: "1776",
    incorrect_answers: ["1775", "1774", "1777"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first sport to have been played on the moon?",
    correct_answer: "Golf",
    incorrect_answers: ["Football", "Tennis", "Soccer"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the transfer of disease, crops, and people across the Atlantic shortly after the discovery of the Americas called?",
    correct_answer: "The Columbian Exchange",
    incorrect_answers: [
      "Triangle Trade",
      "Transatlantic Slave Trade",
      "The Silk Road"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following snipers has the highest amount of confirmed kills?",
    correct_answer: "Simo Hayha",
    incorrect_answers: ["Chris Kyle", "Vasily Zaytsev", "Craig Harrison"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what dialogue did Socrates defend himself to the court of Athens? ",
    correct_answer: "The Apology",
    incorrect_answers: ["The Euthyphro", "The Laws", "The Republic"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "When did the United States formally declare war on Japan, entering World War II?",
    correct_answer: "December 8, 1941",
    incorrect_answers: ["June 6, 1944", "June 22, 1941", "September 1, 1939"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "When was the city of Rome, Italy founded?",
    correct_answer: "753 BCE",
    incorrect_answers: ["902 BCE", "524 BCE", "697 BCE"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 1939, Britain and France declared war on Germany after it invaded which country?",
    correct_answer: "Poland",
    incorrect_answers: ["Czechoslovakia", "Austria", "Hungary"]
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
      "To what political party did Abraham Lincoln belong when elected POTUS?",
    correct_answer: "Republican",
    incorrect_answers: ["Democrat", "Independent", "Whig"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "When did the British hand-over sovereignty of Hong Kong back to China?",
    correct_answer: "1997",
    incorrect_answers: ["1999", "1841", "1900"]
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
    question: "What was the original name of New York City?",
    correct_answer: "New Amsterdam",
    incorrect_answers: ["New London", "New Paris", "New Rome"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 1961, an American B-52 aircraft crashed and nearly detonated two 4mt nuclear bombs over which US city?",
    correct_answer: "Goldsboro, North Carolina",
    incorrect_answers: [
      "Hicksville, New York",
      "Jacksonville, Florida",
      "Conway, Arkansas"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When was the People's Republic of China founded?",
    correct_answer: "October 1, 1949",
    incorrect_answers: ["April 3, 1947", "May 7, 1945", "December 6, 1950"]
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
    difficulty: "hard",
    question:
      "What did the abbreviation 'RMS' stand for in the RMS Titanic in 1912?",
    correct_answer: "Royal Mail Ship",
    incorrect_answers: [
      "Royal Majesty Service",
      "Regular Maritime Schedule ",
      "Regulated Maelstrom Sensor"
    ]
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
      "In addition to his career as an astrologer and 'prophet', Nostradamus published a 1555 treatise that included a section on what?",
    correct_answer: "Making jams and jellies",
    incorrect_answers: [
      "Teaching parrots to talk",
      "Cheating at card games",
      "Digging graves"
    ]
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
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Pianist Frederic Chopin was a composer of which musical era?",
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
    difficulty: "medium",
    question: "Joseph Smith was the founder of what religion?",
    correct_answer: "Mormonism",
    incorrect_answers: ["Buddhism", "Christianity", "Hinduism"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What historical event was Tchaikovsky's 1812 Overture referencing?",
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
    question:
      "In relation to the British Occupation in Ireland, what does the IRA stand for.",
    correct_answer: "Irish Republican Army",
    incorrect_answers: [
      "Irish Rebel Alliance",
      "Irish Reformation Army",
      "Irish-Royal Alliance"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "In what year did the Wall Street Crash take place?",
    correct_answer: "1929",
    incorrect_answers: ["1932", "1930", "1925"]
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
      "Washington's Spies",
      "Unnamed"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the first explorer to sail to North America?",
    correct_answer: "Leif Erikson",
    incorrect_answers: [
      "Christopher Columbus",
      "Amerigo Vespucci",
      "Ferdinand Magellan"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "The crown of the Empire State Building was originally built for what purpose?",
    correct_answer: "Airship Dock",
    incorrect_answers: ["Lightning Rod", "Antennae", "Flag Pole"]
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
      "All of the following are names of the Seven Warring States EXCEPT:",
    correct_answer: "Zhai (翟)",
    incorrect_answers: ["Zhao (趙)", "Qin (秦)", "Qi (齊)"]
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
    question: "List the following Iranic empires in chronological order:",
    correct_answer: "Median, Achaemenid, Parthian, Sassanid",
    incorrect_answers: [
      "Median, Achaemenid, Sassanid, Parthian",
      "Achaemenid, Median, Parthian, Sassanid",
      "Achaemenid, Median, Sassanid, Parthian"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "The original Roman alphabet lacked the following letters EXCEPT:",
    correct_answer: "X",
    incorrect_answers: ["W", "U", "J"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was the United States National Security Agency established?",
    correct_answer: "November 4, 1952",
    incorrect_answers: ["July 26, 1908", "July 1, 1973", "November 25, 2002"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "On which day did ARPANET suffer a 4 hour long network crash?",
    correct_answer: "October 27, 1980",
    incorrect_answers: [
      "November 21, 1969",
      "October 29, 1969",
      "December 9, 1991"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "On which day did the attempted coup d'etat of 1991 in the Soviet Union begin?",
    correct_answer: "August 19",
    incorrect_answers: ["August 21", "December 26", "December 24"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "On which day did construction start on 'The Pentagon', the headquarters for the United States Department of Defense?",
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
    question:
      "In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?",
    correct_answer: "Chile",
    incorrect_answers: ["Peru", "Brazil", "Argentina"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What did the first vending machines in the early 1880's dispense?",
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
    difficulty: "hard",
    question: "When was the SS or Schutzstaffel established?",
    correct_answer: "April 4th, 1925",
    incorrect_answers: [
      "September 1st, 1941",
      "March 8th, 1935",
      "February 21st, 1926"
    ]
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
    difficulty: "easy",
    question: "Who was the first president of the United States?",
    correct_answer: "George Washington",
    incorrect_answers: ["James Madison", "Thomas Jefferson", "James K. Polk"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "How many times was Albert Einstein married in his lifetime?",
    correct_answer: "Twice",
    incorrect_answers: ["Five", "Thrice", "Once"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Joseph Stalin had a criminal past doing what?",
    correct_answer: "Robbing trains",
    incorrect_answers: ["Pedophilia", "Tax evation", "Identity Fraud"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the real name of the Albanian national leader Skanderbeg?",
    correct_answer: "Gjergj Kastrioti",
    incorrect_answers: ["Diturak Zhulati", "Iskander Bejko", "Mirash Krasniki"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What is the oldest US state?",
    correct_answer: "Delaware",
    incorrect_answers: ["Rhode Island", "Maine", "Virginia"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "When did Lithuania declare independence from the Soviet Union?",
    correct_answer: "March 11th, 1990",
    incorrect_answers: [
      "December 25th, 1991",
      "December 5th, 1991",
      "April 20th, 1989"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the bloodiest event in United States history, in terms of casualties?",
    correct_answer: "Battle of Antietam",
    incorrect_answers: ["Pearl Harbor", "September 11th", "D-Day"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which building was set aflame on August 24th, 1812?",
    correct_answer: "The White House",
    incorrect_answers: [
      "Parliament Building",
      "Grand National Assembly Building",
      "Palace of the Nation"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What was Genghis Khan's real name?",
    correct_answer: "Temujin",
    incorrect_answers: ["Mongke", "ogedei", "Temur"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did Norway get its constitution?",
    correct_answer: "1814",
    incorrect_answers: ["1932", "1905", "1854"]
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
    question: "Which historical conflict killed the most people?",
    correct_answer: "World War II",
    incorrect_answers: [
      "Taiping Rebellion",
      "Three Kingdoms War",
      "Mongol conquests"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "In what year did the First World War end?",
    correct_answer: "1918",
    incorrect_answers: ["1914", "1916", "1912"]
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
    difficulty: "hard",
    question:
      "What was the name of the German offensive operation in October 1941 to take Moscow before winter?",
    correct_answer: "Operation Typhoon",
    incorrect_answers: [
      "Operation Sunflower",
      "Operation Barbarossa",
      "Case Blue"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following was not one of Joseph Stalin's ten blows during World War II?",
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
    difficulty: "easy",
    question: "How old was Adolf Hitler when he died?",
    correct_answer: "56",
    incorrect_answers: ["43", "65", "47"]
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
      "What year did Skoal, a smokeless Tobacco company, release their first line of Pouches, known as 'Skoal Bandits'?",
    correct_answer: "1983",
    incorrect_answers: ["1934", "1984", "1822"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When was the Grand Patriotic War in the USSR concluded?",
    correct_answer: "May 9th, 1945",
    incorrect_answers: [
      "September 2nd, 1945",
      "August 9th, 1945",
      "December 11th, 1945"
    ]
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
    difficulty: "hard",
    question:
      "Toussaint Louverture led a successful slave revolt in which country?",
    correct_answer: "Haiti",
    incorrect_answers: ["France", "Cuba", "United States"]
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
    difficulty: "hard",
    question: "When did the French Revolution begin?",
    correct_answer: "1789",
    incorrect_answers: ["1823", "1756", "1799"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which naval battle was considered the turning point of the Pacific Ocean Theater during World War 2?",
    correct_answer: "Battle of Midway",
    incorrect_answers: [
      "Attack on Truk Island",
      "Attack on Pearl Harbor",
      "Battle of the Coral Sea"
    ]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what year did Neil Armstrong and Buzz Aldrin land on the moon?",
    correct_answer: "1969",
    incorrect_answers: ["1965", "1966", "1973"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "America's Strategic Defense System during the Cold War was nicknamed after this famous movie.",
    correct_answer: "Star Wars",
    incorrect_answers: ["Jaws", "Blade Runner", "Alien"]
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
    question:
      "The Battle of the Somme in World War I took place in which country?",
    correct_answer: "France",
    incorrect_answers: ["Germany", "Italy", "Austria"]
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
    question: "In what year was the last natural case of smallpox documented?",
    correct_answer: "1977",
    incorrect_answers: ["1982", "1980", "1990"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these countries remained neutral during World War II?",
    correct_answer: "Switzerland",
    incorrect_answers: ["United Kingdom", "France", "Italy"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "The collapse of the Soviet Union took place in which year?",
    correct_answer: "1991",
    incorrect_answers: ["1992", "1891", "1990"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was 'The Gadget', the first nuclear device to be detonated, tested?",
    correct_answer: "July 16, 1945",
    incorrect_answers: ["June 22, 1945", "August 6, 1945", "April 5, 1945"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "In which year did the Invasion of Kuwait by Iraq occur?",
    correct_answer: "1990",
    incorrect_answers: ["1992", "1988", "1986"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "When did the Battle of the Somme begin?",
    correct_answer: "July 1st, 1916",
    incorrect_answers: ["August 1st, 1916", "July 2nd, 1916", "June 30th, 1916"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "In what year did the North American Video Game Crash occur?",
    correct_answer: "1983",
    incorrect_answers: ["1982", "1993", "1970"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 1720, England was in massive debt, and became in involved in the South Sea Bubble. Who was the main mastermind behind it?",
    correct_answer: "John Blunt",
    incorrect_answers: ["Daniel Defoe", "Robert Harley", "John Churchill"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "During the Roman Triumvirate of 42 BCE, what region of the Roman Republic was given to Lepidus?",
    correct_answer: "Hispania ",
    incorrect_answers: ["Italia", "Gallia", "Asia"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "The Second Boer War in 1899 was fought where?",
    correct_answer: "South Africa",
    incorrect_answers: ["Argentina", "Nepal", "Bulgaria"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Who tutored Alexander the Great?",
    correct_answer: "Aristotle",
    incorrect_answers: ["Socrates", "Plato", "King Philip"]
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
    difficulty: "medium",
    question: "What nationality was sultan Saladin?",
    correct_answer: "Kurdish",
    incorrect_answers: ["Arab", "Egyptian", "Syrian"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which WWII tank ace is credited with having destroyed the most tanks?",
    correct_answer: "Kurt Knispel",
    incorrect_answers: ["Michael Wittmann", "Walter Kniep", "Otto Carius"]
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
    question: "What was Napoleon Bonaparte's name before he changed it?",
    correct_answer: "Napoleone di Buonaparte",
    incorrect_answers: [
      "Naapolion van Bonijpaart",
      "Napoleao do Boaparte",
      "Napoleona de Buenoparte"
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
    difficulty: "hard",
    question: "The Battle of Hastings was fought in which year?",
    correct_answer: "1066",
    incorrect_answers: ["911", "1204", "1420"]
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
      "What was the bloodiest single-day battle during the American Civil War?",
    correct_answer: "The Battle of Antietam",
    incorrect_answers: [
      "The Siege of Vicksburg",
      "The Battle of Gettysburg",
      "The Battles of Chancellorsville"
    ]
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
    difficulty: "medium",
    question:
      "Who is attributed credit for recording the epic poem The Odyssey?",
    correct_answer: "Homer",
    incorrect_answers: ["Aristotle", "Odysseus", "Socrates"]
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
    difficulty: "easy",
    question:
      "The 'Trail of Tears' was a result of which United States President's Indian Removal Policy?",
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
    question: "In which year was Constantinople conquered by the Turks?",
    correct_answer: "1453",
    incorrect_answers: ["1435", "1454", "1440"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "In which years did the Battle of Gallipoli take place?",
    correct_answer: "1915 - 1916",
    incorrect_answers: ["1914 - 1918", "1914 - 1915", "1915 - 1918"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what year did Kentucky become the 15th state to join the union?",
    correct_answer: "1792",
    incorrect_answers: ["1782", "1798", "1788"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following countries was the first to send an object into space?",
    correct_answer: "Germany",
    incorrect_answers: ["USA", "Russia", "China"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which country was an allied power in World War II?",
    correct_answer: "Soviet Union",
    incorrect_answers: ["Italy", "Germany", "Japan"]
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
    difficulty: "easy",
    question:
      "Which modern country is known as 'The Graveyard of Empires'?",
    correct_answer: "Afghanistan",
    incorrect_answers: ["China", "Iraq", "Russia"]
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
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What European country is not a part of the EU?",
    correct_answer: "Norway",
    incorrect_answers: ["Lithuania", "Ireland", "Czechia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the only country in the world with a flag that doesn't have four right angles?",
    correct_answer: "Nepal",
    incorrect_answers: ["Panama", "Angola", "Egypt"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "What state is the largest state of the United States of America?",
    correct_answer: "Alaska",
    incorrect_answers: ["California", "Texas", "Washington"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which country inside the United Kingdom does NOT appear on its flag, the Union Jack?",
    correct_answer: "Wales",
    incorrect_answers: ["Scotland", "Ireland", "Isle of Wight"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Indonesia?",
    correct_answer: "Jakarta",
    incorrect_answers: ["Bandung", "Medan", "Palembang"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these countries is NOT a part of the Asian continent?",
    correct_answer: "Suriname",
    incorrect_answers: ["Georgia", "Russia", "Singapore"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these is NOT a city in Saudi Arabia?",
    correct_answer: "Dubai",
    incorrect_answers: ["Riyadh", "Mecca", "Medina"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which city is the capital of Switzerland?",
    correct_answer: "Bern",
    incorrect_answers: ["Zurich", "Frankfurt", "Wien"]
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
    difficulty: "hard",
    question:
      "The prefix Sino- (As in Sino-American) is used to refer to what nationality?",
    correct_answer: "Chinese",
    incorrect_answers: ["Japanese", "Russian", "Indian"]
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
    question: "What colour is the circle on the Japanese flag?",
    correct_answer: "Red",
    incorrect_answers: ["White", "Yellow", "Black"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "If soccer is called football in England, what is American football called in England?",
    correct_answer: "American football",
    incorrect_answers: ["Combball", "Handball", "Touchdown"]
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
      "Which of the following European languages is classified as a 'language isolate?'",
    correct_answer: "Basque",
    incorrect_answers: ["Galician", "Maltese", "Hungarian"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following countries is within the Eurozone but outside of the Schengen Area?",
    correct_answer: "Cyprus",
    incorrect_answers: ["Malta", "Greece", "Portugal"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "The following Spanish provinces are located in the northern area of Spain except:",
    correct_answer: "Murcia",
    incorrect_answers: ["Asturias", "Navarre", "Leon"]
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
      "All of the following are towns/villages in the Pacific Island nation of Kiribati EXCEPT:",
    correct_answer: "Urutora",
    incorrect_answers: ["Rungata", "London", "Washington"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following countries banned the use of personal genetic ancestry tests?",
    correct_answer: "Germany",
    incorrect_answers: ["Austria", "Canada", "Sweden"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the 15th letter of the Greek alphabet?",
    correct_answer: "Omicron (&Omicron;)",
    incorrect_answers: ["Sigma (&Sigma;)", "Pi (&Pi;)", "Nu (&Nu;)"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT an island that is part of the Philippines?",
    correct_answer: "Java",
    incorrect_answers: ["Luzon", "Mindanao", "Palawan"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "The World Health Organization headquarters is located in which European country?",
    correct_answer: "Switzerland",
    incorrect_answers: ["United Kingdom", "France", "Belgium"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "What name was historically used for the Turkish city currently known as Istanbul?",
    correct_answer: "Constaninople",
    incorrect_answers: ["Hudavendigar", "Soğut", "Adrianople"]
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
    difficulty: "medium",
    question: "What event led to Liechenstein adding a crown to its flag?",
    correct_answer: "The 1936 Olympics",
    incorrect_answers: [
      "Coronation of Prince Johann I Joseph in 1805",
      "Charles VI's decree in 1719",
      "Signing of the 1862 Constitution of Liechtenstein"
    ]
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
    difficulty: "hard",
    question: "How many countries border Kyrgyzstan?",
    correct_answer: "4",
    incorrect_answers: ["3", "1", "6"]
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
    question: "The Hunua Ranges is located in...",
    correct_answer: "New Zealand",
    incorrect_answers: ["Nepal", "China", "Mexico"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What tiny principality lies between Spain and France?",
    correct_answer: "Andorra",
    incorrect_answers: ["Liechtenstein", "Monaco", "San Marino"]
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
    question: "Which country has the abbreviation 'CH'?",
    correct_answer: "Switzerland",
    incorrect_answers: ["China", "Canada", "No Country"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the official German name of the Swiss Federal Railways?",
    correct_answer: "Schweizerische Bundesbahnen",
    incorrect_answers: [
      "Schweizerische Nationalbahnen",
      "Bundesbahnen der Schweiz",
      "Schweizerische Staatsbahnen"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "The Space Needle is located in which city?",
    correct_answer: "Seattle",
    incorrect_answers: ["Los Angles", "Toronto", "Vancouver"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "How tall is One World Trade Center in New York City?",
    correct_answer: "1,776 ft",
    incorrect_answers: ["1,888 ft", "1,225 ft", "1,960 ft"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the smallest country in South America by area?",
    correct_answer: "Suriname",
    incorrect_answers: ["Brazil", "Uruguay", "Chile"]
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
    difficulty: "easy",
    question: "What is Canada's smallest province?",
    correct_answer: "Prince Edward Island",
    incorrect_answers: ["New Brunswick", "Nova Scotia", "Yukon"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Polish city known to Germans as Danzig?",
    correct_answer: "Gdańsk",
    incorrect_answers: ["Warsaw", "Zakopane", "Poznań"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of New Zealand's indigenous people?",
    correct_answer: "Maori",
    incorrect_answers: ["Vikings", "Polynesians", "Samoans"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the smallest country in the world?",
    correct_answer: "Vatican City",
    incorrect_answers: ["Maldives", "Monaco", "Malta"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Broome is a town in which state of Australia?",
    correct_answer: "Western Australia",
    incorrect_answers: ["Northern Territory", "South Australia", "Tasmania"]
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
    difficulty: "medium",
    question: "What is the capital city of New Zealand?",
    correct_answer: "Wellington",
    incorrect_answers: ["Auckland", "Christchurch", "Melbourne"]
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
    difficulty: "medium",
    question: "What is the capital city of Slovenia?",
    correct_answer: "Ljubljana",
    incorrect_answers: ["Maribor", "Velenje", "Trbovlje"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is NOT a capital city?",
    correct_answer: "Sydney",
    incorrect_answers: ["Cairo", "Moscow", "Beijing"]
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
    difficulty: "hard",
    question: "What country is not a part of Scandinavia?",
    correct_answer: "Finland",
    incorrect_answers: ["Norway", "Sweden", "Denmark"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the largest city and commercial capital of Sri Lanka?",
    correct_answer: "Colombo",
    incorrect_answers: ["Moratuwa", "Negombo", "Kandy"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "On a London Underground map, what colour is the Circle Line?",
    correct_answer: "Yellow",
    incorrect_answers: ["Red", "Blue", "Green"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the former country that was succeeded by countries such as Serbia, Croatia and Slovenia?",
    correct_answer: "Yugoslavia",
    incorrect_answers: ["Czechoslovakia", "Abkhazia", "South Ossetia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "How many counties in the Republic of Ireland.",
    correct_answer: "26",
    incorrect_answers: ["32", "28", "30"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is NOT a city in India?",
    correct_answer: "Islamabad",
    incorrect_answers: ["Hyderabad", "Ahmedabad", "Ghaziabad"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these is NOT an Australian state or territory?",
    correct_answer: "Alberta",
    incorrect_answers: ["New South Wales", "Victoria", "Queensland"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Chile?",
    correct_answer: "Santiago",
    incorrect_answers: ["Valparaiso", "Copiapo", "Antofagasta"]
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
    question:
      "Which European city has the highest mileage of canals in the world?",
    correct_answer: "Birmingham",
    incorrect_answers: ["Venice", "Amsterdam", "Berlin"]
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
    difficulty: "hard",
    question: "Which of these is NOT a province in China?",
    correct_answer: "Yangtze",
    incorrect_answers: ["Fujian", "Sichuan", "Guangdong"]
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
    difficulty: "easy",
    question:
      "The derisive acronym 'PIIGS' refers to which of the following European countries and their economic statuses?",
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
    difficulty: "easy",
    question: "Which Russian oblast forms a border with Poland?",
    correct_answer: "Kaliningrad",
    incorrect_answers: ["Samara", "Nizhny Novgorod", "Omsk"]
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
    difficulty: "easy",
    question: "Which of the following former Yugoslavian states is landlocked?",
    correct_answer: "Serbia",
    incorrect_answers: ["Bosnia and Herzegovina", "Montenegro", "Croatia"]
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
    difficulty: "hard",
    question:
      "In 2012 the German-speaking microstate 'Liechtenstein' in Central Europe had a population of how many inhabitants?",
    correct_answer: "36,600",
    incorrect_answers: ["2,400", "90,000", "323,400"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Where is Earth's South Magnetic Pole?",
    correct_answer: "The North Pole",
    incorrect_answers: ["The South Pole", "The Tropic of Cancer", "The Equator"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these countries is located the FURTHEST away from the South China Sea?",
    correct_answer: "Bangladesh",
    incorrect_answers: ["Malaysia", "Vietnam", "Philippines"]
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
    difficulty: "easy",
    question: "How many time zones does China have?",
    correct_answer: "1",
    incorrect_answers: ["3", "4", "2"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the official language of Costa Rica?",
    correct_answer: "Spanish",
    incorrect_answers: ["English", "Portuguese", "Creole"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Where are the Nazca Lines located?",
    correct_answer: "Peru",
    incorrect_answers: ["Brazil", "Colombia", "Ecuador"]
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
    difficulty: "medium",
    question:
      "The towns of Brugelette, Arlon and Ath are located in which country?",
    correct_answer: "Belgium",
    incorrect_answers: ["Andorra", "France", "Luxembourg"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of the US State of New York?",
    correct_answer: "Albany",
    incorrect_answers: ["Buffalo", "New York", "Rochester"]
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
    question: "What is the busiest port in Europe?",
    correct_answer: "Port of Rotterdam",
    incorrect_answers: [
      "Port of Antwerp",
      "Port of Hamburg",
      "Port of Amsterdam"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of British Columbia, Canada?",
    correct_answer: "Victoria",
    incorrect_answers: ["Vancouver", "Hope", "Kelowna"]
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
    question: "How many countries does Mexico border?",
    correct_answer: "3",
    incorrect_answers: ["2", "4", "1"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Seychelles?",
    correct_answer: "Victoria",
    incorrect_answers: ["Luanda", "N'Djamena", "Tripoli"]
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
    question: "What is the highest mountain in the world?",
    correct_answer: "Mt. Everest",
    incorrect_answers: ["Mount Godwin Austen", "Kangchenjunga", "Annapurna"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What city has the busiest airport in the world?",
    correct_answer: "Atlanta, Georgia USA",
    incorrect_answers: [
      "London, England",
      "Chicago,Illinois ISA",
      "Tokyo,Japan"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Andaman and Nicobar Islands in South East Asia are controlled by which country?",
    correct_answer: "India",
    incorrect_answers: ["Vietnam", "Thailand", "Indonesia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the largest country in the world?",
    correct_answer: "Russia",
    incorrect_answers: ["Canada", "China", "United States"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the capital of Mauritius?",
    correct_answer: "Port Louis",
    incorrect_answers: ["Port Moresby", "Port Vila", "Port-au-Prince"]
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
    difficulty: "medium",
    question: "Which of the following is the longest river in Europe?",
    correct_answer: "Volga",
    incorrect_answers: ["Danube", "Ural", "Dnieper"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Lithuania?",
    correct_answer: "Vilnius",
    incorrect_answers: ["Tallinn", "Helsinki", "Riga"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Scotland?",
    correct_answer: "Edinburgh",
    incorrect_answers: ["Glasgow", "Dundee", "London"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Which country was NOT part of the Soviet Union?",
    correct_answer: "Romania",
    incorrect_answers: ["Turkmenistan", "Belarus", "Tajikistan"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which is the world's longest river?",
    correct_answer: "Nile",
    incorrect_answers: ["Missouri", "Amazon", "Yangtze"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "The Alps are a mountain range on which continent?",
    correct_answer: "Europe",
    incorrect_answers: ["North America", "Asia", "Africa"]
  },

  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of the American state of Arizona?",
    correct_answer: "Phoenix",
    incorrect_answers: ["Montgomery", "Tallahassee", "Raleigh"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Peru?",
    correct_answer: "Lima",
    incorrect_answers: ["Santiago", "Montevideo", "Buenos Aires"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What country is the second largest in the world by area?",
    correct_answer: "Canada",
    incorrect_answers: ["Russia", "China", "United States of America"]
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
    question: "How many sovereign states are members of the United Nations?",
    correct_answer: "195",
    incorrect_answers: ["201", "153", "178"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these countries is 'doubly landlocked' (surrounded entirely by one or more landlocked countries)?",
    correct_answer: "Uzbekistan",
    incorrect_answers: ["Switzerland", "Bolivia", "Ethiopia"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the largest non-continental island in the world?",
    correct_answer: "Greenland",
    incorrect_answers: ["New Guinea", "Borneo", "Madagascar"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these island countries is located in the Caribbean?",
    correct_answer: "Barbados",
    incorrect_answers: ["Fiji", "Maldives", "Seychelles"]
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
    difficulty: "easy",
    question: "How many federal states does Germany have?",
    correct_answer: "16",
    incorrect_answers: ["13", "32", "25"]
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
    question:
      "Which of the following Inuit languages was the FIRST to use a unique writing system not based on the Latin alphabet?",
    correct_answer: "Inuktitut",
    incorrect_answers: ["Inuinnaqtun", "Greenlandic", "Inupiat"]
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
    question: "Where is the Luxor Hotel & Casino located?",
    correct_answer: "Paradise, Nevada",
    incorrect_answers: [
      "Las Vegas, Nevada",
      "Winchester, Nevada",
      "Jackpot, Nevada"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "How many countries are larger than Australia?",
    correct_answer: "5",
    incorrect_answers: ["4", "7", "6"]
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
    difficulty: "easy",
    question: "What country has a horizontal bicolor red and white flag?",
    correct_answer: "Monaco",
    incorrect_answers: ["Bahrain", "Malta", "Liechenstein"]
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
    difficulty: "medium",
    question: "Which German city is located on the River Isar?",
    correct_answer: "Munich",
    incorrect_answers: ["Berlin", "Hamburg", "Dortmund"]
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
    difficulty: "medium",
    question: "What is the right way to spell the capital of Hungary?",
    correct_answer: "Budapest",
    incorrect_answers: ["Boodapest", "Bhudapest", "Budapast"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Capital of the United States?",
    correct_answer: "Washington, D.C.",
    incorrect_answers: ["Los Angelas, CA", "New York City, NY", "Houston, TX"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "Where is the fast food chain 'Panda Express' headquartered?",
    correct_answer: "Rosemead, California",
    incorrect_answers: [
      "Sacremento, California",
      "Fresno, California",
      "San Diego, California"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is the area of Vatican City?",
    correct_answer: "0.44km^2",
    incorrect_answers: ["0.10km^2", "0.86km^2", "12.00km^2"]
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
    question: "Which country has three capital cities?",
    correct_answer: "South Africa",
    incorrect_answers: ["Somalia", "China", "United Kingdom"]
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
    difficulty: "easy",
    question:
      "Which country is the home of the largest Japanese population outside of Japan?",
    correct_answer: "Brazil",
    incorrect_answers: ["China", "Russia", "The United States"]
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
    difficulty: "hard",
    question:
      "What North American tourist attraction is served by the 'Maid of the Mist' tour company?",
    correct_answer: "Niagara Falls",
    incorrect_answers: [
      "Whistler, British Columbia",
      "Disney World",
      "Yosemite National Park"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of rocky region that spans most of eastern Canada?",
    correct_answer: "Canadian Shield",
    incorrect_answers: ["Rocky Mountains", "Appalachian Mountains", "Himalayas"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "How many stars are featured on New Zealand's flag?",
    correct_answer: "4",
    incorrect_answers: ["5", "2", "0"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following Japanese islands is the biggest?",
    correct_answer: "Honshu",
    incorrect_answers: ["Hokkaido", "Shikoku", "Kyushu"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Belarus?",
    correct_answer: "Minsk",
    incorrect_answers: ["Warsaw", "Kiev", "Vilnius"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "The land mass of modern day Turkey is called what?",
    correct_answer: "Anatolia",
    incorrect_answers: ["Ismuth of Ottoma", "Ottoma", "Ismuth of Anatolia"]
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
    question: "What is the capital of India?",
    correct_answer: "New Delhi",
    incorrect_answers: ["Bejing", "Montreal", "Tithi"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these cities has a 4° East longitude. ",
    correct_answer: "Amsterdam",
    incorrect_answers: ["Rio de Janero", "Toronto", "Hong Kong"]
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
    difficulty: "medium",
    question:
      "Colchester Overpass, otherwise known as 'Bunny Man Bridge', is located where?",
    correct_answer: "Fairfax County, Virginia",
    incorrect_answers: [
      "Medford, Oregon",
      "Braxton County, Virgina",
      "Lemon Grove, California"
    ]
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
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of South Korea?",
    correct_answer: "Seoul",
    incorrect_answers: ["Pyongyang", "Taegu", "Kitakyushu"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which small country is located between the borders of France and Spain?",
    correct_answer: "Andorra",
    incorrect_answers: ["San Marino", "Vatican City", "Lichtenstein"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these country's capitals starts with the letter B?",
    correct_answer: "Lebanon",
    incorrect_answers: ["Jordan", "Kuwait", "Qatar"]
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
    question: "Which state of the United States is the smallest?",
    correct_answer: "Rhode Island ",
    incorrect_answers: ["Maine", "Vermont", "Massachusetts"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "The body of the Egyptian Sphinx was based on which animal?",
    correct_answer: "Lion",
    incorrect_answers: ["Bull", "Horse", "Dog"]
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
    difficulty: "medium",
    question: "How many countries are inside the United Kingdom?",
    correct_answer: "Four",
    incorrect_answers: ["Two", "Three", "One"]
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
    question: "What is the capital of Australia?",
    correct_answer: "Canberra",
    incorrect_answers: ["Sydney", "Melbourne", "Brisbane"]
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
    difficulty: "hard",
    question:
      "What is the name of one of the Neo-Aramaic languages spoken by the Jewish population from Northwestern Iraq?",
    correct_answer: "Lishana Deni",
    incorrect_answers: [
      "Hulaula",
      "Lishan Didan",
      "Chaldean Neo-Aramaic"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following language families is the most controversial amongst modern linguists?",
    correct_answer: "Altaic",
    incorrect_answers: ["Sino-Tibetan", "Dravidian", "Indo-European"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the only state in the United States that does not have a flag in a shape with 4 edges?",
    correct_answer: "Ohio",
    incorrect_answers: ["Florida", "Idaho", "New Mexico"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "All of the following countries have official claims to territory in Antartica EXCEPT:",
    correct_answer: "United States",
    incorrect_answers: ["Australia", "Chile", "Norway"]
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
    question: "Where is the area commonly known as the Bermuda Triangle?",
    correct_answer: "North Atlantic Ocean, between Florida and Puerto Rico",
    incorrect_answers: [
      "North Pacific Ocean, between Japan and the USA",
      "In the Caribbean Sea",
      "South Pacific Ocean, far off Chile"
    ]
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
    question: "Which US state has the highest population?",
    correct_answer: "California",
    incorrect_answers: ["New York", "Texas", "Florida"]
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
    question: "What is the capital of the State of Washington, United States?",
    correct_answer: "Olympia",
    incorrect_answers: ["Washington D.C.", "Seattle", "Yukon"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is the name of the largest city in the US state Tennessee?",
    correct_answer: "Memphis",
    incorrect_answers: ["Thebes", "Alexandria", "Luxor"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the largest lake in the African continent?",
    correct_answer: "Lake Victoria",
    incorrect_answers: ["Lake Tanganyika", "Lake Malawi", "Lake Turkana"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these African countries list 'Spanish' as an official language?",
    correct_answer: "Equatorial Guinea",
    incorrect_answers: ["Guinea", "Cameroon", "Angola"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "Where is the world's oldest still operational space launch facility located?",
    correct_answer: "Kazakhstan",
    incorrect_answers: ["Russia", "Iran", "United States"]
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
    difficulty: "hard",
    question: "What is the Finnish word for 'Finland'?",
    correct_answer: "Suomi",
    incorrect_answers: ["Eesti", "Magyarorszag", "Sverige"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "What is Canada's largest island?",
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
    question: "Which one of these countries borders with Poland?",
    correct_answer: "Lithuania",
    incorrect_answers: ["France", "Norway", "Netherlands"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Spain?",
    correct_answer: "Madrid",
    incorrect_answers: ["Barcelona", "Sevilla", "Toledo"]
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
      "What is the region conjoining Pakistan, India, and China with unknown leadership called?",
    correct_answer: "Kashmir",
    incorrect_answers: ["Andorra", "Gibraltar", "Quin"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "What's the first National Park designated in the United States?",
    correct_answer: "Yellowstone",
    incorrect_answers: ["Sequoia ", "Yosemite", "Rocky Mountain"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What was the most populous city in the Americas in 2015?",
    correct_answer: "Sao Paulo",
    incorrect_answers: ["New York", "Mexico City", "Los Angeles"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Estonia?",
    correct_answer: "Tallinn",
    incorrect_answers: ["Helsinki", "Tartu", "Riga"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Where is the 'Sonoran Desert' located?",
    correct_answer: "North America",
    incorrect_answers: ["South America", "Asia", "Africa"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the fifth largest country by area?",
    correct_answer: "Brazil",
    incorrect_answers: ["United States", "Australia", "India"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the most common climbing route for the second highest mountain in the world, K2?",
    correct_answer: "Abruzzi Spur",
    incorrect_answers: ["Magic Line", "Cesen Route", "Polish Line"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What continent is the country Lesotho in?",
    correct_answer: "Africa",
    incorrect_answers: ["Asia", "South America", "Europe"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "How many rivers are in Saudi Arabia?",
    correct_answer: "0",
    incorrect_answers: ["3", "2", "1"]
  },

  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "What does 'hippopotamus' mean and in what langauge?",
    correct_answer: "River Horse (Greek)",
    incorrect_answers: [
      "River Horse (Latin)",
      "Fat Pig (Greek)",
      "Fat Pig (Latin)"
    ]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question:
      "A carnivorous animal eats flesh, what does a nucivorous animal eat?",
    correct_answer: "Nuts",
    incorrect_answers: ["Nothing", "Fruit", "Seaweed"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "What type of animal is a natterjack?",
    correct_answer: "Toad",
    incorrect_answers: ["Bird", "Fish", "Insect"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "easy",
    question: "What is the fastest land animal?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Lion", "Thomson's Gazelle", "Pronghorn Antelope"]
  },
  {
    category: "Animals",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question: "What color/colour is a polar bear's skin?",
    correct_answer: "Black",
    incorrect_answers: ["White", "Pink", "Green"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "easy",
    question: "Hippocampus is the Latin name for which marine creature?",
    correct_answer: "Seahorse",
    incorrect_answers: ["Dolphin", "Whale", "Octopus"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "Cashmere is the wool from which kind of animal?",
    correct_answer: "Goat",
    incorrect_answers: ["Sheep", "Camel", "Llama"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "What is the scientific name for the 'Polar Bear'?",
    correct_answer: "Ursus Maritimus",
    incorrect_answers: ["Polar Bear", "Ursus Spelaeus", "Ursus Arctos"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "What are rhino's horn made of?",
    correct_answer: "Keratin",
    incorrect_answers: ["Bone", "Ivory", "Skin"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "easy",
    question: "How many legs do butterflies have?",
    correct_answer: "6",
    incorrect_answers: ["2", "4", "0"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "What scientific suborder does the family Hyaenidae belong to?",
    correct_answer: "Feliformia",
    incorrect_answers: ["Haplorhini", "Caniformia", "Ciconiiformes"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "How many known living species of hyenas are there?",
    correct_answer: "4",
    incorrect_answers: ["8", "2", "6"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "What scientific family does the Aardwolf belong to?",
    correct_answer: "Hyaenidae",
    incorrect_answers: ["Canidae", "Felidae", "Eupleridae"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "For what reason would a spotted hyena 'laugh'?",
    correct_answer: "Nervousness",
    incorrect_answers: ["Excitement", "Aggression", "Exhaustion"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "easy",
    question: "What do you call a baby bat?",
    correct_answer: "Pup",
    incorrect_answers: ["Cub", "Chick", "Kid"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "What is the scientific name of the cheetah?",
    correct_answer: "Acinonyx jubatus",
    incorrect_answers: ["Panthera onca", "Lynx rufus", "Felis catus"]
  },
  {
    category: "Animals",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "The now extinct species 'Thylacine' was native to where?",
    correct_answer: "Tasmania, Australia",
    incorrect_answers: [
      "Baluchistan, Pakistan",
      "Wallachia, Romania",
      "Oregon, United States"
    ]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these animals is NOT a lizard?",
    correct_answer: "Tuatara",
    incorrect_answers: ["Komodo Dragon", "Gila Monster", "Green Iguana"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "easy",
    question: "What is Grumpy Cat's real name?",
    correct_answer: "Tardar Sauce",
    incorrect_answers: ["Sauce", "Minnie", "Broccoli"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "What type of creature is a Bonobo?",
    correct_answer: "Ape",
    incorrect_answers: ["Lion", "Parrot", "Wildcat"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these species is not extinct?",
    correct_answer: "Komodo dragon",
    incorrect_answers: ["Japanese sea lion", "Tasmanian tiger", "Saudi gazelle"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "Unlike on most salamanders, this part of a newt is flat?",
    correct_answer: "Tail",
    incorrect_answers: ["Head", "Teeth", "Feet"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the copper-rich protein that creates the blue blood in the Antarctic octopus?",
    correct_answer: "Hemocyanin",
    incorrect_answers: ["Cytochrome", "Iron", "Methionine"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "Which species is a 'mountain chicken'?",
    correct_answer: "Frog",
    incorrect_answers: ["Chicken", "Horse", "Fly"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "The dish Fugu, is made from what family of fish?",
    correct_answer: "Pufferfish",
    incorrect_answers: ["Bass", "Salmon", "Mackerel"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "easy",
    question: "What is the collective noun for a group of crows?",
    correct_answer: "Murder",
    incorrect_answers: ["Pack", "Gaggle", "Herd"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is another name for the 'Poecilotheria Metallica Tarantula'?",
    correct_answer: "Gooty",
    incorrect_answers: ["Hopper", "Silver Stripe", "Woebegone"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "What is the scientific name of the Common Chimpanzee?",
    correct_answer: "Pan troglodytes",
    incorrect_answers: ["Gorilla gorilla", "Pan paniscus", "Panthera leo"]
  },

  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "easy",
    question:
      "Named after a character he played in a 1969 film, what is the name of the ski resort in Utah that Robert Redford bought in 1968?",
    correct_answer: "Sundance",
    incorrect_answers: ["Woodward", "Turner", "Booker"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "Which actress's real name was Frances Ethel Gumm?",
    correct_answer: "Judy Garland",
    incorrect_answers: ["Doris Day", "Julie Andrews", "Marilyn Monroe"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of Jontron's parrot?",
    correct_answer: "Jacques",
    incorrect_answers: ["Jak", "John", "Jaques"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the real name of the founder of the imageboard 4chan?",
    correct_answer: "Christopher Poole",
    incorrect_answers: ["Mark Zuckerberg", "Allison Harvard", "Catie Wayne"]
  },
  {
    category: "Celebrities",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "Paul McCartney has always used his middle name. What is his real first name? ",
    correct_answer: "James",
    incorrect_answers: ["John", "Jack", "Justin"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "easy",
    question: "By what name is Carlos Estevez better known? ",
    correct_answer: "Charlie Sheen",
    incorrect_answers: ["Ricky Martin", "Bruno Mars", "Joaquin Phoenix"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "easy",
    question: "Which actress married Michael Douglas in 2000?",
    correct_answer: "Catherine Zeta-Jones",
    incorrect_answers: ["Ruth Jones", "Pam Ferris", "Sara Sugarman"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "Donald J. Trump's Middle Name is...",
    correct_answer: "John",
    incorrect_answers: ["Jeff", "Jerald", "Jason"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year did radio icon Howard Stern start a job at radio station WNBC?",
    correct_answer: "1982",
    incorrect_answers: ["1985", "1984", "1995"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these people is NOT a part of the Internet comedy group Mega64?",
    correct_answer: "Jon Jafari",
    incorrect_answers: ["Rocco Botte", "Derrick Acosta", "Shawn Chatfield"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "What was the cause of death for Freddie Mercury?",
    correct_answer: "Pneumonia",
    incorrect_answers: ["Stomach Cancer", "HIV", "Brain Hemorrhage"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "When was Elvis Presley born?",
    correct_answer: "January 8, 1935",
    incorrect_answers: ["December 13, 1931", "July 18, 1940", "April 17, 1938"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the religion of famous singer 'Freddie Mercury'?",
    correct_answer: "Zoroastrianism",
    incorrect_answers: ["Paganism", "Ashurism", "Judaism"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "easy",
    question: "What does film maker Dan Bell typically focus his films on?",
    correct_answer: "Abandoned Buildings and Dead Malls",
    incorrect_answers: ["Historic Landmarks", "Action Films", "Documentaries "]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "easy",
    question: "What was the cause of Marilyn Monroes suicide?",
    correct_answer: "Drug Overdose",
    incorrect_answers: ["Knife Attack", "House Fire", "Gunshot"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "hard",
    question: "How tall is Tom Cruise?",
    correct_answer: "5ft 7in",
    incorrect_answers: [
      "5ft; 9in;",
      "5ft; 4in;",
      "5ft; 5in;"
    ]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "easy",
    question: "Gwyneth Paltrow has a daughter named...?",
    correct_answer: "Apple",
    incorrect_answers: ["Lily", "French", "Dakota"]
  },
  {
    category: "Celebrities",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "If he was still alive, in what year would Elvis Presley celebrate his 100th birthday?",
    correct_answer: "2035",
    incorrect_answers: ["2030", "2040", "2045"]
  },
  {
    category: "Celebrities",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question: "Which celebrity announced his presidency in 2015?",
    correct_answer: "Kanye West",
    incorrect_answers: ["Donald Trump", "Leonardo DiCaprio", "Miley Cyrus"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "easy",
    question: "Aubrey Graham is better known as",
    correct_answer: "Drake",
    incorrect_answers: ["Travis Scott", "Lil Wayne", "2 Chainz"]
  },
  {
    category: "Celebrities",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "Which famous New York Yankees outfielder did Marilyn Monroe marry?",
    correct_answer: "Joe DiMaggio",
    incorrect_answers: ["Tino Martinez", "Babe Ruth", "Mason Williams"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name of Marilyn Monroe's first husband?",
    correct_answer: "James Dougherty",
    incorrect_answers: ["Joe Dimaggio", "Kirk Douglas", "Arthur Miller"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which radio personality calls himself 'The King of All Media'?",
    correct_answer: "Howard Stern",
    incorrect_answers: ["Rush Limbaugh", "Pete Tong", "Ryan Seacrest"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "Nikki Diamond portrayed which Gladiator in the 1992 TV show 'Gladiators'?",
    correct_answer: "Scorpio",
    incorrect_answers: ["Jet", "Nightshade", "Falcon"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "Who out of these actresses is the youngest?",
    correct_answer: "Kiernan Shipka",
    incorrect_answers: ["Ariel Winter", "Emma Watson", "Bonnie Wright"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "In what year did 'Bob Ross' die?",
    correct_answer: "1995",
    incorrect_answers: ["1986", "1989", "1997"]
  },
  {
    category: "Celebrities",
    type: "multiple",
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
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question: "Neil Hamburger is played by which comedian?",
    correct_answer: "Gregg Turkington",
    incorrect_answers: ["Nathan Fielder", "Tim Heidecker", "Todd Glass"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "hard",
    question:
      "The eccentric natural philosopher Tycho Brahe kept what as a pet?",
    correct_answer: "Moose",
    incorrect_answers: ["Dog", "Bear", "Goat"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "Who is 'James Rolfe' better known as?",
    correct_answer: "The Angry Video Game Nerd",
    incorrect_answers: ["TotalBiscuit", "PeanutButterGamer", "PewDiePie"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which American celebrity died in 1977 playing golf in La Moraleja, Madrid?",
    correct_answer: "Bing Crosby",
    incorrect_answers: ["Elvis Presley", "Charlie Chaplin", "Groucho Marx"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "easy",
    question: "By which name is Ramon Estevez better known as?",
    correct_answer: "Martin Sheen",
    incorrect_answers: ["Charlie Sheen", "Ramon Sheen", "Emilio Estevez"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "hard",
    question: "Who was Donald Trump's first wife?",
    correct_answer: "Ivana Zelničkova",
    incorrect_answers: ["Melania Knauss", "Marla Maples", "Nancy Davis"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "hard",
    question: "Gabe Newell was born in which year?",
    correct_answer: "1962 ",
    incorrect_answers: ["1970", "1960", "1972"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "hard",
    question: "Billy Herrington is from which US state?",
    correct_answer: "New York",
    incorrect_answers: ["Arizona", "California", "Georgia"]
  },

  {
    category: "Animals",
    difficulty: "medium",
    question: "What is a palmiped? ",
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
    question: "What type of animal is a Flemish giant? ",
    correct_answer: "Rabbit",
    incorrect_answers: [
      "Rat",
      "Sheep",
      "Dog"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "How many legs does a lobster have? ",
    correct_answer: "10",
    incorrect_answers: [
      "6",
      "8",
      "12"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What type of animal is a Mexican hairless? ",
    correct_answer: "A dog",
    incorrect_answers: [
      "A cat",
      "A mole",
      "A rat"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Which of these celebrities tried out to be an Olympian?",
    correct_answer: "Geena Davis",
    incorrect_answers: [
      "Sigorney Weaver",
      "Taron Egerton",
      "Channing Tatum"
    ]
  },

  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Tom Hanks is most closely related to which U.S. president?",
    correct_answer: "Abraham Lincoln",
    incorrect_answers: [
      "Theodore Roosevelt",
      "John F. Kennedy",
      "Bill Clinton"
    ]
  },
  {
    category: "History",
    difficulty: "hard",
    question: "During the Wars of the Roses (1455 - 1487) which Englishman was dubbed 'the Kingmaker'?",
    correct_answer: "Richard Neville",
    incorrect_answers: [
      "Richard III",
      "Henry V",
      "Thomas Warwick"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Before becoming a daytime T.V. host, Jerry Springer used to be the mayor of what U.S. city?",
    correct_answer: "Cincinnati",
    incorrect_answers: [
      "Cleveland",
      "Kalamazoo",
      "Springfield"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "Which bird has the largest wingspan of any living bird? ",
    correct_answer: "The wandering albatross",
    incorrect_answers: [
      "The golden eagle",
      "The ostrich",
      "The blue heron"
    ]
  },

  {
    category: "Animals",
    difficulty: "medium",
    question: "Which adjective is used to describe a horse with two different colored patches, usually black and white? ",
    correct_answer: "Piebald",
    incorrect_answers: [
      "Mottled",
      "Speckled",
      "Two-toned"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "Which is the largest mammal in the world? ",
    correct_answer: "The Blue Whale",
    incorrect_answers: [
      "The African Elephant",
      "The White Rhino",
      "The Sperm Whale"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What kind of creature is a Portuguese man o' war? ",
    correct_answer: "Jelly fish",
    incorrect_answers: [
      "A squid",
      "A lizard",
      "A rat"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "How many arms do most starfish have? ",
    correct_answer: "5",
    incorrect_answers: [
      "8",
      "4",
      "6"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What is a cabbage white? ",
    correct_answer: "A butterly",
    incorrect_answers: [
      "A swallow",
      "A pigeon",
      "A hornet"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "Which creatures produce gossamer? ",
    correct_answer: "Spiders",
    incorrect_answers: [
      "Silk Worms",
      "Caterpillars",
      "Grasshoppers"
    ]
  },
  {
    category: "Movies",
    difficulty: "medium",
    question: "Which of these 'Hocus Pocus' stars is a direct descendant of an accused Salem witch?",
    correct_answer: "Sarah Jessica Parker",
    incorrect_answers: [
      "Bette Milder",
      "Kathy Najimy",
      "Doug Jones"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Which of these pop stars has two extra nipples?",
    correct_answer: "Harry Styles",
    incorrect_answers: [
      "Justin Bieber",
      "Shawn Mendes",
      "Ed Sheeran"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Rebel Wilson decided to become an actress after contracting what disease?",
    correct_answer: "Malaria",
    incorrect_answers: [
      "Syphilis",
      "Tuberculosis",
      "Emphesyma"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Chris Kirkpatrick auditioned for which band before forming 'N Sync?",
    correct_answer: "Backstreet Boys",
    incorrect_answers: [
      "New Kids on the Block",
      "98 Degrees",
      "Sugar Ray"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What is the natural habitat of arboreal animals? ",
    correct_answer: "In Trees",
    incorrect_answers: [
      "Underwater",
      "In grasslands",
      "Underground"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Which of these celebrities spent $2.2 million on a solid gold bathtub?",
    correct_answer: "Mike Tyson",
    incorrect_answers: [
      "Elton John",
      "Mariah Carey",
      "Madonna"
    ]
  },
  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Which one of these celebrities believes that leprechauns are real?",
    correct_answer: "Megan Fox",
    incorrect_answers: [
      "Kim Kardasian",
      "Jessica Simpson",
      "Mary J. Blige"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What kind of animal is a Komodo dragon? ",
    correct_answer: "A lizard",
    incorrect_answers: [
      "A dragon",
      "A fish",
      "A frog"
    ]
  },
  {
    category: "Animals",
    difficulty: "medium",
    question: "What are the male honey bees called that are the only members of the colony allowed to mate with the queen? ",
    correct_answer: "Drones",
    incorrect_answers: [
      "Studs",
      "Workers",
      "Adonises"
    ]
  },

  {
    category: "Celebrities",
    difficulty: "hard",
    question: "Ben Stiller's brother-in-law voices which SpongeBob Squarepants character?",
    correct_answer: "Squidward",
    incorrect_answers: [
      "Plankton",
      "Mr.Krabs",
      "Patrick"
    ]
  },

];

db.Question.remove({})
  .then(() => db.Question.collection.insertMany(questions))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
