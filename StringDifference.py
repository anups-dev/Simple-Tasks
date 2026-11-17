class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        for i in range(len(t)):
            if t[i] not in s:
                return t[i]