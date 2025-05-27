package com.codility.java;

/**
 * The trick is that you don't need to check all possible slices, only those of length 2 and 3
 * This is from pure math, if avg of 2 or 3 would always be less or equal to all other consecutive slices
 * That's why we can solve this problem with O(n) time
 * Just calculate minAvg for all 2 and 3 for each loop, and just don't forget to calculate minAvg2 for last 2 elements
 *
 * https://app.codility.com/demo/results/trainingTDH2N5-BKG/
 */
class Solution {
    public int solution(int[] arr) {
        int pos = 0;
        double min = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length-2; i++){
            double avg2 = (arr[i] + arr[i+1]) / 2d;
            double avg3 = (arr[i] + arr[i+1] + arr[i+2]) / 3d;
            double minAvg = Math.min(avg2, avg3);
            if (min > minAvg){
                min = minAvg;
                pos = i;
            }
        }
        // check last 2
        double avg2 = (arr[arr.length-1] + arr[arr.length-2]) / 2d;
        if (min > avg2){
            pos = arr.length-2;
        }
        return pos;
    }
}

class Test {
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("1 => " + s.solution(new int[]{4, 2, 2, 5, 1, 5, 8}));
    }
}