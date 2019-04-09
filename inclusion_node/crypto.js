
const fs = require('fs');
const path = require('path');
const filename = path.join('D:/projetcrypto', 'package.txt');


fs.readFile(filename, (err, content) => {   // (1)
  //console.log(String(content));             // (2)
});
var crypto = require('crypto');

var text = "poireau2"

// On définit notre algorithme de cryptage
var algorithm = 'aes256';

// Notre clé de chiffrement, elle est souvent générée aléatoirement mais elle doit être la même pour le décryptage
var password = 'l5JmP+G0/1zB%v$fd^vf^d$^é"$rnboàç_é"r8B8?2?2pcqGcL^3fe815c5';

// On crypte notre texte
var cipher = crypto.createCipher(algorithm,password);
var crypted = cipher.update(text,'utf8','hex');
crypted += cipher.final('hex');
try {
  fs.writeFileSync('package.txt', crypted, { mode: 0o755 });
} catch(err) {
  // An error occurred
  console.error(err);
}

fs.readFile(filename, (err, content) => {   // (1)
  //console.log(String(content));             // (2)
});

// On décrypte notre texte
var decipher = crypto.createDecipher(algorithm,password);
var dec = decipher.update(crypted,'hex','utf8');
dec += decipher.final('utf8');

module.exports.crypto = crypted;
module.exports.crypto = dec;
console.log(dec);
console.log(crypted);