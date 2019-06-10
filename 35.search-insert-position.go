/*
 * @lc app=leetcode id=35 lang=golang
 *
 * [35] Search Insert Position
 */
func searchInsert(nums []int, target int) int {
    for i, val := range nums {
		if val >= target {
			return i
		}
	}
	return len(nums)
}

