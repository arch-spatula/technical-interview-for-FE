# Singleton

싱글튼 패턴입니다. 사람에 따라 다르지만 객체 전역변수로 처리하는 것도 가능합니다. 객체 리터럴을 최대한 절제 해야 하는 관점에서는 클래스로 선언하는 것이 적절합니다.

물론 객체 지향적인 이해가 많이 없으면 객체 리터럴을 사용해도 괜찮습니다. 중요한 점은 동일한 객체 메모리를 바라봐야 합니다.

```js
const Singleton = {};

export default Singleton;
```

이렇게 되면 가변성이 너무 높습니다. 읽기 쓰기 모두 자유롭게 할 수 있습니다. 그점이 규모가 큰 코드베이스에서는 단점이 될 것입니다.

언어 특성의 장점을 활용하는 것입니다. 자바스크립트는 객체 메모리를 참조하는 방식입니다.

```js
class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}

export default Singleton;
```

이렇게 하면 클래스로 인스턴스를 생성합니다. 더 전통적인 방식이 장점이 되기는 합니다.

```ts
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

export default Singleton;
```

실무적으로 타입스크립트를 활용하고 초기 타입스크립트의 객체지향 프로그래밍에서 활용할 수 있는 키워드를 사용할 수 있게 됩니다.
