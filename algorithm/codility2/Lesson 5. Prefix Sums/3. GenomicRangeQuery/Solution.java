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

class Test {
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("[2, 4, 1] => " + Arrays.toString(s.solution("CAGCCTA", new int[]{2, 5, 0}, new int[]{4, 5, 6})));
        System.out.println("[1] => " + Arrays.toString(s.solution("A", new int[]{0}, new int[]{0})));
    }
}