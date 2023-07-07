function rot13(str) {
    const letterArray = str.split('');
    let updatedArray = [];

    console.log(letterArray)
    letterArray.forEach((char) => {
      const code = char.charCodeAt();

      let intCode = parseInt(code);

      if (intCode > 77 && intCode <=90) {
        intCode -= 13
      }else if (intCode >= 65 && intCode <= 77) {
        intCode += 13
      }

      const updatedChar = String.fromCharCode(intCode);
      updatedArray.push(updatedChar);
    })

     let newStr = updatedArray.join('');
     return(newStr);
    }

    rot13("SERR CVMMN!");