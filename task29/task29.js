(function validateForm() {
  function validateRequired(field, warningText) {
    if (field === null || field === '') {
      warning = warningText;
      return false;
    }
    return true;
  }

  function validateLength(length, warningText) {
    if (length < 4 || length > 16) {
      warning = warningText;
      return false;
    }
    return true;
  }

  function getCharacterLength(field) {
    var fieldLength = 0;

    for (var c=0; c < field.length; c++) {
      if (field[c].match(/\w/)) {
        fieldLength += 1;
      } else if(field[c].match(/[\u4e00-\u9fa5]/)) {
        fieldLength += 2;
      }
    }

    return fieldLength;
  }


  var warning = '';

  var btn = document.getElementsByTagName('button')[0];
  var warningElement = document.getElementsByClassName("warning")[0];

  btn.addEventListener('click', function(e) {
    e.preventDefault();

    var inputValue = document.getElementById('pattern').value;

    var isEmpty = validateRequired(inputValue, '姓名不能为空');

    if (!isEmpty) {
      warningElement.innerText = warning;
      return false;
    }

    var usernameLength = getCharacterLength(inputValue);

    if (!validateLength(usernameLength, '必填，长度为4~16个字符')) {
      warningElement.innerText = warning;
      return false;
    }

    warningElement.innerText = '合法的用户名';
  }, false);
})();