function roundRobin(jobs, slice, index) {
  let time = 0;
  while (jobs[index] > 0) {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i] <= slice) {
        time += jobs[i];
        jobs[i] = 0;
        if (i == index) return time;
      } else {
        time += slice;
        jobs[i] -= slice;
      }
    }
  }
}