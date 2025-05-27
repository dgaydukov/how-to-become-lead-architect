package com.codility.java;

/**
 * Pretty straighforward task, similar to BinaryGap, we don't need any additional data structures
 * just simple loop would do the job, because we have only 2 types of cars (east, west)
 * If we have multiple types, we have to use HashTable, but for 2 only 2 variables are enough
 * This task can be moved into lesson 1
 * https://app.codility.com/demo/results/training6GQ3FP-5M8/
 *
 * But if we have like 10 or more types of car (for example positive is moving east, negative west) we could use HashTable data structure
 * to keep track of all types of car
 */
class Solution {
    public int solution(int[] arr) {
        long count = 0, east = 0;
        for (int i = 0; i < arr.length; i++){
            if (arr[i] == 0){
                east++;
            } else {
                count += east;
            }
        }
        if (count > 1_000_000_000){
            return -1;
        }
        return (int) count;
    }
}


class Test{
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("5 => "+ s.solution(new int[]{0,1,0,1,1}));
    }
}