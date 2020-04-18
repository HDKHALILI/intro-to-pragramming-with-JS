// NOTE:
// Remember that expressions involving the logical operators
// \\ and && use short-circuit evaluation; they also return
// truthiness values.

// 1. What values do the following expressions evaluate to?
// (true && false) is evaluated first -> false
// false || false -> false
false || (true && false); // -> false

// (1 + 2) = 3, which is truthy
// true || 3 (truthy) -> true
true || (1 + 2); // -> true

// (1 + 2) = 3, which is truthy
// 3 (truthy) || true -> true (as soon as || operator encounters
// a truthy operand it short circuits and return true)
(1 + 2) || true; // -> 3

// (1 + 2) = 3, which is truthy
// true && 3 (truthy) -> true
true && (1 + 2); // -> 3

// (1 + 2) = 3, which is truthy
// false && 3 (truthy) -> false
false && (1 + 2); // -> false

// (1 + 2) = 3, which is truthy
// 3 (truthy) || true -> true
(1 + 2) && true; // -> true

// (32 * 4) = 128
// 128 >= 129 = NO -> false
32 * 4 >= 129; // -> false

// !true = false
// false !== false = No they are equal
// -> false
false !== !true; // -> false

// 4 is truthy but not the same as true
true === 4; // -> false

// Is number 847 equal to string 847? NO
// === operator checks for value and identity
// (847 ==== '847') = false
// false === false = YES
// -> true
false === (847 === "847"); // -> true

// (847 == '847') = true (with == operator the operands
// are coerced to have the same type (identity) then
// their values are compared)
// (847 == 847) = true
// ('847' == '847') = true
false === (847 == "847"); // -> false

// when there nested conditions with parenthesis
// start evaluating from the inner most
// if operator with the same precedence in the same depth
// evaluate from left to right
// 1. (100 / 5) = 20 ----> (20 === 20) -> true
//    !(true) = false (negating true becomes false)
// ---> (!true || (false || (328 / 4) === 82)) || false
// 2. (328 / 4) = 82 ----> (82 === 82) -> true
// ----> (!true || (false || true)) || false
// 3. (false || true) -> true
// ----> (!true || true) || false
// 4. !true = false ----> false || true -> true
// ----> true || false -> true
!true || !(100 / 5) === 20 || 328 / 4 === 82 || false; // -> true
