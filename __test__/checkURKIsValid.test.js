import { checkUrlIsValid } from "../src/client/js/checkUrlIsValid";


test('Reject wrong url', () => {
  let url = 'www.foxnews.com';
  expect(checkUrlIsValid(url)).toBeFalsy();
});

test('Accepts correct URL', () => {
    let url = 'https://www.foxnews.com';
    expect(checkUrlIsValid(url)).toBeTruthy();
  });
