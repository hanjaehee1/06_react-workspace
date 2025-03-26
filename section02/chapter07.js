// 6가지의 배열 요소 조작하는 메소드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하고 배열의 길이를 반환하는 메소드
let arr1 = [1,2,3];
const newLength = arr1.push(4,5,6);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1,2,3];
const popItem = arr2.pop();
// arr2.pop에 있는 날아간 마지막 인덱스가 popItem에 담김
// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1,2,3];
const shiftItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하고 배열 길이 반환하는 메소드

let arr4 = [1,2,3];
const newLength2 = arr4.unshift(0);
// 배열의 맨 앞 0번인덱스 자리에 0 을 추가하고 기존 인덱스들 +1

// shift 와 unshift는 push 랑 pop 보다 느리게 작동함. 후순위.
// 인덱스를 밀고 복붙해줘야 하기 때문에 어쩔 수 없음

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
let slice1 = arr5.slice(-2)

// console.log(slice1)
// console.log(arr5) // 원본에 영향을 끼치지 않음

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concatArr = arr6.concat(arr7);
console.log(concatArr)