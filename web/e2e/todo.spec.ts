import { expect, test } from '@playwright/test';

import { url } from './utils/url';

test('TODO画面に遷移して、TODOを入力すると入力したTODOをみることができる', async ({
  page,
}) => {
  await page.goto(url);
  const todoPageLink = page.getByText('Todo');
  await expect(todoPageLink).toHaveAttribute('href', '/todo');
  await todoPageLink.click();
  await expect(page).toHaveURL(/.*todo/);

  await page.getByLabel('TODO:').fill('Clean');
  await page.keyboard.press('Enter');

  expect(await page.getByRole('textbox').nth(1).inputValue()).toEqual('Clean');
});

test('TODO画面に遷移して、TODOを削除できる', async ({ page }) => {
  await page.goto(url);
  const todoPageLink = page.getByText('Todo');
  await expect(todoPageLink).toHaveAttribute('href', '/todo');
  await todoPageLink.click();
  await expect(page).toHaveURL(/.*todo/);

  await page.getByLabel('TODO:').fill('Clean');
  await page.keyboard.press('Enter');

  const deleteButton = page.getByRole('button', { name: 'delete item' });
  await deleteButton.click();

  await expect(page.getByText('Clean')).toBeHidden();
});

test('TODO画面に遷移して、TODOを編集できる', async ({ page }) => {
  await page.goto(url);
  const todoPageLink = page.getByText('Todo');
  await expect(todoPageLink).toHaveAttribute('href', '/todo');
  await todoPageLink.click();
  await expect(page).toHaveURL(/.*todo/);

  await page.getByLabel('TODO:').fill('Clean');
  await page.keyboard.press('Enter');

  await page.getByRole('checkbox').first().check();

  await expect(page.locator('.completed')).toContainText('1');
});
