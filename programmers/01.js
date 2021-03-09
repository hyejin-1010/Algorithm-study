// 두 개 뽑아서 더하기
function solution(numbers) {
    const result = numbers.reduce((acc, number, index) => {
        for (let i = (index + 1); i < numbers.length; i ++) {
            const sum = number + numbers[i];
            if (!acc.some(data => data === sum)) {
                acc.push(sum);
            }
        }
        return acc;
    }, []);
    result.sort((a, b) => {
        if (a > b) { return 1; }
        if (b > a)  { return -1; }
        return 0;
    })
    return result;
}
