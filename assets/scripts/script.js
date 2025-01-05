const btn = document.getElementById("btn_follow");
btn.addEventListener("click", function () {
  if (btn.innerText == "Follow") {
    btn.innerText = "Unfollow";
  } else {
    btn.innerText = "Follow";
  }
  btn.classList.toggle("unfollow");
});
