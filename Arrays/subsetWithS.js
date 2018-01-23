const numbers = [2, 1, 2, 4, 3, 5, 2, 6];
const s = 14;
const sums = Array.from({length: s + 1}).fill(false);

sums[0] = true;

for (const number of numbers) {
     for(let sum = s; sum >= 0; sum -= 1){
         if(sums[sum]){
        const newSum = sum + number;
        if (newSum > s) {
           continue;
        }
            sums[newSum] = true;  
        }
     }   
}
console.log(sums[s]);
