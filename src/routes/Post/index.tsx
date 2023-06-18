import BlogLayout from "../../components/BlogLayout";
import PostH2Body from "../../components/PostH2Body";
import PostHeader from "../../components/PostHeader";
import PostImageBody from "../../components/PostImageBody";
import PostParagraphBody from "../../components/PostParagraphBody";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum eos autem fugit praesentium sapiente esse culpa suscipit eius ullam nisi fugiat consequuntur labore accusamus, velit ratione error assumenda maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, adipisci quis libero magni expedita velit blanditiis laborum perferendis, quidem voluptatum sequi assumenda ipsa provident exercitationem molestias? Iusto, esse. Est, perferendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo ea officia soluta! Veritatis delectus inventore iste vitae rem maxime porro impedit. Totam illum necessitatibus tenetur velit suscipit beatae ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo ea officia soluta! Veritatis delectus inventore iste vitae rem maxime porro impedit. Totam illum necessitatibus tenetur velit suscipit beatae ea?";

export default function Post() {
  return (
    <BlogLayout>
      <PostHeader props={{ header: "Header Level 1", subheader: text }} />
      <PostH2Body props={{ header: "Header Level 2", text }} />
      <PostImageBody props={{}} />
      <PostParagraphBody props={{ text }} />
      <PostH2Body props={{ header: "Header Level 2", text }} />
    </BlogLayout>
  );
}

//TODO:
// Create a data file that loops through all the props and renders the components
// Ensure that it creates a custom route for each with React Router
