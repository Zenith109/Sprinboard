import random  # Import the random module to generate random numbers

roll_count = 0  # Initialize a counter to keep track of the number of rolls

while True:
    # Ask the user if they want to roll the dice
    choice = input("Do you want to roll the dice? (y/n): ").lower()
    if choice == "y":
        # Ask the user how many dice they want to roll
        num_dice = int(input("How many dice do you want to roll? "))
        while choice == "y":
            roll_count += 1  # Increment the roll counter
            # Generate random rolls for the specified number of dice
            rolls = [random.randint(1, 6) for _ in range(num_dice)]
            # Print the results of the rolls
            print(f'You rolled: {", ".join(map(str, rolls))}')
            # Ask the user if they want to roll again
            choice = input("Do you want to roll again? (y/n): ").lower()
    elif choice == "n":
        # Print a goodbye message and the total number of rolls
        print(f"Goodbye! You rolled the dice {roll_count} times.")
        break  # Exit the loop
    else:
        # Handle invalid input
        print("Invalid input. Please enter 'y' or 'n'.")