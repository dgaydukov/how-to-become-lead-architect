/**
 * This is pure mathematical task, but anyway we can program it to solve on any numbers
 *
 * A living cell replicates itself during 1 minute.
 * We put one cell into 3-litre jar, and after 1 hour it was full.
 * After what time, the just would be full, if we put their 10 cells.
 *
 *
 * Solution:
 * At first we can think about very simple solution, just divide one hour on 10 and get 6 minutes. But this is wrong number.
 * Let's try to calculate how the jar of 3 litre would be fullet
 * 1-st minute 1 => 2 living cells
 * 2-nd minute 2 => 4 living cells
 * 3-rd minute 4 => 8 living cells
 * 4-th minute 8 => 16 living cells
 * 5-th minute 16 => 32 living cells
 * ...
 * n-th minute n => 2**n living cells
 *
 * As you can see every minute number of living cells doubling.
 * Realizing this fact, we can solve this quiz now
 * First let's calcuate the volume of the cell
 * 2**60 * v = 3;
 * v = 3 / 2**60;
 * v = 2.6 * 10**-18 litres;
 *
 * So as you see, the cell is pretty small. But actually we don't even need this information to find out answer.
 * All we need to do is to make 2 equations
 *
 * 2**60 * v = 3
 * 10**x * v = 1
 * (v is volume)
 * 2**60 / 10**x = 3
 * 10**x = 2**60/3
 * x = Math.log10(2**60/3) = 17.5
 *
 * Answer: 17.5
 */