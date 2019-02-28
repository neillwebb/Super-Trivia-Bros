const items = [
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who wrote the &quot;A Song of Ice And Fire&quot; fantasy novel series?",
    correct_answer: "George R. R. Martin",
    incorrect_answers: ["George Lucas", "George Orwell", "George Eliot"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which author and poet famously wrote the line, &quot;The female of the species is more deadly than the male&quot;?",
    correct_answer: "Rudyard Kipling",
    incorrect_answers: [
      "Edgar Allan Poe",
      "William Shakespeare",
      "William Wordsworth"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    correct_answer: "Badger",
    incorrect_answers: ["Fox", "Frog", "Rabbit"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which famous book is sub-titled &#039;The Modern Prometheus&#039;?",
    correct_answer: "Frankenstein",
    incorrect_answers: [
      "Dracula",
      "The Strange Case of Dr. Jekyll and Mr. Hyde ",
      "The Legend of Sleepy Hollow"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "Who wrote the novel &quot;Moby-Dick&quot;?",
    correct_answer: "Herman Melville",
    incorrect_answers: [
      "William Golding",
      "William Shakespeare",
      "J. R. R. Tolkien"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the name of Captain Nemo&#039;s submarine in &quot;20,000 Leagues Under the Sea&quot;?",
    correct_answer: "The Nautilus",
    incorrect_answers: ["The Neptune", "The Poseidon ", "The Atlantis"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the book &quot;The Martian&quot;, how long was Mark Watney trapped on Mars (in Sols)?",
    correct_answer: "549 Days",
    incorrect_answers: ["765 Days", "401 Days", "324 Days"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following is the world&#039;s best-selling book?",
    correct_answer: "The Lord of the Rings",
    incorrect_answers: [
      "The Little Prince",
      "Harry Potter and the Philosopher&#039;s Stone",
      "The Da Vinci Code"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Harry Potter universe, what is Cornelius Fudge&#039;s middle name?",
    correct_answer: "Oswald",
    incorrect_answers: ["James", "Harold", "Christopher"]
  },
  {
    category: "Entertainment: Books",
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
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "What is Hermione Granger&#039;s middle name?",
    correct_answer: "Jean",
    incorrect_answers: ["Jane", "Emma", "Jo"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
    correct_answer: "Gloin",
    incorrect_answers: ["Thorin Oakenshield", "Bombur", "Dwalin"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "What position does Harry Potter play in Quidditch?",
    correct_answer: "Seeker",
    incorrect_answers: ["Beater", "Chaser", "Keeper"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "By what nickname is Jack Dawkins known in the Charles Dickens novel, &#039;Oliver Twist&#039;?",
    correct_answer: "The Artful Dodger",
    incorrect_answers: ["Fagin", "Bull&rsquo;s-eye", "Mr. Fang"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "What is the fourth book of the Old Testament?",
    correct_answer: "Numbers",
    incorrect_answers: ["Genesis", "Exodus", "Leviticus"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question: "&quot;Green Eggs And Ham&quot; is a book by which author?",
    correct_answer: "Dr. Seuss",
    incorrect_answers: ["Beatrix Potter", "Roald Dahl", "A.A. Milne"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?",
    correct_answer: "Ian Fleming",
    incorrect_answers: ["Joseph Conrad", "John Buchan", "Graham Greene"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of the Mysterious Island, in Jules Verne&#039;s &quot;The Mysterious Island&quot;?",
    correct_answer: "Lincoln Island",
    incorrect_answers: [
      "Vulcania Island",
      "Prometheus Island",
      "Neptune Island"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "By what name was the author Eric Blair better known?",
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"]
  },
  {
    category: "Entertainment: Books",
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
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the &quot;Harry Potter&quot; series, what is Headmaster Dumbledore&#039;s full name?",
    correct_answer: "Albus Percival Wulfric Brian Dumbledore",
    incorrect_answers: [
      "Albus Valum Jetta Mobius Dumbledore",
      "Albus James Lunae Otto Dumbledore",
      "Albus Valencium Horatio Kul Dumbledore"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "In the &quot;The Hobbit&quot;, who kills Smaug?",
    correct_answer: "Bard",
    incorrect_answers: ["Bilbo Baggins", "Gandalf the Grey", "Frodo"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question: "How many Harry Potter books are there?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "6"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?",
    correct_answer: "Richard Bachman",
    incorrect_answers: ["J. D. Robb", "Mark Twain", "Lewis Carroll"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question: "What&#039;s Harry Potter&#039;s dad&#039;s name?",
    correct_answer: "James Potter",
    incorrect_answers: ["Joey Potter", "Frank Potter", "Hairy Potter Sr."]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "The novel &quot;Jane Eyre&quot; was written by what author? ",
    correct_answer: "Charlotte Bront&euml;",
    incorrect_answers: ["Emily Bront&euml;", "Jane Austen", "Louisa May Alcott"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who wrote the young adult novel &quot;The Fault in Our Stars&quot;?",
    correct_answer: "John Green",
    incorrect_answers: ["Stephenie Meyer", "Suzanne Collins", "Stephen Chbosky"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "J.K. Rowling completed &quot;Harry Potter and the Deathly Hallows&quot; in which hotel in Edinburgh, Scotland?",
    correct_answer: "The Balmoral",
    incorrect_answers: [
      "The Dunstane Hotel",
      "Hotel Novotel",
      "Sheraton Grand Hotel &amp; Spa"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer&#039;s Stone?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Spike", "Poofy", "Spot"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the protagonist of J.D. Salinger&#039;s novel Catcher in the Rye?",
    correct_answer: "Holden Caulfield",
    incorrect_answers: ["Fletcher Christian", "Jay Gatsby", "Randall Flagg"]
  },
  {
    category: "Entertainment: Books",
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
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to The Hitchhiker&#039;s Guide to the Galaxy book, the answer to life, the universe and everything else is...",
    correct_answer: "42",
    incorrect_answers: ["Loving everyone around you", "Chocolate", "Death"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "The book &quot;The Little Prince&quot; was written by...",
    correct_answer: "Antoine de Saint-Exup&eacute;ry",
    incorrect_answers: [
      "Miguel de Cervantes Saavedra",
      "Jane Austen",
      "F. Scott Fitzgerald"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "Where does the book &quot;The Silence of the Lambs&quot; get its title from?",
    correct_answer: "The main character&#039;s trauma in childhood",
    incorrect_answers: [
      "The relation it has with killing the innocents",
      "The villain&#039;s favourite meal",
      "The voice of innocent people being shut by the powerful"
    ]
  },
  {
    category: "Entertainment: Books",
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
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Michael Crichton&#039;s novel &quot;Jurassic Park&quot;, John Hammond meets his demise at the claws of which dinosaur?",
    correct_answer: "Procompsognathus",
    incorrect_answers: ["Dilophosaurus", "Tyrannosaurus Rex", "Velociraptor"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is NOT a work done by Shakespeare?",
    correct_answer: "Trial of Temperance",
    incorrect_answers: ["Measure For Measure", "Titus Andronicus", "Cymbeline"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of Sherlock Holmes&#039;s brother?",
    correct_answer: "Mycroft Holmes",
    incorrect_answers: [
      "Mederi Holmes",
      "Martin Holmes",
      "Herbie Hancock Holmes"
    ]
  },
  {
    category: "Entertainment: Books",
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
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in &quot;Jurassic Park&quot;?",
    correct_answer: "1992 Toyota Land Cruiser",
    incorrect_answers: [
      "1992 Jeep Wrangler YJ Sahar",
      "1992 Ford Explorer XLT",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following was the author of &quot;Username Evie&quot;?",
    correct_answer: "Joe Sugg",
    incorrect_answers: ["Zoe Sugg", "Joe Weller", "Alfie Deyes"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Little Women&quot;, which of the March sisters married Laurie?",
    correct_answer: "Amy",
    incorrect_answers: ["Beth", "Jo", "Meg"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Antiquities, Ice Age, and Alliances expansions take place on which continent?",
    correct_answer: "Terisiare",
    incorrect_answers: ["Aerona", "Shiv", "Jamuraa"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, the Fallen Empires expansion takes place on which continent?",
    correct_answer: "Sarpadia",
    incorrect_answers: ["Otaria", "Terisiare", "Shiv"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Magic: The Gathering universe, which plane does the Homelands expansion take place in?",
    correct_answer: "Ulgrotha",
    incorrect_answers: ["Bant", "Llanowar", "Tazeem"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What&#039;s the second book in George R. R. Martin&#039;s &#039;A Song of Ice and Fire&#039; series?",
    correct_answer: "A Clash of Kings",
    incorrect_answers: [
      "A Dance with Dragons",
      "A Storm of Swords",
      "A Feast for Crows"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In which classic novel is there a character named Homer Simpson?",
    correct_answer: "The Day of the Locust",
    incorrect_answers: ["Catch-22", "Of Mice and Men", "A Separate Peace"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of Eragon&#039;s dragon in &quot;Eragon&quot;?",
    correct_answer: "Saphira",
    incorrect_answers: ["Glaedr", "Thorn", "Arya"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    correct_answer: "SCP-173",
    incorrect_answers: ["SCP-001", "SCP-999", "SCP-1459"]
  },
  {
    category: "Entertainment: Books",
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
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following is not the name of a &#039;Bond Girl&#039;? ",
    correct_answer: "Vanessa Kensington",
    incorrect_answers: ["Pam Bouvier", "Mary Goodnight", "Wai Lin"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following was not one of &#039;The Magnificent Seven&#039;?",
    correct_answer: "Clint Eastwood",
    incorrect_answers: ["Steve McQueen", "Charles Bronson", "Robert Vaughn"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the movie &ldquo;The Iron Giant,&rdquo; this character is the protagonist.",
    correct_answer: "Hogarth Hughes",
    incorrect_answers: ["Kent Mansley", "Dean McCoppin", "Annie Hughes"]
  },
  {
    category: "Entertainment: Film",
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
    category: "Entertainment: Film",
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
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "When was the movie &#039;Con Air&#039; released?",
    correct_answer: "1997",
    incorrect_answers: ["1985", "1999", "1990"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the film &quot;Interstellar&quot;, how long did they spend on Miller&#039;s planet?",
    correct_answer: "23 years, 4 months, and 8 days",
    incorrect_answers: [
      "15 years, 2 months, and 15 days",
      "10 months and 6 days",
      "26 years, 4 months, and 10 days"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 1976 film &#039;Taxi Driver&#039;, how many guns did Travis buy from the salesman?",
    correct_answer: "4",
    incorrect_answers: ["2", "6", "1"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "Who wrote and directed the 1986 film &#039;Platoon&#039;?",
    correct_answer: "Oliver Stone",
    incorrect_answers: [
      "Francis Ford Coppola",
      "Stanley Kubrick",
      "Michael Cimino"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which retired American football quarterback played himself in &#039;Ace Ventura: Pet Detective&#039; and &#039;Little Nicky&#039;?",
    correct_answer: "Dan Marino",
    incorrect_answers: ["John Elway", "Tom Brady", "Joe Montana"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who played Deputy Marshal Samuel Gerard in the 1993 film &quot;The Fugitive&quot;?",
    correct_answer: "Tommy Lee Jones",
    incorrect_answers: ["Harrison Ford", "Harvey Keitel", "Martin Landau"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was Marilyn Monroe`s character&#039;s first name in the film &quot;Some Like It Hot&quot;?",
    correct_answer: "Sugar",
    incorrect_answers: ["Honey", "Caramel", "Candy"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which movie contains the quote, &quot;Say hello to my little friend!&quot;?",
    correct_answer: "Scarface",
    incorrect_answers: ["Reservoir Dogs", "Heat", "Goodfellas"]
  },
  {
    category: "Entertainment: Film",
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
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "The Queen song `A Kind Of Magic` is featured in which 1986 film?",
    correct_answer: "Highlander",
    incorrect_answers: ["Flash Gordon", "Labyrinth", "Howard the Duck"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "This movie contains the quote, &quot;I love the smell of napalm in the morning!&quot;",
    correct_answer: "Apocalypse Now",
    incorrect_answers: ["Platoon", "The Deer Hunter", "Full Metal Jacket"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "This movie contains the quote, &quot;Houston, we have a problem.&quot;",
    correct_answer: "Apollo 13",
    incorrect_answers: ["The Right Stuff", "Capricorn One", "Marooned"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which African country was the 2006 film &#039;Blood Diamond&#039; mostly set in?",
    correct_answer: "Sierra Leone",
    incorrect_answers: ["Liberia", "Burkina Faso", "Central African Republic"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the dog that played Toto in the 1939 film &quot;The Wizard of Oz&quot;?",
    correct_answer: "Terry",
    incorrect_answers: ["Tommy", "Teddy", "Toto"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the orange and white bot&#039;s name in &quot;Star Wars: The Force Awakens&quot;?",
    correct_answer: "BB-8",
    incorrect_answers: ["BB-3", "AA-A", "R2-D2"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the assassin in the first &quot;Hellboy&quot; movie?",
    correct_answer: "Karl Ruprecht Kroenen",
    incorrect_answers: [
      "Klaus Werner von Krupt",
      "Grigori Efimovich Rasputin",
      "Ilsa Haupstein"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the first &quot;Star Wars&quot; film by release order?",
    correct_answer: "A New Hope",
    incorrect_answers: [
      "The Phantom Menace",
      "The Force Awakens",
      "Revenge of the Sith"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these actors/actresses is NOT a part of the cast for the 2016 movie &quot;Suicide Squad&quot;?",
    correct_answer: "Scarlett Johansson",
    incorrect_answers: ["Jared Leto", "Will Smith", "Margot Robbie"]
  },
  {
    category: "Entertainment: Film",
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
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which iconic character is featured in movies such as &quot;The Enforcer&quot;, &quot;Sudden Impact&quot;, and &quot;The Dead Pool&quot;?",
    correct_answer: "Dirty Harry",
    incorrect_answers: ["Indiana Jones", "James Bond", "Harry Potter"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1971 film &quot;Willy Wonka &amp; the Chocolate Factory&quot;, who played Willy Wonka?",
    correct_answer: "Gene Wilder",
    incorrect_answers: ["Shia LeBouf", "Peter Ostrum", "Johnny Depp"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "In what Disney movie can you spot the character &quot;Pac-Man&quot; in if you look closely enough in some scenes?",
    correct_answer: "Tron",
    incorrect_answers: ["Big Hero 6", "Fantasia", "Monsters, Inc."]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1979 British film &quot;Quadrophenia&quot; what is the name of the seaside city the mods are visiting?",
    correct_answer: "Brighton",
    incorrect_answers: ["Eastbourne", "Mousehole", "Bridlington"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who played Baron Victor Frankestein in the 1957 Hammer horror film &quot;The Curse of Frankenstein&quot;?",
    correct_answer: "Peter Cushing",
    incorrect_answers: ["Boris Karloff", "Vincent Price", "Lon Chaney Jr."]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question: "Which one of these action movies are shot entirely in one take?",
    correct_answer: "Victoria",
    incorrect_answers: [
      "Ip Man 2",
      "The Bourne Legacy",
      "L&eacute;on: The Professional"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the movie &quot;Cast Away&quot; the main protagonist&#039;s best friend while on the island is named",
    correct_answer: "Wilson",
    incorrect_answers: ["Carson", "Jackson", "Willy"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "The 2002 film &quot;28 Days Later&quot; is mainly set in which European country?",
    correct_answer: "United Kingdom",
    incorrect_answers: ["France", "Italy", "Germany"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Back to the Future Part II, Marty and Dr. Emmett Brown go to which future date?",
    correct_answer: "October 21, 2015",
    incorrect_answers: ["August 28, 2015", "July 20, 2015", "January 25, 2015"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Darth Vader&#039;s famous reveal to Luke is iconic. But which of these is the right one?",
    correct_answer: "&quot;No. I am your father.&quot;",
    incorrect_answers: [
      "&quot;Luke, I am your father.&quot;",
      "&quot;You&#039;re wrong. I am your father.&quot;",
      "&quot;The truth is that I am your father.&quot;"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first monster to appear alongside Godzilla?",
    correct_answer: "Anguirus",
    incorrect_answers: ["King Kong", "Mothra", "King Ghidora"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the actor who played Leatherface in the 1974 horror film, The Texas Chainsaw Massacre?",
    correct_answer: "Gunnar Hansen",
    incorrect_answers: ["Edwin Neal", "John Dugan", "Joe Bill Hogan"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
    correct_answer: "Doug Bradley",
    incorrect_answers: ["Doug Jones", "Doug Savant", "Doug Benson"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the correct spelling of the protagonist of the book in The NeverEnding Story (1984)?",
    correct_answer: "Atreyu",
    incorrect_answers: ["Atrayu", "Atraiyu", "Atraeyu"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "At the end of the 2001 film &quot;Rat Race&quot;, whose concert do the contestants crash?",
    correct_answer: "Smash Mouth",
    incorrect_answers: ["Bowling for Soup", "Sum 41", "Linkin Park"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which famous singer was portrayed by actor Kevin Spacey in the 2004 biographical film &quot;Beyond the Sea&quot;?",
    correct_answer: "Bobby Darin",
    incorrect_answers: ["Louis Armstrong", "Frank Sinatra", "Dean Martin"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "The 2016 Disney animated film &#039;Moana&#039; is based on which culture?",
    correct_answer: "Polynesian",
    incorrect_answers: ["Native American", "Japanese", "Nordic"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the 1995 film &quot;Balto&quot;, who are Steele&#039;s accomplices?",
    correct_answer: "Kaltag, Nikki, and Star",
    incorrect_answers: [
      "Dusty, Kirby, and Ralph",
      "Nuk, Yak, and Sumac",
      "Jenna, Sylvie, and Dixie"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the &quot;Jurassic Park&quot; universe, what is the name of the island that contains InGen&#039;s Site B?",
    correct_answer: "Isla Sorna",
    incorrect_answers: ["Isla Nublar", "Isla Pena", "Isla Muerta"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the make and model of the tour vehicles in &quot;Jurassic Park&quot;?",
    correct_answer: "1992 Ford Explorer XLT",
    incorrect_answers: [
      "1992 Toyota Land Cruiser",
      "1992 Jeep Wrangler YJ Sahar",
      "Mercedes M-Class"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "In what year does Jurassic World open in the &quot;Jurassic Park&quot; universe?",
    correct_answer: "2005",
    incorrect_answers: ["2007", "2015", "2020"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the supercomputer located in the control room in &quot;Jurassic Park&quot;?",
    correct_answer: "Thinking Machines CM-5",
    incorrect_answers: ["Cray X-MP", "Cray XK7", "IBM Blue Gene/Q"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "Before &quot;Jurassic Park III&quot; was finalized and the Spinosaurus was chosen, which dinosaur was going to be the star?",
    correct_answer: "Baryonyx",
    incorrect_answers: ["Tyrannosaurus Rex", "Velociraptor", "Suchomimus"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "What three movies, in order from release date, make up the &quot;Dollars Trilogy&quot;?",
    correct_answer:
      "&quot;A Fistful of Dollars&quot;, &quot;For a Few Dollars More&quot;, &quot;The Good, the Bad, and the Ugly&quot;",
    incorrect_answers: [
      "&quot;The Good, the Bad, and the Ugly&quot;, &quot;For A Few Dollars More&quot;, &quot;A Fistful of Dollars&quot;",
      "&quot;For a Few Dollars More&quot;, &quot;The Good, the Bad, and the Ugly&quot;, &quot;A Fistful of Dollars&quot;",
      "&quot;For a Few Dollars More&quot;, &quot;A Fistful of Dollars&quot;, &quot;The Good, the Bad, and the Ugly&quot;"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "Where does the original Friday The 13th movie take place?",
    correct_answer: "Camp Crystal Lake",
    incorrect_answers: ["Packanack", "Higgins Haven", "Camp Forest Green"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which director directed the movie &quot;Pan&#039;s Labyrinth&quot;?",
    correct_answer: "Guillermo Del Toro",
    incorrect_answers: [
      "Alfonso Cuar&oacute;n",
      "Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu",
      " Alejandro Jodorowsky"
    ]
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
      "Which German sportswear company&#039;s logo is the &#039;Formstripe&#039;?",
    correct_answer: "Puma",
    incorrect_answers: ["Nike", "Adidas", "Reebok"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question:
      "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
    correct_answer: "Hammer",
    incorrect_answers: ["Wrench", "Drill", "Screwdriver"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these teams isn&#039;t a member of the NHL&#039;s &quot;Original Six&quot; era?",
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
      "What is the nickname of Northampton town&#039;s rugby union club?",
    correct_answer: "Saints",
    incorrect_answers: ["Harlequins", "Saracens", "Wasps"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many soccer players should be on the field at the same time?",
    correct_answer: "22",
    incorrect_answers: ["20", "24", "26"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "In what sport is a &quot;shuttlecock&quot; used?",
    correct_answer: "Badminton",
    incorrect_answers: ["Table Tennis", "Rugby", "Cricket"]
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
    question:
      "Which Formula One driver was nicknamed &#039;The Professor&#039;?",
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
    difficulty: "medium",
    question: "What is the highest belt you can get in Taekwondo?",
    correct_answer: "Black",
    incorrect_answers: ["White", "Red", "Green"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "The Rio 2016 Summer Olympics held it&#039;s closing ceremony on what date?",
    correct_answer: "August 21",
    incorrect_answers: ["August 23", "August 19", "August 17"]
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
    difficulty: "easy",
    question:
      "Which driver has been the Formula 1 world champion for a record 7 times?",
    correct_answer: "Michael Schumacher",
    incorrect_answers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"]
  },
  {
    category: "Sports",
    type: "multiple",
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
    difficulty: "hard",
    question: "Where was the Games of the XXII Olympiad held?",
    correct_answer: "Moscow",
    incorrect_answers: ["Barcelona", "Tokyo", "Los Angeles"]
  },
  {
    category: "Sports",
    type: "multiple",
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
      "Which Italian footballer told Neuer where he&#039;s putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"]
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
      "Which soccer team won the Copa Am&eacute;rica 2015 Championship ?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Paraguay"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Which soccer team won the Copa Am&eacute;rica Centenario 2016?",
    correct_answer: "Chile",
    incorrect_answers: ["Argentina", "Brazil", "Colombia"]
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
    difficulty: "medium",
    question:
      "What national team won the 2016 edition of UEFA European Championship?",
    correct_answer: "Portugal",
    incorrect_answers: ["France", "Germany", "England"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
    correct_answer: "4",
    incorrect_answers: ["1", "2", "3"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
    correct_answer: "Nico Rosberg",
    incorrect_answers: ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 2016, who won the Formula 1 World Constructor&#039;s Championship for the third time in a row?",
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
    question:
      "Which city did the former NHL team &quot;The Nordiques&quot; originiate from?",
    correct_answer: "Quebec City",
    incorrect_answers: ["Houston", "Montreal", "New York"]
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
    difficulty: "easy",
    question:
      "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
    correct_answer: "Don Cherry",
    incorrect_answers: ["Don McKellar", "Don Taylor ", "Donald Sutherland"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?",
    correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
    incorrect_answers: [
      "Cristiano Ronaldo los Santos Diego",
      "Cristiano Armando Diego Ronaldo",
      "Cristiano Luis Armando Ronaldo"
    ]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Who won the &quot;Champions League&quot; in 1999?",
    correct_answer: "Manchester United",
    incorrect_answers: ["Barcelona", "Bayern Munich", "Liverpool"]
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
    difficulty: "easy",
    question: "When was the first official international game played?",
    correct_answer: "1872",
    incorrect_answers: ["1880", "1863", "1865"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "From what show is the character &quot;James Doakes&quot;? ",
    correct_answer: "Dexter",
    incorrect_answers: [
      "Marvel&#039;s Daredevil",
      "Boardwalk Empire",
      "The Walking Dead"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the TV series &quot;Person of Interest&quot;, who plays the character &quot;Harold Finch&quot;?",
    correct_answer: "Michael Emerson",
    incorrect_answers: ["Jim Caviezel", "Taraji P. Henson", "Kevin Chapman"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Doctor Who universe, how many times can a time lord normally regenerate?",
    correct_answer: "12",
    incorrect_answers: ["11", "13", "15"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the TV show &quot;Cheers&quot;, Sam Malone was a former relief pitcher for which baseball team?",
    correct_answer: "Boston Red Sox",
    incorrect_answers: [
      "New York Mets",
      "Baltimore Orioles",
      "Milwaukee Brewers"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who played Agent Fox Mulder in the TV sci-fi drama &quot;The X-Files&quot;?",
    correct_answer: "David Duchovny",
    incorrect_answers: ["Gillian Anderson", "Robert Patrick", "Mitch Pileggi"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the star of the AMC series Breaking Bad?",
    correct_answer: "Walter White",
    incorrect_answers: ["Saul Goodman", "Jesse Pinkman", "Skyler White"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In which British seaside town was the BBC sitcom &quot;Fawlty Towers&quot; set?",
    correct_answer: "Torquay",
    incorrect_answers: ["Blackpool", "Bournemouth", "Great Yarmouth"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of Ross&#039; pet monkey on &quot;Friends&quot;?",
    correct_answer: "Marcel",
    incorrect_answers: ["Jojo", "George", "Champ"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these characters in &quot;Stranger Things&quot; has the power of Telekinesis?",
    correct_answer: "Eleven",
    incorrect_answers: ["Mike", "Lucas", "Karen"]
  },
  {
    category: "Entertainment: Television",
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
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In &quot;It&#039;s Always Sunny in Philadelphia&quot; what was the name of Frank&#039;s wrestling persona?",
    correct_answer: "The Trash Man",
    incorrect_answers: ["Bird of War", "Day Man", "The Maniac"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which company has exclusive rights to air episodes of the &quot;The Grand Tour&quot;?",
    correct_answer: "Amazon",
    incorrect_answers: ["Netflix", "BBC", "CCTV"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Dee from &quot;It&#039;s Always Sunny in Philadelphia&quot; has dated all of the following guys EXCEPT",
    correct_answer: "Matthew &quot;Rickety Cricket&quot; Mara",
    incorrect_answers: [
      "Colin the Thief",
      "Ben the Soldier",
      "Kevin Gallagher aka Lil&#039; Kevin"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Game of Thrones, what continent lies across the Narrow Sea from Westeros?",
    correct_answer: "Essos",
    incorrect_answers: ["Easteros", "Westereast", "Esuntos"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question: "In Supernatural, what&#039;s is Sam&#039;s brothers name?",
    correct_answer: "Dean",
    incorrect_answers: ["Dave", "Steve", "Mike"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In DuckTales, what is the name of the city where all the main characters live?",
    correct_answer: "Duckburg",
    incorrect_answers: ["Duckwing", "Tailspin", "Wingford"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the television show Breaking Bad, what is the street name of Walter and Jesse&#039;s notorious product?",
    correct_answer: "Blue Sky",
    incorrect_answers: ["Baby Blue", "Rock Candy", "Pure Glass"]
  },
  {
    category: "Entertainment: Television",
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
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which country does the YouTuber &quot;SinowBeats&quot; originate from?",
    correct_answer: "Scotland",
    incorrect_answers: ["England", "Sweden", "Germany"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question: "Who played the sun baby in the original run of Teletubbies?",
    correct_answer: "Jessica Smith",
    incorrect_answers: ["Pui Fan Lee", "Sue Monroe", "Lisa Brockwell"]
  },
  {
    category: "Entertainment: Television",
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
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the surname of the character Daryl in AMC&#039;s show The Walking Dead?",
    correct_answer: "Dixon",
    incorrect_answers: ["Grimes", "Dickinson", "Dicketson"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "How long was Ken Jennings&#039; win streak on Jeopardy?",
    correct_answer: "74",
    incorrect_answers: ["88", "49", "62"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question: "In Star Trek, what is the name of Spock&#039;s father?",
    correct_answer: "Sarek",
    incorrect_answers: ["Tuvok", "T&#039;Pal", "Surak"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Star Trek: The Next Generation, what is the name of Data&#039;s cat?",
    correct_answer: "Spot",
    incorrect_answers: ["Mittens", "Tom", "Kitty"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which year did the British television series &quot;The Bill&quot; end?",
    correct_answer: "2010",
    incorrect_answers: ["2001", "2007", "2012"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the winner of the 2016 WWE Royal Rumble?",
    correct_answer: "Triple H",
    incorrect_answers: ["Roman Reigns", "AJ Styles", "Dean Ambrose"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "British actor David Morrissey stars as which role in &quot;The Walking Dead&quot;?",
    correct_answer: "The Governor",
    incorrect_answers: ["Negan", "Rick Grimes", "Daryl Dixon"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these Disney shows is classified as an anime?",
    correct_answer: "Stitch!",
    incorrect_answers: [
      "Cory in the House",
      "The Emperor&#039;s New School",
      "Hannah Montana"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many seasons did the TV show &quot;Donkey Kong Country&quot; last?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "5"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the television show &quot;Lazy Town&quot;, who is the actor of Robbie Rotten?",
    correct_answer: "Stef&aacute;n Stef&aacute;nsson",
    incorrect_answers: [
      "Adam Sandler",
      "Magn&uacute;s Scheving",
      "Stephen Carl"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Star Trek&quot;, what is the Ferengi&#039;s First Rule of Acquisition?",
    correct_answer: "Once you have their money, you never give it back. ",
    incorrect_answers: [
      "Never place friendship above profit",
      "Greed is Eternal",
      "Never allow family to stand in the way of opportunity"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In &quot;Star Trek&quot;, what sauce is commonly used by Klingons on bregit lung?",
    correct_answer: "Grapok sauce",
    incorrect_answers: [
      "Gazorpazorp pudding",
      "Sweet chili sauce",
      "Grapork sauce"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In &quot;Star Trek&quot;, what is the Klingon delicacy of &quot;gagh&quot; made from?",
    correct_answer: "Serpent worms",
    incorrect_answers: ["Earthworms", "Spaghetti noodles", "Klingworms"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "Alan Reed is known for providing the voice of which character?",
    correct_answer: "Fred Flintstone",
    incorrect_answers: ["Bugs Bunny", "Fangface", "G.I. Joe"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following was not an actor/actress on the American television show &quot;Saturday Night Live&quot; in Season 42?",
    correct_answer: "Tina Fey",
    incorrect_answers: ["Mikey Day", "Kate McKinnon", "Sasheer Zamata"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the main antagonists in Battlestar Galactica?",
    correct_answer: "The Cylons",
    incorrect_answers: ["The Collective", "The Federation", "The Rebels"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the inflatable duck sacrified to the crowd at the end of Episode 34 of the 18th season of Big Brother?",
    correct_answer: "Pablo",
    incorrect_answers: ["Esteban", "Carlos", "Duckster"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In season one of the US Kitchen Nightmares, Gordan Ramsay tried to save 10 different restaurants. How many ended up closing afterwards?",
    correct_answer: "9",
    incorrect_answers: ["6", "3", "0"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In &quot;Star Trek: Voyager&quot;, which episode did Voyager establish real-time communication with Starfleet Headquarters?",
    correct_answer: "Pathfinder",
    incorrect_answers: [
      "Message In A Bottle",
      "Someone To Watch Over Me",
      "Counterpoint"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the TV show &quot;Mad Men&quot;, what was Donald Draper&#039;s birthname?",
    correct_answer: "Richard &quot;Dick&quot; Whitman",
    incorrect_answers: [
      "Donald Draper",
      "John Ashbury",
      "Michael &quot;Mikey&quot; Wilhelm"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who was the first ever actor to play &quot;The Doctor&quot; on &quot;Doctor Who&quot;?",
    correct_answer: "William Hartnell",
    incorrect_answers: ["David Tennant", "Peter Capaldi", "Tom Baker"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which actor portrays &quot;Walter White&quot; in the series &quot;Breaking Bad&quot;?",
    correct_answer: " Bryan Cranston",
    incorrect_answers: ["Andrew Lincoln", "Aaron Paul", "RJ Mitte"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;The Simpsons&quot;, what is the real name of &quot;Comic Book Guy&quot;?",
    correct_answer: "Jeff Albertson",
    incorrect_answers: ["Comic Book Guy", "Edward Stone", "Jack Richardson"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Prior to working at Wizards of the Coast, &quot;Mark Rosewater&quot; was a writer for which show?",
    correct_answer: "Roseanne",
    incorrect_answers: ["Boy Meets World", "The X-Files", "NYPD Blue"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which WWF wrestler had the nickname &quot;The Ayatollah of Rock &#039;N&#039; Rolla&quot;?",
    correct_answer: "Chris Jericho",
    incorrect_answers: ["Marty Jannetty", "Scott Hall", "Shawn Michaels"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of Chris&#039;s brother in &quot;Everybody Hates Chris&quot;?",
    correct_answer: "Drew",
    incorrect_answers: ["Jerome", "Greg", "Joe"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "On the NBC show Community, whose catch-phrase was &quot;Pop! Pop!&quot;?",
    correct_answer: "Magnitude",
    incorrect_answers: ["Star Burns", "Leonard", "Senoir Chang"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "On the NBC show Community what was Star Burns&#039; real name?",
    correct_answer: "Alex",
    incorrect_answers: ["Todd", "Neal", "Grimus"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question: "Who was the winner of &quot;Big Brother&quot; Season 10?",
    correct_answer: "Dan Gheesling",
    incorrect_answers: ["Bryce Kranyik", "Ryan Sutfin", "Chris Mundorf"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who&#039;s the creator of Geometry Dash?",
    correct_answer: "Robert Topala",
    incorrect_answers: ["Scott Cawthon", "Adam Engels", "Andrew Spinks"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which company developed the video game &quot;Borderlands&quot;?",
    correct_answer: "Gearbox Software",
    incorrect_answers: ["2K Games", "Activision", "Rockstar Games"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the &quot;Halo&quot; franchise, in what country is New Mombasa?",
    correct_answer: "Kenya",
    incorrect_answers: ["India", "Turkey", "Slovakia"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the main character of Metal Gear Solid 2?",
    correct_answer: "Raiden",
    incorrect_answers: ["Solidus Snake", "Big Boss", "Venom Snake"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these is NOT a player class in Team Fortress 2?",
    correct_answer: "Healer",
    incorrect_answers: ["Demoman", "Pyro", "Spy"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these characters in &quot;Undertale&quot; can the player NOT go on a date with?",
    correct_answer: "Toriel",
    incorrect_answers: ["Papyrus", "Undyne", "Alphys"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the original &quot;Super Mario Bros.&quot;, what is the acceleration of Mario if he was in free fall?",
    correct_answer: "9.31 g",
    incorrect_answers: ["11 g", "9.42 g", "4.4 g"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of the final boss in Turok: Dinosaur Hunter?",
    correct_answer: "The Campaigner",
    incorrect_answers: ["The Primagen", "Oblivion", "Lord Tyrannus"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name the location-based augmented reality game developed by Niantic before Pok&eacute;mon GO?",
    correct_answer: "Ingress",
    incorrect_answers: ["Aggress", "Regress", "Digress"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the title of song on the main menu in Halo?",
    correct_answer: "Halo",
    incorrect_answers: ["Opening Suite", "Shadows", "Suite Autumn"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who is the founder of Team Fortress 2&#039;s fictional company &quot;Mann Co&quot;?",
    correct_answer: "Zepheniah Mann",
    incorrect_answers: ["Cave Johnson", "Wallace Breem", "Saxton Hale"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Overwatch,&quot; what is the hero McCree&#039;s full name?",
    correct_answer: "Jesse McCree",
    incorrect_answers: [
      "Jack &quot;McCree&quot; Morrison",
      "Gabriel Reyes",
      "Jamison &quot;Deadeye&quot; Fawkes"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the protagonist of the videogame &quot;Dead Rising 2&quot;?",
    correct_answer: "Chuck Greene",
    incorrect_answers: ["Nick Ramos", "Frank West", "Katie Greene"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "The creator of the Touhou Project series is:",
    correct_answer: "ZUN",
    incorrect_answers: ["SUN", "RUN", "PUN"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following is NOT a summon in the game &quot;South Park: The Stick of Truth&quot;?",
    correct_answer: "Towelie",
    incorrect_answers: ["Jesus", "Mr. Hankey", "Mr. Slave"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What name does the little headcrab in &quot;Half Life 2&quot; have?",
    correct_answer: "Lamarr",
    incorrect_answers: ["Jumperr", "Drett", "Jerry"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "What was the world&#039;s first handheld game device?",
    correct_answer: "Mattel Auto Race",
    incorrect_answers: ["Game Boy", "Microvision", "Game &amp; Watch"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the main character in &quot;Life is Strange&quot;?",
    correct_answer: "Maxine Caulfield",
    incorrect_answers: ["Victoria Chase", "Stella Hill", "Chloe Price"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name of the first MMORPG to popularize the genre?",
    correct_answer: "Ultima Online",
    incorrect_answers: ["World of Warcraft", "Meridian 59", "Guild Wars"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the video game &quot;Team Fortress 2&quot;, which class is able to double jump?",
    correct_answer: "Scout",
    incorrect_answers: ["Spy", "Engineer", "Pyro"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which one of these games wasn&#039;t released in 2016?",
    correct_answer: "Metal Gear Solid V",
    incorrect_answers: [
      "Tom Clancy&#039;s The Division",
      "Killing Floor 2",
      "Hitman"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Hitman: Blood Money, what is the name of the target in the mission &quot;Death of a Showman&quot;?",
    correct_answer: "Joseph Clarence",
    incorrect_answers: ["The Swing King", "Maynard John", "Manuel Delgado"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many trophies are there in &quot;Super Smash Bros. for Nintendo 3DS&quot;?",
    correct_answer: "685",
    incorrect_answers: ["1360", "716", "1155"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What element does the Zinogre use in Monster Hunter?",
    correct_answer: "Thunder",
    incorrect_answers: ["Ice", "Fire", "Water"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many voice channels does the Super Nintendo Entertainment System support?",
    correct_answer: "8",
    incorrect_answers: ["6", "10", "12"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Fallout 4&quot;, what is the name of the dog you find at Red Rocket truck stop?",
    correct_answer: "Dogmeat",
    incorrect_answers: ["Sparky", "Quazar", "Chop"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "&quot;The Potato Sack&quot; was a collection of indie games released on Steam in 2011 as a promotion for which game?",
    correct_answer: "Portal 2",
    incorrect_answers: ["Left 4 Dead 2", "Half-Life 3", "Dota 2"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Danganronpa Another Episode: Ultra Despair Girls is set after which Danganronpa game?",
    correct_answer: "Danganronpa: Trigger Happy Havoc",
    incorrect_answers: [
      "Danganronpa 2: Goodbye Despair",
      "Danganronpa V3: Killing Harmony",
      "Danganronpa 3: The End of Hope&#039;s Peak High School"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was the video game &quot;P.A.M.E.L.A.&quot; released on Steam?",
    correct_answer: "March 9, 2017",
    incorrect_answers: [
      "January 7, 2007",
      "October 23, 1997",
      "February 16, 2015"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is not a DLC vehicle in &quot;Mario Kart 8&quot;?",
    correct_answer: "Wild Wiggler",
    incorrect_answers: ["Bone Rattler", "B Dasher", "300 SL Roadster"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What programming language was used to create the game &quot;Minecraft&quot;?",
    correct_answer: "Java",
    incorrect_answers: ["HTML 5", "C++", "Python"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "When was the video game publisher &quot;Ubisoft&quot; founded ?",
    correct_answer: "March 1986",
    incorrect_answers: ["April 1990", "June 2001", "August 1956"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many unique items does &quot;Borderlands 2&quot; claim to have?",
    correct_answer: "87 Bazillion ",
    incorrect_answers: ["87 Million", "87 Trillion", "87 Gazillion "]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the &quot;Call Of Duty: Zombies&quot; map &quot;Moon&quot;, there is a secondary called the QED. What does QED stand for?",
    correct_answer: "Quantum Entanglement Device",
    incorrect_answers: [
      "Quad Ectoplasmic Driver",
      "Question Every Dog",
      "Quality Edward Device"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the perk that was introduced in the &quot;Call Of Duty: Zombies&quot; map, &quot;Mob Of The Dead&quot;?",
    correct_answer: "Electric Cherry",
    incorrect_answers: ["Quick Revive", "Vulture Aid", "Tombstone"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the &quot;Call Of Duty: Zombies&quot; map &quot;Origins&quot;, how many steps are there to upgrade a Staff?",
    correct_answer: "4",
    incorrect_answers: ["7", "5", "3"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is not a character in the game, &quot;Lethal League&quot;?",
    correct_answer: "Rex",
    incorrect_answers: ["Switch", "Candyman", "Sonata"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What were the first two blocks in &quot;Minecraft&quot;?",
    correct_answer: "Grass and Cobblestone",
    incorrect_answers: [
      "Grass and Stone",
      "Crafting Table and Cobblestone",
      "Cobblestone and Stone"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the first boss the player encounters in the 2017 game, &quot;Little Nightmares&quot;?",
    correct_answer: "The Janitor",
    incorrect_answers: ["The Warden", "The Caretaker", "The Overseer"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "On which planet does the game Freedom Planet (2014) take place?",
    correct_answer: "Avalice",
    incorrect_answers: ["Freedom", "Galaxytrail", "Shang Mu"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Guild Wars 2, which of these Charr legions is not able to be selected during character creation?",
    correct_answer: "Flame Legion",
    incorrect_answers: ["Ash Legion", "Blood Legion", "Iron Legion"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the first name of Kasmeer Meade&#039;s brother?",
    correct_answer: "Kyle",
    incorrect_answers: ["Dave", "Kevin", "Ken"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, Admiral Taidha Covington can be found in which zone?",
    correct_answer: "Bloodtide Coast",
    incorrect_answers: ["Southsun Cove", "Lake Doric", "Gendarran Fields"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the Blademaster in the middle lane of the Dragon&#039;s Stand zone?",
    correct_answer: "Diarmid",
    incorrect_answers: ["Adryn", "Hareth", "Gerent"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the last name of the primary female protagonist of Final Fantasy VIII?",
    correct_answer: "Heartilly",
    incorrect_answers: ["Loire", "Almasy", "Trepe"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the real name of &quot;Warhead&quot; in the Sega Genesis game &quot;Vectorman&quot;?",
    correct_answer: "Raster",
    incorrect_answers: ["Peacehead", "Vectorkid", "Bitmap"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary glowing orrery whose planets and clouds move?",
    correct_answer: "Meteorlogicus",
    incorrect_answers: [
      "The Juggernaut",
      "The Flameseeker Prophecies",
      "Kamohoali&#039;i Kotaki"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary mace with a disco ball as its head?",
    correct_answer: "The Moot",
    incorrect_answers: ["The Predator", "Quip", "The Dreamer"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these characters is NOT a boss in Crash Bash?",
    correct_answer: "Ripper Roo",
    incorrect_answers: ["Papu Papu", "Komodo brothers", "Nitros Oxide"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Why were only only 300,000 copies of Uniracers were produced?",
    correct_answer:
      "DMA Designs was sued by Pixar, preventing more copies from being produced",
    incorrect_answers: [
      "There was a disagreement between DMA Designs and Nintendo",
      "It didn&#039;t sell well due to poor review scores",
      "No public information is available"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "On which Beatles album would you find the song &#039;Eleanor Rigby&#039;?",
    correct_answer: "Revolver",
    incorrect_answers: ["Help!", "Rubber Soul", "Abbey Road"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who wrote the Sinead O`Connor hit &#039;Nothing Compares 2 U&#039;?",
    correct_answer: "Prince",
    incorrect_answers: ["Michael Jackson", "Cameo", "Rick James"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who had a US and UK number 1 hit in 1962 with the instrumental, &#039;Telstar&#039;?",
    correct_answer: "The Tornados",
    incorrect_answers: ["The Ventures", "The Spotnicks", "The Tremeloes"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "What was the title of ABBA`s first UK hit single?",
    correct_answer: "Waterloo",
    incorrect_answers: ["Mamma Mia", "Fernando", "Dancing Queen"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Who recorded the1975 album &#039;Captain Fantastic and the Brown Dirt Cowboy&#039;?",
    correct_answer: "Elton John",
    incorrect_answers: ["John Denver", "Billy Joel", "Joe Cocker"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who had a 1976 hit with the song &#039;You Make Me Feel Like Dancing&#039;?",
    correct_answer: "Leo Sayer",
    incorrect_answers: ["Elton John", "Billy Joel", "Andy Gibb"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these is NOT an album released by The Beatles?",
    correct_answer: "The Wall",
    incorrect_answers: ["Abbey Road", "Magical Mystery Tour", "Revolver"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?",
    correct_answer: "Justin Bieber",
    incorrect_answers: ["Selena Gomez", "Ellie Goulding", "The Weeknd"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the frontman of the band 30 Seconds to Mars?",
    correct_answer: "Jared Leto",
    incorrect_answers: ["Gerard Way", "Matthew Bellamy", "Mike Shinoda"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "How many members are there in the band Nirvana?",
    correct_answer: "Three",
    incorrect_answers: ["Two", "Four", "Five"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which popular rock band has a one-armed drummer?",
    correct_answer: "Def Leppard",
    incorrect_answers: ["The Beatles", "Lynyrd Skynyrd", "Foreigner"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who had a 1981 hit with the song &quot;Japanese Boy&quot;?",
    correct_answer: "Aneka",
    incorrect_answers: ["Toyah", "Sandra", "Madonna"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which member of the English band &quot;The xx&quot; released their solo album &quot;In Colour&quot; in 2015?",
    correct_answer: "Jamie xx",
    incorrect_answers: ["Romy Madley Croft", "Oliver Sim", "Baria Qureshi"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of Finnish DJ Darude&#039;s hit single released in October 1999?",
    correct_answer: "Sandstorm",
    incorrect_answers: ["Dust Devil", "Sirocco", "Khamsin"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these artists was NOT a member of the electronic music supergroup Swedish House Mafia, which split up in 2013?",
    correct_answer: "Alesso",
    incorrect_answers: ["Steve Angello", "Sebastian Ingrosso", "Axwell"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Queen song was covered by Brittany Murphy in the 2006 film &quot;Happy Feet&quot;?",
    correct_answer: "Somebody to Love",
    incorrect_answers: ["Under Pressure", "Flash", "Bohemian Rhapsody"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the name of singer Frank Ocean&#039;s second studio album, which was released on August 20, 2016?",
    correct_answer: "Blonde",
    incorrect_answers: ["Brunette", "Black", "Burgundy"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which band is the longest active band in the world with no breaks or line-up changes?",
    correct_answer: "U2",
    incorrect_answers: ["Radiohead", "Rush", "Rolling Stones"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Brian May was the guitarist for which band?",
    correct_answer: "Queen",
    incorrect_answers: ["Pink Floyd", "Rolling Stones", "The Doors"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the stage name of English female rapper Mathangi Arulpragasam, who is known for the song &quot;Paper Planes&quot;?",
    correct_answer: "M.I.A.",
    incorrect_answers: ["K.I.A.", "C.I.A.", "A.I.A."]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What animal is featured on the cover of English electronic music group The Prodigy&#039;s album, &quot;The Fat of the Land&quot;?",
    correct_answer: "Crab",
    incorrect_answers: ["Fox", "Elephant", "Tiger"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
    correct_answer: "12",
    incorrect_answers: ["19", "21", "25"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the English title of the vaporwave track &quot;リサフランク420 / 現代のコンピュー&quot; by Macintosh Plus (Vektroid)?",
    correct_answer: "Lisa Frank 420 / Modern Computing",
    incorrect_answers: [
      "Smoke Weed 420 / Everyday",
      "Make Your Move 420 / My Mind",
      "It&#039;s All In Your Head 420 / Understand"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "What was Rage Against the Machine&#039;s debut album?",
    correct_answer: "Rage Against the Machine",
    incorrect_answers: ["Evil Empire", "Bombtrack", "The Battle Of Los Angeles"]
  },
  {
    category: "Entertainment: Music",
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
    category: "Entertainment: Music",
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
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is NOT a name of an album released by American rapper Pitbull?",
    correct_answer: "Welcome to Miami",
    incorrect_answers: ["Dale", "Global Warming", "Armando"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The song &quot;Feel Good Inc.&quot; by British band Gorillaz features which hip hop group?",
    correct_answer: "De La Soul",
    incorrect_answers: ["Public Enemy", "OutKast", "Cypress Hill"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which famous 90&#039;s rap album is commonly referred to as &quot;The Bible of Hip Hop&quot;?",
    correct_answer: "Illmatic",
    incorrect_answers: [
      "The Low End Theory",
      "The Chronic",
      "Enter The Wu-Tang (36 Chambers)"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "This album, now considered to be one of the greatest of all time, was a commercial failure when it was released.",
    correct_answer: "The Velvet Underground and Nico",
    incorrect_answers: ["Abbey Road", "Led Zeppelin IV", "Pet Sounds"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which Nirvana album had a naked baby on the cover?",
    correct_answer: "Nevermind",
    incorrect_answers: ["Bleach", "In Utero", "Incesticide"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "When did The Beatles release the LP &quot;Please Please Me&quot;?",
    correct_answer: "1963",
    incorrect_answers: ["1970", "1960", "1969"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Kanye West&#039;s &quot;Gold Digger&quot; featured which Oscar-winning actor?",
    correct_answer: "Jamie Foxx",
    incorrect_answers: ["Alec Baldwin", "Dwayne Johnson", " Bruce Willis"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "&quot;All the Boys&quot; by Panic! At the Disco was released as a bonus track on what album?",
    correct_answer: "Too Weird To Live, Too Rare To Die!",
    incorrect_answers: [
      "A Fever You Can&#039;t Sweat Out",
      "Death Of A Bachelor",
      "Vices &amp; Virtues"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the lead singer of Bastille?",
    correct_answer: "Dan Smith",
    incorrect_answers: ["Will Farquarson", "Kyle Simmons", "Chris Wood"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The song &quot;Caramelldansen&quot; is commonly mistaken as a Japanese song, what language is the song actually sung in?",
    correct_answer: "Swedish",
    incorrect_answers: ["Hungarian", "Finnish", "Chinese"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "&quot;The Singing Cowboy&quot; Gene Autry is credited with the first recording for all but which classic Christmas jingle?",
    correct_answer: "White Christmas",
    incorrect_answers: [
      "Frosty the Snowman",
      "Rudolph the Red-Nosed Reindeer",
      "Here Comes Santa Claus"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "The heavy metal band Black Sabbath hail from which English city?",
    correct_answer: "Birmingham",
    incorrect_answers: ["Manchester", "London", "Newcastle-Upon-Tyne"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who is a pioneer of &quot;Minimal Music&quot; in 1960s?",
    correct_answer: "Steve Reich",
    incorrect_answers: [
      "Wolfgang Amadeus Mozart",
      "Brian Eno",
      "Sigur R&oacute;s"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which band released the album &quot;Sonic Highways&quot; in 2014?",
    correct_answer: "Foo Fighters",
    incorrect_answers: ["Coldplay", "Nickelback", "The Flaming Lips"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the vocalist and frontman of rock band &quot;Guns N&#039; Roses&quot;?",
    correct_answer: "Axl Rose",
    incorrect_answers: ["Kurt Cobain", "Slash", "Bono"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which rock band released the album &quot;The Bends&quot; in March 1995?",
    correct_answer: "Radiohead",
    incorrect_answers: ["Nirvana", "Coldplay", "U2"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "What was David Bowie&#039;s real surname?",
    correct_answer: "Jones",
    incorrect_answers: ["Johnson", "Edwards", "Carter"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is not a single by Pink Floyd guitarist, David Gilmour?",
    correct_answer: "Sunset Strip",
    incorrect_answers: ["Rattle That Lock", "Blue Light", "Arnold Layne"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which artist or group did John Lennon consider &quot;son(s) of the Beatles&quot;?",
    correct_answer: "Jeff Lynne&#039;s Electric Light Orchestra",
    incorrect_answers: ["The Rolling Stones", "Pink Floyd", "The Who"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Where did the British Boy Band &quot;Bros&quot; come from?",
    correct_answer: "Camberley",
    incorrect_answers: ["Guildford", "Aldershot", "Bagshot"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the cold-war singer who has a song in Grand Theft Auto IV, and a wall landmark in Moscow for his memorial?",
    correct_answer: "Viktor Tsoi",
    incorrect_answers: ["Jimi Hendrix", "Brian Jones", "Vladimir Vysotsky"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "The band Muse released their first album, Showbiz, in what year?",
    correct_answer: "1999",
    incorrect_answers: ["1998", "2000", "2001"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Iron Maiden album did the song &quot;Dream of Mirrors&quot; feature in?",
    correct_answer: "Brave New World",
    incorrect_answers: [
      "Dance of Death",
      "A Matter of Life and Death",
      "Somewhere in Time"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who performed the guitar solo on Michael Jackson&#039;s hit &quot;Beat It&quot;?",
    correct_answer: "Eddie Van Halen",
    incorrect_answers: ["Steve Vai", "Kirk Hammett", "Zakk Wylde"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is considered the rarist form of color blindness?",
    correct_answer: "Blue",
    incorrect_answers: ["Red", "Green", "Purple"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many objects are equivalent to one mole?",
    correct_answer: "6.022 x 10^23",
    incorrect_answers: ["6.002 x 10^22", "6.022 x 10^22", "6.002 x 10^23"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?",
    correct_answer: "Uranus",
    incorrect_answers: ["Jupiter", "Venus", "Neptune"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "The humerus, paired radius, and ulna come together to form what joint?",
    correct_answer: "Elbow",
    incorrect_answers: ["Knee", "Sholder", "Ankle"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "In aeronautics, flaps and slats are used to control what on an aircraft?",
    correct_answer: "Lift",
    incorrect_answers: ["Thrust", "Drag", "Weight "]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which type of rock is created by intense heat AND pressure?",
    correct_answer: "Metamorphic",
    incorrect_answers: ["Sedimentary", "Igneous", "Diamond"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many planets are in our Solar System?",
    correct_answer: "Eight",
    incorrect_answers: ["Nine", "Seven", "Ten"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many legs is it biologically impossible for a centipede to have?",
    correct_answer: "100",
    incorrect_answers: ["26", "50", "74"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What was the first living creature in space?",
    correct_answer: "Fruit Flies ",
    incorrect_answers: ["Monkey", "Dog", "Mouse"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "What common name is given to the medial condition, tibial stress syndrome (MTSS)?",
    correct_answer: "Shin Splints",
    incorrect_answers: [
      "Tennis Elbow",
      "Carpal Tunnel",
      "Housemaid&#039;s Knee"
    ]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Gannymede is the largest moon of which planet?",
    correct_answer: "Jupiter",
    incorrect_answers: ["Uranus", "Neptune", "Mars"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the powerhouse of the cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Ribosome", "Redbull", "Nucleus"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which element has the atomic number of 7?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Hydrogen", "Neon"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
    correct_answer: "Haplogroup U",
    incorrect_answers: ["Haplogroup L", "Haplogroup T", "Haplogroup J"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
    correct_answer: "2",
    incorrect_answers: ["0", "1", "5"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the chemical makeup of water?",
    correct_answer: "H20",
    incorrect_answers: ["C12H6O2", "CO2", "H"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Which horizon in a soil profile consists of bedrock?",
    correct_answer: "R",
    incorrect_answers: ["O", "B", "D"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "The &quot;Tibia&quot; is found in which part of the body?",
    correct_answer: "Leg",
    incorrect_answers: ["Arm", "Hand", "Head"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the scientific name of the knee cap?",
    correct_answer: "Patella",
    incorrect_answers: ["Femur", "Foramen Magnum", "Scapula"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "Alzheimer&#039;s disease primarily affects which part of the human body?",
    correct_answer: "Brain",
    incorrect_answers: ["Lungs", "Skin", "Heart"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is the chemical formula for ammonia?",
    correct_answer: "NH3",
    incorrect_answers: ["CO2", "NO3", "CH4"]
  },
  {
    category: "Science & Nature",
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
    category: "Science & Nature",
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
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Where did the dog breed &quot;Chihuahua&quot; originate?",
    correct_answer: "Mexico",
    incorrect_answers: ["France", "Spain", "Russia"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "What polymer is used to make CDs, safety goggles and riot shields?",
    correct_answer: "Polycarbonate",
    incorrect_answers: ["Rubber", "Nylon", "Bakelite"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the chemical element Curium named after?",
    correct_answer: "Marie &amp; Pierre Curie",
    incorrect_answers: [
      "The Curiosity Rover",
      "Curious George",
      "Stephen Curry"
    ]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "&quot;The Big Bang Theory&quot; was first theorized by a priest of what religious ideology?",
    correct_answer: "Catholic",
    incorrect_answers: ["Christian", "Jewish", "Islamic"]
  },
  {
    category: "Science & Nature",
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
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "After which Danish city is the 72th element on the periodic table named?",
    correct_answer: "Copenhagen",
    incorrect_answers: ["Odense", "Herning", "Skagen"]
  },
  {
    category: "Science & Nature",
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
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "The human heart has how many chambers?",
    correct_answer: "4",
    incorrect_answers: ["2", "6", "3"]
  },
  {
    category: "Science & Nature",
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
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Human cells typically have how many copies of each gene?",
    correct_answer: "2",
    incorrect_answers: ["1", "4", "3"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which is the most abundant element in the universe?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Lithium", "Oxygen"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the molecular formula of Ozone?",
    correct_answer: "O3",
    incorrect_answers: ["C6H2O6", "N2O", "SO4"]
  },
  {
    category: "Science & Nature",
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
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which element has the highest melting point?",
    correct_answer: "Carbon",
    incorrect_answers: ["Tungsten", "Platinum", "Osmium"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the standard atomic weight of a Plutonium nucleus?",
    correct_answer: "244",
    incorrect_answers: ["94", "481", "128"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Deuterium is an isotope of which element?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Nitrogen", "Helium", "Neon"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the same in Celsius and Fahrenheit?",
    correct_answer: "-40",
    incorrect_answers: ["32", "-39", "-42"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is radiation measured in?",
    correct_answer: "Gray ",
    incorrect_answers: ["Watt", "Decibel", "Kelvin"]
  },
  {
    category: "Science & Nature",
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
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "What part of the brain takes its name from the Greek for seahorse?",
    correct_answer: "Hippocampus",
    incorrect_answers: ["Cerebellum", "Thalamus", "Amygdala"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What do you study if you are studying entomology?",
    correct_answer: "Insects",
    incorrect_answers: ["Humans", "the Brain", "Fish"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Coulrophobia is the irrational fear of what?",
    correct_answer: "Clowns",
    incorrect_answers: ["Cemeteries", "Needles", "Tunnels"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which chemical element was originally known as Alabamine?",
    correct_answer: "Astatine",
    incorrect_answers: ["Selenium", "Antimony", "Molybdenum"]
  },
  {
    category: "Science & Nature",
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
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following men does not have a chemical element named after him?",
    correct_answer: "Sir Isaac Newton",
    incorrect_answers: ["Albert Einstein", "Niels Bohr", "Enrico Fermi"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Down Syndrome is usually caused by an extra copy of which chromosome?",
    correct_answer: "21",
    incorrect_answers: ["23", "15", "24"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Electronic music producer Kygo&#039;s popularity skyrocketed after a certain remix. Which song did he remix?",
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
    incorrect_answers: ["Royal Oak", "White Hart", "King&#039;s Head"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the world&#039;s most expensive spice by weight?",
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
    difficulty: "hard",
    question:
      "What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?",
    correct_answer: "Bulldog",
    incorrect_answers: ["Yorkshire Terrier", "Boxer", "Pug"]
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
    difficulty: "easy",
    question:
      "What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?",
    correct_answer: "Mike",
    incorrect_answers: ["Matthew", "Mark", "Max"]
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
    difficulty: "easy",
    question: "In past times, what would a gentleman keep in his fob pocket?",
    correct_answer: "Watch",
    incorrect_answers: ["Money", "Keys", "Notebook"]
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
    difficulty: "medium",
    question: "Scotch whisky and Drambuie make up which cocktail?",
    correct_answer: "Rusty Nail",
    incorrect_answers: ["Screwdriver", "Sex on the Beach", "Manhattan"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
    correct_answer: "Subscriber",
    incorrect_answers: ["Single", "Secure", "Solid"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
    correct_answer: "Tango",
    incorrect_answers: ["Target", "Taxi", "Turkey"]
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
    difficulty: "medium",
    question: "What is a &quot;dakimakura&quot;?",
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
    difficulty: "hard",
    question: "Which of the following is not another name for the eggplant?",
    correct_answer: "Potimarron",
    incorrect_answers: ["Brinjal", "Guinea Squash", "Melongene"]
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
    question: "A factiod is what?",
    correct_answer: "A falsehood",
    incorrect_answers: ["Useless trivia", "A tiny fact", "A scientific figure"]
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
    question:
      "Which of the following is an existing family in &quot;The Sims&quot;?",
    correct_answer: "The Goth Family",
    incorrect_answers: ["The Family", "The Simoleon Family", "The Proud Family"]
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
    difficulty: "medium",
    question: "What is the romanized Japanese word for &quot;university&quot;?",
    correct_answer: "Daigaku",
    incorrect_answers: ["Toshokan", "Jimusho", "Shokudou"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "The Swedish word &quot;Grunka&quot; means what in English?",
    correct_answer: "Thing",
    incorrect_answers: ["People", "Place", "Pineapple"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "The term &quot;scientist&quot; was coined in which year?",
    correct_answer: "1833",
    incorrect_answers: ["1933", "1942", "1796"]
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
    difficulty: "easy",
    question: "Which one of these is not a typical European sword design?",
    correct_answer: "Scimitar",
    incorrect_answers: ["Falchion", "Ulfberht", "Flamberge"]
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
    question: "What was Mountain Dew&#039;s original slogan?",
    correct_answer: "Yahoo! Mountain Dew... It&#039;ll tickle your innards!",
    incorrect_answers: [
      "Give Me A Dew",
      "Do The Dew",
      "Get&#039; that barefoot feelin&#039; drinkin&#039; Mountain Dew"
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
    difficulty: "hard",
    question:
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "What does the Latin phrase &quot;Veni, vidi, vici&quot; translate into English?",
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
    question: "When did the website &quot;Facebook&quot; launch?",
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
      "Which slogan did the fast food company, McDonald&#039;s, use before their &quot;I&#039;m Lovin&#039; It&quot; slogan?",
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
    difficulty: "medium",
    question: "Whose greyscale face is on the kappa emoticon on Twitch?",
    correct_answer: "Josh DeSeno",
    incorrect_answers: ["Justin DeSeno", "John DeSeno", "Jimmy DeSeno"]
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
      "The Quadrangularis Reversum is best described as which of the following?",
    correct_answer: "A percussion instrument",
    incorrect_answers: [
      "A building in Oxford University",
      "A chess move",
      "A geometric theorem"
    ]
  }
];
