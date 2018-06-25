const wrap = (line, maxLen) => {
  if (line.length < maxLen) {
    return line;
  } else {
    let newLine = '';
    let splitLines = line.split(' ');
    let finalOutput = [];
    for (let i = 0; i < splitLines.length; i++) {
      if (splitLines[i].length + newLine.length > maxLen - 1) {
        finalOutput.push(newLine);
        newLine = splitLines[i];
      } else {
        if (newLine) {
          newLine += ' ';
        }
        newLine += splitLines[i];
      }
    }
    finalOutput.push(newLine);
    return finalOutput.join('\n');
  }
};
module.exports = wrap;
