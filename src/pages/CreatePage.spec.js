
  import {render, screen} from '@testing-library/react'
  import CreatePage from './CreatePage'

  describe('CreatePage', ()=>{
    it('renders', ()=>{
      render(<CreatePage/>)
      expect(screen.getByText('CreatePage')).toBeInTheDocument()
    })
  })
  