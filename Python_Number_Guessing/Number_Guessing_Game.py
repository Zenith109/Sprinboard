import random

# Ask the user to specify the minimum and maximum values for the number range
min_value = int(input('Enter the minimum value for the number range: '))
max_value = int(input('Enter the maximum value for the number range: '))

# Generate a random number between the specified range
number_to_guess = random.randint(min_value, max_value)

# Ask the user to specify the maximum number of attempts
max_attempts = int(input('Enter the maximum number of attempts: '))

# Initialize the number of attempts and the best score
attempts = 0
best_score = float('inf')

# Loop until the user has used up all attempts or guessed the number
while attempts < max_attempts:
    try:
        # Ask the user to guess a number within the specified range
        guess = int(input(f'Guess a number between {min_value} and {max_value}: '))
        attempts += 1
        
        # Provide feedback based on the user's guess
        if guess < number_to_guess:
            print('Guess higher')
        elif guess > number_to_guess:
            print('Guess lower')
        elif guess == number_to_guess:
            print('You guessed the number correctly!')
            # Update the best score if the current attempt is better
            if attempts < best_score:
                best_score = attempts
            break
    except ValueError:
        # Handle the case where the user input is not a valid number
        print('Please enter a valid number')

# Inform the user if they have run out of attempts and reveal the correct number
if attempts == max_attempts and guess != number_to_guess:
    print(f'Sorry, you ran out of attempts. The correct number was {number_to_guess}.')

# Print the best score achieved
print(f'Best score: {best_score} attempts')