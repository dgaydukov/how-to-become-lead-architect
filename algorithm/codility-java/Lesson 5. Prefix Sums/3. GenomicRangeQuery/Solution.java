package com.codility.java;

import java.util.Arrays;

/**
 * O(n**2) solution with 75% due to performance. It works, but there are better options using prefix sums.
 * Look into "break' statement. It adds performance. Without it total score would be 62, but with it, total score is 75%
 * As you see small improvements are always useful.
 * https://app.codility.com/demo/results/training3ZX24C-V5P/
 */
class Solution {
    public int[] solution(String str, int[] arr1, int[] arr2) {
        int[] s = new int[str.length()];
        for (int i = 0; i < str.length(); i++) {
            s[i] = switch (str.charAt(i)) {
                case 'A' -> 1;
                case 'C' -> 2;
                case 'G' -> 3;
                case 'T' -> 4;
                default -> 0;
            };
        }
        int[] res = new int[arr1.length];
        for (int i = 0; i < arr1.length; i++) {
            int min = 4;
            for (int j = arr1[i]; j <= arr2[i]; j++) {
                if (min > s[j]) {
                    min = s[j];
                }
                if (min == 1){
                    break;
                }
            }
            res[i] = min;
        }
        return res;
    }
}


/**
 * Advanced solution: using prefix sum for each ACGT symbol it's own array
 * By doing this, we can determine how many letters ACGT in given range in constant O(1) time
 * For example in range 2-5, we have 2C and 1G. So prefix sum algo is very helpful here
 *
 * https://app.codility.com/demo/results/training7ZQAGK-SDZ/
 */
class Solution {
    public int[] solution(String str, int[] arr1, int[] arr2) {
        int len = str.length() + 2;
        int[] A = new int[len];
        int[] C = new int[len];
        int[] G = new int[len];
        int[] T = new int[len];
        int a = 0, c = 0, g = 0, t = 0;
        for (int i = 0; i < str.length(); i++) {
            switch (str.charAt(i)) {
                case 'A' -> a++;
                case 'C' -> c++;
                case 'G' -> g++;
                case 'T' -> t++;
            };
            A[i+1] = a;
            C[i+1] = c;
            G[i+1] = g;
            T[i+1] = t;
        }
        int[] res = new int[arr1.length];
        for (int i = 0; i < arr1.length; i++) {
            int numberOfA = A[arr2[i]+1]-A[arr1[i]];
            int numberOfC = C[arr2[i]+1]-C[arr1[i]];
            int numberOfG = G[arr2[i]+1]-G[arr1[i]];
            int numberOfT = T[arr2[i]+1]-T[arr1[i]];

            if (numberOfA > 0){
                res[i] = 1;
            } else if (numberOfC > 0) {
                res[i] = 2;
            } else if (numberOfG > 0) {
                res[i] = 3;
            } else if (numberOfT > 0) {
                res[i] = 4;
            }
        }
        return res;
    }
}

class Test {
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("[2, 4, 1] => " + Arrays.toString(s.solution("CAGCCTA", new int[]{2, 5, 0}, new int[]{4, 5, 6})));
        System.out.println("[1] => " + Arrays.toString(s.solution("A", new int[]{0}, new int[]{0})));
    }
}