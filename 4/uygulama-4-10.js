var users = [
    {emailAdress: "mail1@gmail.com", password:1234},
    {emailAdress: "mail2@gmail.com", password:4567}
]
//console.log(typeof(users))
//console.log(users[0].emailAdress)

var messages = [
    {emailAdress:"mail1@gmail.com", mesaj:"Herkese selam"},
    {emailAdress:"mail2@gmail.com", mesaj:"gunaydinlar"},
    {emailAdress:"mail1@gmail.com", mesaj:"merhabalar"},
]

var email=prompt("Email adresiniz?")
var sifre=prompt("Sifreniz?")

function giris() {
    if ( 
        (email==users[0].emailAdress && sifre==users[0].password)
        ||
        (email==users[1].emailAdress && sifre==users[1].password))
        {console.log(messages)}
    else {
        console.log("yanlis kullanici adi veya sifre girdiniz.")
    }
}

giris()

