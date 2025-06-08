// Find the Second Largest Number
//    Write a program to find the second largest number in an array using a single loop. Do not use built-in sort.
let arr=[1,2,3,4,2,4,5,7,4,9,7]
let arr2=[]
for (let i=0;i<arr.length;i++){
    if (arr2.includes(arr[i])){

    }else{
        arr2.push(arr[i])
    }
}

arr2.sort((a,b)=>(b-a))
console.log(arr2)
console.log(arr2[1])


// 2. Sum of Even Digits
//    Given a number, calculate the sum of its even digits using a loop (e.g., input: 2346, output: 2+4+6 = 12).

let numb=123456
let even_sum=0
while(numb!=0){
    last=numb%10
    if (last%2==0){
        even_sum+=last

    }
    numb=Math.floor(numb/10)
}
console.log(even_sum)





// 3. Check for Prime Number
//    Write a function that returns true if the input number is prime, else false. Avoid built-in methods.

function is_prime (n) {
    let fact=0
    for (i=2;i<n;i++){
        if (n%i==0){
            fact++
            break
        }   
    }
    if (fact==0){
        return true
    }else{
        return false
    }
}
console.log(is_prime(10))




// 4.Reverse a Number
//   Using a loop  reverse the digits of a number.
//   Example: "1234" → "4321"  
 let number="1234"
 rev=""
 for (let i=number.length-1;i>=0;i--){
    rev+=number[i]
 }
 console.log(rev)



// 5.Fibonacci Series
//   Generate the first n Fibonacci numbers using a for or while loop.
//   Example: 0, 1, 1, 2, 3, 5, 8...
let limit=10
let a=0
let b=1
for (let i=0;i<limit;i++){
    console.log(a)
    let c=a+b
    a=b
    b=c
}



// 6.Check Armstrong Number
//   A number is Armstrong if the sum of its digits raised to the power of number of digits equals the number.
//   Example: 153 = 1³ + 5³ + 3³ = 153

let num=153
let temp=num
let power=num.toString().length
let sum=0
while (num!=0){
    let digit=num%10
    sum+=digit**power
    num=Math.floor(num/10)
}
if (temp==sum){
    console.log("armstrong number")
}else{
    console.log("not an armstrong number")
}

// 7.Find Factorial (Loop and Recursion)
//   Write two versions of a factorial function – one using a loop, and another using recursion.
let n=6
let fact=1
for (i=1;i<=n;i++){
    fact*=i
}
console.log(fact)

// recursive
function factorial(n){
    if (n==0 || n==1 ){
     return 1
    }
    else{
        return n*factorial(n-1)
    }
        
}
console.log(factorial(6))

// 8.Count Vowels in a String
//   Write a function that returns the number of vowels (a, e, i, o, u) in a string (case-insensitive).
let string="udayasree"
let vowels="a,e,i,o,u"
let vowels_count=0
for (let i=0; i<=string.length;i++){
    if (vowels.includes(string[i])){
        vowels_count++

    }
}
console.log(vowels_count)







// 9.Find All Palindromes in an Array
//   Write a function that takes an array of strings and returns all elements that are palindromes.

// 10.Kaprekar Number
//    Write a function to check whether a number is a Kaprekar number or not.
//    A Kaprekar number is a number whose square can be split into two parts that add up to the original number.
//    Example: 45 → 45² = 2025 → 20 + 25 = 45 (Kaprekar number)

// 11.Find Intersection of Two Arrays
//    Create a function that returns the common elements between two arrays without using filter, includes, or Set.

// 12.Find Duplicates in an Array
//    Write a function that identifies and returns duplicate elements from an array of numbers.

// 13.Write a JavaScript function that takes a string as input and returns the character that appears the most times in the string. 
//    If multiple characters have the same highest frequency, return any one of them.
//    Input: "programming"
//    Output: "g" (since 'g' appears twice, which is the highest)

// 14.Is Anagram?
//    Write a function that checks whether two input strings are anagrams of each other.
//    Example: listen and silent

// 15.Write a JavaScript function to calculate the sum of the series:
//    For n = 6, the sum is 1 - 2 + 3 - 4 + 5 - 6 = -3.
//    Implement the function to return the sum for any given positive integer n.



