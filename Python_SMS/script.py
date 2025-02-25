import time 
import random
from twilio.rest import Client

# Twilio API credentials (replace with your own) these are fake for security reasons
Twilio_SID = 'your_sid_here'
Twilio_Auth_Token = 'your_auth_token_here'
Twilio_Phone_Number = 'your_twilio_phone_number_here'
Targets_Phone_Number = 'your_target_phone_number_here'

# List of animals to send to the target
animals = ['dog', 'cat', 'bird', 'fish', 'rabbit', 'hamster', 'turtle', 'lizard', 'snake', 'frog', 'crab', 'shrimp', 'lobster', 'octopus', 'squid', 'jellyfish', 'starfish', 'seahorse', 'dolphin', 'whale', 'shark', 'seal', 'otter', 'beaver', 'penguin', 'parrot', 'owl', 'eagle', 'hawk', 'falcon', 'vulture', 'crow', 'raven', 'swan', 'goose', 'duck', 'chicken', 'turkey', 'peacock', 'ostrich, emu', 'kiwi', 'pigeon', 'sparrow', 'robin', 'bluejay', 'cardinal', 'woodpecker', 'hummingbird', 'kingfisher', 'heron', 'crane', 'stork', 'ibis', 'flamingo', 'pelican', 'albatross', 'petrel', 'puffin', 'gannet', 'tern', 'skua', 'auk', 'guillemot', 'murre', 'razorbill', 'penguin', 'parrot', 'macaw', 'cockatoo', 'lorikeet', 'lovebird', 'budgie', 'canary', 'finch', 'sparrow', 'starling', 'grackle', 'blackbird', 'oriole', 'warbler', 'thrush' ]

#initialize the Twilio client
client = Client(Twilio_SID, Twilio_Auth_Token)

def send_text(message):
    # Send the message
    client.messages.create(
        to=Targets_Phone_Number,
        from_=Twilio_Phone_Number,
        body=message
    )

def check_for_replay():
    # Check for a reply
    for message in client.messages.list():
        if message.direction == 'inbound':
            print(f"Received message: {message.body}")
            return True #reply received
    return False #no reply

# Main loop to send messages to the target
while True:
    # Pick a random animal
    animal = random.choice(animals)
    message = f"You are now a {animal}! Reply to stop."
    print(f"Sending message: {message}")
    send_text(message)
    
    # Wait for 10 seconds
    time.sleep(10)
    
    # Check for a reply
    if check_for_replay():
        send_text("Okay, I'll stop now.")
        break