const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

let keysUser = Object.keys(user);
for(let key of keysUser){
    console.log(`${key}: ${user[key]}`)
}