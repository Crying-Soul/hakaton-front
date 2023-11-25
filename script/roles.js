const current_role = localStorage.getItem("role");
console.log(current_role);
if (current_role == "teacher") {
   
  $("ul.nav-links").html(`
   <li><a href="./schedule.html">
                        <i class="uil uil-schedule"></i>
                        <span class="link-name">Расписание</span>
                    </a></li>
                <li><a href="./diary.html">
                        <i class="uil uil-book-open"></i>
                        <span class="link-name">Электронный дневник</span>
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
  <li><a href="./schedule.html">
  <i class="uil uil-schedule"></i>
  <span class="link-name">Расписание</span>
</a></li>
<li><a href="./diary.html">
  <i class="uil uil-book-open"></i>
  <span class="link-name">Электронный дневник</span>
</a></li>
<li><a href="./teachers.html">
  <i class="uil uil-user-square"></i>
  <span class="link-name">Преподаватели</span>
</a></li>
<li><a href="./admins.html">
  <i class="uil uil-user-plus"></i>
  <span class="link-name">Админы</span>
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
