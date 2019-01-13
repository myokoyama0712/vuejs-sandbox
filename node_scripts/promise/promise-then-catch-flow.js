function taskA() {
  console.log('Task A')
}
function taskB() {
  console.log('Task B')
}
function onRejected(error) {
  console.log('Catch Error: A or B', error)
}
function finalTask() {
  console.log('Final Task')
}

p = Promise.resolve()
p
  .then(taskA)
  .then(taskB)
  .catch(onRejected)
  .then(finalTask)

