package com.codility.java;

import java.util.Arrays;

/**
 * The solution is simple, but you need to know the trick. We can get triangle only for consecutive numbers
 * Once you know the trick, just sort and iterate, and you will know if you have triangle or not
 *
 * https://app.codility.com/demo/results/trainingMS5NBE-CRT/
 */
class Solution {
    public int solution(int[] arr) {
        Arrays.sort(arr);
        for(int i = 0; i < arr.length - 2; i++){
            long a = arr[i];
            long b = arr[i+1];
            long c = arr[i+2];
            if (a + b > c && a + c > b && b + c > a){
                return 1;
            }
        }
        return 0;
    }
}

class Test {
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("1 => " + s.solution(new int[]{10,2,5,1,8,20}));
        System.out.println("0 => " + s.solution(new int[]{10,50,5,1}));
    }
}