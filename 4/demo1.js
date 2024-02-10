function kontrolEt(){
    var a= Number(prompt("ilk Sayi:"))
    var b= Number(prompt("ikinci Sayi:"))

    if(a>b){
        alert("a, b'den büyüktür.")
    } else if (a<b){
        alert("a b'den küçüktür.")
    } else{
        alert("a ve b birbirine eşittir.")
    }
}

kontrolEt()