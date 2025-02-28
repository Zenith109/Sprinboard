import qrcode

# Function to generate a QR code
def generate_qr(data, filename, fill_color='black', back_color='white'):
    qr = qrcode.QRCode(box_size=10, border=4)  # Create a QRCode object with specified box size and border
    qr.add_data(data)  # Add data to the QR code
    image = qr.make_image(fill_color=fill_color, back_color=back_color)  # Generate the QR code image with specified colors
    image.save(filename)  # Save the image to the specified filename
    print(f'QR code saved as {filename}')  # Print a confirmation message

# Ask the user for the color options
fill_color = input('Enter the fill color (default is black): ').strip() or 'black'
back_color = input('Enter the background color (default is white): ').strip() or 'white'

# Ask the user if they want to generate multiple QR codes
multiple = input('Do you want to generate multiple QR codes? (y/n): ').strip().lower()

if multiple == 'y':
    # Get the list of data and filenames
    data_list = input('Enter the texts or URLs separated by commas: ').strip().split(',')
    filenames = input('Enter the filenames separated by commas: ').strip().split(',')
    
    # Check if the number of data items matches the number of filenames
    if len(data_list) != len(filenames):
        print('The number of texts/URLs and filenames must match.')
    else:
        # Generate QR codes for each data item and filename pair
        for data, filename in zip(data_list, filenames):
            generate_qr(data.strip(), filename.strip(), fill_color, back_color)
else:
    # Generate a single QR code
    data = input('Enter the text or URL: ').strip()
    filename = input('Enter the filename: ').strip()
    generate_qr(data, filename, fill_color, back_color)