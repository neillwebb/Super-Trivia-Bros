const db = require("../models");
<<<<<<< HEAD
const items = [
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
    question: "What is the first book of the Old Testament?",
    correct_answer: "Genesis",
    incorrect_answers: ["Exodus", "Leviticus", "Numbers"]
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
    question: "How would one say goodbye in Spanish?",
    correct_answer: "Adi&oacute;s",
    incorrect_answers: [" Hola", "Au Revoir", "Salir"]
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
    question: "On a dartboard, what number is directly opposite No. 1?",
    correct_answer: "19",
    incorrect_answers: ["20", "12", "15"]
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
    difficulty: "hard",
    question:
      "The words &quot;bungalow&quot; and &quot;shampoo&quot; originate from the languages of which country?",
    correct_answer: "India",
    incorrect_answers: ["Papua New Guinea", "Ethiopia", "China"]
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
    difficulty: "medium",
    question: "Which of these companies does NOT manufacture automobiles?",
    correct_answer: "Ducati",
    incorrect_answers: ["Nissan", "GMC", "Fiat"]
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
    question: "Sciophobia is the fear of what?",
    correct_answer: "Shadows",
    incorrect_answers: ["Eating", "Bright lights", "Transportation"]
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
    difficulty: "easy",
    question: "What is the nickname of the US state of California?",
    correct_answer: "Golden State",
    incorrect_answers: ["Sunshine State", "Bay State", "Treasure State"]
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
    question: "What is the romanized Chinese word for &quot;airplane&quot;?",
    correct_answer: "Feiji",
    incorrect_answers: ["Qiche", "Zongxian", "Huojian"]
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
    question:
      "According to the United States&#039; CDC, one in how many Americans die annually due to smoking?",
    correct_answer: "Five",
    incorrect_answers: ["Twenty", "Ten", "One hundred"]
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
    difficulty: "medium",
    question: "What is the last letter of the Greek alphabet?",
    correct_answer: "Omega",
    incorrect_answers: ["Mu", "Epsilon", "Kappa"]
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
    question: "What year was Apple Inc. founded?",
    correct_answer: "1976",
    incorrect_answers: ["1978", "1980", "1974"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a &quot;Guardians of the Galaxy&quot; themed ride?",
    correct_answer: "Twilight Zone Tower of Terror",
    incorrect_answers: [
      "The Haunted Mansion",
      "Pirates of the Caribbean",
      "Peter Pan&#039;s Flight"
    ]
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
    difficulty: "hard",
    question:
      "Virtual reality company Oculus VR lost which of it&#039;s co-founders in a freak car accident in 2013?",
    correct_answer: "Andrew Scott Reisse",
    incorrect_answers: ["Nate Mitchell", "Jack McCauley", "Palmer Luckey"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the original name of the search engine &quot;Google&quot;?",
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
    question: "What is Tasmania?",
    correct_answer: "An Australian State",
    incorrect_answers: [
      "A flavor of Ben and Jerry&#039;s ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
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
    question: "Which of these words means &quot;idle spectator&quot;?",
    correct_answer: "Gongoozler",
    incorrect_answers: ["Gossypiboma", "Jentacular", "Meupareunia"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which candy is NOT made by Mars?",
    correct_answer: "Almond Joy",
    incorrect_answers: ["M&amp;M&#039;s", "Twix", "Snickers"]
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
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
  },
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
    question:
      "In the book &quot;The Martian&quot;, how long was Mark Watney trapped on Mars (in Sols)?",
    correct_answer: "549 Days",
    incorrect_answers: ["765 Days", "401 Days", "324 Days"]
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
    difficulty: "medium",
    question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
    correct_answer: "Gloin",
    incorrect_answers: ["Thorin Oakenshield", "Bombur", "Dwalin"]
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
    question:
      "Who wrote the children&#039;s story &quot;The Little Match Girl&quot;?",
    correct_answer: "Hans Christian Andersen",
    incorrect_answers: ["Charles Dickens", "Lewis Carroll", "Oscar Wilde"]
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
    difficulty: "medium",
    question:
      "The novel &quot;Of Mice And Men&quot; was written by what author? ",
    correct_answer: "John Steinbeck ",
    incorrect_answers: ["George Orwell", "Mark Twain ", "Harper Lee"]
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
    difficulty: "hard",
    question:
      "Which of these does Charlie NOT read in The Perks of Being a Wallflower?",
    correct_answer: "The Grapes of Wrath",
    incorrect_answers: ["Hamlet", "The Great Gatsby", "Peter Pan"]
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
    difficulty: "easy",
    question:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer&#039;s Stone?",
    correct_answer: "Fluffy",
    incorrect_answers: ["Spike", "Poofy", "Spot"]
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
    difficulty: "hard",
    question:
      "In the book series &quot;Odd Thomas&quot;, Danny Jessup has what genetic disease? ",
    correct_answer: " Osteogenesis Imperfecta",
    incorrect_answers: [
      "Spinocerebellar ataxia",
      "Adrenoleukodystrophy",
      "Cystic Fibrosis"
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
      "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    correct_answer: "SCP-173",
    incorrect_answers: ["SCP-001", "SCP-999", "SCP-1459"]
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
      "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
    correct_answer: "Jordan",
    incorrect_answers: ["Benetton", "Ferrari", "Mercedes"]
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
      "What cricketing term denotes a batsman being dismissed with a score of zero?",
    correct_answer: "Duck",
    incorrect_answers: ["Bye", "Beamer", "Carry"]
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
      "What is the nickname of Northampton town&#039;s rugby union club?",
    correct_answer: "Saints",
    incorrect_answers: ["Harlequins", "Saracens", "Wasps"]
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
    difficulty: "easy",
    question: "In baseball, how many fouls are an out?",
    correct_answer: "0",
    incorrect_answers: ["5", "3", "2"]
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
      "Schumacher&#039;s Ban (Britain)"
    ]
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
    difficulty: "easy",
    question: "What year did the New Orleans Saints win the Super Bowl?",
    correct_answer: "2009",
    incorrect_answers: ["2008", "2010", "2011"]
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
    difficulty: "medium",
    question:
      "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
    correct_answer: "The Vikings ",
    incorrect_answers: ["The Long Ships", "Prince Valiant", "Spartacus"]
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
      "Which actress danced the twist with John Travolta in &#039;Pulp Fiction&#039;?",
    correct_answer: "Uma Thurman",
    incorrect_answers: ["Kathy Griffin", "Pam Grier", "Bridget Fonda"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who voiced the character Draco in the 1996 movie &#039;DragonHeart&#039;?",
    correct_answer: "Sean Connery",
    incorrect_answers: ["Dennis Quaid", "Pete Postlethwaite", "Brian Thompson"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1984 movie &quot;The Terminator&quot;, what model number is the Terminator portrayed by Arnold Schwarzenegger?",
    correct_answer: "T-800",
    incorrect_answers: ["I-950", "T-888", "T-1000"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which actor played the main character in the 1990 film &quot;Edward Scissorhands&quot;?",
    correct_answer: "Johnny Depp",
    incorrect_answers: [" Clint Eastwood", "Leonardo DiCaprio", "Ben Stiller"]
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
    question:
      "What is the name of the robot in the 1951 science fiction film classic &#039;The Day the Earth Stood Still&#039;?",
    correct_answer: "Gort",
    incorrect_answers: ["Robby", "Colossus", "Box"]
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
    difficulty: "easy",
    question:
      "This movie contains the quote, &quot;Houston, we have a problem.&quot;",
    correct_answer: "Apollo 13",
    incorrect_answers: ["The Right Stuff", "Capricorn One", "Marooned"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "This movie contains the quote, &quot;Nobody puts Baby in a corner.&quot;",
    correct_answer: "Dirty Dancing",
    incorrect_answers: [
      "Three Men and a Baby",
      "Ferris Bueller&#039;s Day Off",
      "Pretty in Pink"
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
    difficulty: "easy",
    question:
      "Which movie includes a giant bunny-like spirit who has magic powers including growing trees?",
    correct_answer: "My Neighbor Totoro",
    incorrect_answers: ["Hop", "Rise of the Guardians", "Alice in Wonderland"]
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
      "In the 1994 movie &quot;Speed&quot;, what is the minimum speed the bus must go to prevent to bomb from exploding?",
    correct_answer: "50 mph",
    incorrect_answers: ["60 mph", "40 mph", "70 mph"]
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
      "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
    correct_answer: "Jackie Earle Haley",
    incorrect_answers: ["Tyler Mane", "Derek Mears", "Gunnar Hansen"]
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
    difficulty: "medium",
    question: "Who played Sgt. Gordon Elias in &#039;Platoon&#039; (1986)?",
    correct_answer: "Willem Dafoe",
    incorrect_answers: ["Charlie Sheen", "Matt Damon", "Johnny Depp"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "In &quot;Jurassic World&quot;, what is the name of the dinosaur that is a genetic hybrid?",
    correct_answer: "Indominus Rex",
    incorrect_answers: ["Mosasaurus", "Pteranodon", "Tyrannosaurus Rex "]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-lll?",
    correct_answer: "Ewan McGregor",
    incorrect_answers: ["Alec Guinness", "Hayden Christensen", "Liam Neeson"]
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
      "In the 1999 movie Fight Club, which of these is not a rule of the &quot;fight club&quot;?",
    correct_answer: "Always wear a shirt",
    incorrect_answers: [
      "You do not talk about FIGHT CLUB",
      "Only two guys to a fight",
      "Fights will go on as long as they have to"
    ]
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
    difficulty: "medium",
    question:
      "What city did the monster attack in the film, &quot;Cloverfield&quot;?",
    correct_answer: "New York, New York",
    incorrect_answers: [
      "Las Vegas, Nevada",
      "Chicago, Illinois",
      "Orlando, Florida"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the movie Gremlins, after what time of day should you not feed Mogwai?",
    correct_answer: "Midnight",
    incorrect_answers: ["Evening", "Morning", "Afternoon"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the name of the protagonist in the movie Commando (1985)?",
    correct_answer: "John Matrix",
    incorrect_answers: ["Ben Richards", "Douglas Quaid", "Harry Tasker"]
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
    difficulty: "easy",
    question:
      "The 2016 Disney animated film &#039;Moana&#039; is based on which culture?",
    correct_answer: "Polynesian",
    incorrect_answers: ["Native American", "Japanese", "Nordic"]
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
    difficulty: "medium",
    question:
      "Mark Wahlberg played the titular character of which 2008 video-game adaptation?",
    correct_answer: "Max Payne",
    incorrect_answers: ["Alan Wake", "Hitman", "God Of War"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which documentary film maker wrote and starred in the film &quot;My Scientology Movie&quot; which first debuted in 2015?",
    correct_answer: "Louis Theroux",
    incorrect_answers: ["Errol Morris", "Joe Berlinger", "Adam Curtis"]
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
    difficulty: "medium",
    question:
      "In &quot;Jurassic World&quot;, which company purchases InGen and creates Jurassic World?",
    correct_answer: "Masrani Global Corporation ",
    incorrect_answers: [
      "Biology Synthetics Technologies",
      "International Genetics Incorporated",
      "International Genetic Technologies"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question: "Who directed the movie &quot;Alien&quot;?",
    correct_answer: "Ridley Scott",
    incorrect_answers: ["Christopher Nolan", "Michael Bay", "James Cameron"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What Queen song plays during the final fight scene of the film &quot;Hardcore Henry&quot;?",
    correct_answer: "Don&#039;t Stop Me Now",
    incorrect_answers: [
      "Brighton Rock",
      "Another Bites the Dust",
      "We Will Rock You"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?",
    correct_answer: "Dave",
    incorrect_answers: ["John", "Will", "Carl"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first feature-length computer-animated movie?",
    correct_answer: "Toy Story",
    incorrect_answers: ["Tron", "Lion king", "101 Dalmatians"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "What character in the Winnie the Pooh films was added by Disney and does not appear in the original books?",
    correct_answer: "Gopher",
    incorrect_answers: ["Tigger", "Heffalumps", "Rabbit"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of the queen&#039;s pet in A Bug&#039;s Life?",
    correct_answer: "Aphie",
    incorrect_answers: ["Flik", "Hopper", "Dot"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question: "In Big Hero 6, what were Baymax&#039;s motions modeled after?",
    correct_answer: "Baby penguins",
    incorrect_answers: ["Baby monkeys", "Baby ostriches", "Baby bears"]
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
      "What year did the television company BBC officially launch the channel BBC One?",
    correct_answer: "1936",
    incorrect_answers: ["1948", "1932", "1955"]
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
    difficulty: "medium",
    question: "Which character does voice actress Tara Strong NOT voice?",
    correct_answer: "Bubbles (2016)",
    incorrect_answers: ["Twilight Sparkle", "Timmy Turner", "Harley Quinn"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the episode of SpongeBob SquarePants, &quot;Survival of the Idiots&quot;, Spongebob called Patrick which nickname?",
    correct_answer: "Pinhead",
    incorrect_answers: ["Starfish", "Larry", "Dirty Dan"]
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
    difficulty: "easy",
    question: "Guy&#039;s Grocery Games is hosted by which presenter?",
    correct_answer: "Guy Fieri",
    incorrect_answers: ["Guy Martin", "Guy Ritchie", "Ainsley Harriott"]
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
    question: "How many seasons did &quot;Stargate SG-1&quot; have?",
    correct_answer: "10",
    incorrect_answers: ["3", "7", "12"]
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
    difficulty: "easy",
    question: "In the Star Trek universe, what color is Vulcan blood?",
    correct_answer: "Green",
    incorrect_answers: ["Blue", "Red", "Purple"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "On the show &quot;Rick and Morty&quot;, in episode &quot;Total Rickall&quot;, who was a parasite?",
    correct_answer: "Pencilvester",
    incorrect_answers: ["Beth Smith", "Summer Smith", "Mr. Poopy Butthole"]
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
      "In the show &quot;Tengen Toppa Gurren Lagann&quot; what is the name of the character who force everyone to live underground?",
    correct_answer: "Lordgenome",
    incorrect_answers: ["Kingloname", "Lord Genome", "King Loname"]
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
    difficulty: "easy",
    question:
      "What is the name of the main character in &quot;The Flash&quot; TV series?",
    correct_answer: "Barry Allen",
    incorrect_answers: ["Oliver Queen", "Bart Allen", "Bruce Wayne"]
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
    question: "Which British writer wrote for both Doctor Who and Sherlock?",
    correct_answer: "Steven Moffatt",
    incorrect_answers: ["Phil Ford", "Russell T Davies", "Toby Whithouse"]
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
    difficulty: "easy",
    question:
      "When Donkey Kong died in the &quot;Donkey Kong Country&quot; episode &quot;It&#039;s a Wonderful Life&quot;, who was his guardian angel?",
    correct_answer: "Eddie the Mean Old Yeti",
    incorrect_answers: ["Kiddy Kong", "Diddy Kong", "King K. Rool"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of following is rude and dishonorable by Klingon standards?",
    correct_answer: "Taking his D&#039;k tahg",
    incorrect_answers: [
      "Insulting and laughing at him at the dinner table",
      "Reaching over and taking his meal",
      "Punching him and taking his ship station position"
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
      "Which race enjoys a glass of warm baghol in &quot;Star Trek&quot;?",
    correct_answer: "Klingon",
    incorrect_answers: ["Vulcan", "Human", "Botha"]
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
    difficulty: "easy",
    question:
      "How many seasons did the Sci-Fi television show &quot;Stargate Atlantis&quot; have?",
    correct_answer: "5",
    incorrect_answers: ["10", "2", "7"]
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
    difficulty: "easy",
    question:
      "What is the name of the planet that the Doctor from television series &quot;Doctor Who&quot; comes from?",
    correct_answer: "Gallifrey",
    incorrect_answers: ["Sontar", "Skaro", "Mondas"]
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
    difficulty: "hard",
    question:
      "Which of the following actors portrayed the Ninth Doctor in the British television show &quot;Doctor Who&quot;?",
    correct_answer: "Christopher Eccleston",
    incorrect_answers: ["David Tennant", "Matt Smith", "Tom Baker"]
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
      "What was the callsign of Commander William Adama in Battlestar Galactica (2004)?",
    correct_answer: "Husker",
    incorrect_answers: ["Starbuck", "Apollo", "Crashdown"]
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
      "Which actor portrays &quot;Walter White&quot; in the series &quot;Breaking Bad&quot;?",
    correct_answer: " Bryan Cranston",
    incorrect_answers: ["Andrew Lincoln", "Aaron Paul", "RJ Mitte"]
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
    difficulty: "hard",
    question: "Who was the winner of &quot;Big Brother&quot; Season 10?",
    correct_answer: "Dan Gheesling",
    incorrect_answers: ["Bryce Kranyik", "Ryan Sutfin", "Chris Mundorf"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
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
    type: "multiple",
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
    type: "multiple",
    difficulty: "medium",
    question: "What was the code name for the &quot;Nintendo Gamecube&quot;?",
    correct_answer: "Dolphin",
    incorrect_answers: ["Nitro", "Revolution", "Atlantis"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which franchise does the creature &quot;Slowpoke&quot; originate from?",
    correct_answer: "Pokemon",
    incorrect_answers: ["Dragon Ball", "Sonic The Hedgehog", "Yugioh"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who is the protagonist in the game &quot;The Walking Dead: Season One&quot;?",
    correct_answer: "Lee Everett",
    incorrect_answers: ["Clementine", "Kenny", "Rick Grimes"]
  },
  {
    category: "Entertainment: Video Games",
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
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these of NOT an official game in Nintendo&#039;s Super Smash Bros. series?",
    correct_answer: "Super Smash Bros. Crusade",
    incorrect_answers: [
      "Super Smash Bros. Melee",
      "Super Smash Bros. Brawl",
      "Super Smash Bros. for Nintendo 3DS and Wii U"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In &quot;Clash Royale&quot; what is Arena 4 called?",
    correct_answer: "P.E.K.K.A&#039;s Playhouse",
    incorrect_answers: ["Barbarian Bowl", "Spell Valley", "Royal Arena"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "The rights to the &quot;Rayman&quot; series are owned by which company?",
    correct_answer: "Ubisoft",
    incorrect_answers: ["Nintendo", "EA", "Sony"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following Pok&eacute;mon games released first?",
    correct_answer: "Pok&eacute;mon Crystal",
    incorrect_answers: [
      "Pok&eacute;mon Platinum",
      "Pok&eacute;mon FireRed",
      "Pok&eacute;mon Black"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these characters is the mascot of the video game company SEGA?",
    correct_answer: "Sonic the Hedgehog",
    incorrect_answers: ["Dynamite Headdy", "Alex Kidd", "Opa-Opa"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Need For Speed Most Wanted (2005), what do you drive at the beginning of the career mode?",
    correct_answer: "BMW M3 GTR",
    incorrect_answers: ["Porsche 911 Turbo", "Nissan 240SX", "Ford Mustang"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "TF2: What code does Soldier put into the door keypad in &quot;Meet the Spy&quot;?",
    correct_answer: "1111",
    incorrect_answers: ["1432", "1337", "No code"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these is NOT a game under the Worms series?",
    correct_answer: "Major Malfunction",
    incorrect_answers: ["Crazy Golf", "Clan Wars", "Ultimate Mayhem"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the first PlayStation game to require the use of the DualShock controller?",
    correct_answer: "Ape Escape",
    incorrect_answers: ["Metal Gear", "Tekken ", "Tomba 2!"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many normal endings are there in Cry Of Fear&#039;s campaign mode?",
    correct_answer: "4",
    incorrect_answers: ["5", "3", "6"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the video game Overwatch, which playable character is infamous for saying &quot;It&#039;s high noon.&quot;?",
    correct_answer: "McCree",
    incorrect_answers: ["Hanzo", "Pharah", "Soldier: 76"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In what year was Garry&#039;s Mod released as a standalone title on Valve&#039;s Steam distribution service?",
    correct_answer: "2006",
    incorrect_answers: ["2007", "2004", "2003"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which survivor in Left 4 Dead sacrificed themself to save the other survivors?",
    correct_answer: "Bill",
    incorrect_answers: ["Louis", "Francis", "Zoey"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the maximum HP in Terraria?",
    correct_answer: "500",
    incorrect_answers: ["400", "1000", "100"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these characters was considered, but ultimately not included, for Super Smash Bros. Melee?",
    correct_answer: "James Bond",
    incorrect_answers: ["Diddy Kong", "Mega Man", "Wave Racer"]
  },
  {
    category: "Entertainment: Video Games",
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
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is not a default game mode in Counter-Strike (2000)?",
    correct_answer: "Arms Race",
    incorrect_answers: ["Hostage Rescue", "Bomb Defusal", "Assassination"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In The Elder Scrolls V: Skyrim, who is the jester in the dark brotherhood?",
    correct_answer: "Cicero",
    incorrect_answers: ["Lucien Lachance", "Archimedes", "Astrid"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who turns out to be the true victor in the Battle of Armageddon in Mortal Kombat?",
    correct_answer: "Shao Kahn",
    incorrect_answers: ["Liu Kang", "Shang Tsung", "Raiden"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What CS:GO case contains the Butterfly Knife?",
    correct_answer: "Breakout Case",
    incorrect_answers: ["Shadow Case", "Vanguard Case", "Esports 2014 Case"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In what year were screenshots added to Steam?",
    correct_answer: "2011",
    incorrect_answers: ["2010", "2008", "2009"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Undertale, how much do Spider Donuts cost in Hotland?",
    correct_answer: "9999G",
    incorrect_answers: ["7G", "40G", "12G"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;The Binding of Isaac&quot;, what is the name of the final boss that you fight in The Void?",
    correct_answer: "Delirium",
    incorrect_answers: ["Mega Satan", "Hush", "The Lamb"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many regular Sunken Sea Scrolls are there in &quot;Splatoon&quot;?",
    correct_answer: "27",
    incorrect_answers: ["32", "30", "5"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Without enchantments, which pickaxe in minecraft mines blocks the quickest.",
    correct_answer: "Golden ",
    incorrect_answers: ["Diamond", "Iron", "Obsidian"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Copy Abilities was only featured in &quot;Kirby &amp; The Amazing Mirror&quot;?",
    correct_answer: "Mini",
    incorrect_answers: ["Magic", "Smash", "Missile"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What game was used to advertise Steam?",
    correct_answer: "Counter-Strike 1.6",
    incorrect_answers: ["Half-Life", "Half-Life 2", "Team Fortress"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "Which variant of the MP5 is depicted in Counter-Strike 1.6?",
    correct_answer: "MP5N",
    incorrect_answers: ["MP5SD", "MP5K", "MP5RAS"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is not a playable race in &quot;Final Fantasy XIV: A Realm Reborn&quot;?",
    correct_answer: "Hume",
    incorrect_answers: ["Miqo&#039;te", "Lalafell", "Roegadyn"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In &quot;Overwatch&quot;, which hero is able to wallride?",
    correct_answer: "Lucio",
    incorrect_answers: ["Reinhardt", "Sombra", "Mercy"]
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
    difficulty: "hard",
    question:
      "In the &quot;PAYDAY&quot; series, what is the real name of the character known as &quot;Dallas&quot;?",
    correct_answer: "Nathan Steele",
    incorrect_answers: ["Nate Siemens", "Nick Stamos", "Nolan Stuhlinger"]
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
    difficulty: "hard",
    question:
      "In the &quot;Call Of Duty: Zombies&quot; map &quot;Origins&quot;, where is &quot;Stamin-Up&quot; located?",
    correct_answer: "Generator 5",
    incorrect_answers: ["Generator 3", "Generator 4", "Excavation Site"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Call of Duty: Black Ops III&quot; Zombies, what does completing all the main easter eggs reward you with?",
    correct_answer: "1,000,000 XP",
    incorrect_answers: [
      "Juggernog at the start of each game",
      "50 Liquid Diviniums",
      "All three options."
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the 8th installment in the Fire Emblem series?",
    correct_answer: "The Sacred Stones",
    incorrect_answers: ["Blazing Sword", "Awakening", "Path of Radiance"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Telltale Games&#039; &quot;The Walking Dead: Season One&quot; what is the name of Clementine&#039;s father?",
    correct_answer: "Ed",
    incorrect_answers: ["Charles", "Lee", "Walter"]
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
    question: "In Portal, what color is the Morality Core?",
    correct_answer: "Purple",
    incorrect_answers: ["Red", "Yellow", "Blue"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In which game did the character &quot;Mario&quot; make his first appearance?",
    correct_answer: "Donkey Kong",
    incorrect_answers: ["Super Mario Bros.", "Super Mario Land", "Mario Bros."]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which gaming series includes &quot;The Diabolical Box&quot; and &quot;The Curious Village&quot;?",
    correct_answer: "Professor Layton",
    incorrect_answers: ["Persona", "Etrian Odyssey", "Sam &amp; Max"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Guild Wars 2, what is the name of the home instance for the Human race?",
    correct_answer: "Salma District",
    incorrect_answers: ["Eastern Commons", "Rurikton", "The Crown Pavilion"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "In Guild Wars 2, what was Scarlet Briar&#039;s original name?",
    correct_answer: "Ceara",
    incorrect_answers: ["Scarlet", "Serimon", "Omadd"]
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
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What French artist/band is known for playing on the midi instrument &quot;Launchpad&quot;?",
    correct_answer: "Madeon",
    incorrect_answers: ["Daft Punk ", "Disclosure", "David Guetta"]
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
      "In the Rossini opera, what was the name of &#039;The Barber of Seville&#039;?",
    correct_answer: "Figaro",
    incorrect_answers: ["Angelo", "Fernando", "Dave"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to their 1974 hit, what were Brownsville Station doing &quot;In The Boys&#039; Room&quot;?",
    correct_answer: "Smokin&#039;",
    incorrect_answers: ["Hangin&#039;", "Lovin&#039;", "Peein&#039;"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "&quot;Some people call me the space cowboy&quot; is the first line from what song?",
    correct_answer: "The Joker",
    incorrect_answers: [
      "Fandango",
      "Take The Money and Run",
      "Fly Like an Eagle"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The song &quot;Twin Size Mattress&quot; was written by which band?",
    correct_answer: "The Front Bottoms",
    incorrect_answers: [
      "Twenty One Pilots",
      "The Wonder Years",
      "The Smith Street Band"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Where does the Mac part of the name Fleetwood Mac come from?",
    correct_answer: "John McVie",
    incorrect_answers: ["Christine McVie", "Mac McAnally", "David Tennant"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the lead singer of the band Coldplay?",
    correct_answer: "Chris Martin",
    incorrect_answers: ["Chris Isaak", "Chris Wallace", "Chris Connelly"]
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
    difficulty: "medium",
    question:
      "Irish musician Hozier released a music track in 2013 titled, &quot;Take Me to ______&quot;",
    correct_answer: "Church",
    incorrect_answers: ["Mosque", "Synagogue", "Temple"]
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
    difficulty: "medium",
    question: "In 2015, David Hasselhof released a single called...",
    correct_answer: "True Survivor",
    incorrect_answers: ["True Fighter", "Real Kung-Fury", "Real Warrior"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many members are there in the idol group &quot;&micro;&#039;s&quot;?",
    correct_answer: "9",
    incorrect_answers: ["48", "6", "3"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "EDM producer Marshmello performs live wearing clothes and a marshmallow mask of what colour?",
    correct_answer: "White",
    incorrect_answers: ["Black", "Blue", "Yellow"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these languages was NOT included in the 2016 song &quot;Don&#039;t Mind&quot; by Kent Jones?",
    correct_answer: "Portuguese",
    incorrect_answers: ["Japanese", "French", "Spanish"]
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
    difficulty: "easy",
    question: "Which Twitch streamer is the vocalist for Red Vox?",
    correct_answer: "Vinesauce",
    incorrect_answers: ["The8BitDrummer", "LIRIK", "Sodapoppin"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who won the 1989 Drum Corps International championships?",
    correct_answer: "Santa Clara Vanguard",
    incorrect_answers: ["Blue Devils", "The Academy", "The Bluecoats"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The 1952 musical composition 4&#039;33&quot;, composed by prolific American composer John Cage, is mainly comprised of what sound?",
    correct_answer: "Silence",
    incorrect_answers: ["Farts", "People talking", "Cricket chirps"]
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
      "Which artist collaborated with American DJ Dillon Francis to release the song 2016 &quot;Need You&quot;?",
    correct_answer: "NGHTMRE",
    incorrect_answers: ["LOUDPVCK", "KRNE", "DVBBS"]
  },
  {
    category: "Entertainment: Music",
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
    category: "Entertainment: Music",
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
      "What is the name of the 2016 studio album by the French electronic music duo Justice?",
    correct_answer: "Woman",
    incorrect_answers: ["Randy", "Safe and Sound", "Pleasure"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the relationship between the band members of American rock band King of Leon?",
    correct_answer: "Brothers &amp; cousins",
    incorrect_answers: [
      "Childhood friends",
      "Former classmates",
      "Fraternity house members"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which band released songs suchs as &quot;Rio&quot;, &quot;Girls on Film&quot;, and &quot;The Reflex&quot;?",
    correct_answer: "Duran Duran",
    incorrect_answers: ["The Cure", "New Order", "Depeche Mode"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which year was the album &quot;Floral Shoppe&quot; by Macintosh Plus released?",
    correct_answer: "2011",
    incorrect_answers: ["2014", "2013", "2012"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which one of these rappers is NOT a member of the rap group Wu-Tang Clan?",
    correct_answer: "Dr.Dre",
    incorrect_answers: ["Ol&#039; Dirty Bastard", "GZA", "Method Man"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
    correct_answer: "Unknown Pleasures",
    incorrect_answers: [
      "The Dark Side of the Moon",
      "London Calling",
      "The Velvet Underground &amp; Nico"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "What is Brian May&#039;s guitar called?",
    correct_answer: "Red Special",
    incorrect_answers: ["Blue Special", "Green Special", "Yellow Special"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to a song by Belinda Carlisle, Heaven is a place on what?",
    correct_answer: "Earth",
    incorrect_answers: ["Venus", "Mars", "Uranus"]
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
    difficulty: "easy",
    question: "Which Nirvana album had a naked baby on the cover?",
    correct_answer: "Nevermind",
    incorrect_answers: ["Bleach", "In Utero", "Incesticide"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these is not an Ed Sheeran album?",
    correct_answer: "-",
    incorrect_answers: ["+", "X", "&divide;"]
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
    question: "Who is the lead singer of The Lumineers?",
    correct_answer: "Wesley Schultz",
    incorrect_answers: ["Jeremiah Fraites", "Jay Van Dyke", "Neyla Pekarek"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following bands is Tom DeLonge not a part of?",
    correct_answer: "+44",
    incorrect_answers: ["Box Car Racer", "Blink-182", "Angels &amp; Airwaves"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "African-American performer Sammy Davis Jr. was known for losing which part of his body in a car accident?",
    correct_answer: "Left Eye",
    incorrect_answers: ["Right Ear", "Right Middle Finger", "Nose"]
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
    difficulty: "easy",
    question:
      "Which former boy-band star released hit solo single &quot;Angels&quot; in 1997?",
    correct_answer: "Robbie Williams",
    incorrect_answers: ["Justin Timberlake", "Harry Styles", "Gary Barlow"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The Who&#039;s eponymous line, &quot;Teenage Wasteland&quot;, appears in which of their songs?",
    correct_answer: "Baba O&#039; Riley",
    incorrect_answers: [
      "The Seeker",
      "Won&#039;t Get Fooled Again",
      "Pinball Wizard"
    ]
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
      "From which album is the Gorillaz song, &quot;On Melancholy Hill&quot; featured in?",
    correct_answer: "Plastic Beach",
    incorrect_answers: ["Demon Days", "Humanz", "The Fall"]
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
    difficulty: "medium",
    question:
      "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Helium", "Carbon", "Hydrogen"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What is the largest animal currently on Earth?",
    correct_answer: "Blue Whale",
    incorrect_answers: ["Orca", "Colossal Squid", "Giraffe"]
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
    question: "What name is given to all baby marsupials?",
    correct_answer: "Joey",
    incorrect_answers: ["Calf", "Pup", "Cub"]
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
    difficulty: "easy",
    question: "Which is the longest bone in the human body? ",
    correct_answer: "Femur",
    incorrect_answers: ["Scapula", "Fibula", "Ulna"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the &quot;powerhouse&quot; of the Eukaryotic animal cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Nucleus", "Chloroplast", "Endoplasmic Reticulum"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "The &#039;Islets of Langerhans&#039; is found in which human organ?",
    correct_answer: "Pancreas",
    incorrect_answers: ["Kidney", "Liver", "Brain"]
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
    difficulty: "medium",
    question: "What was the first living creature in space?",
    correct_answer: "Fruit Flies ",
    incorrect_answers: ["Monkey", "Dog", "Mouse"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "What mineral has the lowest number on the Mohs scale?",
    correct_answer: "Talc",
    incorrect_answers: ["Quartz", "Diamond", "Gypsum"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "Which gas forms about 78% of the Earth&rsquo;s atmosphere?",
    correct_answer: "Nitrogen",
    incorrect_answers: ["Oxygen", "Argon", "Carbon Dioxide"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "An organic compound is considered an alcohol if it has what functional group?",
    correct_answer: "Hydroxyl",
    incorrect_answers: ["Carbonyl", "Alkyl", "Aldehyde"]
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
    question: "Au on the Periodic Table refers to which element?",
    correct_answer: "Gold",
    incorrect_answers: ["Silver", "Oxygen", "Nickel"]
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
    question:
      "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
    correct_answer: "2",
    incorrect_answers: ["0", "1", "5"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which psychological term refers to the stress of holding contrasting beliefs?",
    correct_answer: "Cognitive Dissonance",
    incorrect_answers: ["Flip-Flop Syndrome", "Split-Brain", "Blind Sight"]
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
    question: "Who developed the first successful polio vaccine in the 1950s?",
    correct_answer: "Jonas Salk",
    incorrect_answers: ["John F. Enders", "Thomas Weller", "Frederick Robbins"]
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
    difficulty: "easy",
    question: "How many bones are in the human body?",
    correct_answer: "206",
    incorrect_answers: ["203", "209", "200"]
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
    difficulty: "hard",
    question: "Which of the following is NOT a real element?",
    correct_answer: "Vitrainium",
    incorrect_answers: ["Praseodymium", "Hassium", "Lutetium"]
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
    difficulty: "medium",
    question:
      "What does the yellow diamond on the NFPA 704 fire diamond represent?",
    correct_answer: "Reactivity",
    incorrect_answers: ["Health", "Flammability", "Radioactivity"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "A comet&#039;s gaseous envelope (which creates the tail) is called what?",
    correct_answer: "The coma",
    incorrect_answers: ["The wake", "The backwash", "The ablative"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is a stop codon in DNA?",
    correct_answer: "TAA",
    incorrect_answers: ["ACT", "ACA", "GTA"]
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
    question: "Deuterium is an isotope of which element?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Nitrogen", "Helium", "Neon"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "What genetic disease is caused by having an extra Y chromosome (XYY)?",
    correct_answer: "Jacob&#039;s Syndrome",
    incorrect_answers: [
      "Klinefelter&#039;s Syndrome",
      "Turner&#039;s Syndrome",
      "Down Syndrome"
    ]
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
    question: "What are human nails made of?",
    correct_answer: "Keratin",
    incorrect_answers: ["Bone", "Chitin", "Calcium"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "The Sun consists of mostly which two elements?",
    correct_answer: "Hydrogen &amp; Helium",
    incorrect_answers: [
      "Hydrogen &amp; Nitrogen",
      "Carbon &amp; Nitrogen",
      "Carbon &amp; Helium"
    ]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Where is the Gluteus Maximus muscle located?",
    correct_answer: "Butt",
    incorrect_answers: ["Arm", "Head", "Torso"]
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
    question:
      "Which planet did the &quot;Viking 1&quot; spacecraft send surface images of, starting in 1976?",
    correct_answer: "Mars",
    incorrect_answers: ["Saturn", "Jupiter", "Venus"]
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
  }
];
=======
const questions = [
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
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
>>>>>>> c30c7790a45f90ddd0af4e42711344ae002cdf84
