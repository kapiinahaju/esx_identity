function main()
{
   document.getElementById("main").innerHTML = '<div class="box1"><h1 class="title">Witaj na kapii industries zmien na swoja</h1><div class="box"><div class="box-heading"></div><h1 class="title1">Tworzenie Postaci</h1><img src="logo.png"><label class="input-name" for="firstname">Imię:</label><center><input id="firstname" type="text"><br></center><label class="input-name" for="lastname">Nazwisko:</label><center><input id="lastname" type="text"><br></center><label class="input-name" for="height">Wzrost:</label><center><input id="height" type="text" placeholder="140-200cm"><br><center><label class="input-name-chuij" for="dateofbirth">Data Urodzenia:</label><center><input id="dateofbirth" type="date"><br></center><label class="input-name-chuj" for="radio">Płeć:</label></br><input type="radio" id="radio1" name="sex" value="m" checked/><label class="genderstyle" for="radio1">Mężczyzna</label><input type="radio" id="radio2" name="sex" value="f" /><label class="genderstyle" for="radio2">Kobieta</label><center><button id="submit" type="submit">Utwórz</button></center></div></div>'
}