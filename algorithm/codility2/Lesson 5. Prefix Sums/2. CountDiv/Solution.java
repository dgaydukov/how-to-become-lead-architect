package com.codility.java;

/**
 * Seems simple, but there is a catch.
 * Similar to Lesson 3. FrogJmp. Also looks like easy task, you just iterate and count all divisor
 * But this is a trick, if you just go with this naive approach, you get 50%, because of speed
 * So you need to think about faster approach
 * https://app.codility.com/demo/results/trainingXYXUMS-Z9T/
 */
class Solution {
    public int solution(int a, int b, int k) {
        int count = 0;
        for (int i = a; i <= b; i++){
            if (i % k == 0){
                count++;
            }
        }
        return count;
    }
}

/**
 * Smart solution
 * https://app.codility.com/demo/results/trainingSPKAPC-8UE/
 */
class Solution {
    public int solution(int a, int b, int k) {
        int count = (b - a) / k;
        if (a < k){
            count = b / k;
        }
        if (a % k == 0 || b % k == 0) {
            count++;
        }
        return count;
    }
}

/**
 * Simpler and shorter way
 * https://app.codility.com/demo/results/trainingTRFE7Y-GG8/
 */
class Solution {
    public int solution(int a, int b, int k) {
        int count = b/k - a/k;
        if (a % k == 0) {
            count++;
        }
        return count;
    }
}


class Test{
    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println("3 => "+ s.solution(6,11,2));
        System.out.println("1 => "+ s.solution(0, 0, 11));
        System.out.println("8 => "+ s.solution(0, 14, 2));
        System.out.println("7 => "+ s.solution(0, 13, 2));
        System.out.println("2 => "+ s.solution(11, 14, 2));
        System.out.println("7 => "+ s.solution(2, 14, 2));
        System.out.println("20 => "+ s.solution(11, 345, 17));
    }
}