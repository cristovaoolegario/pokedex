import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render welcome ', () => {
    render(<App/>);

    const welcomeText = screen.getByRole('heading')
    const paragraph = screen.getByText('Digite o nome ou a ID do pokemon!')

    expect(welcomeText).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
  })

})
