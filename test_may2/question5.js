
// 5. Check given string is palindrome or not

// Example: 
// Madam (true)
// Peace (false)


function isPalindrome(input) {
    var ans = "";
    for (var i = 0; i <input.length; i++) {
        ans = input[i] + ans;
    }
    console.log(ans.toLocaleLowerCase());
    if (input.toLowerCase() === ans.toLocaleLowerCase()) {
        return true;
    } else {
        return false;
    }
}
input1 = "Madam";
input2 = "Peace";
console.log(isPalindrome(input1));
console.log(isPalindrome(input2));

;