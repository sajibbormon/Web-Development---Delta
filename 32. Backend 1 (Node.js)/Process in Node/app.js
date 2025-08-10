/**
 * Process
------------
Process: This object provides informatioin about, and control over, the current Node.js process.

process.argv: returns an array containing the command-line arguments passed when the Node.js process was launched.


If we want to change or manipulate information, we use process object.
Process object has some special properties and methods which allows us to work with take input, give output,
version control, current working directory, memory access related task etc.

we can check process version by using 'process.version' command
we can check process release by using 'process.release' command
we can check current working directory by using 'process.cwd()' command


process.argv: which return an array. 

by default it is: [ 'C:\\Program Files\\nodejs\\node.exe' ]
when we run it on terminal.

But if we print in a file's console then it will return two values without passing arguments:

[
  'C:\\Program Files\\nodejs\\node.exe',                                            ---> executable path for node
  'E:\\Sigma 5.0\\Web Development\\32. Backend 1 (Node.js)\\Process in Node\\script.js' ---> current file path  
]


With argument by passing two agruments: hello, bye
command: node script.js hello bye

then output will be:

[
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\Sigma 5.0\\Web Development\\32. Backend 1 (Node.js)\\Process in Node\\script.js',
  'hello',
  'bye'

]


 */