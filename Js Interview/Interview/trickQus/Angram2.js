function anagram(str1, str2) {
  if (str1.length === str2.length) {
    for (let i = 0; i < str2.length; i++) {
      if (str1.includes(str2[i])) {
        return true;
      } else return false;
    }
  }
   return false;
}
console.log(anagram("post", "stop"));
