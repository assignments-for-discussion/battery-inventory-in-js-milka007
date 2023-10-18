const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let healthy = 0;
  let exchange = 0;
  let failed = 0;
  
  for (const capacity of presentCapacities) {
    const rated_capacity = 120; // Rated capacity of a new battery
    const soh = (capacity / rated_capacity) * 100;
    
    if (soh > 80) {
      healthy++;
    } else if (soh >= 63) {
      exchange++;
    } else {
      failed++;
    }
  }

  return {
    healthy,
    exchange,
    failed
  };
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  const counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
  console.log(counts);
}

testBucketingByHealth();
