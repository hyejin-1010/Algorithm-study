// 다리를 지나는 트럭
// 문제: https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
    let seconds = 1;
    let trucks = [];
    let currentWeight = 0;
    let finish = 0;
    const totalLength = truck_weights.length;
    
    while (finish !== totalLength) {
        const firstWeightTruck = truck_weights[0];
        if ((currentWeight + firstWeightTruck) <= weight) {
            currentWeight += firstWeightTruck;
            trucks.push({ weight: firstWeightTruck, length: 1 });
            truck_weights.splice(0, 1);
        }
        
        trucks = trucks.reduce((acc, truck) => {
            truck.length++;
            if (truck.length > bridge_length) {
                currentWeight -= truck.weight;
                finish++;
            } else { acc.push(truck); }
            return acc;
        }, []);        
        seconds++;
    }
    return seconds;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
