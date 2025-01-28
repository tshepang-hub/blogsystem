
class BlogUser {
    constructor(username, fullName) {
      this.username = username;
      this.fullName = fullName;
      this.posts = [];
    }
  
    createPost(title, content) {
      // create a new blog post and add 
      const newPost = new BlogPost(title, content, this.username);
      this.posts.push(newPost);
      console.log(`Post titled "${title}" created by ${this.username}`);
    }
  
    editPost(postTitle, newContent) {
      // find the post by title and update it
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].title === postTitle) {
          this.posts[i].content = newContent;
          console.log(`Post titled "${postTitle}" has been updated.`);
          return;
        }
      }
    }
  
    deletePost() {
      // remove and log the last post
      const removedPost = this.posts.pop();
      console.log(`Post titled "${removedPost.title}" has been deleted.`);
    }
  
    displayPosts() {
      // display all posts 
      for (let i = 0; i < this.posts.length; i++) {
        const post = this.posts[i];
        console.log(
          `Title: ${post.title}, Author: ${post.author}, Date: ${post.createdAt}`
        );
        console.log(`Content: ${post.content}`);
      }
    }
  }
  
  class BlogPost {
    constructor(title, content, author) {
      this.title = title;
      this.content = content;
      this.author = author;
      this.createdAt = new Date();
    }
  }
  
  // create two BlogUser instances
  const user1 = new BlogUser("Tshepang", "Baloyi");
  const user2 = new BlogUser("Travis", "Scott");
  // user 1 creates multiple posts
  user1.createPost(
    "my first blog",
    "starting my coding journey. follow along for tips and tricks."
  );
  user1.createPost(
    "another blog",
    "new updates added to my project. check them out!"
  );
  
  // user 2 creates multiple posts
  user2.createPost(
    "bryson's blog",
    "latest trends in music production. what's hot?"
  );
  user2.createPost(
    "more from bryson",
    "how my latest track came together. behind the scenes look."
  );
  
  // display all posts by both users
  console.log("user 1 posts:");
  user1.displayPosts();
  console.log("user 2 posts:");
  user2.displayPosts();
  
  // edit a post by user 1
  user1.editPost(
    "my first blog",
    "updated: deeper dive into coding basics with useful tips."
  );
  
  // display all posts by user 1 after editing
  console.log("user 1 posts after editing:");
  user1.displayPosts();
  
  // delete a post by user 1
  user1.deletePost();
  
  // display all posts by user 1 after deleting
  console.log("user 1 posts after deleting:");
  user1.displayPosts();
  