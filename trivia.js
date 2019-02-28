const results = [
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question: "Who wrote &quot;Harry Potter&quot;?",
    correct_answer: "J.K. Rowling",
    incorrect_answers: ["J.R.R. Tolkien", "Terry Pratchett", "Daniel Radcliffe"]
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
    difficulty: "medium",
    question:
      "Who wrote the 1967 horror novel &quot;Rosemary&#039;s Baby&quot;?",
    correct_answer: "Ira Levin",
    incorrect_answers: ["Stephen King", "Robert Bloch", "Mary Shelley"]
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
    difficulty: "hard",
    question: "What is Ron Weasley&#039;s middle name?",
    correct_answer: "Bilius",
    incorrect_answers: ["Arthur", "John", "Dominic"]
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
    difficulty: "medium",
    question:
      "Who wrote the children&#039;s story &quot;The Little Match Girl&quot;?",
    correct_answer: "Hans Christian Andersen",
    incorrect_answers: ["Charles Dickens", "Lewis Carroll", "Oscar Wilde"]
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
    difficulty: "easy",
    question: "How many Harry Potter books are there?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "6"]
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
      "Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?",
    correct_answer: "William Golding",
    incorrect_answers: ["Stephen King", "F. Scott Fitzgerald", "Hunter Fox"]
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
    difficulty: "medium",
    question:
      "In the year 1818, novelist Mary Shelly is credited with writing a fiction novel and creating this infamous character.",
    correct_answer: "Frankenstein&#039;s monster",
    incorrect_answers: ["Dracula", "The Thing", "The Invisible Man"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "The title of Adolf Hitler&#039;s autobiography &quot;Mein Kampf&quot; is what when translated to English?",
    correct_answer: "My Struggle",
    incorrect_answers: ["My Hatred", "My Sadness", "My Desire"]
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
      "In the &quot;Harry Potter&quot; novels, what must a Hogwarts student do to enter the Ravenclaw Common Room?",
    correct_answer: "Answer a riddle",
    incorrect_answers: [
      "Rhythmically tap barrels with a wand",
      "Speak a password",
      "Knock in sequence"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the gang that Ponyboy is a part of in the book, The Outsiders?",
    correct_answer: "The Greasers",
    incorrect_answers: ["The Outsiders", "The Mafia", "The Socs"]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "The book &quot;Fahrenheit 451&quot; was written by whom?",
    correct_answer: "Ray Bradbury",
    incorrect_answers: [
      "R. L. Stine",
      "Wolfgang Amadeus Mozart",
      "Stephen King"
    ]
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
      "What was the last message of the Dolphins in &quot;The Hitchhiker&#039;s Guide to the Galaxy&quot;?",
    correct_answer: "&quot;So long, and thanks for all the fish.&quot;",
    incorrect_answers: [
      "&quot;The answer is 42.&quot;",
      "&quot;Land of the brave.&quot;",
      "&quot;Goodbye cruel world!&quot;"
    ]
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Margaret Atwood&#039;s &quot;The Handmaid&#039;s Tale&quot;, what is Offred&#039;s real name is implied to be?",
    correct_answer: "June",
    incorrect_answers: ["August", "April", "May"]
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
    difficulty: "medium",
    question:
      "In Alice in Wonderland, what is the name of Alice&#039;s kitten?",
    correct_answer: "Dinah",
    incorrect_answers: ["Oscar", "Heath", "Smokey"]
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
    difficulty: "easy",
    question:
      "In the name of the fictional SCP Foundation, what does the &quot;SCP&quot; stand for?",
    correct_answer: "Special Containment Procedures",
    incorrect_answers: [
      "Secure, Contain, Protect",
      "Supernatural Creature Preservation",
      "Silent Community Protection"
    ]
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
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following is NOT a quote from the 1942 film Casablanca? ",
    correct_answer: "&quot;Frankly, my dear, I don&#039;t give a damn.&quot;",
    incorrect_answers: [
      "&quot;Here&#039;s lookin&#039; at you, kid.&quot;",
      "&ldquo;Of all the gin joints, in all the towns, in all the world, she walks into mine&hellip;&rdquo;",
      "&quot;Round up the usual suspects.&quot;"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "Who directed &quot;E.T. the Extra-Terrestrial&quot; (1982)?",
    correct_answer: "Steven Spielberg",
    incorrect_answers: ["Stanley Kubrick", "James Cameron", "Tim Burton"]
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
      "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
    correct_answer: "Chicago",
    incorrect_answers: ["Dreamgirls", "Cabaret", "All That Jazz"]
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
    difficulty: "easy",
    question:
      "What was Dorothy&#039;s surname in &#039;The Wizard Of Oz&#039;?",
    correct_answer: "Gale",
    incorrect_answers: ["Perkins", "Day", "Parker"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
    correct_answer: "Auric Goldfinger",
    incorrect_answers: ["Dr. Julius No", "Rosa Klebb", "Emilio Largo"]
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
      "What is the orange and white bot&#039;s name in &quot;Star Wars: The Force Awakens&quot;?",
    correct_answer: "BB-8",
    incorrect_answers: ["BB-3", "AA-A", "R2-D2"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question: "In what year was the first Transformers movie released?",
    correct_answer: "1986",
    incorrect_answers: ["2007", "1984", "2009"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What does TIE stand for in reference to the TIE Fighter in &quot;Star Wars&quot;?",
    correct_answer: "Twin Ion Engine",
    incorrect_answers: [
      "Twin Iron Engine",
      "Twin Intercepter Engine",
      "Twin Inception Engine"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first James Bond film?",
    correct_answer: "Dr. No",
    incorrect_answers: ["Goldfinger", "From Russia With Love", "Thunderball"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the Artificial Intelligence system in the 1983 film, &quot;WarGames&quot;?",
    correct_answer: "War Operation Plan Response",
    incorrect_answers: [
      "Self Evolving Thought Helix",
      "Master Control Program",
      "West Campus Analog Computer"
    ]
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
    difficulty: "easy",
    question: "Which of these movies did Jeff Bridges not star in?",
    correct_answer: "The Hateful Eight",
    incorrect_answers: ["Tron: Legacy", "The Giver", "True Grit"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "Who plays Alice in the Resident Evil movies?",
    correct_answer: "Milla Jovovich",
    incorrect_answers: ["Madison Derpe", "Milla Johnson", "Kim Demp"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 2012, which movie won every category in the 32nd &quot;Golden Raspberry Awards&quot;?",
    correct_answer: "Jack and Jill",
    incorrect_answers: [
      "The Girl with the Dragon Tattoo",
      "Thor",
      "The King&#039;s Speech"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "The 1939 movie &quot;The Wizard of Oz&quot; contained a horse that changed color, what material did they use to achieve this effect?",
    correct_answer: "Gelatin",
    incorrect_answers: ["Dye", "Paint", "CGI Effect"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which one of these actors is said to be cut from the film &#039;E.T. the Extra-Terrestrial&#039;?",
    correct_answer: "Harrison Ford",
    incorrect_answers: [
      "Michael J. Fox",
      "Andy Kaufman",
      "Arnold Schwarzenegger"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who is the main protagonist in, the 1985 film, Back to the Future?",
    correct_answer: "Marty McFly",
    incorrect_answers: [
      "Emmett &quot;Doc&quot; Brown",
      "Biff Tannen",
      "George McFly"
    ]
  },
  {
    category: "Entertainment: Film",
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
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the 1964 film &quot;Zulu&quot;, what song does the British Army company sing before the final battle?",
    correct_answer: "Men of Harlech",
    incorrect_answers: [
      "Scotland the Brave",
      "Colonel Bogey March",
      "The British Grenadiers"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the correct phrase for the Latin saying &quot;Romanes Eunt Domus&quot; in Monty Python&#039;s Life of Brian?",
    correct_answer: "Romani Ite Domum",
    incorrect_answers: [
      "Romans Go Home",
      "Roxani Ite Domum",
      "Tomate Ite Domum"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question: "In the movie &quot;Scream&quot; who is Ghost Face?",
    correct_answer: "Billy Loomis and Stu Macher",
    incorrect_answers: [
      "Dewey Riley",
      "Sidney Prescott",
      "Archie Prescott and Philip Marv"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who voices the main character Blu in the 2011 animated film &quot;Rio&quot;?",
    correct_answer: "Jesse Eisenberg",
    incorrect_answers: ["Michael Cera", "Jonah Hill", "Zach Galifianakis"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the movie &quot;Spaceballs&quot;, what are the Spaceballs attempting to steal from Planet Druidia?",
    correct_answer: "Air",
    incorrect_answers: ["The Schwartz", "Princess Lonestar", "Meatballs"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film?",
    correct_answer: "Tom Bombadil",
    incorrect_answers: ["Strider", "Barliman Butterbur", "Celeborn"]
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
      "&quot;The first rule is: you don&#039;t talk about it&quot; is a reference to which movie?",
    correct_answer: "Fight Club",
    incorrect_answers: ["The Island", "Unthinkable", "American Pie"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "In the 2012 film, &quot;The Lorax&quot;, who is the antagonist?",
    correct_answer: "Aloysius O&#039;Hare",
    incorrect_answers: ["Ted Wiggins", "The Once-Ler", "Grammy Norma"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the 1992 film &quot;Army of Darkness&quot;, what name does Ash give to his double-barreled shotgun?",
    correct_answer: "Boomstick",
    incorrect_answers: ["Bloomstick", "Blastbranch", "2-Pump Chump"]
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
      "In which movie does Robin Williams&#039; character have to disguise themselves into a woman?",
    correct_answer: "Mrs. Doubtfire",
    incorrect_answers: ["Old Dogs", "Jumanji", "Awakenings"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the director of the 1991 film &quot;Silence of the Lambs&quot;?",
    correct_answer: "Jonathan Demme",
    incorrect_answers: ["Stanley Kubrick", "Frank Darabont", "Michael Bay"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "In &quot;Star Trek Nemesis&quot;, why was Praetor Shinzon created?",
    correct_answer: "To replace Picard as a Romulan Agent",
    incorrect_answers: [
      "To destroy the Enterprise",
      "To become Picard&#039;s friend ",
      "To steal the Enterprise"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "In what year did Clint Eastwood star as Inspector Harry Callahan in the film &quot;Dirty Harry&quot;?",
    correct_answer: "1971",
    incorrect_answers: ["1975", "1983", "1969"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to &quot;Star Wars&quot; lore, which planet does Obi-Wan Kenobi come from?",
    correct_answer: "Stewjon",
    incorrect_answers: ["Alderaan", "Tatooine", "Naboo"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the &quot;Jurassic Park&quot; universe, what was the first dinosaur cloned by InGen in 1986?",
    correct_answer: "Velociraptor",
    incorrect_answers: ["Triceratops", "Troodon", "Brachiosaurus"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was Bruce Campbell&#039;s iconic one-liner after getting a chainsaw hand in Evil Dead 2?",
    correct_answer: "Groovy.",
    incorrect_answers: ["Gnarly.", "Perfect.", "Nice."]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the species of the &quot;Predator&quot; in the 1987 movie &quot;Predator&quot;?",
    correct_answer: "Yautja",
    incorrect_answers: ["Xenomorph", "Praetorian", "Phocrex"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which actor plays the character &quot;Tommy Jarvis&quot; in &quot;Friday the 13th: The Final Chapter&quot; (1984)?",
    correct_answer: "Corey Feldman",
    incorrect_answers: ["Macaulay Culkin", "Mel Gibson", "Mark Hamill"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which former Star Trek actor directed Three Men and a Baby (1987)?",
    correct_answer: "Leonard Nimoy",
    incorrect_answers: ["William Shatner", "George Takei", "James Doohan"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question: "In Finding Nemo, what was the name of Nemo&#039;s mom?",
    correct_answer: "Coral",
    incorrect_answers: ["Sandy", "Pearl", "Shelly"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "In Big Hero 6, what fictional city is the Big Hero 6 from?",
    correct_answer: "San Fransokyo",
    incorrect_answers: ["San Tokyo", "Tokysisco", "Sankyo"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question: "In the Friday The 13th series, what year did Jason drown in?",
    correct_answer: "1957",
    incorrect_answers: ["1955", "1953", "1959"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What film did James Cameron&#039;s Avatar dethrone as the highest-grossing film ever?",
    correct_answer: "Titanic",
    incorrect_answers: ["Star Wars", "Gone with the Wind", "Jaws"]
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
    difficulty: "hard",
    question:
      "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
    correct_answer: "Hammer",
    incorrect_answers: ["Wrench", "Drill", "Screwdriver"]
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
      "Who was the British professional wrestler Shirley Crabtree better known as?",
    correct_answer: "Big Daddy",
    incorrect_answers: ["Giant Haystacks", "Kendo Nagasaki", "Masambula"]
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
    question: "Which team won the 2015-16 English Premier League?",
    correct_answer: "Leicester City",
    incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "A stimpmeter measures the speed of a ball over what surface?",
    correct_answer: "Golf Putting Green",
    incorrect_answers: [" Football Pitch", "Cricket Outfield", "Pinball Table"]
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
    question: "Which country will host the 2020 Summer Olympics?",
    correct_answer: "Japan",
    incorrect_answers: ["China", "Australia", "Germany"]
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
    difficulty: "medium",
    question: "Which country is hosting the 2022 FIFA World Cup?",
    correct_answer: "Qatar",
    incorrect_answers: ["Uganda", "Vietnam", "Bolivia"]
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
    difficulty: "medium",
    question:
      "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
    correct_answer: "84.39m",
    incorrect_answers: ["100m", "100yd", "109.36yd"]
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
    difficulty: "easy",
    question:
      "What was the name of the police officer in the cartoon &quot;Top Cat&quot;?",
    correct_answer: "Dibble",
    incorrect_answers: ["Barbrady", "Mahoney", "Murphy"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which character was played by Dustin Diamond in the sitcom &#039;Saved by the Bell&#039;?",
    correct_answer: "Screech",
    incorrect_answers: ["Zack", "Mr. Belding", "A.C. Slater"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, &#039;Top Gear&#039;?",
    correct_answer: "Jessica",
    incorrect_answers: ["Angela", "Erica", "Sandra"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the TV show &#039;M*A*S*H&#039;, what was the nickname of Corporal Walter O&#039;Reilly?",
    correct_answer: "Radar",
    incorrect_answers: ["Hawkeye", "Hot Lips", "Trapper"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "Who sang the theme song for the TV show &#039;Rawhide&#039;?",
    correct_answer: "Frankie Laine",
    incorrect_answers: ["Guy Mitchell", " Tennessee Ernie Ford", "Slim Whitman"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "In what year did &quot;The Big Bang Theory&quot; debut on CBS?",
    correct_answer: "2007",
    incorrect_answers: ["2008", "2006", "2009"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "The theme for the popular science fiction series &quot;Doctor Who&quot; was composed by who?",
    correct_answer: "Ron Grainer",
    incorrect_answers: ["Murray Gold", "Delia Derbyshire", "Peter Howell"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the original Star Trek TV series, what was Captain James T. Kirk&#039;s middle name?",
    correct_answer: "Tiberius",
    incorrect_answers: ["Trevor", "Travis", "Tyrone"]
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
      "What is the setting of the show &quot;Parks and Recreation&quot;?",
    correct_answer: "Pawnee, Indiana",
    incorrect_answers: [
      "Eagleton, Indiana",
      "Pasadena, California",
      "London, England"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the star of the TV series &quot;24&quot;?",
    correct_answer: "Kiefer Sutherland",
    incorrect_answers: ["Kevin Bacon", "Hugh Laurie", "Rob Lowe"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Breaking Bad, the initials W.W. refer to which of the following?",
    correct_answer: "Walter White",
    incorrect_answers: ["William Wolf", "Willy Wonka", "Wally Walrus"]
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
    question: "Who is the main character in the show &quot;Burn Notice&quot;?",
    correct_answer: "Michael Westen",
    incorrect_answers: ["Sam Axe", "Fiona Glenanne", "Madeline Westen"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question: "In the Star Trek universe, what color is Vulcan blood?",
    correct_answer: "Green",
    incorrect_answers: ["Blue", "Red", "Purple"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Naruto: Shippuden, which of the following elements is a &quot;Kekkei Tōta?&quot;",
    correct_answer: "Particle Style",
    incorrect_answers: ["Any Doujutsu", "Shadow Style", "Ice Style"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question: "When did the TV show Rick and Morty first air on Adult Swim?",
    correct_answer: "2013",
    incorrect_answers: ["2014", "2016", "2015"]
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
    difficulty: "hard",
    question:
      "Which country does the YouTuber &quot;SinowBeats&quot; originate from?",
    correct_answer: "Scotland",
    incorrect_answers: ["England", "Sweden", "Germany"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the name of the the first episode of Doctor Who to air in 1963?",
    correct_answer: "An Unearthly Child",
    incorrect_answers: ["The Daleks", "The Aztecs", "The Edge of Destruction"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;The Big Bang Theory&quot;, what is Howard Wolowitz&#039;s nickname in World of Warcraft?",
    correct_answer: "Wolowizard",
    incorrect_answers: ["Sheldor", "Rajesh", "Priya"]
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
    difficulty: "easy",
    question: "Who won Big Brother 2014 UK?",
    correct_answer: "Helen Wood",
    incorrect_answers: [
      "Christopher Hall",
      "Pauline Bennett",
      "Pavandeep &quot;Pav&quot; Paul"
    ]
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
    difficulty: "hard",
    question:
      "In &quot;Donkey Kong Country&quot;, why does Donkey Kong want to know the secret of the crystal coconut?",
    correct_answer: "He&#039;s the big kahuna.",
    incorrect_answers: [
      "To find out where all the bananas are.",
      "Because Diddy Kong forced him.",
      "He wants to punish brutes."
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the TV Show &quot;Donkey Kong Country&quot;, which episode did the song &quot;Eddie, Let Me Go Back To My Home&quot; play in?",
    correct_answer: "It&#039;s a Wonderful Life",
    incorrect_answers: [
      "Message In A Bottle Show",
      "To The Moon Baboon",
      "Ape-Nesia"
    ]
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
    question: "What is the Klingon&#039;s afterlife called?",
    correct_answer: "Sto-vo-kor",
    incorrect_answers: ["Valhalla", "Karon&#039;gahk", "New Jersey"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In &quot;Star Trek&quot;, who was the founder of the Klingon Empire and its philosophy?",
    correct_answer: "Kahless the Unforgettable",
    incorrect_answers: [
      "Lady Lukara of the Great Hall",
      "Molor the Unforgiving",
      "Dahar Master Kor"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "In &quot;Star Trek&quot;, what is the Klingon death ritual?",
    correct_answer: "Look into sky and yell loudly in mourning.",
    incorrect_answers: [
      "Kiss the jagged forehead before burial.",
      "Shoot into space in a torpedo casing.",
      "Split the deceased&#039;s earnings between bloodkin."
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
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show &quot;Stargate Universe&quot; have?",
    correct_answer: "2",
    incorrect_answers: ["10", "5", "3"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "What breed of dog is &quot;Scooby Doo&quot;?",
    correct_answer: "Great Dane",
    incorrect_answers: ["Pit bull", "Boxer", "Doberman Pinscher"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "In 2008, British celebrity chef Gordon Ramsay believes he almost died after suffering what accident in Iceland while filming?",
    correct_answer: "Slipping off a cliff, and nearly drowning in icy water",
    incorrect_answers: [
      "Crash landing when arriving at Keflav&iacute;k airport",
      "A minor car accident in a snowstorm",
      "Being served under-cooked chicken at his hotel"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these voices wasn&#039;t a choice for the House AI in &quot;The Simpsons Treehouse of Horror&quot; short, House of Whacks?",
    correct_answer: "George Clooney",
    incorrect_answers: ["Matthew Perry", "Dennis Miller", "Pierce Brosnan"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What episode of &quot;Mr. Bean&quot; saw him trying to prevent people from seeing him naked?",
    correct_answer: "Mr. Bean in Room 426",
    incorrect_answers: [
      "Mr. Bean Goes to Town",
      "The Trouble with Mr. Bean",
      "Back to School Mr. Bean"
    ]
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
      "In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?",
    correct_answer: "Laura Roslin",
    incorrect_answers: ["William Adama", "Tricia Helfer", "Harry Stills"]
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
      "What NBC sitcom once saw two of its characters try to pitch NBC on a sitcom about nothing?",
    correct_answer: "Seinfeld",
    incorrect_answers: ["Frasier", "Becker", "Friends"]
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
    difficulty: "easy",
    question:
      "On the NBC show Community, whose catch-phrase was &quot;Pop! Pop!&quot;?",
    correct_answer: "Magnitude",
    incorrect_answers: ["Star Burns", "Leonard", "Senoir Chang"]
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
    type: "multiple",
    difficulty: "easy",
    question: "Which Greek letter represents the &quot;Half-Life&quot; logo?",
    correct_answer: "Lambda",
    incorrect_answers: ["Omega", "Alpha", "Sigma"]
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
    difficulty: "medium",
    question: "What was the game &quot;Galaga&quot; was a sequel to?",
    correct_answer: "Galaxian",
    incorrect_answers: ["Galactica", "Space Invaders", "Galactic Wars"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the game &quot;The Sims&quot;, how many Simoleons does each family start with?",
    correct_answer: "20,000",
    incorrect_answers: ["10,000", "15,000", "25,000"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What engine did the original &quot;Half-Life&quot; run on?",
    correct_answer: "GoldSrc",
    incorrect_answers: ["Source", "Quake", "Unreal"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most expensive weapon in Counter-Strike: Global Offensive?",
    correct_answer: "Scar-20/G3SG1",
    incorrect_answers: ["M4A1", "AWP", "R8 Revolver"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these is a type of monster found in Minecraft?",
    correct_answer: "Skeleton",
    incorrect_answers: ["Werewolf", "Vampire", "Minotaur"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the nickname of the original model for Half-Life&#039;s protagonist Gordon Freeman?",
    correct_answer: "Ivan the Space Biker",
    incorrect_answers: [
      "Gordon the Space Biker",
      "Ivan the Alien Biker",
      "Gordon the Alien Biker"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which student in Yandere Simulator is known for asking irritating and stupid questions?",
    correct_answer: "Midori Gurin",
    incorrect_answers: ["Kokona Hruka", "Oka Ruto", "Pipi Osu"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Portal 2, the iconic character GLaDOS is turned into:",
    correct_answer: "A potato",
    incorrect_answers: ["A tomato", "A lemon", "An apple"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of the Secret Organization in the Hotline Miami series? ",
    correct_answer: "50 Blessings",
    incorrect_answers: [
      "American Blessings",
      "50 Saints",
      "USSR&#039;s Blessings"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the beta version of the 1986 game &quot;The Legend of Zelda&quot;, players have the choice between a sword and what other item?",
    correct_answer: "Boomerang ",
    incorrect_answers: ["Spear", "Slingshot", "Crossbow"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "By how many minutes are you late to work in &quot;Half-Life&quot;?",
    correct_answer: "30",
    incorrect_answers: ["5", "60", "15"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what Half-Life expansion can you find Gordon&#039;s picture in an &quot;Employee of the Month&quot; picture frame?",
    correct_answer: "Half-Life: Opposing Force",
    incorrect_answers: [
      "Half-Life: Blue Shift",
      "Half-Life: Decay",
      "They Hunger"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Overwatch&quot;, what is the name of Mercy&#039;s &quot;ultimate ability&quot;?",
    correct_answer: "Valkyrie",
    incorrect_answers: ["Earthshatter", "Rocket Barrage", "Molten Core"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In &quot;Fallout 4&quot; which faction is not present in the game?",
    correct_answer: "The Enclave",
    incorrect_answers: [
      "The Minutemen",
      "The Brotherhood of Steel",
      "The Institute"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
    correct_answer: "Goombario",
    incorrect_answers: ["Goombella", "Goombarry", "Goomby"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What year was the game Dishonored released?",
    correct_answer: "2012",
    incorrect_answers: ["2011", "2008", "2013"]
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
    difficulty: "medium",
    question:
      "Who created the pump &quot;F.L.U.D.D.&quot; Mario uses in Super Mario Sunshine?",
    correct_answer: "Elvin Gadd",
    incorrect_answers: ["Robert Fludd", "Nirona", "Crygor"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In World of Warcraft lore, which of the following is known as the God of Spiders in the troll&#039;s loa beliefs?",
    correct_answer: "Elortha no Shadra",
    incorrect_answers: ["Bwonsamdi", "Hakkar", "Shirvallah"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following characters is NOT a female marriage candidate in the game Stardew Valley?",
    correct_answer: "Caroline",
    incorrect_answers: ["Abigail", "Haley", "Leah"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:",
    correct_answer: "Rhyme",
    incorrect_answers: ["Shiki", "Joshua", "Beat"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game &quot;Terraria&quot;, which of these bosses are pre-hardmode bosses?",
    correct_answer: "Eye of Cthulhu",
    incorrect_answers: ["Plantera", "Skeletron Prime", "The Destroyer"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the game created by Masahiro Sakurai and Satoru Iwata that would eventually evolve into &quot;Super Smash Bros.&quot;?",
    correct_answer: "Dragon King: The Fighting Game",
    incorrect_answers: [
      "Nintendo Legends: Fight!",
      "Martial Arts: King of the Hill",
      "Aerial Warriors: Supreme Battle"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of the protagonist of Metal Gear Solid V: The Phantom Pain?",
    correct_answer: "Punished &quot;Venom&quot; Snake",
    incorrect_answers: ["Miller", "Solid Snake", "Ocelot"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Pok&eacute;mon series, what is Palkia&#039;s hidden ability?",
    correct_answer: "Telepathy",
    incorrect_answers: ["Pressure", "Water Bubble", "Hydration"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "&quot;Gimmick!&quot; is a Japanese Famicom game that uses a sound chip expansion in the cartridge. What is it called?",
    correct_answer: "FME-7",
    incorrect_answers: ["VRC7", "VRC6", "MMC5"]
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
    type: "multiple",
    difficulty: "easy",
    question: "Who is the main protagonist in Danganronpa 2: Goodbye Despair?",
    correct_answer: "Hajime Hinata",
    incorrect_answers: ["Nagito Komaeda", "Makoto Naegi", "Junko Enoshima"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Call Of Duty: Zombies&quot;, what does the game traditionally reward you for completing a boss round?",
    correct_answer: "Max Ammo",
    incorrect_answers: ["A Pack-A-Punched gun", "Death Machine", "Monkey Bombs"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Call of Duty: Zombies&quot;, what group does Doctor Maxis work for?",
    correct_answer: "Group 935",
    incorrect_answers: ["Group Reanimate", "Group Rezurrection", "Division 9"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What was the release date of &quot;Grand Theft Auto IV&quot;?",
    correct_answer: "April 29, 2008",
    incorrect_answers: ["May 21, 2009", "June 22, 2010", "July 28, 2008"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which character does the player play as in the video game &quot;Bastion&quot;?",
    correct_answer: "The Kid",
    incorrect_answers: ["Rucks", "Zulf", "Zia"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many games are there in the &quot;Colony Wars&quot; series for the PlayStation?",
    correct_answer: "3",
    incorrect_answers: ["2", "4", "5"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who created the &quot;Metal Gear&quot; Series?",
    correct_answer: "Hideo Kojima",
    incorrect_answers: ["Hiroshi Yamauchi", "Shigeru Miyamoto", "Gunpei Yokoi"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these characters won the Super Smash Bros. Fighter Ballot in 2015?",
    correct_answer: "Bayonetta",
    incorrect_answers: ["Cloud", "Ryu", "Megaman"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Portal, what color is the Intelligence Core?",
    correct_answer: "Blue",
    incorrect_answers: ["Purple", "Red", "Orange"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "The walls of the Goldenrod City Gym in &quot;Pok&eacute;mon Gold and Silver&quot; are arranged in the shape of which Pok&eacute;mon?",
    correct_answer: "Clefairy",
    incorrect_answers: ["Bulbasaur", "Pikachu", "Pidgey"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "&quot;Exile&quot; and &quot;Revelations&quot; were the third and fourth installments of which PC game series?",
    correct_answer: "Myst",
    incorrect_answers: ["Shivers", "Doom", "Tropico"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Guild Wars 2, what is the name of the home instance for the Charr race?",
    correct_answer: "Hero&#039;s Canton",
    incorrect_answers: [
      "Gladium Canton",
      "Praetor&#039;s Canton",
      "Ligacus Notos"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Guild Wars 2, which Chinese Zodiac sign is not represented in the Zodiac Weapon Set?",
    correct_answer: "Ox",
    incorrect_answers: ["Rabbit", "Tiger", "Goat"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Guild Wars 2, what is Tybalt&#039;s last name?",
    correct_answer: "Leftpaw",
    incorrect_answers: ["Wildeye", "Blightaxe", "Blackblood"]
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
    difficulty: "hard",
    question:
      "In Guild Wars 2, what is the name of the legendary mace with a disco ball as its head?",
    correct_answer: "The Moot",
    incorrect_answers: ["The Predator", "Quip", "The Dreamer"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of the City in Saints Row The Third?",
    correct_answer: "Steelport",
    incorrect_answers: ["Stilwater", "Carcer", "Liberty"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the main villain of the Crash Bandicoot series?",
    correct_answer: "Dr. Neo Cortex",
    incorrect_answers: ["Dr. Evo-Cortex", "Dr. Cortox", "Sir Cartex"]
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
    question: "Which actress&#039;s real name was Frances Ethel Gumm?",
    correct_answer: "Judy Garland",
    incorrect_answers: ["Doris Day", "Julie Andrews", "Marilyn Monroe"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of Jontron&#039;s parrot?",
    correct_answer: "Jacques",
    incorrect_answers: ["Jak", "John", "Jaques"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the real name of &quot;moot&quot;, founder of the imageboard 4chan?",
    correct_answer: "Christopher Poole",
    incorrect_answers: ["Mark Zuckerberg", "Allison Harvard", "Catie Wayne"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question: "What is Doug Walker&#039;s YouTube name?",
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
    question: "Donald J. Trump&#039;s Middle Name is...",
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
      "What was the religion of famous singer &quot;Freddie Mercury&quot;?",
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
    correct_answer: "5&prime; 7&Prime;",
    incorrect_answers: [
      "5&prime; 9&Prime;",
      "5&prime; 4&Prime;",
      "5&prime; 5&Prime;"
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
      "What is generally considered to be William Shakespeare&#039;s birth date?",
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
    question: "What was the name of Marilyn Monroe&#039;s first husband?",
    correct_answer: "James Dougherty",
    incorrect_answers: ["Joe Dimaggio", "Kirk Douglas", "Arthur Miller"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which radio personality calls himself &quot;The King of All Media&quot;?",
    correct_answer: "Howard Stern",
    incorrect_answers: ["Rush Limbaugh", "Pete Tong", "Ryan Seacrest"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "How much weight did Chris Pratt lose for his role as Star-Lord in &quot;Guardians of the Galaxy&quot;?",
    correct_answer: "60 lbs",
    incorrect_answers: ["30 lbs", "50 lbs", "70 lbs"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "Nikki Diamond portrayed which Gladiator in the 1992 TV show &quot;Gladiators&quot;?",
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
    question: "In what year did &quot;Bob Ross&quot; die?",
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
      "Ramsay&#039;s Kitchen Nightmares",
      "Hotel Hell",
      "Hell&#039;s Kitchen"
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
    question: "Who is &quot;James Rolfe&quot; better known as?",
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
    question: "Who was Donald Trump&#039;s first wife?",
    correct_answer: "Ivana Zeln&iacute;čkov&aacute;",
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
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the Ethiopian Wolf before they knew it was related to wolves?",
    correct_answer: "Simien Jackel",
    incorrect_answers: ["Ethiopian Coyote", "Amharic Fox", "Canis Simiensis"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "What does &quot;hippopotamus&quot; mean and in what langauge?",
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
    incorrect_answers: ["Lion", "Thomson&rsquo;s Gazelle", "Pronghorn Antelope"]
  },
  {
    category: "Animals",
    type: "multiple",
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
    type: "multiple",
    difficulty: "easy",
    question:
      "The Kākāpō is a large, flightless, nocturnal parrot native to which country?",
    correct_answer: "New Zealand",
    incorrect_answers: ["South Africa", "Australia", "Madagascar"]
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
    question: "What color/colour is a polar bear&#039;s skin?",
    correct_answer: "Black",
    incorrect_answers: ["White", "Pink", "Green"]
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
    question: "What is the scientific name for the &quot;Polar Bear&quot;?",
    correct_answer: "Ursus Maritimus",
    incorrect_answers: ["Polar Bear", "Ursus Spelaeus", "Ursus Arctos"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "What are rhino&#039;s horn made of?",
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
    question: "For what reason would a spotted hyena &quot;laugh&quot;?",
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
      "Which animal was part of an Russian domestication experiment in 1959?",
    correct_answer: "Foxes",
    incorrect_answers: ["Pigeons", "Bears", "Alligators"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question:
      "The now extinct species &quot;Thylacine&quot; was native to where?",
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
    question: "What is the Gray Wolf&#039;s scientific name?",
    correct_answer: "Canis Lupus",
    incorrect_answers: ["Canis Aureus", "Canis Latrans", "Canis Lupus Lycaon"]
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
    question: "What is Grumpy Cat&#039;s real name?",
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
    difficulty: "easy",
    question: "Which class of animals are newts members of?",
    correct_answer: "Amphibian",
    incorrect_answers: ["Fish", "Reptiles", "Mammals"]
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
    question: "Which species is a &quot;mountain chicken&quot;?",
    correct_answer: "Frog",
    incorrect_answers: ["Chicken", "Horse", "Fly"]
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "medium",
    question: "What is the fastest animal?",
    correct_answer: "Peregrine Falcon",
    incorrect_answers: ["Golden Eagle", "Cheetah", "Horsefly"]
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
      "Which of the following is another name for the &quot;Poecilotheria Metallica Tarantula&quot;?",
    correct_answer: "Gooty",
    incorrect_answers: ["Hopper", "Silver Stripe", "Woebegone"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who had hits in the 70s with the songs &quot;Lonely Boy&quot; and &quot;Never Let Her Slip Away&quot;?",
    correct_answer: "Andrew Gold",
    incorrect_answers: ["Elton John", "Leo Sayer", "Barry White "]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who had a 1973 hit with the song &#039;Hocus Pocus&#039;?",
    correct_answer: "Focus",
    incorrect_answers: ["Pilot", "Rush", "AC/DC"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the best selling artist of all time?",
    correct_answer: "The Beatles",
    incorrect_answers: ["Michael Jackson", "Elton John", "Elvis Presley"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which American family band had a 1986 top 10 hit with the song &#039;Crush On You&#039;?",
    correct_answer: "The Jets",
    incorrect_answers: ["DeBarge", "The Jacksons", "The Cover Girls"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Elton John hit starts with the line &quot;When are you gonna come down&quot;?",
    correct_answer: "Goodbye Yellow Brick Road",
    incorrect_answers: ["Rocket Man", "Bennie and the Jets", "Crocodile Rock"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who had a 1983 hit with the song &#039;Africa&#039;?",
    correct_answer: "Toto",
    incorrect_answers: ["Foreigner", "Steely Dan", "Journey"]
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
    difficulty: "easy",
    question: "Which English guitarist has the nickname &quot;Slowhand&quot;?",
    correct_answer: "Eric Clapton",
    incorrect_answers: ["Mark Knopfler", "Jeff Beck", "Jimmy Page"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Typically, how many keys are on a piano?",
    correct_answer: "88",
    incorrect_answers: ["24", "12", "96"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these songs was released in 1996?",
    correct_answer: "The Smashing Pumpkins - &quot;1979&quot;",
    incorrect_answers: [
      "Prince - &quot;1999&quot;",
      "James Blunt - &quot;1973&quot;",
      "David Bowie - &quot;1984&quot;"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Beatle led the way across the zebra crossing on the Abbey Road album cover?",
    correct_answer: "John",
    incorrect_answers: ["Paul", "George", "Ringo"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which M83 album is the song &quot;Midnight City&quot; featured in?",
    correct_answer: "Hurry Up, We&#039;re Dreaming",
    incorrect_answers: ["Saturdays = Youth", "Before the Dawn Heals Us", "Junk"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which song is not by TheFatRat?",
    correct_answer: "Ascent",
    incorrect_answers: ["Monody", "Windfall", "Infinite Power!"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who was not in the band &quot;The Smiths&quot;?",
    correct_answer: "Martin Chambers",
    incorrect_answers: ["Morrissey", "Andy Rourke", "Mike Joyce"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these artists do NOT originate from France?",
    correct_answer: "The Chemical Brothers",
    incorrect_answers: ["Air", "Justice", "Daft Punk"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "EDM record label Monstercat is based in which country?",
    correct_answer: "Canada",
    incorrect_answers: ["United States", "Australia", "United Kingdom"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the lead singer of Silverchair?",
    correct_answer: "Daniel Johns",
    incorrect_answers: ["Ben Gillies", "Chris Joannou", ""]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which brass instrument has the lowest pitch in an orchestra?",
    correct_answer: "Tuba",
    incorrect_answers: ["Trumpet", "Saxophone", "Trombone"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these is NOT a song featured on the Lockjaw EP released in 2013 by Flume &amp; Chet Faker?",
    correct_answer: "Left Alone",
    incorrect_answers: [
      "What About Us",
      "This Song Is Not About A Girl",
      "Drop The Game"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these songs is not by Tatsuro Yamashita?",
    correct_answer: "Lucky Lady Feel So Good ",
    incorrect_answers: [
      "Merry-Go Round",
      "Let&#039;s Dance Baby",
      "Love Talkin&#039;"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "May 16th of every year is known as __________ Day, named after a punk band prominent in the 1990s.",
    correct_answer: "Lagwagon",
    incorrect_answers: ["Goldfinger", "Less Than Jake", "Lit"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Mean Girls, who has breasts that tell when it&#039;s raining?",
    correct_answer: "Karen Smith",
    incorrect_answers: ["Gretchen Weiners", "Janice Ian", "Cady Heron"]
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
    question: "Who is the frontman of Muse?",
    correct_answer: "Matt Bellamy",
    incorrect_answers: ["Dominic Howard", "Thom Yorke", "Jonny Greenwood"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which 80s band is fronted by singer/guitarist Robert Smith?",
    correct_answer: "The Cure",
    incorrect_answers: ["The Smiths", "Echo &amp; the Bunnymen", "New Order"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who recorded the album called &quot;Down to the Moon&quot; in 1986?",
    correct_answer: "Andreas Vollenweider",
    incorrect_answers: ["Jean-Michel Jarre", "Bing Crosby", "Enya"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which song in Drake&#039;s &quot;Views&quot; features Future?",
    correct_answer: "Grammys",
    incorrect_answers: ["Too Good", "Faithful", "Pop Style"]
  },
  {
    category: "Entertainment: Music",
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
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "&quot;Drink the Sea&quot; is an album by which electronic music artist?",
    correct_answer: "The Glitch Mob",
    incorrect_answers: ["Avicii", "XXYYXX", "Flux Pavilion"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "In 2006, which band released their debut album &quot;A Fever You Can&#039;t Sweat Out&quot;?",
    correct_answer: "Panic! At the Disco",
    incorrect_answers: [
      "Twenty One Pilots",
      "My Chemical Romance",
      "Fall Out Boy"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who was featured in the song &quot;Words&quot; by Feint? ",
    correct_answer: "Laura Brehm",
    incorrect_answers: ["Anna Yvette ", "Danyka Nadeau", "Veela"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what film was the Michael Jackson song &quot;Will You Be There&quot; featured?",
    correct_answer: "Free Willy",
    incorrect_answers: ["Sleepless in Seattle", "Men in Black", "Bad Boys"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who performed &quot;I Took A Pill In Ibiza&quot;?",
    correct_answer: "Mike Posner",
    incorrect_answers: ["Avicii", "Robbie Williams", "Harry Styles"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "How many members are in the Japanese rock band SCANDAL?",
    correct_answer: "4",
    incorrect_answers: ["5", "2", "18"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many copies have Metallica album &quot;Metallica&quot; (A.K.A The Black Album) sold worldwide (in Millions of Copies)?",
    correct_answer: "20.5",
    incorrect_answers: ["19.5", "22.5", "25.5"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "When did Tame Impala release their second album?",
    correct_answer: "2012",
    incorrect_answers: ["2015", "2010", "1967"]
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
    difficulty: "medium",
    question:
      "Which member of &quot;The Beatles&quot; narrated episodes of &quot;Thomas the Tank Engine&quot;?",
    correct_answer: "Ringo Starr",
    incorrect_answers: ["George Harrison", "John Lennon", "Paul McCartney"]
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
      "Moby, an American DJ, singer, and musician, achieved worldwide success for the 1999 release of which of the following albums?",
    correct_answer: "Play",
    incorrect_answers: ["Everything Is Wrong", "Moby", "18"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the stage name of New Zealand singer Phillipa &quot;Pip&quot; Brown?",
    correct_answer: "Ladyhawke",
    incorrect_answers: ["Lorde", "Kesha", "Anika Moa"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name of Pink Floyd&#039;s first studio album?",
    correct_answer: "The Piper at the Gates of Dawn",
    incorrect_answers: ["Ummagumma", "More", "Atom Heart Mother"]
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
    difficulty: "easy",
    question:
      "Which of the following songs did Elton John perform following Princess Diane&#039;s passing?",
    correct_answer: "Candles in the Wind",
    incorrect_answers: [
      "I Guess That&#039;s Why They Call It The Blues",
      "Your Song",
      "Island Girl"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was the 3rd album &quot;Notes from the Underground&quot; of the band &quot;Hollywood Undead&quot; released?",
    correct_answer: "2013",
    incorrect_answers: ["2011", "2014", "2009"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Bj&ouml;rk&#039;s &quot;Unison&quot; contains a sample of which Oval song?",
    correct_answer: "Aero Deck",
    incorrect_answers: ["Textuell", "Panorama", "Do While"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "In which year was the Megadeth album &quot;Peace Sells... but Who&#039;s Buying?&quot; released?",
    correct_answer: "1986",
    incorrect_answers: ["1979", "1987", "1986"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "From which country does the piano originate?",
    correct_answer: "Italy",
    incorrect_answers: ["Germany", "Austria", "France"]
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
    difficulty: "easy",
    question: "Which Apollo mission was the first one to land on the Moon?",
    correct_answer: "Apollo 11",
    incorrect_answers: ["Apollo 10", "Apollo 9", "Apollo 13"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these bones is hardest to break?",
    correct_answer: "Femur",
    incorrect_answers: ["Cranium", "Humerus", "Tibia"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is the colour of unoxidized blood?",
    correct_answer: "Red",
    incorrect_answers: ["Blue", "Purple", "Green"]
  },
  {
    category: "Science & Nature",
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
    difficulty: "easy",
    question: "Which element has the chemical symbol &#039;Fe&#039;?",
    correct_answer: "Iron",
    incorrect_answers: ["Gold", "Silver", "Tin"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "Rhinoplasty is a surgical procedure on what part of the human body?",
    correct_answer: "Nose",
    incorrect_answers: ["Ears", "Chin", "Neck"]
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
    question:
      "This element, when overcome with extreme heat and pressure, creates diamonds.",
    correct_answer: "Carbon",
    incorrect_answers: ["Nitrogen", "Oxygen", "Hydrogen"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the elemental symbol for mercury?",
    correct_answer: "Hg",
    incorrect_answers: ["Me", "Mc", "Hy"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the hottest planet in the Solar System?",
    correct_answer: "Venus",
    incorrect_answers: ["Mars", "Mercury", "Jupiter"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the first element on the periodic table?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Oxygen", "Lithium"]
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
    question:
      "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
    correct_answer: "8 Minutes",
    incorrect_answers: ["6 Minutes", "2 Minutes", "12 Minutes"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which chemical element has the lowest boiling point?",
    correct_answer: "Helium",
    incorrect_answers: ["Hydrogen", "Neon", "Nitrogen"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the molecular formula of Glucose?",
    correct_answer: "C6H12O6",
    incorrect_answers: ["C2H4O2", "K+", "CH4"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many planets make up our Solar System?",
    correct_answer: "8",
    incorrect_answers: ["7", "9", "6"]
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
    difficulty: "medium",
    question:
      "All the following metal elements are liquids at or near room temperature EXCEPT:",
    correct_answer: "Beryllium",
    incorrect_answers: ["Gallium", "Caesium", "Mercury"]
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
    difficulty: "medium",
    question: "Who developed the first successful polio vaccine in the 1950s?",
    correct_answer: "Jonas Salk",
    incorrect_answers: ["John F. Enders", "Thomas Weller", "Frederick Robbins"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is isobutylphenylpropanoic acid more commonly known as?",
    correct_answer: "Ibuprofen",
    incorrect_answers: ["Morphine", "Ketamine", "Aspirin"]
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
    question:
      "The medical condition osteoporosis affects which part of the body?",
    correct_answer: "Bones",
    incorrect_answers: ["Skin", "Brain", "Heart"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What is the atomic number of the element Strontium?",
    correct_answer: "38",
    incorrect_answers: ["73", "47", "11"]
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
      "After which Danish city is the 72th element on the periodic table named?",
    correct_answer: "Copenhagen",
    incorrect_answers: ["Odense", "Herning", "Skagen"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "What does the yellow diamond on the NFPA 704 fire diamond represent?",
    correct_answer: "Reactivity",
    incorrect_answers: ["Health", "Flammability", "Radioactivity"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "The element involved in making human blood red is which of the following?",
    correct_answer: "Iron",
    incorrect_answers: ["Copper", "Iridium", "Cobalt"]
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
    difficulty: "hard",
    question: "What is the molecular formula of Ozone?",
    correct_answer: "O3",
    incorrect_answers: ["C6H2O6", "N2O", "SO4"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question:
      "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
    correct_answer: "Interphase",
    incorrect_answers: ["Prophase", "Stasis", "Telophase"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these elements on the Periodic Table is a Noble Gas?",
    correct_answer: "Neon",
    incorrect_answers: ["Potassium", "Iodine", "Colbalt"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "How many chromosomes are in your body cells?",
    correct_answer: "23",
    incorrect_answers: ["21", "22", "24"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "Who made the discovery of X-rays?",
    correct_answer: "Wilhelm Conrad R&ouml;ntgen",
    incorrect_answers: ["Thomas Alva Edison", "James Watt", "Albert Einstein"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "71% of the Earth&#039;s surface is made up of",
    correct_answer: "Water",
    incorrect_answers: ["Deserts", "Continents", "Forests"]
  },
  {
    category: "Science & Nature",
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
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Botanically speaking, which of these fruits is NOT a berry?",
    correct_answer: "Strawberry",
    incorrect_answers: ["Blueberry", "Banana", "Concord Grape"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the unit of electrical resistance?",
    correct_answer: "Ohm",
    incorrect_answers: ["Mho", "Tesla", "Joule"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "What is the unit of electrical inductance?",
    correct_answer: "Henry",
    incorrect_answers: ["Weber", "Coulomb", "Mho"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Burning which of these metals will produce a bright white flame?",
    correct_answer: "Magnesium",
    incorrect_answers: ["Copper", "Lithium", "Lead"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which desert is the only desert in the world where the &quot;Saguaro&quot; cactus grows indigenously?",
    correct_answer: "The Sonoran Desert",
    incorrect_answers: [
      "The Gobi Desert",
      "The Yuma Desert",
      "The Arabian Desert"
    ]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Psychology, which need appears highest in the &quot;Maslow&#039;s hierarchy of needs&quot; pyramid?",
    correct_answer: "Esteem",
    incorrect_answers: ["Love", "Safety", "Physiological"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "What animal takes part in Schr&ouml;dinger&#039;s most famous thought experiment?",
    correct_answer: "Cat",
    incorrect_answers: ["Dog", "Bat", "Butterfly"]
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
    question:
      "Which of the following is the term for &quot;surgical complications resulting from surgical sponges left inside the patient&#039;s body?",
    correct_answer: "Gossypiboma",
    incorrect_answers: ["Gongoozler", "Jentacular", "Meupareunia"]
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
      "This field is sometimes known as &ldquo;The Dismal Science.&rdquo;",
    correct_answer: "Economics",
    incorrect_answers: ["Philosophy", "Politics", "Physics"]
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
    question: "Which river flows through the Scottish city of Glasgow?",
    correct_answer: "Clyde",
    incorrect_answers: ["Tay", "Dee", "Tweed"]
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
    question:
      "When was the Declaration of Independence approved by the Second Continental Congress?",
    correct_answer: "July 2, 1776",
    incorrect_answers: ["May 4, 1776", "June 4, 1776", "July 4, 1776"]
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
    difficulty: "easy",
    question: "Area 51 is located in which US state?",
    correct_answer: "Nevada",
    incorrect_answers: ["Arizona", "New Mexico", "Utah"]
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
    question: "What does the &quot;G&quot; mean in &quot;G-Man&quot;?",
    correct_answer: "Government",
    incorrect_answers: ["Going", "Ghost", "Geronimo"]
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
    difficulty: "hard",
    question:
      "The words &quot;bungalow&quot; and &quot;shampoo&quot; originate from the languages of which country?",
    correct_answer: "India",
    incorrect_answers: ["Papua New Guinea", "Ethiopia", "China"]
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
      "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
    correct_answer: "Niagara Mohawk Building",
    incorrect_answers: ["Taipei 101", "One Detroit Center", "Westendstrasse 1"]
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
    difficulty: "medium",
    question:
      "Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?",
    correct_answer: "Shiatsu",
    incorrect_answers: ["Ukiyo", "Majime", "Ikigai"]
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
    difficulty: "easy",
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    correct_answer: "Spruce Goose",
    incorrect_answers: ["Noah&#039;s Ark", "Fat Man", "Trojan Horse"]
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
    difficulty: "medium",
    question: "What is the German word for &quot;spoon&quot;?",
    correct_answer: "L&ouml;ffel",
    incorrect_answers: ["Gabel", "Messer", "Essst&auml;bchen"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Swedish word for &quot;window&quot;?",
    correct_answer: "F&ouml;nster",
    incorrect_answers: ["H&aring;l", "Sk&auml;rm", "Ruta"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which musician has collaborated with American producer Porter Robinson and released the 2016 song &quot;Shelter&quot;?",
    correct_answer: "Madeon",
    incorrect_answers: ["Mat Zo", "deadmau5", "Zedd"]
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
    question:
      "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
    correct_answer: "India",
    incorrect_answers: ["United States of America", "Soviet Union", "Poland"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the founder of &quot;The Lego Group&quot;?",
    correct_answer: "Ole Kirk Christiansen",
    incorrect_answers: [
      " Jens Niels Christiansen",
      "Kirstine Christiansen",
      " Gerhardt Kirk Christiansen"
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
    difficulty: "medium",
    question:
      "The new One World Trade Center in Manhattan, New York City was designed by which architect? ",
    correct_answer: "David Childs",
    incorrect_answers: ["Bjarke Ingels", "Michael Arad", "Fumihiko Maki"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;",
    correct_answer: "Truth",
    incorrect_answers: ["Answer", "Cause", "Source"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of Poland in Polish?",
    correct_answer: "Polska",
    incorrect_answers: ["Pupcia", "Polszka", "P&oacute;land"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;",
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
    question: "What was the soft drink Pepsi originally introduced as?",
    correct_answer: "Brad&#039;s Drink",
    incorrect_answers: ["Pepsin Pop", "Carolina Cola", "Pepsin Syrup"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What color is the &quot;Ex&quot; in FedEx Ground?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Light Blue", "Orange"]
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
    question: "What year was the RoboSapien toy robot released?",
    correct_answer: "2004",
    incorrect_answers: ["2000", "2001", "2006"]
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
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"]
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
      "Apple co-founder Steve Jobs died from complications of which form of cancer?",
    correct_answer: "Pancreatic",
    incorrect_answers: ["Bone", "Liver", "Stomach"]
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
    question:
      "What machine element is located in the center of fidget spinners?",
    correct_answer: "Bearings",
    incorrect_answers: ["Axles", "Gears", "Belts"]
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
    question:
      "In Guild Wars 2, what is the name of the legendary rainbow staff surrounded by an ever glowing rainbow aura?",
    correct_answer: "The Bifrost",
    incorrect_answers: ["Bolt", "Kudzu", "The Moot"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which company&#039;s original slogan was &quot;Don&#039;t be evil&quot;?",
    correct_answer: "Google",
    incorrect_answers: ["Apple", "Yahoo", "Microsoft"]
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
    difficulty: "easy",
    question:
      "King Henry VIII was the second monarch of which European royal house?",
    correct_answer: "Tudor",
    incorrect_answers: ["York", "Stuart", "Lancaster"]
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
    difficulty: "medium",
    question: "What number does the Roman numeral &quot;D&quot; stand for?",
    correct_answer: "500",
    incorrect_answers: ["100", "1000", "50"]
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
      "In what year was the famous 45 foot tall Hollywood sign first erected?",
    correct_answer: "1923",
    incorrect_answers: ["1903", "1913", "1933"]
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
    question: "Which of the following is NOT classified as a Semetic language?",
    correct_answer: "Sumerian",
    incorrect_answers: ["Maltese", "Akkadian", "Mandaic"]
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
    difficulty: "medium",
    question:
      "One of the deadliest pandemics, the &quot;Spanish Flu&quot;, killed off what percentage of the human world population at the time?",
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
      "Which of the following Assyrian kings did NOT rule during the Neo-Assyrian Empire?",
    correct_answer: "Shamshi-Adad III",
    incorrect_answers: ["Shalmaneser V", "Esharhaddon", "Ashur-nasir-pal II"]
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
    difficulty: "easy",
    question:
      "Which modern day country is the region that was known as Phrygia in ancient times?",
    correct_answer: "Turkey",
    incorrect_answers: ["Syria", "Greece", "Egypt"]
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
    difficulty: "medium",
    question: "Who tutored Alexander the Great?",
    correct_answer: "Aristotle",
    incorrect_answers: ["Socrates", "Plato", "King Philip"]
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
    question: "What is the oldest US state?",
    correct_answer: "Delaware",
    incorrect_answers: ["Rhode Island", "Maine", "Virginia"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "What was Napoleon Bonaparte&#039;s name before he changed it?",
    correct_answer: "Napoleone di Buonaparte",
    incorrect_answers: [
      "Naapolion van Bonijpaart",
      "Napole&atilde;o do Boaparte",
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
    question: "What was Genghis Khan&#039;s real name?",
    correct_answer: "Tem&uuml;jin",
    incorrect_answers: ["M&ouml;ngke", "&Ouml;gedei", "Tem&uuml;r"]
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
    difficulty: "easy",
    question: "How long did World War II last?",
    correct_answer: "6 years",
    incorrect_answers: ["4 years", "5 years", "7 years"]
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
    question: "In which year was Constantinople conquered by the Turks?",
    correct_answer: "1453",
    incorrect_answers: ["1435", "1454", "1440"]
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
    difficulty: "medium",
    question:
      "When did the British hand-over sovereignty of Hong Kong back to China?",
    correct_answer: "1997",
    incorrect_answers: ["1999", "1841", "1900"]
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
    difficulty: "hard",
    question: "What was the original name of New York City?",
    correct_answer: "New Amsterdam",
    incorrect_answers: ["New London", "New Paris", "New Rome"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "The main objective of the German operation &quot;Case Blue&quot; during World War II was originally to capture what?",
    correct_answer: "Caucasus",
    incorrect_answers: ["Stalingrad", "Crimea", "Voronezh"]
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
  }
];
