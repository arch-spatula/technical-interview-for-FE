# 빅오 표기법

## 빅오(Big-O) 소개

[강의 ppt](https://cs.slides.com/colt_steele/big-o-notation)

빅오 표기법은 크고 작음 정도를 나타냅니다. 앞으로 많은 개념들이 빅오표기법에 학습 의존성을 갖고 있습니다.

빅오 표기법은 수학적인 이해가 필요합니다. 로그함수, 지수함수 같은 개념들이 필요합니다. 하지만 프로그래밍에 대한 지식이 필요합니다. 일부 프로그래밍 지식은 수학적인 지식이 필요합니다. 하지만 모든 과정이 모두 수학적인 지식에 의존성이 강한 것은 아닙니다.

- 빅오 표기법이 필요한 이유입니다.
- 단순화
- 시간복잡성 공간복잡성
- 빅오표기법으로 묘사하기
- 로그함수를 표사하기

컴퓨터과학에서 다양한 해결방법이 있습니다. 하지만 거기서 가장 효율적인 것이 있습니다. 동일하게 문제를 해결하지만 성능을 비교해서 우위를 결정합니다.

코드의 효율성을 분류하고 비교하기는 기준이 빅오표기업입니다. 지진을 비교하기 위해서 지진을 강도별로 비교하는 것과 유사합니다. 이런 큰 분류가 더 직관적이고 정량적으로 표기하는 것이 더욱더 객관적이게 만듭니다.

하지만 왜 이런 성능비교를 하는가? 프로젝트에 따라서는 동작하는 정도로 충분합니다. 하지만 기술면접부터 대규모의 거대한 데이터를 다루어야 할 때 성능은 중요합니다. 그리고 이런 성능을 묘사할 수 있는 어휘를 갖고 있어야 합니다.

또 공학답게 트레이드 오프가 존재합니다. 각각 상황별로 결정할 효율들이 다릅니다.

코드를 디버깅할 때 에러 뿐만아니라 성능 측면에서 이해가 필요할 때가 있습니다. 어디에 문제가 있는지 파악할 수 있습니다.

정말 많은 경우 면접질문입니다. 코딩테스트를 제출하고 그 코드의 빅오표기법으로 이야기해달라고 요청하는 경우가 많습니다.

## 코드 시간 재기

1부터 n까지 합하는 함수를 만들라고 하면 다음과 같이 구현합니다.

```js
// ADD1.js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`); // Time Elapsed: 0.8778059170022607 seconds.
```

처음에는 이렇게 구현할 수 있습니다.

```js
// ADD2.js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`); // ime Elapsed: 0.00025950000435113904 seconds.
```

하지만 위처럼 구현하는 방법도 존재합니다. 반복문이 없습니다. 수학적 공식을 활용한 코드입니다.

가독성, 메모리 가용성, 속도, 간략함 등 다양한 기준들이 존재합니다. 하지만 보통 속도에 많이 집중합니다. 코드를 실행하는데 걸리는 시간에 많이 집중합니다.

컴퓨터과학적으로 측정하기 위해 아래와 같은 코드를 실행합니다.

```js
var time1 = performance.now();
funcName(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
```

함수 실행 전 시간에서 함수 실행 후 시간의 차이를 측정해서 효율성을 실험을 위해 관찰할 수 있습니다.

물론 이렇게 작성하는 것은 어느정도 문제가 있습니다. 바로 시간의 문제입니다. 각각 다른 기계마다 각각 다른 결과를 돌려줄 것입니다. 물론 반대 결과를 얻는 것은 아닙니다. 비례관계는 똑같아도 측정자체는 부정확할 수 있습니다. 과학적으로 부정확함에 신뢰할 수 없습니다.

측정 자체가 절대 나쁘다는 것은 전혀 아닙니다. 실무에서 나름 자주합니다.

## 연산 갯수 세기

시간자체를 세는 것보다는 계산횟수를 세는 방법이 존재합니다. 그러면 컴퓨터에 따라 각각 다른 성능과 무관하게 동일한 측정할 수 있습니다.

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

위 코드를 보면 3개 계산을 실행합니다. 자료의 크기와 무관하게 계산합니다.

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

위 계산을 보면 n번의 계산을 실행합니다. 또 할당 연산도 계산입니다. `i++`도 계산에 해당합니다. 비교연산도 연산에 포함됩니다. n에 비례해서 계산 횟수가 늘어납니다.

5n+2에 해당합니다. 하지만 무관합니다. 일반적인 추세에 집중하는 것부터 시작하는 것이 좋습니다.

## 시간 복잡도 시각화

https://rithmschool.github.io/function-timer-demo/

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

위 코드를 자료와 시간의 비례관계를 시각화하면 선형시간복잡성을 갖는 다는 것을 알 수 있습니다.

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

또 위 코드를 보면 상수시간복잡성을 갖는 다는 것도 알 수 있습니다.

## 빅오에 대한 공식 소개

빅오 표기법은 어림잡아 계산횟수를 세는 것입니다. 코드를 실행할 때 자료와 시간의 증가량을 알아냅니다. 증가하는 대략적인 추세에 집중합니다. 세세한 디테일은 상황에 따라 다릅니다.

$$
O(f(n))
$$

선형 증가량을 갖을 수 있습니다. 제곱일 수 있습니다. 상수일수도 있습니다.

빅오는 최악의 경우를 가정합니다.

상수는 $O(1)$으로 표기합니다. 자료의 사이즈와 무관하게 동일한 계산횟수가 필요한 경우입니다.

$O(n)$은 자료와 계산횟수가 선형관계를 갖는 경우입니다.

반복문은 $O(n)$ 시간 복잡성을 갖습니다. 반복문을 2번 사용하지만 중첩하지 않으면 그래도 $O(n)$ 이 됩니다.

```js
function countUpAndDown(n) {
  console.log("Going up!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}
```

하지만 반복문이 중첩되면 $O(n^{2})$ 이 됩니다. 자료당 제곱으로 시간이 필요한 경우가 됩니다.

빅오 표기법은 알고리즘의 효율성에 대한 일반화입니다.

## 빅오 표현식의 단순화하기

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

위 코드가 $O(5n+2)$ 를 $O(n)$ 으로 추세를 단순하자고 말했습니다.

유용한 어림잡기들이 있습니다. 빅오표기법의 정의 때문에 사용할 수 있는 방법들이 있습니다.

단순화합니다.

- $O(2n)$ -> $O(n)$
- $O(500)$ -> $O(1)$
- $O(13n^{2})$ -> $O(n^{2})$

낮은 차수는 무시합니다.

- $O(n + 10)$ -> $O(n)$
- $O(1000n + 50)$ -> $O(n)$
- $O(n^{2} + 5n + 8)$ -> $O(n^{2})$

산술연산은 상수횟수입니다. 할당연산도 상수입니다. 인덱스를 통해 배열을 접근하면 상수입니다. 반복문 순회하는 만큼 시간복잡성이 증가합니다.

## 공간복잡성

대부분의 경우 시간복잡성을 고려했습니다. 자료의 사이즈에 따라 필요한 시간이었지만 이제는 확보해야 하는 메모리 공간을 고려해보겠습니다.

알고리즘 자체의 공간 위주로 고려하겠습니다. 이 용어는 auxiliary 공간입니다.

원시형 자료형은 상수 공간을 차지합니다. 하지만 문자열은 예외입니다. 문자열은 $O(n)$ 에 해당합니다. 참조형인 배열과 객체도 $O(n)$ 공간이 필요합니다.

## 로그와 이번 세션 요약

로그함수에 대한 간단한 소개합니다. 로그함수를 아주 잘 다룰 필요는 없습니다.

일부 알고리즘은 $O(logN)$ 이 존재합니다. 일부 빅오 표기법은 수학적으로 표기가 복잡한 경우가 많습니다.

로그함수는 지수함수의 역입니다.

$$
log_{2}8 = 3
$$

$$
2{3} = 8
$$

이렇게 지수함수의 역을 표현한 것에 해당합니다.

로그함수의 밑을 생략하면 10입니다. 하지만 흔히 사용하는 경우는 2가 밑은 것이 흔합니다. 이진 로그함수에 해당합니다. 강의 목적으로 생략한 경우라면 10이 아닌 2입니다.

로그자체는 어림잡기 때문에 밑을 생략하는 것 자체는 큰 문제가 되지는 않습니다.

일반적인 경우 O(1) 다음으로 효율적인 경우 해당합니다. 또 $O(N\cdot logN)$ 은 $O(n^{2})$ 보다 효율적입니다.

탐색, 정렬, 재귀는 로그함수에 대한 이해에 의존하고 있을 수 있습니다.

요약입니다.

넣는 자료의 증가량에 따라 시간 혹은 메모리 증가량을 추론하기 위해 사용합니다. 하드웨어 자체보단 일반적인 추세를 측정하기 위해 사용합니다.

지진 강도를 분류하듯이 효율을 분류하는 것이 중요합니다.

# 배열과 오브젝트의 성능 평가

## 소개

더 복잡한 자료 구조를 공부하기 전에 자바스크립트 내장 기능을 빅오 표기법으로 알아봅니다.

배열 첫요소에 삽입하는 것이 계산 비용이 비싼지 알아봅니다.

유용한 내장 메서드들 배웁니다.

## 객체의 빅오

객체는 개념적으로 순서가 없는 자료입니다. 순서가 필요없으면 잘 작동합니다. 접근, 삭제, 검색, 삽입이 모두 빠른 편에 속합니다. 나중에 객체가 어떻게 동작하는지 해쉬맵을 배우면서 알게 됩니다. 컴퓨터가 그냥 메모리상에 프로퍼티이름으로 접근 할 수 있는 것이 아닙니다. 상수시간에 저장, 추가, 업데이트, 삭제가 가능합니다.

삽입 시간 - $O(1)$
삭제 시간 - $O(1)$
검색 시간 - $O(N)$
접근 시간 - $O(1)$

객체는 순서가 없기 많은 계산이 상수입니다.

객체를 검색하는 것은 선형 시간이 걸립니다. 해당하는 값을 찾을 때 모든 값을 다 찾아야 할 수 있기 때문에 최악의 경우 선형 시간이 걸립니다.

```js
Object.keys();
Object.values();
Object.entires();
Object.hasOwnProperty();
```

`hasOwnProperty`만 상수 시간이고 이 외에는 모두 선형시간을 갖습니다. 당연히 키로 접근하기 때문에 그렇습니다.

## 배열 안의 데이터에 접근이 느린 이유

배열은 순서가 있는 자료입니다. 자료의 순서가 있으면 유용합니다. 하지만 비용이 존재합니다. 각 자료는 순서가 필요가 없으면 배열이 필요없습니다. 가끔은 순서가 존재하지만 단순한 배열보다 더 성능 좋게 구현할 수 있습니다.

삽입과 삭제에서 계산 비용이 늘어날 수 있습니다. 배열은 각 요소를 선형 순회하고 자료를 탐색하는 방식으로 동작하지 않습니다. 배열의 인덱스를 갖고 그 해당 데이터를 상수시간에 접근 가능합니다. 가끔 발생하는 오해입니다.

접근: $O(1)$
삽입: $O(N)$(상황에 따라 다릅니다.)
삭제: $O(N)$(상황에 따라 다릅니다.)
검색: $O(N)$

삽입시간이 선형시간인 이유는 다른 자료를 모두 업데이트해야 하기 때문입니다. 배열 뒤에 넣는 것보단 앞에 넣는 것에 계산비용이 더 큽니다. 앞에 넣으면 다음 인덱스들이 밀리기 때문입니다. 무조건 피할 것은 아닙니다. 하지만 push, pop이 shift, unshift보다 효율적이라는 것정도만 파악하고 있습니다.

삭제는 삭제 방법에 따라 다릅니다. pop은 $O(1)$입니다. unshift는 $O(N)$입니다.

검색은 기본적으로 선형시간이 걸립니다. 하지만 순서를 정렬해서 더 효율적인 검색시간을 갖게 만들 수 있습니다. 삭제도 똑같습니다.

## 빅오 배열 메소드

모든 배열을 암기할 필요는 없습니다. 도달하기 위해 파악합니다.

push, pop,: O(1)
shift, unsfit: O(N)
concat, slice, splice: O(N)
sort: $O(N \cdot log N )$
forEach, mpa, filter, reduce ... : O(N)

concat은 O(N+M)이라고 생각할 수 있습니다. 각 배열을 결합하면서 합한 만큼 커집니다.

slice는 복사본을 돌려줍니다. 복사시간이 선형시간으로 정비례합니다.

splice는 삽입하는 위치를 정하고 삽입하고 교체하는 등 다양한 기능이 있습니다. 그래도 O(N)입니다.

sort는 $O(N \cdot log N )$ 정도 걸립니다. 정렬은 항상 복잡합니다. 나중에 배웁니다. 제일 느립니다.

배열 고차함수 메서드는 모두 O(N)으로 순회하기 때문에 단순하게 선형 시간복잡성을 갖습니다.

shift라는 말을 보면 통째로 틀어놓는 다는 느낌 그대로 생각하면 됩니다. 그래서 비효율적이라는 것을 파악하고 갑니다.

# 문제 해결 접근법

## 소개

알고리즘은 접근, 패턴, 전략 등 해결해야 하는 문제가 있습니다. 해결할 수 있는 단계가 있습니다. 2가지 방법이 존재합니다. 한쪽은 조금더 생각을 정리하는 측면이고 다른 한쪽은 코드를 작성하는 측면입니다.

- 알고리즘이 무엇인지 정의를 설명할 수 있어야 합니다.
- 문제해결을 위해 알고리즘을 구현할 수 있어야 합니다.
- 문제를 해결하는 패턴을 비교 빈도카운터, 투 포인터, 분할정등 수립같은 것을 분석합니다.

이번 장은 계획을 설정하는데 집중하고 다음 장에 해결하는 이름이 붙은 패턴을 공부합니다.

알고리즘이란 무엇인가? 어떤 과제를 완수하기 위한 일렬의 절차에 불과합니다. 검색, 추천 알고리즘도 알고리즘입니다. 복잡한 알고리즘도 존재하지만 정의 자체는 단순합니다.

프로그래밍의 대부분 작업은 알고리즘과 연결됩니다. 문제를 해결하는 방법을 배워야 하기 때문입니다. 면접에 나오는 알고리즘에 집중합니다. 면접에 어려운 문제에 자주 나오기 때문에 반드시 알아야 합니다.

어떻게 잘해지나요? 타고나게 똑똑한 사람들이 많습니다. 하지만 멍청한 사람도 가능합니다. 단지 효율이 극단적으로 떨어질 뿐입니다. 실력을 늘리는 방법입니다. 문제 해결을 위한 계획을 세웁니다. 자주 접하는 해결 패턴을 분류하고 암기합니다.

문제 해결 전략입니다. 일렬의 절차입니다. 실수할 가능성도 여전히 많이 존재합니다. 하지만 아주 약간 유용합니다.

1. 문제를 이해합니다.
2. 특정 예시를 잘 파악하고 응용합니다.
3. 분해합니다.
4. 단순한 방식으로 해결합니다.
5. 다시 보고 수정합니다.

## 1단계: 문제 이해하기

대부분의 사람들에게 문법은 금방 배웁니다. 어려운 것은 새로운 문제를 해결하는 것입니다. 문제해결 능력은 기본입니다.

단계별 지침은 중요합니다. 문제를 더 자연스럽게 해결하기 좋게 해줍니다.

수학에 치우처져있습니다. George Polya의 저서를 참고하기 바랍니다.

- <어떻게 문제를 풀 것인가>

문제를 이해합니다. 문제를 어떻게 해결할지 모르고 본적 없는 패턴입니다. 이럴 때 시작은 문제를 이해하는데 충분한 시간을 들입니다. 코드 작성 전에 문제를 이해하기 면밀하게 조사하고 질문할 수 있습니다. 화이드 보드 그리거나 작성 전에 하기를 권장합니다.

1. 자신의 말로 문제를 다시 구술 할 수 있는가?

- 자신만의 프로그램에 대한 용어를 활용할 수 있습니다.

2. 입력되는 자료는 무엇인가?

- 입력하는 자료형이 무엇인지도 잘 파악합니다.
- 입력하는 자료의 개수도 파악합니다.

3. 출력하는 자료는 무엇인가?

- 자료형이 형변환이 발생하는가? 아니면 유지하는가?

4. 출력값이 입력값에 따라 어떻게 달라지는가?(대략 해결할 방식을 알고 있는가?)

- 특수한 엣지케이스는 어떻게 처리하는가? 면접에서는 질문합니다. 무시하라는 경우가 꽤 많습니다.

5. 문제의 중요한 정보 및 데이터를 문제해결을 위해 어떻게 명명할 수 있는가?

- 문제의 도메인과 관련된 영역입니다.

## 2단계: 구체적인 예시

구체적인 예시를 탐구하는 단계입니다. 입력과 출력을 파악하고 다음에 할 것은 아주 구체적인 예시를 만들어봅니다. 하지만 이렇게 예시를 만들면 이해잘 하는지 파악할 수 있습니다. 예시를 만드는 것으로 더 많이 배울 수 있습니다.

유저 스토리 혹은 유닛 테스트로 적용할 수 있습니다.

예시를 시작할 때는 간단한 예시로 시작합니다. 점점 더 복잡한 케이스를 만듭니다. 그리고 엣지 케이스를 만들어봅니다. 그리고 다음에는 부적절한 대입까지 만들어봅니다. 엣지케이스까지 하면 문제를 많이 이해할 수 있습니다.

```js
charCount("aaaa"); // {a:4}
```

`{a:4}`으로 반환할지 알파벳별로 `0`을 초기값을 설정(`{a:0, b:0, c:0, d:0, e:0, f:0}`)할지 모두 다릅니다.

부적절한 입력 케이스처리는 면접에서 별로 안 중요하지만 현실에서는 상당히 중요합니다. 엣지케이스는 현실과 면접 모두 중요합니다.

## 3단계: 세부 분석

문제를 이해하고 의사코드, 혹은 프로그램을 그대로 작성할 필요는 없습니다. 바로 작성할 필요없습니다. 주석으로 어떤 절차를 작성해보는 것도 전략입니다. 가끔은 작성 중에 면접관이 힌트를 주는 경우가 많습니다.

코드를 작성하기 전에 코드에 대해 생각하는 시간을 갖도록 합니다. 문제에 애매모호한 부분도 알아낼 수 있습니다. 인지부하도 줄일 수 있습니다.

단계별로 다루기 쉬운 자료로 변환합니다.

```js
const funcName = () => {
  // 2. 입력에 대한 처리
  // 형변환 처리 ...
  // 반복문
  // 반복문 처리
  // 형변환 처리 ...
  // 1. 출력에 대한 설명
};
```

입출력부터 확인하고 중간에 변환을 처리합니다. 다음에 반복문 조건문같은 들여쓰기의 구체적인 로직은 들여쓰기 밖에서부터 작성한 다음에 상세한 로직을 작성합니다.

위처럼 주석으로 설계를 어느정도 작성하면 문제해결 능력을 측정하는 것입니다. 프로그램 언어가 제공해주는 문법과 기능부터 자료구조와 알고리즘 지식으로 해결가능 한 것인지 설계하는 능력부터 측정하려고 합니다. 당연히 나라와 기업마다 다릅니다. 하지만 일단은 코드 설계능력부터 측정한다고 가정을 두고 학습합니다. 많은 경우 업무 중에 언어의 특수한 메소드나 기능은 검색해서 해결할 수 있습니다. 미국권에서 면접관이 알고 싶은 것은 검색 가능한 특수한 문법이 머릿속에 있는 것이 아닙니다. 하지만 한국은 있어야 하고 알고리즘 문제도 풀 수 있어야 합니다.

## 4단계: 해결 또는 단순화

문제를 꽤 철두철미하게 분해하고난 다음 단계입니다. 문제를 분해는 비교적 구체적으로 하도록 합니다. 더부 집착할 필요가 없습니다. 문제를 분해한 다음에는 상당히 자신감이 생긴 것입니다. 바로 문제해결을 시도할 수 있습니다. 물론 문제를 해결할 때 몇가 해결할 수 없는 경우가 몇가지가 있습니다. 이럴 때 단순화합니다.

이럴 때 문제를 단순화하고 불필요한 복잡성을 보이는 부분은 잠시 무시합니다. 100% 확신이 없으면 작성 안하는 것은 곤란합니다. 80% 정도 갖고 있으면 진행해도 괜찮습니다.

처리하기 어려운 핵심 부분을 잠시 무시하고 나중에 다시 단순화하고 로직에 포함합니다.

큰 틀에서 문제를 많이 해결할 수 있는 능력을 보여주는 것이 중요합니다. 상세한 엣지케이스는 미국권은 아주 많이 따지지는 않습니다. 아주 특수한 문자의 정규표현식 혹은 ASCII 코드를 외우고 있어야 하는 부분은 검색을 잠시 허용하거나 혹은 풀이 한 것으로 가정합니다.

미리 알아둘 것은 프론트엔드는 유효성 검사 또안 역량이기 때문에 특수한 경우도 알아야 합니다. 또 한국은 업무 중에 검색을 많이 하지만 면접에서는 불가능합니다.

문제를 풀었다고 끝나는 것이 아닙니다. 연습도 면접도 똑같습니다.

## 5단계: 되돌아 보기와 리팩토링

실력을 키우는데 가장 중요한 단계입니다. 어느정도 동작하면 끝내고 싶을 수 있지만 그러면 곤란합니다. 단기에 짧은 코드로 동작하게 하는 정도는 어느 정도 존재할 수 있습니다. 하지만 진짜 실력을 키울 수 있을 때는 스스로 돌아보고 코드의 심미성부터 성능까지 검토하도록 합니다.

면접에서는 가독성과 성능 중 어느것이 중요한지 질문하도록 합니다.

- 올바르게 값을 출력하는가?
- 파생한 다른 해결책이 존재하는가?
- 직관적이게 이해할 수 있는가?
- 다른 문제도 해결할 수 있는가?(면접 이외에 상황에 유용합니다.)
- 성능을 개선할 수 있는가?(시간복잡성 공간복잡성 문제이고 가장 많이 생각하는 부분입니다.)
- 회사의 컨벤션을 따르거나 언어의 컨벤션을 따르는가?(절박한 면접 상황에서는 부가적일 수 있지만 절대 부가적이라고 보고 접근하지 않습니다.)
- 다른 사람들은 어떻게 이문제를 풀었는가? (이 부분은 상당히 많이 배울 수 있습니다.) 구현하는 다른 언어에서 비교하고 다른 접근도 배울 수 있습니다.

리팩토링은 중요합니다. 리팩토링으로 많이 배울 수 있습니다. 물론 무조건 리팩토링할 필요는 없습니다. 이미 잘 작성했을 수 있습니다. 이럴 때는 스스로 돌아보는 시간이 중요합니다. 대부분의 경우 본인 코드는 냄새나고 더러운 것은 기본이 성능이 심각하게 문제있는 경우를 자각해야 합니다.

자바스크립트는 정규표현식이 성능문제를 야기할 수 있다고 합니다(브라우저 문제입니다).

실무에서는 `charCodaAt()`을 활용하는 것도 방법입니다. 아스키코드로 접근해서 연산하는 것이 더 효율적일 수 있습니다.

어떻게 개선하고 다른 사람이 어떻게 작성했는지 잠시 생각해보는 것이 성장에 엄청난 도움이 됩니다.

## 요약과 인터뷰 전략

문제를 충분히 이해합니다. 그리고 질문합니다. 또 문제를 잘 이해하기 위해 다양한 예시를 만듭니다. 그리고 작업을 분해합니다. 단계별로 쪼갭니다. 무엇을 할지 잘 파악하고 진행합니다. 잘 안되면 계획을 다시 짭니다. 그리고 문제를 해결하기 시작합니다. 그리고 어려운 부분을 단순하게 바꿔처리합니다. 마지막으로 학습 혹은 성장에 제일 중요한 것은 검토하고 스스로 분석하고 그리고 리팩토링을 진행할 수 있습니다. 무엇을 더 잘 할 수 있는지 보고 개선합니다.

## 참고

https://blog.naver.com/themathssem/221990425637

http://www.yes24.com/Product/Goods/325507

https://ko.wikipedia.org/wiki/%ED%8F%AC%EC%97%AC_%EC%A3%84%EB%A5%B4%EC%A7%80

# 문제 해결 패턴

## 소개

어려운 문제를 접근하고 풀어내는 방법입니다. 2가 단계입니다. 문제를 보고 계획을 새우는 것이 한쪽입니다. 다른 한쪽은 여기서 자주 보는 패턴을 익히는 것입니다. 이 자료는 절대 만능이 아닙니다. 현실에 자주보는 패턴과 자주 설계하는 방식들이 있어서 많은 경우 도움됩니다. 여기서 많은 경우는 10번 중 1번입니다. 이것도 나쁜 것은 아닙니다.

- 빈도 카운터
- 다중 포인터
- 분할 정복
- 동적 계획법
- 그리디 알고리즘
- 백트레킹
- 등

위는 공식 용어는 아니지만 일부는 공식용어입니다. 하지만 유용한 패턴들입니다.

## 빈도수 세기 패턴

공식 용어가 아닙니다. 자바스크립트 객체에서 값들과 빈도들을 기록합니다. 다양한 입력을 보고 비교할 때 유용합니다. 좋은 접근이 되는 것은 O(N^2)보다 성능이 좋은 경우가 많습니다.

예제입니다.

```js
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [4, 9]); // false
```

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
```

`for` 문속에서 `indexOf` 선형탐색을 진행합니다. 그래서 $O(n^{2})$ 시간복잡성을 갖습니다.

그래서 문제를 해결할 수 있지만 비효율적인 성능을 갖고 있습니다. 가능하면 이런 이유로 중첩 반복문을 피하려는 것입니다.

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    // 존재하면 무시합니다.
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // 일치하는 것이 없으면 false를 반환합니다.
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
```

각각의 독립적인 순회를 진행합니다. 중첩이 없습니다.

빈도수 카운터 전략은 객체를 만들어 입력하는 선형적인 자료를 분해하고 각 요소들을 다른 객체랑 비교하는 전략입니다. 무엇이 있는지 분류하는 것으로 성능을 엄청 높일 수 있습니다.

객체에 데이터를 기록하고 접근하고 조작하는 전략입니다. 객체의 조회는 상수시간 복잡성을 갖고 있기 때문에 성능이 좋습니다.

## 연습 문제: 애너그램입니다.

애너그램이면 true이고 아니면 false를 반환합니다. 빈도수 카운터의 적절한 유스케이스입니다. 문자열의 개수도 일치해야 합니다. 등장횟수도 동일해야 합니다. 순서만 바뀌어야 합니다. 또 안 바뀐 경우도 true입니다.

```js
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
```

당연히 모든 글자는 소문자 1개 단어입니다. 인터뷰에서는 엣지케이스를 질문하는 소양을 보여주도록 합니다.

```js
/**
 * 애너그램인지 아닌지 판별합니다.
 * @param {string} word
 * @param {string} anagram
 * @return {boolean}
 */
function validAnagram(word, anagram) {
  const memoWord = {};
  word.split("").forEach((letter) => {
    if (memoWord[letter] === undefined) memoWord[letter] = 1;
    memoWord[letter] += 1;
  });
  const memoAnagram = {};
  anagram.split("").forEach((letter) => {
    if (memoAnagram[letter] === undefined) memoAnagram[letter] = 1;
    memoAnagram[letter] += 1;
  });

  for (let key in memoWord) {
    // 키가 각각 존재하는지 검증합니다.
    if (!(key in memoAnagram)) {
      return false;
    }
    // 단어의 글자 횟수가 일치하는지 검증합니다.
    if (memoWord[key] !== memoAnagram[key]) {
      return false;
    }
  }

  return true;
}

console.log(
  validAnagram("", ""), // true
  validAnagram("aaz", "zza"), // false
  validAnagram("anagram", "nagaram"), // true
  validAnagram("rat", "car"), // false) // false
  validAnagram("awesome", "awesom"), // false
  validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"), // false
  validAnagram("qwerty", "qeywrt"), // true
  validAnagram("texttwisttime", "timetwisttext") // true
);
```

중첩하지 않는 각각의 반복문으로 문제를 해결할 수 있습니다. 마지막 for문은 동일성을 비교합니다.

아주 간단하고 직관적인 해결책입니다.

## 다중 포인터

다중 포인터도 공식 용어가 아닙니다. 포인터(인덱스 혹은 키)를 만들어서 서로 조건에 따라 중간으로 가게 만듭니다.

확실한 방향을 두는 것은 아닙니다.

꽤 자주보는 패턴입니다.

정렬된 배열의 합이 0인지 판별하는 함수를 만드시오.

```js
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, -1, 0, 1, 2, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

이런 문제에 양끝에 포인터를 두고 합하는 전략을 취할 수 있습니다.

```js
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); // [-2, 2]
```

상수 공간복잡성을 갖고 제곱시간복잡성을 갖습니다. 배열에서 일치하는지 기준으로 하는 원소가 외부에서 순회하고 목표로 찾는 원소를 내부에서 순회합니다.

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    // 탐색 성공
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // 포인터 조작
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
```

선형 시간복잡성을 갖습니다. 양끝에 정렬되어 있습니다. 배열의 각각 합 결과에 따라 포인터를 업데이트하는 방향이 다릅니다. 양수를 반환하면 오른쪽 음수를 반환하면 왼쪽을 안으로 이동하는 방식입니다. 그리고 점진적으로 0에 도달합니다.

마지막에 0과 0을 선택하면 거짓양성입니다.

## 연습문제: 다중 포인터(고유값 찾기)

```js
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```

```txt
 i
[1, 1, 1, 2]
    j
```

이렇게 시작합니다.

```txt
 i
[1, 1, 1, 2]
          j
```

다를 때까지 j를 업데이트합니다.

```txt
    i
[1, 2]
    j
```

달라지면 i를 업데이트하고 동일한 값을 지웁니다.

```js
/**
 *
 * @param {Array} arr
 * @returns {number}
 */
function countUniqueValues(arr) {
  if (arr.length === 0) return 0; // 엣지 케이스 개별 처리
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // j를 순회하는 중에
    if (arr[i] !== arr[j]) {
      // 값이 불일치하면 i를 먼저 더합니다.
      i++;
      // j가 존재하는 값으로 더합니다.
      arr[i] = arr[j];
    }
    console.log(arr, i, j);
  }
  // 배열 뒷부분을 무시합니다. i의 인덱스가 정답입니다.
  return i + 1;
}

console.log(
  countUniqueValues([1, 1, 1, 1, 1, 2]), // 2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), // 7
  countUniqueValues([]), // 0
  countUniqueValues([-2, -1, -1, 0, 1]) // 4
);
```

```js
/**
 * 조건은 object 혹은 set으로 중복을 제거할 수 없습니다.
 * @param {Array} arr
 * @returns {number}
 */
function countUniqueValues(arr) {
  // 엣지 케이스 설정하기
  if (!arr.length) return 0;
  // 포인터를 선언하기
  let i = 0;
  arr.forEach((elem, j) => {
    if (arr[i] !== elem) {
      i += 1;
      arr[i] = elem;
    }
  });
  return i + 1;
}

console.log(
  countUniqueValues([1, 1, 1, 1, 1, 2]), // 2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), // 7
  countUniqueValues([]), // 0
  countUniqueValues([-2, -1, -1, 0, 1]) // 4
);
```

## 기준점 간 이동 배열 패턴(Sliding Window)

배열, 문자열처럼 연속된 데이터에 적용하기 유용합니다. 창문을 만드는 개념입니다. 큰 데이터 집합에서 작은 데이터 집합을 만드는 개념으로 접근할 때 유용합니다.

예시 문제입니다. 첫번째 인자인 배열에서 앞뒤로 배열에서 움직여서 가장 큰 숫자를 만드시오. 배열 속의 배열의 크기는 두번째 인자가 정합니다.

```js
maxSubarraySum([1, 2, 4, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 4, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
```

무식한 방법은 예를들어 `maxSubarraySum([[a, b, c,] d, e, f], 3)`

c를 기준으로

1. [[a, b, c,] d, e, f]
2. [a, [b, c, d,] e, f]
3. [a, b, [c, d, e,] f]

d를 기준으로

1. [a, [b, c, d,] e, f]
2. [a, b, [c, d, e,] f]
3. [a, b, c, [d, e, f]]

이렇게 하고 포인터를 하나 지정하고 앞뒤로 순회할 수 있습니다. 이미 반복된 계산을 한다는 것이 비효율적인 것을 알 수 있습니다.

이렇게 접근할 수 있습니다.

```js
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
```

이 중첩반복문이 무식한 방법을 동원합니다.

```js
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
```

위 코드는 슬라이딩 윈도우 접근 방법입니다. $O(N)$으로 구현 가능합니다. 한번만 순회할 수 있습니다.

`maxSubarraySum([[a, b, c,] d, e, f], 3)`

1. [[a, b, c,] d, e, f]
2. [a, [b, c, d,] e, f]
3. [a, b, [c, d, e,] f]
4. [a, b, c, [d, e, f]]

이런 방법으로 순회하고 내부 배열에 합중 가장 큰 값을 기록하고 반환하면 효율적이게 찾을 수 있습니다.

참고로 구현을 진행할 때 배열을 진짜로 담을 필요는 없고 개념적으로 담으면 됩니다. 그래서 두번째 for문을 보면 push, pop이 없습니다.

## 분할정복

실제 존재하는 개념입니다. 코드 작성할 때 평소 자주하는 행동입니다. 쿽 정렬 병합 정렬이 이 알고리즘에 해당합니다. 이진탐색도 해당합니다. 주제가 상당히 거대합니다.

거대한 데이터를 어떤 자료형으로 받아서 선형 탐색하기 전에 작은 부분으로 분해합니다. 큰 데이터를 작은 데이터로 쪼갭니다.

이진탐색이 대표적입니다. 정렬된 배열에서 가운데를 찾습니다. 그리고 가운데를 찾으면 탐색이 성공합니다. 하지만 못 찾으면 반으로 나누고 찾는 값이 더 크면 큰 반쪽 작으면 작은 반쪽만 남기고 다시 가운데를 찾습니다. 이 행동을 찾을 때까지 반복합니다. 찾거나 배열이 부모 비어있거나 찾습니다.

큰 데이터를 작은 데이터로 나누고 무시하는 전략입니다. 이런 알고리즘은 흔히 사용하는 패턴입니다. 하지만 보통 어려운 알고리즘입니다. 정렬같은 알고리즘을 다룰 때 사용합니다.

## 연습 문제

```js
/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities: O(N)
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Boolean}
 */
function sameFrequency(num1, num2) {
  // 빈도 카운터 패턴
  // 예외처리: 다른 자리수
  // memo
  const num1Memo = {};
  const num2Memo = {};
  // num -> string -> obj memo
  function countNum(num, obj) {
    num
      .toString()
      .split("")
      .forEach((letter) => {
        if (obj[letter] > 0) {
          // 빈도 기록
          obj[letter] += 1;
        } else {
          // 최초 기록
          obj[letter] = 1;
        }
      });
    return obj;
  }
  countNum(num1, num1Memo);
  countNum(num2, num2Memo);
  // 키값 비교
  for (let key in num1Memo) {
    // 모든 키가 동일한가?
    if (!(key in num2Memo)) return false;
    // 모든 값이 동일한가?
    if (num1Memo[key] !== num2Memo[key]) return false;
  }
  //
  return true;
}

console.log(
  sameFrequency(182, 281), // true
  sameFrequency(34, 14), // false
  sameFrequency(3589578, 5879385), // true
  sameFrequency(22, 222) // false
);
```

```js
/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * @param {Array} args
 * @returns {Boolean}
 */
function areThereDuplicates(...args) {
  // F.C. memo
  const memo = {};
  args.forEach((elem) => {
    memo[elem] ? (memo[elem] += 1) : (memo[elem] = 1);
  });

  // 객체 순회
  for (let key in memo) {
    //    1 이상 발견시 true
    if (memo[key] > 1) return true;
  }
  // 못 발견하면 false
  return false;
}

console.log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true
  areThereDuplicates("a", "b", "c", "a") // true
);
```

```js
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
```

더 희소하고 간단한 패턴을 접하고 외웁니다.

```js
/**
 * Write a function called averagePair.
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the target average.
 *
 * There may be more than one pair that matches the average target.
 *
 * @param {Array} arr
 * @param {Number} num
 * @returns {Boolean}
 */
function averagePair(arr, num) {
  // 예외처리
  if (!arr.length) return false;
  let i = 0; // 앞쪽 포인터
  let j = arr.length - 1; // 뒤쪽 포인터
  while (!(i === j)) {
    let target = arr[i] + arr[j] / 2;
    if (target === num) {
      return true;
    } else if (target > num) {
      // 평균이 더 큰 경우
      j -= 1;
    } else if (target < num) {
      // 평균이 더 작은 경우
      i += 1;
    }
  }
  return false;
}

console.log(
  averagePair([1, 2, 3], 2.5), // true
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), // true
  averagePair([-1, 0, 3, 4, 5, 6], 4.1), // false
  averagePair([], 4) // false
);
```

```js
/**
 * Write a function called isSubsequence
 * which takes in two strings and
 * checks whether the characters in the first string form a subsequence of the characters in the second string.
 *
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string,
 * without their order changing.
 *
 * @param {String} sub
 * @param {String} whole
 * @returns {Boolean}
 */
function isSubsequence(sub, whole) {
  let subPointer = 0;
  let wholePointer = 0;
  // 못찾고 끝나면
  while (whole.length > wholePointer) {
    // 최초 설정
    if (sub[subPointer] === whole[wholePointer]) {
      // 일치하면 각각 1칸 이동
      subPointer += 1;
      wholePointer += 1;
    } else {
      wholePointer += 1;
    }
  }
  // sub에 속한 문자열을 결국 못 찾으면
  return sub.length === subPointer;
}

console.log(
  isSubsequence("hello", "hello world"), // true
  isSubsequence("sing", "sting"), // true
  isSubsequence("abc", "abracadabra"), // true
  isSubsequence("abc", "acb") // false (order matters)
);
```

```js
/**
 * Given an array of integers and a number, write a function called maxSubarraySum,
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
 *
 * Note that a subarray must consist of consecutive elements from the original array.
 * In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 *
 * @param {Array} whole
 * @param {Number} size
 * @returns {Boolean}
 */
function maxSubarraySum(whole, size) {
  if (size > whole.length) return null;
  // 최초 창문 사이즈 만큼 더하기
  let sumWindow = 0;
  for (let i = 0; i < size; i++) {
    sumWindow += whole[i];
  }
  let maxVal = sumWindow;
  for (let i = size; i < whole.length; i++) {
    sumWindow += whole[i] - whole[i - size];
    maxVal = maxVal < sumWindow ? sumWindow : maxVal;
  }
  // 순회하면서 앞은 빼고 뒤는 더합니다.
  return maxVal;
}

console.log(
  maxSubarraySum([100, 200, 300, 400], 2), // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), // 39
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), // 5
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
  maxSubarraySum([2, 3], 3) // null
);
```

```js
/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 *
 * This function should return the minimal length of a contiguous subarray
 * of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 *
 * @param {Array} whole
 * @param {Number} target
 * @returns {Boolean}
 */
function minSubArrayLen(whole, target) {
  let frontPointer = 0;
  let backPointer = whole.length - 1;
  let length = whole.length;
  let sum = whole.reduce((prev, curr) => prev + curr);
  // 예외처리
  if (sum < target) return 0;
  // 전체에서 1개식 소거합니다.
  while (sum >= target) {
    if (whole[frontPointer] < whole[backPointer]) {
      sum -= whole[frontPointer];
      frontPointer += 1;
      length -= 1;
    } else if (whole[frontPointer] > whole[backPointer]) {
      sum -= whole[backPointer];
      backPointer -= 1;
      length -= 1;
    } else if (whole[frontPointer] === whole[backPointer]) {
      sum -= whole[frontPointer];
      frontPointer += 1;
      length -= 1;
    }
  }
  // 못찾으면 0을 반환합니다.
  return length + 1;
}

console.log(
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> because [62] is greater than 52
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
);
```

# 재귀함수

## 재귀함수 소개

재귀함수는 한번만 잘 이해하면 아주 유용합니다. 재귀함수는 해결책을 만드는 다른 방법이라고 생각하면 됩니다.

문제를 반복적으로 풀이 하는 방법입니다.

문제하는 작은거나 혹은 반복하는 문제로 만듭니다. 그리고 종료조건에 도달하게 만듭니다.

- 재귀함수의 정의를 이해하고 언제 사용할지 공부합니다.
- 재귀함수의 2가지 필수 조건을 이해합니다.
- 콜스택을 이해합니다. 그리고 디버깅도 잠깐 공부합니다.
- 핼퍼 메서드 재귀함수랑 순수 재귀함수로 복잡한 문제를 단순하게 풀이합니다.

## 재귀함수를 사용하는 이유

재귀함수란 무엇인가? 재귀함수는 자기 자식을 호출하는 절차에 불과합니다. 일반 함수랑 다르게 함수 속에서 스스로 호출합니다. 스스로 계속 호출하는데 종료 조건이 필요합니다. 없으면 무한 루프처럼 동작합니다.

재귀함수를 왜 알아야 하는가? 항상 사용합니다. 다른 다양한 해결책에 많이 사용합니다. 자바스크립트는 JSON.parse(), JSON.stringify()는 재귀함수입니다. 재귀적으로 작성할 필요는 없지만 작성하는 경우하는 경우가 많습니다. DOM 조작과 트레버싱 알고리즘이 재귀적으로 해결합니다. 객체 트레버싱도 재귀로 이동합니다.

반복하는 문제를 더 깔끔하게 처리하는 방법입니다.

더 복잡한 알고리즘의 기반이 됩니다.

## 콜스택

재귀함수를 작성하기 전에 자바스크립트의 동작방식입니다. 자바스크립트의 동작원리를 먼저 이해합니다.

대부분의 프로그래밍 언어에서는 어떤 자료구조를 갖고 있습니다. 실행하는 로직을 처리하기 위한 절차가 있습니다. 자바스크립트는 함수를 순서대로 처리하는 절차가 콜스택입니다.

함수를 호출하면 콜스택에 쌓입니다. return 키워드를 읽거나 혹은 함수 읽을 것이 없으면 pop합니다.

```js
function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();
```

wakeUp -> takeShower
wakeUp -> eatBreakfast -> cookFood

호출하면 push되고 완료될 때마다 pop합니다.

크롬 개발자 혹은 다른 IDE 또 VScode의 디버깅 툴을 잘활용하기 바랍니다.

이름 답게 스택 자료구조입니다.

## 첫 재귀함수

첫 재귀함수입니다. 재귀함수의를 작성하는 전략입니다. 2가지 부분을 작성해야 합니다. 스스로 계속 호출하는 것과 정지하는 종료조건(Base Case)가 필요합니다. while문이 종료 조건을 갖는 것과 유사합니다.

- 종료조건(Base Case)
- 재귀함수 호출 영역(호출 할 때마다 변경되는 인자)

```js
// Recursive Version
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3);

// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
```

그냥 반복문을 사용할 수 있지만 대신 사용합니다.

## 두번째 재귀함수입니다.

```js
function sumRange(num) {
  if (num === 1) return 1; // 종료 조건
  return num + sumRange(num - 1); // 호출
}

sumRange(4);
```

종료 조건은 조건문을 보통 활용합니다. 바닥을 치게 만듭니다.

재귀 호출 영역은 인자를 변형하고 자기자신을 호출합니다.

스택이 계속 쌓이는 구조가 될 것입니다. 다른 예시를 보겠습니다.

## 팩토리얼 구현하기

재귀함수 소개에 고전적인 예시 중 하나입니다. 4!은 4 \* 3 \* 2 \* 1이라는 것을 알 수 있습니다. for문으로 당연히 만들 수 있지만 재귀함수로도 만들 수 있습니다.

```js
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
```

반복문으로 구현하는 방법입니다.

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

재귀함수로 구현하는 방법입니다.

코드 자체가 훨씬 더 간결합니다.

재귀함수 자체도 하나의 패턴입니다.

## 통상적인 재귀의 잠재적 위험

재귀함수를 작성하면서 발생할 수 있는 많은 문제입니다.

- 종료조건이 잘못된 경우입니다.
- 값 자체를 반환하는 경우를 잊는 것입니다.
  - 코드 자체가 길어서 부주의해질 수 있는 경우가 있습니다.

콜스택 초과로 에러 피드백을 제공해주기는 합니다.

반한값을 기반으로 재귀함수가 만들어졌습니다.

콜스택 초과는 stackoverflow입니다. 유명한 웹 사이트 이름과 동일합니다.

## Helper method 재귀

디자인 패턴에 흔히 사용하는 예시입니다. Helper method 재귀입니다.

함수 속에 함수를 정의하고 호출하는 방식입니다.

```js
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
```

함수 속에 단순한 재귀함수를 넣고 호출하는 방식입니다.

재귀를 호출할 때마다 호출하면서 초기화가 안 되도록 외부에 선안하고 재귀함수 내부에서 조작하는 방식입니다. 그리고 재귀함수를 또 함수로 감싸서 깔끔하게 정리하는 것입니다.

나중에 그래프를 다룰 때 DFS 함수를 내부에 활용하는 경우에 활용합니다.

Helper method 재귀함수는 패턴에 불과함니다. 내부함수가 선언된 렉시컬 환경에 있는 변수를 변형하면서 재귀함수로 동작하기 위해 사용하는 패턴입니다.

## 순수 재귀함수

```js
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
```

순수함수로 작성하면 조금더 이해하기 어렵습니다.

종료조건에 도달하고 반환값을 pop하면서 반환합니다.

팁입니다.

- 순수 재귀함수를 사용할 때는 slice, spread, concat을 사용할 수 있습니다.
- 문자열은 불변자료형입니다. slice, substr, substring을 사용해보독 합니다.
- 객체는 Object.assign, spread로 복사하도록 합니다.

## 연습 문제 1

```js
function power(exp, pow) {
  if (pow <= 0) return 1;
  return exp * power(exp, pow - 1);
}

console.log(
  power(2, 0), // 1
  power(2, 2), // 4
  power(2, 4) // 16
);
```

```js
function factorial(num) {
  if (num <= 0) return 1;
  return num * factorial(num - 1);
}

console.log(
  factorial(1), // 1
  factorial(2), // 2
  factorial(4), // 24
  factorial(7) // 5040
);
```

```js
/**
 * @param {Number} num
 * @returns
 */
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(
  fib(4), // 3
  fib(10), // 55
  fib(28), // 317811
  fib(35) // 9227465
);
```

# 탐색

https://cs.slides.com/colt_steele/tries-21

구글 검색은 세상에서 아마 가장 복잡한 알고리즘일 것입니다. 검색하면 보통 구글 검색을 생각하기 쉽습니다. 당연히 구글 알고리즘을 구현할 것은 아닙니다. 하지만 복잡한 검색 알고리즘의 기반이 되는 개념들을 공부하기는 할 것입니다. 이것은 나중에 합니다.

비교적 단순한 탐색 알고리즘을 학습할 것입니다. 그리고 검색이라 하기에는 애매합니다. 예를 들어 user name이 이미있는지 알고 싶을 수 있습니다. 이미 존재하는지 데이터 베이스를 탐색할 수 있습니다.

목표는 간단합니다. 탐색알고리즘을 정의합니다. 선형탐색을 구현합니다. 이진탐색을 논합니다. 정렬되어야 가능합니다. 순진한 탐색알고리즘을 공부하고 또 KMP 탐색 알고리즘도 공부합니다.

## 선형 탐색

배열을 탐색하는 방법입니다. 배열에서 특정 원소를 찾고 싶을 것입니다.

```js
[1, 2, 3];
```

여기서 2를 찾고 싶을 것입니다. 모든 배열을 순차적으로 비교하고 없으면 -1을 반환하는 방법을 활용할 수 있습니다.

배열의 상태에 따라 접근방법이 다릅니다. 배열이 정렬되어 있지않으면 선형탐색하는 것이 좋습니다.

indexOf, includes, find, findIndex가 배서드 선형탐색 메서드입니다.

선형탐색은 상당히 직관적입니다. 앞이든 뒤이든 하나씩 살펴보는 것은 동일합니다.

연습문제입니다. `indexOf` 메서드를 구현해보도록 합니다.

```js
/**
 * @param {array} arr
 * @param {number} num
 * @returns {number}
 */
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
```

indexOf는 아마 내부적으로 이렇게 구현되어 있을 가능성이 있습니다.

최악의 경우는 자료량과 정확히 같습니다. $O(n)$ 시간복잡성입니다.

다음은 선형탐색보다 복잡한 알고리즘을 다룹니다.

선형탐색 빅오입니다. 최고의 경우는 $O(1)$ 입니다. 최악의 경우는 $O(n)$ 입니다. 평균도 $O(n)$ 입니다. 상수가 없기 때문에 이렇게 해당합니다. 정렬이 안된 자료를 다룰 때 최선입니다.

## 이진탐색

선형탐색에 비해 상당한 개선입니다. 하나의 요소를 제거하는 방식이 아닙니다. 원소 절반을 제거할 수 있습니다. 하지만 단점은 자료가 정렬되어야 합니다.

술게임에서 병뚜껑 게임과 동일한 동작방식입니다.

이진탐색은 가운데부터 항상 고릅니다. 그리고 찾는 값보다 크고 작음을 비교합니다.

구현이 중요합니다. 핵심 아이디어는 분할 정복입니다. 왼쪽 오른쪽으로 쪼갭니다.

이진탐색 의사코드입니다. 의외로 짧습니다.

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

```ts
function binarySearch(arr: (number | string)[], target: number | string) {
  let start = 0;
  let last = arr.length - 1;
  while (!(start === last)) {
    let median = Math.round((start + last) / 2);
    if (target === arr[median]) {
      return median;
    } else if (target > arr[median]) {
      start = median;
      continue;
    } else if (target < arr[median]) {
      last = median;
      continue;
    } else {
      break;
    }
  }

  return -1;
}
```

여기서 단점은 포인터로 선택된 원소를 분할한 배열을 포함합니다.

```js
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
```

원래 해결책입니다.

```js
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);
```

코드를 조금더 수정한 해결책입니다. 동작은 동일합니다.

최고의 경우 시간복잡성은 $O(1)$ 입니다. 최악과 평균의 경우 $O(log N)$ 입니다.

## 나이브 문자열 탐색

단순하게 선형탐색으로 문자열이 일치하면 다음 일치하는지 확인하는 탐색방법입니다. 정식 명칭은 아닙니다. 더 우아한 해결책이 존재합니다. 다음에 다루게 될 알고리즘은 명칭은 있습니다.

아래는 의사코드입니다.

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

```ts
export function solution(longString: string, subString: string) {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    let subCount = 0;
    if (longString[i] === subString[0]) {
      for (let j = 0; j < subString.length; j++) {
        if (longString[i + j] === subString[j]) {
          subCount += 1;
        } else {
          break;
        }
        if (subCount === subString.length) count += 1;
      }
    }
  }
  return count;
}
```

제가 작성한 정답입니다.

```js
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lo"));
```

나이브 탐색입니다.

다음은 더 좋은 문자열 탐색 알고리즘을 공부할 것입니다.

KNP 문자열 검색은 나중에 다시 다루겠습니다.

# 정렬

https://cs.slides.com/colt_steele/elementary-sorting-algorithms

## 정렬 입문

수업에서 많은 학생들이 어려워합니다. 하지만 이것은 비전공자 한정입니다.

이것은 컴퓨터과학 필수 지식입니다. 코테 면접에서 따로 다룰 정도로 분량이 많기는 합니다.

정렬알고리즘은 collection을 재구조화하는 절차입니다.

숫자를 크고 작은 순서, 알파벳 순서로 정렬, 평점 기준으로 정렬

비교 기준이 중요한 것은 아닙니다. 현재는 배열과 숫자 위주로 다룰 것입니다.

여기는 정렬 입문입니다.

정렬을 배워야 하는 이유는 무엇인가?

정렬은 프로그래밍에서 흔한 것입니다. 언어의 내장함수를 사용해도 동작원리를 이해해야 적용을 언제 어떻게 해야할지 이해할 수 있습니다. 대부분의 데이터가 정렬되어 있으면 몇개만 정렬하면 되는 것이면 큇 정렬을 활용하면 되는 것과 동일합니다.

https://www.youtube.com/watch?v=kPRA0W1kECg

https://www.toptal.com/developers/sorting-algorithms

면접질문에 너무 일반적입니다. 사고력을 많이 필요로 하고 소양을 측정하기 유용합니다.

처음에는 버블 정렬, 선택정렬, 삽입정렬을 배웁니다. 입문용 정렬알고리즘입니다. 대부분의 경우 사용하지 않습니다.

몇가지 아주 구체적이게 언제 성능이 좋은지 알아야 합니다.

자바스크립트에는 내장 sort 함수입니다. 대부분의 언어는 정렬 함수를 갖고 있습니다.

자바스크립트 내장 sort는 배열의 원소를 문자열의 유니코드를 기준으로 정렬합니다. 문자열로 작업하면 유용할 수 있지만 실제 세상에서는 숫자 정렬도 많이 필요합니다.

대입하는 콜백함수로 정렬 기준을 정할 수 있습니다. 반환값의 양수 음수를 기준으로 어센딩 디센딩을 제어할 수 있습니다.

## 버블 정렬

전혀 성능이 좋지 않습니다. 일반적으로 사용하지 않습니다. 생각보다 재미있습니다. 최적화도 존재합니다. 또 사용하는 경우는 분명 존재합니다.

버블 정렬이라고 부르는 이유입니다. 거품이 위로 상승합니다. 가장 작은 숫자에서 높은 숫자가 뒤로 정렬되기 때문입니다.

https://visualgo.net/en/sorting

정렬을 앞뒤로 비교하고 앞이 더 크면 자리를 교환합니다. 뒤가 더 크면 자리를 바꾸지 않습니다.

침몰 정렬은 버블 정렬의 반대로 동작합니다.

뒤로갈수록 자리를 바꿀 자료가 줄어듭니다.

자바스크립트에서 자리를 바꾸는 방법입니다.

```js
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

옛날 문법입니다.

```js
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

현대적인 문법입니다.

버블 정렬의 의사코드입니다.

- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array

```ts
function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export function bubbleSort(arr: number[]) {
  let swapStack = 1;
  while (swapStack === 1) {
    swapStack -= 1;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapStack = 1;
      }
    }
  }
  return arr;
}
```

제가 구현한 코드입니다.

중첩 순회하고 최적화가 안된 버블 정렬을 배웁니다.

```js
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

최적화가 안된 함수입니다. 가장 큰 숫자가 제일 뒤에 가면 불필요한 비교를 여러번 진행합니다.

버블 정렬은 중첩순회를 하고 마지막 원소 뒷부분 부터 소거하고 비교를 처리합니다.

1가지 최적화가 있습니다. 버블 정렬은 대부분 정렬 되어 있으면 계속 실행합니다. 계속 실행하려고 할 것입니다. 코드를 단축 평가를 하는 방법이 있습니다.

```js
// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
```

최적화 방법은 교환이 없으면 순회를 종료하게 만드는 것입니다. 작은 변화지만 많은 시간을 절약할 수 있습니다.

while문은 아주 비효율적인 알고리즘입니다. 단순히 구현만 한 것 뿐입니다.

버블 정렬은 대부분 정렬이 되었을 때 활용할지도 모르지만 사실 사용하지 않습니다. 사실은 교육용으로 활용하기만 합니다.

버블 정렬의 시간 복잡성은 $O(n^2)$ 입니다. 중첩 순회를 하기 때문에 그렇습니다.

이번 시간에 본 최적화는 고전적인 최적화의 예시입니다.

## 선택 정렬

버블 정렬과 유사합니다. 정렬된 데이터는 앞에서 누적 됩니다.

```txt
5, 3, 4, 1, 2
^        ^  ^

1, 3, 4, 5, 2
   ^        ^

1, 2, 4, 5, 3
      ^     ^

1, 2, 3, 5, 4
         ^  ^

1, 2, 3, 4, 5
완성
```

가장 작은 원소를 찾고 앞에 위치랑 바꾸는 방법으로 동작합니다.

- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.

```ts
function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export function selectionSort(arr: number[]) {
  for (let j = 0; j < arr.length; j++) {
    let minElementVal = arr[j];
    let minElementIdx = j;

    for (let i = j; i < arr.length; i++) {
      if (minElementVal > arr[i]) {
        minElementVal = arr[i];
        minElementIdx = i;
      }
    }
    swap(arr, minElementIdx, j);
  }
  return arr;
}

selectionSort([5, 3, 4, 1, 2]);
```

제가 구현한 함수입니다. 가장 작은 값을 보관하고 있을 필여는 없었습니다. 구현하지 않은 부분이 있습니다. 첫 숫자랑 가장 작은 숫자가 동일한데 `swap`함수를 호출하게 됩니다. 그래서 강의를 잘 확인하도록 합니다.

```js
const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// ES2015 VERSION
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
```

중첩 순회부터 구현하는 것도 방법입니다. 조금식 창문을 줄여가는 것입니다.

선택정렬의 시간복잡성은 상당히 낮습니다. 모든 원소를 비교해야 합니다. $O(n^2)$ 입니다. 버블정렬보다 성능이 좋기는 합니다. 버블 정렬은 자리를 바꾸는 횟수가 많습니다. 공간복잡성이 버블정렬보다는 좋습니다. 또 초심자 학습용 알고리즘에 좋습니다. 하지만 실무적으로 자주 작성하지 않습니다.

## 삽입정렬

마지막 기초적인 정렬입니다. 삽입정렬은 버블정렬과 선택정렬과 유사합니다. 몇가지 다른점이 있습니다. 학습차원만이 아니라 실무에서 활용하게 될 경우도 존재합니다.

각 원소를 정렬된 부분에 배치합니다. 정렬된 부분이 있고 점진적으로 완성된 부분에 추가합니다.

원소를 하나씩 받아 완성된 부분에 계속 삽입하는 방식으로 동작합니다.

```txt
5, 3, 4, 1, 2
/  ^

3, 5, 4, 1, 2
/  /  ^

3, 4, 5, 1, 2
/  /  /  ^

1, 3, 4, 5, 2
/  /  /  /  ^

1, 2, 3, 4, 5
완성
```

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted.

```js
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```

es6 문법이 아닌 코드로 풀었습니다.

삽입정렬의 시간복잡성입니다. $O(n^2)$ 입니다. 대부분의 자료가 정렬이 되어 있으면 성능이 좋은 편입니다. 최악의 경우는 모든 것이 역으로 되어 있는 경우입니다.

삽입정렬이 흥미롭게 갖고 있는 장점입니다. 온라인 데이터입니다. 이미 한쪽은 정렬이 되어 있기 때문에 적절한 곳에 삽입만 하면되기 때문에 좋습니다. 스트리밍 환경에서는 반드시 알고있도록 합니다.

## 기초 알고리즘 정리

기초 정렬알고리즘은 제곱알고리즘이라고도 많이 부릅니다.

| 알고리즘 | 최고       | 평균       | 최악 시간복잡성 | $O$ 공간복잡성 |
| -------- | ---------- | ---------- | --------------- | -------------- |
| 버블정렬 | $O(n)$     | $O(n^{2})$ | $O(n^{2})$      | $O(1)$         |
| 삽입정렬 | $O(n)$     | $O(n^{2})$ | $O(n^{2})$      | $O(1)$         |
| 선택정렬 | $O(n^{2})$ | $O(n^{2})$ | $O(n^{2})$      | $O(1)$         |

선택정렬은 이해하기 쉽다는 장점 이외에는 없습니다. 버블정렬과 삽입정렬은 모두 대부분 완성되어 있을 때 선형시간복잡성을 갖습니다.

공간복잡성은 모두 동일합니다. 새로운 데이터를 만드는 것이 아니기 때문에 성능이 좋습니다.

정렬은 프로그래밍에서 기초입니다. 면접 기본 질문 중 하나입니다. 버블, 선택, 삽입은 모두 성능이 비슷합니다. 빅세타 표기법으로 모두 제곱시간복잡성을 갖습니다. 더 복잡성이 높고 성능이 좋을 정렬 알고리즘은 바로 다음에 다룹니다.

## 중급 알고리즘

## 병합정렬

병합정렬부터 중급 알고리즘입니다. 직관적이지 않고 이해하기 더 어렵습니다. 하지만 성능은 더 좋습니다.

중급알고리즘을 바로 구현할 줄 모르면 반성하기 바랍니다.

알고리즘을 설명하는 것은 출발입니다. 면접은 이해를 통해 문제를 푸는 것입니다.

지금까지 학습 버블, 삽입, 선택 정렬의 한계부터 이해합니다.

지금까지 정렬은 20개 이상부터 성능저하가 심해지기 시작합니다.

병합, 퀵, 기수 정렬을 모두 배울 것입니다.

버블 정렬은 제곱시간 복잡성을 갖고 있지만 병합정렬은 훨씬더 성능이 좋습니다. 이런 성능이 좋은 알고리즘을 보고 $O(n^{2})$ 을 $O(n \cdot log \ n)$ 으로 개선됩니다. 일반인들이 주로 사고하는 방식이 아닙니다. 그래서 개발자가 아닌 사람으로서 직관적이지 못한 것이 많습니다.

Jonathan Benjamin Ben Newman은 1948년 수학자가 최초의 병합정렬을 작성했습니다. 과거 코드를 작성하는 것은 오늘과 아주 달랐습니다.

2가지의 조합입니다. 물론 우리 입장에서는 3가지입니다. 쪼개기, 정렬하기, 병합하기입니다.

큰 배열을 작게 쪼갭니다. 분할 정복 전략입니다. 8, 4, 2, 1로 쪼개고 합치는 방식으로 동작합니다. 프로그램은 쪼개는 것으로 시작합니다.

[8, 3, 5, 4, 7, 6, 1, 2]

[8, 3, 5, 4] [7, 6, 1, 2]

[8, 3] [5, 4] [7, 6] [1, 2]

[8] [3] [5] [4] [7] [6] [1] [2]

[3, 8] [4, 5] [6, 7] [1, 2]

[3, 4, 5, 8] [1, 2, 6, 7]

[1, 2, 3, 4, 5, 6, 7, 8]

합칠때마다 정렬합니다.

더작은 숫자를 앞에 배치하면 됩니다.

이 알고리즘은 이해하기 조금 어려울 수 있습니다.

https://visualgo.net/en/sorting

다음은 병합하는 방법부터 배울 것입니다. 병합하는 함수만 따로 구현을 시도합니다.

정렬된 두 배열만 합치기만 하면됩니다.

```js
merge([1, 10, 50], [2, 14, 99, 100]);
```

이런 함수가 동작하게 만들면 됩니다. 이 로직은 생각보다 쉽습니다.

2개의 정렬된 배열을 받아야 합니다. 같은 크기가 아닌 경우도 처리해야 합니다.

O(m + n) 시간 복잡성을 갖게 될 것입니다. m, n은 각각 같은 차수의 다른 크기를 갖을 수 있는 경우입니다.

배열의 모든 원소를 찾을 수 밖에 없습니다.

의사코드입니다.

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array

이 의사코드를 병합하면 이렇게 될 것입니다.

```txt
[1, 10, 50], [2, 14, 99, 100]
 ^            ^
-----------------------------
[1]
-----------------------------
[1, 10, 50], [2, 14, 99, 100]
    ^         ^
-----------------------------
[1, 2]
-----------------------------
[1, 10, 50], [2, 14, 99, 100]
    ^            ^
-----------------------------
[1, 2, 10]
-----------------------------
...
-----------------------------
[1, 2, 10, 14, 50, 99, 100]
```

2개의 포인터가 2개의 배열을 각각 바라보는 방식입니다. 크기를 비교하고 포인터의 인덱스를 하나씩 올리는 방식입니다.

```js
/**
 * @param {array} arrLeft
 * @param {array} arrRight
 * @returns {array}
 */
function solution(arrLeft, arrRight) {
  const mergedArray = [];
  for (let i = 0, j = 0; i < arrLeft.length || j < arrRight.length; ) {
    if (arrLeft[i] < arrRight[j]) {
      mergedArray.push(arrLeft[i]);
      i++;
    } else {
      mergedArray.push(arrRight[j]);
      j++;
    }
  }
  return mergedArray;
}
```

제가 구한 답입니다.

```js
// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
merge([100, 200], [1, 2, 3, 5, 6]);
```

재가 구현한 로직보다 더 단순하게 생겼습니다.

여기서 재약은 항상 정렬된 배열에서만 동작한다는 것입니다.

개념적으로 이해하기 어려울 수 있는 부분이 재귀함수 때문입니다. 처음 보면 직관적이지 않습니다. 미국권에서는 개념적 이해가 중요합니다.

병합정렬의 의사코드입니다.

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array

slice 메서들 사용할 것을 권장합니다. 병합은 이전에 작성한 함수를 활용할 것을 권장합니다.

```ts
function mergeArr(arrLeft: number[], arrRight: number[]) {
  const mergedArray: number[] = [];

  let i = 0;
  let j = 0;

  while (i < arrLeft.length && j < arrRight.length) {
    if (arrLeft[i] < arrRight[j]) {
      mergedArray.push(arrLeft[i]);
      i++;
    } else {
      mergedArray.push(arrRight[j]);
      j++;
    }
  }

  while (i < arrLeft.length) {
    mergedArray.push(arrLeft[i]);
    i++;
  }

  while (j < arrRight.length) {
    mergedArray.push(arrRight[j]);
    j++;
  }

  return mergedArray;
}

export function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  const median = Math.round(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, median));
  const right: number[] = mergeSort(arr.slice(median));

  return mergeArr(left, right);
}
```

제가 구현한 함수입니다. 책임을 분리하면 의외로 쉽습니다.

```js
// Merge function from earlier
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, sright);
}

mergeSort([10, 24, 76, 73]);
```

제가 정답과 변수명 제외하고 동일하게 작성한 것 같습니다.

재귀함수를 사용하기 때문에 공간복잡성이 증가하게 됩니다.

최초 콜스택이 push되고 left에 한쪽이 끝날 때까지 쌓입니다. 그리고 left가 끝나야 right를 처리합니다.

```txt
mergeSort([10, 24, 76, 73])

mergeSort([10, 24])

mergeSort([10])
```

베이스 케이스에 도달하고 나서 합쳐지는 과정에서 정렬이 맞춰지는 방식으로 동작하게 됩니다.

병합정렬의 시공간복잡성입니다.

최고, 최악, 보통 모든 경우의 수는 $O(n log \cdot n)$ 입니다.

왜 $n log n$ 인가? 배열의 원소가 1개가 될 때까지 쪼갭니다. 배열의 원소가 8개면 3번 쪼개야 합니다. log*{2}n 번쪼갭니다. n의 사이즈는 log*{2}n만큼 커집니다. n은 선형적으로 비교하면서 순회하기 때문에 n입니다. 병합 과정에서 선형시간복잡성을 갖게 됩니다.

제곱시간복잡성에 비해서는 성능이 상당히 좋습니다. 하지만 여전히 느립니다. 정렬에서 프로그래머가 현재 얻을 수 있는 최선입니다.

Radix 정렬은 나중에 배우게 될 것입니다. 공간복잡성은 선형공간복잡성을 갖습니다. 지불하는 비용이 공간입니다. 만약 공간이 고려사항이라면 다른 정렬방법을 찾을 수 밖에 없습니다.

## 퀵 정렬

https://visualgo.net/en/sorting

이름이 특이합니다. 상당히 유용합니다. 하지만 유용한 만큼 가르치기 어려운 개념입니다. 또 학생입장에서 복습이 많이 필요한 개념입니다.

병합정렬과 유사합니다. 재귀함수로 쉽게 풀 수 있습니다. 데이터를 분할하고 0, 1 정도의 원소에 도달할 때까지 계속 사용합니다. 하지만 다른 점이 있습니다. pivot 지점을 고르고 그 숫자를 기준으로 모두 옮깁니다. 작으면 왼쪽 크면 오른쪽으로 정리합니다. 정렬이 아닙니다. 그냥 위치만 옮기는 것입니다.

```txt
[5, 2, 1, 8, 4, 7, 6, 3]
------------------------
[5, 2, 1, 8, 4, 7, 6, 3]
 ^
[2, 1, 8, 4, 5, 7, 6, 3]
             ^
[2, 1, 8, 4, 5, 7, 6, 3]
       ^              ^
[3, 2, 1, 8, 4, 5, 7, 6,]
 ^        ^
[3, 2, 1, 4, 5, 7, 6, 8]
 ^                    ^
------------------------
             v
[3, 2, 1, 4, 5, 7, 6, 8]
 ^
------------------------
[2, 1, 3, 4, 5, 7, 6, 8]
 ^
------------------------
[1, 2, 3, 4, 5, 7, 6, 8]
왼쪽 종료
------------------------
[1, 2, 3, 4, 5, 7, 6, 8]
                ^
------------------------
[1, 2, 3, 4, 5, 6, 7, 8
종료
```

- 왼쪽에 작게 정렬되면 반복하는 창문의 규모가 작아닙니다.

- 제일 큰숫자는 가장 뒤와 자리를 바꿉니다.

- 작은 값은 큰값에서 제일 먼저있는 값과 자리를 바꿉니다.

pivot helper를 먼저 구현할 것입니다. 병합정렬과 유사하게 접근할 것입니다.

pivot을 고르는 지점에 따라 성능이 달라집니다. 중앙값을 가장 잘 고르면 성능이 좋습니다. 첫, 중앙, 마지막, 난수값을 고를 수 있습니다. 단순하게 처리하기 위해서 첫번째 값만 고르도록 할 것입니다. 절대 새로운 배열을 만들 필요가 없습니다.

순서는 사실 상관이 없습니다. 한쪽으로 몰아 넣는 것이 중요합니다.

대소비교를 하면서 선형탐색을 합니다. pivot 원소를 기준으로 인덱스를 정하는 작업니다.

작으면 인덱스를 계속 더합니다. 그 인덱스를 반환하면 됩니다. 의사코드는 너무 추상적일 수 있습니다.

```js
const arr = [5, 2, 1, 8, 4, 7, 6, 3];

pivot(arr); // 4

arr; // [2, 1, 4, 3, 5, 8, 7, 6];
```

Pivot은 배열을 반환하지 않습니다. 하지만 배열에 변형을 가할 것입니다.

Pivot을 하면 최소한 하나의 값은 올바른 위치에 있습니다.

의사코드입니다.

- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
  - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index

자리를 바꾸면 1식 더합니다. 기록한 인덱스를 기준으로 위치를 바꿉니다.

1시간 내 구현을 못해서 결국 강의를 들었습니다.

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}
```

```txt
[4, 8, 2, 1, 5, 7, 6, 3]
```

이렇게 되어 있으면 이렇게 동작합니다.

```txt
[4, 8, 2, 1, 5, 7, 6, 3]
 ^
------------------------
[4, 8, 2, 1, 5, 7, 6, 3]
 ^  ^
[4, 8, 2, 1, 5, 7, 6, 3]
 ^  ^  ^
------------------------
[4, 2, 8, 1, 5, 7, 6, 3]
 ^
[4, 2, 8, 1, 5, 7, 6, 3]
 ^     ^  ^
------------------------
[4, 2, 1, 8, 5, 7, 6, 3]
 ^        ^           ^
[4, 2, 1, 3, 5, 7, 6, 8]
------------------------
[4, 2, 1, 3, 5, 7, 6, 8]
 ^        ^
[3, 2, 1, 4, 5, 7, 6, 8]
 ^        ^
```

인덱스를 반환하는 것이 중요합니다. 재귀적으로 왼쪽과 오른쪽을 계속 호출하는 방식으로 동작합니다.

알아낸 Pivot 지점은 정렬할 배열에서 제외해도 됩니다. 새로운 배열을 만들 필요는 없습니다.

베이스 케이스는 하위 배열의 원소가 1개인지를 기준으로 합니다.

처음부터 바로 구현하는 사람들은 드뭅니다.

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Your base case occurs when you consider a subarray with less than 2 elements

그래서 시간제한 없이 바로 보여주도록 하겠습니다.

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
```

콜스택을 확인해보겠습니다.

왼쪽에 콜스택을 한번 쌓아 올리고 베이스케이스에 도달할 때까지 실행합니다. 그리고 다음에 오른쪽에 쌓아올렸다 해처리합니다.

퀵 정렬의 시공간복잡성입니다. $O(lonN)$ 으로 분해해야 합니다.

이미 정렬된 데이터에 첫번째 pivot을 골면 곤란합니다.

O(n) decomposition으로 제곱시간 복잡성을 갖습니다.

정렬된 데이터는 난수화된 값 혹은 중간값을 선정하도록 합니다. 물론 정렬이 많이 안된 알고리즘에서 고른 데이터가 최대 혹은 최소일 가능성도 존재합니다.

최대 최소를 잘 회피할수록 성능이 좋은 알고리즘입니다.

최고의 경우 $O(N log N)$
보통의 경우 $O(N log N)$
최악의 경우 $O(n^{2})$
공간 복잡성 $O(log N)$

## 기수정렬

https://visualgo.net/en/sorting

지금까지 정렬은 비교정렬 알고리즘으로 분류됩니다. 2개의 원소를 무엇이 무슨 순서로 올지 결정합니다.

평균 시간복잡성은 버블, 삽입, 선택은 제곱시간 복잡성을 갖습니다. 또 퀵, 병합 정렬은 nlogn 시간복잡성을 갖습니다. 여기서 성능을 더 개선하는 방법이 놀랍게도 있습니다. 수학적으로 바라는 보통의 경우 최대로 얻을 수 있는 시간복잡성은 nlogn입니다.

비교하지 않는 정렬알고리즘이 있습니다. RADIX 정렬은 비교하지 않습니다. 정렬하는 방식이 다릅니다. 지금까지 배운것과 다릅니다.

다른 데이터도 정렬이 가능하지만 실제 정렬 계산을 할때는 숫자여야 합니다. 숫자의 크기 즉 자리수를 활용합니다.

[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]

일의 자리수를 기준으로 분류하고 담습니다.

0: -
1: -
2: 902
3: 593
4: 4
5: -
6: 1556, 3556, 4386, 86
7: 7, 8157, 9637
8: 408
9: 29

정보의 순서는 그대로 일단은 유지합니다.

[902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]

그리고 십의 자리수를 다음에 또 비교합니다.

0: 902, 7, 4, 408,
1: -
2: 29
3: 9637
4: -
5: 1556, 3556, 8157
6: -
7: -
8: 4386, 86
9: 593

[902, 7, 4, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]

가장 자리수가 큰 숫자를 기준 횟수만큼 반복합니다.

숫자의 성질을 활용한 알고리즘입니다.

자릿수마다 그 값을 알아낼 수 있어야 합니다. 대부분의 언어는 이런 기능을 제공하지 않습니다.

비교하지 않는 정렬입니다. 이런 이유로 숫자를 아주 빠르게 정렬할 수 있습니다.

헬퍼 메서드를 일부 만들어야 작업이 수월할 것입니다.

```js
getDitgit(12345, 0); // 5
getDitgit(12345, 1); // 4
getDitgit(12345, 2); // 3
getDitgit(12345, 3); // 2
getDitgit(12345, 4); // 1
getDitgit(12345, 5); // 0
```

이런 함수를 만들어야 합니다.

10진수 주로 활용하지만 2진수도 많이 활용합니다.

```ts
export function getDitgit(num: number, idx: number) {
  return parseInt(num.toString().split("").reverse()[idx] || "0");
}
```

저는 이렇게 구현했습니다.

```ts
export function getDitgit(num: number, idx: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}
```

이렇게 구현하면 성능이 더 좋습니다. 내림을 통해 자리수의 값을 구하게 되는 것입니다.

이제 알아야할 것은 재정렬 횟수입니다. 가장 큰 자리수만 알아내면 됩니다.

digitCount를 구현하면 됩니다.

```js
digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3
```

```ts
export function digitCount(num: number) {
  return num.toString().length;
}
```

저는 이렇게 구현했습니다.

```ts
export function digitCount(num: number) {
  if (num === 0) return 0;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```

이렇게 하면 형변환 없이 더 좋은 성능으로 구현할 수 있습니다.

다음으로 필요한 메서드는 mostDigits입니다.

```js
mostDigits([1234, 56, 7]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2
```

```ts
export function mostDigits(nums: number[]) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
```

이렇게 구하는 것도 가능합니다.

의외로 기수정렬의 로직은 단순합니다.

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
  - Create buckets for each digit (0 to 9)
  - place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- return list at the end!

```ts
export function radixSort(arr: number[]) {
  let saveArr: number[] = [];
  for (let k = 0; k < mostDigits(arr); k++) {
    const bucket: { [index: number]: number[] } = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };
    for (let i = 0; i < arr.length; i++) {
      bucket[getDitgit(arr[i], k)].push(arr[i]);
    }

    const newArr: number[] = [];
    for (const key in bucket) {
      bucket[key].forEach((item) => newArr.push(item));
    }
    saveArr = newArr;
  }
  // console.log(newArr);
  return saveArr;
}

radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]);
```

실패한 구현입니다.

```ts
export function radixSort(arr: number[]) {
  const maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      const digit = getDitgit(elem, k);
      digitBuckets[digit].push(elem as never);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}
```

이렇게 구현이 가능합니다.

```js
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```

자바스크립트는 이렇게 구현합니다. 로직자체는 간단합니다.

기수정렬의 빅오표기법입니다. 여기에 모순이 다소 존재합니다. 하지만 일반적인 표기법입니다.

최고의 경우 $O(nk)$
보통의 경우 $O(nk)$
최악의 경우 $O(nk)$
공간복잡성 $O(n+k)$

n은 배열의 크기
k는 자릿수의 평균

시간복잡성이 숫자가 메모리에 저장되는 방식에 따라 k는 logN에 해당합니다. 그래서 다른 정렬과 성능이 비슷합니다.

기수정렬이 효율적으로 보이지만 한계가 존재합니다. 이론적으로 상당히 효율적이지만 실무적으로 merge sort랑 유사합니다. 하지만 개념적으로 흥미롭고 재미있는 알고리즘입니다.

# 자료구조

자료구조를 이야기합니다. 강의의 중요한 전환점입니다. 진행하기 전에 미리 알아둬야 할 것들입니다.

ES6 클래스 문법도 배웁니다.

왜 배워야 하고, 자료구조는 무엇이 있고, 왜 다양하고, 왜 이렇게 다른지 모두 배울 것입니다.

다양한 자료구조들을 배웁니다. 하지만 모두 클래스로 정의해볼 것입니다. 배열 혹은 객체를 직접 구현해보는 것과 비슷합니다.

자료구조를 자료구조로 만드는 것은 무엇인가? 자료의 모음이고 알고리즘과의 관계이고 데이터에 적용할 계산과 절차입니다.

배열은 여러 값을 담고 순서도 정보를 담습니다. 추가, 삭제, 갱신, 읽기 등 다양한 처리가 가능합니다.

단방향 링크드 리스트도 다룹니다.

데이터의 묶음을 다루며 또 전용 메서드도 다룰 것입니다. 그래프, 트리, 힙 모두 동일합니다. 대부분의 경우 클래스로 구현합니다.

이렇게 많은 이유는 각각 트레이드 오프가 있습니다. 자주 사용하는 것은 이미 제공해줍니다. 특수한 상황에는 직접 구현해야 하고 작성해야 합니다.

언제 어떻게 쓸지 배우게 될 것입니다. 자료구조는 데이터를 보관하고 보관하는 관계를 만듭니다. 결과적으로 모두 데이터를 담지만 사용할 수 있는 효율적인 알고리즘은 모두 다릅니다.

개발자로 생활하면서 이런 자료구조를 활용할 일이 많습니다.

이미 많은 자료구조를 간접적으로 많이 배웠습니다. DOM 조작을 하면 이미 트리를 조작한 것입니다.

그리고 제일 중요한 것은 코테와 인터뷰입니다.

코테와 면접에서 안 나와도 가치가 큽니다.

배열처럼 일반적으로 사용하는 경우도 있습니다. 하지만 상황에 따라 효율이 모두 다릅니다. 예를 들어 지도를 활용하면 그래프를 활용하면 편할 것입니다.

정렬된 배열이 필요한데 처음 혹은 마지막에 생성, 삭제를 많이 하면 링크드 리스트를 활용할지도 모릅니다.

크롤링, 스크레이핑을 하면 트리데이터를 활용할 가능성이 큽니다.

스캐줄러를 작성해야 하면 이진힙을 사용하게 될 가능성이 큽니다.

상황마다 유리한 것은 모두 다릅니다.

자료구조만으로 엄청 많이 소화할 것이 많습니다.

2주 동안 하루 10시간 공부해서 공부합니다.

자료구조는 다른 자료구조 개념이 이미 있어야 공부할 수 있는 것들이 있습니다.

시간을 충분히 갖고 복습을 잘 하도록 합니다.

## 클래스 문법

자료구조를 다룰 것입니다. 전통적인 것부터 복잡한 자료구조를 다룰 것입니다. 모두 구현할 것입니다. 자바스크립트는 모두 만들어야 합니다. es6 클래스 문법을 잘 활용해야 합니다.

객체지향 프로그래밍을 잘 모르면 소화할 것이 많을 것입니다.

목표입니다. 클래스는 무엇이고 자바스크립트가 어떻게 클래스를 구현하는지 배웁니다. 추상화, 다형성, 캡슐화 같은 개념을 배웁니다.

클래스는 객체를 생성하는 청사진과 비슷합니다. 여러 개별 객체를 클래스로 인스턴스로 생성할 때가 많습니다.

자바스크립트는 진짜 클래스를 갖고 있는 것은 아닙니다. 프로토타입 기반 상속을 구현하기 때문에 진짜 객체지향이 아닙니다. 클래스 같은 자료를 쉽게 만들 수 있게만 해줍니다.

진정한 객체지향 프로그래밍이 아니라는 이유로 안 배울 이유는 없습니다.

클래스 선언하는 방법입니다. 클래스는 관례적으로 파스칼 케이스로 작성합니다. 클래스는 코드를 정리하기 위한 하나의 방법에 불과합니다. 가독성을 위해 활용할 것입니다.

constructor는 클래스만 갖는 특수 매서드입니다.

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

이런 클래스가 있습니다. constructor에 있는 인자를 인스턴스 생성할 때 대입해야 합니다.

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
}

const jake = new Student("Jake", "The Dog", 8);

console.log(jake); // Student { firstName: 'Jake', lastName: 'The Dog', year: 8 }
```

클래스를 만들면 인스턴스를 생성해야 합니다. 그리고 그 인스턴스를 활용해야 합니다.

여기서 의문이 생길 수 있습니다. this는 컨텍스트에 따라 바뀔 수 있습니다. constructor에 있으면 생성한 인스턴스 객체를 바라보게 됩니다.

다른 언어의 self와 유사합니다.

이제는 동적 메서드와 정적 메서드를 다룹니다. 다른 말로 인스턴스 메서드와 클래스 메서드입니다.

인스턴스 메서드는 강의 대부분 활용할 것입니다. 클래스 메서드는 가끔 사용합니다. 생성한 인스턴스에서 접근할 수 있는 메서드는 인스턴스 메서드입니다.

배열에서 push 같은 메서드는 리터럴 인스턴스에 달려있는 메서드입니다.

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

const jake = new Student("Jake", "The Dog", 8);

console.log(jake.fullName()); // Your full name is Jake The Dog
```

조금 더 다양한 로직들을 담아 볼 수 있습니다.

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;

    return this.tardies >= 3
      ? `${this.firstName} ${this.lastName} has been expelled!`
      : `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
}

const jake = new Student("Jake", "The Dog", 8);

console.log(jake.markLate()); // Jake The Dog has been late 1 times
console.log(jake.markLate()); // Jake The Dog has been late 2 times
console.log(jake.markLate()); // Jake The Dog has been expelled!
```

클래스의 생산자는 항상 클래스의 소비자를 생각해야 합니다. 클래스를 다루는 중요한 관례 중 하나는 직접 프로퍼티를 변형하지 않습니다. 제공된 메서드를 인터페이스로 활용해서 제어해야 합니다. 없으면 제어할 수 없다고 가정하도록 합니다.

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;

    return this.tardies > 3
      ? `${this.firstName} ${this.lastName} has been expelled!`
      : `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScores(scores) {
    this.scores.push(scores);
    return this.scores;
  }

  getAverage() {
    return this.scores.reduce((a, b) => a + b) / this.scores.length;
  }
}

const jake = new Student("Jake", "The Dog", 8);

console.log(jake.addScores(90));
console.log(jake.addScores(100));
console.log(jake.addScores(85)); // [ 90, 100, 85 ]
console.log(jake.getAverage()); // 91.66666666666667
```

하나의 인스턴스를 생성하고 개별 인스턴스로 이렇게 활용합니다.

이번에는 정적 메서드를 배웁니다. `static` 키워드를 활용합니다. 가끔 활용합니다. 인스턴스로 접근할 수 없고 클래스 함수에서 접근할 수 있고 보통 헬퍼 함수로 만듭니다.

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;

    return this.tardies > 3
      ? `${this.firstName} ${this.lastName} has been expelled!`
      : `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScores(scores) {
    this.scores.push(scores);
    return this.scores;
  }

  getAverage() {
    return this.scores.reduce((a, b) => a + b) / this.scores.length;
  }

  static enrollStudents(...students) {
    return `Enrolling Students`;
  }
}

const jake = new Student("Jake", "The Dog", 8);

console.log(Student.enrollStudents()); // Enrolling Students
```

항상 기억하도록 합니다. 클래스는 코드를 정리하는 수단에 불과합니다.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

이렇게 활용이 가능합니다.

동적 메서드와 정적 메서드 모두 이렇게 다룰 수 있어야 합니다.

항상 기억해야 할 것은 es6부터는 생성된 인스턴스에 항상 바라보게 됩니다.

## 단일 연결 리스트

https://cs.slides.com/colt_steele/singly-linked-lists

Singly Linked Lists입니다. 첫번째로 공부하는 자료구조입니다. es6 클래스 문법을 받드시 숙지해야 합니다.

모든 자료구조에 클래스 키워드를 활용하게 될 것입니다.

단일 연결 리스트를 이해하고 내장 배열과 차이를 봅니다. 링크드 리스테 이런 저런 메서드를 추가합니다.

링크드 리스트는 데이터를 저장하는 자료구조입니다. 특이한 점이 있습니다. 대부분의 배열은 인덱스를 갖고 있습니다. 하지만 링크드 리스트는 인덱스가 엄밀하게 없습니다. 각 원소를 보고 노드라고 합니다. 다음 노드를 참조하고 다음 노드가 없으면 null을 반환합니다. head로 시작해서 tail로 접근하게 됩니다.

리스트에서 접근하기 위해서는 무조건 head부터 접근해야 합니다. 링크드 리스트는 다음 노드로 연결하는 자료구조입니다.

단일 연결리스트는 방향이 단방향입니다. 이중 연결리스트는 양방향으로 접근이 가능합니다. 각각 장단점이 있습니다.

삽입하는 방법은 비교적 쉽습니다. 새로운 head로 설정하고 이전 head에 포인터를 갖도록 합니다.

링크드 리스트는 인덱스가 없고 원소에 대응하는 인덱스가 없습니다. head는 무조건 가져야 하고 tail은 선택적입니다. 무작위적인 접근은 불가능합니다. 하지만 링크드 리스트가 잘하는 것은 삽입과 삭제입니다.

삽입삭제를 많이 하는 자료구조에는 링크리스트를 사용하는 것이 좋습니다.

링크드 리스트는 노드의 묶음에 불과합니다. 값과 다음 값 포인터만 있으면 됩니다.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const first = new Node("hell");
first.next = new Node("o");
first.next.next = new Node("world");

console.log(first.val); // hell
console.log(first.next.val); // o
console.log(first.next.next.val); // world
```

이렇게 저장하면 상당히 조작하기 어렵고 비효율적입니다. 유지보수하기 어렵습니다.

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    }
    if (this.head) {
      this.tail = this.head;
      this.head = new Node(val);
      this.head.next = this.tail;
    }
  }
}
```

제가 구현한 단방향 연결리스트입니다.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
// list.push("HELLO")
// list.push("GOODBYE")
```

거의 비슷했습니다.

가장 뒤에 온다는 것을 잊었습니다.

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
}
```

저는 이렇게 수정하겠습니다.

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
- Return the linked list

pop메서드입니다. 마지막 링크드 리스트의 값을 반환하고 삭제합니다.

tail까지 접근하고 삭제하는 방식으로 동작합니다. 삭제를 위해서는 선형탐색을 해야 합니다. 새로운 tail을 만들려면 마지막 직전의 tail이 바라보는 주소를 null로 하면 됩니다.

트리버스는 간단합니다.

- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

의사코드입니다.

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head || !this.tail) {
      return null;
    }
    if (this.length === 1) {
      const temp = this.tail.val;
      this.tail = null;
      this.head = this.tail;
      return temp;
    }
    if (this.length > 1) {
      const temp = this.tail.val;
      let current: Node<T> | null = this.head;
      // 삭제
      while (current?.next?.next) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      return temp;
    }
  }
}
```

제가 구현한 pop 메서드입니다. length를 구현하는 것을 잊었습니다.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
```

논리적으로 유사합니다. 하지만 리팩토링할 지점을 보여줍니다.

노드 그자체를 반환합니다.

나중에 리팩토링을 또 진행하게 될 것입니다.

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift(val: T) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
  }
}
```

제가 구현한 shift입니다. head에 있는 Node를 삭제하는 메서드입니다.

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    if (!this.head || !this.tail) return null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    const temp = this.head;
    this.head = this.head.next;
    return temp.val;
  }

  usshift(val: T) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
  }
}
```

shift와 unshift를 모두 구현했습니다.

```js
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
```

unshift는 header에 노드를 추가하는 방법입니다.

```js
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
```

이렇게 구현이 가능합니다. 더 간결한 점이 좋습니다.

포인터만 갱신하면 되기 때문에 간단합니다.

모든 인덱스의 갱신이 없어서 상당히 간단합니다.

get 메서드는 인덱스를 받고 그 해당하는 값을 반환하는 메서드입니다. 숫자를 받고 Node를 순회하고 해당하는 값을 반환합니다.

검색시간이 선형 시간복잡성을 갖습니다.

- This function should accept an index
- If the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    if (!this.head || !this.tail) return null;
    const temp = this.head;
    this.head = temp.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp.val;
  }

  usshift(val: T) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  get(idx: number): null | T {
    if (idx < 0 || idx > this.length - 1 || !this.head) {
      return null;
    }
    let current: Node<T> | null = this.head;
    for (let i = 0; i < idx; i++) {
      if (current?.next) current = current?.next;
    }
    return current?.val;
  }
}
```

제가 구현한 get 메서드입니다.

```js
get(index){
    if(index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index){
        current = current.next;
        counter++;
    }
    return current;
}
```

강의에서 만든 코드가 가독성이 더 좋습니다.

set은 인덱스와 갱신할 값을 받는 메서드입니다.

get 메서들 재사용하는 것도 가능합니다. 존재하는지 확인하고 값을 갱신합니다. 존재하지 않으면 false를 반환하고 존재하면 true를 반환합니다.

- This function should accept a value and an index
- Use your get function to find the specific node.
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head || !this.tail) return null;
    const temp = this.head;
    this.head = temp.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp.val;
  }

  usshift(val: T) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  get(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== idx) {
      if (current) {
        current = current?.next;
        counter++;
      }
    }
    return current;
  }

  set(idx: number, val: T) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
}
```

제가 구현한 메서드입니다.

```js
set(index, val){
    var foundNode = this.get(index);
    if(foundNode){
        foundNode.val = val;
        return true;
    }
    return false;
}
```

변수명 빼고 동일합니다. 적절하게 구현에 성공했습니다.

이제는 삽입입니다. set과 유사합니다. 하지만 노드의 값을 갱신하는 것이 아니라 중간에 Node를 생성하고 넣는 작업입니다.

2개의 인자를 받습니다. 인덱스와 새로운 노드가 갖는 값입니다. 인덱스는 삽입하려는 바로 직전 노드를 접근합니다.

삽입에 성공하면 true를 반환하고 실패하면 false를 반환하게 만들면 됩니다.

- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list
- Otherwise, using the get method, access the node at the index - 1
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next
- Increment the length
- Return true

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head || !this.tail) return null;
    const temp = this.head;
    this.head = temp.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp.val;
  }

  unshift(val: T) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  get(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== idx) {
      if (current) {
        current = current?.next;
        counter++;
      }
    }
    return current;
  }

  set(idx: number, val: T) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx: number, val: T) {
    const node = this.get(idx - 1);
    const newNode = new Node(val);

    if (this.length === 0) {
      this.unshift(val);
      return true;
    }

    if (idx === this.length) {
      this.push(val);
      return true;
    }

    if (node) {
      this.length += 1;
      node.next = newNode;
      newNode.next = this.get(idx);
      return true;
    }
    return false;
  }
}
```

제가 구현 insert 메서드입니다.

```js
insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
}
```

당연히 가독성이 더 좋습니다.

remove 메서드입니다. 마지막 삭제랑 다르게 중간삭제를 합니다. 삽입과 짝이되는 메서드입니다.

- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the length-1, pop
- If the index is 0, shift
- Otherwise, using the get method, access the node at the index - 1
- Set the next property on that node to be the next of the next node
- Decrement the length
- Return the value of the node removed

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head || !this.tail) return null;
    const temp = this.head;
    this.head = temp.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(val: T) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  get(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== idx) {
      if (current) {
        current = current?.next;
        counter++;
      }
    }
    return current;
  }

  set(idx: number, val: T) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx: number, val: T) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(idx - 1);
    if (prev?.next) {
      const temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length += 1;
    }
    return true;
  }

  remove(idx: number) {
    if (idx < 0 || idx > this.length - 1) return null;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const temp = this.get(idx);
    const prev = this.get(idx - 1);
    if (prev?.next?.next) {
      prev.next = this.get(idx + 1);
    }
    this.length -= 1;

    return temp;
  }
}
```

제가 구현한 remove 입니다.

```js
remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
}
```

이제는 Reverse 메서드를 구현합니다. 코테 질문의 고전이지만 실무에 자주 활용하지 않습니다. 참고로 구현할 때 복사를 금지하면서 구현할 것을 요청할 것입니다.

- Swap the head and tail
- Create a variable called next
- Create a variable called prev
- Create a variable called node and initialize it to the head property
- Loop through the list
- Set next to be the next property on whatever node is
- Set the next property on the node to be whatever prev is
- Set prev to be the value of the node variable
- Set the node variable to be the value of the next variable
- Once you have finished looping, return the list

저는 구현할줄 몰랐습니다.

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head || !this.tail) return null;
    const temp = this.head;
    this.head = temp.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(val: T) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  get(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== idx) {
      if (current) {
        current = current?.next;
        counter++;
      }
    }
    return current;
  }

  set(idx: number, val: T) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx: number, val: T) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(idx - 1);
    if (prev?.next) {
      const temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length += 1;
    }
    return true;
  }

  remove(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    let previousNode = this.get(idx - 1);
    let removed: Node<T> | null = null;
    if (previousNode?.next) {
      removed = previousNode.next;
      previousNode.next = removed.next;
    }

    this.length -= 1;

    return removed;
  }

  reverse() {
    if (this.length === 0) return null;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev: Node<T> | null = null;
    for (let i = 0; i < this.length; i++) {
      if (node) {
        next = node?.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }

    return this;
  }
}
```

이렇게 구현이 가능합니다. 처음 보면 이해가 잘 되는 것은 아닙니다.

단일 연결 리스트의 빅오표기법입니다.

삽입시간이 상수시간 복잡성입니다.

삭제시간은 상수시간에서 선형시간 복잡성이 됩니다.

탐색시간은 선형시간 복잡성입니다.

갱신시간도 선형시간 복잡성을 갖습니다.

배열은 삽입 삭제만 우위를 갖고 있습니다.

링크드 리스트는 다른 자료구조를 구현하기 전에 이해가 필요한 기본 개념이 됩니다.

## 이중 연결 리스트

https://cs.slides.com/colt_steele/doubly-linked-lists

노드가 양방향으로 참조합니다. 작성하는 메서드의 차이가 커집니다. 단일과 이중 연결리스트를 모두 비교할 것입니다.

물론 링크드리스트라 비슷합니다. 구조적으로 조금 다릅니다.

단일 연결 리스트랑 다르게 tail에서 뒤로 움직이는 것이 가능합니다. 역으로 출력하는 것은 비교적 쉽습니다.

단일 연결 리스트를 역으로 출력하는 방법은 엄청나게 비효율적입니다.

이중 연결리스트는 포인터가 2개라서 더 복잡합니다. 하지만 극단적으로 복잡하지 않습니다.

단일 연결리스트보다 유연함을 얻을 수 있지만 공간복잡성을 비용으로 지불합니다.

노드를 활용하는 것은 동일하지만 노드에는 포인터가 2개입니다.

로직은 모두 달라질 것입니다. 하지만 생성자 함수는 비슷합니다.

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

시작은 비슷합니다.

```ts
const firstNode = new Node<>(30);
firstNode.next = new Node(20);
firstNode.next.prev = firstNode;
```

이런식으로 사용할 수 있습니다.

- Create a new node with the value passed to the function
- If the head property is null set the head and tail to be the newly created node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List

위와 같은 의사코드 제가 작성한 메서드입니다.

```ts
  push(val: T) {
    this.length += 1;
    const newNode = new Node<T>(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.head !== null && this.tail !== null) {
      this.tail.next = newNode;
      this.tail.next.prev = this.tail;
      this.tail = newNode;
    }

    return this;
  }
```

```js
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
```

단일 연결리스트를 참고했습니다. 단일 연결리스트에서 구현한 것과 상당히 비슷합니다.

단일 연결리스트에서 pop은 오히려 쉽습니다. 바로 tail 접근할 수 있습니다.

- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous Node.
- Set the newTail's next to null
- Decrement the length
- Return the value removed

삭제할 때는 이중으로 되어 있는 next, prev 모두 참조를 null로 바꿔줘야 합니다.

그리고 반환하는 값은 Node입니다.

```ts
  pop() {
    if (this.length === 0) {
      return null;
    }
    const popped = this.tail;

    if (this.length === 1 && popped) {
      this.tail = null;
      this.head = this.tail;
      this.length -= 1;

      popped.prev = null;
      return popped;
    }

    if (this.length > 1 && this.tail && popped) {
      this.tail = popped.prev;
      if (this.tail?.next) this.tail.next = null;
      popped.prev = null;
      this.length -= 1;
      return popped;
    }
  }
```

제가 만든 pop입니다.

```js
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }
```

로직의 중복이 덜합니다.

확실히 제어가 더 쉽습니다. 여기서 주의할 점은 popped한 Node의 prev가 null를 바라보도록 해야 합니다. 그렇게 해서 접근 가능성을 막아버려야 합니다. 또 메모리 누수가능성도 있습니다.

shift입니다. shift는 시작하는 Node를 제거합니다. pop과 상당히 유사합니다.

- If length is 0, return undefined
- Store the current head property in a variable (we'll call it old head)
- If the length is one
- set the head to be null
- set the tail to be null
- Update the head to be the next of the old head
- Set the head's prev property to null
- Set the old head's next to null
- Decrement the length
- Return old head

```ts
  shift() {
    if (this.length === 0) {
      return null;
    }
    const shiftedNode = this.head;
    if (this.length === 1 && shiftedNode) {
      this.head = null;
      this.tail = this.head;
    } else if (shiftedNode) {
      this.head = shiftedNode.next;
      if (this.head?.prev) this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length -= 1;
    return shiftedNode;
  }
```

저의 shift입니다.

```js
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
```

pop과 비슷하기 때문에 저랑 비슷한 코드를 갖고 있습니다.

unshift는 shift의 역입니다.

- Create a new node with the value passed to the function
- If the length is 0
  - Set the head to be the new node
  - Set the tail to be the new node
- Otherwise
  - Set the prev property on the head of the list to be the new node
  - Set the next property on the new node to be the head property
  - Update the head to be the new node
- Increment the length
- Return the list

```ts
  unshift(val: T) {
    const unsiftedNode = new Node<T>(val);
    if (this.length === 0) {
      this.head = unsiftedNode;
      this.tail = this.head;
    } else {
      unsiftedNode.next = this.head;
      this.head = unsiftedNode;
    }
    this.length += 1;
    return this;
  }

```

제가 구현한 unshift입니다.

```js
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
```

여기서 제가 한 실수는 `this.head.prev`를 설정하지 않았습니다. 코드에 대해서 잘 자각하고 있었다고 착각하고 있었습니다.

get은 숫자를 받고 그 인덱스에 해당하는 값을 반환합니다. get을 위한 최적화가 존재합니다. head 혹은 tail 모두 어느쪽이든 접근할 수 있습니다.

현재 length를 보고 어느쪽에 가까운지 비교하고 선형탐색을 진행할 것입니다.

- If the index is less than 0 or greater or equal to the length, return null
- If the index is less than or equal to half the length of the list
  - Loop through the list starting from the head and loop towards the middle
  - Return the node once it is found
- If the index is greater than half the length of the list
  - ​Loop through the list starting from the tail and loop towards the middle
  - Return the node once it is found

```ts
  get(idx: number) {
    if (idx < 0 || idx > this.length - 1 || this.length === 0) {
      return null;
    }

    const mid = Math.floor(this.length / 2);

    if (idx <= mid) {
      let targetNode = this.head!;
      for (let i = 0; i < idx; i++) {
        targetNode = targetNode.next as Node<T>;
      }
      return targetNode;
    }

    if (idx > mid) {
      let targetNode = this.tail!;
      for (let i = 0; i < this.length - idx - 1; i++) {
        targetNode = targetNode.prev as Node<T>;
      }
      return targetNode;
    }
  }
```

제가 구현한 get입니다.

```js
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
```

if-else 문에서 상호배타적이라는 점을 잊고 있었습니다.

또 while이 가독성이 더 좋습니다.

그리고 중간 index를 반올림할 필요가 없었습니다.

set은 index와 값을 모두 받습니다. 로직은 get과 유사합니다. 그래서 get 메서드를 내부에서 재사용합니다.

- Create a variable which is the result of the get method at the index passed to the function
  - If the get method returns a valid node, set the value of that node to be the value passed to the function
  - Return true
- Otherwise, return false

```ts
set(idx: number, val: T) {
    if (this.get(idx) === null) {
      return false;
    }
    this.get(idx)!.val = val;
    return true;
  }
```

아주 궈여운 저의 set입니다.

```js
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
```

강의 코드랑 유사합니다.

이중 연결리스트의 insert입니다. 단일연결리스트와 유사합니다. 중간에 시작하는 최적화가 가능합니다. 이미 작성한 get 메서드를 재사용하는 것으로 편안한 수정이 가능합니다.

서로 연결하는 포인터를 많이 갱신해야 하는 번거로움이 있기는 합니다.

insert에 대한 의사코드입니다.

- If the index is less than zero or greater than or equal to the length return false
- If the index is 0, unshift
- If the index is the same as the length, push
- Use the get method to access the index -1
- Set the next and prev properties on the correct nodes to link everything together
- Increment the length
- Return true

```ts
  insert(idx: number, val: T) {
    if (idx === this.length) {
      this.push(val);
      return true;
    }

    if (idx === 0) {
      this.unshift(val);
      return true;
    }

    if (this.get(idx) === null) return false;

    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode?.next;
    if (prevNode && nextNode) {
      prevNode.next = newNode;
      newNode.prev = prevNode;
      nextNode.prev = newNode;
      newNode.next = nextNode;
    }
    this.length += 1;
    return true;
  }
```

제가 작성한 insert입니다.

```js
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
```

정리가 더 잘되어 있고 구조는 비슷합니다.

체이닝을 하지않고 식별자에 Node를 담는 것이 가독성이 더 좋습니다.

Remove는 해당 인덱스에 있는 Node를 삭제합니다. get을 간단히 재사용하면 됩니다.

- If the index is less than zero or greater than or equal to the length return undefined
- If the index is 0, shift
- If the index is the same as the length-1, pop
- Use the get method to retrieve the item to be removed
- Update the next and prev properties to remove the found node from the list
- Set next and prev to null on the found node
- Decrement the length
- Return the removed node.

```ts
  remove(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const removedNode = this.get(idx);
    const prevNode = removedNode?.prev;
    const nextNode = removedNode?.next;
    if (prevNode && nextNode) {
      (prevNode.next = nextNode), (nextNode.prev = prevNode);
      (removedNode.next = null), (removedNode.prev = null);
    }
    this.length -= 1;
    return removedNode;
  }
```

제가 작성한 remove입니다.

```js
remove(index){
  if(index < 0 || index >= this.length) return false;
  if(index === 0) return this.shift();
  if(index === this.length) return this.pop();
  var removedNode = this.get(index);
  removedNode.prev.next = removedNode.next;
  removedNode.next.prev = removedNode.prev;
  removedNode.next = null;
  removedNode.prev = null;
  this.length --;
  return removedNode
}
```

이중연결리스트의 시간복잡성입니다. 대부분 비슷합니다.

삽입시간 - O(1)
삭제시간 - O(1)
탐색시간 - O(N)
접근시간 - O(N)

삭제시간이 더 효율적입니다.

물론 탐색시간은 O(N/2)으로 더 효율적이기는 합니다. 하지만 자료의 사이즈가 커지면서 미미해지면서 선형시간복잡성을 갖습니다.

이중연결리스트는 단일연결리스트보다 포인터가 1개가 더 있어서 역으로 순회를 해야 할 때 편리합니다. 브라우저 히스토리는 이중연결리스트 자료구조의 대표적인 예시입니다. 이전 이후로 이동할 때 활용합니다. 또 탐색이 더 효율적입니다. 물론 공간복잡성이 더커지기는 하지만 대부분의 경우 지불하고자 합니다.

## Stack & Queue

스택과 큐입니다. 많은 과정에서 스택과 큐를 같이 연결해서 가르칩니다. 생각보다 코드량이 많지 않을 단원입니다.

목표들입니다.

- Define what a stack is
- Understand use cases for a stack
- Implement operations on a stack data structure

### Stack

Stack과 Queue는 모두 추상화된 자료구조입니다. Stack은 LIFO입니다. Queue는 FIFO입니다. 펜케익이 Stack에 해당합니다. 가장 최근에 추가한 데이터를 가장 빠르게 접근할 수 있습니다.

자바스크립트의 콜 스택도 스택 자료구조에 해당하는 것이 맞습니다.

- 스택은 함수 호출을 제어합니다. 많은 프로그램언어가 이런 방식을 지원합니다.
- Undo / Redo
- 브라우저 히스토리

트리와 그래프도 사실 Stack과 Queue를 활용할 수 있습니다.

중간 자료구조로 중요한 역할을 할 것입니다.

간단한 구현 방법과 제대로 된 구현방법 모두 다룰 것입니다.

스택은 LIFO 자료구조이고 이런 자료구조를 만드는 방법은 다양합니다. 실제 구현하는 전략은 다양합니다. 이런 특징을 지키는 원칙에 가깝습니다.

가장 쉬운 방법은 array를 활용하는 것입니다.

```js
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
```

배열에 push, pop만 활용하면 stack에 해당합니다.

물론 shift, unshift를 짝으로 활용할 수 있습니다. 하지만 당연히 선형시간 복잡성을 갖습니다.

하지만 링크드 리스트를 활용해서 구현하는 것이 더 좋습니다. 부적절한 메소드를 접근할 가능성이 있기 때문에 그렇습니다.

Stack은 LIFO 원칙에 불과합니다.

직업 만드는 Stack 클래스를 활용할 것입니다. 연결리스트를 활용할 것입니다.

출발은 이렇게 할 수있습니다.

```js
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```

연결 리스트와 사실상 같습니다.

하지만 문제가 있습니다. 단일 연결리스트의 pop은 선형시간 복잡성을 갖습니다. 그래서 LIFO를 지킬 수 있게 메서드 이름만 shift를 pop으로 바꾸면 됩니다.

단일연결리스트에서 앞에 추가와 삭제를 하면 상수시간이 됩니다. 또 이중연결리스트는 마지막에 생성과 삭제를 하면 상수시간이 됩니다.

push의 의사코드입니다.

- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class Stack<T> {
  protected first: null | Node<T>;
  protected last: null | Node<T>;
  protected size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val: T) {
    const newNode = new Node<T>(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size += 1;
    return this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return temp;
  }
}
```

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

삭제, 삽입은 상수시간입니다. 삭제, 삽입이 중요한 경우이기 때문에 적절합니다. 그리고 탐색, 접근시간은 선형시간복잡성을 갖습니다. 이 계산은 애초에 필요하지 않습니다.

Stack은 LIFO 구조입니다. 페이지 히스토리, 다른언어의 함수 실행 순서에 많이 활용합니다. Stack은 이번 예제는 실무용입니다. 면접 코테용으로는 배열을 활용하는 방향으로 작성합니다.

### Queue

큐는 자매 자료구조입니다. 추가 삭제는 동일하지만 순서만 다릅니다. FIFO 자료구조입니다.

- Define what a queue is
- Understand use cases for a queue
- Implement operations on a queue data structure

프로그램에서 굉장히 자주 사용합니다. 예를 들어 접속하는 유저를 받아들이는 순서도 큐로 활용합니다. 프린터도 큐에 해당합니다. 순서대로 출력할 수 있습니다.

배열과 링크드 리스트 모두 활용할 수 있습니다.

생성은 enqueue이고 삭제는 dequeue입니다.

```js
const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.shift(); // 1
queue.shift(); // 2
queue.shift(); // 3
```

이렇게 되면 선형시간복잡성을 갖습니다. 지난 시간처럼 자체적으로 만드는 자료구조가 확실히 좋습니다. 성능 문제를 해결하기 위한 방법입니다.

개념적으로 Queue에 해당하는 경우가 맞습니다.

tail에 추가하고 head에서 삭제하는 전략과 반대로 head에 추가하고 tail에 삭제하는 전략이 있습니다. 단일 연결리스트의 경우 pop은 비효율적인 것처럼 tail에 추가하고 head를 삭제하는 전략이 더 효율적입니다.

Queue의 enqueue 메서드의 의사코드입니다.

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
- Increment the size of the queue by 1

이것은 dequeue 메서드의 의사코드입니다.

- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first
- Decrement the size by 1
- Return the value of the node dequeued

```ts
export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class Queue<T> {
  private first: Node<T> | null;
  private last: Node<T> | null;
  private size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val: T) {
    const newNode = new Node<T>(val);

    if (this.first === null) {
      this.first = newNode;
      this.last = this.first;
    }

    const oldTail = this.last;
    if (oldTail) oldTail.next = newNode;
    this.last = newNode;

    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    const temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first?.next!;
    if (temp) temp.next = null;

    this.size -= 1;
    return temp;
  }
}
```

제가 구현한 Queue입니다.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

강의에 해당하는 Queue입니다.

구조는 State과 동시에 유사합니다.

큐의 빅오표기법입니다. 삽입, 삭제는 상수시간복잡성을 갖습니다. 탐색, 접근은 선형시간복잡성을 갖고 있고 별로 중요하지 않습니다.

Queue는 입출력 순서가 동일해야 할 때 많이 활용합니다. 테스크 제어에도 많이 효율적이고 다른 알고리즘에도 많이 활용합니다. 아주 중요한 기반이 될 것입니다.

## 이진 검색 트리(BST)

https://cs.slides.com/colt_steele/trees

트리는 고전적인 자료구조입니다. 또 흔하게 사용하는 자료구조입니다. 연결리스트보다 더 복잡합니다.

- 트리의 정의를 이해합니다.
- 트리와 리스트를 비교합니다.
- 트리, 이진트리, 이진 탐색 트리의 차이를 이해합니다.
- 이진 검색 트리를 구현할 것입니다.

트리는 노드를 활용해 부모 자식 관계를 갖는 자료구조입니다.

루트가 부모이고 중간은 브랜치입니다. 마지막은 리프입니다.

나무 비유를 활용합니다. 트리 자체는 다양한 노드를 가리킬 수 있습니다. 또 자식 노드는 다른 자식 노드를 가리킬 수 있습니다.

트리의 구조는 다양합니다.

리스트는 선형적입니다. 트리는 선형적이지 않습니다. 링크리스트는 하나의 선을 갖고 계속 움직입니다. 하지만 트리는 다양한 경로를 선택할 수 있습니다.

노드는 자식만 가리킬 수 있게 되어 있습니다. 그것이 트리의 요건입니다. 모든 트리는 루트에서 리프로 향합니다. 또 트리는 하나의 루트만 갖고 있어야 합니다.

연결과계 자체를 가리키는 용어는 엣지라고 부릅니다.

트리는 현실에서 자주 사용합니다. 자바스크립트 개발자는 HTML DOM으로 트리를 자주 접했습니다.

```js
document.body;
```

이렇게 접근할 수 있습니다.

네트워크 라우팅에서 활용할 수 있습니다. 내부적으로 동작원리가 트리를 활용합니다.

프로그래밍 언어를 추상화할 때 트리구조도 활용합니다. Abstract Syntax Tree로 활용을 많이 합니다.

인공지능에서 많이 활용합니다. 미니맥스 트리가 해당합니다.

가장 쉬운 예시는 폴더 구조가 해당합니다. 루트가 존재하고 그 아래 어려 폴더를 갖을 수 있습니다.

또 JSON도 트리구조를 갖습니다.

### 이진트리

트리도 다양하게 분류할 수 있습니다. 현실의 나무처럼 컴퓨터 과학에서 다루는 트리도 다양합니다.

특정 트리는 삽입을 잘하거나 탐색을 잘하는 등의 최적화가 있습니다.

이번에는 이진트리 중에서 이진탐색트리를 볼 것입니다. 탐색을 잘하는 트리입니다.

이진트리는 1가지 조건이 있습니다. 자식이 2개를 초과할 수 없습니다. 이런 이유로 0, 1, 2만 가능해서 이진입니다.

이진탐색트리는 특수한 이진트리입니다. 2개이하의 자식을 갖고 있고 자료를 보관할 때 정렬이 되어 있어야 합니다. BST는 비교가 가능한 자료를 저장합니다. 대소 관계가 존재할 수 있는 자료에 활용합니다.

BST 요약

- 모든 부모는 2개 이하의 자식 노드만 갖을 수 있습니다.
- 오른쪽 자식 노드는 부모노드보다 항상 더 커야 합니다. 즉 왼쪽 자식 노드는 부모보다 항상 작아야 합니다.

```txt
  ┏ 20 ┓
 10    30
```

도식화하면 이렇게 됩니다.

이러한 정렬방식이 탐색과 삽입이 굉장히 쉽고 효율적이게 됩니다.

이진탐색 알고리즘을 활용하기 때문에 탐색시간 효율이 좋은 편에 속합니다.

이진트리는 0 ~ 2개의 자식 노드를 갖 것이 특징입니다. 이진 탐색트리는 정렬관계가 추가된 것 뿐입니다.

이진 탐색 클래스와 노드 클래스만 활용하면 구현할 수 있습니다.

노드는 왼쪽 오른쪽만 존재합니다.

```ts
export class Node<T> {
  public val: T;
  public left: Node<T> | null;
  public right: Node<T> | null;
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  private root: Node<T> | null;
  constructor() {
    this.root = null;
  }
}

const tree = new BinarySearchTree();
```

이렇게 시작할 수 있습니다. BST에 삽입과 탐색 메서드를 만들면 됩니다.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
```

강의인 자바스크립트로는 이렇게 구현하는 것도 가능합니다.
