from flask import Flask, render_template_string
import os

app = Flask(__name__)

# Define the file path to store the last scanned bin
file_path = 'last_scanned_bin.txt'

def save_last_scanned_bin(bin_id):
    """Save the last scanned bin ID to a file."""
    with open(file_path, 'w') as file:
        file.write(bin_id)
    print(f"Bin {bin_id} has been saved as the last scanned bin.")

def get_last_scanned_bin():
    """Retrieve the last scanned bin ID from the file."""
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            bin_id = file.read().strip()
            return bin_id
    else:
        return None

@app.route('/')
def index():
    """Render the index page with the last scanned bin information."""
    last_bin = get_last_scanned_bin()
    if last_bin:
        message = f"The last scanned bin was: {last_bin}"
    else:
        message = "No bin has been scanned yet."
    return render_template_string('<h1>{{ message }}</h1>', message=message)

if __name__ == "__main__":
    # Run the Flask web application in debug mode
    app.run(debug=True)