import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import App from './App';

describe('App', () => {
  it('should render page elements ', () => {
    render(<App />);

    const welcomeText = screen.getByRole('heading')
    const paragraph = screen.getByText('Digite o nome ou a ID do pokemon!')
    const input = screen.getByRole('textbox')
    const submitButton = screen.getByRole('button')

    expect(welcomeText).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('should render Buscar when page is not loading', () => {
    render(<App />);

    const buscarText = screen.getByText('Buscar')

    expect(buscarText).toBeInTheDocument()
  })

  it('should do noting when there is no typed pokemon', () => {
    render(<App />);
    userEvent.click(screen.getByRole('button'))

    const buscarText = screen.getByText('Buscar')

    expect(buscarText).toBeInTheDocument()
  })


  it('should render Carregando.... when page is loading', () => {
    render(<App />);
    userEvent.type(screen.getByRole('textbox'), 'pikachu')
    userEvent.click(screen.getByRole('button'))

    const buscarText = screen.getByText('Carregando....')
    expect(buscarText).toBeInTheDocument()
  })

})
