export const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    return res.json();
};
