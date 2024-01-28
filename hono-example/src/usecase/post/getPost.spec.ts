import { getPost } from "./getPost";
import * as driver from "../../driver/post/getPost";

describe("Get Post", () => {
  it("should return a post", async () => {
    let post = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto",
    };

    jest.spyOn(driver, "fetchPost").mockResolvedValue(post);

    const expected = post;
    const actual = await getPost("1");

    expect(actual).toEqual(expected);
  });
});
