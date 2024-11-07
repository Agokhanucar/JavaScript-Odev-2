'use strict';

function newElement() {
    // Input alanından görev bilgisini al
    var taskInput = document.getElementById("task").value;
    // Liste öğesini ve hatırlatıcı elementlerini seç
    var list = document.getElementById("list");
    var successToast = document.querySelector(".toast.success");
    var errorToast = document.querySelector(".toast.error");
  
    // Boş değilse görevi listeye ekle
    if (taskInput.trim() !== "") {
      // Yeni liste elemanı oluştur
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(taskInput));
  
      // Listeye ekle
      list.appendChild(li);
  
      // Başarı mesajını göster ve input alanını temizle
      successToast.classList.remove("hide");
      $(successToast).toast("show");
      document.getElementById("task").value = "";
  
      // Eklenen liste elemanına silme işareti ekle
      var span = document.createElement("span");
      var txt = document.createTextNode(" \u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      // Silme işaretine tıklanınca görevi kaldır
      span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    } else {
      // Boşsa hata mesajını göster
      errorToast.classList.remove("hide");
      $(errorToast).toast("show");
    }
  }
  
  // Mevcut liste elemanlarına silme özelliği ekle
  var listItems = document.getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode(" \u00D7");
    span.className = "close";
    span.appendChild(txt);
    listItems[i].appendChild(span);
  }
  
  // Silme işaretine tıklanınca görevi kaldır
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });
  