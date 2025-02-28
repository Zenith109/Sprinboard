import random

# Constants for the game choices
ROCK = 'r'
SCISSORS = 's'
PAPER = 'p'

# Dictionary to map choices to emojis
emojis = { ROCK: '🪨', SCISSORS: '✂️', PAPER: '📃' }
choices = tuple(emojis.keys())

def get_user_choice(player):
    # Function to get the user's choice
    while True:
        user_choice = input(f'{player}, Rock, paper, or scissors? (r/p/s): ').lower()
        if user_choice in choices:
            return user_choice
        else:
            print('Invalid choice!')

def display_choices(player1_choice, player2_choice, player1, player2):
    # Function to display the choices of both players
    print(f'{player1} chose {emojis[player1_choice]}')
    print(f'{player2} chose {emojis[player2_choice]}')

def determine_winner(player1_choice, player2_choice, player1, player2):
    # Function to determine the winner of the round
    if player1_choice == player2_choice:
        print('Tie!')
        return 'tie'
    elif (
        (player1_choice == ROCK and player2_choice == SCISSORS) or 
        (player1_choice == SCISSORS and player2_choice == PAPER) or 
        (player1_choice == PAPER and player2_choice == ROCK)):
        print(f'{player1} wins')
        return player1
    else:
        print(f'{player2} wins')
        return player2

def play_game():
    # Main function to play the game
    mode = input('Do you want to play against the computer or another player? (c/p): ').lower()
    player1 = 'Player 1'
    player2 = 'Computer' if mode == 'c' else 'Player 2'
    
    player1_wins = 0
    player2_wins = 0
    ties = 0
    
    # Loop until one player wins 2 rounds
    while player1_wins < 2 and player2_wins < 2:
        player1_choice = get_user_choice(player1)
        player2_choice = random.choice(choices) if mode == 'c' else get_user_choice(player2)
        
        display_choices(player1_choice, player2_choice, player1, player2)
        
        winner = determine_winner(player1_choice, player2_choice, player1, player2)
        
        if winner == player1:
            player1_wins += 1
        elif winner == player2:
            player2_wins += 1
        else:
            ties += 1
    
    # Display final results
    print(f'Final Results: {player1} wins: {player1_wins}, {player2} wins: {player2_wins}, Ties: {ties}')
    if player1_wins > player2_wins:
        print(f'{player1} is the overall winner!')
    else:
        print(f'{player2} is the overall winner!')

# Start the game
play_game()