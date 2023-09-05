import React from 'react'

const AbilityContent = ({ html }: { html: string | undefined }) => {
  return (
    <>
      {html ? (
        <div
          className='markdown-body'
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      ) : (
        '暂无介绍'
      )}
    </>
  )
}

export default AbilityContent
