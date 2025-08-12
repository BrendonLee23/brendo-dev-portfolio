import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactSheet } from '../src/components/contactSheet';
import { LanguageProvider } from '../src/contexts/LanguageContext';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jest = require('jest-mock');

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

test('envia o formulário de contato com sucesso', async () => {
  renderWithProvider(<ContactSheet open={true} onOpenChange={() => {}} />);
  fireEvent.change(screen.getByPlaceholderText(/nome/i), { target: { value: 'Brendo Moreira' } });
  fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'brendo@email.com' } });
  fireEvent.change(screen.getByPlaceholderText(/telefone/i), { target: { value: '11999999999' } });
  fireEvent.mouseDown(screen.getAllByText(/other matters/i).find(el => el.tagName === 'SPAN' && el.parentElement?.getAttribute('role') === 'combobox')!);
  fireEvent.click(screen.getByText(/Developer job proposal/i));
  fireEvent.change(screen.getByPlaceholderText(/mensagem/i), { target: { value: 'Olá, quero contratar!' } });

  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: async () => ({}),
  } as Response);

  fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
  expect(
    await screen.findByText((content) =>
      content.toLowerCase().includes('enviando') ||
      content.toLowerCase().includes('enviado') ||
      content.toLowerCase().includes('sucesso')
    )
  ).toBeInTheDocument();
});