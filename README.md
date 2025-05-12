# rqlive-server
A low-latency, synchronized server for stage/crowd interactions. MAX-MSP embeddable

## Function A: Broadcasting actions over socket.io
---
"action broadcast"
---
```mermaid
flowchart
	1("node.JS server in Max/MSP") -->|"broadcast over socket.io"| 2("\nclient")
	style 1 fill:#60d0ff
	style 2 fill:#ffa4f1
	2 -.-> 3{"is latency low enough?"}
	style 3 fill:#ffe7e7
	3 ==>|"yes"| 981870["\nexecute action"]
	style 981870 fill:#ffe0e0
```

## Function B: endpoint registration
