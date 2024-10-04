import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((info) => process.stdout.write(`${info.body} `));
  createUser().then((info) => console.log(info.firstName, info.lastName));
}
