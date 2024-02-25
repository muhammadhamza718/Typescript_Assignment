let guest_list :string[] = ['Hamza Samad','Aneeq Samad','Jawad Samad','Umair Samad'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n')
// }

let absent_Guest :string ='Hamza Samad' ;
let new_Guest :string = 'Abdul Samad' ;
guest_list[0] = new_Guest ;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n')
// }

// console.log(`Mr.${absent_Guest} is not coming to the party.`);
// console.log('Good New! We Find Big Table So we are inviting 3 more guests.')

//array me 3 guest add kiye hain.
guest_list.unshift('Naveed Khattak');
guest_list.splice(2,0, 'Atif Malik');
guest_list.push('Masroor Ahmad');

//yahan per mene 6 guest ke array ko print kraya he.
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n')
// }

//sorry message to guest for not inviting.
// console.log('\nSorry we can not arrange big table. only two people will be invited')

//tahan par mene quest remove kiye hain.
while(guest_list.length > 2 ){
    let remove_guest = guest_list.pop();
    // console.log(`Sorry Mr ${remove_guest}, You are not invited for Dinner.`)
}//hamare bache howe 2 invited Guest
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still Invited.\n\n Thank you!\n\n')
// }
 // Mene sare quest array se remove kar diye.
guest_list.splice(0,2);
console.log(guest_list);

// Exercise 19

//print a message indicating the number of people you are inviting to dinner.

console.log(`Total Number Of Guest: ${guest_list.length}`)