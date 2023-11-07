async function getJSON(data) {
    try {
      const response = await fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEYAIzaSyBD6i3mFT2s3H5SA8KUCjlxRpchgJ2KA7g", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const data = { username: "example" };
  getJSON(data);