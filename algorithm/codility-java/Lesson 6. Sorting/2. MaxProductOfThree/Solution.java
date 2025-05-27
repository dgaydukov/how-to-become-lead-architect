package com.codility.java;

import java.util.Arrays;

/**
 * Simple solution: First sort
 * If array is all negative or positive, just return product of 3 last elements
 * If it mixed, keep in mind that product of 2 negatives in the beginning may be larger than product of 2 last elements
 *
 * https://app.codility.com/demo/results/trainingDBNWUQ-WYZ/
 */
class Solution {
    public int solution(int[] arr) {
        Arrays.sort(arr);
        int l = arr.length;
        if (arr[0] > 0 || arr[l-1] < 0){
            return arr[l-1] * arr[l-2] * arr[l-3];
        }
        int p = arr[l-2] * arr[l-3];
        int _p = arr[0] * arr[1];
        if (p < _p){
            p = _p;
        }
        return p * arr[l-1];
    }
}

class Test {
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("60 => " + s.solution(new int[]{-3,1,2,-2,5,6}));
        System.out.println("180 => " + s.solution(new int[]{-3,1,2,-2,5,6,-10}));
        System.out.println("-120 => " + s.solution(new int[]{-5, -6, -4, -7, -10}));
    }
}