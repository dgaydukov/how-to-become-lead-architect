package com.codility.java;

/**
 * Simple and straightforward solution
 * You can either sort or use HashTable, below we use hashtable it's even faster then sorting, but requires additional memory
 * https://app.codility.com/demo/results/trainingRBNXFX-CFF/
 */
class Solution {
    public int solution(int[] arr) {
        int[] map = new int[2_000_000+1];
        int distinct = 0;
        for (int i = 0; i < arr.length; i++){
            int v = 1_000_000 + arr[i];
            if (map[v] == 0){
                distinct++;
            }
            map[v]++;
        }
        return distinct;
    }
}

class Test {
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("3 => " + s.solution(new int[]{2,1,1,2,3,1}));
    }
}