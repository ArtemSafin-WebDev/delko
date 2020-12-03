document.addEventListener("DOMContentLoaded", function () {
  var introBlocks = Array.prototype.slice.call(
    document.querySelectorAll(".js-intro")
  );

  introBlocks.forEach(function (element) {
    var layers = Array.prototype.slice.call(
      element.querySelectorAll(".intro__panel-form-layer")
    );
    var firstStepBtn = element.querySelector(".js-first-step-btn");
    var secondStepBtn = element.querySelector(".js-second-step-btn");
    var form = element.querySelector("form");
    var submitBtn = element.querySelector(".js-submit-btn");

    var telInput = element.querySelector(".js-phone-input");
    var textInput = element.querySelector(".js-company-input");
    var privacyCheckbox = element.querySelector(".js-privacy-checkbox");

    function validate() {
      var phoneValid =
        telInput.value.trim() !== "" &&
        /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
          telInput.value.trim()
        );
      var companyDataValid = textInput.value.trim() !== "";
      var privacyChecked = privacyCheckbox.checked;

      if (phoneValid && companyDataValid && privacyChecked) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    //   console.log({ phoneValid, companyDataValid, privacyChecked, phoneValue: telInput.value });
    }

    [telInput, textInput, privacyCheckbox].forEach(function (input) {
      if (input === privacyCheckbox) {
        input.addEventListener("change", validate);
      } else {
        input.addEventListener("input", validate);
      }
    });

    var firstStepSelects = Array.prototype.slice.call(
      layers[0].querySelectorAll("select")
    );

    firstStepSelects.forEach(function (select) {
      select.addEventListener("change", function () {
        if (
          firstStepSelects.find(function (select) {
            return select.value === "";
          })
        ) {
          firstStepBtn.disabled = true;
        } else {
          firstStepBtn.disabled = false;
        }
      });
    });

    firstStepBtn.addEventListener("click", function (event) {
      event.preventDefault();

      if (firstStepBtn.disabled) return;

      layers.forEach(function (layer) {
        layer.classList.remove("active");
      });
      layers[1].classList.add("active");
    });

    secondStepBtn.addEventListener("click", function (event) {
      event.preventDefault();

      layers.forEach(function (layer) {
        layer.classList.remove("active");
      });
      layers[2].classList.add("active");
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      submitBtn.disabled = true;
      firstStepBtn.disabled = true;
      form.reset();
      layers.forEach(function (layer) {
        layer.classList.remove("active");
      });
      layers[0].classList.add("active");
    });
  });

  var customSelects = Array.prototype.slice.call(
    document.querySelectorAll(".js-custom-select")
  );

  customSelects.forEach(function (select) {
    new Choices(select, {
      noResultsText: "Результатов не найдено",
      noChoicesText: "Опции отсутствуют",
      itemSelectText: "",
      loadingText: "Загрузка",
      searchEnabled: true,
      shouldSort: false,
      position: "bottom",
    });
  });

  var phoneInputs = Array.prototype.slice.call(
    document.querySelectorAll(".js-phone-input")
  );
  phoneInputs.forEach(function (input) {
    var instance = new Inputmask({ mask: "+7 (999) 999-99-99" });
    instance.mask(input);
  });

  var pageHeader = document.querySelector('.page-header.fill-on-scroll');

  if (pageHeader) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset >= 20) {
       
        pageHeader.classList.add('filled');
      } else {
      
        pageHeader.classList.remove('filled');
      }
    })
  }
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.body.classList.add("animatable");
  }, 200);
});
