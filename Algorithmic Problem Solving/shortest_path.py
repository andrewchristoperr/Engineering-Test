class Graph:
    def __init__(self, size) -> None:
        self.graph = [[0 for _ in range(size)] for _ in range(size)]
        self.size = size

    def addEdgeWeight(self, start, dest, weight):
        self.graph[start][dest] = weight
    
    def printGraph(self):
        for i in self.graph:
            print(i)

    def findAllPath(self, start, end):
        paths = []
        self.DFSUtil(start, end, 0, [], paths)
        return paths
        
    def DFSUtil(self, current, end, total_weight, path, paths):
        if current == end:
            path.append(current)
            paths.append((total_weight, path[:]))
            return

        for i in range(self.size):
            if self.graph[current][i] > 0 and i not in path:
                self.DFSUtil(i, end, total_weight + self.graph[current][i], path + [current], paths)

    def findShortestPath(self, start, end):
        paths = self.findAllPath(start, end)
        shortest_path = min(paths, key=lambda x: x[0])
        return shortest_path

graph = Graph(4)
graph.addEdgeWeight(0, 1, 3)
graph.addEdgeWeight(0, 2, 3)
graph.addEdgeWeight(1, 2, 2)
graph.addEdgeWeight(1, 3, 1)
graph.addEdgeWeight(2, 3, 2)
graph.printGraph()
shortest_path_weight, shortest_path_nodes = graph.findShortestPath(0, 3)
print("Shortest Path Weight:", shortest_path_weight)
print("Shortest Path Nodes:", shortest_path_nodes)
