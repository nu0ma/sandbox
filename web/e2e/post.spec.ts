import { expect, test } from '@playwright/test';

import { url } from './utils/url';

test('Postページに遷移すると、URLのIDの記事データを取得できる', async ({
  page,
}) => {
  const id = 1;

  await page.goto(url);
  const postPageLink = page.getByText('Post');
  await expect(postPageLink).toHaveAttribute('href', `/post/${id}`);
  await postPageLink.click();
  await expect(page).toHaveURL(url + `/post/${id}`);

  await expect(
    page.getByText(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    )
  ).toBeVisible();
});
