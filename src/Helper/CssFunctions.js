export const observer = (counterSectionRef, onViewFn, threshold = 0.5) => {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onViewFn(); // Trigger animation when the section is in view
          observerInstance.unobserve(entry.target); // Unobserve to prevent re-triggering
        }
      });
    },
    { threshold: threshold }
  );

  // Start observing the target element
  if (counterSectionRef.current) {
    observer.observe(counterSectionRef.current);
  }

  // Clean up observer on component unmount
  return () => {
    if (counterSectionRef.current) {
      observer.unobserve(counterSectionRef.current);
    }
  };
};
export const runCounterAnimation = (setter, target = 100, speed = 50) => {
  let currentCount = 0;
  const increment = Math.ceil(target / speed);

  const updateCounter = () => {
    if (currentCount < target) {
      currentCount += increment;
      setter(currentCount);
      setTimeout(updateCounter, 5); // Adjust speed
    } else {
      setter(target); // Ensure it reaches the target count
    }
  };

  updateCounter();
};
export const convertNumberIntoK = (number) => {
  const n = number > 999 ? Math.floor(number / 1000) : number;
  return n;
};
