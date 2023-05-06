# section 태그와 article 태그의 차이점

답변일자: 2023.05.06.

`section` 태그는 HTML 페이지에서 독립적인 콘텐츠 영역을 나타내는 태그입니다. 시멘틱하게 콘텐츠를 묶어 놓습니다. heading으로 의미를 표현합니다. 하나의 독립적인 콘텐츠를 중심으로 표현합니다. 보통 페이지에 목차에 대응되는 목록으로 활용할 것을 권장합니다.

참고. `section` 일반적인 콘텐츠 태그는 아닙니다. 단순히 스타일 혹은 스크립트로 선택하고 싶은 상황이면 `div`를 활용하는 것이 좋습니다.

`article` 태그는 직역하면 논문 혹은 신문의 사설에 해당합니다. 글의 저자가 있고 발행과 관련된 태그는 `article` 태그를 활용할 것을 권장합니다. 블로그 게시물, 잡지 사설, 댓글, 위젯 ... 등 독립적인 콘텐츠 목록에 활용할 것을 권장합니다.

여러가지 큰 영역을 분리하기 위한 태그입니다. nav, sidebar, footer 처럼 화면 안에 차지하는 기능적 영역이 클 때 사용합니다. 또 도메인 특성 때문에 시멘틱하게 명명하기 어려운 상황에 활용합니다.

## 응용: SEO에 어떻게 활용할 수 있는가?

답변일자: 2023.05.06.

`section`에 heading을 지정하면 색인할 때 heading으로 묶어서 검색에 유리해질 것입니다.

`article`은 `rel="canonical"` 속성으로 콘텐츠의 출처를 명시할 수 있습니다. 중복 혹은 원본과 제외하는 것을 도와 줄 수 있습니다.

---

[section 스펙](https://html.spec.whatwg.org/multipage/sections.html#the-section-element)

[article 스펙](https://html.spec.whatwg.org/multipage/sections.html#the-article-element)
