let personName :string = '';

personName = prompt('what is you name?') || '';

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, would you like to learn some Python today?`)
}
else{
    alert('you have to fill your name!')
}