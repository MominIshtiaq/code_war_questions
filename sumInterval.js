//Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

/* sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030 */

let q1 = [
    [1, 4],
    [6, 10],
    [3, 5]
 ]

function sumIntervals(intervals) {
    if (intervals.length === 0) {
          return 0;
    }
  
    intervals.sort((a, b) => a[0] - b[0]);

    console.log(intervals)

    const mergedIntervals = [];
    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];

    console.log(`current Start ${currentStart}`)
    console.log(`current End ${currentEnd}`)

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        console.log(`start ${start}, end ${end}`)

        if (start <= currentEnd) {
            currentEnd = Math.max(currentEnd, end);
            console.log(currentEnd)
        } else {
            mergedIntervals.push([currentStart, currentEnd]);
            currentStart = start;
            currentEnd = end;

            console.log(mergedIntervals)
            console.log(`Current Start ${currentStart}, Current End ${currentEnd}`)
        }
    }

    mergedIntervals.push([currentStart, currentEnd]);
    console.log(mergedIntervals)

    const totalLength = mergedIntervals.reduce((sum, [start, end]) => sum + (end - start), 0);

    return totalLength;
}

console.log(sumIntervals(q1))