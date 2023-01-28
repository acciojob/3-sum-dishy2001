function threeSum(arr, target) {
  //your code here
	const array = arr.sort();
	let diff = Math.abs(target - 0);
	let ans = 0
	for(let i = 0 ; i < array.length ;i++){
		let j = i+1;
		let t = target - array[i]+array[j];
		let s = j+1;
		let e = array.length;
		while(s < e){
			let mid = e - (e-s)/2;
			if(array[e] <= t){
				d = Math.abs(t-e);
				if(d < diff) {
					diff = d
					ans = array[i]+array[j]+array[e];
				};
				s = mid+1;
			}
			else if(array[e] >= t){
				d = Math.abs(t-e);
				if(d < diff) {
					diff = d
					ans = array[i]+array[j]+array[e];
				};
				e = mid-1;
			}
			else if(array[e] === t){
				ans = array[i]+array[j]+array[e];
				break;
			}
		}
	}
}

module.exports = threeSum;
