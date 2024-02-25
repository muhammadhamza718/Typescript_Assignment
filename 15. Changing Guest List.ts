let guest_list :string[] = ['Hamza Samad','Aneeq Samad','Jawad Samad','Umair Samad'];

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nI would like to invite you to a party.\n\n Thank you!\n\n')
}

let absent_Guest :string ='Hamza Samad' ;

let new_Guest :string = 'Abdul Samad' ;

guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nI would like to invite you to a party.\n\n Thank you!\n\n')
}

console.log(`Mr.${absent_Guest} is not coming to the party.`);