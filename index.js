class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-'\s]/g, '');
  }

  static titleize(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (!(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].indexOf(words[i]) > -1)) {
        words[i] = this.capitalize(words[i]);
      }
    }
    words[0] = this.capitalize(words[0]);
    return words.join(' ');
  }
}