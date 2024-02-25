let guest_list :string[] = ['Hamza Samad','Aneeq Samad','Jawad Samad','Umair Samad'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n')
// }

let absent_Guest :string ='Hamza Samad' ;

let new_Guest :string = 'Abdul Samad' ;

guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n')
}

console.log(`Mr.${absent_Guest} is not coming to the party.`);

console.log('Good New! We Find Big Table So we are inviting 3 more guests.')

guest_list.unshift('Naveed Khattak');
guest_list.splice(2,0, 'Atif Malik');
guest_list.push('Masroor Ahmad');

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n')
}