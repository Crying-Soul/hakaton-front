$(document).ready(function () {
    const API_END_POINT = "http://127.0.0.1:3000";
    var panelOne = $(".form-panel.two").height() + 100,
      panelTwo = $(".form-panel.two")[0].scrollHeight;

    $(".form-panel.two")
      .not(".form-panel.two.active")
      .on("click", function (e) {
        e.preventDefault();

        $(".form-toggle").addClass("visible");
        $(".form-panel.one").addClass("hidden");
        $(".form-panel.two").addClass("active");
        $(".form").animate(
          {
            height: panelTwo,
          },
          200
        );
      });

    $(".form-toggle").on("click", function (e) {
      e.preventDefault();
      $(this).removeClass("visible");
      $(".form-panel.one").removeClass("hidden");
      $(".form-panel.two").removeClass("active");
      $(".form").animate(
        {
          height: panelOne,
        },
        200
      );
    });
    function sendRequest(url, method, data, successCallback, errorCallback) {
      $.ajax({
        url: url,
        method: method,
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
        success: successCallback,
        error: function (jqXHR, textStatus, errorThrown) {
          if (jqXHR.status >= 400) {
            errorCallback(jqXHR.responseText);
          }
        },
      });
    }

    $("#login").on("click", function (e) {
      e.preventDefault();

      var loginData = {
        email: $("#email").val(),
        password: $("#password").val(),
      };

      sendRequest(
        API_END_POINT + "/api/login",
        "POST",
        loginData,
        function (data, textStatus, jqXHR) {
          let role = data.role.toLowerCase();
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", role);
          if (role == "parent") {
              localStorage.setItem('students', JSON.stringify(data.students));
          }
          location.href = `pages/${role}-lk.html`;
        },
        function (errorResponse) {
          $("#error-login").text(JSON.parse(errorResponse).message);
        }
      );
    });

    $("#signup").on("click", function (e) {
      e.preventDefault();

      var signupData = {
        email: $("#email-sign").val(),
        organization: $("#username").val(),
        phone: $("#phone-sign").val(),
      };

      sendRequest(
        API_END_POINT + "/api/leader/signup",
        "POST",
        signupData,
        function (data, textStatus, jqXHR) {
          localStorage.setItem("password", data.password);
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", 'leader');
          location.href = "pages/leader-lk.html";
        },
        function (errorResponse) {
          $("#error-signup").text(JSON.parse(errorResponse).message);
        }
      );
    });
    if (localStorage.getItem('token')) {
      location.href = `pages/${localStorage.getItem('role')}-lk.html`
    }
});
