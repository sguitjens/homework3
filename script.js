
    
    let password = document.getElementById('password');
    let generatePassword = document.getElementById('generate');
    let copyToClipboard = document.getElementById('copy');
    // let pwLength = 0;
    // let specials = [58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
    let sourceArray = [];
    

    generatePassword.addEventListener('click', () => {
      sourceArray = [];
      let pwLength = prompt('How long do you want your password to be?');
      // while(pwLength > 2)
      let upper = confirm('Do you want it to have uppercase letters?');
      console.log('upper', upper); // TEST CODE
      let lower = confirm('Do you want it to have lowercase letters?');
      console.log('lower', lower); // TEST CODE
      let numbers = confirm('Do you want it to have numbers?');
      console.log('numbers', numbers); // TEST CODE
      let specials = confirm('Do you want it to have special characters?');
      console.log('specials', specials); // TEST CODE
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
        console.log(Array.from(sourceArray, item => String.fromCharCode(item))); // TEST CODE
      }
      if(lower) {
        sourceArray = sourceArray.concat(genArray(97, 122));
        console.log(Array.from(sourceArray, item => String.fromCharCode(item))); // TEST CODE
      }
      if(number) {
        sourceArray = sourceArray.concat(genArray(48, 57));
        console.log(Array.from(sourceArray, item => String.fromCharCode(item))); // TEST CODE
      }
      if(special) {
        sourceArray = sourceArray.concat(genArray(32, 47));
        sourceArray = sourceArray.concat(genArray(58, 64));
        sourceArray = sourceArray.concat(genArray(91, 96));
        sourceArray = sourceArray.concat(genArray(123, 126));
        console.log(Array.from(sourceArray, item => String.fromCharCode(item))); // TEST CODE
      }
      console.log("sourceArray", sourceArray) // TEST CODE
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
    

    // create a string lf length pwLength that includes any of the characters
    // <space>!"#$%&'()*+,-./ (32-47) - special set 1 (16)
    // 0-9 (48-57) - numbers
    // :;<=>?@ (58-64) - special set 2 (7)
    // A-Z (65-90) - upper
    // [\]^_` (91-96) - special set 3 (6)
    // a-z (97-122) - lower
    // {|}~ (123-126) - special set 4 (4)
    // the full list is 33-126 (a total of 94 characters)
    // use string.fromCharCodeAt()
    // use Math.floor(Math.random() * Math.floor(max))
    // this generates a number between 0 and max
    // use 94 as max
    // shift the result + 33

    // another option: 

    //NOTES
// upper and lower bounds

