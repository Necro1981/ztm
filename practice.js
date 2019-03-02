const database =[
{
	username: 'Pete Sanders',
	password: 'telegram5'
},
{
	username: 'Amy Jackson',
	password: 'vincent'
},
];

const newsfeed = [
{
	username: 'Emily Watkins',
	timeline: 'Hello there'
},
{
	username: 'psycho1',
	timeline: 'I am going to murder you'
},
{
	username: 'psycho2',
	timeline: 'not if i get you first you idiot'
},
{
	username: 'Amy Jackson',
	timeline: 'I am going to make a million dollars'
},
];

const userPrompt = prompt("What's your username?");
const userPw = prompt("What's your password?");

const isValid = (user,pass) => {
	for (let i=0; i < database.length; i++){
		if(database[i].username === user && database[i].password === pass) {
			return true;
		} else {
		return false;
	}
  }
}

const signIn = (user,pass) => {
	if(isValid(userPrompt,userPw)) {
		console.log(newsfeed);
	} else {
		alert("You have entered invalid user details, please try again later")
	}
}

signIn(userPrompt,userPw);