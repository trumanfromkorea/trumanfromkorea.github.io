var store = [{
        "title": "Hello World!",
        "excerpt":"안녕!   개발을 진행하며 생기는 이런저런 문제들과 해결방안들,   새롭게 적용해본 기술들, 습득한 지식들,   내가 꼭 기억해야겠다 싶은 내용들을 열심히 적어보자!  ","categories": ["ETC"],
        "tags": [],
        "url": "/etc/etc_1/",
        "teaser": null
      },{
        "title": "[Flutter] minimum OS Version 에러 발생",
        "excerpt":"ERROR? Runner.app/Frameworks/Flutter.framework does not support the minimum OS Version specified in the Info.plist 문제 상황 Flutter 를 이용한 첫 프로젝트 릴리즈를 위해 Xcode 에서 Archive 를 진행하던 도중, 다음과 같은 에러가 발생했다. [Flutter] Runner.app/Frameworks/Flutter.framework does not support the minimum OS Version specified in the Info.plist 처음에는 에러의 첫 부분을 제대로...","categories": ["Flutter"],
        "tags": [],
        "url": "/flutter/flutter_1/",
        "teaser": null
      },{
        "title": "[Git] 커밋 취소하기, 되돌리기",
        "excerpt":"git reset Git 레포지토리를 이용하다 보면 commit 후 push 를 잘못 진행하거나, 브랜치 병합 후 push 과정에서 오류가 발생해 브랜치를 이전 commit 으로 되돌려야 하는 상황이 종종 발생합니다. 저같은 경우 이러한 상황이 자주 발생하지는 않지만 간혹 commit 을 되돌려야 할 때마다 커맨드가 헷갈리곤 해 확실히 정리하고자 합니다. 사용법 원하는 commit...","categories": ["ETC"],
        "tags": [],
        "url": "/etc/etc_2/",
        "teaser": null
      },{
        "title": "[Flutter] Stateless, Stateful Widget, LifeCycle",
        "excerpt":"Stateless / Stateful Widget Flutter 의 Lifecycle, 생명주기를 이해하기 위해서는 Stateless Widget 과 Stateful Widget 의 차이점을 알아야 합니다. 여기서 State 란 위젯의 상태를 의미합니다. Stateless Widget Stateless Widget 은 변경 가능한 State 가 필요하지 않은 Widget 을 뜻합니다. 다시 말해 Stateless Widget 도 State 를 가지긴 하지만, 한 번...","categories": ["Flutter"],
        "tags": [],
        "url": "/flutter/flutter_2/",
        "teaser": null
      },{
        "title": "[Flutter] Null Safety",
        "excerpt":"Flutter - null safety Flutter 2.0 에 들어서면서부터 null safety 가 적용되었다고 합니다. 오늘은 null safety 가 무엇이며 어떻게 쓰이는지 알아보도록 하겠습니다. null safety ? null safety 는 null 로 인해서 발생하는 에러들을 방지하기 위해 도입되었습니다. 실제로 코드를 작성하다가 보면 null 이 아니어야 하는 값에 null 이 삽입된다거나, 리턴된다거나 하는...","categories": ["Flutter"],
        "tags": [],
        "url": "/flutter/flutter_3/",
        "teaser": null
      },{
        "title": "[Flutter] iOS - Firestore 추가 시  빌드 에러",
        "excerpt":"iOS - Firestore 추가 시 빌드 에러 pubspec.yaml 파일 dependencies 부분에 cloud_firestore 추가 후 flutter run 커맨드로 빌드 시 iOS 빌드가 굉장히 느려지는 이슈가 발생했습니다. 따로 에러 메세지가 출력되지는 않았고, Xcode build 부분에서 로딩이 약 5분 이상으로 매우 오래 지속되었습니다. 문제 원인 및 해결법 탐색 일단 저는 Podfile 에 Cocoapods...","categories": ["Flutter"],
        "tags": [],
        "url": "/flutter/flutter_4/",
        "teaser": null
      },{
        "title": "[iOS] Swift UI 사이드 프로젝트 시작",
        "excerpt":"BDG - 해외 거주 한국인을 위한 역 배대지 사이트 해외에 거주하고 있는 한국인들은 한국 물건이나 음식을 사려면 거주지에서 멀리 떨어진 한인마트로 향하거나, 지인에게 필요한 물건을 배송해달라고 부탁하곤 합니다. 제가 아는 해외 거주 한국인이 얼마나 많겠냐만은 .. 적어도 제가 만나본 분들께서는 모두 한국 물품을 구매하는데 어려움을 겪으셨다고 합니다. 그래서 배송대행지(이하 배대지)를...","categories": ["TIL"],
        "tags": [],
        "url": "/til/til_1/",
        "teaser": null
      },{
        "title": "[iOS] SwiftUI - Navigation Link",
        "excerpt":"화면 전환 오늘은 소소하게 화면 간 전환을 학습했습니다. 당연히 목표한 학습량은 훨씬 거대했지만 확실히 새롭게 무언가를 시작하는것은 어렵네요. 이전에 사용했던 Flutter, React Native 와는 상이한 점이 많아 헷갈렸습니다. 오늘 학습한 내용 정리해보도록 하겠습니다. (아직 SwiftUI 용어들에 익숙하지 않아 마구잡이로 단어를 사용하고 있으니 틀린부분이 상당히 많을 수도 있습니다..) NavigationLink SwiftUI 에서는...","categories": ["TIL"],
        "tags": [],
        "url": "/til/til_2/",
        "teaser": null
      },{
        "title": "[알고리즘] 탐욕법 Greedy",
        "excerpt":"탐욕법 오늘은 탐욕법, Greedy 알고리즘에 대해 알아보도록 하겠습니다. 탐욕법이란 현재 상황에서의 최적해를 쫓는 알고리즘입니다. 하지만 현재 상황에서의 최적해만을 추구하는 것이 전체적으로 어떤 영향을 끼칠지는 고려하지 않기 때문에 항상 옳은 결과를 장담하지는 않습니다. Local minimum &amp; Global minimum 그래프 위 시작점 X 에서 최소값을 찾는 프로그램을 작성한다고 할 때, 탐욕법을 이용한다고...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/algorithm_1/",
        "teaser": null
      },{
        "title": "[알고리즘] DFS (깊이우선탐색) / BFS (너비우선탐색)",
        "excerpt":"DFS (깊이 우선 탐색) , BFS (너비 우선 탐색) 그래프는 정점 (node, vertex) 과 정점들 사이를 연결하는 간선 (edge) 로 이루어진 자료구조입니다. 오늘은 이 그래프를 탐색하는 방법 중 DFS 와 BFS 에 대해 알아보도록 하겠습니다. DFS (Depth First Search, 깊이 우선 탐색) DFS 는 깊이 우선 탐색으로, 루트 노드에서 시작해서...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/algorithm_2/",
        "teaser": null
      },{
        "title": "애플 개발자 계정을 등록하다",
        "excerpt":"애플 개발자 계정… 애플 개발자 계정을 등록했습니다… 사실 이전에 하려고 마음먹은적이 있었습니다. 그런데 평생도 아니고 연간 플랜이 129,000 원 인걸 알고 바로 그만뒀었는데…. 이제 Swift 공부를 진짜로 해야겠다 마음 먹은 것도 있고, 아주 작고 보잘것 없는 앱이라도 앱 하나쯤은 스스로의 힘으로 릴리즈 해보고 싶은 마음이 있었기에 그냥 등록해버렸습니다~!~! 물론 결제...","categories": ["ETC"],
        "tags": [],
        "url": "/etc/etc_3/",
        "teaser": null
      },{
        "title": "[알고리즘] Dynamic Programming - 동적 계획법",
        "excerpt":"Dynamic Programming - 동적 계획법 이전에 올렸던 탐욕법 알고리즘에 이어 오늘은 동적 계획법, Dynamic Programming 에 대해서 알아보도록 하겠습니다. 해당 포스트에 등장하는 메소드는 모두 Swift 코드로 작성되었습니다. 어떤 경우에 사용할까? 다이나믹 프로그래밍은 하나의 큰 문제를 여러개의 작은 문제들로 나눠서 해결하는 방식입니다. 그렇기 때문에 다이나믹 프로그래밍을 이용하여 문제를 해결하려면 2 가지...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/algorithm_3/",
        "teaser": null
      },{
        "title": "[프로그래머스] 네트워크 (Swift)",
        "excerpt":"[프로그래머스] 네트워크 (Swift) 클릭해서 문제 바로가기 문제 설명 본문 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B,...","categories": ["Programmers"],
        "tags": [],
        "url": "/programmers/programmers_1/",
        "teaser": null
      },{
        "title": "[Swift] 클로저 Closures (1/2)",
        "excerpt":"클로저 Closures (1/2) 클로저는 코드블럭으로 C, Objective-C 의 block 과 다른 언어의 lambdas 와 비슷합니다. 클로저는 사용자의 코드 안에서 전달되어 사용할 수 있는 로직을 가진 중괄호로 구분된 코드 블럭이며, 일급 객체의 역할을 할 수 있습니다. 일급 객체는 전달 인자로 보낼 수 있고, 변수/상수 등으로 저장하거나 전달할 수 있으며, 함수의 리턴값이...","categories": ["Swift"],
        "tags": [],
        "url": "/swift/swift_1/",
        "teaser": null
      },{
        "title": "[백준] 1655.가운데를 말해요 (Swift)",
        "excerpt":"[백준] 1655.가운데를 말해요 (Swift) 클릭해서 문제 바로가기 문제 설명 본문 백준이는 동생에게 “가운데를 말해요” 게임을 가르쳐주고 있다. 백준이가 정수를 하나씩 외칠때마다 동생은 지금까지 백준이가 말한 수 중에서 중간값을 말해야 한다. 만약, 그동안 백준이가 외친 수의 개수가 짝수개라면 중간에 있는 두 수 중에서 작은 수를 말해야 한다. 예를 들어 백준이가 동생에게...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_1/",
        "teaser": null
      },{
        "title": "[프로그래머스] 다리를 지나는 트럭 (Swift)",
        "excerpt":"[프로그래머스] 다리를 지나는 트럭 (Swift) 클릭해서 문제 바로가기 문제 설명 본문 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length 대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히...","categories": ["Programmers"],
        "tags": [],
        "url": "/programmers/programmers_2/",
        "teaser": null
      },{
        "title": "[백준] 1158.요세푸스 문제 (Swift)",
        "excerpt":"[백준] 1158.요세푸스 문제 (Swift) 클릭해서 문제 바로가기 문제 요세푸스 문제는 다음과 같다. 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_2/",
        "teaser": null
      },{
        "title": "[알고리즘] 정렬 알고리즘 (1) - 선택 정렬, 삽입 정렬",
        "excerpt":"정렬 알고리즘 (1) - 선택 정렬, 삽입 정렬 오늘은 알고리즘들 중 가장 기초이면서도 방법이 많아 헷갈리기도 하는 정렬에 대해 학습해보도록 하겠습니다. 정렬 알고리즘이 굉장히 많기 때문에 한 포스트에 정리하게 된다면 내용이 너무 길어질 것 같아 오늘은 선택 정렬과 삽입 정렬에 대해서만 알아보도록 하겠습니다. 선택 정렬 선택 정렬은 처리되지 않은 데이터...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/algorithm_4/",
        "teaser": null
      },{
        "title": "SW·AI 해커톤 - 얼굴인식을 통한 식단추천 시스템",
        "excerpt":"2020.07 AI 표정인식 식단추천 시스템 세종대학교 SW AI 해커톤 금상 🏅 🧑🏻‍💻 구성원 Name Role 장재훈 📊 팀장, 표정인식 이일환 🛠 메인로직, 백엔드 개발 박세환 📄 크롤링, DB 구축 최락현 🖌 시스템 프론트, 인터페이스 개발 안재현 📂 크롤링, 백엔드 개발 📢 프로젝트 소개 설명 주어진 주제는 식단추천이었습니다. 색다른 아이디어를 AI...","categories": ["Projects"],
        "tags": [],
        "url": "/projects/1/",
        "teaser": null
      },{
        "title": "창의학기제 - AI 를 이용한 퍼스널컬러 진단 및 화장품 추천 시스템",
        "excerpt":"2020.07 - 2020.12 Pallete 세종대학교 창의설계 경진대화 장려상, 인기상 🏅 💄 Personal Color Diagnosis with AI and Recommending Cosmetics AI 기반 퍼스널컬러 진단 및 화장품 추천 시스템 개발 🧑🏻‍💻 구성원 2020-2 세종대학교 창의학기제 3분과 Team 5H Name Role 장재훈 📊 팀장, 메인로직 이일환 🛠 메인로직, 앱 개발 박세환 📄 크롤링,...","categories": ["Projects"],
        "tags": [],
        "url": "/projects/2/",
        "teaser": null
      },{
        "title": "졸업연구 프로젝트 - 블록체인과 블루투스 기반 역학조사 자동화 시스템",
        "excerpt":"2021.03 - 2021.06 Track Me - 블록체인과 블루투스 기반 역학조사 자동화 시스템 2021-1 세종대학교 Capstone Design 졸업연구 프로젝트 🧑🏻‍💻 구성원 Name Role 장재훈 📊 팀장, 앱 클라이언트 개발 이일환 🛠 블록체인 생성, 블루투스 통신 개발 박세환 📄 Push 알림, DB 개발 송현석 🖌 웹 프론트엔드 개발 🔍 프로젝트 소개 역학조사...","categories": ["Projects"],
        "tags": [],
        "url": "/projects/3/",
        "teaser": null
      },{
        "title": "Glokool - 외국인 여행객 대상 가이드 앱",
        "excerpt":"2021.07 - 2021.10 Glokool - 외국인 여행객 대상 가이드 앱 아이폰 앱 스토어 안드로이드 플레이 스토어 업무 앱 클라이언트 개발     사용 언어 TypeScript 프레임워크 React Native 협업툴 Git 개발 이미 출시되어있는 앱 클라이언트 부분 전담하여 기능개발 및 유지보수 컨텐츠 로딩 시 무한스크롤 구현 스크롤에 반응하는 상단 탭 구현...","categories": ["Projects"],
        "tags": [],
        "url": "/projects/4/",
        "teaser": null
      },{
        "title": "Glokool 가이드 - Glokool 의 가이드용 앱",
        "excerpt":"2021.09 - 2021.11 Glokool 가이드 - Glokool 의 가이드용 앱 아이폰 앱 스토어 안드로이드 플레이 스토어 업무 앱 클라이언트 개발     사용 언어 TypeScript 프레임워크 React Native 협업툴 Git 개발 채팅 외 앱의 전반적인 부분 개발 앱 구조 설계 및 구현 iOS 관리 앱 스토어 릴리즈 및 버전 업데이트...","categories": ["Projects"],
        "tags": [],
        "url": "/projects/5/",
        "teaser": null
      },{
        "title": "우주펫 - 지역 기반 반려동물 커뮤니티 앱",
        "excerpt":"2021.11 - 2022.01 우주펫 - 지역 기반 반려동물 커뮤니티 앱 2021년 12월 경 출시 2022년 2월 기준 강남구 일대를 중심으로 서비스 중 아이폰 앱 스토어 안드로이드 플레이 스토어 업무 앱 클라이언트 개발     사용 언어 Dart 프레임워크 Flutter 협업툴 Git 개발 채팅 기능 제외 전반적인 앱 개발 진행 (v1.2.0...","categories": ["Projects"],
        "tags": [],
        "url": "/projects/6/",
        "teaser": null
      },{
        "title": "[백준] 10830.행렬 제곱 (Swift, Java)",
        "excerpt":"[백준] 10830.행렬 제곱 (Swift, Java) 클릭해서 문제 바로가기 문제 크기가 N*N인 행렬 A가 주어진다. 이때, A의 B제곱을 구하는 프로그램을 작성하시오. 수가 매우 커질 수 있으니, A^B의 각 원소를 1,000으로 나눈 나머지를 출력한다. 첫째 줄에 행렬의 크기 N과 B가 주어진다. (2 ≤ N ≤ 5, 1 ≤ B ≤ 100,000,000,000) 둘째...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_3/",
        "teaser": null
      },{
        "title": "[백준] 1976.여행 가자 (Swift, Java)",
        "excerpt":"[백준] 1976.여행 가자 (Swift, Java) 클릭해서 문제 바로가기 문제 동혁이는 친구들과 함께 여행을 가려고 한다. 한국에는 도시가 N개 있고 임의의 두 도시 사이에 길이 있을 수도, 없을 수도 있다. 동혁이의 여행 일정이 주어졌을 때, 이 여행 경로가 가능한 것인지 알아보자. 물론 중간에 다른 도시를 경유해서 여행을 할 수도 있다. 예를...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_4/",
        "teaser": null
      },{
        "title": "[백준] 2309.일곱 난쟁이 (Swift, Java)",
        "excerpt":"[백준] 2309.일곱 난쟁이 (Swift, Java) 클릭해서 문제 바로가기 문제 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다. 아홉 명의 난쟁이는 모두 자신이 “백설 공주와 일곱 난쟁이”의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_5/",
        "teaser": null
      },{
        "title": "[백준] 9012.괄호 (Swift, Java)",
        "excerpt":"[백준] 9012.괄호 (Swift, Java) 클릭해서 문제 바로가기 문제 괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 만일 x...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_6/",
        "teaser": null
      },{
        "title": "[백준] 1316.그룹 단어 체커 (Swift, Java)",
        "excerpt":"[백준] 1316.그룹 단어 체커 (Swift, Java) 클릭해서 문제 바로가기 문제 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다....","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_7/",
        "teaser": null
      },{
        "title": "[SwiftUI] 키보드 외 영역 터치 시 키보드 숨기기",
        "excerpt":"키보드 숨기기 많은 앱들은 키보드 이용 시 키보드 외의 화면을 터치하면 키보드를 숨기게 해주는 기능을 지원합니다. 저도 React Native 나 Flutter 프로젝트를 진행하며 항상 해당 기능을 구현해왔고, SwiftUI 프로젝트를 진행하면서도 해당 기능을 구현하기로 했습니다. 방법 - 1 SwiftUI 는 프레임워크 내에서 자체적으로 키보드 관련 메커니즘을 지원하지 않기 때문에 UIKit 을...","categories": ["iOS"],
        "tags": [],
        "url": "/ios/ios_1/",
        "teaser": null
      },{
        "title": "[코딩테스트] 프로그래머스 데브코스 2기 - 백엔드 엔지니어링",
        "excerpt":"[코딩테스트] 프로그래머스 데브코스 2기 - 백엔드 엔지니어링 방금 막 프로그래머스 백엔드 데브코스 코딩테스트를 치뤘습니다. 시간은 4시간으로 진행되었고 문제는 총 25문제로 구성되어 있었습니다. 구글링도 모두 허용되었고 화면 녹화나 웹캠도 켜지 않은 채 상당히 널널한 환경에서 테스트가 진행되었습니다. 알고리즘 3문제, SQL 2문제, 객관식 20 문제로 구성되어 있었고, 알고리즘에 가장 많은 시간을 소요하게...","categories": ["ETC"],
        "tags": [],
        "url": "/etc/etc_4/",
        "teaser": null
      },{
        "title": "[Swift] 지정한 달의 요일 수 구하기",
        "excerpt":"[Swift] 지정한 달의 요일 수 구하기 프로젝트를 진행하면서 임의의 날짜가 속해있는 달의 특정 요일 개수를 구해야 하는 상황이 생겼습니다. Date 와 Calendar 를 이용하여 평일의 개수를 구한다던지 주말의 개수를 구하는 알고리즘은 찾아볼 수 있었지만, 특정 요일의 개수를 구하는 알고리즘은 없어서 직접 만들어봤습니다. 방법 접근 처음에는 원하는 날짜에 해당하는 요일의 개수를...","categories": ["Swift"],
        "tags": [],
        "url": "/swift/swift_2/",
        "teaser": null
      },{
        "title": "[프로그래머스] 가장 먼 노드 (Swift, Java)",
        "excerpt":"[프로그래머스] 가장 먼 노드 (Swift, Java) 클릭해서 문제 바로가기 문제 n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다. 노드의 개수 n, 간선에 대한 정보가 담긴...","categories": ["Programmers"],
        "tags": [],
        "url": "/programmers/programmers_3/",
        "teaser": null
      },{
        "title": "[Java] Primitive Type 과 Wrapper Class",
        "excerpt":"[Java] Primitive Type 과 Wrapper Class Java 를 이용하며 int 와 Integer, 혹은 boolean 과 Boolean 처럼 같은 값을 나타내지만 선언형이 다른 경우를 보신 적이 있으실 것입니다. Java 언어에서 Primitive Type 과 Wrapper Class 가 존재한다는 것은 알고 있었지만, 정확한 개념이나 사용법은 숙지하고 있는 것 같지 않아서 학습하게 되었습니다. 분류...","categories": ["Java"],
        "tags": [],
        "url": "/java/java_1/",
        "teaser": null
      },{
        "title": "[Swift] Class 와 Struct",
        "excerpt":"[Swift] Class 와 Struct Swift 의 클래스와 구조체에는 공통점이 매우 많습니다. 하지만 그만큼 사용되는 용도나 성능의 차이도 많은데요, 오늘은 Swift 언어에서의 클래스와 구조체에 대해 알아보도록 하겠습니다. 공통점과 차이점 공통점 값을 저장할 프로퍼티를 선언할 수 있습니다. 함수적 기능을 하는 메소드를 선언할 수 있습니다. 내부 값에 . 을 사용하여 접근할 수 있습니다....","categories": ["Swift"],
        "tags": [],
        "url": "/swift/swift_3/",
        "teaser": null
      },{
        "title": "[Swift] 프로퍼티 - 저장 프로퍼티 (Stored Property)",
        "excerpt":"[Swift] 프로퍼티 - 저장 프로퍼티 Stored Property Swift 공식 문서를 직역하자면, 프로퍼티는 클래스, 구조체, 열거형과 값을 연결해주는 역할을 한다고 합니다. 프로퍼티에는 저장 프로퍼티 (Stored Property), 연산 프로퍼티 (Computed Property), 그리고 타입 프로퍼티 (Type Property) 등이 존재하는데, 오늘은 그 중 저장 프로퍼티에 대해 알아보도록 하겠습니다. 저장 프로퍼티란? 저장 프로퍼티는 클래스와 구조체에서만...","categories": ["Swift"],
        "tags": [],
        "url": "/swift/swift_4/",
        "teaser": null
      },{
        "title": "[Swift] 프로퍼티 - 연산 프로퍼티 (Computed Property)",
        "excerpt":"[Swift] 프로퍼티 - 연산 프로퍼티 Computed Property 연산 프로퍼티는 클래스, 구조체, 열거형에서 사용됩니다. 저장 프로퍼티와는 다르게 저장 공간을 갖지 않고, getter 와 setter 를 이용해서 다른 프로퍼티와 값들에 간접적으로 접근이 가능합니다. 연산 프로퍼티는 어떤 값을 저장하는 것이 아니기 때문에 타입 추론이 불가능합니다. 따라서 선언 시 타입을 꼭 명시해줘야 합니다. class...","categories": ["Swift"],
        "tags": [],
        "url": "/swift/swift_5/",
        "teaser": null
      },{
        "title": "[Swift] 프로퍼티 - 타입 프로퍼티 (Type Property)",
        "excerpt":"[Swift] 프로퍼티 - 타입 프로퍼티 (Type Property) 타입 프로퍼티는 클래스, 구조체, 열거형에서 사용됩니다. 타입 프로퍼티에는 저장 타입 프로퍼티와 연산 타입 프로퍼티가 존재하며 저장 타입 프로퍼티의 경우 항상 값이 초기화가 되어있어야 합니다. static 키워드를 이용해 선언하며 lazy 키워드를 직접 붙여주지 않아도 lazy 하게 작동합니다. class Person { static let name: String...","categories": ["Swift"],
        "tags": [],
        "url": "/swift/swift_6/",
        "teaser": null
      },{
        "title": "[백준] 5639.이진 검색 트리 (Swift)",
        "excerpt":"[백준] 5639.이진 검색 트리 (Swift) 클릭해서 문제 바로가기 문제 이진 검색 트리는 다음과 같은 세 가지 조건을 만족하는 이진 트리이다. 노드의 왼쪽 서브트리에 있는 모든 노드의 키는 노드의 키보다 작다. 노드의 오른쪽 서브트리에 있는 모든 노드의 키는 노드의 키보다 크다. 왼쪽, 오른쪽 서브트리도 이진 검색 트리이다. 전위 순회 (루트-왼쪽-오른쪽)은 루트를...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_8/",
        "teaser": null
      },{
        "title": "[백준] 1238.파티 (Swift)",
        "excerpt":"[백준] 1238.파티 (Swift) 클릭해서 문제 바로가기 문제 N개의 숫자로 구분된 각각의 마을에 한 명의 학생이 살고 있다. 어느 날 이 N명의 학생이 X (1 ≤ X ≤ N)번 마을에 모여서 파티를 벌이기로 했다. 이 마을 사이에는 총 M개의 단방향 도로들이 있고 i번째 길을 지나는데 Ti(1 ≤ Ti ≤ 100)의 시간을...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_9/",
        "teaser": null
      },{
        "title": "[백준] 19238.스타트 택시 (Swift)",
        "excerpt":"[백준] 19238.스타트 택시 (Swift) 클릭해서 문제 바로가기 문제 스타트링크가 “스타트 택시”라는 이름의 택시 사업을 시작했다. 스타트 택시는 특이하게도 손님을 도착지로 데려다줄 때마다 연료가 충전되고, 연료가 바닥나면 그 날의 업무가 끝난다. 택시 기사 최백준은 오늘 M명의 승객을 태우는 것이 목표이다. 백준이 활동할 영역은 N×N 크기의 격자로 나타낼 수 있고, 각 칸은...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_10/",
        "teaser": null
      },{
        "title": "[백준] 18808.스티커 붙이기 (Swift)",
        "excerpt":"[백준] 18808.스티커 붙이기 (Swift) 클릭해서 문제 바로가기 오늘은 문제가 너무 길어서 첨부하지 않겠습니다. 위 링크에서 문제를 확인하실 수 있습니다. 이해 1. 배열 비교 먼저 스티커 자체를 배열에 붙일 수 있는지 없는지를 확인해야 했습니다. 스티커의 크기만큼 배열에서 인덱스를 이동하며 탐색하였습니다. 맨 처음에는 확인하려는 범위의 첫번째 인덱스, 즉 맨 좌측 상단이 1로...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_11/",
        "teaser": null
      },{
        "title": "[코딩테스트] 쏘카 - iOS 엔지니어",
        "excerpt":"[코딩테스트] 쏘카 - iOS 엔지니어 지난 금요일 쏘카 iOS 엔지니어 파트 코딩테스트를 치뤘습니다. 사실 저같이 할 줄 아는거 별로 없고 경력도 없는 포지션은 아니었던 것 같지만, 어쨌거나 제가 목표하고 있는 파트는 iOS 이었기에 지원해봤습니다. 주니어 소프트웨어 엔지니어라는 파트가 있었는데, 해당 파트는 백엔드쪽에 조금 더 가까운 것 같아 지원하지 않았습니다. 얼마...","categories": ["ETC"],
        "tags": [],
        "url": "/etc/etc_5/",
        "teaser": null
      },{
        "title": "[코딩테스트] 트래블 월렛 - iOS 개발자",
        "excerpt":"[코딩테스트] 트래블 월렛 - iOS 개발자 오늘 트래블 월렛이라는 회사의 코딩테스트를 치뤘습니다. 원래는 제가 그래프 순회 문제를 풀이하는데 굉장히 어려움을 느꼈어서 한창 그래프 문제 위주로 학습을 해왔습니다. 그런데 이번 코딩테스트를 준비하며 느낀 점은 DP 부분도 만만치 않게 취약하다는 것이었습니다. DP 문제를 몇 문제나 학습하였는데 아직 감도 잡지 못한 것 같습니다....","categories": ["ETC"],
        "tags": [],
        "url": "/etc/etc_6/",
        "teaser": null
      },{
        "title": "[주간학습] 스터디 기록 시작",
        "excerpt":"[주간학습] 스터디 기록 시작 코딩테스트 스터디를 진행하다 보니, 학습내용과 정보를 공유하는 것이 집에 앉아서 코드를 작성하는 것 만큼이나 큰 도움이 된다는 것을 깨닫게 되었습니다. 저는 iOS 개발자가 되는 것이 가장 가까운 목표이기 때문에 iOS 관련 스터디를 진행하고 싶었는데, 제 주변에 자주 교류하는 개발자들 중 iOS 개발자가 거의 없습니다. 제 주변...","categories": ["Weekly"],
        "tags": [],
        "url": "/weekly/Weekly_1/",
        "teaser": null
      },{
        "title": "[Week 2] 22.03.19 - 22.03.25",
        "excerpt":"[Week 2] 22.03.19 - 22.03.25 이번 주는 바쁜 주였습니다… 지난 금요일 쏘카 코딩테스트가 있었고, 오늘 금요일에는 트래블월렛 코딩테스트와 동아리 YAPP 면접이 있었습니다. 주말에는 라인 코딩테스트와 CJ 지원서 마감이 있네요. 상당히 정신없는 일주일을 보내고 있는 것 같습니다. 코딩테스트 Tree 이번 주에는 대부분 코딩테스트를 대비해서 문제를 풀었습니다. 과 동기 민석이형이 공유해준 문제...","categories": ["Weekly"],
        "tags": [],
        "url": "/weekly/Weekly_2/",
        "teaser": null
      },{
        "title": "[코딩테스트] 라인 - iOS 개발자",
        "excerpt":"[코딩테스트] 라인 - iOS 개발자 오늘은 라인 코딩테스트를 진행했습니다. 대부분 자잘한 조건이 많이 붙은 구현 문제였고, 제 생각에는 엄청 복잡한 알고리즘은 쓰이지 않은 것 같습니다. 시간에 비해 문제 개수가 많은 편이라 조금 걱정했었는데, 테스트 케이스만 고려했을때에는 6문제 중 5문제를 해결하였습니다. 하지만 테스트 이후 오픈채팅방에서 다른분들과 풀이를 맞춰보고 반례를 적용해보니 모두...","categories": ["ETC"],
        "tags": [],
        "url": "/etc/etc_7/",
        "teaser": null
      },{
        "title": "[백준] 9655.돌 게임 (Swift)",
        "excerpt":"[백준] 9655.돌 게임 (Swift) 클릭해서 문제 바로가기 문제 돌 게임은 두 명이서 즐기는 재밌는 게임이다. 탁자 위에 돌 N개가 있다. 상근이와 창영이는 턴을 번갈아가면서 돌을 가져가며, 돌은 1개 또는 3개 가져갈 수 있다. 마지막 돌을 가져가는 사람이 게임을 이기게 된다. 두 사람이 완벽하게 게임을 했을 때, 이기는 사람을 구하는 프로그램을...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_12/",
        "teaser": null
      },{
        "title": "[백준] 11726.2×n 타일링 (Swift)",
        "excerpt":"[백준] 11726.2×n 타일링 (Swift) 클릭해서 문제 바로가기 문제 2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오. 아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다. 입력 첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000) 출력 첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로...","categories": ["BOJ"],
        "tags": [],
        "url": "/boj/BOJ_13/",
        "teaser": null
      },{
        "title": "[회고] App Store 첫 개인 앱 등록",
        "excerpt":"[회고] App Store 첫 개인 앱 등록 오늘은 드디어 App Store 에 처음으로 제가 혼자서 만든 앱을 등록했습니다. SwiftUI 를 이용해 만든 개인 구독 관리 서비스인데.. 처음 기획한것보다는 훨씬 적은 기능의 모델로 등록하게 되었습니다. 사실 3주 전과 기능적인 사항을 크게 수정하지는 않았지만, 지원서 작성, 코딩테스트 등등.. 이런저런 바쁜 일이 많았어서...","categories": ["//ETC"],
        "tags": [],
        "url": "/etc/etc_8/",
        "teaser": null
      },{
        "title": "[Week 2] 22.03.26 - 22.04.01",
        "excerpt":"[Week 2] 22.03.26 - 22.04.01 이번 주도 정말 바쁘게 지나갔네요! 그동안 계획없이 공부하고 취업준비를 했던 것이 후회가 되서 이번주부터는 계획을 세우고 학습을 진행하려고 노력했습니다. 면접, 필기테스트 등 예상하지 못했던 이벤트들이 생겨서 평소 안하던 CS 공부를 시작하기도 했고 본격적으로 iOS 개발을 더 깊게 알아보기 위해 강의도 구매했고… 여튼 이번주에 학습한 내용들...","categories": ["Weekly"],
        "tags": [],
        "url": "/weekly/Weekly_3/",
        "teaser": null
      },{
        "title": "[Swift] ARC (Automatic Reference Counting)",
        "excerpt":"[Swift] ARC (Automatic Reference Counting) 앱의 메모리 사용량을 추적하고 관리 어떠한 클래스 인스턴스가 더 이상 필요하지 않을 때 인스턴스에 할당된 메모리 자동해제 Reference Type 인 클래스 인스턴스에만 적용. Value Type 에는 해당되지 않음 동작 방식 클래스가 새 인스턴스를 생성할때마다 ARC 는 메모리 할당 인스턴스의 메모리가 해제되면 더 이상 해당 인스턴스에...","categories": ["Swift"],
        "tags": [],
        "url": "/swift/swift-7/",
        "teaser": null
      },{
        "title": "[후기] iOS 면접 & 필기시험 후기",
        "excerpt":"[후기] 면접 &amp; 필기시험 후기 지난 토요일, 그리고 월요일에 각각 라인 필기시험과 다른 스타트업의 면접을 보고 왔습니다. 둘 다 CS 지식을 필요로 한 경험이었고, CS 공부는 진짜 열심히 해야겠구나 라고 생각하게 해준 경험이었습니다. 라인 필기시험 라인 필기시험은 굉장히 어려웠습니다. (물론 공부 많이하신 분들은 그러지 않았을지도 모릅니다.) OS, 네트워크, 자료구조, SQL...","categories": ["//ETC"],
        "tags": [],
        "url": "/etc/etc_9/",
        "teaser": null
      }]
