# position 을 어떻게 사용하는지 알려주세요

position은 CSS로 레이아웃을 제어할 때 사용할 수 있는 속성입니다. 특정 element를 어디에 위치시킬지 제어할 수 있습니다. relative와 absolute는 같이 사용하는 속성입니다. 자식 컴포넌트에 absolute를 입력하고 부모컴포넌트에 relative를 입력하는 것으로 자식컴포넌트가 부모컴포넌트 기준으로 위치를 갖게 만들 수 있습니다. 많은 경우 modal 컴포넌트에서 닫기에 활용을 많이 합니다. fixed는 스크롤 위치와 무관하게 뷰포트를 기준으로 고정시킬 수 있습니다. 그래서 부모 element와 무관하게 동작합니다. sticky는 fixed처럼 스크롤에 영향을 받지만 부모 element 내에서만 이동하게 됩니다. nav, FAB 같은 컴포넌트에 많이 활용합니다. 마지막으로 static은 위 relative, absolute, fixed, sticky이 4가지가 아닌 것입니다. 특별한 설정하지 않으면 대부분의 element는 static값을 갖습니다.
