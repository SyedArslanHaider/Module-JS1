## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
'Undefined'
Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert
:
ƒ assert()
clear
:
ƒ clear()
context
:
ƒ context()
count
:
ƒ count()
countReset
:
ƒ countReset()
createTask
:
ƒ createTask()
debug
:
ƒ debug()
dir
:
ƒ dir()
dirxml
:
ƒ dirxml()
error
:
ƒ error()
group
:
ƒ group()
groupCollapsed
:
ƒ groupCollapsed()
groupEnd
:
ƒ groupEnd()
info
:
ƒ info()
log
:
ƒ log()
memory
:
MemoryInfo {totalJSHeapSize: 10000000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 2190000000}
profile
:
ƒ profile()
profileEnd
:
ƒ profileEnd()
table
:
ƒ table()
time
:
ƒ time()
timeEnd
:
ƒ timeEnd()
timeLog
:
ƒ timeLog()
timeStamp
:
ƒ timeStamp()
trace
:
ƒ trace()
warn
:
ƒ warn()
Try also entering `typeof console`
'object'
Answer the following questions:

What does `console` store?
It can not store the information it only display the information
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console is an object and log and assert are both functions '.' is used to access the functions like
console.log("hello world"); it display the message inside log on console
console.assert(condition,'message'); if condition is false then it display the message
