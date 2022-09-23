import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
function ErrorMessage({error}) {
  return (
    <section className='errorMessageContainer'>
      <div className='errorMessageHeader'>
        <ErrorOutlineIcon
          sx={{ color: '#fafafa', fontSize: 30 }}
        />
        <h1>Error</h1>
      </div>
      <p>{error}. Please try again later.</p>
    </section>
  )
}

export default ErrorMessage;