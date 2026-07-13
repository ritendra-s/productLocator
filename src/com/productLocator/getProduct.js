async  function getPost() {
    const response  = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    )

    const post = await response.json();

    console.log(post);
}

getPost();