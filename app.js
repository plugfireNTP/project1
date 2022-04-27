let count_house1 = 0
let count_house2 = 0
let count_house3 = 0
let count_house4 = 0
let house1 = "บ้าน1"
let house2 = "บ้าน2"
let house3 = "บ้าน3"
let house4 = "บ้าน4"

let qrt = prompt("จำนวนคน :")
let sum = 0

for(var i = 1; i <= qrt; i++){  
    let firstName = prompt("โปรดระบุ ชื่อ ของคนที่ "+i)
    let lastName = prompt("โปรดระบุ นามสกุล ของคนที่ "+i)
    sum = sum + 1
    houseNumber = sum % 4
    if (houseNumber == 1){
        count_house1 = count_house1 + 1
        document.getElementById("house-list").innerHTML +="คนที่ "+i+" ชื่อ: "+firstName+"  นามสกุล: "+lastName+"  บ้าน:"+house1+"<br>"
        alert("คุณ"+firstName+" "+lastName+" ได้อยู่"+house1+"ครับผม")
    }
    else if (houseNumber == 2) {
        count_house2 = count_house2 + 1
        document.getElementById("house-list").innerHTML +="คนที่ "+i+" ชื่อ: "+firstName+"  นามสกุล: "+lastName+"  บ้าน:"+house2+"<br>"
        alert("คุณ"+firstName+" "+lastName+" ได้อยู่"+house2+"ครับผม")
    }
    else if (houseNumber == 3) {
        count_house3 = count_house3 + 1
        document.getElementById("house-list").innerHTML +="คนที่ "+i+" ชื่อ: "+firstName+"  นามสกุล: "+lastName+"  บ้าน:"+house3+"<br>"
        alert("คุณ"+firstName+" "+lastName+" ได้อยู่"+house3+"ครับผม")
    }
    else  {
        count_house4 = count_house4 + 1
        document.getElementById("house-list").innerHTML +="คนที่ "+i+" ชื่อ: "+firstName+"  นามสกุล: "+lastName+"  บ้าน:"+house4+"<br>"
        alert("คุณ"+firstName+" "+lastName+" ได้อยู่"+house4+"ครับผม")
    }
}
document.getElementById("result").innerHTML ="จำนวนคนรวม"+ sum

document.getElementById("result1").innerHTML="บ้านหลังที่ 1 มีจำนวน "+count_house1+" คน"
document.getElementById("result2").innerHTML="บ้านหลังที่ 2 มีจำนวน "+count_house2+" คน"
document.getElementById("result3").innerHTML="บ้านหลังที่ 3 มีจำนวน "+count_house3+" คน"
document.getElementById("result4").innerHTML="บ้านหลังที่ 4 มีจำนวน "+count_house4+" คน"
 
count_total= count_house1+count_house2+count_house3+count_house4
document.getElementById("resultTotal").innerHTML ="รวม 4 บ้านมีจำนวน "+ count_total