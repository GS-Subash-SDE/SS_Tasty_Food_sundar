const orderBtn = document.getElementById("order-btn");
const fbBtn = document.querySelector(".social-fb");
const instaBtn = document.querySelector(".social-insta");
const whatsAppBtn = document.querySelector(".social-wa");

// order button click event
orderBtn.addEventListener("click", (e) => {
  const link = document.createElement("a");
  link.href = "https://wa.me/+917299882851";
  link.target = "_blank";
  link.click();
});

// https://www.facebook.com/msundar.sundar.9440
// https://www.instagram.com/jeevesh488/

// FB btn click evetn
fbBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://www.facebook.com/msundar.sundar.9440";
  link.target = "_blank";
  link.click();
});
// Instagram btn click evetn
instaBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://www.instagram.com/jeevesh488/";
  link.target = "_blank";
  link.click();
});
// Whatsapp btn click evetn
whatsAppBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://wa.me/+917299882851";
  link.target = "_blank";
  link.click();
});
