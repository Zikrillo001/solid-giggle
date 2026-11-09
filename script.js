// "Salom ber" tugmasi bosilganda ishlaydi
function salomBer() {
  // 👉 O'ZGARTIR: xabar matnini o'zgartir
  alert("Saytimga xush kelibsiz!");
}

// "Rangni o'zgartir" tugmasi bosilganda ishlaydi
function rangniOzgartir() {
  // 👉 O'ZGARTIR: ro'yxatga o'z ranglaringni qo'sh
  let ranglar = ["pink", "lightgreen", "yellow", "lightblue", "violet"];
  let tasodifiy = ranglar[Math.floor(Math.random() * ranglar.length)];
  document.body.style.backgroundColor = tasodifiy;
}

// "+1" tugmasi bosilganda ishlaydi
let son = 0;
function qoshish() {
  son = son + 1; // 👉 O'ZGARTIR: +1 o'rniga +5 qilib ko'r
  document.getElementById("hisob").textContent = son;
}
