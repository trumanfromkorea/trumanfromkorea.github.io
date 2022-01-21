var store = [{
        "title": "Hello World!",
        "excerpt":"안녕!   개발을 진행하며 생기는 이런저런 문제들과 해결방안들,   새롭게 적용해본 기술들, 습득한 지식들,   내가 꼭 기억해야겠다 싶은 내용들을 열심히 적어보자!  ","categories": ["ETC"],
        "tags": [],
        "url": "/etc/first-post/",
        "teaser": null
      },{
        "title": "[Flutter] minimum OS Version 에러 발생",
        "excerpt":"ERROR? Runner.app/Frameworks/Flutter.framework does not support the minimum OS Version specified in the Info.plist 문제 상황 Flutter 를 이용한 첫 프로젝트 릴리즈를 위해 Xcode 에서 Archive 를 진행하던 도중, 다음과 같은 에러가 발생했다. [Flutter] Runner.app/Frameworks/Flutter.framework does not support the minimum OS Version specified in the Info.plist 처음에는 에러의 첫 부분을 제대로...","categories": ["Flutter"],
        "tags": [],
        "url": "/flutter/1/",
        "teaser": null
      },{
        "title": "[Git] 커밋 취소하기, 되돌리기",
        "excerpt":"git reset Git 레포지토리를 이용하다 보면 commit 후 push 를 잘못 진행하거나, 브랜치 병합 후 push 과정에서 오류가 발생해 브랜치를 이전 commit 으로 되돌려야 하는 상황이 종종 발생합니다. 저같은 경우 이러한 상황이 자주 발생하지는 않지만 간혹 commit 을 되돌려야 할 때마다 커맨드가 헷갈리곤 해 확실히 정리하고자 합니다. 사용법 원하는 commit...","categories": ["ETC"],
        "tags": [],
        "url": "/etc/1/",
        "teaser": null
      },{
        "title": "[Flutter] Stateless, Stateful Widget, LifeCycle",
        "excerpt":"Stateless / Stateful Widget Flutter 의 Lifecycle, 생명주기를 이해하기 위해서는 Stateless Widget 과 Stateful Widget 의 차이점을 알아야 합니다. 여기서 State 란 위젯의 상태를 의미합니다. Stateless Widget Stateless Widget 은 변경 가능한 State 가 필요하지 않은 Widget 을 뜻합니다. 다시 말해 Stateless Widget 도 State 를 가지긴 하지만, 한 번...","categories": ["Flutter"],
        "tags": [],
        "url": "/flutter/2/",
        "teaser": null
      },{
        "title": "[Flutter] Null Safety",
        "excerpt":"Flutter - null safety Flutter 2.0 에 들어서면서부터 null safety 가 적용되었다고 합니다. 오늘은 null safety 가 무엇이며 어떻게 쓰이는지 알아보도록 하겠습니다. null safety ? null safety 는 null 로 인해서 발생하는 에러들을 방지하기 위해 도입되었습니다. 실제로 코드를 작성하다가 보면 null 이 아니어야 하는 값에 null 이 삽입된다거나, 리턴된다거나 하는...","categories": ["Flutter"],
        "tags": [],
        "url": "/flutter/3/",
        "teaser": null
      },{
        "title": "[Flutter] iOS - Firestore 추가 시  빌드 에러",
        "excerpt":"iOS - Firestore 추가 시 빌드 에러 pubspec.yaml 파일 dependencies 부분에 cloud_firestore 추가 후 flutter run 커맨드로 빌드 시 iOS 빌드가 굉장히 느려지는 이슈가 발생했습니다. 따로 에러 메세지가 출력되지는 않았고, Xcode build 부분에서 로딩이 약 5분 이상으로 매우 오래 지속되었습니다. 문제 원인 및 해결법 탐색 일단 저는 Podfile 에 Cocoapods...","categories": ["Flutter"],
        "tags": [],
        "url": "/flutter/4/",
        "teaser": null
      },{
        "title": "[iOS] Swift UI 사이드 프로젝트 시작",
        "excerpt":"BDG - 해외 거주 한국인을 위한 역 배대지 사이트 해외에 거주하고 있는 한국인들은 한국 물건이나 음식을 사려면 거주지에서 멀리 떨어진 한인마트로 향하거나, 지인에게 필요한 물건을 배송해달라고 부탁하곤 합니다. 제가 아는 해외 거주 한국인이 얼마나 많겠냐만은 .. 적어도 제가 만나본 분들께서는 모두 한국 물품을 구매하는데 어려움을 겪으셨다고 합니다. 그래서 배송대행지(이하 배대지)를...","categories": ["TIL"],
        "tags": [],
        "url": "/til/1/",
        "teaser": null
      },{
        "title": "[iOS] SwiftUI - Navigation Link",
        "excerpt":"화면 전환 오늘은 소소하게 화면 간 전환을 학습했습니다. 당연히 목표한 학습량은 훨씬 거대했지만 확실히 새롭게 무언가를 시작하는것은 어렵네요. 이전에 사용했던 Flutter, React Native 와는 상이한 점이 많아 헷갈렸습니다. 오늘 학습한 내용 정리해보도록 하겠습니다. (아직 SwiftUI 용어들에 익숙하지 않아 마구잡이로 단어를 사용하고 있으니 틀린부분이 상당히 많을 수도 있습니다..) NavigationLink SwiftUI 에서는...","categories": ["TIL"],
        "tags": [],
        "url": "/til/2/",
        "teaser": null
      },{
        "title": "[알고리즘] 탐욕법 Greedy",
        "excerpt":"탐욕법 오늘은 탐욕법, Greedy 알고리즘에 대해 알아보도록 하겠습니다. 탐욕법이란 현재 상황에서의 최적해를 쫓는 알고리즘입니다. 하지만 현재 상황에서의 최적해만을 추구하는 것이 전체적으로 어떤 영향을 끼칠지는 고려하지 않기 때문에 항상 옳은 결과를 장담하지는 않습니다. Local minimum &amp; Global minimum 그래프 위 시작점 X 에서 최소값을 찾는 프로그램을 작성한다고 할 때, 탐욕법을 이용한다고...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/1/",
        "teaser": null
      },{
        "title": "[알고리즘] DFS (깊이우선탐색) / BFS (너비우선탐색)",
        "excerpt":"DFS (깊이 우선 탐색) , BFS (너비 우선 탐색) 그래프는 정점 (node, vertex) 과 정점들 사이를 연결하는 간선 (edge) 로 이루어진 자료구조입니다. 오늘은 이 그래프를 탐색하는 방법 중 DFS 와 BFS 에 대해 알아보도록 하겠습니다. DFS (Depth First Search, 깊이 우선 탐색) DFS 는 깊이 우선 탐색으로, 루트 노드에서 시작해서...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/2/",
        "teaser": null
      },{
        "title": "애플 개발자 계정을 등록하다",
        "excerpt":"애플 개발자 계정… 애플 개발자 계정을 등록했습니다… 사실 이전에 하려고 마음먹은적이 있었습니다. 그런데 평생도 아니고 연간 플랜이 129,000 원 인걸 알고 바로 그만뒀었는데…. 이제 Swift 공부를 진짜로 해야겠다 마음 먹은 것도 있고, 아주 작고 보잘것 없는 앱이라도 앱 하나쯤은 스스로의 힘으로 릴리즈 해보고 싶은 마음이 있었기에 그냥 등록해버렸습니다~!~! 물론 결제...","categories": ["ETC"],
        "tags": [],
        "url": "/etc/3/",
        "teaser": null
      },{
        "title": "[알고리즘] Dynamic Programming - 동적 계획법",
        "excerpt":"Dynamic Programming - 동적 계획법 이전에 올렸던 탐욕법 알고리즘에 이어 오늘은 동적 계획법, Dynamic Programming 에 대해서 알아보도록 하겠습니다. 해당 포스트에 등장하는 메소드는 모두 Swift 코드로 작성되었습니다. 어떤 경우에 사용할까? 다이나믹 프로그래밍은 하나의 큰 문제를 여러개의 작은 문제들로 나눠서 해결하는 방식입니다. 그렇기 때문에 다이나믹 프로그래밍을 이용하여 문제를 해결하려면 2 가지...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/3/",
        "teaser": null
      },{
        "title": "[알고리즘] 프로그래머스 - 네트워크 (Swift)",
        "excerpt":"프로그래머스 - 네트워크 (Swift) 클릭해서 문제 바로가기 문제 설명 본문 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A,...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/4/",
        "teaser": null
      },{
        "title": "[Swift] 클로저 Closures (1/2)",
        "excerpt":"클로저 Closures (1/2) 클로저는 코드블럭으로 C, Objective-C 의 block 과 다른 언어의 lambdas 와 비슷합니다. 클로저는 사용자의 코드 안에서 전달되어 사용할 수 있는 로직을 가진 중괄호로 구분된 코드 블럭이며, 일급 객체의 역할을 할 수 있습니다. 일급 객체는 전달 인자로 보낼 수 있고, 변수/상수 등으로 저장하거나 전달할 수 있으며, 함수의 리턴값이...","categories": ["Swift"],
        "tags": [],
        "url": "/swift/1/",
        "teaser": null
      },{
        "title": "[알고리즘] [알고리즘] 백준:1655 - 가운데를 말해요(Swift)",
        "excerpt":"[알고리즘] 백준:1655 - 가운데를 말해요 클릭해서 문제 바로가기 문제 설명 본문 백준이는 동생에게 “가운데를 말해요” 게임을 가르쳐주고 있다. 백준이가 정수를 하나씩 외칠때마다 동생은 지금까지 백준이가 말한 수 중에서 중간값을 말해야 한다. 만약, 그동안 백준이가 외친 수의 개수가 짝수개라면 중간에 있는 두 수 중에서 작은 수를 말해야 한다. 예를 들어 백준이가...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/5/",
        "teaser": null
      }]
