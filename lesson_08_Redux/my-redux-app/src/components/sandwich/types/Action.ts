export type Action = 
| {type: "sandwich/addBread", payload: string }
| {type: "sandwich/addCheese", payload: string }
| {type: "sandwich/addBacon", payload: string }
| {type: "sandwich/addSalat", payload: string }
| {type: "sandwich/reset" }
