import styled from 'styled-components/macro'

export default function HomePage() {
  return (
    <Wrapper>
      <h2>INSIDE JOB</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: var(--background_dark);
`
