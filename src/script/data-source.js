import reseps from "./data.js";

function bruteForce(text, keyword) {
  const arrText = text.split('');
  const arrKeyword = keyword.split('');

  for(let i = 0; i < arrText.length; i++) {
    let temp = [];
    for (let j = 0; j < arrKeyword.length; j++) {
      if (arrText[i + j] != arrKeyword[j]) {
        break;
      } else {
        temp.push(1);
      }
    }

    if(temp.length == arrKeyword.length) {
      return true
    }
  }
  return false
}

class DataSource {
  static searchResep(keyword) {
    return new Promise((resolve, reject) => {
      console.log(reseps[1].nama);
      const filteredReseps = reseps.filter(
        (resep) =>
        bruteForce(resep.nama.toUpperCase(), keyword.toUpperCase()) ||
        bruteForce(resep.label.toUpperCase(), keyword.toUpperCase())
      );

      if(filteredReseps.length) {
        resolve(filteredReseps);
      } else {
        reject(`${keyword} is not found`)
      }
    });
  }
}
export default DataSource;
