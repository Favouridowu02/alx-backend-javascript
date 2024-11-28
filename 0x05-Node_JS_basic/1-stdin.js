export default function Print() {
    console.log('Welcome to Holberton School, what is your name?');

    userName = process.stdin();

    if (userName) {
        console.log(`Your name is: ${userName}`);
        console.log('This important software is now closing');
    }
    else {
        console.log('')
    }
}