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

문제를 꽤 철두철미하게 분해하고 난다음 단계입니다. 문제를 분해는 비교적 구체적으로 하도록 합니다. 더부 집착할 필요가 없습니다. 문제를 분해한 다음에는 상당히 자신감이 생긴 것입니다. 바로 문제해결을 시도할 수 있습니다. 물론 문제를 해결할 때 몇가 해결할 수 없는 경우가 몇가지가 있습니다. 이럴 때 단순화합니다.

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
