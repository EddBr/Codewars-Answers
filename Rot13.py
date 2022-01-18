def rot13(message):
    out = ""
    alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    ualph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for i in range(len(message)):
        char = message[i]
        index = alph.index(char) if char in alph else -1
        uindex = ualph.index(char) if char in ualph else -1
        try:
            out+=(alph[(alph.index(message[i])+13)%26])
        except:
            try:
                out+=(ualph[(ualph.index(message[i])+13)%26])
            except:
                out+= char
            
    return out
