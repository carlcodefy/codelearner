package main

import (
	"fmt"
)

func main() {
	var arr = [5]int{12, 34, 54, 56, 12}
	var slce = arr[2:4]
	fmt.Println(slce)
	fmt.Println(len(slce))
	fmt.Println(cap(slce))
}
