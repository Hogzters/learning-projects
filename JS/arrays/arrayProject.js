let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

secretMessage.pop();//remove last item

console.log(secretMessage.length);

secretMessage.push('to', 'Program');//add to last item

console.log(secretMessage.length)

secretMessage[7] = 'right';

secretMessage.shift(); //remove first item

secretMessage.unshift('Programming');//add first item

secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join()); //print sentence 
