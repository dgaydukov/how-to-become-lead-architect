package com.codility.java;

/**
 * Strange that this is average complexity, because in my opinion it's the simplest out of 4
 * You just discard all negatives, than use hashtable and turn array into hashtable
 * Then you just iterate over hashtable and return first missing value
 * You can also use sort, but it would add time complexity to O(n*long(n))
 * https://app.codility.com/demo/results/trainingW394S8-VR7/
 */
class Solution {
    public int solution(int[] arr) {
        int[] map = new int[1_000_001];
        for (int i = 0; i < arr.length; i++){
            int v = arr[i];
            if (v > 0){
                map[v]++;
            }
        }
        for (int i = 1; i < map.length; i++){
            if (map[i] == 0){
                return i;
            }
        }
        return -1;
    }
}


class Test{
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("4 => "+ s.solution(new int[]{1, 2, 3}));
        System.out.println("1 => "+ s.solution(new int[]{-1, -3}));
        System.out.println("1 => "+ s.solution(new int[]{-1000000, 1000000}));
    }
}