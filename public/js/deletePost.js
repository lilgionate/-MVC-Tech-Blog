const deletePost = async (e) => {
    e.preventDefault();
    const urlString = window.location.toString().split('/');
    const postId = urlString[4];

    try {
    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    // const data = await response.json()
    if (response.ok) {
        alert('Post Deleted')
        document.location.replace('/dashboard');
    } else {
        alert(`I'm sorry but I've ran into an issue while attempting to delete your post.`);
    }
} catch (error) {
    console.error('Error deleting post:', error);
    alert('An error occurred while deleting the post.');
  }
}

$('#delete-post').click(deletePost);