// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
// 더하고 빼고 곱하고 나누고 나머지 구하고

// 3. 복합 대입 연산자(산술이랑 대입이랑 섞인거)
let num7 = 10;
// num7 = num7 + 20;
num7 += 20;// 산술과 대입이 섞인것 위와 같음.
console.log(num7);
num7 -= 10;
console.log(num7);

// 4. 증감연산자
let num8 = 10;
num8++; // 후위연산. 전위연산도 있음
console.log(num8);

// 5. 논리연산자
let or = true || false;
let and = true && false;
let not = !true; // 논리부정연산자

console.log(or)
console.log(and)
console.log(not)

// 6. 비교연산자
let comp1 = 1 === "1";
let comp2 = 1 !== 2;
// == 이면 담긴 값이 같을 시 true 이지만
// === 일때 타입까지 비교하므로 int 와 String이 다른점을 이용
console.log(comp1, comp2);

let comp3 = 2 >= 1;
let comp4 = 2 <= 1;