
    
    let password = document.getElementById('password');
    let generatePassword = document.getElementById('generate');
    let copyToClipboard = document.getElementById('copy');
    let sourceArray = [];
    

    generatePassword.addEventListener('click', () => {
      sourceArray = [];
      let pwLength = prompt('How long do you want your password to be?');
      while(pwLength > 128 || pwLength < 8 || isNaN(pwLength)) {
        pwLength = prompt('Please enter a numeric value between 8 and 128');
      }
      if (!pwLength) return;

      let upper = confirm('Do you want it to have uppercase letters?');
      let lower = confirm('Do you want it to have lowercase letters?');
      let numbers = confirm('Do you want it to have numbers?');
      let specials = confirm('Do you want it to have special characters?');
      let passwordString = '';
      sourceArray = pwGenerateFlex(upper, lower, numbers, specials);
      for(let i = 0; i < pwLength; ++i) {
        randomNum = Math.floor(Math.random() * Math.floor(sourceArray.length));
        let character = String.fromCharCode(sourceArray[randomNum]);
        passwordString += character;
      }
      password.innerHTML = passwordString;
    });

    let pwGenerateFlex = (upper, lower, number, special) => {
      if(upper) {
        sourceArray = sourceArray.concat(genArray(65, 90));
      }
      if(lower) {
        sourceArray = sourceArray.concat(genArray(97, 122));
      }
      if(number) {
        sourceArray = sourceArray.concat(genArray(48, 57));
      }
      if(special) {
        sourceArray = sourceArray.concat(genArray(32, 47));
        sourceArray = sourceArray.concat(genArray(58, 64));
        sourceArray = sourceArray.concat(genArray(91, 96));
        sourceArray = sourceArray.concat(genArray(123, 126));
      }
      return sourceArray;
    }

    let genArray = (start, end) => {
      let arr = [];
      for(let i = start; i <= end; ++i) {
        arr.push(i);
      }
      return arr;
    }

    let copyPassword = () => {
      password.select();
      password.setSelectionRange(0, 999);
      document.execCommand('copy');
      alert('Copied the text: ' + password.value);
    }


