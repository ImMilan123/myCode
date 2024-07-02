vowels = ["A","E","I","O","U"]
animation = [
        '''
           _____
           |   |
           O   |
          /|\\  |
          /    |
               |
          _____|___
         /          \\
        /            \\ 
        '''
    ,
        '''
           _____
           |   |
           O   |
          /|\\  |
               |
          _____|___
         /          \\
        /            \\   
        '''
    ,
           '''
           _____
           |   |
           O   |
          /|   |
               |
          _____|___
         /          \\
        /            \\       
        '''
,
        '''
           _____
           |   |
           O   |
           |   |
               |
          _____|___
         /          \\
        /            \\       
        '''
,
        '''
           _____
           |   |
               |
               |
               |
          _____|___
         /          \\
        /            \\
        '''
,
        """



   

          __________
         /          \\
        /            \\
        """
,
        """
__________________________________________


     Welcome to hangman!

     
__________________________________________
        """
,
        '''
           _____
           |   |
           O   |
          /|\\  |
          / \\  |
          _____|___
         /          \\
        /            \\          
        '''
]


word_dict_easy = {
    'cat': "A furry creature often kept as a pet.",
    'dog': "Man's best friend, known for loyalty and companionship.",
    'bird': "A feathered creature with the ability to fly.",
    'fish': "An aquatic creature with fins and scales.",
    'tree': "A tall plant with a trunk and branches, typically producing leaves.",
    'rain': "Water falling from the sky, often associated with clouds.",
    'sun': "A star that is the central body of the solar system.",
    'moon': "A celestial body that orbits the Earth.",
    'star': "A distant celestial object that emits light.",
    'book': "A collection of pages with written or printed material.",
    'pen': "A writing instrument with ink.",
    'ball': "A spherical object used in various sports and games.",
    'fire': "A process of combustion producing heat and light.",
    'song': "A musical composition with lyrics.",
    'love': "An intense feeling of deep affection.",
    'home': "A place where one lives or resides.",
    'work': "Activity involving mental or physical effort done to achieve a purpose.",
    'play': "Engagement in enjoyable activities for fun.",
    'blue': "A color between green and violet in the visible spectrum.",
    "myth": "Simular to a legend"
}
word_dict_normal = {
    'orange': "A color resembling that of a ripe orange fruit.",
    'banana': "A yellow fruit with a soft, edible flesh.",
    'computer': "An electronic device for processing and storing data.",
    'guitar': "A stringed musical instrument played with fingers or a pick.",
    'project': "A planned undertaking with specific goals and tasks.",
    'journey': "A traveling from one place to another, often with adventures.",
    'freedom': "The state of being free from coercion or constraint.",
    'garden': "A piece of ground cultivated for flowers or vegetables.",
    'chocolate': "A sweet, usually brown food made from roasted and ground cacao seeds.",
    'diamond': "A precious gemstone, typically clear and colorless.",
    'library': "A place where books and other materials are kept for reading and study.",
    'concert': "A musical performance in front of an audience.",
    'victory': "The state of defeating an opponent or achieving success.",
    'morning': "The early part of the day, from dawn to noon.",
    'evening': "The latter part of the day, from late afternoon to night.",
    'country': "A nation or territory considered as an organized political community.",
    'awesome': "Extremely impressive or daunting.",
    'weather': "The state of the atmosphere at a particular place and time.",
    'captain': "A person who commands a ship or an aircraft.",
    'whisper': "Speaking in a quiet, hushed voice."
    }
word_dict_hard = {
    'beautiful': "Pleasing to the senses or mind in a delightful way.",
    'challenge': "A difficult task or situation that tests one's abilities.",
    'celebrate': "To observe or commemorate an event with joy and festivity.",
    'community': "A group of people living in the same place or having common interests.",
    'experience': "An encounter or involvement in events over time.",
    'important': "Significant or having a great impact on something.",
    'interesting': "Arousing curiosity or catching one's attention.",
    'knowledge': "Information and understanding gained through learning or experience.",
    'opportunity': "A favorable circumstance or chance for advancement.",
    'performance': "The action or process of carrying out a task or function.",
    'restaurant': "A place where meals are served to customers.",
    'technology': "The application of scientific knowledge for practical purposes.",
    'wonderful': "Extremely pleasing or satisfying.",
    'discipline': "A branch of knowledge or training focused on a particular subject.",
    'celebration': "The act of observing an event with festivities and joy.",
    'individual': "A single, distinct entity or person.",
    'government': "The system or organization by which a political community is governed.",
    'university': "An institution of higher education and research.",
    'imagination': "The ability to form mental images or concepts not present to the senses.",
    'enthusiastic': "Eager and excited about something."
}
word_dict_very_hard = {
    'antidisestablishmentarianism': "Opposition to the withdrawal of state support or recognition from an established church, especially the Anglican Church in 19th-century England.",
    'pneumonoultramicroscopicsilicovolcanoconiosis': "A lung disease caused by inhaling very fine silica dust, causing inflammation in the lungs.",
    'sesquipedalian': "Characterized by long words; long-winded.",
    'hippopotomonstrosesquippedaliophobia': "The fear of long words.",
    'supercalifragilisticexpialidocious': "A nonsense word, originally popularized by the movie 'Mary Poppins'.",
    'floccinaucinihilipilification': "The action or habit of estimating something as worthless.",
    'sesquipedalianism': "The use of long words; a tendency to use long words.",
    'labyrinthine': "Complicated and confusing, like a labyrinth; intricate.",
    'schizophrenia': "A mental disorder characterized by a breakdown in thinking and poor emotional responses.",
    'philoprogenitive': "Tending to produce offspring; prolific.",
    'bibliopole': "A person who buys and sells books, especially rare ones.",
    'anomalistic': "Deviation from the usual, normal, or common order or form.",
    'disestablishmentarian': "An advocate or supporter of disestablishment, especially in the context of a state church.",
    'antiestablishmentarianism': "Opposition to political or societal establishments, often associated with counterculture movements.",
    'pseudopseudohypoparathyroidism': "A hereditary disorder that closely simulates the symptoms but not the consequences of pseudohypoparathyroidism.",
    'onomatopoeia': "The formation of a word from a sound associated with what is named.",
    'xylopyrography': "The art or process of decorating wood by burning a design on the surface with a heated metallic point.",
    'heteropont': "A device used to measure the frequency of sound waves.",
    'ultracrepidarian': "Someone who gives opinions on matters outside their field of expertise.",
    'autotonsorialist': "A person who cuts their own hair."
}

instructiones = ["""
- You get 7 guesses
                 
- Enter a letter to guess
                 
- Dont enter a letter twice

- All vowels are already shown

- Enter "hint" to get a hint                 

- No numbers
                 
- You may enter the entire word if you think you know the word
                 
- In difficulty, enter "4" for "a bit too hard" mode  
_______________________________________________________________________
                 """]

pls_type123 = "please type 1, 2 or 3"
quit = "quitting game..."
menu = """
1.play

2.how to play

3.quit
"""
c_diff = """
choose difficulty

1.easy

2.normal

3.hard
"""
winner = """\033[93m you win woohooo!!! \033[0m
___________________________________________
"""
