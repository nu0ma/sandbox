import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Index } from '@/components/Index';
import { todoExample } from '~/mocks/data/todo';

const setup = () => render(<Index />);

describe('Index Page', () => {
  test('モーダルのボタンを押してデータが取得できる', async () => {
    setup();
    const btn = screen.getByText('Open Modal');
    userEvent.click(btn);
    expect(await screen.findByText('Modal Body'));
    const RequestBtn = screen.getByText('Request API');
    userEvent.click(RequestBtn);
    expect(await screen.findByText(todoExample.title));
  });
});
