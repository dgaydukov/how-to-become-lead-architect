package com.codility.java;

/**
 * Bad solution with brute force iteration
 * total score 62% because of O(n**2)
 * https://app.codility.com/demo/results/trainingYQVGZM-DTZ/
 */
class Solution {
    public int solution(int[] arr) {
        int count = 0;
        final int MAX = 10_000_000;
        for (int i = 0; i < arr.length; i++){
            long e = (long)arr[i] + i;
            for (int j = i+1; j < arr.length; j++){
                long s = j - (long)arr[j];
                if (e >= s){
                    count++;
                }
                if (count > MAX){
                    return -1;
                }
            }
        }
        return count;
    }
}

class Test {
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("11 => " + s.solution(new int[]{1,5,2,1,4,0}));
        System.out.println("3 => " + s.solution(new int[]{1, 1, 1}));
        System.out.println("2 => " + s.solution(new int[]{1, 2147483647, 0}));

    }
}