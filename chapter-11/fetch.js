//Simulate Data Fetching
function simulateDataFetch(data, delay, shoulFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shoulFail) {
        reject('Error: Failed to fetch data');
      } else {
        resolve(data);
      }
    }, delay);
  })
}

function fetchDataWithCallback(successCallback, errorCallback) {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  simulateDataFetch({ message: "Callback Data" }, delay)
    .then(successCallback)
    .catch(errorCallback);
}

fetchDataWithCallback(
  (data) => console.log("Callback Success:", data),
  (error) => console.log("Callback Error:", error)
);

function fetchDataWithPromise() {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  simulateDataFetch({ message: "Promise Data" }, delay)
    .then((data) => console.log("Promise Success:", data))
    .catch((error) => console.log("Promise Error:", error));
}

fetchDataWithPromise();

async function fetchDataWithAsyncAwait() {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  try {
    const data = await simulateDataFetch({ message: "Async/Await Data" }, delay);
    console.log("Async/Await Success:", data);
  } catch(error) {
    console.log("Async/Await Error:", error);
  }
}

fetchDataWithAsyncAwait();

async function simulateError() {
  const delay = Math.floor(Math.random() * 2000) + 1000;

  fetchDataWithCallback(
    (data) => console.log("Callback Success:", data),
    (error) => console.log("Callback Error:", error)
  );

  simulateDataFetch({ message: "Promise Data" }, delay, true)
    .then((data) => console.log("Promise Success:", data))
    .catch((error) => console.log("Promise Error:", error));

  try {
    const data = await simulateDataFetch({ message: "Async/Await Data" }, delay, true);
    console.log("Async/Await Success:", data);
  } catch (error) {
    console.log("Async/Await Error:", error);
  }
}

simulateError();
