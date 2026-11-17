class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        for i in haystack:
            if needle in haystack:
                return haystack.find(needle)
                break
                
            else:
                    return -1
        