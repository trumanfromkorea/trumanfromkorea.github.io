---
title: "[프로그래머스] 가장 먼 노드 (Swift, Java)"
date: 2022-03-05T00:00:00z
categories: Programmers
---

## [프로그래머스] 가장 먼 노드 (Swift, Java)

[클릭해서 문제 바로가기](https://programmers.co.kr/learn/courses/30/lessons/49189)

## 문제

n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

## 이해

### 1. BFS

일단 문제를 읽고 1번 노드와 모든 노드간의 거리를 구해야했기 때문에 가장 가까운 노드부터 탐색하는 BFS 를 이용해야겠다고 생각했습니다. 

노드의 탐색은 BFS 를 이용하면 비교적 간단하게 구현할 수 있지만, 가장 먼 노드의 개수를 알아야 했기 때문에 노드간의 거리를 계산하는 것이 문제의 핵심이라고 생각했습니다.

### 2. 거리 계산

거리계산을 위해 각 노드마다 1번 노드로부터의 거리를 계산하여 저장하기로 했습니다. 먼저 1번 노드는 자기 자신이기 때문에 거리를 0 으로 초기화시켜줍니다.

1번 노드부터 BFS 를 시작한다면 1번 노드와 인접한 노드들을 모두 방문하기 때문에 1번 노드에 인접한 노드들은 모두 거리가 1이 됩니다. 이를 dist 1 이라고 하겠습니다.

다음으로는 dist 1 노드들과 인접한 노드들을 탐색하게 됩니다. 이 노드들과 1번 노드와의 거리는 2가 됩니다.

이후 탐색하는 노드들과 1번 노드와의 거리는 이전에 탐색했던 노드와 1번 노드와의 거리에 1을 더한 값이라는 것을 알 수 있습니다.

모든 노드들과 1번 노드와의 거리를 구한 다음, 가장 큰 값이 몇 번 등장하는지 세어주면 정답이 도출됩니다.

## 전체 코드

### Swift

```swift
import Foundation

func solution(_ n: Int, _ edge: [[Int]]) -> Int {
    var visited: [Bool] = [Bool](repeating: false, count: n)
    var distanceList: [Int] = []

    let listGraph: [[Int]] = generateGraph(n, edge)
    BFS(n, 0, listGraph, &visited, &distanceList)

    return findMaxCount(distanceList)
}

func findMaxCount(_ distanceList: [Int]) -> Int {
    var count: Int = 0
    let max: Int = distanceList.max()!

    for d in distanceList {
        if d == max {
            count += 1
        }
    }

    return count
}

func generateGraph(_ n: Int, _ edge: [[Int]]) -> [[Int]] {
    var _listGraph: [[Int]] = [[Int]](repeating: [], count: n)

    for e in edge {
        let i: Int = e[0] - 1
        let j: Int = e[1] - 1

        _listGraph[i].append(j)
        _listGraph[j].append(i)
    }

    return _listGraph
}

func BFS(_ n: Int, _ x: Int, _ listGraph: [[Int]], _ visited: inout [Bool], _ distanceList: inout [Int]) {
    var queue: Queue = Queue<Int>()
    var distQueue: Queue = Queue<Int>()

    visited[x] = true

    queue.enqueue(x)
    distQueue.enqueue(0)

    while !queue.isEmpty {
        let now: Int = queue.dequeue()!
        let dist: Int = distQueue.dequeue()!

        distanceList.append(dist)

        for i in 0 ..< listGraph[now].count {
            let next: Int = listGraph[now][i]

            if !visited[next] {
                visited[next] = true
                queue.enqueue(next)
                distQueue.enqueue(dist + 1)
            }
        }
    }
}

struct Queue<T> {
    private var queue: [T] = []

    public var count: Int {
        return queue.count
    }

    public var isEmpty: Bool {
        return queue.isEmpty
    }

    public mutating func enqueue(_ element: T) {
        queue.append(element)
    }

    public mutating func dequeue() -> T? {
        return isEmpty ? nil : queue.removeFirst()
    }
}
```


### Java

```java
import java.util.*;

class Solution {
    private boolean[] visited;
    private ArrayList<ArrayList<Integer>> listGraph = new ArrayList<>();
    private ArrayList<Integer> distanceList = new ArrayList<>();

    public int solution(int n, int[][] edge) {

        initGraph(n);
        generateGraph(n, edge);
        BFS(n, 0);

        return findMaxCount();
    }

    // 모든 노드와 1번 노드의 거리 중 가장 큰 값의 개수
    int findMaxCount() {
        int max = Collections.max(this.distanceList);
        int count = Collections.frequency(this.distanceList, max);

        return count;
    }

    // 입력값을 토대로 그래프를 인접리스트 형태로 만드는 메소드
    void generateGraph(int n, int[][] edge) {
        this.visited = new boolean[n];

        for (int[] e : edge) {
            int i = e[0] - 1;
            int j = e[1] - 1;

            this.listGraph.get(i).add(j);
            this.listGraph.get(j).add(i);
        }
    }

    // 그래프 초기화 함수
    void initGraph(int n) {
        for (int i = 0; i < n; i++) {
            this.listGraph.add(new ArrayList<>());
        }
    }

    void BFS(int n, int x) {
        Queue<Integer> queue = new LinkedList<>();
        Queue<Integer> distance = new LinkedList<>(); // 거리 저장

        this.visited[x] = true;

        queue.add(x);
        distance.add(0); // 첫번째는 0으로 초기화

        while (!queue.isEmpty()) {
            int now = queue.poll();
            int dist = distance.poll();

            this.distanceList.add(dist);

            for (int i = 0; i < this.listGraph.get(now).size(); i++) {
                int next = this.listGraph.get(now).get(i);

                if (!visited[next]) {
                    this.visited[next] = true;
                    queue.add(next);
                    distance.add(dist + 1); // 이전 노드의 거리값보다 1을 더해준다
                }
            }

        }
    }
}
```

## TIL

### 프로그래머스 메모리초과

그래프 탐색 문제를 풀 때 대부분 인접행렬로 구현하는것이 익숙해서 그렇게 하는 편입니다. 해당 문제를 처음 풀 때도 인접행렬로 구현하였으나 테스트케이스 8,9 번에서 메모리초과가 발생했습니다. 

동기 형 말로는 그래프 문제를 인접행렬로 풀면 메모리나 시간초과가 발생하는 경우가 많으니 인접리스트로 해결하는게 더 효율적이라고 합니다. 

생각해보면 노드의 개수가 많아질수록 낭비되는 공간이 더 많을테니 당연한 얘기겠죠.. 시간복잡도도 인접리스트가 더 효율적이니 앞으로는 인접리스트로 구현하는 버릇을 들여야겠습니다.

## 마무리

오랜만에 코딩테스트 문제를 푸는거라 못풀면 어떡하지 걱정이 앞섰는데, 비록 메모리초과 때문에 한 번에 해결하지는 못했지만 풀이 방식이 틀린건 아니었어서 다행이네요.

코로나 때문에 정신도 없고 이런저런 일이 많았어서 최근에 스터디를 꾸준히 진행하지 못했는데, 다시 알고리즘 문제 푸는것에도 집중해야겠네요.

3월달이 벌써 일주일 정도가 지나갔는데 열심히 한번 가보겠습니다. 아자아자 화이팅!