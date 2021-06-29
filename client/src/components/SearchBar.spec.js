
  import {render, screen} from '@testing-library/react'
  import SearchBar from './SearchBar'

  describe('SearchBar', ()=>{
    it('renders', ()=>{
      render(<SearchBar/>)
      expect(screen.getByText('SearchBar')).toBeInTheDocument()
    })
  })
  