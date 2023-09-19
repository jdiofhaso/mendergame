let rand
let words
var wordchoices = ["farted","mendenmomered","need help", "phated out my shenie","shated out my penie","penied my mendene","subbed 2 faard","yor momerd",'helppp meeeeeeeeeee they are in my wallssssssssss'
                   ]

function mousePressed() {
  let rand = Math.ceil(Math.random()*wordchoices.length);
  };
let words = wordchoices[rand]


// if(rand=0) {
//   let words = 'fog!!!'
// } else if(rand=1) {
//   let words = 'did a Menden Momer.'
//   } else if(rand=2) {
//     let words = 'sub2faard'
//     } else if(rand=3) {
//       let words = 'fart ganged extra big'
//       } else if(rand=4) {
//         let words = 'yor mom best youtuber!!!'
//         } else  if(rand=5) {
//           let words = 'fogged'
//           } else  if(rand=6) {
//               let words = 'wanted mender game 2 coming soon'
//               } else  if(rand=7) {
//                   let words = 'fart ganged'
//                   } else  if(rand=8) {
//                       let words = 'collabed with robert tobert'
//                       } else  if(rand=9) {
//                           let words = 'jaropee momerod !!!!!'
//                           };

document.write('i just' + words);
