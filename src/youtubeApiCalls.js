let url;
fetch(url)
  .then((res) => res.json())
  .then((output) => {
    const data = output;
    console.log(data);
  });
