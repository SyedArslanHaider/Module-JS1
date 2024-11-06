/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
function validPassword(pass){
    if(pass < 5){
        return "Error: Password must have at least 5 characters";
    }
    else if(!/[A-Z]/.test(pass)){
         return "Error: Password must contain at least one uppercase letter (A-Z)";
    }
    else if(!/[a-z]/.test(pass)){
          return "Error: Password must contain at least one lowercase letter (a-z)";
    }
    else if(!/[0-9]/.test(pass)){
         return "Error: Password must contain at least one number(0-9)";
    }
    else if(!/[!#$%.*&]/.test(pass)){
         return "Error: password at least one non-alphanumeric symbol";
    }
    else if(previousPasswords.includes(pass)){
         return "Error: Password must not be any of the previous passwords";
    }
    else{
         return "Password is valid";
    }
}
describe('validPassword',()=>{
     const previousPasswords = ["Password123!", "abcDE1$", "Valid1$"];
     test('should return error if password have less then 5 character',()=>{
          expect(validPassword("Ab1$", previousPasswords)).toBe("Error: Password must have at least 5 characters");
     })
     test('should return error if password does not contain at least one uppercase letter', () => {
    expect(validPassword('abcdef1$', previousPasswords)).toBe("Error: Password must contain at least one uppercase letter (A-Z)");
  });

  test('should return error if password does not contain at least one lowercase letter', () => {
    expect(validPassword('ABCDE1$', previousPasswords)).toBe("Error: Password must contain at least one lowercase letter (a-z)");
  });

  test('should return error if password does not contain at least one number', () => {
    expect(validPassword('ABCDE!', previousPasswords)).toBe("Error: Password must contain at least one number(0-9)");
  });
  test('should return error if password does not contain at least one non-alphanumeric symbol', () => {
    expect(validPassword('Abcde123', previousPasswords)).toBe("Error: password at least one non-alphanumeric symbol");
  });

  test('should return error if password is a previous password', () => {
    expect(validPassword('Password123!', previousPasswords)).toBe("Error: Password must not be any of the previous passwords");
  });

  test('should return valid message if password meets all criteria', () => {
    expect(validPassword('NewPass1$', previousPasswords)).toBe("Password is valid");
  });
})
// const previousPasswords = ["Password123!", "abcDE1$", "Valid1$"];
// console.log(validPassword("Abcde", previousPasswords));         // "Error: Password must contain at least one number (0-9)"
// console.log(validPassword("ABCDE", previousPasswords));         // "Error: Password must contain at least one lowercase letter (a-z)"
// console.log(validPassword("abcd1", previousPasswords));         // "Error: Password must have at least 5 characters"
// console.log(validPassword("Valid1$", previousPasswords));       // "Error: Password must not be any of the previous passwords"
// console.log(validPassword("lowercase1$", previousPasswords));   // "Error: Password must contain at least one uppercase letter (A-Z)"
// console.log(validPassword("12345!", previousPasswords));        // "Error: Password must contain at least one uppercase letter (A-Z)"
// console.log(validPassword("Valid1$", previousPasswords));       // "Error: Password must not be any of the previous passwords"
// console.log(validPassword("NewPass1$", previousPasswords));     // password is valid