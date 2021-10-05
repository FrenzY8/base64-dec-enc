
const fs = require('fs');
const readline = require('readline');
// end

// var
var rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});
// end
const Watermark = `

==========================================================  

██╗  ██╗ ██████╗ ███╗   ██╗████████╗ ██████╗ ██╗     
██║ ██╔╝██╔═══██╗████╗  ██║╚══██╔══╝██╔═══██╗██║     
█████╔╝ ██║   ██║██╔██╗ ██║   ██║   ██║   ██║██║     
██╔═██╗ ██║   ██║██║╚██╗██║   ██║   ██║   ██║██║     
██║  ██╗╚██████╔╝██║ ╚████║   ██║   ╚██████╔╝███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚══════╝
                                                     
==========================================================                                                   
`
console.log(Watermark)
const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', () => {
    process.stdin.setRawMode(false)
    resolve()
  }))
}

;(async () => {

  console.log('You Can Cancel this Program')
  await keypress()
  console.log('bye')

})().then(process.exit)
rl.question("Enter Your Text to Decode/Encode : ", Tulisannya => {
    rl.question("Enter the Name for Files (Example : newtext) ", NamaFilenya => {
      /* rl.question("Enter The Formats Files : ", function(FormatFileNya) {

      } */
        rl.question("What is this? (decode) (encode) : ", MetodeDia => {
            if (MetodeDia == "encode") {
                // plain-text string
const str = Tulisannya;

// create a buffer
const buff = Buffer.from(str, 'utf-8');

// decode buffer as Base64
const base64 = buff.toString('base64');

// print Base64 string
console.log(base64);
fs.writeFileSync(
    `${NamaFilenya}.txt`,
    `${base64}`
);
const keypress = async () => {
    process.stdin.setRawMode(true)
    return new Promise(resolve => process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    }))
  }
  
  ;(async () => {

    console.log('program still running, press any key to continue')
    await keypress()
    console.log('bye')
  
  })().then(process.exit)

// QmFzZTY0IEVuY29kaW5nIGluIE5vZGUuan

            } else {
                if (MetodeDia == "decode") {
                    const base64 = Tulisannya;

// create a buffer
const buff = Buffer.from(base64, 'base64');

// decode buffer as UTF-8
const str = buff.toString('utf-8');

// print normal string
console.log(str);
fs.writeFileSync(
    `${NamaFilenya}`,
    `${str}`
);
const keypress = async () => {
    process.stdin.setRawMode(true)
    return new Promise(resolve => process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    }))
  }
  
  ;(async () => {
  
    console.log('Press Any Key To Next Files')
    await keypress()
    console.log('Decode Succes')
  
  })().then(process.exit)
// Base64 Encoding in Node.js
                }
            }
         // })
        })
    })
});
// footer
