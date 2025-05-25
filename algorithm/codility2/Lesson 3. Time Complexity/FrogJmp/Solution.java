package com.codility.java;

/**
 * Here we don't need any loops or complex computation, just divide difference into steps
 * But since it's integer, we need to round up, so we use % - to caclulate if there is remainder, and if it's we add 1
 */
class Solution {
    public int solution(int x, int y, int d) {
        int diff = y - x;
        int r = diff / d;
        if (diff % d != 0){
            r++;
        }
        return r;
    }
}