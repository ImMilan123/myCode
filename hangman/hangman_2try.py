from word_list import word_dict_easy, word_dict_normal, word_dict_hard, vowels, animation, instructiones, word_dict_very_hard, pls_type123, quit, menu, c_diff, winner
import random
import time

#main menu  
def main(): 
    while True:
        print(menu)
        choice = input()
        if choice == "1":
            difficulty()
        elif choice == "3":
            print(quit)
            exit()
        elif choice == "2":
            HowToPlay()
        else:
            print(pls_type123)
            time.sleep(2)

def game(word_dict):
    #picks random word from a word_list.py file
    word = random.choice(list(word_dict.keys())) 
    #gives the word space and turns all letters uppercase
    word = " ".join(word).upper() 
    unknown_word = ""
    revealed_letters = ""
    if gamemode == "very_hard":
        guesses = 4 
    else: 
        #guess amount
        guesses = 7 
    #loop that counts lifes
    while guesses > 0: 
        guesses -= 1
        hangman(guesses)
        #loops that creates the looked for word
        for letter in word:  
            if letter in vowels:
                unknown_word = unknown_word + letter + " "
            elif letter in revealed_letters:
                unknown_word = unknown_word + letter + " "
            elif letter == " ":
                unknown_word = unknown_word
            else:
                unknown_word = unknown_word + "_ "
        #displays the looked for word        
        print(unknown_word)
        #checks if inputed word matches to searched word 
        if unknown_word == word + " ": 
            win()
        letter_guess = input("Guess a letter:")
        #checks if the letter is correct
        letter_guess = letter_verification(letter_guess.upper(), revealed_letters, word.lower().replace(' ', ''), guesses)
        if letter_guess.isalpha():
                if letter_guess in word:
                    guesses += 1
                    #keeps a track of all the letters that were alr picked
                    revealed_letters = revealed_letters + letter_guess.upper() 
                else: 
                    revealed_letters = revealed_letters + letter_guess.upper() 
        elif letter_guess == "1":
            guesses += 1
        print("\n" + str(guesses) + " guesses remaining")
        print("Letters tried: " + ", ".join(revealed_letters))    
        unknown_word = ""
    lost(word)

def letter_verification(letter_guess, revealed_letters, word, guesses): 
    if letter_guess.upper() == word.upper():
        win()
    #hint
    elif letter_guess == "HINT": 
        print("Hint:" + "\033[92m " + word_dict.get(word) + "\033[0m")
        letter_guess = "1"
        return letter_guess
    #checks the letter count
    elif len(letter_guess) != 1: 
        print("\033[91m" + "word was not correct" + "\033[0m")
        letter_guess = "2"
        return letter_guess
    #is it a vowel?
    elif letter_guess in vowels:
        print("\033[91m" + "all vowels are already shown.." + "\033[0m")
        letter_guess = "1"
        return letter_guess
    #was it alr picked?
    elif letter_guess in revealed_letters: 
        print("\033[91m" + "you already tried this letter" + "\033[0m")
        letter_guess = "1"
        return letter_guess
    #is it even a letter?
    elif letter_guess.isalpha():
        return letter_guess
    else: 
        print("\033[91m" + "only letters please!!" + "\033[0m")
        letter_guess = "1"
        return letter_guess
    
def win():
    print(winner)
    time.sleep(2)
    main()

def lost(word):
    print(animation[7])
    print("\033[93m" + "you lose, womp womp " + "\033[0m" "\nthe word was... " "\033[36m" +  word + "\033[0m" + "\n___________________________________\n")
    time.sleep(2)
    main()

def difficulty():
    while True:
        print(c_diff)
        difficulty_choice = input()
        global gamemode
        global word_dict
        word_dict = ""
        gamemode = ""
        if difficulty_choice == "1":
            gamemode = "easy"
        elif difficulty_choice == "2":
            gamemode = "normal"
        elif difficulty_choice == "3":
            gamemode = "hard"
        elif difficulty_choice == "4":
            gamemode = "very_hard"
        else: 
            print(pls_type123)
            time.sleep(2)
            difficulty()
            #retrives the word_dict with the specified name
        word_dict = globals()["word_dict_" + gamemode]
        game(word_dict)

def hangman(guesses):
    if gamemode == "very_hard":
        print(animation[guesses*2])
    else:
        print(animation[guesses])

def HowToPlay():
    print(instructiones[0])
    time.sleep(5)
    main()

if __name__ == "__main__":
    main()
