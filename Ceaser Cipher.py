alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
direction=input("For encode en or For decode dec: ").lower()
text=input("Enter your message: ").lower()
shift=int(input("Enter how much you want to shift: "))
def caesar(original_text, shift_amount, encode_or_decode):
    cipher_text = ""
    if encode_or_decode == "dec":
        shift_amount *= -1
    
    for char in original_text:
        if char in alphabet:
            position = alphabet.index(char)
            new_position = (position + shift_amount) % 26
            cipher_text += alphabet[new_position]
        else:
            cipher_text += char
    
    print(f"The {encode_or_decode}d text is: {cipher_text}")
caesar(text, shift, direction)
