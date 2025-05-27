# Solution

There are 4 ways how we can solve it:
1. Using HashTable - we invert array where values would be keys, then iterate once and for each new key we set value to 1, if value already in hashtable we set it back to 0. In the end only one value would be in hashtable. Time complexity is O(n), but space complexity is O(n) - because we use additional data structure.
2. Brute force iteration. We use 2 loops, second start from next index. In we found match, we update both values to -1. In the end only 1 value would be remained in original array, all others would be -1. Space complexity is O(1) - we don't use any additional space, but time complexity is O(n^2).
3. Sort array, then iterate, in this case once array is sorted, you just iterate once and you will find desirable value. This solution with `Arrays.sort` perform 100% in codility simulator.
4. `Hack` - Use logic `XOR` the idea is that all duplicates would turn into 0