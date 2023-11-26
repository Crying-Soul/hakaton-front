const current_role = localStorage.getItem("role");
console.log(current_role);
if (current_role == "teacher") {
  $("ul.nav-links").html(`
   <li><a href="./schedule.html">
        <i class="uil uil-schedule"></i>
        <span class="link-name">Расписание</span>
    </a></li>           
<li><a href="./teacher-mark.html">
        <i class="uil uil-book-reader"></i>
        <span class="link-name">Выставление оценок</span>
    </a></li>
<li><a href="./news.html">
        <i class="uil uil-newspaper"></i>
        <span class="link-name">Новости</span>
    </a></li>
<li><a href="./messages.html">
        <i class="uil uil-comments"></i>
        <span class="link-name">Сообщения</span>
    </a></li>
<li><a href="#">
        <button class="trigger" data-modal-trigger="trigger-1"
            style="background: transparent; padding: 0; margin: 0; border: 0; width: 100%; display: flex;">
            <i class="uil uil-user"></i>
            <span class="link-name">Аккаунт</span>
        </button>
    </a>
</li>
  `);
} else if (current_role == "leader") {
  $("ul.nav-links").html(`

<li><a href="./admins.html">
  <i class="uil uil-user-plus"></i>
  <span class="link-name">Админы</span>
</a></li>
<li><a href="./teachers.html">
  <i class="uil uil-user-square"></i>
  <span class="link-name">Преподаватели</span>
</a></li>
<li><a href="./parents.html">
<i class="uil uil-house-user"></i>
  <span class="link-name">Родители</span>
</a></li>
<li><a href="./students.html">
  <i class="uil uil-book-reader"></i>
  <span class="link-name">Обучающиеся</span>
</a></li>
<li><a href="./news.html">
  <i class="uil uil-newspaper"></i>
  <span class="link-name">Новости</span>
</a></li>
<li><a href="./messages.html">
  <i class="uil uil-comments"></i>
  <span class="link-name">Сообщения</span>
</a></li>
<li><a href="#">
  <button class="trigger" data-modal-trigger="trigger-1"
      style="background: transparent; padding: 0; margin: 0; border: 0; width: 100%; display: flex;">
      <i class="uil uil-user"></i>
      <span class="link-name">Аккаунт</span>
  </button>
</a>
</li>
  `);
} else if (current_role == "parent") {
  $("ul.nav-links").html(`
  <li><a href="./schedule.html">
  <i class="uil uil-schedule"></i>
  <span class="link-name">Расписание</span>
</a></li>
<li><a href="./diary.html">
  <i class="uil uil-book-open"></i>
  <span class="link-name">Электронный дневник</span>
</a></li>
<li><a href="./news.html">
  <i class="uil uil-newspaper"></i>
  <span class="link-name">Новости</span>
</a></li>
<li><a href="./messages.html">
  <i class="uil uil-comments"></i>
  <span class="link-name">Сообщения</span>
</a></li>
<li><a href="#">
  <button class="trigger" data-modal-trigger="trigger-1"
      style="background: transparent; padding: 0; margin: 0; border: 0; width: 100%; display: flex;">
      <i class="uil uil-user"></i>
      <span class="link-name">Аккаунт</span>
  </button>
</a>
</li>
  `);
} else if (current_role == "child") {
  $("ul.nav-links").html(`
  <li><a href="./schedule.html">
  <i class="uil uil-schedule"></i>
  <span class="link-name">Расписание</span>
</a></li>
<li><a href="./diary.html">
  <i class="uil uil-book-open"></i>
  <span class="link-name">Электронный дневник</span>
</a></li>
<li><a href="./news.html">
  <i class="uil uil-newspaper"></i>
  <span class="link-name">Новости</span>
</a></li>
<li><a href="./messages.html">
  <i class="uil uil-comments"></i>
  <span class="link-name">Сообщения</span>
</a></li>
<li><a href="#">
  <button class="trigger" data-modal-trigger="trigger-1"
      style="background: transparent; padding: 0; margin: 0; border: 0; width: 100%; display: flex;">
      <i class="uil uil-user"></i>
      <span class="link-name">Аккаунт</span>
  </button>
</a>
</li>
  `);
} else if (current_role == "admin") {
  $("ul.nav-links").html(`<li><a href="./teachers.html">
  <i class="uil uil-user-square"></i>
  <span class="link-name">Преподаватели</span>
</a></li>
<li><a href="./addSchedule.html">
  <i class="uil uil-user-square"></i>
  <span class="link-name">Добавить расписание</span>
</a></li>

<li><a href="./parents.html">
<i class="uil uil-house-user"></i>
  <span class="link-name">Родители</span>
</a></li>
<li><a href="./students.html">
  <i class="uil uil-book-reader"></i>
  <span class="link-name">Обучающиеся</span>
</a></li>
<li><a href="./news.html">
  <i class="uil uil-newspaper"></i>
  <span class="link-name">Новости</span>
</a></li>
<li><a href="./messages.html">
  <i class="uil uil-comments"></i>
  <span class="link-name">Сообщения</span>
</a></li>
<li><a href="#">
  <button class="trigger" data-modal-trigger="trigger-1"
      style="background: transparent; padding: 0; margin: 0; border: 0; width: 100%; display: flex;">
      <i class="uil uil-user"></i>
      <span class="link-name">Аккаунт</span>
  </button>
</a>
</li>
  `);
}

const org = localStorage.getItem('organization');
const title = document.querySelector('.logo_name');

title.textContent = org;

const logo = document.querySelector(".logo-name");
logo.addEventListener("click", (e) => {
  location.href = `${localStorage.getItem("role")}-lk.html`;
});

var requestOptions = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  },
};

// Выполнение запроса fetch
fetch("http://127.0.0.1:3000/api/getInfo", requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((apiData) => {
    function addListItem(label, value) {
      var li = document.createElement("li");
      li.innerHTML = `<span>${label}:</span> ${value}`;
      document.querySelector(".account-list").appendChild(li);
    }

    // Заполнение данными из API
    addListItem("Имя пользователя", apiData.name);
    addListItem("Email", apiData.email);
    addListItem("Phone", apiData.phone);
    addListItem("Id", apiData.id);
    addListItem("Роль", apiData.role);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
