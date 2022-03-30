import React from 'react'
import { StylesProvider, Container, Chip } from '@material-ui/core'
import './Home.css'
import GalleryRecipies from '../gallery-recipes/GalleryRecipies'

function home() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <StylesProvider injectFirst>
      <Container>
        <div className="label-btns">
          <Chip
            size="medium"
            label="All recipes"
            color="primary"
            clickable
            onClick={handleSubmit}
          />

          <Chip size="medium" label="Soups" clickable onClick={handleSubmit} />

          <Chip size="medium" label="Pastas" clickable onClick={handleSubmit} />

          <Chip size="medium" label="Salads" clickable onClick={handleSubmit} />
        </div>
        <GalleryRecipies />
      </Container>
    </StylesProvider>
  )
}

export default home
