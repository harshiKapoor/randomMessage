const messageCollection = ['Slow and steady wins the race','Be confident but never proud','Dont be in race'];

const myMessage = () => {
    return messageCollection[Math.floor(Math.random()*2)]
}

console.log(myMessage);